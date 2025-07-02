import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { connectToDatabase } from '@/lib/mongodb'

// GET /api/templates/favorites
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const db = await connectToDatabase()
    const users = await db.collection('users')
    const templates = await db.collection('templates')

    const user = await users.findOne({ email: session.user?.email })
    if (!user?.favoriteTemplates?.length) {
      return NextResponse.json([])
    }

    const favoriteTemplates = await templates
      .find({ id: { $in: user.favoriteTemplates } })
      .toArray()

    return NextResponse.json(favoriteTemplates)
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar favoritos' },
      { status: 500 }
    )
  }
}

// POST /api/templates/favorites
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { templateId, action } = await request.json()
    if (!templateId || !['add', 'remove'].includes(action)) {
      return NextResponse.json(
        { error: 'Parâmetros inválidos' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const users = await db.collection('users')

    if (action === 'add') {
      await users.updateOne(
        { email: session.user?.email },
        { $addToSet: { favoriteTemplates: templateId } }
      )
    } else {
      await users.updateOne(
        { email: session.user?.email },
        { $pull: { favoriteTemplates: templateId } }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao atualizar favoritos:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar favoritos' },
      { status: 500 }
    )
  }
} 