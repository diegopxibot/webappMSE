'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('mse-auth')
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  return <>{children}</>
} 