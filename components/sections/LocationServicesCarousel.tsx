'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

type Service = {
  slug: string
  summary: string
  title: string
}

const serviceStyles: Record<
  string,
  {
    bg: string
    button: string
    image: string
  }
> = {
  'visa-medical-experts': {
    bg: 'bg-[#0b1f21] text-white',
    button: 'bg-white text-[#0b1f21]',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=90'
  },
  'medical-piercings': {
    bg: 'bg-[#DFF0F2]',
    button: 'bg-[#0b1f21] text-white',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=900&q=90'
  },
  'babys-gender-dna-test': {
    bg: 'bg-[#F3F7F7]',
    button: 'bg-[#1F6175] text-white',
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=900&q=90'
  },
  'pediatric-care': {
    bg: 'bg-[#E8F4F1]',
    button: 'bg-[#2F7F95] text-white',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=900&q=90'
  },
  'womens-health-care': {
    bg: 'bg-[#EAF2F4]',
    button: 'bg-[#1F6175] text-white',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&q=90'
  },
  'drivers-medical': {
    bg: 'bg-[#F3F7F7]',
    button: 'bg-[#0b1f21] text-white',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=90'
  },
  'p-shot-priapus-shot': {
    bg: 'bg-[#0b1f21] text-white',
    button: 'bg-white text-[#0b1f21]',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=90'
  },
  bocox: {
    bg: 'bg-[#DFF0F2]',
    button: 'bg-[#0b1f21] text-white',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=900&q=90'
  },
  'shockwave-for-erectile-dysfunction': {
    bg: 'bg-[#F3F7F7]',
    button: 'bg-[#1F6175] text-white',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=90'
  },
  trimix: {
    bg: 'bg-[#E8F4F1]',
    button: 'bg-[#2F7F95] text-white',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=900&q=90'
  },
  'o-shot-orgasm-shot': {
    bg: 'bg-[#EAF2F4]',
    button: 'bg-[#1F6175] text-white',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=90'
  },
  'prp-hair-treatment-restoration': {
    bg: 'bg-[#F3F7F7]',
    button: 'bg-[#0b1f21] text-white',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=90'
  },
  'vampire-breast-lift': {
    bg: 'bg-[#DFF0F2]',
    button: 'bg-[#1F6175] text-white',
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=900&q=90'
  },
  'vampire-wing-lift': {
    bg: 'bg-[#F3F7F7]',
    button: 'bg-[#2F7F95] text-white',
    image: 'https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?w=900&q=90'
  },
  'respite-care': {
    bg: 'bg-[#0b1f21] text-white',
    button: 'bg-white text-[#0b1f21]',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=90'
  },
  'elderly-care': {
    bg: 'bg-[#DFF0F2]',
    button: 'bg-[#0b1f21] text-white',
    image: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=900&q=90'
  },
  'client-directed-homecare-invoicing-program': {
    bg: 'bg-[#F3F7F7]',
    button: 'bg-[#1F6175] text-white',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=90'
  },
  'personal-care': {
    bg: 'bg-[#E8F4F1]',
    button: 'bg-[#2F7F95] text-white',
    image: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=900&q=90'
  }
}

const fallbackServiceStyle = {
  bg: 'bg-[#EAF2F4]',
  button: 'bg-[#1F6175] text-white',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=90'
}

export function LocationServicesCarousel({ services }: { services: Service[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    scroller.scrollBy({
      behavior: 'smooth',
      left: direction === 'left' ? -scroller.clientWidth * 0.82 : scroller.clientWidth * 0.82
    })
  }

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[1100px] text-center">
        
          <h2
            className="text-[46px] font-normal leading-[0.95] tracking-[-0.055em] text-[#0b1f21] sm:text-[64px] lg:text-[78px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Guiding you towards a{' '}
            <em className="font-normal italic text-[#2F7F95]">healthier</em>{' '}
            future
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[17px] font-medium leading-7 text-[#0b1f21]/62 sm:text-[18px]">
            Explore services available across ZOMAK locations, from medical
            exams and testing to pediatric care, women&apos;s health, and
            clinical support.
          </p>

        </div>

        <div className="mt-10 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous services"
            onClick={() => scroll('left')}
            className="flex size-12 items-center justify-center rounded-full bg-white text-[#0b1f21] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:-translate-x-0.5 hover:bg-[#F3F7F7]"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            aria-label="Next services"
            onClick={() => scroll('right')}
            className="flex size-12 items-center justify-center rounded-full bg-[#272727] text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition hover:translate-x-0.5 hover:bg-[#1d1d1d]"
          >
            <ArrowRight size={19} />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {services.map((service, index) => {
            const style = serviceStyles[service.slug] ?? fallbackServiceStyle
            const isDark = style.bg.includes('text-white')

            return (
              <Link
                className={`group relative flex min-h-[520px] flex-[0_0_82%] snap-start flex-col overflow-hidden rounded-[24px] p-6 text-[#0b1f21] no-underline transition hover:-translate-y-1 sm:flex-[0_0_48%] lg:flex-[0_0_32%] xl:flex-[0_0_24%] ${style.bg}`}
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <div>
                  <h3
                    className={`max-w-[270px] text-[34px] font-normal leading-[0.95] tracking-[-0.045em] sm:text-[38px] ${
                      isDark ? 'text-white' : 'text-[#0b1f21]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-[270px] text-[14px] font-medium leading-5 ${
                      isDark ? 'text-white/70' : 'text-[#0b1f21]/65'
                    }`}
                  >
                    {service.summary}
                  </p>
                </div>

                <div className="relative mt-auto h-[260px]">
                  <div
                    className="absolute inset-x-0 bottom-0 h-[230px] rounded-[18px] bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${style.image})` }}
                  />

                  <span
                    className={`absolute bottom-0 right-0 flex size-12 items-center justify-center rounded-full ${style.button} transition group-hover:translate-x-1 group-hover:-translate-y-1`}
                  >
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

  
      </div>
    </section>
  )
}
