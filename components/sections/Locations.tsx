'use client'

import { ArrowRight, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { clinicHoursSummary, locations } from '@/data/site'
import type { HomepageContent } from '@/lib/sanity/homepage'
import { homeActionSecondary } from '@/components/ui/homeActionStyles'

export function Locations({ content }: { content?: HomepageContent['locations'] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="locations" className="border-t border-[#333333]/10 bg-[#F4F6F7] px-4 py-16 antialiased sm:px-10 sm:py-20 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start xl:gap-16">

          {/* Left column — Interactive Accordion Hub */}
          <div className="min-w-0 space-y-8 lg:col-span-6">
            <div>
            
            
              <h2
                className="text-[40px] font-normal leading-tight text-[#333333] sm:text-[58px] lg:text-[72px]"
              >
                {content?.heading || 'Our Locations'}
              </h2>
              <p className="mt-5 max-w-[560px] text-[18px] leading-8 text-[#333333]">
                {content?.description || 'Find ZOMAK clinics across Calgary and Cochrane, then open directions or review the clinic details before you visit.'}
              </p>
            </div>

            {/* Location interactive list */}
            <div className="space-y-3">
              {locations.map((location, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={location.name}>
                    {isOpen ? (
                      <div className="min-w-0 overflow-hidden rounded-2xl border border-[#2AA7A1]/20 bg-white p-4 shadow-[0_18px_50px_rgba(16,42,50,0.08)] transition-all duration-300 sm:p-6">
                        
                        {/* Header Row */}
                        <div className="flex min-w-0 flex-col gap-4 border-b border-[#333333]/8 pb-5 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex min-w-0 items-center gap-3">
                           
                            <h3 className="min-w-0 text-[28px] font-normal leading-tight text-[#333333] sm:text-[21px]">
                              {location.name}
                            </h3>
                          </div>
                          
                          <Link
                            href={`/locations/${location.slug}`}
                            className={`${homeActionSecondary} w-full min-w-0 sm:w-auto`}
                          >
                            View Clinic
                            <ArrowRight size={16} aria-hidden="true" />
                          </Link>
                        </div>

                        {/* Explicit Card Sub-panel Structure */}
                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          
                          {/* Address block */}
                          <div className="min-w-0 rounded-xl bg-[#F4F6F7] p-4 sm:p-5">
                            <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-[#333333]/10 bg-white text-[#2AA7A1] shadow-sm">
                              <MapPin size={13} className="stroke-[2.5]" />
                            </div>
                            <p className="text-xs font-normal text-[#333333]">
                              Clinic Address
                            </p>
                            <p className="mt-3 text-[16px] font-normal leading-7 text-[#333333] sm:text-[14px]">
                              {location.address}
                              <br />
                              {[location.city, location.province, location.postalCode]
                                .filter(Boolean)
                                .join(', ')}
                            </p>
                          </div>

                          {/* Hours block */}
                          <div className="min-w-0 rounded-xl bg-[#F4F6F7] p-4 sm:p-5">
                            <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-[#333333]/10 bg-white text-[#2AA7A1] shadow-sm">
                              <Clock size={13} className="stroke-[2.5]" />
                            </div>
                            <p className="text-xs font-normal text-[#333333]">
                              Hours of Operation
                            </p>
                            <p className="mt-3 text-[16px] font-normal leading-7 text-[#333333] sm:text-[14px]">
                              {clinicHoursSummary}
                            </p>
                          </div>

                        </div>
                      </div>
                    ) : (
                      /* Collapsed Row State */
                      <button
                        type="button"
                        onClick={() => setOpenIndex(index)}
                        className="group flex w-full min-w-0 items-center justify-between gap-3 overflow-hidden rounded-2xl border border-transparent bg-white/55 px-4 py-5 text-left transition-all duration-200 hover:border-[#2AA7A1]/20 hover:bg-white hover:shadow-[0_10px_30px_rgba(16,42,50,0.05)] sm:px-5"
                      >
                        <div className="flex min-w-0 items-center gap-4">
                          
                          <div className="min-w-0">
                            <h3 className="truncate text-[18px] font-normal text-[#333333]/70 transition-colors group-hover:text-[#333333]">
                              {location.name}
                            </h3>
                            <p className="mt-1 truncate text-[13px] font-medium text-[#333333]/45 transition-colors group-hover:text-[#333333]/60">
                              {location.address}
                            </p>
                          </div>
                        </div>
                        
                        <span className="shrink-0 text-[13px] font-normal text-[#333333]/55 transition-colors group-hover:text-[#2AA7A1] sm:pl-4 sm:text-[11px]">
                          View
                        </span>
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column — Premium Framed Canvas Photo Asset */}
          <div className="hidden lg:col-span-6 lg:block lg:pl-4">
            <div className="sticky top-28 relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#F4F6F7] shadow-[0_24px_70px_rgba(16,42,50,0.08)]">
              <img
                src={locations[openIndex]?.heroImageUrl || content?.imageUrl}
                alt={locations[openIndex]?.heroImageAlt || content?.imageAlt || locations[openIndex]?.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#333333]/68 to-transparent p-7 pt-24">
               
              
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
