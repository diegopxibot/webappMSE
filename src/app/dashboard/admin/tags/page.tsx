'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth/AuthProvider'
import type { Tag } from '@/types/template'

export default function AdminTags() {
  const router = useRouter()
  const { user } = useAuth()
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newTag, setNewTag] = useState({ name: '', category: '' })

  useEffect(() => {
    if (!user?.email?.endsWith('@admin.com')) {
      router.push('/dashboard')
      return
    }

    loadTags()
  }, [user, router])

  const loadTags = async () => {
    try {
      const response = await fetch('/api/tags')
      if (!response.ok) throw new Error('Erro ao carregar tags')
      
      const data = await response.json()
      setTags(data)
    } catch (error) {
      console.error('Erro ao carregar tags:', error)
      setError('Não foi possível carregar as tags')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTag.name) return

    try {
      const response = await fetch('/api/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTag)
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Erro ao criar tag')
      }

      setNewTag({ name: '', category: '' })
      loadTags()
    } catch (error) {
      console.error('Erro ao criar tag:', error)
      setError('Não foi possível criar a tag')
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Tem certeza que deseja excluir esta tag?')) return

    try {
      const response = await fetch(`/api/tags/${slug}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Erro ao excluir tag')
      
      loadTags()
    } catch (error) {
      console.error('Erro ao excluir tag:', error)
      setError('Não foi possível excluir a tag')
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Gerenciar Tags
      </h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nome da Tag
            </label>
            <input
              type="text"
              id="name"
              value={newTag.name}
              onChange={e => setNewTag(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-dark-light text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Digite o nome da tag..."
            />
          </div>

          <div className="flex-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Categoria (opcional)
            </label>
            <input
              type="text"
              id="category"
              value={newTag.category}
              onChange={e => setNewTag(prev => ({ ...prev, category: e.target.value }))}
              className="w-full bg-dark-light text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Digite a categoria..."
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Adicionar
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        {tags.map(tag => (
          <div
            key={tag.id}
            className="flex items-center justify-between p-4 bg-dark-light rounded-lg"
          >
            <div>
              <h3 className="font-medium">
                {tag.name}
                {tag.category && (
                  <span className="ml-2 text-sm text-gray-400">
                    {tag.category}
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-400">
                {tag.count} templates
              </p>
            </div>

            <button
              onClick={() => handleDelete(tag.slug)}
              className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 