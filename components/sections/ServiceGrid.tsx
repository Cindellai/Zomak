import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getServiceCategorySlug, services } from '@/data/site'

const getService = (title: string) =>
  services.find((service) => service.title === title)

const serviceHref = (title: string) => {
  const service = getService(title)
  return service ? `/services/${getServiceCategorySlug(service.category)}` : '/services/family-practice'
}

const serviceImage = (title: string) =>
  getService(title)?.image ||
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85'

export function ServiceGrid() {
  return (
    <section className="bg-white px-6 pb-16 pt-12 antialiased sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Main Bento Grid Container */}
        <div className="grid gap-4 lg:grid-cols-2 items-stretch">
          
          {/* Left Column Container */}
          <div className="flex flex-col gap-4">
            
            {/* Elegant Serif Header Block - Added padding top for breathing room */}
            <div className="flex flex-col justify-end pb-4 pt-6 min-h-[120px] lg:min-h-[140px]">
              <h2 
                className="text-[44px] font-normal leading-[1.05] tracking-tight text-[#333333] sm:text-[56px] lg:text-[64px]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                ZOMAK
                <br />
                Services
              </h2>
            </div>

            {/* Split Image Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <ServiceImageCard
                href={serviceHref('Pediatric Care')}
                title="Pediatric Care"
                image={serviceImage('Pediatric Care')}
              />
              <ServiceImageCard
                href={serviceHref("Women's Health Care")}
                title="Women’s Health Care"
                image={serviceImage("Women's Health Care")}
              />
            </div>

            {/* Wide Mint Action Card */}
            <Link
              href={serviceHref("Driver's Medical")}
              className="group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#BFEAE7]/60 p-6 no-underline transition-all duration-300 hover:bg-[#BFEAE7]"
            >
              <p className="text-[12px] font-normal tracking-wider text-neutral-800">
                Medical Exam
              </p>
              
              <div className="mt-auto flex items-end justify-between gap-4">
                <h3 
                  className="text-[32px] font-normal leading-[1.1] tracking-tight text-neutral-900 sm:text-[38px]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Driver’s Medical
                </h3>
                <span className="flex h-10 min-w-[130px] items-center justify-center rounded-full bg-white px-4 text-[13px] font-normal text-neutral-900 shadow-sm transition-all duration-300 group-hover:scale-105">
                  View Details
                </span>
              </div>
            </Link>
          </div>

          {/* Right Column: Hero Image Panel - Set explicit min-height matching the actual calculated left container height */}
          <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[32px] bg-neutral-900 lg:min-h-full">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${serviceImage('Medical Piercings')})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/10 to-transparent" />

            {/* Shifted elements higher with flex configurations */}
            <div className="relative z-10 grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:p-8 w-full">
              <OverlayCard
                href={serviceHref('Visa Medical Experts')}
                title="Visa Medical Experts"
                variant="solid"
              />
              <OverlayCard
                href={serviceHref('Medical Piercings')}
                title="Medical Piercings"
                variant="glass"
              />
            </div>
          </div>
        </div>

        {/* Bottom Wide Cards Row */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <BottomCard
            href={serviceHref("Baby's Gender DNA Test")}
            title="Baby’s Gender DNA Test"
            image={serviceImage("Baby's Gender DNA Test")}
          />
          <BottomCard
            href={serviceHref('Pediatric Care')}
            title="Pediatric Care"
            image={serviceImage('Pediatric Care')}
            dark
          />
        </div>

      </div>
    </section>
  )
}

function ServiceImageCard({ href, title, image }: { href: string; title: string; image: string }) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-[32px] bg-neutral-100 p-5 no-underline shadow-sm"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent opacity-95" />

      <div className="relative z-10 flex items-end justify-between gap-2">
        <h3 
          className="text-[20px] font-normal leading-[1.1] tracking-tight text-white"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {title}
        </h3>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900">
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}

function OverlayCard({ href, title, variant }: { href: string; title: string; variant: 'solid' | 'glass' }) {
  const isGlass = variant === 'glass'

  return (
    <Link
      href={href}
      className={`group flex min-h-[140px] flex-col justify-between rounded-[24px] p-5 no-underline transition-all duration-300 hover:-translate-y-0.5 ${
        isGlass
          ? 'border border-white/25 bg-white/10 text-white backdrop-blur-xl shadow-lg'
          : 'bg-white text-neutral-900 shadow-xl'
      }`}
    >
      <h3 
        className="text-[24px] font-normal leading-[1.15] tracking-tight"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        {title}
      </h3>
      <div className="flex justify-end mt-4">
        <span
          className={`flex size-8 items-center justify-center rounded-full border transition-all duration-300 ${
            isGlass
              ? 'border-white/30 text-white bg-white/5 group-hover:bg-white/20'
              : 'border-neutral-200 text-neutral-900 bg-neutral-50 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white'
          }`}
        >
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}

function BottomCard({ href, title, image, dark = false }: { href: string; title: string; image: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[170px] flex-col justify-center overflow-hidden rounded-[32px] p-6 sm:p-8 no-underline transition-all duration-300 ${
        dark ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-900'
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 transition-opacity duration-500 ${dark ? 'bg-neutral-900/55 group-hover:bg-neutral-900/45' : 'bg-white/70 group-hover:bg-white/60 backdrop-blur-[2px]'}`} />
      
      <div className="relative z-10 flex w-full items-center justify-between gap-4">
        <h3 
          className="max-w-[420px] text-[28px] font-normal leading-[1.1] tracking-tight sm:text-[32px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {title}
        </h3>
        <span className={`flex size-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${dark ? 'bg-white text-neutral-900' : 'bg-neutral-900 text-white'}`}>
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  )
}