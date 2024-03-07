'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm ({ className, ...props }: UserAuthFormProps): JSX.Element {
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <button
        type='button'
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setIsGitHubLoading(true)
          console.log('signIn')
          signIn('github').then(() => {
            console.log('signIn')
          }).catch((error) => {
            console.log(error)
          })
        }}
        disabled={isGitHubLoading}
      >
        {isGitHubLoading
          ? (
            <Icons.Spinner className='mr-2 h-4 w-4 animate-spin' />
            )
          : (
            <Icons.GitHub className='mr-2 h-4 w-4' />
            )}{' '}
        Github
      </button>
    </div>
  )
}
