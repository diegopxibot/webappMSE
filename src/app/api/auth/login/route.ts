import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_USER = {
  email: "pastordiegopeixe@gmail.com",
  password: "d16po8r.",
  name: "diegopxi"
}

export async function POST(request: NextRequest) {
  try {
    console.log('Recebendo requisição de login...')
    const body = await request.json()
    console.log('Dados recebidos:', { email: body.email })

    const { email, password } = body

    // Verifica as credenciais
    if (email === VALID_USER.email && password === VALID_USER.password) {
      console.log('Login bem sucedido para:', email)
      
      const response = NextResponse.json({
        success: true,
        name: VALID_USER.name
      })

      // Define o cookie de autenticação
      response.cookies.set('mse-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      })

      return response
    }

    console.log('Login falhou para:', email)
    return new NextResponse(JSON.stringify({ 
      success: false,
      error: 'Email ou senha inválidos'
    }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Erro ao processar login:', error)
    return new NextResponse(JSON.stringify({ 
      success: false,
      error: 'Erro ao verificar credenciais'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
} 