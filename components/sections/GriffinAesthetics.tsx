import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HomepageContent } from '@/lib/sanity/homepage'

export function GriffinAesthetics({ content }: { content?: HomepageContent['aesthetics'] }) {
  const heading = (content?.heading || 'Aesthetics at Zomak Medical Clinic Griffin Road')
    .replace(/\s+[—-]\s+/g, ' ')

  return (
    <section className="border-y border-[#2AA7A1]/10 bg-[#EFF9F8] px-6 py-16 text-[#333333] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(540px,1.18fr)] lg:items-center lg:gap-16">
        <div className="max-w-[680px] lg:pr-6">
          <p className="font-serif text-[28px] font-normal leading-none text-[#2AA7A1] sm:text-[34px] lg:text-[38px]">
            {content?.eyebrow || 'Now offering'}
          </p>
          <h2 className="mt-5 font-serif text-[36px] font-normal leading-[1.08] sm:text-[44px] lg:text-[50px]">
            {heading}
          </h2>
          <p className="mt-6 max-w-[580px] text-[17px] leading-8 text-[#333333]/75">
            {content?.description || 'Explore personalized Botox, fillers, PRP treatments for hair and facials, Vampire Breast Lift, and Vampire Wing Lift services.'}
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Featured aesthetics services">
            {['Botox', 'Fillers', 'PRP treatments'].map((service) => (
              <span
                key={service}
                className="rounded-full border border-[#2AA7A1]/25 bg-white/80 px-4 py-2 text-sm text-[#333333]/75"
              >
                {service}
              </span>
            ))}
          </div>
          <Link
            href={content?.buttonHref || '/services/aesthetics'}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2AA7A1] px-7 py-4 text-sm font-medium text-white no-underline shadow-[0_12px_28px_rgba(42,167,161,0.2)] transition hover:bg-[#228e89]"
          >
            {content?.buttonLabel || 'Explore Aesthetics'} <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid min-h-[520px] grid-cols-[1.35fr_0.65fr] gap-3 sm:min-h-[600px]">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={content?.imageUrl || '/images/home-aesthetics-cta.jpg'}
              alt={content?.imageAlt || 'Provider performing a facial injectable aesthetics treatment'}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/aesthetics-fillers.jpg"
                alt="Personalized cosmetic filler treatment"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/aesthetics-prp-treatment.jpg"
                alt="Platelet-rich plasma aesthetics treatment"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
