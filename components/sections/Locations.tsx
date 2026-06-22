'use client'

import { Clock, MapPin, Navigation } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { locations } from '@/data/site'

const getDisplayName = (name: string) =>
  name.replace('ZOMAK ', '').replace(' Medical Clinic', '')

const getDirectionsHref = (location: (typeof locations)[number]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.address} ${location.city} ${location.province}`
  )}`

export function Locations() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#fcfbfa] px-6 py-20 sm:px-10 lg:px-16 lg:py-32 border-t border-neutral-200/60">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

          {/* Left column — Interactive Accordion Hub */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F7F95] block mb-3">
                / Care Network
              </span>
              <h2 className="text-[48px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#102A32] sm:text-[60px]">
                Our Locations
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 max-w-[480px]">
                You can find us at the following regional Calgary and Cochrane clinical environments.
              </p>
            </div>

            {/* Location interactive list */}
            <div className="border-t border-neutral-200/60 pt-2">
              {locations.map((location, index) => {
                const isOpen = openIndex === index
                const displayName = getDisplayName(location.name)

                return (
                  <div key={location.name} className="border-b border-neutral-200/60 py-1">
                    {isOpen ? (
                      /* Expanded Card - Fixed background, alignments and text styling based on image_acf774.jpg */
                      <div className="my-4 rounded-2xl bg-white p-6 shadow-[0_12px_40px_rgba(16,42,50,0.04)] border border-neutral-200/70 transition-all duration-300">
                        
                        {/* Header Row */}
                        <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[12px] font-bold text-[#2F7F95]">
                              0{index + 1}
                            </span>
                            <h3 className="text-[19px] font-bold tracking-tight text-[#102A32]">
                              {displayName}
                            </h3>
                          </div>
                          
                          <Link
                            href={getDirectionsHref(location)}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2F7F95] no-underline transition hover:text-[#1F6175]"
                          >
                            <Navigation size={12} className="stroke-[2.5]" />
                            Get Directions
                          </Link>
                        </div>

                        {/* Explicit Card Sub-panel Structure */}
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#fbfaf7] rounded-xl p-5 border border-neutral-200/50">
                          
                          {/* Address block */}
                          <div className="space-y-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-white text-[#2F7F95] shadow-sm border border-neutral-200/60">
                              <MapPin size={13} className="stroke-[2.5]" />
                            </div>
                            <p className="text-[12px] font-bold text-[#102A32] uppercase tracking-wider">
                              Clinic Address
                            </p>
                            <p className="text-[13px] leading-relaxed text-neutral-500 font-medium">
                              {location.address}
                              <br />
                              {location.city}, {location.province}
                            </p>
                          </div>

                          {/* Hours block */}
                          <div className="space-y-2">
                            <div className="flex size-7 items-center justify-center rounded-lg bg-white text-[#2F7F95] shadow-sm border border-neutral-200/60">
                              <Clock size={13} className="stroke-[2.5]" />
                            </div>
                            <p className="text-[12px] font-bold text-[#102A32] uppercase tracking-wider">
                              Hours of Operation
                            </p>
                            <p className="text-[13px] leading-relaxed text-neutral-500 font-medium">
                              Please contact the clinic directly for daily operating itineraries.
                            </p>
                          </div>

                        </div>
                      </div>
                    ) : (
                      /* Collapsed Row State */
                      <button
                        type="button"
                        onClick={() => setOpenIndex(index)}
                        className="group flex w-full items-center justify-between py-5 text-left transition-all duration-200"
                      >
                        <div className="flex items-center gap-5">
                          <span className="font-mono text-[12px] font-bold text-neutral-400 group-hover:text-[#2F7F95] transition-colors">
                            0{index + 1}
                          </span>
                          <div>
                            <h3 className="text-[18px] font-bold tracking-tight text-neutral-400 group-hover:text-[#102A32] transition-colors">
                              {displayName}
                            </h3>
                            <p className="text-[13px] text-neutral-400/80 font-medium group-hover:text-neutral-500 transition-colors mt-0.5">
                              {location.address}
                            </p>
                          </div>
                        </div>
                        
                        <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-300 group-hover:text-[#2F7F95] transition-colors pr-1">
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
          <div className="lg:col-span-6 lg:pl-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-neutral-100 shadow-[0_24px_60px_rgba(16,42,50,0.065)] border border-neutral-200/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=90"
                alt="Medical clinic pristine care interior reception hub"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}