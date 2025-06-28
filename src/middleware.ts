import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rotas que não precisam de autenticação
const publicRoutes = ['/login', '/api/auth/login']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Verifica se a rota atual é pública
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  // Se for rota pública, permite o acesso
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Verifica se o usuário está autenticado
  const isAuthenticated = request.cookies.get('mse-auth')?.value === 'true'

  // Se não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Configuração de quais rotas o middleware deve verificar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 