import { DashboardConfig } from '@/types'

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
      disabled: true
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true
    }
  ],
  sidebarNav: [
    {
      title: 'Posts',
      href: '/dashboard',
      icon: 'Post'
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'Settings'
    }
  ]
}
