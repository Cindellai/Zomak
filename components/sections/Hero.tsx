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
  description: 'Walk in for timely care when you need it. Our Calgary and Cochrane clinics support everyday illnesses, minor concerns, family health needs, and same day questions.',
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#202929]/75 via-[#202929]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#202929]/55 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1400px] items-end justify-start px-5 pb-14 pt-24 sm:min-h-[780px] sm:px-10 sm:pb-16 lg:min-h-[820px] lg:px-16 lg:pb-20">
        <div className="w-full max-w-[650px] text-left text-white">
          <h1 className="font-serif text-[40px] font-normal leading-[1.04] text-white sm:text-[52px] lg:text-[60px]">
            {hero.title}
          </h1>

          <p className="mt-5 max-w-[620px] text-[17px] font-normal leading-7 text-white/90 sm:text-[18px]">
              {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={hero.primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#2AA7A1] px-7 text-sm font-normal text-white no-underline  transition-all duration-200 hover:scale-[1.01]"
              >
                {hero.primaryLabel}
              </Link>

           
          </div>
        </div>
      </div>
    </section>
  )
}
