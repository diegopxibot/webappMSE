'use client'

import { useState } from 'react'
import Link from 'next/link'
import TemplateCard from '@/components/templates/TemplateCard'

interface Template {
  id: string
  title: string
  imageUrl: string
  previewUrl: string
  downloadUrl: string
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

const templates: Template[] = [
  {
    id: '1',
    title: "Culto de Celebração",
    imageUrl: "/templates/anuncios/celebracao.jpg",
    previewUrl: "/templates/anuncios/celebracao-preview.jpg",
    downloadUrl: "/templates/anuncios/celebracao.png",
    style: "Festivo",
    color: "#E91E63",
    suggestedCaption: "🙌 Domingo de Celebração!\n\nTema: 'Vivendo na Presença de Deus'\nHorário: 19h\nLocal: Igreja Online\n\n#CultoDeCelebração #AdoraçãoOnline #IgrejaViva",
    tags: ["Celebração", "Domingo", "Louvor"]
  },
  {
    id: '2',
    title: "Culto de Jovens",
    imageUrl: "/templates/anuncios/jovens.jpg",
    previewUrl: "/templates/anuncios/jovens-preview.jpg",
    downloadUrl: "/templates/anuncios/jovens.png",
    style: "Moderno",
    color: "#2196F3",
    suggestedCaption: "🔥 Prepare-se para uma noite incrível!\n\nCulto Jovem - Sábado às 20h\nTema: 'Geração Radical'\nMuito louvor, palavra e comunhão!\n\n#CultoJovem #JuventudeComCristo #GeraçãoDeJesus",
    tags: ["Jovens", "Sábado", "Radical"]
  },
  {
    id: '3',
    title: "Culto de Família",
    imageUrl: "/templates/anuncios/familia.jpg",
    previewUrl: "/templates/anuncios/familia-preview.jpg",
    downloadUrl: "/templates/anuncios/familia.png",
    style: "Acolhedor",
    color: "#795548",
    suggestedCaption: "👨‍👩‍👧‍👦 Domingo em Família!\n\nCulto especial para toda a família\nHorário: 18h\nTema: 'Construindo Lares Abençoados'\n\n#CultoDaFamília #BênçãosFamiliares #IgrejaEmFamília",
    tags: ["Família", "Domingo", "Especial"]
  }
]

const styles = ["Todos", "Festivo", "Moderno", "Acolhedor", "Tradicional", "Contemporâneo"]

export default function TemplatesAnunciosCulto() {
  const [selectedStyle, setSelectedStyle] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTemplates = templates.filter(template => {
    const matchesStyle = selectedStyle === "Todos" || template.style === selectedStyle
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesStyle && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            href="/dashboard/templates"
            className="group mb-6 inline-flex items-center rounded-lg bg-[#00FFFF]/10 px-4 py-2 text-sm text-[#00FFFF] transition-all hover:bg-[#00FFFF]/20"
          >
            <svg className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Templates
          </Link>
          <h1 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
            Templates de Anúncios de Culto 📢
          </h1>
          <p className="text-center text-gray-400">
            Designs para divulgar cultos e celebrações especiais
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 overflow-hidden rounded-xl bg-[#0A0B2E]/30 p-6 backdrop-blur-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg bg-white/10 px-4 py-3 pl-10 text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-[#00FFFF]"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Style Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`shrink-0 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    selectedStyle === style
                      ? 'bg-[#00FFFF] text-[#0A0B2E]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl bg-[#0A0B2E]/30 p-8 text-center backdrop-blur-sm">
            <span className="mb-4 text-4xl">📢</span>
            <h3 className="mb-2 text-xl font-semibold text-white">Nenhum template encontrado</h3>
            <p className="text-gray-400">
              Tente ajustar sua busca ou selecionar outro estilo
            </p>
          </div>
        )}

        {/* Templates Grid */}
        {filteredTemplates.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onFavorite={async (templateId) => {
                  // Implementar lógica de favoritos
                  console.log('Favoritar:', templateId)
                }}
                isFavorited={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 