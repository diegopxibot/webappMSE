'use client'

import { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Heart, RefreshCw, Maximize2, Download, MessageCircle, Copy } from 'lucide-react'
import StoryPreviewModal from './StoryPreviewModal'

interface TemplateCardProps {
  template: {
    id: string
    title: string
    imageUrl: string
    previewUrl: string
    downloadUrl?: string
    style: string
    color: string
    suggestedCaption: string
    variations?: {
      id: string
      style: string
      imageUrl: string
      previewUrl: string
    }[]
    downloadCount?: number
    tags: string[]
  }
  onFavorite: (templateId: string) => Promise<void>
  isFavorited: boolean
}

export default function TemplateCard({ template, onFavorite, isFavorited }: TemplateCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [showVariations, setShowVariations] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showCaptionPreview, setShowCaptionPreview] = useState(false)

  const handleFavorite = async () => {
    setIsLoading(true)
    try {
      await onFavorite(template.id)
      toast.success(
        isFavorited ? 'Removido dos favoritos' : 'Adicionado aos favoritos',
        {
          icon: isFavorited ? '💔' : '💖',
          duration: 2000
        }
      )
    } catch (error) {
      toast.error('Erro ao atualizar favoritos')
    }
    setIsLoading(false)
  }

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/templates/share/${template.id}`
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Link copiado! Compartilhe com seus amigos 🚀', {
        icon: '🔗',
        duration: 3000
      })
    } catch (error) {
      toast.error('Erro ao copiar link')
    }
  }

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(template.suggestedCaption)
      toast.success('Legenda copiada para a área de transferência! 📝', {
        icon: '✨',
        duration: 2000
      })
    } catch (error) {
      toast.error('Erro ao copiar legenda')
    }
  }

  const handleDownload = async () => {
    try {
      const downloadUrl = template.downloadUrl || template.imageUrl
      const response = await fetch(downloadUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${template.title.toLowerCase().replace(/\s+/g, '-')}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      
      toast.success('Download iniciado! 🎉', {
        icon: '⬇️',
        duration: 2000
      })
    } catch (error) {
      toast.error('Erro ao fazer download')
    }
  }

  return (
    <motion.div
      className="relative group bg-gradient-to-br from-gray-900 to-[#0A0B2E] rounded-2xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      layout
    >
      {/* Imagem Principal */}
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
        <motion.div
          className="w-full h-full relative"
          layoutId={`template-${template.id}`}
        >
          <Image
            src={template.imageUrl}
            alt={template.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />

        {/* Ações Principais */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleFavorite}
            disabled={isLoading}
            className={`p-3 rounded-full backdrop-blur-md ${
              isFavorited ? 'bg-pink-500/90' : 'bg-white/20'
            } hover:bg-white/30 transition-all shadow-lg`}
          >
            <Heart className={`w-6 h-6 ${isFavorited ? 'fill-white' : ''}`} />
          </motion.button>

          {template.variations && template.variations.length > 0 && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVariations(!showVariations)}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all shadow-lg"
            >
              <RefreshCw className="w-6 h-6" />
            </motion.button>
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPreviewOpen(true)}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all shadow-lg"
          >
            <Maximize2 className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all shadow-lg"
          >
            <Share2 className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Informações do Template */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm backdrop-blur-md">
              {template.style}
            </span>
            <div 
              className="w-6 h-6 rounded-full border-2 border-white/20 shadow-lg" 
              style={{ backgroundColor: template.color }}
              title={`Cor: ${template.color}`}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Barra de Ações */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-4">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
              >
                <Download className="w-5 h-5" />
                {template.downloadCount && (
                  <span>{template.downloadCount}</span>
                )}
              </button>

              <button
                onClick={() => setShowCaptionPreview(!showCaptionPreview)}
                className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Legenda</span>
              </button>
            </div>

            <button
              onClick={handleCopyCaption}
              className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview da Legenda */}
      <AnimatePresence>
        {showCaptionPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full left-0 right-0 p-4 bg-black/90 backdrop-blur-md rounded-t-2xl mb-2 z-20"
          >
            <h4 className="text-white font-semibold mb-2">Legenda Sugerida</h4>
            <p className="text-white/80 text-sm whitespace-pre-line">
              {template.suggestedCaption}
            </p>
            <button
              onClick={handleCopyCaption}
              className="mt-3 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
            >
              Copiar Legenda
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Preview */}
      <StoryPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        template={template}
      />

      {/* Variações */}
      <AnimatePresence>
        {showVariations && template.variations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm rounded-2xl p-4 z-10"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Variações Visuais</h4>
              <button
                onClick={() => setShowVariations(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {template.variations.map((variation) => (
                <motion.div
                  key={variation.id}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-[9/16] rounded-lg overflow-hidden"
                >
                  <img
                    src={variation.imageUrl}
                    alt={`Variação ${variation.style}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <span className="absolute bottom-2 left-2 text-xs text-white bg-black/40 px-2 py-1 rounded-full backdrop-blur-md">
                    {variation.style}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 