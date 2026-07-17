import { CheckCircle2 } from 'lucide-react'
import type { Service } from '@/data/site'

const serviceImages = [
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504813184591-015556c5c472?auto=format&fit=crop&w=800&q=80'
]

export function LocationServicesCarousel({ services }: { services: Service[] }) {
  if (!services?.length) return null

  const count = services.length

  return (
    <section className="bg-[#F4F6F7] px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-[#333333]/10 pb-6">
      
          <h3 className="mt-3 text-[34px] font-normal text-[#2AA7A1] sm:text-4xl">
            Specific Services
          </h3>
        </div>

        {/* ================= CONDITIONAL LAYOUT LOGIC ================= */}
        
        {/* Scenario A: exactly 1 service */}
        {count === 1 && (
          <div className="group relative min-h-[560px] overflow-hidden rounded-2xl border border-[#333333]/10 bg-[#333333] shadow-sm sm:min-h-[680px] lg:min-h-[780px]">
            <img
              src={services[0].image || serviceImages[0]}
              alt={services[0].title}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[#333333]/30" />
            <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#333333]/90 via-[#333333]/45 to-transparent" />

            <div className="relative z-10 flex min-h-[560px] items-end p-5 sm:min-h-[680px] sm:p-10 lg:min-h-[780px] lg:p-16">
              <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
                <div className="max-w-[820px]">
          
                  <h4 className="mt-4 text-[34px] font-normal leading-tight text-white sm:text-[58px] lg:text-[72px]">
                    {services[0].title.replace(/-too/gi, '').replace(/-/g, ' ')}
                  </h4>

                  <p className="mt-6 max-w-[680px] text-[16px] leading-7 text-white/85">
                    {services[0].summary || 'Consult with our clinical team to verify availability, preparation details, and suitability.'}
                  </p>
                </div>

                <div className="rounded-xl border border-white/18 bg-white/12 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-md">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-white/85">
                      <CheckCircle2 size={16} className="shrink-0 text-[#BFEAE7]" />
                      <span>On-site assessments available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/85">
                      <CheckCircle2 size={16} className="shrink-0 text-[#BFEAE7]" />
                      <span>Coordinate directly with family physicians</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scenario B: 2 or 3 Items (Standard Balanced Columns) */}
        {count >= 2 && count <= 3 && (
          <div className={`grid ${count === 2 ? 'gap-6 md:grid-cols-2 lg:gap-8' : 'gap-8 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {services.map((service, index) => (
              <div 
                key={service.slug} 
                className={`group relative flex flex-col justify-end overflow-hidden rounded-xl border border-[#333333]/5 shadow-sm ${
                  count === 2 ? 'h-[440px] p-5 sm:h-[580px] sm:p-8 lg:h-[640px] lg:p-10' : 'h-[420px] p-5 sm:p-8 lg:h-[540px] lg:p-10'
                }`}
              >
                <img 
                  src={service.image || serviceImages[index % serviceImages.length]} 
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent transition-all duration-300" />
                <div className="relative z-10 space-y-4">
                  <h4 className="text-[28px] font-normal leading-tight text-white sm:text-3xl">
                    {service.title.replace(/-too/gi, '').replace(/-/g, ' ')}
                  </h4>
                  <p className={`${count === 2 ? 'max-w-[620px] text-base leading-7' : 'text-sm'} text-white/80 line-clamp-2`}>
                    {service.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scenario C: 4+ Items (Horizontal Carousel Slider) */}
        {count >= 4 && (
          <div className="relative w-full">
            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-neutral-200 scroll-smooth snap-x snap-mandatory">
              {services.map((service, index) => (
                <div 
                  key={service.slug} 
                  className="group relative flex h-[400px] w-[82vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-xl border border-[#333333]/5 p-5 shadow-sm sm:h-[440px] sm:w-[420px] sm:p-8 lg:h-[500px] lg:w-[480px] lg:p-10"
                >
                  <img 
                    src={serviceImages[index % serviceImages.length]} 
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-all duration-300" />
                  <div className="relative z-10 space-y-4">
                    <h4 className="text-[28px] font-normal leading-tight text-white sm:text-3xl">
                      {service.title.replace(/-too/gi, '').replace(/-/g, ' ')}
                    </h4>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {service.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Swipe prompt */}
            <div className="mt-4 flex justify-end">
              <span className="text-xs text-[#333333]/50 animate-pulse">
                Swipe to browse details &rarr;
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
