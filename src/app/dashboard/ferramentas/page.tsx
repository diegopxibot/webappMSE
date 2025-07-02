'use client'

import { Metadata } from 'next'
import { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useAuth } from '@/components/auth/AuthProvider'
import toast from 'react-hot-toast'

const ToolCard = dynamic(() => import('@/components/ferramentas/ToolCard'), {
  loading: () => (
    <div className="w-full h-48 bg-white/5 rounded-xl border border-cyan-500/20 animate-pulse" />
  )
})

export default function FerramentasPage() {
  const { user } = useAuth()

  const tools = [
    {
      id: 'copywriting-da-fe',
      title: 'Copywriting da Fé',
      description: 'Crie textos persuasivos para sua igreja ou ministério',
      href: '/dashboard/ferramentas/copywriting-da-fe'
    },
    {
      id: 'banco-hashtags',
      title: 'Banco de Hashtags',
      description: 'Encontre as melhores hashtags para seu conteúdo',
      href: '/dashboard/ferramentas/banco-hashtags'
    },
    {
      id: 'gerador-ideias',
      title: 'Gerador de Ideias',
      description: 'Gere ideias criativas para suas postagens',
      href: '/dashboard/ferramentas/gerador-ideias'
    },
    {
      id: 'perguntas-poderosas',
      title: 'Perguntas Poderosas',
      description: 'Crie perguntas que geram engajamento',
      href: '/dashboard/ferramentas/perguntas-poderosas'
    },
    {
      id: 'respostas-criticas',
      title: 'Respostas a Críticas',
      description: 'Aprenda a responder críticas com sabedoria',
      href: '/dashboard/ferramentas/respostas-criticas'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Ferramentas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.id} href={tool.href}>
            <ToolCard
              title={tool.title}
              description={tool.description}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}