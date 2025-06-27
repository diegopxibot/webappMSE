'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Credenciais fixas para teste
    const VALID_EMAIL = 'admin@mse.com'
    const VALID_PASSWORD = 'admin123'

    if (formData.email === VALID_EMAIL && formData.password === VALID_PASSWORD) {
      // Simula um pequeno delay para dar feedback visual
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Salva no localStorage para manter o usuário logado
      localStorage.setItem('isLoggedIn', 'true')
      
      // Redireciona para o dashboard
      router.push('/dashboard')
    } else {
      setError('Email ou senha incorretos')
    }

    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-primary/20 bg-dark-light/50 px-4 py-3 text-white placeholder-gray-400 
            focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-lg border border-primary/20 bg-dark-light/50 px-4 py-3 text-white placeholder-gray-400 
            focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <div className="p-3 rounded-lg text-sm bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-4 bg-primary hover:bg-primary/90 text-dark font-medium 
          transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 
          focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg ${
          isLoading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
            <span className="ml-2">Entrando...</span>
          </div>
        ) : (
          'Entrar'
        )}
      </button>

      <div className="text-center text-sm text-gray-200 mt-4">
        <p>
          Email: admin@mse.com
          <br />
          Senha: admin123
        </p>
      </div>
    </form>
  )
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
} 