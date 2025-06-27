import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { rateLimiter } from './lib/rate-limit'

// Rotas que não precisam de autenticação
const publicRoutes = ['/login']

export function middleware(request: NextRequest) {
  // Verifica se a rota atual é pública
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // Se for rota pública, permite o acesso
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Verifica se o usuário está autenticado
  const isAuthenticated = request.cookies.get('mse-auth')

  // Se não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Configuração de quais rotas o middleware deve verificar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 