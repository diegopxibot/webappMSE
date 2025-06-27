import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'

const handler = NextAuth({
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
})

export { handler as GET, handler as POST } 