interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout ({ children }: AuthLayoutProps): JSX.Element {
  return <div className='min-h-dvh'>{children}</div>
}
