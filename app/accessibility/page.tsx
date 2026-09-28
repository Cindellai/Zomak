import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal/LegalPage'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ pathname: '/accessibility', title: 'Accessibility | ZOMAK Medical', description: 'ZOMAK Medical website accessibility information and assistance.' })
export default function AccessibilityPage() { return <LegalPage eyebrow="Website information" title="Accessibility" intro="ZOMAK aims to make its website and clinic information usable by as many people as possible.">
  <section><h2>Using this website</h2><p>The site is designed for keyboard navigation, readable contrast, responsive text and descriptive page structure. We continue to review content and interactions as the website changes.</p></section>
  <section><h2>Request assistance</h2><p>If a website feature or document is difficult to access, use the <Link href="/locations#choose-clinic">clinic selector</Link> to call the relevant clinic and request the information in another format.</p></section>
</LegalPage> }
