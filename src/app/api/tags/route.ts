import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { connectToDatabase } from '@/lib/mongodb'
import { getCachedData } from '@/lib/cache'

// GET /api/tags
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const getTags = async () => {
      const db = await connectToDatabase()
      const tags = db.collection('tags')

      const query = category ? { category } : {}
      const results = await tags
        .find(query)
        .sort({ count: -1 })
        .limit(50)
        .toArray()

      return results
    }

    const tags = await getCachedData(
      `tags:${category || 'all'}`,
      getTags,
      60 * 60 // 1 hora
    )

    return NextResponse.json(tags)
  } catch (error) {
    console.error('Erro ao buscar tags:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar tags' },
      { status: 500 }
    )
  }
}

// POST /api/tags
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email?.endsWith('@admin.com')) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { name, category } = await request.json()
    if (!name) {
      return NextResponse.json(
        { error: 'Nome da tag é obrigatório' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const tags = db.collection('tags')

    const slug = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const existingTag = await tags.findOne({ slug })
    if (existingTag) {
      return NextResponse.json(
        { error: 'Tag já existe' },
        { status: 400 }
      )
    }

    const tag = {
      name,
      slug,
      category,
      count: 0,
      createdAt: new Date()
    }

    await tags.insertOne(tag)

    return NextResponse.json(tag)
  } catch (error) {
    console.error('Erro ao criar tag:', error)
    return NextResponse.json(
      { error: 'Erro ao criar tag' },
      { status: 500 }
    )
  }
}

// DELETE /api/tags/{slug}
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email?.endsWith('@admin.com')) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const slug = request.url.split('/').pop()
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug da tag é obrigatório' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const tags = db.collection('tags')
    const templates = db.collection('templates')

    // Remove a tag dos templates
    await templates.updateMany(
      { tags: slug },
      { $pull: { tags: slug } }
    )

    // Remove a tag
    await tags.deleteOne({ slug })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao excluir tag:', error)
    return NextResponse.json(
      { error: 'Erro ao excluir tag' },
      { status: 500 }
    )
  }
} 