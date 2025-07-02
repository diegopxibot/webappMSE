import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'

const adminLinks = [
  {
    href: '/dashboard/admin/templates',
    label: 'Templates',
    icon: 'template'
  },
  {
    href: '/dashboard/admin/tags',
    label: 'Tags',
    icon: 'tag'
  }
]

export default async function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }

  const isAdmin = session.user?.email?.endsWith('@admin.com')

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar
        user={session.user}
        adminLinks={isAdmin ? adminLinks : undefined}
      />
      <main>{children}</main>
    </div>
  )
} 