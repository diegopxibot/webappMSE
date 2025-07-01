'use client'

import Link from 'next/link'

interface Category {
  id: string
  title: string
  icon: string
  description: string
  slug: string
}

const categories: Category[] = [
  {
    id: 'versiculos',
    title: 'Versículos',
    icon: '📖',
    description: 'Templates para compartilhar a Palavra de Deus',
    slug: 'versiculos'
  },
  {
    id: 'oracoes',
    title: 'Orações',
    icon: '🙏',
    description: 'Modelos para momentos de conexão com Deus',
    slug: 'oracoes'
  },
  {
    id: 'reflexoes',
    title: 'Reflexões',
    icon: '💭',
    description: 'Layouts para compartilhar pensamentos e meditações',
    slug: 'reflexoes'
  },
  {
    id: 'convites',
    title: 'Convites',
    icon: '✉️',
    description: 'Templates para convidar pessoas para eventos',
    slug: 'convites'
  },
  {
    id: 'anuncios',
    title: 'Anúncios de Culto',
    icon: '📢',
    description: 'Designs para divulgar cultos e encontros',
    slug: 'anuncios'
  },
  {
    id: 'frases-fe',
    title: 'Frases de Fé',
    icon: '🕊️',
    description: 'Templates para mensagens inspiradoras',
    slug: 'frases-fe'
  },
  {
    id: 'datas-especiais',
    title: 'Datas Especiais',
    icon: '🎉',
    description: 'Layouts para momentos importantes',
    slug: 'datas-especiais'
  },
  {
    id: 'evangelismo-dupla',
    title: 'Evangelismo em Dupla',
    icon: '🧑‍🤝‍🧑',
    description: 'Templates para testemunhos em conjunto',
    slug: 'evangelismo-dupla'
  },
  {
    id: 'frases-impacto',
    title: 'Frases de Impacto',
    icon: '💬',
    description: 'Designs para mensagens marcantes',
    slug: 'frases-impacto'
  }
]

export default function TemplatesVisuais() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <Link 
            href="/dashboard"
            className="group mb-6 inline-flex items-center rounded-lg bg-[#00FFFF]/10 px-4 py-2 text-sm text-[#00FFFF] transition-all hover:bg-[#00FFFF]/20"
          >
            <svg className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Dashboard
          </Link>
          <h1 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
            🎨 Templates Visuais para Evangelizar
          </h1>
          <p className="text-center text-xl text-gray-400">
            Escolha, edite e publique. Leve a Palavra com beleza, propósito e impacto.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/dashboard/templates/${category.slug}`}
              className="group relative transform overflow-hidden rounded-xl bg-[#0A0B2E]/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-[#0A0B2E]/70"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-4 text-4xl sm:text-5xl">
                  {category.icon}
                </div>

                {/* Title */}
                <h2 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#00FFFF]">
                  {category.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400">
                  {category.description}
                </p>

                {/* Arrow Icon */}
                <div className="mt-4 flex items-center text-[#00FFFF]">
                  <span className="text-sm">Ver templates</span>
                  <svg 
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}