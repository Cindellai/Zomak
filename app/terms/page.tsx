import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal/LegalPage'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ pathname: '/terms', title: 'Website Terms | ZOMAK Medical', description: 'Terms for use of the ZOMAK Medical website.' })
export default function TermsPage() { return <LegalPage eyebrow="Website information" title="Website Terms" intro="This website provides general clinic and service information. It does not replace assessment or advice from a qualified healthcare professional.">
  <section><h2>Medical information</h2><p>Website content is general information and is not a diagnosis, treatment plan or guarantee that a particular service is appropriate or available. Confirm current services, hours, fees and appointment requirements directly with the clinic.</p></section>
  <section><h2>External services</h2><p>Links to maps, booking portals, partner laboratories, X-ray providers and other external services are provided for convenience. These independent services are not represented as owned by or located inside ZOMAK clinics.</p></section>
  <section><h2>Emergency care</h2><p>ZOMAK does not provide emergency care through this website. If you have a medical emergency, call 911 or go to the nearest emergency department.</p></section>
  <section><h2>Contact</h2><p>Choose the appropriate location from the <Link href="/locations#choose-clinic">clinic directory</Link> for current clinic information.</p></section>
</LegalPage> }
