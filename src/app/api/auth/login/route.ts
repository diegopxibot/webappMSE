import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    console.log('Tentativa de login:', { email, passwordLength: password?.length })

    // Validação básica
    if (!email || !password) {
      console.log('Dados de login incompletos')
      return NextResponse.json({
        success: false,
        error: 'Email e senha são obrigatórios'
      }, { status: 400 })
    }

    // Validação das credenciais
    const validEmail = 'pastordiegopeixe@gmail.com'
    const validPassword = 'd16po8r.'

    if (email.toLowerCase() === validEmail.toLowerCase() && password === validPassword) {
      console.log('Login bem sucedido para:', email)
      return NextResponse.json({
        success: true,
        user: {
          email: validEmail,
          name: 'Pastor Diego'
        }
      })
    }

    console.log('Credenciais inválidas para:', email)
    return NextResponse.json({
      success: false,
      error: 'Email ou senha incorretos'
    }, { status: 401 })

  } catch (error) {
    console.error('Erro no processamento do login:', error)
    return NextResponse.json({
      success: false,
      error: 'Erro ao processar a solicitação. Por favor, tente novamente.'
    }, { status: 500 })
  }
} 