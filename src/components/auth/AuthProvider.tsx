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

  const checkAuth = async () => {
    try {
      const userData = window.localStorage.getItem('mse-user')
      
      if (userData) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        
        if (pathname === '/login') {
          router.push('/dashboard')
        }
      } else {
        setUser(null)
        if (!pathname?.startsWith('/login') && !pathname?.startsWith('/api/')) {
          router.push('/login')
        }
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
      handleLogout()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [pathname])

  const handleLogin = async (email: string, name: string) => {
    try {
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