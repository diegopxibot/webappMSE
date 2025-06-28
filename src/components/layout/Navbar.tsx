'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/components/auth/AuthProvider'

export default function Navbar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setShowInstallButton(false)
    }
    setDeferredPrompt(null)
  }

  return (
    <>
      <nav className="fixed w-full bg-[#0A0B2E]/95 backdrop-blur-lg z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                MSE Premium
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="/dashboard/metodo" active={pathname.includes('/metodo')}>
                O Método
              </NavLink>
              <NavLink href="/dashboard/ferramentas" active={pathname.includes('/ferramentas')}>
                Ferramentas
              </NavLink>
              <NavLink href="/dashboard/biblioteca" active={pathname.includes('/biblioteca')}>
                Biblioteca
              </NavLink>
              <NavLink href="/dashboard/comunidade" active={pathname.includes('/comunidade')}>
                Comunidade
              </NavLink>
              
              {showInstallButton && (
                <button
                  onClick={handleInstall}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Instalar App
                </button>
              )}

              <button
                onClick={logout}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sair
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 bg-[#0A0B2E]/95 backdrop-blur-lg border-t border-cyan-500/20">
              <div className="flex flex-col space-y-2">
                <MobileNavLink 
                  href="/dashboard/metodo" 
                  onClick={() => setIsOpen(false)}
                  active={pathname.includes('/metodo')}
                >
                  O Método
                </MobileNavLink>
                <MobileNavLink 
                  href="/dashboard/ferramentas" 
                  onClick={() => setIsOpen(false)}
                  active={pathname.includes('/ferramentas')}
                >
                  Ferramentas
                </MobileNavLink>
                <MobileNavLink 
                  href="/dashboard/biblioteca" 
                  onClick={() => setIsOpen(false)}
                  active={pathname.includes('/biblioteca')}
                >
                  Biblioteca
                </MobileNavLink>
                <MobileNavLink 
                  href="/dashboard/comunidade" 
                  onClick={() => setIsOpen(false)}
                  active={pathname.includes('/comunidade')}
                >
                  Comunidade
                </MobileNavLink>

                {showInstallButton && (
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      handleInstall()
                    }}
                    className="mx-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all active:scale-[0.98] flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Instalar App
                  </button>
                )}

                <button
                  onClick={() => {
                    setIsOpen(false)
                    logout()
                  }}
                  className="mx-4 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sair
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-16"></div> {/* Espaçador para compensar o navbar fixo */}
    </>
  )
}

function NavLink({ 
  href, 
  active, 
  children 
}: { 
  href: string
  active: boolean
  children: React.ReactNode 
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg transition-all ${
        active 
          ? 'bg-white/10 text-white font-medium' 
          : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`mx-4 px-4 py-2 rounded-lg transition-all ${
        active 
          ? 'bg-white/10 text-white font-medium' 
          : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  )
} 