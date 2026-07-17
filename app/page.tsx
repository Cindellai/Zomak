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

export default function Home() {
  return (
    <>
      <Hero />
      <WalkInsAvailable />
      <About />
      <ServiceGrid />
      <FamilyPracticeCta />
      <HowItWorks />
      <Locations />
      <PatientReviews />
      <FAQ />
      <CTA />
    </>
  )
}
