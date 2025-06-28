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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body 
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen bg-gradient-to-b from-[#0A0B2E] to-black text-white antialiased`}
        style={{
          background: 'linear-gradient(to bottom, #0A0B2E, #000000)',
        }}
      >
        <ErrorBoundary>
          <AuthProvider>
            {children}
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1A1B4B',
                  color: '#fff',
                  border: '1px solid rgba(0, 255, 255, 0.1)',
                }
              }}
            />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
} 