import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'MSE - Método Stories Evangelístico',
  description: 'Plataforma de treinamento para evangelismo nas redes sociais',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover',
  themeColor: '#0A0B2E',
  appleWebAppCapable: 'yes',
  appleWebAppStatusBarStyle: 'black-translucent'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <meta name="theme-color" content="#0A0B2E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body 
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen bg-gradient-to-b from-[#0A0B2E] to-black text-white antialiased overflow-x-hidden`}
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