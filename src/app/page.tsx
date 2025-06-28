'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Feature {
  title: string;
  description: string;
  icon: (props: { className?: string }) => JSX.Element;
}

export default function HomePage() {
  const router = useRouter()
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Detecta se o app pode ser instalado
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    })
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setShowInstallPrompt(false)
    }
    setDeferredPrompt(null)
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-b from-[#0A0B2E] to-black text-white">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto text-center pt-8 sm:pt-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
          Método Stories Evangelístico
        </h1>
        <p className="text-lg sm:text-xl text-cyan-200/80 mb-8">
          Transforme seus Stories em instrumentos de evangelismo digital com poder e propósito
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20">
          <div className="text-cyan-400 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Conteúdo Transformador</h3>
          <p className="text-cyan-200/80">Aprenda a criar stories que tocam corações e transformam vidas com propósito divino.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20">
          <div className="text-cyan-400 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Ferramentas Práticas</h3>
          <p className="text-cyan-200/80">Acesse geradores de conteúdo, templates e recursos para criar stories impactantes.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/20">
          <div className="text-cyan-400 mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Comunidade Engajada</h3>
          <p className="text-cyan-200/80">Faça parte de uma comunidade de evangelistas digitais comprometidos com a missão.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 py-8">
        {showInstallPrompt && (
          <button
            onClick={handleInstallClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Instalar App
          </button>
        )}
        
        <Link
          href="/login"
          className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-medium border border-cyan-500/20 hover:bg-white/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Começar Agora
        </Link>
      </div>
    </div>
  )
}

const features: Feature[] = [
  {
    title: 'Conteúdo Transformador',
    description: 'Aprenda a criar stories que tocam corações e transformam vidas com propósito divino.',
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: 'Ferramentas Práticas',
    description: 'Acesse geradores de conteúdo, templates e recursos para criar stories impactantes.',
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    )
  },
  {
    title: 'Comunidade Engajada',
    description: 'Faça parte de uma comunidade de evangelistas digitais comprometidos com a missão.',
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  }
] 