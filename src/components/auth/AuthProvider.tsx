'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type User = {
  email: string
  name: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Carrega o usuário do localStorage ao iniciar
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user')
      console.log('Carregando usuário do localStorage:', savedUser)
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
    } catch (error) {
      console.error('Erro ao carregar usuário:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Redireciona com base no estado de autenticação
  useEffect(() => {
    if (isLoading) return

    console.log('Estado atual:', { user, pathname })
    
    const handleRedirect = async () => {
      // Permite acesso à página inicial
      if (pathname === '/') return

      if (user && pathname === '/login') {
        console.log('Usuário logado tentando acessar /login, redirecionando para /dashboard')
        await router.push('/dashboard')
      } else if (!user && pathname.startsWith('/dashboard')) {
        console.log('Usuário não logado tentando acessar rota protegida, redirecionando para /login')
        await router.push('/login')
      }
    }

    handleRedirect()
  }, [user, pathname, router, isLoading])

  const login = async (email: string, name: string) => {
    console.log('Realizando login:', { email, name })
    const userData = { email, name }
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    await router.push('/dashboard')
  }

  const logout = async () => {
    console.log('Realizando logout')
    localStorage.removeItem('user')
    setUser(null)
    await router.push('/')
  }

  if (isLoading) {
    return null
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 