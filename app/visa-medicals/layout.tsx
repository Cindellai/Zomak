import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({ pathname: '/visa-medical-calgary', title: 'Visa Medicals in Calgary | ZOMAK Medical', description: 'Review international visa medical requirements, including Saudi visa medicals, and contact ZOMAK Centre Street in Calgary to confirm your appointment.' }),
  robots: { index: false, follow: true },
}

export default function VisaMedicalsLayout({ children }: { children: ReactNode }) {
  return children
}
