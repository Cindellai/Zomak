'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  ArrowUpRight,
  MapPin
} from 'lucide-react'

import { providers } from '@/data/providers'

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const clinics = [
    'All',
    'Zomak Northmount',
    'Zomak Fairview',
    'Zomak Centre Street',
    'Zomak Griffin Road',
  ]

  const filteredProviders = activeFilter === 'All' 
    ? providers 
    : providers.filter(p => p.location === activeFilter || p.secondaryLocation === activeFilter)

  return (
    <section className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      
      {/* ================= HERO IMAGE HEADER (Kept Exactly the Same) ================= */}
      <div className="relative h-[42vh] min-h-[360px] w-full overflow-hidden bg-[#333333]">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=90"
          alt="ZOMAK Medical Center"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/45 to-transparent" />

        {/* Hero Headline Content */}
        <div className="absolute bottom-12 inset-x-0">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-between gap-6 px-6 sm:px-10 md:flex-row md:items-end lg:px-16">
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
                Our <span className="font-sans font-normal text-white">Providers</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FILTER AND NAVIGATION TAB BAR ================= */}
      <div className="sticky top-16 z-40 border-b border-[#333333]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] overflow-x-auto px-6 sm:px-10 lg:px-16">
          {clinics.map((clinic) => (
            <button
              key={clinic}
              onClick={() => setActiveFilter(clinic)}
              className={`whitespace-nowrap border-b-2 px-5 py-4 text-sm font-normal transition-all duration-200 ${
                activeFilter === clinic
                  ? 'border-[#2AA7A1] text-[#333333]'
                  : 'border-transparent text-[#333333]/50 hover:text-[#333333]'
              }`}
            >
              {clinic}
            </button>
          ))}
        </div>
      </div>

      {/* ================= PROVIDERS CONTAINER ================= */}
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
        
        {/* Clean, Simple Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map((provider) => (
            <Link
              key={provider.slug}
              href={`/doctors/${provider.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-100 bg-white p-5 text-[#333333] no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-100"
            >
              <div>
                {/* 1. Portrait (Clean, smooth frame without nested border outlines) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#F4F6F7]">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  />
                </div>

                {/* 2. Simplified Metadata Block */}
                <div className="mt-5 px-1 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-normal tracking-tight text-[#333333] leading-snug transition-colors group-hover:text-[#2AA7A1]">
                      {provider.name}
                    </h3>
                    {provider.credentials && (
                      <p className="text-[13px] font-normal leading-relaxed text-[#333333]/50 line-clamp-2">
                        {provider.credentials}
                      </p>
                    )}
                  </div>

                  <p className="text-[14px] font-normal text-[#2AA7A1]">
                    {provider.role}
                  </p>
                </div>
              </div>

              {/* 3. Extremely Muted, Elegant Footer */}
              <div className="mt-6 border-t border-neutral-100 px-1 pt-4 flex items-center justify-between gap-4 text-[#333333]/80">
                <div className="flex min-w-0 items-center gap-1.5">
                  <MapPin size={14} className="shrink-0 text-[#2AA7A1]" />
                  <span className="truncate text-[16px] font-normal  text-[#333333]">
                    {provider.location}
                  </span>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-normal text-[#333333] transition-colors group-hover:text-[#2AA7A1]">
                  
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
