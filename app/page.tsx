import type { Metadata } from 'next'

import { Hero } from '@/components/sections/Hero'
import { WalkInsAvailable } from '@/components/sections/WalkInsAvailable'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { FamilyPracticeCta } from '@/components/sections/FamilyPracticeCta'
import { About } from '@/components/sections/About'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Locations } from '@/components/sections/Locations'
import { PatientReviews } from '@/components/sections/PatientReviews'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/Cta'
import { GriffinAesthetics } from '@/components/sections/GriffinAesthetics'
import { WalkInStatusBanner } from '@/components/sections/WalkInStatusBanner'
import { LewisburgNowOpen } from '@/components/sections/LewisburgNowOpen'
import { getHomepageContent } from '@/lib/sanity/homepage'
import { locations } from '@/data/site'
import { absoluteUrl, pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = pageMetadata({ pathname: '/', title: 'Walk-In Clinics and Family Doctors in Calgary and Cochrane | ZOMAK', description: 'Find walk-in care, family doctors accepting new patients, immigration medicals and selected specialist services at five ZOMAK clinics across Calgary and Cochrane.', image: '/images/home-zomak-logo.jpg' })

export default async function Home() {
  const homepage = await getHomepageContent()

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalOrganization',
          name: 'ZOMAK Medical',
          url: absoluteUrl('/'),
          logo: absoluteUrl('/images/home-zomak-logo.jpg'),
          department: locations.map((location) => ({
            '@type': 'MedicalClinic',
            name: location.name,
            url: absoluteUrl(`/locations/${location.slug}`),
            telephone: location.phone
          }))
        }}
      />
      <WalkInStatusBanner
        status="Walk-ins subject to daily capacity"
        href="/#locations"
        actionLabel="Choose a clinic"
      />
      <Hero content={homepage?.hero} />
      <WalkInsAvailable content={homepage?.walkIns} />
      <About content={homepage?.about} />
      <ServiceGrid content={homepage?.services} serviceCards={homepage?.serviceCards} />
      <LewisburgNowOpen />
      <HowItWorks content={homepage?.howItWorks} />
      <FamilyPracticeCta content={homepage?.familyPractice} />
      <GriffinAesthetics content={homepage?.aesthetics} />
      <Locations content={homepage?.locations} />
      <PatientReviews content={homepage?.reviews} testimonials={homepage?.testimonials} />
      <FAQ content={homepage?.faq} />
      <CTA content={homepage?.finalCta} />
    </>
  )
}
