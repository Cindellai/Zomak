import { FuturePlatform } from '@/components/sections/FuturePlatform'
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

export default async function Home() {
  const homepage = await getHomepageContent()

  return (
    <>
      <WalkInStatusBanner
        status="Walk-ins now"
        waitTime="Short wait"
        href="/#locations"
        actionLabel="View clinics"
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
