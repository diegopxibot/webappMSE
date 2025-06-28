'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      console.log('Iniciando tentativa de login...')
      console.log('Email:', email)
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      console.log('Status da resposta:', response.status)
      const data = await response.json()
      console.log('Dados da resposta:', data)

      if (data.success) {
        console.log('Login bem sucedido, salvando dados...')
        localStorage.setItem('mse-auth', 'true')
        localStorage.setItem('mse-user', JSON.stringify({ email, name: data.name }))
        console.log('Dados salvos, redirecionando...')
        window.location.href = '/dashboard'
      } else {
        console.log('Login falhou:', data.error)
        setError(data.error || 'Email ou senha inválidos')
      }
    } catch (error) {
      console.error('Erro completo:', error)
      setError('Erro ao fazer login. Tente novamente.')
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
              <label htmlFor="email" className="sr-only">
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
              <label htmlFor="password" className="sr-only">
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
              className="w-full rounded-lg bg-gradient-to-r from-[#00FFFF] to-[#FFD700] px-8 py-3 font-medium text-[#0A0B2E] hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 