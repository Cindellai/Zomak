import Image from 'next/image'
import Link from 'next/link'
import type { HomepageContent } from '@/lib/sanity/homepage'

const AVATARS = [
  { initials: 'ZN', bg: 'bg-[#2AA7A1]' },
  { initials: 'FM', bg: 'bg-[#2AA7A1]' },
  { initials: 'HC', bg: 'bg-[#2AA7A1]' },
]

const fallback = {
  title: 'ZOMAK Medical Clinic',
  accentTitle: '',
  description: 'Accessible, patient-focused medical care for individuals and families across Calgary and Cochrane.',
  imageUrl: '/images/locations/fairview-hero.jpg',
  imageAlt: 'Reception desk and branded sign at Zomak Medical Clinic in Fairview',
  primaryLabel: 'Book appointment',
  primaryHref: '/contact',
  secondaryLabel: 'Browse Services',
  secondaryHref: '/services/family-practice'
}

export function Hero({ content }: { content?: HomepageContent['hero'] }) {
  const hero = {
    ...fallback,
    ...Object.fromEntries(Object.entries(content || {}).filter(([, value]) => value)),
    title: fallback.title,
    accentTitle: fallback.accentTitle,
    description: fallback.description,
    imageUrl: fallback.imageUrl,
    imageAlt: fallback.imageAlt
  }

  return (
    <section className="relative min-h-[720px] overflow-hidden rounded-b-[2rem] bg-[#333333] sm:min-h-[780px] lg:min-h-[820px]">
      <Image
        src={hero.imageUrl}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#173F42]/15" />
      <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#202929]/80 via-[#263E3E]/30 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1360px] items-end px-5 pb-16 pt-28 sm:min-h-[780px] sm:px-10 sm:pb-20 lg:min-h-[820px] lg:px-16 lg:pb-24">
        <div className="max-w-[780px]">
            <h1 className="font-serif text-[44px] font-normal leading-[1.02] text-white sm:text-[64px] lg:text-[76px]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-[620px] text-[18px] font-normal leading-8 text-white/90 sm:text-[20px]">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={hero.primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#2AA7A1] px-7 text-sm font-normal text-white no-underline  transition-all duration-200 hover:scale-[1.01]"
              >
                {hero.primaryLabel}
              </Link>

              <Link
                href={hero.secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-normal text-[#333333] no-underline shadow-md transition-all duration-200 hover:bg-[#F4F6F7] hover:scale-[1.01]"
              >
                {hero.secondaryLabel}
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
