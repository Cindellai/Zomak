'use client'

import { useEffect, useState, ReactNode, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileText,
  MapPin,
  Phone,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

import { locations } from '@/data/site'
import { visaMedicalCountries } from '@/data/visa-medicals'

const visaMedicalLocationImages: Record<string, string> = {
  'griffin-road-medical-clinic':
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85',
  'centre-street-north-medical-clinic':
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85',
  lewisburg:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
  northmount:
    'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=85',
  fairview:
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85'
}

export default function VisaMedicalsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [introVisible, setIntroVisible] = useState(false)
  const introRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const visaMedicalLocations = locations.filter((location) =>
    location.services.includes('Visa Medical Experts')
  )

  const filteredCountries = visaMedicalCountries.filter((entry) =>
    entry.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const handleScroll = () => {
      const intro = introRef.current

      if (!intro || introVisible || window.scrollY < 80) return

      const rect = intro.getBoundingClientRect()
      const triggerPoint = window.innerHeight * 0.72

      if (rect.top < triggerPoint && rect.bottom > 0) {
        setIntroVisible(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="min-h-screen overflow-hidden bg-[#F4F6F7] font-sans text-[#333333] antialiased">
      
      {/* ================= HERO BANNER ================= */}
      <header className="relative w-full pt-16">
        <div className="relative h-[70svh] min-h-[440px] w-full overflow-hidden bg-[#333333] sm:h-[60vh] sm:min-h-[480px]">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80" 
            alt="Airport runway and travel horizon" 
            className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/50 via-[#333333]/10 to-transparent" />

          {/* Symmetrical Left Typography & Rotating Right Seal */}
          <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-[1400px] flex-col gap-7 px-6 sm:bottom-12 sm:flex-row sm:items-end sm:justify-between sm:px-10 lg:px-16">
            <h1 className="max-w-2xl text-[42px] font-normal leading-tight text-white sm:text-7xl md:text-[84px]">
              Professional <br />
              <span className="text-white">Visa Medicals</span>
            </h1>

            {/* Rotating Circle Badge */}
            <div className="group relative flex size-24 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#BFEAE7] shadow-lg transition-all duration-300 hover:scale-105 sm:size-28">
              <svg className="absolute w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="perfectCirclePath"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text fill="#333333" className="text-[7.5px] font-bold">
                  <textPath 
                    href="#perfectCirclePath" 
                    startOffset="0%" 
                    textLength="238" 
                    lengthAdjust="spacing"
                  >
                    • VISA MEDICALS • CLINIC CERTIFIED 
                  </textPath>
                </text>
              </svg>
              <span className="text-sm font-normal text-[#333333] z-10">zomak</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container ensuring perfectly aligned horizontal bounds */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* ================= TALL EDITORIAL SECOND SECTION ================= */}
        <section
          ref={introRef}
          className="flex flex-col justify-center border-b border-[#333333]/10 py-24 sm:py-36 md:py-44"
        >
          <div className="mx-auto max-w-4xl space-y-8 text-center sm:space-y-12">
       

            {/* Headline with Balanced wrapping and gorgeous typographic hierarchy */}
            <h2
              className={`mx-auto max-w-3xl text-[34px] font-normal leading-tight text-[#333333] transition-all duration-700 ease-out sm:text-5xl md:text-6xl lg:text-7xl ${
                introVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              Seamless medical clearances built on trusted clinic expertise
            </h2>

            {/* Editorial Paragraph */}
            <p
              className={`mx-auto max-w-2xl text-[16px] font-normal leading-8 text-[#333333]/70 transition-all delay-150 duration-700 ease-out sm:text-xl ${
                introVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              We provide streamlined clinical charting, quick on-site lab diagnostics, and secure direct submission lines to foreign immigration portals.
            </p>

          </div>
        </section>

        {/* ================= PATIENT PROTOCOLS ================= */}
        <section className="grid items-center gap-10 border-b border-[#333333]/10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          {/* Left Side: Dynamic Flight Status Terminal Status Board */}
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#F4F6F7] shadow-sm sm:aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&w=1200&q=80" 
              alt="Airport flight status information grid" 
              className="w-full h-full object-cover object-center brightness-[0.95]"
            />
          </div>

          {/* Right Side: Step-by-Step Info Rows */}
          <div className="space-y-8 lg:pl-6">
            <div className="space-y-3">
              <span className="text-sm font-normal text-[#2AA7A1]">
                Patient Protocols
              </span>
              <h3 className="text-[32px] font-normal leading-tight text-[#333333] sm:text-4xl">
                Essential preparation for your examination appointment
              </h3>
            </div>
            
            <div className="divide-y divide-[#333333]/10 pt-2">
              <InfoRow 
                icon={<FileText size={16} className="text-[#2AA7A1]" />}
                label="Bring Primary Identification" 
                text="Most visa medicals require an unexpired passport or valid driver's license for identity confirmation." 
              />
              <InfoRow 
                icon={<ClipboardList size={16} className="text-[#2AA7A1]" />}
                label="Bring Required Forms" 
                text="Bring all visa instructions, agency forms, case numbers, and related medical paperwork." 
              />
              <InfoRow 
                icon={<Clock3 size={16} className="text-[#2AA7A1]" />}
                label="Standard Turnaround" 
                text="Most listed results are ready within 3 days, depending on the testing required." 
              />
            </div>
          </div>
        </section>

        {/* ================= AVAILABLE LOCATIONS (CAROUSEL) ================= */}
        <section className="relative left-1/2 w-screen -translate-x-1/2 border-b border-[#333333]/10 bg-white py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-14">
            <div className="space-y-3">
              <span className="text-sm font-normal text-[#2AA7A1]">
                Available Locations
              </span>
              <h3 className="max-w-[680px] text-[32px] font-normal leading-tight text-[#333333] sm:text-4xl">
                Book visa medicals at these ZOMAK clinics
              </h3>
            </div>
            
            <div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-end">
              <p className="hidden max-w-[380px] text-lg font-light leading-relaxed text-[#333333]/70 lg:block">
                Tell the clinic your destination country when booking so the team can prepare.
              </p>
              {/* Carousel Navigation Buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={() => scrollCarousel('left')}
                className="flex size-11 items-center justify-center rounded-full border border-[#333333]/16 bg-white text-[#333333] shadow-sm transition hover:border-transparent hover:bg-[#2AA7A1] hover:text-white active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => scrollCarousel('right')}
                className="flex size-11 items-center justify-center rounded-full border border-[#333333]/16 bg-[#333333] text-white shadow-sm transition hover:bg-[#2AA7A1] active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div 
            ref={carouselRef}
            className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 [scrollbar-width:none] sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {visaMedicalLocations.map((location) => (
              <article
                className="group flex min-w-[calc(100vw-2.5rem)] max-w-[390px] snap-start flex-col overflow-hidden rounded-2xl border border-[#333333]/10 bg-white shadow-[0_2px_12px_rgba(51,51,51,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2AA7A1]/20 hover:shadow-[0_20px_40px_-10px_rgba(42,167,161,0.06)] sm:min-w-[360px] lg:min-w-[380px]"
                key={location.slug}
              >
                {/* Clinic Cover Image - Clean (Pill Overlays Removed) */}
                <div className="relative aspect-[1.55/1] overflow-hidden bg-[#F4F6F7] sm:aspect-[1.65/1]">
                  <img
                    src={
                      visaMedicalLocationImages[location.slug] ??
                      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85'
                    }
                    alt={`${location.name} clinic`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/10 via-transparent to-transparent" />
                </div>

                {/* Content Block Details - Modern Typography (Pills Removed) */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-8">
                  <div>
                    {/* Minimalist Location Tag */}
                   

                    <div className="space-y-3">
                      <h4 className="text-xl font-normal text-[#333333] transition-colors duration-200 group-hover:text-[#2AA7A1] sm:text-2xl">
                        {location.name}
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-[#333333]/60">
                        {formatLocationAddress(location)}
                      </p>
                    </div>
                  </div>

                  {/* Foot Actions Area */}
                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#333333]/5 pt-5 sm:mt-8">
                    {location.phone ? (
                      <a
                        className="inline-flex min-w-0 items-center gap-2 text-sm font-normal text-[#333333] no-underline transition-colors hover:text-[#2AA7A1]"
                        href={`tel:${location.phone.replaceAll(' ', '')}`}
                      >
                        <Phone size={14} className="text-[#2AA7A1]" />
                        {location.phone}
                      </a>
                    ) : (
                      <span className="inline-flex min-w-0 items-center gap-2 text-sm font-normal text-[#333333]/55">
                        <Phone size={14} className="text-[#2AA7A1]" />
                        Phone to confirm
                      </span>
                    )}
                    <Link
                      className="inline-flex items-center gap-1.5 text-sm font-normal text-[#2AA7A1] no-underline transition-all hover:gap-3"
                      href={`/locations/${location.slug}`}
                    >
                      View clinic
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>
        </section>

        {/* ================= DIRECTORY HEAD ================= */}
        <div className="py-14 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-12">
            <div className="space-y-3">
              <span className="text-sm font-normal text-[#2AA7A1]">
                Jurisdictions
              </span>
              <h3 className="text-[32px] font-normal leading-tight text-[#333333] sm:text-3xl">
                Select your visa destination
              </h3>
            </div>

            {/* Minimalist Search Line */}
            <div className="group relative w-full min-w-0 pt-4 md:w-[360px]">
              <span className="absolute bottom-4 left-0 text-[#333333]/50 group-focus-within:text-[#2AA7A1] transition-colors">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Search destination country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pb-4 pl-8 bg-transparent border-b-2 border-[#333333]/10 focus:border-[#2AA7A1] text-lg font-light outline-none transition-all placeholder:text-[#333333]/30"
              />
            </div>
          </div>

          {/* ================= ACCORDION DIRECTORY ================= */}
          <div className="mx-auto max-w-[1040px] space-y-4">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((entry, index) => (
                <details
                  className="group bg-white rounded-xl border border-[#333333]/5 hover:border-[#2AA7A1]/20 transition-all duration-200 overflow-hidden shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)]"
                  id={countryId(entry.country)}
                  key={entry.country}
                  open={index === 0 && searchQuery === ''}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 select-none sm:p-8">
                    <h2 className="min-w-0 text-xl font-normal text-[#333333] sm:text-2xl">
                      {entry.country}
                    </h2>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BFEAE7]/30 text-[#2AA7A1] transition-transform duration-300 group-open:rotate-180 group-hover:bg-[#2AA7A1] group-hover:text-white">
                      <ChevronDown size={18} />
                    </div>
                  </summary>

                  <div className="grid gap-8 border-t border-[#333333]/5 px-6 pb-8 pt-8 sm:px-10 sm:pb-10 md:grid-cols-12">
                    
                    {/* Left Info Bracket */}
                    <div className="md:col-span-4 space-y-3">
                      <span className="text-sm font-normal text-[#2AA7A1] block">
                        Overview Context
                      </span>
                      <p className="text-sm font-light leading-relaxed text-[#333333]/80">
                        {entry.summary}
                      </p>
                    </div>

                    {/* Center Info Bracket */}
                    <div className="md:col-span-4 space-y-6 md:border-x md:border-[#333333]/10 md:px-6">
                      <div className="space-y-2">
                        <h4 className="text-sm font-normal text-[#2AA7A1]">
                          Tests Include
                        </h4>
                        <ul className="space-y-1.5 text-sm text-[#333333]/90 font-light">
                          {entry.tests.map((t) => (
                            <li key={t} className="flex gap-2 items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2AA7A1]" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-normal text-[#2AA7A1]">
                          Preparation
                        </h4>
                        <ul className="space-y-1.5 text-sm text-[#333333]/90 font-light">
                          {entry.preparation.map((p) => (
                            <li key={p} className="flex gap-2 items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2AA7A1]" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Info Bracket */}
                    <div className="md:col-span-4 space-y-6">
                      <div className="space-y-1">
                        <h4 className="text-sm font-normal text-[#2AA7A1]">
                          During Testing
                        </h4>
                        <p className="text-sm text-[#333333]/80 font-light leading-relaxed">
                          {entry.during}
                        </p>
                      </div>
                      <div className="space-y-1 pt-4 border-t border-[#333333]/10">
                        <h4 className="text-sm font-normal text-[#2AA7A1]">
                          Results Timeline
                        </h4>
                        <p className="text-sm text-[#333333]/80 font-light leading-relaxed">
                          {entry.results}
                        </p>
                      </div>
                    </div>

                  </div>
                </details>
              ))
            ) : (
              <div className="text-center py-12 text-[#333333]/60 font-light">
                No matching country found. Please try another search term.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  text
}: {
  icon: ReactNode
  label: string
  text: string
}) {
  return (
    <div className="flex items-start gap-4 py-5 first:pt-0 last:pb-0 sm:gap-5">
      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#BFEAE7]/20 sm:size-10">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-base font-normal text-[#333333]">
          {label}
        </h4>
        <p className="text-sm font-light leading-relaxed text-[#333333]/70">
          {text}
        </p>
      </div>
    </div>
  )
}

function countryId(country: string) {
  return country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function formatLocationAddress(location: (typeof locations)[number]) {
  return [
    location.address,
    [location.city, location.province, location.postalCode].filter(Boolean).join(', ')
  ]
    .filter(Boolean)
    .join(' · ')
}
