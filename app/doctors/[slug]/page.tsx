import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin } from 'lucide-react'

import { JsonLd } from '@/components/seo/JsonLd'
import { providers, providerClinicalInterests, providerSeo } from '@/data/providers'
import type { Provider } from '@/data/providers'
import { locations } from '@/data/site'
import { absoluteUrl, pageMetadata } from '@/lib/seo'

type ProviderPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return providers.map((provider) => ({ slug: provider.slug }))
}

export async function generateMetadata({ params }: ProviderPageProps) {
  const { slug } = await params
  const provider = providers.find((item) => item.slug === slug)

  if (!provider) {
    return {}
  }

  const seo = providerSeo[provider.slug]

  return pageMetadata({
    pathname: `/doctors/${provider.slug}`,
    title: getProviderPageTitle(provider),
    description: seo?.description || provider.description.split('\n')[0],
    image: provider.image || '/images/home-zomak-logo.jpg'
  })
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params
  const provider = providers.find((item) => item.slug === slug)

  if (!provider) {
    notFound()
  }

  const providerLocations = provider.slug === 'izuchukwu-ezeh'
    ? 'Rotating Specialist · All ZOMAK Locations'
    : provider.slug === 'chika-olijo'
      ? 'ZOMAK Northmount and ZOMAK Fairview · Referrals accepted from all five locations'
      : provider.locations?.length
        ? provider.locations.join(', ')
    : provider.secondaryLocation
      ? `${provider.location} and ${provider.secondaryLocation}`
      : provider.location
  const affiliationLabels = provider.locations?.length
    ? provider.locations
    : [provider.location, provider.secondaryLocation].filter((item): item is string => Boolean(item))
  const affiliatedClinics = affiliationLabels
    .map(findClinicByProviderLabel)
    .filter((clinic): clinic is (typeof locations)[number] => Boolean(clinic))
  const clinicalInterests = providerClinicalInterests[provider.slug] || []
  const bookingHref = provider.slug === 'izuchukwu-ezeh'
    ? '/services/internal-medicine#referral-process'
    : provider.slug === 'chika-olijo'
      ? '/services/pediatric-care#referral-process'
      : affiliatedClinics.length === 1
        ? `/locations/${affiliatedClinics[0].slug}`
        : '/locations#choose-clinic'
  const bookingLabel = provider.slug === 'izuchukwu-ezeh' || provider.slug === 'chika-olijo'
    ? 'Review referral process'
    : 'Book appointment'
  const bookingInstructions = getBookingInstructions(provider, affiliatedClinics[0]?.name)
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: provider.name,
    url: absoluteUrl(`/doctors/${provider.slug}`),
    ...(provider.image ? { image: absoluteUrl(provider.image) } : {}),
    description: provider.description.split('\n')[0],
    jobTitle: provider.role,
    medicalSpecialty: provider.role,
    ...(provider.credentials
      ? {
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: provider.credentials
          }
        }
      : {}),
    worksFor: affiliatedClinics.map((clinic) => ({
      '@type': 'MedicalClinic',
      name: clinic.name,
      url: absoluteUrl(`/locations/${clinic.slug}`)
    }))
  }

  return (
    <section className="min-h-screen bg-white px-5 pb-20 pt-24 text-[#333333] antialiased sm:px-10 sm:pb-24 sm:pt-28 lg:px-16">
      <JsonLd data={physicianSchema} />
      <div className="mx-auto max-w-[1320px]">
        
        {/* Back Navigation Link */}
        <div className="mb-8">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-[14px] font-normal text-black no-underline transition hover:text-[#2AA7A1]"
          >
            <ArrowLeft size={18} />
            Back to providers
          </Link>
        </div>

        {/* Outer Split Layout */}
        <div className="grid gap-9 sm:gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[350px_minmax(0,1fr)] xl:gap-12">
          
          {/* Main Biography Stream Column */}
          <article className="lg:col-start-2 lg:row-start-1">
            
            {/* Header Identity Block */}
            <div className="mb-7 border-b border-neutral-100 pb-7">
              <h1
                className="font-serif text-[34px] font-normal leading-[1.08] tracking-tight text-[#333333] sm:text-[42px] lg:text-[48px]"
              >
                {provider.name}
              </h1>

              <p className="mt-3 text-[16px] leading-7 text-[#333333]">
                {provider.credentials ? provider.credentials.replaceAll(', ', ' · ') : 'Verified credentials forthcoming'}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <p className="text-[17px] font-medium text-[#333333]">{provider.role}</p>
                <p className="rounded-full bg-[#E7F5F2] px-3 py-1.5 text-[14px] font-medium text-[#247F7A]">{provider.status}</p>
              </div>
            </div>

            {/* Narrative Body Text */}
            <div className="space-y-3">
              {provider.description.split(/\n\s*\n/).map((paragraph) => {
                const lines = paragraph.split('\n')
                const isCertificationList = lines[0] === 'Certifications:'

                if (isCertificationList) {
                  return (
                    <div key={paragraph}>
                      <p className="text-[17px] font-medium text-[#333333]">Certifications</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-6 marker:text-[#2AA7A1]">
                        {lines.slice(1).map((line) => (
                          <li className="pl-1 text-[16px] font-light leading-7 text-neutral-600 sm:text-[17px]" key={line}>
                            {line.replace(/^[-–]\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                return (
                  <p className="whitespace-pre-line text-[16px] font-light leading-8 text-neutral-600 sm:text-[17px]" key={paragraph}>
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Call To Action Block */}
            <div className="mt-12 border-t border-neutral-100 pt-8">
              <p className="mb-5 max-w-[720px] text-[15px] leading-7 text-neutral-600">{bookingInstructions}</p>
              <Link
                href={bookingHref}
                className="inline-flex w-full items-center justify-center rounded-[12px] bg-[#333333] px-8 py-4 text-[15px] font-normal text-white no-underline transition hover:bg-[#2AA7A1] sm:w-auto"
              >
                {bookingLabel}
              </Link>
            </div>

          </article>

          {/* Left Sticky/Fixed Frame Profile Panel */}
          <aside className="lg:col-start-1 lg:row-start-1">
            <div className="aspect-[4/5] overflow-hidden rounded-[20px] bg-[#BFEAE7]">
              {provider.image ? (
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-5xl font-medium text-[#2AA7A1]" aria-label={`${provider.name} photo forthcoming`}>
                  {provider.name.split(' ').slice(1).map((part) => part[0]).join('')}
                </div>
              )}
            </div>

            {/* Minimal Flat Footer Meta tags */}
            <div className="mt-6 border-b border-[#333333]/10 pb-7">
              <div className="flex items-start gap-3 text-[#333333]">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#2AA7A1]" />
                <div className="text-[17px] leading-7">
                  {affiliatedClinics.length === 1 ? (
                    <Link className="font-medium text-[#333333] underline decoration-[#2AA7A1]/35 underline-offset-4 hover:text-[#247F7A]" href={`/locations/${affiliatedClinics[0].slug}`}>
                      ZOMAK {shortClinicName(affiliatedClinics[0].name)}
                    </Link>
                  ) : (
                    <>
                      <p className="font-medium">{providerLocations}</p>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[15px]">
                        {affiliatedClinics.map((clinic) => (
                          <Link className="text-[#247F7A] underline decoration-[#2AA7A1]/25 underline-offset-4" href={`/locations/${clinic.slug}`} key={clinic.slug}>
                            {shortClinicName(clinic.name)}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <section className="mt-7" aria-labelledby="areas-of-care-heading">
              <h2 id="areas-of-care-heading" className="font-serif text-[25px] font-normal text-[#333333]">Areas of care</h2>
              {clinicalInterests.length > 0 ? (
                <ul className="mt-4 grid list-disc gap-2.5 pl-5 marker:text-[#2AA7A1]">
                  {clinicalInterests.map((interest) => (
                    <li className="pl-1 text-[15px] leading-6 text-[#333333]" key={interest}>{interest}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-[15px] leading-7 text-[#333333]">Approved clinical-interest information is forthcoming.</p>
              )}
            </section>
          </aside>

        </div>

      </div>
    </section>
  )
}

function getProviderPageTitle(provider: Provider) {
  const area = provider.slug === 'chika-olijo'
    ? 'Calgary'
    : provider.location === 'All ZOMAK Locations'
      ? 'Calgary and Cochrane'
      : provider.location.includes('Griffin Road')
        ? 'Cochrane'
        : provider.location.includes('Lewisburg')
          ? 'NE Calgary'
          : provider.location.includes('Fairview')
            ? 'SE Calgary'
            : provider.location.includes('Northmount')
              ? 'NW Calgary'
              : 'North Calgary'

  const intent = provider.slug === 'izuchukwu-ezeh'
    ? 'Internal Medicine by Referral'
    : provider.slug === 'chika-olijo'
      ? 'Pediatrician by Referral'
      : provider.slug === 'nwadike'
        ? 'Family Doctor and IRCC Panel Physician'
        : provider.status.startsWith('Accepting New Patients')
          ? 'Family Doctor Accepting New Patients'
          : 'Family Physician'

  return `${provider.name} | ${intent} in ${area} | ZOMAK`
}

function getBookingInstructions(provider: Provider, clinicName?: string) {
  if (provider.slug === 'izuchukwu-ezeh') {
    return 'Internal medicine is available by referral. Choose a ZOMAK clinic to initiate the referral; appointment location and timing are confirmed after review.'
  }

  if (provider.slug === 'chika-olijo') {
    return 'Pediatric care is available by referral. Referrals may be initiated through any ZOMAK clinic, with appointments provided at Northmount or Fairview.'
  }

  const clinic = clinicName ? shortClinicName(clinicName) : 'the physician’s clinic'
  if (provider.status === 'Case-by-Case') {
    return `Contact ${clinic} to ask whether this physician is currently accepting patients and to confirm appointment availability.`
  }

  return `Contact ${clinic} to confirm new-patient registration and current appointment availability.`
}

function shortClinicName(name: string) {
  return name.replace(/^Zomak Medical Clinic\s*-\s*/i, '').replace('Centre St', 'Centre Street')
}

function findClinicByProviderLabel(label: string) {
  if (label.includes('Griffin Road')) {
    return locations.find((location) => location.slug === 'griffin-road-medical-clinic')
  }
  if (label.includes('Centre Street')) {
    return locations.find((location) => location.slug === 'centre-street-north-medical-clinic')
  }
  if (label.includes('Northmount')) {
    return locations.find((location) => location.slug === 'northmount')
  }
  if (label.includes('Fairview')) {
    return locations.find((location) => location.slug === 'fairview')
  }
  if (label.includes('Lewisburg')) {
    return locations.find((location) => location.slug === 'lewisburg')
  }
  return undefined
}
