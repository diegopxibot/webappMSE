import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const { db } = await connectToDatabase()
    
    // Procura o usuário no MongoDB
    const user = await db.collection('users').findOne({
      email,
      password // Nota: Em produção, usar hash da senha
    })

    if (user) {
      return NextResponse.json({
        success: true,
        name: user.name
      })
    }

    return NextResponse.json({ 
      success: false,
      error: 'Credenciais inválidas'
    })
  } catch (error) {
    console.error('Erro ao verificar credenciais:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Erro ao verificar credenciais'
    }, { status: 500 })
  }
} 