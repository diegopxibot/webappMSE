'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Share2, Heart, RefreshCw, Maximize2 } from 'lucide-react'
import StoryPreviewModal from './StoryPreviewModal'

interface TemplateCardProps {
  template: {
    id: string
    title: string
    imageUrl: string
    previewUrl: string
    style: string
    color: string
    variations?: {
      id: string
      style: string
      imageUrl: string
      previewUrl: string
    }[]
  }
  onFavorite: (templateId: string) => Promise<void>
  isFavorited: boolean
}

export default function TemplateCard({ template, onFavorite, isFavorited }: TemplateCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [showVariations, setShowVariations] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFavorite = async () => {
    setIsLoading(true)
    try {
      await onFavorite(template.id)
      toast.success(isFavorited ? 'Removido dos favoritos' : 'Adicionado aos favoritos')
    } catch (error) {
      toast.error('Erro ao atualizar favoritos')
    }
    setIsLoading(false)
  }

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/templates/share/${template.id}`
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Link copiado para a área de transferência!')
    } catch (error) {
      toast.error('Erro ao copiar link')
    }
  }

  return (
    <motion.div
      className="relative group bg-gradient-to-br from-gray-900 to-[#0A0B2E] rounded-lg p-4 shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-4">
        <img
          src={template.imageUrl}
          alt={template.title}
          className="w-full h-full object-cover"
        />
        
        {/* Ações flutuantes */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleFavorite}
            disabled={isLoading}
            className={`p-2 rounded-full backdrop-blur-md ${
              isFavorited ? 'bg-pink-500/90' : 'bg-white/20'
            } hover:bg-white/30 transition-colors`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-white' : ''}`} />
          </motion.button>

          {template.variations && template.variations.length > 0 && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVariations(!showVariations)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </motion.button>
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPreviewOpen(true)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
          >
            <Maximize2 className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 text-white">{template.title}</h3>
      
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
          {template.style}
        </span>
        <div 
          className="w-6 h-6 rounded-full border-2 border-white/20" 
          style={{ backgroundColor: template.color }}
          title={`Cor: ${template.color}`}
        />
      </div>

      {/* Modal de Preview */}
      <StoryPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        template={template}
      />

      {/* Variações */}
      {showVariations && template.variations && (
        <div className="absolute inset-0 bg-black/90 rounded-lg p-4 z-10">
          <button
            onClick={() => setShowVariations(false)}
            className="absolute top-2 right-2 text-white/60 hover:text-white"
          >
            ✕
          </button>
          <h4 className="text-white mb-4">Variações Visuais</h4>
          <div className="grid grid-cols-2 gap-2">
            {template.variations.map((variation) => (
              <div
                key={variation.id}
                className="relative aspect-[9/16] rounded-lg overflow-hidden"
              >
                <img
                  src={variation.imageUrl}
                  alt={`Variação ${variation.style}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  {variation.style}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
} 