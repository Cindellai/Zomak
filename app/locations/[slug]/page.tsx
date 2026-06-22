import Link from 'next/link'
import { notFound } from 'next/navigation'

import { LocationCareCta } from '@/components/sections/LocationCareCta'
import { LocationProviders } from '@/components/sections/LocationProviders'
import { LocationServicesCarousel } from '@/components/sections/LocationServicesCarousel'
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

  const cleanLocationName = location.name.replace('ZOMAK ', '')
  const mapQuery = encodeURIComponent(
    `${location.address}, ${location.city}, ${location.province}`
  )

  return (
    <section className="overflow-x-hidden bg-white text-ink">
      {/* Split Screen Hero */}
      <header className="grid min-h-screen bg-white  lg:grid-cols-2">
        {/* Left Text Column */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
          <div className="w-full max-w-[720px]">
            <div className="mb-8 inline-flex rounded-full bg-[#EAF2F4] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2F7F95]">
              {location.city}, {location.province}
            </div>

            <h1
              className="text-[46px] font-normal leading-[0.95] tracking-[-0.06em] text-[#0b1f21] sm:text-[62px] lg:text-[76px] xl:text-[84px]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {cleanLocationName}
            </h1>

            <p className="mt-7 max-w-[640px] text-[19px] font-medium leading-8 text-[#0b1f21]/70 sm:text-[21px]">
              {location.summary}
            </p>

            <div className="mt-10 grid gap-6 border-t border-[#0b1f21]/10 pt-7 sm:grid-cols-2">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b1f21]">
                  Address
                </p>

                <p className="mt-4 text-[18px] font-semibold leading-7 text-[#0b1f21]/90">
                  {location.address}
                  <br />
                  {location.city}, {location.province}
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center border-b border-[#0b1f21]/40 pb-1 text-[15px] font-semibold text-[#0b1f21] no-underline transition hover:text-[#2F7F95]"
                >
                  Get Directions →
                </a>
              </div>

              <div className="sm:border-l sm:border-[#0b1f21]/10 sm:pl-7">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0b1f21]">
                  Contact
                </p>

                <p className="mt-4 text-[18px] font-semibold leading-7 text-[#0b1f21]/90">
                  Main Office Line Available
                </p>

                <a
                  href={`tel:${location.phone.replaceAll(' ', '')}`}
                  className="mt-4 inline-flex items-center justify-center rounded-[12px] bg-[#0b1f21] px-5 py-3 text-[15px] font-semibold text-white no-underline transition hover:bg-[#2F7F95]"
                >
                  Call {location.phone}
                </a>
              </div>
            </div>

           
          </div>
        </div>

        {/* Right Full-Half Image */}
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[calc(100vh-82px)]">
          <div
            aria-label="Bright medical clinic interior"
            className="absolute inset-0 bg-cover bg-center"
            role="img"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f21]/45 via-transparent to-transparent" />

          
        </div>
      </header>

      {/* Philosophy Statement Section */}
      <section className="bg-[#0b1f21] px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="text-[34px] font-normal leading-[1.1] tracking-[-0.055em] text-white sm:text-[48px] lg:text-[66px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            We help <em className="font-normal italic text-[#7ECFDF]">families</em>{' '}
            turn everyday{' '}
            <em className="font-normal italic text-[#7ECFDF]">health needs</em>{' '}
            into simpler, supported care.
          </p>
        </div>
      </section>

      <LocationServicesCarousel services={relatedServices} />
      <LocationProviders />
      <LocationCareCta />
    </section>
  )
}