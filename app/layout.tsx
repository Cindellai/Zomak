import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { SiteChrome } from '@/components/layout/SiteChrome'
import { getNavigationServiceCategories } from '@/lib/sanity/navigation'
// Ignore missing type declarations for global CSS side-effect import
// @ts-ignore
import './globals.css'

export const metadata: Metadata = {
  title: 'ZOMAK Medical | Multi-Location Clinics in Alberta',
  description:
    'A unified ZOMAK Medical platform for clinic locations, booking, directions, and priority healthcare services.'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const serviceCategories = await getNavigationServiceCategories()

  return (
    <html lang="en">
      <body>
        <SiteChrome><Navbar serviceCategories={serviceCategories} /></SiteChrome>
        <main>{children}</main>
        <SiteChrome><Footer /></SiteChrome>
      </body>
    </html>
  )
}
