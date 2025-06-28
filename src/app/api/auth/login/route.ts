import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_USER = {
  email: "pastordiegopeixe@gmail.com",
  password: "d16po8r.",
  name: "diegopxi"
}

export async function POST(request: NextRequest) {
  try {
    console.log('API: Recebendo requisição de login...')
    
    if (!request.body) {
      console.log('API: Corpo da requisição vazio')
      return NextResponse.json({ 
        success: false,
        error: 'Dados de login não fornecidos'
      }, { status: 400 })
    }

    const body = await request.json()
    console.log('API: Dados recebidos:', { email: body.email })

    if (!body.email || !body.password) {
      console.log('API: Email ou senha não fornecidos')
      return NextResponse.json({ 
        success: false,
        error: 'Email e senha são obrigatórios'
      }, { status: 400 })
    }

    const { email, password } = body

    // Verifica as credenciais
    if (email === VALID_USER.email && password === VALID_USER.password) {
      console.log('API: Login bem sucedido para:', email)
      
      // Cria a resposta
      const response = NextResponse.json({
        success: true,
        name: VALID_USER.name
      })

      // Define o cookie de autenticação
      response.cookies.set({
        name: 'mse-auth',
        value: 'true',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 7 * 24 * 60 * 60 // 7 dias
      })

      console.log('API: Cookie de autenticação definido')
      return response
    }

    console.log('API: Login falhou para:', email)
    return NextResponse.json({ 
      success: false,
      error: 'Email ou senha inválidos'
    }, {
      status: 401
    })
  } catch (error) {
    console.error('API: Erro ao processar login:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Erro ao verificar credenciais'
    }, {
      status: 500
    })
  }
} 