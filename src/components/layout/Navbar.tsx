'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }

  return (
    <>
      <nav className="fixed w-full bg-dark/95 backdrop-blur-lg z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold text-white neon-glow">MSE</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/dashboard/metodo">O Método</NavLink>
              <NavLink href="/dashboard/ferramentas">Ferramentas</NavLink>
              <NavLink href="/dashboard/biblioteca">Biblioteca</NavLink>
              <NavLink href="/dashboard/comunidade">Comunidade</NavLink>
              <button
                onClick={handleLogout}
                className="text-primary hover:text-white transition-colors duration-300"
              >
                Sair
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
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
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="/dashboard/metodo" onClick={() => setIsOpen(false)}>
                  O Método
                </MobileNavLink>
                <MobileNavLink href="/dashboard/ferramentas" onClick={() => setIsOpen(false)}>
                  Ferramentas
                </MobileNavLink>
                <MobileNavLink href="/dashboard/biblioteca" onClick={() => setIsOpen(false)}>
                  Biblioteca
                </MobileNavLink>
                <MobileNavLink href="/dashboard/comunidade" onClick={() => setIsOpen(false)}>
                  Comunidade
                </MobileNavLink>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    handleLogout()
                  }}
                  className="text-primary hover:text-white transition-colors duration-300 block px-4 py-2"
                >
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

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-primary hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-primary hover:text-white transition-colors duration-300 block px-4 py-2"
    >
      {children}
    </Link>
  )
} 