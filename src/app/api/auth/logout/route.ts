import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('API: Iniciando processo de logout')
    
    const response = NextResponse.json({ success: true })

    // Remove o cookie de autenticação
    response.cookies.set('mse-auth', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0 // Expira imediatamente
    })

    console.log('API: Cookie de autenticação removido')
    return response
  } catch (error) {
    console.error('API: Erro ao fazer logout:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Erro ao fazer logout' 
    }, { 
      status: 500 
    })
  }
} 