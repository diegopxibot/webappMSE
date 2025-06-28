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
  if (
    pathname.startsWith('/_next') || // Static files
    pathname.startsWith('/api/') || // API routes
    pathname.startsWith('/static/') || // Static files
    pathname.includes('.') // Files with extensions
  ) {
    return NextResponse.next()
  }

  console.log('Middleware: Verificando rota:', pathname)

  // Verifica se a rota atual é pública
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  // Se for rota pública, permite o acesso
  if (isPublicRoute) {
    console.log('Middleware: Rota pública, permitindo acesso')
    return NextResponse.next()
  }

  // Verifica se o usuário está autenticado
  const authCookie = request.cookies.get('mse-auth')
  const isAuthenticated = authCookie?.value === 'true'

  console.log('Middleware: Estado de autenticação:', {
    authCookie: authCookie?.value,
    isAuthenticated,
    pathname
  })

  // Se não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    console.log('Middleware: Usuário não autenticado, redirecionando para login')
    // Usa URL absoluta para evitar problemas em produção
    const loginUrl = new URL('/login', process.env.NEXT_PUBLIC_BASE_URL || request.url)
    return NextResponse.redirect(loginUrl)
  }

  console.log('Middleware: Usuário autenticado, permitindo acesso')
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
     * - public files (public folder)
     * - images (image files)
     * - static files
     * - files with extensions
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|images/|static/|.*\\..*$).*)',
  ],
} 