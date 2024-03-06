import { getServerSession } from 'next-auth/next'
import type { Session } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function getCurrentUser (): Promise<Session['user'] | null> {
  const session = await getServerSession(authOptions)

  return session?.user
}
