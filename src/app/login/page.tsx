'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { API_BASE_URL } from '@/lib/config'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('Tentando fazer login com:', { email })
      
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      console.log('Resposta do servidor:', data)

      if (data.success) {
        console.log('Login bem sucedido, chamando login do AuthProvider')
        toast.success('Login realizado com sucesso!')
        login(data.user.email, data.user.name)
      } else {
        console.error('Erro retornado pelo servidor:', data.error)
        toast.error(data.error || 'Erro ao fazer login')
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err)
      toast.error('Erro ao conectar ao servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-[#0A0B2E] to-black">
      <div className="w-full max-w-[400px] bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl border border-cyan-500/20">
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Login MSE Premium</h1>
          <p className="text-cyan-200/80 text-sm">Entre para acessar sua conta</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all"
              placeholder="Seu email"
              required
              autoComplete="email"
              autoCapitalize="none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-cyan-500/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all"
              placeholder="Sua senha"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all active:scale-[0.98] ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Entrando...
              </div>
            ) : (
              'Entrar'
            )}
          </button>
        </form>
      </div>
    </div>
  )
} 