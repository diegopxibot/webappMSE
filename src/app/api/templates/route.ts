import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { connectToDatabase } from '@/lib/mongodb'

// GET /api/templates?category=versiculos
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const db = await connectToDatabase()
    const templates = await db.collection('templates')

    const query = category ? { category } : {}
    const results = await templates.find(query).toArray()

    return NextResponse.json(results)
  } catch (error) {
    console.error('Erro ao buscar templates:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar templates' },
      { status: 500 }
    )
  }
}

// POST /api/templates/favorite
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { templateId, action } = await request.json()
    if (!templateId || !action) {
      return NextResponse.json(
        { error: 'ID do template e ação são obrigatórios' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const users = await db.collection('users')

    if (action === 'favorite') {
      await users.updateOne(
        { email: session.user?.email },
        { $addToSet: { favoriteTemplates: templateId } }
      )
    } else if (action === 'unfavorite') {
      await users.updateOne(
        { email: session.user?.email },
        { $pull: { favoriteTemplates: templateId } }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao favoritar template:', error)
    return NextResponse.json(
      { error: 'Erro ao favoritar template' },
      { status: 500 }
    )
  }
} 