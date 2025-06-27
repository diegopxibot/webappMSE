import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link';

const ToolCard = dynamic(() => import('@/components/ferramentas/ToolCard'), {
  loading: () => (
    <div className="w-full h-48 bg-white rounded-lg shadow-sm animate-pulse" />
  )
})

const tools = [
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
  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/dashboard" 
            className="btn inline-flex items-center text-sm text-[#00FFFF] hover:underline"
          >
            <svg className="mr-2 h-4 w-4 rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Dashboard
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            🧰 <span className="bg-gradient-to-r from-[#00FFFF] to-[#FFD700] bg-clip-text text-transparent">
              Caixa de Ferramentas Evangelísticas
            </span>
          </h1>
          <p className="text-gray-400">
            Recursos práticos para potencializar seu ministério digital
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Suspense 
              key={tool.href}
              fallback={<div className="w-full h-48 bg-white rounded-lg shadow-sm animate-pulse" />}
            >
              <ToolCard {...tool} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
} 