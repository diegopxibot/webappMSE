import { useState } from 'react'
import Image from 'next/image'
import type { Template } from '@/types/template'
import TemplateVariations from './TemplateVariations'

interface PreviewModalProps {
  template: Template
  isOpen: boolean
  onClose: () => void
}

export default function PreviewModal({ template, isOpen, onClose }: PreviewModalProps) {
  const [currentImage, setCurrentImage] = useState(template.imageUrl)

  if (!isOpen) return null

  const handleVariationSelect = ({ imageUrl }: { id: string; imageUrl: string }) => {
    setCurrentImage(imageUrl)
  }

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(template.suggestedCaption)
      // Você pode adicionar um toast/notificação aqui
    } catch (err) {
      console.error('Erro ao copiar legenda:', err)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="bg-dark-light rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold text-white">{template.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-6">
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
              <Image
                src={currentImage}
                alt={template.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={template.canvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#00C4CC] text-white rounded-lg hover:bg-[#00B3B9] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.82 5.59L12 12.41l-6.82-6.82c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 14l-6.82 6.82c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 15.41l6.82 6.82c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 14l6.82-6.82c.39-.39.39-1.02 0-1.41-.39-.38-1.02-.38-1.41 0z"/>
                </svg>
                Editar no Canva
              </a>

              <button
                onClick={handleCopyCaption}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copiar Legenda
              </button>

              <a
                href={template.downloadUrl}
                download
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PNG
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-3">Variações</h4>
              <TemplateVariations
                template={template}
                onSelect={handleVariationSelect}
              />
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3">Legenda Sugerida</h4>
              <div className="bg-dark rounded-lg p-4">
                <p className="text-gray-300 whitespace-pre-wrap">
                  {template.suggestedCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 