import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
// Ignore missing type declarations for global CSS side-effect import
// @ts-ignore
import './globals.css'

export const metadata: Metadata = {
  title: 'ZOMAK Medical | Multi-Location Clinics in Alberta',
  description:
    'A unified ZOMAK Medical platform for clinic locations, booking, directions, and priority healthcare services.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}