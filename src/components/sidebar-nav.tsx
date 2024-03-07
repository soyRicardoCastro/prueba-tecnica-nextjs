'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarNavItem } from '@/types'
import { cn } from '@/lib/utils'

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav ({ items }: DocsSidebarNavProps): JSX.Element | null {
  const pathname = usePathname()

  return (items.length > 0)
    ? (
      <div className='w-full'>
        {items.map((item, index) => (
          <div key={index} className={cn('pb-8')}>
            <h4 className='mb-1 rounded-md px-2 py-1 text-sm font-medium'>
              {item.title}
            </h4>
            {(item.items != null)
              ? (
                <DocsSidebarNavItems items={item.items} pathname={pathname} />
                )
              : null}
          </div>
        ))}
      </div>
      )
    : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems ({
  items,
  pathname
}: DocsSidebarNavItemsProps): JSX.Element | null {
  return items?.length > 0
    ? (
      <div className='grid grid-flow-row auto-rows-max text-sm'>
        {items.map((item, index) =>
          item.disabled !== undefined && item.href !== undefined
            ? (
              <Link
                key={`link-sidebar-${index}`}
                href={item.href}
                className={cn(
                  'flex w-full items-center rounded-md p-2 hover:underline',
                  {
                    'bg-muted': pathname === item.href
                  }
                )}
                target={item.external !== undefined ? '_blank' : ''}
                rel={item.external !== undefined ? 'noreferrer' : ''}
              >
                {item.title}
              </Link>
              )
            : (
              <span key={`item-sidebar-${index}`} className='flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60'>
                {item.title}
              </span>
              )
        )}
      </div>
      )
    : null
}
