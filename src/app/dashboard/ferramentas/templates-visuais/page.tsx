'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import TemplateCard from '@/components/templates/TemplateCard'
import TemplateFilters from '@/components/templates/TemplateFilters'
import type { Template } from '@/types/template'

export default function TemplatesPage() {
  const searchParams = useSearchParams()
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([])

  useEffect(() => {
    loadTemplates()
  }, [])

  const loadTemplates = async () => {
    try {
      const response = await fetch('/api/templates')
      if (!response.ok) throw new Error('Erro ao carregar templates')
      const data = await response.json()
      setTemplates(data)
      setFilteredTemplates(data)
    } catch (error) {
      console.error('Erro ao carregar templates:', error)
      setError('Não foi possível carregar os templates')
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = ({ search, style, color }: { search: string; style: string; color: string }) => {
    let filtered = templates

    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(template =>
        template.name.toLowerCase().includes(searchLower) ||
        template.category.toLowerCase().includes(searchLower)
      )
    }

    if (style) {
      filtered = filtered.filter(template => template.style === style)
    }

    if (color) {
      filtered = filtered.filter(template => template.color === color)
    }

    setFilteredTemplates(filtered)
  }

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
        <div className="text-6xl mb-4">😢</div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Ops! Algo deu errado
        </h1>
        <p className="text-gray-400 max-w-md mb-4">
          {error}
        </p>
        <button
          onClick={loadTemplates}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          <aside className="lg:sticky lg:top-6 h-fit">
            <TemplateFilters
              onFilterChange={handleFilterChange}
              initialFilters={{
                search: searchParams.get('q') || '',
                style: searchParams.get('style') || '',
                color: searchParams.get('color') || ''
              }}
            />
          </aside>

          <main>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  Templates Visuais
                </h1>
                <p className="text-gray-400">
                  {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} encontrado{filteredTemplates.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            ) : (
              <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Nenhum template encontrado
                </h2>
                <p className="text-gray-400 max-w-md">
                  Tente ajustar os filtros para encontrar o que procura
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
} 