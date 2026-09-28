import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { homeActionPrimary } from '@/components/ui/homeActionStyles'
import type { HomepageContent } from '@/lib/sanity/homepage'

export function GriffinAesthetics({ content }: { content?: HomepageContent['aesthetics'] }) {
  return (
    <section className="border-y border-[#333333]/10 bg-[#EAF7F6] text-[#333333]">
      <div className="grid min-h-[620px] w-full lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:px-16 xl:px-20">
          <div className="max-w-[650px]">
            <h2 className="font-serif text-[40px] font-normal leading-[1.06] sm:text-[52px] lg:text-[58px]">
              Medical aesthetics consultations at Griffin Road
            </h2>
            <p className="mt-6 max-w-[590px] text-[18px] leading-8 text-[#333333]">
              Explore Botox, fillers and PRP treatments available at ZOMAK Griffin Road. Learn what each option supports, how suitability is assessed and how to prepare for a consultation.
            </p>
            <Link
              href={content?.buttonHref || '/services/aesthetics'}
              className={`${homeActionPrimary} mt-8`}
            >
              Explore treatments <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-[#F4F6F7] lg:min-h-full">
          <img
            src={content?.imageUrl || '/images/home-aesthetics-cta.jpg'}
            alt={content?.imageAlt || 'Medical aesthetics consultation at ZOMAK Griffin Road'}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
