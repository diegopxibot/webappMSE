'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { API_BASE_URL } from '@/lib/config'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
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
        login(data.user.email, data.user.name)
      } else {
        console.error('Erro retornado pelo servidor:', data.error)
        setError(data.error || 'Erro ao fazer login')
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err)
      setError('Erro ao conectar ao servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0B2E] to-black">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl w-96 border border-cyan-500/20">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login MSE Premium</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded bg-white/5 border-cyan-500/20 text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded bg-white/5 border-cyan-500/20 text-white"
              required
            />
          </div>

          {error && (
            <div className="mb-4 text-red-400 text-sm text-center bg-red-900/20 p-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded hover:from-cyan-600 hover:to-blue-600 transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
} 