'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useAuth } from '@/components/auth/AuthProvider'
import { useFavorites } from '@/hooks/useFavorites'
import type { Template } from '@/types/template'
import PreviewModal from './PreviewModal'

interface TemplateCardProps {
  template: Template
  onFavorite?: (templateId: string) => void
  onShare?: (templateId: string) => void
}

export default function TemplateCard({
  template,
  onFavorite,
  onShare
}: TemplateCardProps) {
  const { user } = useAuth()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [showPreview, setShowPreview] = useState(false)
  const [showVariations, setShowVariations] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(template.suggestedCaption)
      toast.success('Legenda copiada com sucesso!', {
        icon: '📋',
        duration: 2000
      })
    } catch (err) {
      toast.error('Erro ao copiar legenda. Tente novamente.')
    }
  }

  const handleShare = async () => {
    try {
      const shareUrl = `${window.location.origin}/templates/share/${template.id}`
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Link copiado! Compartilhe com seus amigos.', {
        icon: '🔗',
        duration: 3000
      })
    } catch (err) {
      toast.error('Erro ao gerar link. Tente novamente.')
    }
  }

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!user) return
    setIsLoading(true)
    await toggleFavorite(template.id)
    setIsLoading(false)
  }

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    onFavorite?.(template.id)
  }

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onShare?.(template.id)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="group relative bg-dark-light rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[4/5] relative">
          <Image
            src={template.imageUrl}
            alt={template.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium truncate">{template.name}</h3>
            <div className="flex gap-2">
              {onFavorite && (
                <button
                  onClick={handleFavorite}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                >
                  <svg
                    className={`w-5 h-5 ${
                      template.isFavorite ? 'text-red-500 fill-current' : 'text-white'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              )}
              {onShare && (
                <button
                  onClick={handleShareClick}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {template.tags && template.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {template.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-black/40 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        template={template}
      />
    </>
  )
} 