'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/components/auth/AuthProvider'
import type { Template } from '@/types/template'

export default function SharedTemplatePage() {
  const { id } = useParams()
  const { user } = useAuth()
  const [template, setTemplate] = useState<Template | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTemplate() {
      try {
        const response = await fetch(`/api/templates/share?id=${id}`)
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.error || 'Erro ao carregar template')
        }
        const data = await response.json()
        setTemplate(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar template')
      } finally {
        setLoading(false)
      }
    }

    loadTemplate()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !template) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
        <div className="text-6xl mb-4">😢</div>
        <h1 className="text-2xl font-bold text-white mb-4">
          {error || 'Template não encontrado'}
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          O link pode ter expirado ou o template pode ter sido removido.
        </p>
        <Link
          href={user ? '/dashboard/ferramentas/templates-visuais' : '/login'}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          {user ? 'Ver outros templates' : 'Fazer login'}
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Template Compartilhado
          </h1>
          <p className="text-gray-400">
            Este template foi compartilhado com você. Faça login para acessar mais templates!
          </p>
        </div>

        <div className="bg-dark-light rounded-xl overflow-hidden border border-primary/20">
          <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
            <Image
              src={template.imageUrl}
              alt={template.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              {template.name}
            </h2>

            <div className="space-y-3">
              {user ? (
                <>
                  <a
                    href={template.canvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-[#00C4CC] text-white rounded-lg hover:bg-[#00B3B9] transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.82 5.59L12 12.41l-6.82-6.82c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 14l-6.82 6.82c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 15.41l6.82 6.82c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 14l6.82-6.82c.39-.39.39-1.02 0-1.41-.39-.38-1.02-.38-1.41 0z"/>
                    </svg>
                    Editar no Canva
                  </a>

                  <Link
                    href="/dashboard/ferramentas/templates-visuais"
                    className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Ver mais templates
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Fazer login para acessar
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 