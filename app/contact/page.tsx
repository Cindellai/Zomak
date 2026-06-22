import { CalendarDays, MapPin, Phone, ArrowUpRight } from 'lucide-react'

import { locations } from '@/data/site'

export const metadata = {
  title: 'Contact ZOMAK Medical',
  description: 'Call, book, or find directions for ZOMAK Medical clinic locations.'
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#f7f6f2] text-neutral-900 antialiased pt-28 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        
        {/* 1. Header Split Grid */}
        <header className="grid gap-10 lg:grid-cols-12 lg:items-start border-b border-neutral-300/60 pb-14 mb-16">
          <div className="lg:col-span-7">
            
            <h1 className="text-[42px] font-normal tracking-[-0.04em] text-neutral-950 sm:text-[56px] lg:text-[68px] leading-[1.05]">
              Call, book, or find a ZOMAK clinic.
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:pt-10">
            <p className="text-[16px] leading-relaxed text-neutral-500 max-w-[420px]">
              Get in touch with our individual care providers, explore location coordinates, or manage appointment slots online.
            </p>
          </div>
        </header>

        {/* 2. Direct Channels (Replaces the blocky color grids from image_abac4b.jpg) */}
        <section className="grid gap-6 md:grid-cols-3 mb-20">
          
          {/* Channel 1 */}
          <a 
            href="tel:403-250-2150" 
            className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-300/40 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-400/60"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#e3f2f5] text-[#2F7F95]">
                <Phone size={18} />
              </span>
              <ArrowUpRight size={16} className="text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-12">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-neutral-400">Call Now</h3>
              <p className="mt-1 text-[22px] font-bold text-neutral-950 tracking-tight">403-250-2150</p>
            </div>
          </a>

          {/* Channel 2 */}
          <div className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-300/40 p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#f5efe3] text-[#b38f4e]">
                <CalendarDays size={18} />
              </span>
            </div>
            <div className="mt-12">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-neutral-400">Booking Links</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">Connect clinic workflows and patient reservation utilities effortlessly here.</p>
            </div>
          </div>

          {/* Channel 3 */}
          <div className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-300/40 p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#edf5f2] text-[#4ea886]">
                <MapPin size={18} />
              </span>
            </div>
            <div className="mt-12">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-neutral-400">Directions</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">Instantly launch configured Google Business maps per medical campus center location.</p>
            </div>
          </div>

        </section>

        {/* 3. Deep Editorial Locations List Grid */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[20px] font-bold tracking-tight text-neutral-950">
              Our Active Locations ({locations.length})
            </h2>
            <div className="h-[1px] flex-1 bg-neutral-300/60 mx-6 hidden sm:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div 
                key={location.slug}
                className="flex flex-col justify-between rounded-2xl bg-[#f0ede4]/70 border border-neutral-300/30 p-6 transition-all duration-200 hover:bg-[#f0ede4]"
              >
                <div>
                  <h4 className="text-[17px] font-bold tracking-tight text-neutral-950 leading-snug">
                    {location.name}
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                    {location.address || 'Address verification pending to confirm layout'}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-neutral-300/40 flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#2F7F95]">
                    {location.phone}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    Active Center
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  )
}