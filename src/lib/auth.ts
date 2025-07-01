import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'

declare module 'next-auth' {
  interface User {
    id: string
  }
  interface Session {
    user: {
      id: string
      email: string
    }
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER || 'smtp://user:pass@localhost:1025',
      from: process.env.EMAIL_FROM || 'MSE <noreply@mse.com>',
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/login',
    error: '/login',
    verifyRequest: '/verify-request',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub as string
      }
      return session
    },
  },
}
