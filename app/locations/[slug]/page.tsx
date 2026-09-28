import Link from 'next/link'
import { notFound } from 'next/navigation'

import { LocationCareCta } from '@/components/sections/LocationCareCta'
import { JsonLd } from '@/components/seo/JsonLd'
import { WalkInStatusBanner } from '@/components/sections/WalkInStatusBanner'
import { GriffinAesthetics } from '@/components/sections/GriffinAesthetics'
import { LocationProviders } from '@/components/sections/LocationProviders'
import { LocationServicesCarousel } from '@/components/sections/LocationServicesCarousel'
import { providers } from '@/data/providers'
import { locations, services } from '@/data/site'
import { getEditableWalkInStatus } from '@/lib/sanity/walkIns'
import { absoluteUrl, pageMetadata } from '@/lib/seo'

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

  return pageMetadata({ pathname: `/locations/${location.slug}`, title: location.pageTitle, description: location.metaDescription, image: location.heroImageUrl })
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
  const liveWaitTimesEnabled = process.env.NEXT_PUBLIC_LIVE_WAIT_TIMES_ENABLED === 'true'
  const walkInStatus = liveWaitTimesEnabled
    ? clinic.walkInStatus
    : 'Call to confirm walk-in availability'
  const waitTime = liveWaitTimesEnabled ? clinic.waitTime : ''
  const displayClinicName = removeTitleDash(clinic.name)

  const allowedServiceTitles = filterLocationServices(clinic.slug, clinic.services)
  const relatedServices = services
    .filter((service) => allowedServiceTitles.includes(service.title))
    .map((service) => ({
      ...service,
      image: getUpdatedServiceCardImage(service.title, service.image)
    }))

  const providerLocationKey = getProviderLocationKey(clinic.name)
  const locationProviders = providers.filter(
    (provider) =>
      provider.location === providerLocationKey ||
      provider.secondaryLocation === providerLocationKey ||
      provider.locations?.includes(providerLocationKey)
  )
  const heroImageStyle = {
    backgroundImage: `url('${clinic.heroImageUrl}')`,
    backgroundPosition: clinic.slug === 'lewisburg' ? '25% center' : 'center'
  }

  const mapQuery = encodeURIComponent(
    [clinic.address, clinic.city, clinic.province, clinic.postalCode]
      .filter(Boolean)
      .join(', ')
  )
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: displayClinicName,
    url: absoluteUrl(`/locations/${clinic.slug}`),
    image: absoluteUrl(clinic.heroImageUrl),
    description: clinic.introduction,
    telephone: clinic.phone,
    faxNumber: clinic.fax,
    ...(clinic.email ? { email: clinic.email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressRegion: clinic.province,
      postalCode: clinic.postalCode,
      addressCountry: 'CA'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00'
      }
    ],
    hasMap: directionsUrl,
    parentOrganization: {
      '@type': 'MedicalOrganization',
      name: 'ZOMAK Medical',
      url: absoluteUrl('/')
    }
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: clinic.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <section className="bg-white text-ink">
      <JsonLd data={locationSchema} />
      <JsonLd data={faqSchema} />
      <WalkInStatusBanner
        status={walkInStatus}
        waitTime={waitTime}
        href={directionsUrl}
        actionLabel="Directions"
        phone={clinic.phone}
        topClassName="top-0"
      />
      <header className="grid overflow-hidden bg-white lg:min-h-[calc(100svh-42px)] lg:grid-cols-2">
        <div className="relative z-0 min-h-[340px] bg-[#293538] sm:min-h-[500px] lg:min-h-0 lg:w-[calc(100%+72px)]">
          <div
            aria-label={clinic.heroImageAlt || 'Bright medical clinic interior'}
            className="absolute inset-0 bg-cover"
            role="img"
            style={heroImageStyle}
          />
        </div>

        <div className="relative z-10 -mt-8 rounded-t-[38px] bg-white px-5 py-12 sm:px-10 sm:py-14 lg:mt-0 lg:flex lg:items-center lg:rounded-l-[72px] lg:rounded-r-none lg:px-12 lg:py-10 xl:px-16">
          <div className="mx-auto w-full max-w-[720px]">
            <h1 className="text-balance font-serif text-[34px] font-normal leading-[1.06] tracking-[-0.025em] text-[#333333] sm:text-[42px] lg:text-[40px] xl:text-[44px]">
              {clinic.h1}
            </h1>
            <p className="mt-5 max-w-[680px] text-[16px] leading-[1.65] text-[#52605E]">
              {clinic.introduction}
            </p>

            <div className="mt-7 grid border-t border-[#333333]/10 pt-6 lg:grid-cols-2 lg:gap-10">
              <div id="clinic-hours" className="scroll-mt-24">
                <h2 className="font-serif text-[24px] font-normal text-[#333333]">Clinic hours</h2>
                <dl className="mt-3 divide-y divide-[#333333]/10 border-y border-[#333333]/10">
                  {clinic.hours.map((item) => (
                    <div className="grid min-h-11 grid-cols-[1fr_auto] items-center gap-4 py-2.5" key={item.days}>
                      <dt className="text-[14px] font-medium text-[#333333]">{item.days}</dt>
                      <dd className="text-right text-[14px] text-[#333333]">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-5 border-t border-[#333333]/10 pt-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <h2 className="font-serif text-[24px] font-normal text-[#333333]">Contact</h2>
                <dl className="mt-3 divide-y divide-[#333333]/10 border-y border-[#333333]/10 text-[14px] leading-5 text-[#333333]">
                  <div className="grid min-h-11 grid-cols-[72px_1fr] items-center gap-3 py-2.5">
                    <dt className="font-medium">Phone</dt>
                    <dd><a className="transition-colors hover:text-[#247F7A]" href={`tel:${clinic.phone.replace(/\D/g, '')}`}>{clinic.phone}</a></dd>
                  </div>
                  {clinic.fax && (
                    <div className="grid min-h-11 grid-cols-[72px_1fr] items-center gap-3 py-2.5">
                      <dt className="font-medium">Fax</dt>
                      <dd>{clinic.fax}</dd>
                    </div>
                  )}
                  <div className="grid grid-cols-[72px_1fr] items-start gap-3 py-2.5">
                    <dt className="font-medium">Address</dt>
                    <dd>
                      <a className="transition-colors hover:text-[#247F7A]" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                        {clinic.address}<br />
                        {[clinic.city, clinic.province, clinic.postalCode].filter(Boolean).join(', ')}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SpecialistReferrals clinicSlug={clinic.slug} />

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
        <LewisburgVideoTour />
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
      <LocationMapAndFaq
        clinicName={displayClinicName}
        directionsUrl={directionsUrl}
        faqs={clinic.faqs}
        mapEmbedUrl={mapEmbedUrl}
      />
      <LocationCareCta
        clinicName={displayClinicName}
        directionsHref={directionsUrl}
        phone={clinic.phone}
        walkInStatus={walkInStatus}
        image={clinic.slug === 'lewisburg' ? '/images/locations/lewisburg-exterior.jpg' : undefined}
        imageAlt={clinic.slug === 'lewisburg' ? 'Exterior of Zomak Medical Clinic Lewisburg' : undefined}
      />
    </section>
  )
}

function SpecialistReferrals({ clinicSlug }: { clinicSlug: string }) {
  const offersPediatricReferrals = clinicSlug === 'northmount' || clinicSlug === 'fairview'

  return (
    <section id="specialist-referrals" className="scroll-mt-24 border-y border-[#333333]/10 bg-[#EAF7F6] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <h2 className="max-w-[500px] font-serif text-[32px] font-normal leading-[1.1] text-[#333333] sm:text-[40px] lg:text-[46px]">
          When a specialist referral is needed
        </h2>
        <div className="max-w-[680px] text-[17px] leading-8 text-[#333333]/75">
          <p>
            {offersPediatricReferrals
              ? 'A referral is required to see pediatrician Dr. Chika Olijo or internal-medicine specialist Dr. Izuchukwu Ezeh.'
              : 'A referral is required to see internal-medicine specialist Dr. Izuchukwu Ezeh.'}{' '}
            Any ZOMAK clinic or outside healthcare provider can initiate the referral. Referring providers should fax it to 403-538-6747.
          </p>
          <p className="mt-4">
            After review, the clinic will contact the patient to confirm the appointment location and timing.{' '}
            {offersPediatricReferrals && 'Dr. Olijo rotates between Northmount and Fairview. '}
            Dr. Ezeh rotates across all five ZOMAK clinics.
          </p>
        </div>
      </div>
    </section>
  )
}

function LocationMapAndFaq({
  clinicName,
  directionsUrl,
  faqs,
  mapEmbedUrl
}: {
  clinicName: string
  directionsUrl: string
  faqs: { question: string; answer: string }[]
  mapEmbedUrl: string
}) {
  return (
    <section id="location-details" className="scroll-mt-24 border-t border-[#333333]/10 bg-[#F7FAFA] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-14">
        <div className="lg:pt-2">
          <h2 className="font-serif text-[34px] font-normal leading-tight text-[#333333] sm:text-[42px]">
            Before you visit
          </h2>
          <p className="mt-3 max-w-[480px] text-[16px] leading-7 text-[#333333]/65">
            Quick answers about visiting this clinic.
          </p>
          <div className="mt-7 divide-y divide-[#333333]/12 border-y border-[#333333]/12">
            {faqs.map((item) => (
              <details className="group py-5" key={item.question}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-[16px] font-medium leading-7 text-[#333333] marker:content-none">
                  <span>{item.question}</span>
                  <span className="mt-0.5 text-xl font-light leading-none text-[#247F7A] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-[680px] text-[15px] leading-7 text-[#333333]/70">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[#333333]/10 bg-white shadow-sm">
          <div className="overflow-hidden">
            <iframe
              className="h-[380px] w-full border-0 sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
              title={`Map showing ${clinicName}`}
            />
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-[#333333]/10 px-5 py-4 sm:px-6">
            <p className="text-sm text-[#333333]/65">Find the clinic and plan your route.</p>
            <a
              className="shrink-0 text-sm font-medium text-[#333333] underline decoration-[#333333]/25 underline-offset-4 transition hover:text-[#2AA7A1]"
              href={directionsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function removeTitleDash(title: string) {
  return title.replace(/\s+[—-]\s+/g, ' ')
}

function getUpdatedServiceCardImage(title: string, fallback: string) {
  const updatedImages: Record<string, string> = {
    'Visa Medical Experts': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80',
    'Medical Piercings': 'https://images.unsplash.com/photo-1684439673105-63d343532f0b?auto=format&fit=crop&w=1600&q=85',
    'Pediatric Care': '/images/services/pediatric-care-hero.jpg',
    "Women's Health Care": '/images/services/womens-health-group-hero.jpg',
    'Family Practice & Walk-in Care': '/images/services/family-practice-hero.png',
    'Internal Medicine Specialist Care': '/images/services/internal-medicine-hero-v2.jpg',
    Botox: '/images/aesthetics-botox-treatment.jpg',
    Fillers: '/images/aesthetics-fillers.jpg',
    'PRP Treatment for Hair and Facials': '/images/aesthetics-prp-treatment.jpg',
    'Vampire Breast Lift': '/images/aesthetics-vampire-breast-lift.jpg',
    'Vampire Wing Lift': '/images/aesthetics-vampire-wing-lift.jpg'
  }

  return updatedImages[title] || fallback
}

function getProviderLocationKey(locationName: string) {
  if (locationName.includes('Griffin Road')) return 'Zomak Griffin Road'
  if (locationName.includes('Centre Street') || locationName.includes('Centre St')) return 'Zomak Centre Street'
  if (locationName.includes('Northmount')) return 'Zomak Northmount'
  if (locationName.includes('Fairview')) return 'Zomak Fairview'
  if (locationName.includes('Lewisburg')) return 'Zomak Lewisburg'
  return locationName
}

function filterLocationServices(locationSlug: string, serviceTitles: string[]) {
  const centreStreetOnly = new Set([
    'Visa Medical Experts',
    'Panel Physician Appointments'
  ])
  const griffinRoadOnly = new Set([
    'Botox',
    'Fillers',
    'PRP Treatment for Hair and Facials',
    'Vampire Breast Lift',
    'Vampire Wing Lift'
  ])

  return Array.from(new Set(serviceTitles)).filter((title) => {
    if (centreStreetOnly.has(title)) {
      return locationSlug === 'centre-street-north-medical-clinic'
    }

    if (griffinRoadOnly.has(title)) {
      return locationSlug === 'griffin-road-medical-clinic'
    }

    return true
  })
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

function LewisburgVideoTour() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 max-w-[720px] sm:mb-10">
          <h2 className="font-serif text-[32px] font-normal leading-tight text-[#333333] sm:text-[42px]">
            Take a look around our clinic
          </h2>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <video
            aria-label="Video tour of Zomak Medical Clinic Lewisburg"
            className="mx-auto aspect-[9/16] h-full max-h-[720px] w-full max-w-[405px] rounded-[20px] bg-black object-cover shadow-sm"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/lewisburg-tour-2.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <div className="min-h-[360px] overflow-hidden rounded-[20px] bg-[#F3F8F7] lg:min-h-[620px]">
            <img
              src="/images/locations/lewisburg-reception.jpg"
              alt="Waiting area inside Zomak Medical Clinic Lewisburg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
