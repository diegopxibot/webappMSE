'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'versiculos',
    title: 'Versículos',
    description: 'Templates para compartilhar versículos bíblicos',
    icon: '📖',
    color: 'blue'
  },
  {
    id: 'oracoes',
    title: 'Orações',
    description: 'Templates para compartilhar orações e pedidos',
    icon: '🙏',
    color: 'purple'
  },
  {
    id: 'reflexoes',
    title: 'Reflexões',
    description: 'Templates para compartilhar reflexões e devocionais',
    icon: '💭',
    color: 'green'
  },
  {
    id: 'convites',
    title: 'Convites',
    description: 'Templates para criar convites para eventos',
    icon: '✉️',
    color: 'orange'
  },
  {
    id: 'anuncios-culto',
    title: 'Anúncios de Culto',
    description: 'Templates para divulgar cultos e celebrações',
    icon: '🎤',
    color: 'red'
  },
  {
    id: 'frases-fe',
    title: 'Frases de Fé',
    description: 'Templates para compartilhar frases inspiradoras',
    icon: '✨',
    color: 'blue'
  },
  {
    id: 'datas-especiais',
    title: 'Datas Especiais',
    description: 'Templates para datas comemorativas',
    icon: '🎉',
    color: 'purple'
  },
  {
    id: 'evangelismo-dupla',
    title: 'Evangelismo em Dupla',
    description: 'Templates para evangelismo e discipulado',
    icon: '👥',
    color: 'green'
  },
  {
    id: 'frases-impacto',
    title: 'Frases de Impacto',
    description: 'Templates para mensagens impactantes',
    icon: '💫',
    color: 'orange'
  }
]

export default function TemplatesVisuais() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Templates Visuais
        </h1>
        <p className="text-gray-400">
          Escolha uma categoria para explorar os templates disponíveis
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar categorias..."
            className="w-full bg-dark-light text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <svg
            className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/dashboard/ferramentas/templates-visuais/${category.id}`}>
              <div className="group h-full bg-dark-light rounded-xl p-6 hover:bg-dark-light/80 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold mb-1">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={`/templates/${category.id}/template-${category.id}-modern-${category.color}-1.png`}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 