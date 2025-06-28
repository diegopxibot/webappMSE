import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

const Navbar = dynamic(() => import('@/components/layout/Navbar'), {
  loading: () => (
    <div className="h-16 bg-white/10 backdrop-blur-lg animate-pulse" />
  ),
  ssr: false
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-[100dvh] bg-gradient-to-b from-[#0A0B2E] to-black">
        <ErrorBoundary>
          <Suspense fallback={<div className="h-16 bg-white/10 backdrop-blur-lg animate-pulse" />}>
            <Navbar />
          </Suspense>
          <main className="container mx-auto px-4 py-6 sm:py-8">
            <ErrorBoundary>
              <Suspense fallback={
                <div className="w-full h-[calc(100dvh-4rem)] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
                </div>
              }>
                {children}
              </Suspense>
            </ErrorBoundary>
          </main>
        </ErrorBoundary>
      </div>
    </ProtectedRoute>
  )
} 