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
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Verifica autenticação ao carregar
    const auth = localStorage.getItem('mse-auth')
    const userData = localStorage.getItem('mse-user')
    
    if (auth && userData) {
      try {
        const user = JSON.parse(userData)
        setUser(user)
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
        handleLogout()
      }
    } else if (!pathname?.startsWith('/login')) {
      router.push('/login')
    }
  }, [pathname, router])

  const handleLogin = (email: string, name: string) => {
    const userData = { email, name }
    localStorage.setItem('mse-auth', 'true')
    localStorage.setItem('mse-user', JSON.stringify(userData))
    setUser(userData)
    router.push('/dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem('mse-auth')
    localStorage.removeItem('mse-user')
    setUser(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 