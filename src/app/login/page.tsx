'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, user } = useAuth()
  const router = useRouter()

  // Redireciona se já estiver autenticado
  useEffect(() => {
    if (user) {
      console.log('Login Page: Usuário já autenticado, redirecionando para dashboard')
      router.replace('/dashboard')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      console.log('Login Page: Iniciando tentativa de login com:', { email })
      
      if (!email || !password) {
        throw new Error('Email e senha são obrigatórios')
      }

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      console.log('Login Page: Resposta do servidor:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao fazer login')
      }

      if (data.success) {
        console.log('Login Page: Login bem sucedido, chamando função login')
        await login(email, data.name)
        console.log('Login Page: Função login executada com sucesso')
        // O redirecionamento será feito pelo AuthProvider
      } else {
        throw new Error(data.error || 'Email ou senha inválidos')
      }
    } catch (error) {
      console.error('Login Page: Erro durante o login:', error)
      setError(error instanceof Error ? error.message : 'Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0B2E] to-black p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-dark-light/30 backdrop-blur-lg border border-primary/10">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-heading font-bold text-white">
            MSE <span className="bg-gradient-to-r from-[#00FFFF] to-[#FFD700] bg-clip-text text-transparent">Premium</span>
          </h2>
          <p className="text-primary/80">
            Bem-vindo! Acesse sua conta premium
          </p>
        </div>

        {error && (
          <div className="mt-6 bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg backdrop-blur-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={loading}
                className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors duration-200"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                disabled={loading}
                className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors duration-200"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="relative w-full rounded-lg bg-gradient-to-r from-[#00FFFF] to-[#FFD700] px-8 py-3 font-medium text-[#0A0B2E] hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="opacity-0">Entrar</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-[#0A0B2E] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-400">
            <p>Credenciais de acesso:</p>
            <p>Email: pastordiegopeixe@gmail.com</p>
            <p>Senha: d16po8r.</p>
          </div>
        </form>
      </div>
    </div>
  )
} 