'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import TemplateCard from '@/components/templates/TemplateCard'
import TemplateFilters from '@/components/templates/TemplateFilters'
import type { Template } from '@/types/template'

const styles = ['modern', 'minimalist', 'artistic']
const colors = ['blue', 'purple', 'orange', 'green', 'red']

const generateTemplates = (category: string): Template[] => {
  return styles.flatMap(style =>
    colors.map(color => ({
      id: `${category}-${style}-${color}`,
      name: `Template ${style} ${color}`,
      category,
      style,
      color,
      imageUrl: `/templates/${category}/template-${category}-${style}-${color}-1.png`,
      previewUrl: `/templates/${category}/template-${category}-${style}-${color}-1.png`,
      canvaUrl: 'https://canva.com',
      downloadUrl: `/templates/${category}/template-${category}-${style}-${color}-1.png`,
      suggestedCaption: 'Sugestão de legenda para o template',
      tags: []
    }))
  )
}

export default function CategoryPage() {
  const { category } = useParams()
  const [filters, setFilters] = useState({
    search: '',
    style: '',
    color: '',
    tags: [] as string[]
  })

  const templates = generateTemplates(category as string)
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
    // Implementar lógica de favoritos
    console.log('Favoritar:', templateId)
  }

  const handleShare = async (templateId: string) => {
    // Implementar lógica de compartilhamento
    console.log('Compartilhar:', templateId)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 capitalize">
          Templates de {category?.replace(/-/g, ' ')}
        </h1>
        <p className="text-gray-400">
          Escolha um template para personalizar
        </p>
      </div>

      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <TemplateFilters
            onFilterChange={setFilters}
            category={category as string}
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
                Nenhum template encontrado com os filtros selecionados
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 