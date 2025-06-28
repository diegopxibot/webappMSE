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
      const userData = window.localStorage.getItem('mse-user')
      
      if (authCookie === 'true' && userData) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        
        if (pathname === '/login') {
          router.push('/dashboard')
        }
      } else {
        setUser(null)
        window.localStorage.removeItem('mse-user')
        
        if (!pathname?.startsWith('/login') && !pathname?.startsWith('/api/')) {
          router.push('/login')
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

      const userData = { email, name }
      window.localStorage.setItem('mse-user', JSON.stringify(userData))
      setUser(userData)
      router.push('/dashboard')
    } catch (error) {
      console.error('Erro no login:', error)
      await handleLogout()
      throw error
    }
  }

  const handleLogout = async () => {
    try {
      window.localStorage.removeItem('mse-user')
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
      router.push('/login')
    } catch (error) {
      console.error('Erro no logout:', error)
      setUser(null)
      window.localStorage.clear()
      router.push('/login')
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