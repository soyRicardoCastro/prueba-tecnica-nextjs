import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

import { env } from '@/env.mjs'
import { db } from '@/lib/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session ({ token, session }) {
      // @ts-expect-error missing type
      session.user.id = token.id
      // @ts-expect-error missing type
      session.user.name = token.name
      // @ts-expect-error missing type
      session.user.email = token.email
      // @ts-expect-error missing type
      session.user.image = token.picture
      return session
    },
    async jwt ({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email
        }
      })

      if (dbUser == null) {
        if (user != null) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image
      }
    }
  }
}
