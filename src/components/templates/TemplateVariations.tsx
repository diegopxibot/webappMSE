import { useState } from 'react'
import Image from 'next/image'
import type { Template } from '@/types/template'

interface TemplateVariationsProps {
  template: Template
  onSelect: (variation: { id: string; imageUrl: string }) => void
}

export default function TemplateVariations({ template, onSelect }: TemplateVariationsProps) {
  const [selectedId, setSelectedId] = useState(template.id)

  const handleSelect = (id: string, imageUrl: string) => {
    setSelectedId(id)
    onSelect({ id, imageUrl })
  }

  const variations = [
    {
      id: template.id,
      name: template.name,
      imageUrl: template.imageUrl,
      style: template.style
    },
    ...(template.variations || [])
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {variations.map((variation) => (
        <button
          key={variation.id}
          onClick={() => handleSelect(variation.id, variation.imageUrl)}
          className={`relative aspect-[9/16] rounded-lg overflow-hidden border-2 transition-all ${
            selectedId === variation.id
              ? 'border-primary scale-[1.02]'
              : 'border-transparent hover:border-primary/50'
          }`}
        >
          <Image
            src={variation.imageUrl}
            alt={variation.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <p className="text-sm text-white text-left">
              Estilo: {variation.style}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
} 