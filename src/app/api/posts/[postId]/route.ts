import { getServerSession } from 'next-auth'
import * as z from 'zod'

import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { postPatchSchema } from '@/lib/validations/post'

const routeContextSchema = z.object({
  params: z.object({
    postId: z.string()
  })
})

export async function DELETE (
  req: Request,
  context: z.infer<typeof routeContextSchema>
): Promise<Response> {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(params.postId))) {
      return new Response(null, { status: 403 })
    }

    // Delete the post.
    await db.post.delete({
      where: {
        id: params.postId
      }
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH (
  req: Request,
  context: z.infer<typeof routeContextSchema>
): Promise<Response> {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(params.postId))) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const json = await req.json()
    const body = postPatchSchema.parse(json)

    // Update the post.
    // TODO: Implement sanitization for content.
    await db.post.update({
      where: {
        id: params.postId
      },
      data: {
        title: body.title,
        content: body.content
      }
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

async function verifyCurrentUserHasAccessToPost (postId: string): Promise<boolean> {
  const session = await getServerSession(authOptions)
  const count = await db.post.count({
    where: {
      id: postId,
      // @ts-expect-error missing type
      authorId: session?.user.id
    }
  })

  return count > 0
}
