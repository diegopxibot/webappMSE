'use client'

import { useEffect, useState } from 'react'
import { FaBrain, FaBook, FaHandsHelping, FaShieldAlt, FaChartLine, FaArrowLeft } from 'react-icons/fa'
import ModuleCard from '@/components/jornada/ModuleCard'
import Link from 'next/link'

const modules = [
  {
    id: 1,
    title: 'Mentalidade do Evangelista Digital',
    description: 'Desenvolva a mentalidade correta para evangelizar nas redes sociais',
    icon: <FaBrain />,
    href: '/dashboard/module/mentalidade'
  },
  {
    id: 2,
    title: 'Entendendo o Método',
    description: 'Aprenda os fundamentos do Método Stories Evangelístico',
    icon: <FaBook />,
    href: '/dashboard/module/metodo'
  },
  {
    id: 3,
    title: 'Aplicação na Prática',
    description: 'Coloque em prática o método com exercícios práticos',
    icon: <FaHandsHelping />,
    href: '/dashboard/module/pratica'
  },
  {
    id: 4,
    title: 'Como Lidar com Críticas e Objeções',
    description: 'Aprenda a lidar com diferentes tipos de feedback',
    icon: <FaShieldAlt />,
    href: '/dashboard/module/criticas'
  },
  {
    id: 5,
    title: 'Crescimento e Escala',
    description: 'Expanda seu alcance e impacto nas redes sociais',
    icon: <FaChartLine />,
    href: '/dashboard/module/crescimento'
  }
]

export default function JornadaPage() {
  const [completedModules, setCompletedModules] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('completedModules')
    if (saved) {
      setCompletedModules(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark-lighter py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Voltar para o Dashboard</span>
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Jornada do Método Stories Evangelístico
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Transforme sua maneira de evangelizar através das redes sociais
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-1 w-20 bg-secondary rounded-full"></div>
          </div>
          <div className="inline-block bg-dark-light/50 backdrop-blur-md rounded-full px-6 py-2 border border-primary/20">
            <p className="text-sm text-gray-200">
              {completedModules.length} de {modules.length} módulos completados
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              {...module}
              isLocked={!completedModules.includes(module.id - 1) && module.id !== 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}