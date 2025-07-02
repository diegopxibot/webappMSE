'use client'

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

const tools = [
  {
    title: 'Templates Visuais',
    description: 'Modelos prontos para personalizar e evangelizar',
    href: '/dashboard/ferramentas/templates-visuais',
    icon: '🎨'
  },
  {
    title: 'Copywriting da Fé',
    description: 'Crie textos persuasivos para suas postagens evangelísticas',
    href: '/dashboard/ferramentas/copywriting-da-fe',
    icon: '✝️'
  },
  {
    title: 'Banco de Hashtags',
    description: 'Encontre as hashtags perfeitas para seu conteúdo',
    href: '/dashboard/ferramentas/banco-hashtags',
    icon: '#️⃣'
  },
  {
    title: 'Gerador de Ideias',
    description: 'Inspire-se com novas ideias para suas postagens',
    href: '/dashboard/ferramentas/gerador-ideias',
    icon: '💡'
  },
  {
    title: 'Perguntas Poderosas',
    description: 'Gere perguntas que engajam sua audiência',
    href: '/dashboard/ferramentas/perguntas-poderosas',
    icon: '❓'
  },
  {
    title: 'Respostas Críticas',
    description: 'Aprenda a responder comentários críticos com sabedoria',
    href: '/dashboard/ferramentas/respostas-criticas',
    icon: '🤝'
  }
]

export default function FerramentasPage() {
  const { user } = useAuth()

  useEffect(() => {
    // Mostra mensagem de boas-vindas apenas na primeira visita
    const hasVisitedTools = localStorage.getItem('hasVisitedTools')
    if (!hasVisitedTools) {
      toast.success(
        `Bem-vindo(a) às ferramentas, ${user?.name?.split(' ')[0]}! Aqui você encontra recursos poderosos para seu ministério digital. 🙏`,
        {
          duration: 5000,
          icon: '🎉'
        }
      )
      localStorage.setItem('hasVisitedTools', 'true')
    }
  }, [user?.name])

  return (
    <div className="min-h-[calc(100dvh-4rem)] p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all"
          >
            <svg className="mr-2 h-4 w-4 rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Dashboard
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Caixa de Ferramentas Evangelísticas
            </span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Recursos práticos e poderosos para potencializar seu ministério digital. 
            Cada ferramenta foi desenvolvida para ajudar você a alcançar mais vidas através das redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Suspense 
              key={tool.href}
              fallback={
                <div className="w-full h-48 bg-white/5 rounded-xl border border-cyan-500/20 animate-pulse" />
              }
            >
              <ToolCard {...tool} />
            </Suspense>
          ))}
        </div>

        {/* Dica flutuante */}
        <div className="mt-12 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-lg">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="text-white font-medium mb-1">Dica do dia</h3>
              <p className="text-white/70 text-sm">
                Experimente combinar diferentes ferramentas para criar conteúdo ainda mais impactante. 
                Por exemplo, use o Gerador de Ideias junto com o Copywriting da Fé para criar stories envolventes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 