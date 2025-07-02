'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import TemplateCard from '@/components/templates/TemplateCard'
import VisualFilter from '@/components/templates/VisualFilter'

const categories = {
  'versiculos': {
    icon: '📖',
    title: 'Versículos',
    description: 'Compartilhe a Palavra de Deus com designs inspiradores'
  },
  'oracoes': {
    icon: '🙏',
    title: 'Orações',
    description: 'Momentos de conexão com Deus'
  },
  'reflexoes': {
    icon: '💭',
    title: 'Reflexões',
    description: 'Pensamentos que transformam vidas'
  },
  'convites': {
    icon: '✉️',
    title: 'Convites',
    description: 'Convide para eventos especiais da igreja'
  },
  'anuncios-culto': {
    icon: '📢',
    title: 'Anúncios de Culto',
    description: 'Divulgue os cultos e eventos da igreja'
  },
  'frases-fe': {
    icon: '🕊️',
    title: 'Frases de Fé',
    description: 'Mensagens que inspiram e fortalecem'
  },
  'datas-especiais': {
    icon: '🎉',
    title: 'Datas Especiais',
    description: 'Celebre momentos importantes'
  },
  'evangelismo-dupla': {
    icon: '🧑‍🤝‍🧑',
    title: 'Evangelismo em Dupla',
    description: 'Alcance mais pessoas juntos'
  },
  'frases-impacto': {
    icon: '💬',
    title: 'Frases de Impacto',
    description: 'Mensagens que marcam e transformam'
  }
}

// Exemplo de templates com variações (substituir por dados reais do banco/API)
const mockTemplates = [
  {
    id: '1',
    name: 'Template Moderno 1',
    imageUrl: '/templates/template1.png',
    canvaUrl: 'https://canva.com/design/template1',
    downloadUrl: '/templates/template1.png',
    suggestedCaption: '✨ Compartilhando a Palavra de Deus! 🙏\n\n#Igreja #Fé #Deus',
    previewUrl: '/templates/template1.png',
    color: 'blue',
    style: 'modern',
    variations: [
      {
        id: '1-1',
        name: 'Variação Minimalista',
        imageUrl: '/templates/template1-1.png',
        style: 'Minimalista'
      },
      {
        id: '1-2',
        name: 'Variação Artística',
        imageUrl: '/templates/template1-2.png',
        style: 'Artístico'
      }
    ]
  },
  {
    id: '2',
    name: 'Template Minimalista',
    imageUrl: '/templates/template2.png',
    canvaUrl: 'https://canva.com/design/template2',
    downloadUrl: '/templates/template2.png',
    suggestedCaption: '🙌 Louvado seja Deus! 🙏\n\n#Louvor #Adoração #Fé',
    previewUrl: '/templates/template2.png',
    color: 'purple',
    style: 'minimalist',
    variations: [
      {
        id: '2-1',
        name: 'Variação Moderna',
        imageUrl: '/templates/template2-1.png',
        style: 'Moderno'
      }
    ]
  },
  // Adicionar mais templates aqui
]

export default function CategoryPage() {
  const { category } = useParams()
  const categoryInfo = categories[category as keyof typeof categories]
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedStyle, setSelectedStyle] = useState('all')

  if (!categoryInfo) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Categoria não encontrada
          </h1>
          <Link 
            href="/dashboard/ferramentas/templates-visuais"
            className="text-primary hover:text-primary-light"
          >
            Voltar para categorias
          </Link>
        </div>
      </div>
    )
  }

  // Filtrar templates
  const filteredTemplates = mockTemplates.filter(template => {
    const colorMatch = selectedColor === 'all' || template.color === selectedColor
    const styleMatch = selectedStyle === 'all' || template.style === selectedStyle
    return colorMatch && styleMatch
  })

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Header */}
      <div className="mb-12">
        <Link 
          href="/dashboard/ferramentas/templates-visuais"
          className="inline-flex items-center text-gray-300 hover:text-white mb-6"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para categorias
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-white flex items-center gap-3">
          <span>{categoryInfo.icon}</span>
          Templates de {categoryInfo.title}
        </h1>
        <p className="text-xl text-gray-300">
          {categoryInfo.description}
        </p>
        <div className="flex space-x-2 mt-6">
          <div className="h-1 w-20 bg-primary rounded-full"></div>
          <div className="h-1 w-20 bg-secondary rounded-full"></div>
        </div>
      </div>

      {/* Filtro Visual */}
      <VisualFilter
        onColorChange={setSelectedColor}
        onStyleChange={setSelectedStyle}
      />

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            {...template}
          />
        ))}
      </div>

      {/* Mensagem quando não há templates */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            Nenhum template encontrado
          </h3>
          <p className="text-gray-400">
            Tente ajustar os filtros ou volte mais tarde para novos templates.
          </p>
        </div>
      )}
    </div>
  )
} 