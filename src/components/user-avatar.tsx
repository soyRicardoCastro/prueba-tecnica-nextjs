import { User } from '@prisma/client'
import { AvatarProps } from '@radix-ui/react-avatar'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icons } from '@/components/icons'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar ({ user, ...props }: UserAvatarProps): JSX.Element {
  return (
    <Avatar {...props}>
      {user.image !== null
        ? (
          <AvatarImage alt={`Picture of ${user.name ?? 'user'}`} src={user.image} />
          )
        : (
          <AvatarFallback>
            <span className='sr-only'>{user.name}</span>
            <Icons.User className='h-4 w-4' />
          </AvatarFallback>
          )}
    </Avatar>
  )
}
