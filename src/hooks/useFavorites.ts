import { useState, useEffect } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import type { Template } from '@/types/template'

export function useFavorites() {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadFavorites()
    } else {
      setFavorites([])
      setLoading(false)
    }
  }, [user])

  const loadFavorites = async () => {
    try {
      const response = await fetch('/api/templates/favorites')
      if (!response.ok) throw new Error('Erro ao carregar favoritos')
      const data = await response.json()
      setFavorites(data)
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleFavorite = async (templateId: string) => {
    if (!user) return

    const isFavorite = favorites.some(fav => fav.id === templateId)
    const action = isFavorite ? 'remove' : 'add'

    try {
      const response = await fetch('/api/templates/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId, action })
      })

      if (!response.ok) throw new Error('Erro ao atualizar favorito')

      if (action === 'add') {
        // Atualiza o estado local otimisticamente
        const template = await fetch(`/api/templates?id=${templateId}`).then(res => res.json())
        setFavorites(prev => [...prev, template])
      } else {
        setFavorites(prev => prev.filter(fav => fav.id !== templateId))
      }
    } catch (error) {
      console.error('Erro ao atualizar favorito:', error)
      // Aqui você pode adicionar uma notificação de erro
    }
  }

  const isFavorite = (templateId: string) => {
    return favorites.some(fav => fav.id === templateId)
  }

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite
  }
} 