'use client'

import { useState, ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  ClipboardList,
  DollarSign,
  ExternalLink,
  FileText,
  Phone,
  Search
} from 'lucide-react'

import { locations } from '@/data/site'
import {
  centreStreetImmigrationPhone,
  centreStreetImmigrationPhoneHref,
  offsiteTestingNotice,
  visaMedicalCountries
} from '@/data/visa-medicals'

export default function VisaMedicalsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const centreStreet = locations.find((location) =>
    location.slug === 'centre-street-north-medical-clinic'
  )!

  const filteredCountries = visaMedicalCountries.filter((entry) =>
    entry.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              Visa Medicals <br />
              <span className="text-white">in Calgary</span>
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
          className="flex flex-col justify-center border-b border-[#333333]/10 py-24 sm:py-36 md:py-44"
        >
          <div className="mx-auto max-w-4xl space-y-8 text-center sm:space-y-12">
       

            {/* Headline with Balanced wrapping and gorgeous typographic hierarchy */}
            <h2
              className="mx-auto max-w-3xl text-[34px] font-normal leading-tight text-[#333333] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              International visa medical requirements vary by country
            </h2>

            {/* Editorial Paragraph */}
            <p
              className="mx-auto max-w-2xl text-[16px] font-normal leading-8 text-[#333333]/70 sm:text-xl"
            >
              International visa medicals follow the requirements of the destination country and are separate from Canadian IRCC Immigration Medical Examinations. Both services are available only at ZOMAK Centre Street. {offsiteTestingNotice}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#333333] px-6 py-3 text-sm text-white no-underline transition hover:bg-[#2AA7A1]" href={centreStreetImmigrationPhoneHref}>
                <Phone size={15} /> Call Centre Street
              </a>
              <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-[#333333]/20 px-6 py-3 text-sm text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]" href="/immigration-medical-exam-calgary">
                Canadian IRCC examinations
              </Link>
            </div>

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
                label="What to bring"
                text="Bring the identification accepted for your destination, all visa instructions and forms, case or reference numbers, a medication list, relevant medical reports, and any photographs requested by that country."
              />
              <InfoRow 
                icon={<ClipboardList size={16} className="text-[#2AA7A1]" />}
                label="Confirm your exact requirements"
                text="Tell Centre Street your destination country and visa category before the visit. Requirements differ by country and may change."
              />
              <InfoRow 
                icon={<DollarSign size={16} className="text-[#2AA7A1]" />}
                label="Fees that may apply"
                text="Fees may include the clinic examination, required partner-facility laboratory or X-ray services, repeat testing, follow-up review, or late cancellation. Confirm current amounts and payment arrangements with Centre Street before booking."
              />
              <InfoRow
                icon={<CircleCheck size={16} className="text-[#2AA7A1]" />}
                label="What happens after the examination"
                text="Complete any required testing at the partner facilities identified by the clinic. Results and documents are handled according to the destination country's instructions, and Centre Street will contact you if repeat testing, follow-up, or another document is required."
              />
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 border-b border-[#333333]/10 bg-[#EAF7F6]">
          <div className="grid min-h-[620px] w-full lg:grid-cols-2">
            <div className="relative min-h-[360px] lg:min-h-full">
              <img src={centreStreet.heroImageUrl} alt={centreStreet.heroImageAlt} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
              <h2 className="max-w-[680px] font-serif text-[40px] font-normal leading-[1.06] sm:text-[52px]">
                International visa medicals at Centre Street
              </h2>
              <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-[#333333]/70">
                Tell the clinic your destination country and visa category when booking. The team will confirm the required documents, preparation, current fees and appointment availability.
              </p>

              <div className="mt-9 border-y border-[#333333]/15">
                <div className="grid gap-1 border-b border-[#333333]/15 py-5 sm:grid-cols-[130px_1fr] sm:gap-5">
                  <p className="font-medium">Clinic</p>
                  <p className="text-[#333333]/68">ZOMAK Centre Street</p>
                </div>
                <div className="grid gap-1 border-b border-[#333333]/15 py-5 sm:grid-cols-[130px_1fr] sm:gap-5">
                  <p className="font-medium">Address</p>
                  <p className="text-[#333333]/68">{formatLocationAddress(centreStreet)}</p>
                </div>
                <div className="grid gap-1 py-5 sm:grid-cols-[130px_1fr] sm:gap-5">
                  <p className="font-medium">Phone</p>
                  <a className="text-[#333333]/68 underline decoration-[#333333]/20 underline-offset-4 hover:text-[#247F7A]" href={centreStreetImmigrationPhoneHref}>{centreStreetImmigrationPhone}</a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#333333] px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]" href={centreStreetImmigrationPhoneHref}><Phone size={15} />Call Centre Street</a>
                <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333333]/20 px-6 py-3 text-sm font-medium text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]" href="https://csnmc.ca/visa-medicals/" rel="noopener noreferrer" target="_blank">Visa-medical information <ExternalLink size={14} /></a>
                <Link className="inline-flex min-h-12 items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-[#333333] no-underline hover:text-[#247F7A]" href={`/locations/${centreStreet.slug}`}>View clinic <ArrowUpRight size={14} /></Link>
              </div>
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
                          Appointment and Partner Testing
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
