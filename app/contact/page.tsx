import { CalendarDays, MapPin, Phone, ArrowDown, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { locations } from '@/data/site'

export const metadata = {
  title: 'Contact ZOMAK Medical',
  description: 'Call, book, or find directions for ZOMAK Medical clinic locations.'
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#F4F6F7] text-[#333333] antialiased pb-28">
      
      {/* ================= CONTACT HERO ================= */}
      <header className="bg-[#F4F6F7] px-6 pb-14 pt-24 text-[#333333] sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative w-full sm:pt-14 lg:pt-16">
            <div className="relative z-20 mb-3 sm:pointer-events-none sm:absolute sm:right-8 sm:top-0 sm:mb-0 lg:right-20 lg:top-1">
              <h1 className="text-[42px] font-normal leading-tight sm:text-[64px] lg:text-[84px]">
                <span className="font-normal text-[#333333]">Contact </span>
                <span className="italic text-[#2AA7A1]">Details</span>
              </h1>
            </div>

            <div className="relative h-[340px] w-full overflow-hidden border border-[#333333]/10 bg-white shadow-sm sm:h-[520px] lg:h-[640px]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=90"
                alt="Bright medical office reception and clinic interior"
                className="w-full h-full object-cover object-center sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/12 via-transparent to-transparent" />
            </div>

            <a 
              href="#clinics"
              className="absolute bottom-0 left-5 z-30 flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-full bg-[#BFEAE7] text-[#333333] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#2AA7A1] hover:text-white sm:left-16 sm:h-20 sm:w-20 group"
            >
              <ArrowDown size={24} className="transition-transform duration-300 group-hover:translate-y-0.5 sm:size-7" />
            </a>
          </div>
        </div>
      </header>

      {/* ================= CLINIC LOCATIONS SECTION ================= */}
      <div id="clinics" className="mx-auto max-w-[1400px] px-6 pt-24 sm:px-10 lg:px-16">
        <section className="space-y-28">
          {locations.map((location) => (
            <article className="space-y-8" key={location.slug}>
              
              {/* Location Name */}
              <h2 className="text-2xl font-normal text-[#333333] sm:text-3xl">
                {location.name}
              </h2>

              {/* Responsive Cards Grid */}
              <div className="grid gap-6 sm:grid-cols-3">
                
                <ContactInfoCard
                  href={location.phone ? `tel:${location.phone.replaceAll(' ', '')}` : undefined}
                  icon={<Phone size={22} />}
                  value={location.phone || 'Phone to confirm'}
                  valueStyle="strong"
                />
                
                <ContactInfoCard
                  icon={<CalendarDays size={22} />}
                  value="Contact the clinic team to schedule family practice or specialized care."
                  valueStyle="body"
                />
                
                <ContactInfoCard
                  href={getDirectionsHref(location)}
                  icon={<MapPin size={22} />}
                  value={formatLocationAddress(location)}
                  valueStyle="body"
                />
                
              </div>
            </article>
          ))}
        </section>
      </div>

    </section>
  )
}

function ContactInfoCard({
  href,
  icon,
  value,
  valueStyle = 'strong'
}: {
  href?: string
  icon: ReactNode
  value: string
  valueStyle?: 'strong' | 'body'
}) {
  const content = (
    <div className="flex flex-col justify-between h-full space-y-12">
      {/* Icon Row */}
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#BFEAE7]/40 text-[#2AA7A1] transition-colors duration-300 group-hover:bg-[#2AA7A1] group-hover:text-white">
          {icon}
        </span>
        {href && (
          <ArrowUpRight
            size={20}
            className="text-[#333333]/30 transition-all duration-300 group-hover:text-[#2AA7A1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </div>

      {/* Main Value Text */}
      <p
        className={
          valueStyle === 'strong'
            ? 'break-words text-[22px] font-normal leading-snug text-[#333333] transition-colors duration-200 group-hover:text-[#2AA7A1]'
            : 'text-[16px] font-normal leading-relaxed text-[#333333]/80 transition-colors duration-200 group-hover:text-[#333333]'
        }
      >
        {value}
      </p>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(51,51,51,0.02)] transition-all duration-300 hover:border-[#2AA7A1]/35 hover:shadow-[0_12px_30px_-5px_rgba(42,167,161,0.08)] hover:-translate-y-1"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(51,51,51,0.02)]">
      {content}
    </div>
  )
}

function getDirectionsHref(location: (typeof locations)[number]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    formatLocationAddress(location)
  )}`
}

function formatLocationAddress(location: (typeof locations)[number]) {
  return [
    location.address || 'Address to confirm',
    [location.city, location.province, location.postalCode].filter(Boolean).join(', ')
  ]
    .filter(Boolean)
    .join(', ')
}
