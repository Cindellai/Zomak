'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import type { Location } from '@/data/site'

export function ServiceLocationsCarousel({ locations }: { locations: Location[] }) {
  if (!locations?.length) return null

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const node = scrollRef.current

    if (!node) return

    node.scrollBy({
      behavior: 'smooth',
      left: direction === 'left' ? -340 : 340
    })
  }

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-cloud px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between gap-6">
          <h2
            className="text-[38px] font-normal leading-tight text-ink sm:text-[48px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Available Locations
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous location"
              onClick={() => scroll('left')}
              className="flex size-12 items-center justify-center rounded-full border border-ink/5 bg-white text-ink shadow-sm transition hover:border-teal/30 hover:text-teal"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next location"
              onClick={() => scroll('right')}
              className="flex size-12 items-center justify-center rounded-full border border-ink/5 bg-white text-ink shadow-sm transition hover:border-teal/30 hover:text-teal"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {locations.map((location) => (
            <Link
              className="group flex min-h-[455px] w-[335px] shrink-0 snap-start flex-col rounded-[16px] bg-white p-3 text-ink no-underline shadow-[0_12px_34px_rgba(10,32,38,0.06)] ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,32,38,0.1)]"
              href={`/locations/${location.slug}`}
              key={location.slug}
            >
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[12px] bg-cloud">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85"
                  alt={location.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
                <h3 className="text-[24px] font-normal leading-tight text-ink">
                  {location.name.replace('ZOMAK ', '').replace('Zomak ', '')}
                </h3>
                <p className="mt-3 line-clamp-2 text-[14px] leading-5 text-ink/55">
                  {location.address}
                  <br />
                  {[location.city, location.province, location.postalCode]
                    .filter(Boolean)
                    .join(', ')}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-ink/8 pt-4">
                  <span className="text-[13px] font-normal text-ink">
                    Booking Now
                  </span>
                  <ArrowRight size={18} className="text-teal" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
