'use client'

import { useState, useEffect } from 'react'
import TemplateCard from '@/components/templates/TemplateCard'
import TemplateFilters from '@/components/templates/TemplateFilters'
import type { Template } from '@/types/template'

export default function FavoritosPage() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    search: '',
    style: '',
    color: '',
    tags: [] as string[]
  })

  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = async () => {
    try {
      const response = await fetch('/api/templates/favorites')
      if (!response.ok) throw new Error('Erro ao carregar favoritos')
      
      const data = await response.json()
      setTemplates(data)
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error)
      setError('Não foi possível carregar seus templates favoritos')
    } finally {
      setLoading(false)
    }
  }

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(filters.search.toLowerCase())

    const matchesStyle = !filters.style || template.style === filters.style
    const matchesColor = !filters.color || template.color === filters.color
    const matchesTags =
      !filters.tags.length ||
      filters.tags.every(tag => template.tags.includes(tag))

    return matchesSearch && matchesStyle && matchesColor && matchesTags
  })

  const handleFavorite = async (templateId: string) => {
    try {
      const response = await fetch('/api/templates/favorites', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId })
      })

      if (!response.ok) throw new Error('Erro ao remover favorito')
      
      setTemplates(prev => prev.filter(t => t.id !== templateId))
    } catch (error) {
      console.error('Erro ao remover favorito:', error)
    }
  }

  const handleShare = async (templateId: string) => {
    try {
      const response = await fetch('/api/templates/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId })
      })

      if (!response.ok) throw new Error('Erro ao compartilhar template')
      
      const { shareUrl } = await response.json()
      // Implementar lógica de compartilhamento
      console.log('URL de compartilhamento:', shareUrl)
    } catch (error) {
      console.error('Erro ao compartilhar template:', error)
    }
  }

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-64 bg-gray-700 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[9/16] bg-gray-700 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Templates Favoritos
        </h1>
        <p className="text-gray-400">
          Gerencie seus templates favoritos
        </p>
      </div>

      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <TemplateFilters
            onFilterChange={setFilters}
          />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                onFavorite={handleFavorite}
                onShare={handleShare}
              />
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                Você ainda não tem templates favoritos
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 