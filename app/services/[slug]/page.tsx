import Link from 'next/link'
import { CalendarDays, MapPin } from 'lucide-react'
import { notFound } from 'next/navigation'

import { ServiceContactCta } from '@/components/sections/ServiceContactCta'
import { ServiceFaq } from '@/components/sections/ServiceFaq'
import { ServiceLocationsCarousel } from '@/components/sections/ServiceLocationsCarousel'
import { locations, services } from '@/data/site'

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.title} | ZOMAK Medical`,
    description: service.summary
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const availableLocations = locations.filter((location) =>
    location.services.includes(service.title)
  )

  return (
    <section className="bg-white text-[#102A32] antialiased">
      
      {/* 1. HERO HEADER SECTION (Derived from image_ac19fe.jpg) */}
      <header className="px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2F7F95]">
              {service.category}
            </p>
            <h1 className="text-[54px] font-bold leading-[1.02] tracking-[-0.04em] text-[#102A32] sm:text-[72px] lg:text-[82px]">
              {service.title}
            </h1>
            <p className="max-w-[580px] text-[18px] leading-[1.6] tracking-[-0.02em] text-[#1F6175]/80">
              {service.summary}
            </p>

            <div className="pt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#2F7F95] px-6 text-[14px] font-semibold text-white no-underline transition hover:bg-[#246B80]"
              >
                <CalendarDays className="mr-2" size={18} />
                Contact
              </Link>
              <Link
                href="/locations"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 text-[14px] font-semibold text-[#102A32] no-underline transition hover:border-neutral-300 shadow-sm"
              >
                <MapPin className="mr-2" size={18} />
                Find a location
              </Link>
            </div>
          </div>

          <div className="relative aspect-[1.25/1] overflow-hidden rounded-[2rem] bg-neutral-100 shadow-[0_32px_80px_rgba(16,42,50,0.06)]">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* 2. WHAT IT IS / OVERVIEW SECTION - Redesigned based on image_ac2827.jpg */}
<section className="bg-[#fcfbfa] py-24 px-6 sm:px-10 lg:px-16 border-y border-neutral-200/50">
  <div className="mx-auto max-w-[1320px]">
    <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
      
      {/* Left Column: Bold Typographic Anchor */}
      <div className="lg:col-span-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-4 bg-[#2F7F95]/60" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F7F95]">
            Overview
          </span>
        </div>
        <h2 className="text-[38px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#102A32] sm:text-[46px] uppercase">
          A clear overview of <br />
          <span className="font-serif font-normal normal-case italic text-[#2F7F95] block mt-1 tracking-normal">
            {service.title.toLowerCase()}.
          </span>
        </h2>
      </div>
      
      {/* Right Column: Premium Split Content Block with Vertical Accent Line */}
      <div className="lg:col-span-7 grid gap-8 sm:grid-cols-12 lg:pl-12 relative">
        {/* Editorial Vertical Divider for Large Displays */}
        <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-[1px] bg-neutral-300/60" />
        
        <div className="sm:col-span-12 space-y-6">
          <p className="text-[22px] font-medium leading-[1.5] text-[#102A32] tracking-tight">
            {service.details}
          </p>
          
          <div className="h-[1px] w-12 bg-neutral-300" />
          
          <p className="text-[15px] leading-[1.75] text-neutral-500 max-w-[580px]">
            This service is designed to give patients a straightforward way
            to understand whether the visit matches their needs before they
            book. Below, you can review who it is best suited for, what to
            bring, where it is available, and common questions patients ask.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 3. HOW IT WORKS SECTION (Derived from right module of image_ac1cab.jpg) */}
      <section className="bg-[#1F6175] text-[#D9F2F8] py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center max-w-[600px] mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#BEE8F2]">
              The Patient Process
            </span>
            <h2 className="font-serif text-[42px] font-light italic tracking-wide text-white">
              How it works
            </h2>
            <div className="w-12 h-[1px] bg-[#D9F2F8]/30 mx-auto pt-2" />
          </div>

          <div className="space-y-4">
            {service.visitFlow.map((item, index) => (
              <div 
                key={item} 
                className="grid gap-4 sm:grid-cols-12 items-start bg-white/[0.03] border border-white/5 rounded-2xl p-6 lg:p-8 transition-colors hover:bg-white/[0.05]"
              >
                <div className="sm:col-span-1 font-mono text-[15px] font-bold text-[#BEE8F2]/60">
                  0{index + 1}
                </div>
                <div className="sm:col-span-4">
                  <h3 className="text-[18px] font-bold tracking-tight text-white">
                    {item}
                  </h3>
                </div>
                <div className="sm:col-span-7 text-[14px] leading-relaxed text-[#D9F2F8]/75 lg:pl-6">
                  {index === 0 && 'Start with basic intake and compile any specific health documentation required for this consultation.'}
                  {index === 1 && 'A designated healthcare practitioner comprehensively reviews your case architecture and defines clinical next steps.'}
                  {index === 2 && 'Depart with formal physical records, specialized instructions, test itineraries, or custom guidance frameworks.'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL FOOTER AND LAYOUT INJECTIONS */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 pt-12">
        <ServiceLocationsCarousel locations={availableLocations} />
        <ServiceFaq faq={service.faq} />
        <ServiceContactCta />
      </div>
    </section>
  )
}