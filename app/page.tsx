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

export default function Home() {
  return (
    <>
      <div className="sticky top-16 z-40 bg-[#2AA7A1] px-5 py-3 text-center text-sm font-medium text-white shadow-md">
        Walk-ins now · Select a clinic or call ahead for live availability
      </div>
      <Hero />
      <WalkInsAvailable />
      <About />
      <ServiceGrid />
      <FamilyPracticeCta />
      <HowItWorks />
      <GriffinAesthetics />
      <Locations />
      <PatientReviews />
      <FAQ />
      <CTA />
    </>
  )
}
