import Link from 'next/link'

import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  pathname: '/about',
  title: 'About ZOMAK Medical',
  description: 'Learn about ZOMAK Medical, its clinic network, patient care philosophy, and coordinated healthcare platform.',
  image: '/images/about-hero.jpg'
})

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-16 text-[#333333]">
      <header className="px-5 pb-10 pt-14 sm:px-10 sm:pb-14 sm:pt-20 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="max-w-[900px] font-serif text-[48px] font-normal leading-[1.02] sm:text-[68px] lg:text-[84px]">About ZOMAK Medical</h1>
          <p className="mt-6 max-w-[720px] text-[19px] leading-8 text-[#333333]/70 sm:text-[21px]">A growing network of medical clinics helping patients across Calgary and Cochrane find the right care with greater clarity.</p>
        </div>
      </header>

      <div className="w-full bg-[#EAF7F6] px-5 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[16/7]">
            <img src="/images/about-hero.jpg" alt="Reception desk and ZOMAK Medical Clinic sign" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <article className="px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[820px]">
          <p className="font-serif text-[30px] leading-[1.35] sm:text-[38px]">ZOMAK Medical brings multiple clinics and care services together so patients can understand their options, choose the right location, and prepare for their visit with confidence.</p>

          <div className="mt-12 space-y-7 text-[18px] leading-8 text-[#333333]/78 sm:mt-16 sm:text-[19px] sm:leading-9">
            <p>Our clinic network serves communities across Calgary and Cochrane. Although every location has its own physicians, services, hours, and contact information, each clinic is connected by a shared commitment to practical, patient-centred care.</p>
            <p>Patients come to ZOMAK for family medicine, walk-in care, women&apos;s and men&apos;s health, pediatric and internal-medicine services, medical examinations, testing, and other everyday healthcare needs. Some services are available directly, while others require a referral or are offered only at a specific clinic.</p>
          </div>

          <section className="mt-16 border-t border-[#333333]/15 pt-12 sm:mt-20 sm:pt-16">
            <h2 className="font-serif text-[36px] leading-tight sm:text-[46px]">Care begins with clear information</h2>
            <div className="mt-7 space-y-7 text-[18px] leading-8 text-[#333333]/78 sm:text-[19px] sm:leading-9">
              <p>Finding healthcare can be stressful when important details are scattered or unclear. ZOMAK is designed around the questions patients ask first: Which clinic offers this service? Is a referral required? What should I bring? Who should I call? Where will my appointment take place?</p>
              <p>By presenting those details clearly, we help patients move from searching to taking the appropriate next step. That may mean contacting a clinic about registration, confirming walk-in availability, preparing for a medical exam, or asking a healthcare provider to submit a referral.</p>
            </div>
          </section>

          <blockquote className="my-16 border-l-2 border-[#2AA7A1] py-2 pl-7 font-serif text-[28px] leading-[1.4] text-[#333333] sm:my-20 sm:pl-10 sm:text-[34px]">Our goal is to make care information simpler, more consistent, and easier for patients to act on.</blockquote>

          <section>
            <h2 className="font-serif text-[36px] leading-tight sm:text-[46px]">A connected clinic network</h2>
            <div className="mt-7 space-y-7 text-[18px] leading-8 text-[#333333]/78 sm:text-[19px] sm:leading-9">
              <p>ZOMAK&apos;s physicians and clinic teams support patients through routine visits, ongoing health concerns, specialized paperwork, medical testing, referrals, and follow-up care. The shared network makes it easier to understand what each location provides without treating every clinic as an isolated experience.</p>
              <p>As the network grows, the same principle continues to guide us: patients should be able to find accurate information, understand what happens next, and connect with the appropriate clinic without unnecessary confusion.</p>
            </div>
          </section>

          <div className="mt-16 flex flex-col gap-3 border-t border-[#333333]/15 pt-10 sm:flex-row sm:flex-wrap">
            <Link href="/locations#choose-clinic" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#333333] px-7 py-3 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">Find a clinic</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
