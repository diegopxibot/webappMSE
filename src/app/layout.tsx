import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MSE - Método Stories Evangelístico',
  description: 'Plataforma de treinamento para evangelismo nas redes sociais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ErrorBoundary>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
} 