'use client'

import { useState, useEffect } from 'react'
import type { Tag } from '@/types/template'

interface TagManagerProps {
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  category?: string
}

export default function TagManager({
  selectedTags,
  onTagsChange,
  category
}: TagManagerProps) {
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadTags()
  }, [category])

  const loadTags = async () => {
    try {
      const url = category
        ? `/api/tags?category=${category}`
        : '/api/tags'
      
      const response = await fetch(url)
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

  const handleTagClick = (slug: string) => {
    const newTags = selectedTags.includes(slug)
      ? selectedTags.filter(t => t !== slug)
      : [...selectedTags, slug]
    
    onTagsChange(newTags)
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 bg-gray-700 rounded-full"
          />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        {error}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <button
          key={tag.id}
          onClick={() => handleTagClick(tag.slug)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedTags.includes(tag.slug)
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {tag.name}
          {tag.count > 0 && (
            <span className="ml-2 text-xs opacity-70">
              {tag.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
} 