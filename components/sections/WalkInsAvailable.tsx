import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function WalkInsAvailable() {
  return (
    <section className="bg-[#F4F6F7] px-6 py-16 antialiased sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-[440px] lg:min-h-[540px]">
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=85"
            alt="Friendly clinical walk-in care appointment"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/18 to-transparent" />
        </div>

        <div className="max-w-[620px] lg:pl-4">
        

          <h2
            className="mt-5 text-[38px] font-normal leading-tight text-[#333333] sm:text-[50px] lg:text-[60px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Walk-ins are available at all ZOMAK clinics
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 text-[#333333]/72">
            <p>
              Visit any ZOMAK clinic for walk-in support across everyday health needs, family care, forms, testing direction, and same-day questions.
            </p>
            <p>
              Availability can vary by provider schedule and daily clinic volume, so calling ahead is recommended when timing matters.
            </p>
          </div>

          <Link
            href="/locations"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#333333] px-6 py-3.5 text-sm font-normal  text-white no-underline transition hover:bg-[#2AA7A1]"
          >
            Find a clinic <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
