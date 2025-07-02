import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { connectToDatabase } from '@/lib/mongodb'
import { nanoid } from 'nanoid'

// POST /api/templates/share
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { templateId } = await request.json()
    if (!templateId) {
      return NextResponse.json(
        { error: 'ID do template é obrigatório' },
        { status: 400 }
      )
    }

    const shareId = nanoid(10) // Gera um ID único de 10 caracteres
    const db = await connectToDatabase()
    const shares = await db.collection('templateShares')

    await shares.insertOne({
      shareId,
      templateId,
      sharedBy: session.user?.email,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 dias
    })

    const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/templates/share/${shareId}`

    return NextResponse.json({ shareUrl })
  } catch (error) {
    console.error('Erro ao compartilhar template:', error)
    return NextResponse.json(
      { error: 'Erro ao compartilhar template' },
      { status: 500 }
    )
  }
}

// GET /api/templates/share?id=xyz
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const shareId = searchParams.get('id')

    if (!shareId) {
      return NextResponse.json(
        { error: 'ID de compartilhamento é obrigatório' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const shares = await db.collection('templateShares')
    const templates = await db.collection('templates')

    const share = await shares.findOne({ 
      shareId,
      expiresAt: { $gt: new Date() }
    })

    if (!share) {
      return NextResponse.json(
        { error: 'Link de compartilhamento inválido ou expirado' },
        { status: 404 }
      )
    }

    const template = await templates.findOne({ _id: share.templateId })
    if (!template) {
      return NextResponse.json(
        { error: 'Template não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(template)
  } catch (error) {
    console.error('Erro ao buscar template compartilhado:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar template compartilhado' },
      { status: 500 }
    )
  }
} 