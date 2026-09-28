import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { homeActionPrimary } from '@/components/ui/homeActionStyles'
import type { HomepageContent } from '@/lib/sanity/homepage'

export function FamilyPracticeCta({ content }: { content?: HomepageContent['familyPractice'] }) {
  return (
    <section aria-labelledby="family-practice-heading" className="w-full min-w-0 bg-[#E8F2EF] antialiased">
      <div className="grid w-full min-w-0 grid-cols-1 lg:min-h-[690px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)]">
        <div className="flex min-w-0 items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-16 xl:pl-[max(5rem,calc((100vw-1400px)/2))] xl:pr-16">
          <div className="w-full max-w-[620px]">
            <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#247F7A]">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2AA7A1]" aria-hidden="true" />
              <span>Family practice</span>
              <span className="h-px flex-1 bg-[#247F7A]/25" aria-hidden="true" />
            </div>

            <h2 id="family-practice-heading" className="mt-7 max-w-[610px] font-serif text-[39px] font-normal leading-[1.07] tracking-[-0.025em] text-[#263B38] sm:text-[48px] lg:text-[44px] xl:text-[52px]">
              {content?.headingBefore || 'Everyday care for '}
              <span className="italic text-[#248E89]">{content?.headingAccent || 'children'}</span>
              {content?.headingAfter || ', families, and routine health needs'}
            </h2>

            <p className="mt-6 max-w-[550px] text-[16px] font-normal leading-7 text-[#465B57] sm:text-[17px] sm:leading-8">
              {content?.description || 'Family practice visits support common concerns, preventive care, pediatric guidance, and follow-up planning with ZOMAK clinic teams.'}
            </p>

            <div className="mt-8">
              <Link
                href={content?.buttonHref || '/services/family-practice'}
                className={homeActionPrimary}
              >
                <span>{content?.buttonLabel || 'Explore family practice'}</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[410px] overflow-hidden bg-[#D3E3DF] sm:min-h-[520px] lg:min-h-full">
          <img
            src={content?.imageUrl || 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=85'}
            alt={content?.imageAlt || 'Family practice care for parents and children'}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172522]/15 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
