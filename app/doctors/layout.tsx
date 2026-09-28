import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ pathname: '/doctors', title: 'Doctors | ZOMAK Medical', description: 'Find ZOMAK physicians by clinic location, specialty and patient-access status.' })

export default function DoctorsLayout({ children }: { children: ReactNode }) {
  return children
}
