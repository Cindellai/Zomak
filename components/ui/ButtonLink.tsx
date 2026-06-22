import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles = {
    primary: 'bg-coral text-white hover:bg-[#c84f3e]',
    secondary: 'bg-pine text-white hover:bg-[#0f332f]',
    ghost: 'border border-pine/20 bg-white text-pine hover:border-pine/40'
  }

  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${styles[variant]}`}
      href={href}
    >
      {children}
    </Link>
  )
}
