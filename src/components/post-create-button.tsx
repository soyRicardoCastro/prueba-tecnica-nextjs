'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/icons'

interface PostCreateButtonProps extends ButtonProps {}

export function PostCreateButton ({
  className,
  variant,
  ...props
}: PostCreateButtonProps): JSX.Element {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick (): Promise<void> {
    setIsLoading(true)

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Untitled Post'
      })
    })

    setIsLoading(false)

    if (!response?.ok) {
      toast({
        title: 'Something went wrong.',
        description: 'Your post was not created. Please try again.',
        variant: 'destructive'
      })
      return
    }

    const post = await response.json()

    // This forces a cache invalidation.
    router.refresh()

    router.push(`/editor/${post.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          'cursor-not-allowed opacity-60': isLoading
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading
        ? (
          <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' />
          )
        : (
          <Icons.Add className='mr-2 h-4 w-4' />
          )}
      New post
    </button>
  )
}
