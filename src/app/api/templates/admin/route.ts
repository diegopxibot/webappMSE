import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

// GET - Lista todos os templates (incluindo inativos)
export async function GET() {
  try {
    const { db } = await connectToDatabase()
    
    const templates = await db
      .collection('templates')
      .find({})
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

// POST - Cria um novo template
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { db } = await connectToDatabase()
    
    const template = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const result = await db.collection('templates').insertOne(template)

    return NextResponse.json({ 
      id: result.insertedId,
      ...template 
    })
  } catch (error) {
    console.error('Erro ao criar template:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 