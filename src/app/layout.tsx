import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MSE - Método Stories Evangelístico',
  description: 'Crie stories evangelísticos profissionais em minutos',
  manifest: '/manifest.json'
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <meta name="theme-color" content="#0A0B2E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body 
        className={`${inter.variable} font-sans min-h-screen bg-gradient-to-b from-[#0A0B2E] to-black text-white antialiased overflow-x-hidden`}
        style={{
          background: 'linear-gradient(to bottom, #0A0B2E, #000000)',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <ErrorBoundary>
          <AuthProvider>
            {children}
            <Toaster 
              position="top-center"
              toastOptions={{
                style: {
                  background: '#1A1B4B',
                  color: '#fff',
                  border: '1px solid rgba(0, 255, 255, 0.1)',
                  fontSize: '14px',
                  padding: '12px 16px',
                  maxWidth: '90vw',
                  wordBreak: 'break-word'
                }
              }}
            />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
} 