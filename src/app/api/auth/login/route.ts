import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_USER = {
  email: "pastordiegopeixe@gmail.com",
  password: "d16po8r.",
  name: "diegopxi"
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Verifica as credenciais
    if (email === VALID_USER.email && password === VALID_USER.password) {
      return NextResponse.json({
        success: true,
        name: VALID_USER.name
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