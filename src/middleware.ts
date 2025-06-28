import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rotas que não precisam de autenticação
const publicRoutes = [
  '/login',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/setCookie',
  '/_next',
  '/favicon.ico',
  '/verify-request',
  '/images',
  '/public',
  '/static'
]

export function middleware(request: NextRequest) {
  // Permite todas as requisições de API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Permite acesso a arquivos estáticos
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Verifica se a rota atual é pública
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // Se for rota pública, permite o acesso
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Verifica se o usuário está autenticado
  const authCookie = request.cookies.get('mse-auth')

  // Se não estiver autenticado e tentar acessar uma rota protegida
  if (!authCookie?.value && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Configuração de quais rotas o middleware deve verificar
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 