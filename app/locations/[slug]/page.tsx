import Link from 'next/link'
import { notFound } from 'next/navigation'

import { LocationCareCta } from '@/components/sections/LocationCareCta'
import { WalkInStatusBanner } from '@/components/sections/WalkInStatusBanner'
import { GriffinAesthetics } from '@/components/sections/GriffinAesthetics'
import { LocationProviders } from '@/components/sections/LocationProviders'
import { LocationServicesCarousel } from '@/components/sections/LocationServicesCarousel'
import { providers } from '@/data/providers'
import { locations, services } from '@/data/site'
import { getEditableWalkInStatus } from '@/lib/sanity/walkIns'

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

  const editableLocation = await getEditableWalkInStatus(slug)

  return {
    title: `${editableLocation?.name || location.name} | ZOMAK Medical`,
    description: editableLocation?.summary || location.summary,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = locations.find((item) => item.slug === slug)

  if (!location) {
    notFound()
  }

  const editableLocation = await getEditableWalkInStatus(location.slug)
  const clinic = {
    ...location,
    ...Object.fromEntries(Object.entries(editableLocation || {}).filter(([, value]) => value !== undefined && value !== null && value !== '')),
    services: editableLocation?.services?.length ? editableLocation.services : location.services,
    heroImageUrl: editableLocation?.heroImageUrl || location.heroImageUrl,
    heroImageAlt: editableLocation?.heroImageAlt || location.heroImageAlt,
    philosophy: editableLocation?.philosophy
  }
  const walkInStatus = clinic.walkInStatus
  const waitTime = clinic.waitTime

  const relatedServices = services.filter((service) =>
    clinic.services.includes(service.title)
  )

  const providerLocationKey = getProviderLocationKey(clinic.name)
  const locationProviders = providers.filter(
    (provider) =>
      provider.location === providerLocationKey ||
      provider.secondaryLocation === providerLocationKey
  )

  const mapQuery = encodeURIComponent(
    [clinic.address, clinic.city, clinic.province, clinic.postalCode]
      .filter(Boolean)
      .join(', ')
  )

  return (
    <section className="bg-white text-ink">
      <WalkInStatusBanner
        status={walkInStatus}
        waitTime={waitTime}
        href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
        actionLabel="Directions"
        phone={clinic.phone}
        topClassName="top-0"
      />
      {/* Split Screen Hero */}
      <header className="grid bg-white lg:min-h-screen lg:grid-cols-2">
        {/* Left Text Column */}
        <div className="flex items-center px-5 py-14 sm:px-10 sm:py-16 lg:px-16 xl:px-20">
          <div className="w-full max-w-[720px]">
            <h1
              className="text-[36px] font-normal leading-tight text-[#333333] sm:text-[58px] lg:text-[72px]"
            >
              {clinic.name}
            </h1>

            <p className="mt-6 max-w-[640px] text-[18px] font-normal leading-8 text-[#333333] sm:mt-7 sm:text-[21px]">
              {clinic.summary}
            </p>

            <div className="mt-10 grid gap-6 border-t border-[#333333]/10 pt-7 sm:grid-cols-2">
              <div>
                <p className="text-sm font-normal text-[#333333]">
                  Address
                </p>

                <p className="mt-4 text-[18px] font-normal leading-7 text-[#333333]/90">
                  {clinic.address}
                  <br />
                  {[clinic.city, clinic.province, clinic.postalCode]
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

                {clinic.email && (
                  <p className="mt-4 text-[18px] font-normal leading-7 text-[#333333]/90">
                    {clinic.email}
                  </p>
                )}

                {clinic.phone ? (
                  <a
                    href={`tel:${clinic.phone.replaceAll(' ', '')}`}
                    className="mt-4 inline-flex items-center justify-center rounded-[12px] bg-[#333333] px-5 py-3 text-[15px] font-normal text-white no-underline transition hover:bg-[#2AA7A1]"
                  >
                    {clinic.phone}
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
            aria-label={clinic.heroImageAlt || 'Bright medical clinic interior'}
            className="absolute inset-0 bg-cover bg-center"
            role="img"
            style={{
              backgroundImage: `url('${clinic.heroImageUrl}')`,
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
            {clinic.philosophy || 'We help families turn everyday health needs into simpler, supported care.'}
          </p>
        </div>
      </section>

      {clinic.slug === 'griffin-road-medical-clinic' && <GriffinAesthetics />}

      <LocationServicesCarousel services={relatedServices} />
      <LocationProviders providers={locationProviders} />
      {clinic.slug === 'griffin-road-medical-clinic' && (
        <ClinicVideo
          label="Video tour of Zomak Medical Clinic on Griffin Road"
          poster="/images/locations/griffin-road-hero.jpg"
          src="/videos/griffin-road-clinic.mp4"
        />
      )}
      {clinic.slug === 'lewisburg' && (
        <ClinicVideo
          label="Video tour of Zomak Medical Clinic in Lewisburg"
          poster={clinic.heroImageUrl}
          src="/videos/lewisburg-clinic.mp4"
        />
      )}
      {clinic.slug === 'northmount' && (
        <ClinicVideo
          label="Video tour of Zomak Medical Clinic in Northmount"
          poster="/images/locations/northmount-hero.jpg"
          src="/videos/northmount-clinic.mp4"
        />
      )}
      {clinic.slug === 'centre-street-north-medical-clinic' && (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            <video
              aria-label="Video tour of Zomak Medical Clinic on Centre Street North"
              className="aspect-video w-full rounded-[20px] bg-[#333333] object-cover shadow-sm"
              controls
              playsInline
              poster="/images/locations/centre-street-hero.jpg"
              preload="metadata"
            >
              <source src="/videos/centre-street-clinic.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </section>
      )}
      {clinic.slug === 'fairview' && (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            <video
              aria-label="Video tour of Zomak Medical Clinic in Fairview"
              className="aspect-video w-full rounded-[20px] bg-[#333333] object-cover shadow-sm"
              controls
              playsInline
              poster="/images/locations/fairview-hero.jpg"
              preload="metadata"
            >
              <source src="/videos/fairview-clinic.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </section>
      )}
      <LocationCareCta
        clinicName={clinic.name}
        phone={clinic.phone}
        walkInStatus={walkInStatus}
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

function ClinicVideo({ label, poster, src }: { label: string; poster: string; src: string }) {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <video
          aria-label={label}
          className="aspect-video w-full rounded-[20px] bg-[#333333] object-cover shadow-sm"
          controls
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    </section>
  )
}
