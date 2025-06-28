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
  const { pathname } = request.nextUrl

  // Ignora requisições de assets e API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Verifica se a rota atual é pública
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  // Se for rota pública, permite o acesso
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Verifica se o usuário está autenticado
  const authCookie = request.cookies.get('mse-auth')
  const isAuthenticated = authCookie?.value === 'true'

  // Se não estiver autenticado, redireciona para o login
  if (!isAuthenticated && pathname !== '/login') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configuração de quais rotas o middleware deve verificar
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 