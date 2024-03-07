import { notFound, redirect } from 'next/navigation'
import { Post, User } from '@prisma/client'

import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'
import { Editor } from '@/components/editor'

async function getPostForUser (postId: Post['id'], userId: User['id']): Promise<Post | null> {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId
    }
  })
}

interface EditorPageProps {
  params: { postId: string }
}

export default async function EditorPage ({ params }: EditorPageProps): Promise<JSX.Element> {
  const user = await getCurrentUser()

  if (user == null) {
    redirect(authOptions?.pages?.signIn ?? '/login')
  }

  // @ts-expect-error missing type
  const post = await getPostForUser(params.postId, user.id)

  if (post == null) {
    notFound()
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published
      }}
    />
  )
}
