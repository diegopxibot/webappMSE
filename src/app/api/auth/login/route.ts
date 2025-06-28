import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validação simples das credenciais
    if (email === 'pastordiegopeixe@gmail.com' && password === 'd16po8r') {
      return NextResponse.json({
        success: true,
        user: {
          email: 'pastordiegopeixe@gmail.com',
          name: 'Pastor Diego'
        }
      })
    }

    return NextResponse.json({
      success: false,
      error: 'Credenciais inválidas'
    }, { status: 401 })

  } catch (error) {
    console.error('Erro no login:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
} 