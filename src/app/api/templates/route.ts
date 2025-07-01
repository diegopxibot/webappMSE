import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    if (!category) {
      return NextResponse.json(
        { error: 'Categoria não especificada' },
        { status: 400 }
      )
    }

    const { db } = await connectToDatabase()
    
    const templates = await db
      .collection('templates')
      .find({ 
        categorySlug: category,
        active: true 
      })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(templates)
  } catch (error) {
    console.error('Erro ao buscar templates:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 