import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { homeActionPrimary, homeActionSecondary } from '@/components/ui/homeActionStyles'
import type { HomepageContent } from '@/lib/sanity/homepage'

const fallback = {
  title: 'Walk-In Clinics and Family Doctors Across Calgary and Cochrane',
  description: 'Find same-day medical care or walk-in, register with a family physician, complete an immigration or visa medical, or access referral-based specialist care through five convenient ZOMAK locations.',
  imageUrl: '/images/home-zomak-logo.jpg',
  imageAlt: 'Zomak Medical Clinic logo displayed inside the clinic',
  primaryLabel: 'Find a Clinic',
  primaryHref: '/locations',
  secondaryLabel: 'Register with a Family Doctor',
  secondaryHref: '/doctors?filter=accepting-new-patients#provider-directory'
}

export function Hero({ content }: { content?: HomepageContent['hero'] }) {
  // The homepage H1 and introduction are approved launch copy from the website review.
  // Keep the primary patient paths consistent with that approved copy.
  const hero = {
    title: fallback.title,
    description: fallback.description,
    imageUrl: content?.imageUrl || fallback.imageUrl,
    imageAlt: content?.imageAlt || fallback.imageAlt,
    primaryLabel: fallback.primaryLabel,
    primaryHref: fallback.primaryHref,
    secondaryLabel: fallback.secondaryLabel,
    secondaryHref: fallback.secondaryHref
  }

  return (
    <section className="relative isolate min-h-[790px] overflow-hidden bg-[#F4F7F6] sm:min-h-[840px] lg:min-h-[880px]">
      <Image
        src={hero.imageUrl}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="origin-bottom scale-[1.5] object-cover object-[60%_center] sm:scale-100 sm:object-[center_100%] sm:opacity-[0.15] lg:opacity-30 xl:object-[center_82%] xl:opacity-100"
      />
      <div className="relative z-10 mx-auto flex min-h-[790px] max-w-[1400px] items-end px-5 pb-14 pt-24 sm:min-h-[840px] sm:px-10 sm:pb-28 lg:min-h-[880px] lg:px-16 lg:pb-48 xl:pb-36">
        <div className="max-w-[760px] text-[#303938]">
          <h1 className="max-w-[650px] font-serif text-[42px] font-normal leading-[1.04] tracking-[-0.025em] text-[#303938] sm:text-[54px] lg:text-[61px]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[640px] text-[16px] font-normal leading-7 text-[#465250] sm:text-[18px] sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={hero.primaryHref}
              className={homeActionPrimary}
            >
              {hero.primaryLabel}
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
            </Link>
            <Link
              href={hero.secondaryHref}
              className={homeActionSecondary}
            >
              {hero.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
