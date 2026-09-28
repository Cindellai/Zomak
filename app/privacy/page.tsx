import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage } from '@/components/legal/LegalPage'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ pathname: '/privacy', title: 'Privacy | ZOMAK Medical', description: 'How ZOMAK Medical handles information submitted through this website.' })
export default function PrivacyPage() { return <LegalPage eyebrow="Website information" title="Privacy" intro="This notice explains how information submitted through the ZOMAK website is handled. Clinic care records are subject to the privacy practices of the clinic providing your care.">
  <section><h2>Information you provide</h2><p>Information sent through a contact, registration or booking pathway should be limited to what that pathway requests. Do not send urgent or highly sensitive medical information through general website contact channels.</p></section>
  <section><h2>How information is used</h2><p>Submitted information may be used to respond to your request, direct you to the appropriate clinic or support an appointment or registration process. External booking, map and clinic services have their own privacy terms.</p></section>
  <section><h2>Questions</h2><p>Use the <Link href="/locations#choose-clinic">clinic selector</Link> to contact the location responsible for your care or request.</p></section>
</LegalPage> }
