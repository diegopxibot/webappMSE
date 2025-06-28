import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('API setCookie: Iniciando definição de cookie')
    
    if (!request.body) {
      console.log('API setCookie: Corpo da requisição vazio')
      return NextResponse.json({ 
        success: false, 
        error: 'Dados não fornecidos' 
      }, { 
        status: 400 
      })
    }

    const { auth } = await request.json()
    console.log('API setCookie: Valor de auth recebido:', auth)

    if (auth !== true) {
      console.log('API setCookie: Valor de auth inválido')
      return NextResponse.json({ 
        success: false, 
        error: 'Valor de autenticação inválido' 
      }, { 
        status: 400 
      })
    }

    const response = NextResponse.json({ success: true })

    // Define o cookie de autenticação
    response.cookies.set('mse-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 // 7 dias
    })

    console.log('API setCookie: Cookie definido com sucesso')
    return response
  } catch (error) {
    console.error('API setCookie: Erro ao definir cookie:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao definir cookie' 
    }, { 
      status: 500 
    })
  }
} 