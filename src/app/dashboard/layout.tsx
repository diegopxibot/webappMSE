import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

const Navbar = dynamic(() => import('@/components/layout/Navbar'), {
  loading: () => (
    <div className="h-16 bg-white shadow-sm animate-pulse" />
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
      <div className="min-h-screen bg-gray-50">
        <ErrorBoundary>
          <Suspense fallback={<div className="h-16 bg-white shadow-sm animate-pulse" />}>
            <Navbar />
          </Suspense>
          <main className="container mx-auto px-4 py-8">
            <ErrorBoundary>
              <Suspense fallback={<div className="w-full h-96 bg-white rounded-lg shadow-sm animate-pulse" />}>
                {children}
              </Suspense>
            </ErrorBoundary>
          </main>
        </ErrorBoundary>
      </div>
    </ProtectedRoute>
  )
} 