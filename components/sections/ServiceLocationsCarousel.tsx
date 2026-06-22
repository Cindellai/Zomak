'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

type ServiceLocationsCarouselProps = {
  locations: {
    name: string
    slug: string
    address: string
    city: string
    province: string
  }[]
}

export function ServiceLocationsCarousel({
  locations
}: ServiceLocationsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const node = scrollRef.current

    if (!node) {
      return
    }

    node.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f7f7f7] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between gap-6">
          <h2
            className="text-[38px] font-normal leading-tight tracking-[-0.045em] text-[#202020] sm:text-[48px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Available Locations
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous location"
              onClick={() => scroll('left')}
              className="flex size-12 items-center justify-center rounded-full border border-black/5 bg-white text-[#202020] shadow-sm transition hover:border-[#2F7F95]/30 hover:text-[#2F7F95]"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next location"
              onClick={() => scroll('right')}
              className="flex size-12 items-center justify-center rounded-full border border-black/5 bg-white text-[#202020] shadow-sm transition hover:border-[#2F7F95]/30 hover:text-[#2F7F95]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-3"
        >
          {locations.map((location) => (
            <Link
              className="group flex min-h-[455px] w-[335px] shrink-0 snap-start flex-col rounded-[16px] bg-white p-3 text-ink no-underline shadow-[0_12px_34px_rgba(10,32,38,0.06)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(10,32,38,0.1)]"
              href={`/locations/${location.slug}`}
              key={location.slug}
            >
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[12px] bg-cloud">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85"
                  alt={location.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 rounded-[8px] bg-white px-3 py-2 text-[12px] font-semibold text-[#102A32] shadow-sm">
                  {location.city}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
                <h3 className="text-[24px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#202020]">
                  {location.name.replace('ZOMAK ', '')}
                </h3>
                <p className="mt-3 line-clamp-2 text-[14px] leading-5 text-ink/55">
                  {location.address}
                  <br />
                  {location.city}, {location.province}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-ink/8 pt-4">
                  <span className="text-[13px] font-semibold text-[#202020]">
                    Booking Now
                  </span>
                  <ArrowRight size={18} className="text-[#2F7F95]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
