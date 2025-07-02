import { useState, useEffect, useCallback } from 'react'
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

  const isFavorite = useCallback(async (templateId: string) => {
    try {
      const response = await fetch(`/api/templates/favorites/${templateId}`)
      if (!response.ok) return false
      return true
    } catch (error) {
      console.error('Erro ao verificar favorito:', error)
      return false
    }
  }, [])

  const toggleFavorite = useCallback(async (templateId: string) => {
    try {
      setLoading(true)
      const method = await isFavorite(templateId) ? 'DELETE' : 'POST'
      
      const response = await fetch('/api/templates/favorites', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId })
      })

      if (!response.ok) throw new Error('Erro ao atualizar favorito')
      
      if (method === 'POST') {
        // Atualiza o estado local otimisticamente
        const template = await fetch(`/api/templates?id=${templateId}`).then(res => res.json())
        setFavorites(prev => [...prev, template])
      } else {
        setFavorites(prev => prev.filter(fav => fav.id !== templateId))
      }
      return method === 'POST'
    } catch (error) {
      console.error('Erro ao atualizar favorito:', error)
      return false
    } finally {
      setLoading(false)
    }
  }, [isFavorite])

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite
  }
} 