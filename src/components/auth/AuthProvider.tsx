'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type User = {
  email: string
  name: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, name: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Função para verificar cookie
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()
    return null
  }

  // Função para verificar autenticação
  const checkAuth = async () => {
    try {
      const authCookie = getCookie('mse-auth')
      const auth = window.localStorage.getItem('mse-auth')
      const userData = window.localStorage.getItem('mse-user')
      
      console.log('Estado atual de autenticação:', {
        authCookie,
        localAuth: auth,
        userData,
        pathname,
        currentUser: user
      })
      
      if (authCookie === 'true' && auth === 'true' && userData) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        console.log('Usuário autenticado:', parsedUser)
        
        // Só redireciona para dashboard se estiver na página de login
        if (pathname === '/login') {
          console.log('Redirecionando para dashboard')
          router.replace('/dashboard')
        }
      } else {
        console.log('Usuário não autenticado')
        setUser(null)
        // Limpa localStorage se não houver cookie
        if (auth === 'true') {
          window.localStorage.removeItem('mse-auth')
          window.localStorage.removeItem('mse-user')
        }
        // Só redireciona para login se não estiver em uma rota pública
        if (!pathname?.startsWith('/login') && !pathname?.startsWith('/api/')) {
          console.log('Redirecionando para login')
          router.replace('/login')
        }
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
      await handleLogout()
    }
  }

  useEffect(() => {
    checkAuth().finally(() => setLoading(false))
  }, [pathname])

  const handleLogin = async (email: string, name: string) => {
    try {
      console.log('Iniciando login:', { email, name })
      
      // Define o cookie através da API
      const response = await fetch('/api/auth/setCookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ auth: true }),
      })

      if (!response.ok) {
        throw new Error('Falha ao definir cookie')
      }

      // Atualiza localStorage
      const userData = { email, name }
      window.localStorage.setItem('mse-auth', 'true')
      window.localStorage.setItem('mse-user', JSON.stringify(userData))
      
      setUser(userData)
      console.log('Login bem sucedido, redirecionando...')
      
      // Força revalidação do estado de autenticação antes de redirecionar
      await checkAuth()
    } catch (error) {
      console.error('Erro no login:', error)
      await handleLogout()
      throw error
    }
  }

  const handleLogout = async () => {
    try {
      console.log('Iniciando logout')
      
      // Limpa localStorage
      window.localStorage.removeItem('mse-auth')
      window.localStorage.removeItem('mse-user')
      
      // Limpa cookie
      await fetch('/api/auth/logout', { method: 'POST' })
      
      setUser(null)
      console.log('Logout concluído')
      router.replace('/login')
    } catch (error) {
      console.error('Erro no logout:', error)
      // Força limpeza mesmo com erro
      setUser(null)
      window.localStorage.clear()
      router.replace('/login')
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  }

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 