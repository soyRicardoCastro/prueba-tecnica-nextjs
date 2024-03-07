import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { UserNameForm } from '@/components/user-name-form'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.'
}

export default async function SettingsPage (): Promise<JSX.Element> {
  const user = await getCurrentUser()

  if (user == null) {
    redirect(authOptions?.pages?.signIn ?? '/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Settings'
        text='Manage account and website settings.'
      />
      <div className='grid gap-10'>
        <UserNameForm user={{
          // @ts-expect-error missing type
          id: user.id, name: user.name ?? ''
        }}
        />
      </div>
    </DashboardShell>
  )
}
