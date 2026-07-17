import Link from 'next/link'

import type { Provider } from '@/data/providers'

export function LocationProviders({ providers }: { providers: Provider[] }) {
  if (!providers.length) return null

  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1400px]">

        {/* Header row */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[14px] font-normal text-[#333333]">
              Meet our providers
            </p>
            <h2 className="max-w-[700px] text-[42px] font-normal leading-tight text-[#333333] sm:text-[54px] lg:text-[64px]">
              Discover Our Team of{' '}
              <em
                className="font-normal italic text-cyan-700"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Medical
              </em>{' '}
              Experts
            </h2>
          </div>

         
        </div>

        {/* Carousel */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
          {providers.map((provider) => (
            <Link
              key={provider.slug}
              href={`/doctors/${provider.slug}`}
              className="group w-[68vw] shrink-0 snap-start no-underline sm:w-[280px] lg:w-[320px]"
            >
              {/* Photo card with solid pastel bg */}
              <div className="aspect-[0.82] overflow-hidden rounded-[16px] bg-[#BFEAE7]">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              {/* Name + role */}
              <div className="pt-4">
                <h3 className="text-[18px] font-normal leading-tight text-[#333333] transition group-hover:text-[#2AA7A1]">
                  {provider.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-normal text-[#333333]/55">
                  {provider.role}
                </p>
                {provider.credentials && (
                  <p className="mt-1 text-[12px] font-normal text-[#333333]/45">
                    {provider.credentials}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
