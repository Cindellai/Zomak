import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { SiteChrome } from '@/components/layout/SiteChrome'
import { InteractionAnalytics } from '@/components/analytics/InteractionAnalytics'
import { getSiteUrl, isProductionIndexingEnabled } from '@/lib/seo'
// Ignore missing type declarations for global CSS side-effect import
// @ts-ignore
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'ZOMAK Medical | Multi-Location Clinics in Alberta',
  description:
    'A unified ZOMAK Medical platform for clinic locations, booking, directions, and priority healthcare services.',
  openGraph: {
    type: 'website', siteName: 'ZOMAK Medical',
    title: 'ZOMAK Medical | Multi-Location Clinics in Alberta',
    description: 'Find ZOMAK clinics, physicians, walk-in care and selected specialist services across Calgary and Cochrane.',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZOMAK Medical | Multi-Location Clinics in Alberta',
    description: 'Find ZOMAK clinics, physicians, walk-in care and selected specialist services across Calgary and Cochrane.'
  },
  robots: isProductionIndexingEnabled()
    ? { index: true, follow: true }
    : { index: false, follow: false }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <InteractionAnalytics />
        <SiteChrome><Navbar /></SiteChrome>
        <main>{children}</main>
        <SiteChrome><Footer /></SiteChrome>
      </body>
    </html>
  )
}
