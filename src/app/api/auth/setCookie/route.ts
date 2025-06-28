import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { auth } = await request.json()

    const response = NextResponse.json({ success: true })

    // Define o cookie de autenticação
    response.cookies.set('mse-auth', String(auth), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    })

    return response
  } catch (error) {
    console.error('Erro ao definir cookie:', error)
    return NextResponse.json({ success: false, error: 'Erro ao definir cookie' }, { status: 500 })
  }
} 