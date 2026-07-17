import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles = {
    primary: 'bg-coral text-white hover:bg-[#2AA7A1]',
    secondary: 'bg-pine text-white hover:bg-[#333333]',
    ghost: 'border border-pine/20 bg-white text-pine hover:border-pine/40'
  }

  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-normal transition ${styles[variant]}`}
      href={href}
    >
      {children}
    </Link>
  )
}
