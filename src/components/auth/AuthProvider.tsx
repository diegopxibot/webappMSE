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

  useEffect(() => {
    try {
      // Verifica autenticação ao carregar
      const authCookie = getCookie('mse-auth')
      const auth = window.localStorage.getItem('mse-auth')
      const userData = window.localStorage.getItem('mse-user')
      
      console.log('Auth Status:', { authCookie, localAuth: auth, userData })
      
      if (authCookie === 'true' && auth === 'true' && userData) {
        const user = JSON.parse(userData)
        setUser(user)
        if (pathname === '/login') {
          router.push('/dashboard')
        }
      } else if (!pathname?.startsWith('/login')) {
        console.log('Redirecionando para login por falta de autenticação')
        router.push('/login')
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error)
      handleLogout()
    } finally {
      setLoading(false)
    }
  }, [pathname, router])

  const handleLogin = (email: string, name: string) => {
    try {
      const userData = { email, name }
      window.localStorage.setItem('mse-auth', 'true')
      window.localStorage.setItem('mse-user', JSON.stringify(userData))
      setUser(userData)
      router.push('/dashboard')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      handleLogout()
    }
  }

  const handleLogout = async () => {
    try {
      // Limpa localStorage
      window.localStorage.removeItem('mse-auth')
      window.localStorage.removeItem('mse-user')
      
      // Limpa cookie fazendo uma requisição para o servidor
      await fetch('/api/auth/logout', { method: 'POST' })
      
      setUser(null)
      router.push('/login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  if (loading) {
    return null // ou um componente de loading
  }

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 