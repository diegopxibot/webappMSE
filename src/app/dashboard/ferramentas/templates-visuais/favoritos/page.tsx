'use client'

import { useEffect } from 'react'
import { useFavorites } from '@/hooks/useFavorites'
import TemplateCard from '@/components/templates/TemplateCard'

export default function FavoritesPage() {
  const { favorites, loading } = useFavorites()

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!favorites.length) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
        <div className="text-6xl mb-4">💝</div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Nenhum template favorito
        </h1>
        <p className="text-gray-400 max-w-md">
          Explore nossos templates e marque seus favoritos para encontrá-los facilmente aqui!
        </p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Seus Templates Favoritos
          </h1>
          <p className="text-gray-400">
            {favorites.length} template{favorites.length !== 1 ? 's' : ''} salvo{favorites.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  )
} 