import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { homeActionPrimary } from '@/components/ui/homeActionStyles'
import type { HomepageContent } from '@/lib/sanity/homepage'

const fallback = {
  title: 'Walk-ins are available at all ZOMAK clinics',
  firstParagraph: 'Visit any ZOMAK clinic for walk-in support across everyday health needs, family care, forms, testing direction, and same-day questions.',
  secondParagraph: 'Availability can vary by provider schedule and daily clinic volume, so calling ahead is recommended when timing matters.',
  imageUrl: '/images/locations/centre-street-hero.jpg',
  imageAlt: 'Exterior of Zomak Medical Clinic on Centre Street North in Calgary',
  buttonLabel: 'Find a clinic',
  buttonHref: '/locations'
}

export function WalkInsAvailable({ content }: { content?: HomepageContent['walkIns'] }) {
  const section = {
    ...fallback,
    ...Object.fromEntries(Object.entries(content || {}).filter(([, value]) => value))
  }

  return (
    <section className="bg-[#F4F6F7] px-6 py-16 antialiased sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-[440px] lg:min-h-[540px]">
          <img
            src={section.imageUrl}
            alt={section.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/18 to-transparent" />
        </div>

        <div className="max-w-[620px] lg:pl-4">
        

          <h2
            className="mt-5 text-[38px] font-normal leading-tight text-[#333333] sm:text-[50px] lg:text-[60px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {section.title}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 text-[#333333]/72">
            <p>
              {section.firstParagraph}
            </p>
            <p>
              {section.secondParagraph}
            </p>
          </div>

          <Link
            href={section.buttonHref}
            className={`${homeActionPrimary} mt-8`}
          >
            {section.buttonLabel} <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
