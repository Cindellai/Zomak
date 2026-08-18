import Link from 'next/link'
import { notFound } from 'next/navigation'

import { LocationCareCta } from '@/components/sections/LocationCareCta'
import { GriffinAesthetics } from '@/components/sections/GriffinAesthetics'
import { LocationProviders } from '@/components/sections/LocationProviders'
import { LocationServicesCarousel } from '@/components/sections/LocationServicesCarousel'
import { providers } from '@/data/providers'
import { locations, services } from '@/data/site'

type LocationPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { slug } = await params
  const location = locations.find((item) => item.slug === slug)

  if (!location) {
    return {}
  }

  return {
    title: `${location.name} | ZOMAK Medical`,
    description: location.summary,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = locations.find((item) => item.slug === slug)

  if (!location) {
    notFound()
  }

  const relatedServices = services.filter((service) =>
    location.services.includes(service.title)
  )

  const providerLocationKey = getProviderLocationKey(location.name)
  const locationProviders = providers.filter(
    (provider) =>
      provider.location === providerLocationKey ||
      provider.secondaryLocation === providerLocationKey
  )

  const mapQuery = encodeURIComponent(
    [location.address, location.city, location.province, location.postalCode]
      .filter(Boolean)
      .join(', ')
  )

  return (
    <section className="bg-white text-ink">
      <div className="sticky top-0 z-50 bg-[#2AA7A1] px-5 py-3 text-center text-sm font-medium text-white shadow-md">
        {location.walkInStatus} · Call {location.phone} for live availability
      </div>
      {/* Split Screen Hero */}
      <header className="grid bg-white lg:min-h-screen lg:grid-cols-2">
        {/* Left Text Column */}
        <div className="flex items-center px-5 py-14 sm:px-10 sm:py-16 lg:px-16 xl:px-20">
          <div className="w-full max-w-[720px]">
            <h1
              className="text-[36px] font-normal leading-tight text-[#333333] sm:text-[58px] lg:text-[72px]"
            >
              {location.name}
            </h1>

            <p className="mt-6 max-w-[640px] text-[18px] font-normal leading-8 text-[#333333] sm:mt-7 sm:text-[21px]">
              {location.summary}
            </p>

            <div className="mt-10 grid gap-6 border-t border-[#333333]/10 pt-7 sm:grid-cols-2">
              <div>
                <p className="text-sm font-normal text-[#333333]">
                  Address
                </p>

                <p className="mt-4 text-[18px] font-normal leading-7 text-[#333333]/90">
                  {location.address}
                  <br />
                  {[location.city, location.province, location.postalCode]
                    .filter(Boolean)
                    .join(', ')}
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center border-b border-[#333333]/40 pb-1 text-[15px] font-normal text-[#333333] no-underline transition hover:text-[#2AA7A1]"
                >
                  Get Directions →
                </a>
              </div>

              <div className="sm:border-l sm:border-[#333333]/10 sm:pl-7">
                <p className="text-sm font-normal text-[#333333]">
                  Contact
                </p>

                {location.email && (
                  <p className="mt-4 text-[18px] font-normal leading-7 text-[#333333]/90">
                    {location.email}
                  </p>
                )}

                {location.phone ? (
                  <a
                    href={`tel:${location.phone.replaceAll(' ', '')}`}
                    className="mt-4 inline-flex items-center justify-center rounded-[12px] bg-[#333333] px-5 py-3 text-[15px] font-normal text-white no-underline transition hover:bg-[#2AA7A1]"
                  >
                    {location.phone}
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center justify-center rounded-[12px] bg-[#333333]/10 px-5 py-3 text-[15px] font-normal text-[#333333]/60">
                    Phone to confirm
                  </span>
                )}
              </div>
            </div>

           
          </div>
        </div>

        {/* Right Full-Half Image */}
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[460px] lg:min-h-[calc(100vh-82px)]">
          <div
            aria-label="Bright medical clinic interior"
            className="absolute inset-0 bg-cover bg-center"
            role="img"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/45 via-transparent to-transparent" />

          
        </div>
      </header>

      {/* Philosophy Statement Section */}
      <section className="bg-[#333333] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1040px] text-center">
          <p
            className="text-[30px] font-normal leading-tight text-white sm:text-[48px] lg:text-[66px]"
          >
            We help <em className="font-normal italic text-[#BFEAE7]">families</em>{' '}
            turn everyday{' '}
            <em className="font-normal italic text-[#BFEAE7]">health needs</em>{' '}
            into simpler, supported care.
          </p>
        </div>
      </section>

      {location.slug === 'griffin-road-medical-clinic' && <GriffinAesthetics />}

      <LocationServicesCarousel services={relatedServices} />
      <LocationProviders providers={locationProviders} />
      <LocationCareCta
        clinicName={location.name}
        phone={location.phone}
        walkInStatus={location.walkInStatus}
      />
    </section>
  )
}

function getProviderLocationKey(locationName: string) {
  if (locationName.includes('Griffin Road')) return 'Zomak Griffin Road'
  if (locationName.includes('Centre Street')) return 'Zomak Centre Street'
  if (locationName.includes('Northmount')) return 'Zomak Northmount'
  if (locationName.includes('Fairview')) return 'Zomak Fairview'
  return locationName
}
