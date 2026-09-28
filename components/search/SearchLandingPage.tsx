import Link from 'next/link'
import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'

import { JsonLd } from '@/components/seo/JsonLd'
import { providers } from '@/data/providers'
import type { SearchLandingPageConfig } from '@/data/search-pages'
import { clinicHoursSummary, locations } from '@/data/site'
import { absoluteUrl } from '@/lib/seo'

export function SearchLandingPage({ page }: { page: SearchLandingPageConfig }) {
  const pageLocations = page.locationSlugs
    .map((slug) => locations.find((location) => location.slug === slug))
    .filter((location): location is (typeof locations)[number] => Boolean(location))
  const acceptingDoctors = page.acceptingDoctorLocations
    ? providers.filter(
        (provider) =>
          provider.role.includes('Family Physician') &&
          provider.status.startsWith('Accepting New Patients') &&
          page.acceptingDoctorLocations?.includes(provider.location)
      )
    : []
  const clinicSectionId = page.slug.includes('cochrane') ? 'cochrane-clinic' : 'calgary-clinics'

  if (page.slug === 'immigration-medical-exam-calgary' && pageLocations[0]) {
    return <ImmigrationMedicalLanding page={page} location={pageLocations[0]} />
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-16 text-[#333333]">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: page.h1,
          description: page.description,
          url: absoluteUrl(`/${page.slug}`),
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: pageLocations.map((location, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'MedicalClinic',
                name: location.name,
                url: absoluteUrl(`/locations/${location.slug}`),
                telephone: location.phone,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: location.address,
                  addressLocality: location.city,
                  addressRegion: location.province,
                  postalCode: location.postalCode,
                  addressCountry: 'CA'
                }
              }
            }))
          }
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        }}
      />

      <header className="border-b border-[#333333]/10 bg-[#F7FAFA] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[980px] font-serif text-[42px] font-normal leading-[1.03] sm:text-[64px] lg:text-[78px]">
            {page.h1}
          </h1>
          <p className="mt-7 max-w-[780px] text-[17px] leading-8 text-[#333333]/72 sm:text-[19px]">
            {page.introduction}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink action={page.primaryAction} primary />
            {page.secondaryAction && <ActionLink action={page.secondaryAction} />}
          </div>
        </div>
      </header>

      {acceptingDoctors.length > 0 && (
        <section id="accepting-family-doctors" className="scroll-mt-24 px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="max-w-[760px]">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">Current physician status</p>
              <h2 className="mt-3 font-serif text-[36px] font-normal leading-tight sm:text-[48px]">Accepting family physicians</h2>
              <p className="mt-5 text-[16px] leading-7 text-[#333333]/68">Contact the physician’s clinic to confirm that registration remains available and to ask about appointment timing.</p>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {acceptingDoctors.map((provider) => {
                const clinic = clinicForProviderLocation(provider.location)
                return (
                  <article className="border-t border-[#333333]/15 pt-5" key={provider.slug}>
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#EAF7F6]">
                      {provider.image ? (
                        <img className="h-full w-full object-cover object-top" src={provider.image} alt={provider.name} />
                      ) : (
                        <div className="flex h-full items-center justify-center font-serif text-4xl text-[#2AA7A1]" aria-label={`${provider.name} photo forthcoming`}>
                          {provider.name.split(' ').slice(1).map((part) => part[0]).join('')}
                        </div>
                      )}
                    </div>
                    <p className="mt-5 text-sm font-medium text-[#2AA7A1]">{provider.status}</p>
                    <h3 className="mt-2 text-[25px] font-medium leading-tight">{provider.name}</h3>
                    {provider.credentials && <p className="mt-2 text-sm leading-6 text-[#333333]/58">{provider.credentials}</p>}
                    <p className="mt-4 flex items-center gap-2 text-sm text-[#333333]/68"><MapPin size={16} className="text-[#2AA7A1]" />{provider.location.replace(/^Zomak\s+/i, '')}</p>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                      <Link className="text-[#333333] underline decoration-[#333333]/20 underline-offset-4 hover:text-[#2AA7A1]" href={`/doctors/${provider.slug}`}>View profile</Link>
                      {clinic && <a className="text-[#333333] underline decoration-[#333333]/20 underline-offset-4 hover:text-[#2AA7A1]" href={`tel:${clinic.phone.replace(/\D/g, '')}`}>Call clinic</a>}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section id={clinicSectionId} className="scroll-mt-24 border-y border-[#333333]/10 bg-[#F4F6F7] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[760px]">
            <h2 className="font-serif text-[36px] font-normal leading-tight sm:text-[48px]">{page.locationHeading}</h2>
            <p className="mt-5 text-[16px] leading-7 text-[#333333]/68">{page.locationIntroduction}</p>
          </div>

          <div className={`mt-10 grid gap-6 ${pageLocations.length === 1 ? 'max-w-[760px]' : 'md:grid-cols-2'}`}>
            {pageLocations.map((location) => (
              <article className="overflow-hidden rounded-2xl border border-[#333333]/10 bg-white" key={location.slug}>
                <div className="grid sm:grid-cols-[180px_1fr]">
                  <div className="aspect-[16/9] overflow-hidden bg-[#EAF7F6] sm:aspect-auto sm:min-h-[250px]">
                    <img className="h-full w-full object-cover" src={location.heroImageUrl} alt={location.heroImageAlt} />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#2AA7A1]">{location.city}, {location.province}</p>
                    <h3 className="mt-2 text-[25px] font-medium leading-tight">{shortClinicName(location.name)}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#333333]/65">{location.summary}</p>
                    <div className="mt-5 space-y-2 text-sm leading-6 text-[#333333]/72">
                      <p className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0 text-[#2AA7A1]" />{formatLocationAddress(location)}</p>
                      <p className="flex items-start gap-2"><Clock3 size={16} className="mt-1 shrink-0 text-[#2AA7A1]" />{location.walkInStatus}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
                      <Link className="inline-flex items-center gap-1.5 text-[#333333] no-underline hover:text-[#2AA7A1]" href={`/locations/${location.slug}`}>Clinic details <ArrowRight size={15} /></Link>
                      <a className="inline-flex items-center gap-1.5 text-[#333333] no-underline hover:text-[#2AA7A1]" href={`tel:${location.phone.replace(/\D/g, '')}`}><Phone size={15} />{location.phone}</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm leading-6 text-[#333333]/58">Confirmed standard hours: {clinicHoursSummary}</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-9 border-y border-[#333333]/10 py-10 md:grid-cols-3 md:gap-0">
            {page.details.map((detail, index) => (
              <article className={`min-w-0 ${index > 0 ? 'md:border-l md:border-[#333333]/10 md:pl-8' : ''} ${index < page.details.length - 1 ? 'md:pr-8' : ''}`} key={detail.heading}>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#2AA7A1]">0{index + 1}</p>
                <h2 className="mt-3 text-[23px] font-medium leading-tight">{detail.heading}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#333333]/66">{detail.body}</p>
                {detail.href && detail.linkLabel && <Link className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#333333] no-underline hover:text-[#2AA7A1]" href={detail.href}>{detail.linkLabel} <ArrowRight size={14} /></Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#333333]/10 bg-[#F7FAFA] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">Questions</p>
            <h2 className="mt-3 font-serif text-[36px] font-normal leading-tight sm:text-[48px]">What patients ask</h2>
          </div>
          <div className="divide-y divide-[#333333]/10 border-y border-[#333333]/10">
            {page.faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="cursor-pointer list-none pr-8 text-[17px] font-medium leading-7 marker:content-none">{faq.question}</summary>
                <p className="mt-3 max-w-[760px] text-[15px] leading-7 text-[#333333]/66">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ImmigrationMedicalLanding({
  page,
  location
}: {
  page: SearchLandingPageConfig
  location: (typeof locations)[number]
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-16 text-[#333333]">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: page.h1,
          description: page.description,
          url: absoluteUrl(`/${page.slug}`),
          mainEntity: {
            '@type': 'MedicalClinic',
            name: location.name,
            url: absoluteUrl(`/locations/${location.slug}`),
            telephone: location.phone
          }
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        }}
      />

      <header className="bg-[#EAF7F6]">
        <div className="grid w-full overflow-hidden lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-20">
            <h1 className="max-w-[720px] font-serif text-[39px] font-normal leading-[1.03] sm:text-[58px] lg:text-[66px]">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-[650px] text-[18px] leading-8 text-[#333333]/72">
              Complete your official Canadian immigration medical examination with an IRCC-approved panel physician at ZOMAK Centre Street.
            </p>
            <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-[#333333]/62">
              Centre Street is the only ZOMAK location providing this service. International visa medical requirements use a separate service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink action={page.primaryAction} primary />
              <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333333]/20 px-6 py-3 text-sm font-medium text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]" href={`tel:${location.phone.replace(/\D/g, '')}`}>
                <Phone size={16} /> Call Centre Street
              </a>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[650px]">
            <img className="absolute inset-0 h-full w-full object-cover" src={location.heroImageUrl} alt={location.heroImageAlt} />
          </div>
        </div>
      </header>

      <section className="w-full px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20">
          <div>
            <h2 className="font-serif text-[38px] font-normal leading-[1.08] sm:text-[50px]">{page.locationHeading}</h2>
            <p className="mt-5 text-[17px] leading-8 text-[#333333]/70">{page.locationIntroduction}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink action={page.primaryAction} primary />
              <Link href={`/locations/${location.slug}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333333]/20 px-6 py-3 text-sm font-medium text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]">Clinic details <ArrowRight size={15} /></Link>
            </div>
          </div>

          <div className="border-y border-[#333333]/15">
            <div className="grid grid-cols-[26px_1fr] gap-4 border-b border-[#333333]/15 py-6">
              <MapPin className="mt-1 text-[#2AA7A1]" size={20} />
              <div><h3 className="text-[18px] font-medium">ZOMAK Centre Street</h3><p className="mt-1 text-[15px] leading-6 text-[#333333]/65">{formatLocationAddress(location)}</p></div>
            </div>
            <div className="grid grid-cols-[26px_1fr] gap-4 border-b border-[#333333]/15 py-6">
              <Phone className="mt-1 text-[#2AA7A1]" size={20} />
              <div><h3 className="text-[18px] font-medium">Contact the clinic</h3><a className="mt-1 inline-block text-[15px] text-[#333333]/65 underline decoration-[#333333]/25 underline-offset-4" href={`tel:${location.phone.replace(/\D/g, '')}`}>{location.phone}</a></div>
            </div>
            <div className="grid grid-cols-[26px_1fr] gap-4 py-6">
              <Clock3 className="mt-1 text-[#2AA7A1]" size={20} />
              <div><h3 className="text-[18px] font-medium">Confirm before your visit</h3><p className="mt-1 text-[15px] leading-6 text-[#333333]/65">The clinic will confirm appointment availability, identification and the documents required for your IRCC instructions.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F4F6F7] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-[760px]">
            <h2 className="font-serif text-[38px] font-normal leading-[1.08] sm:text-[50px]">Prepare for your IRCC medical exam</h2>
            <p className="mt-5 text-[17px] leading-8 text-[#333333]/68">Review the documents, possible additional costs and follow-up process before booking.</p>
          </div>
          <div className="mt-12 grid border-y border-[#333333]/15 lg:grid-cols-3">
            {page.details.map((detail, index) => (
              <article className={`py-8 ${index > 0 ? 'border-t border-[#333333]/15 lg:border-l lg:border-t-0 lg:pl-9' : 'lg:pr-9'} ${index === 1 ? 'lg:pr-9' : ''}`} key={detail.heading}>
                <h3 className="font-serif text-[27px] leading-tight">{detail.heading}</h3>
                <p className="mt-4 text-[16px] leading-7 text-[#333333]/68">{detail.body}</p>
                {detail.href && detail.linkLabel && <Link className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#247F7A] no-underline hover:text-[#333333]" href={detail.href}>{detail.linkLabel} <ArrowRight size={14} /></Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-[38px] font-normal leading-[1.08] sm:text-[50px]">Questions about IRCC medical exams</h2>
            <p className="mt-5 max-w-[420px] text-[16px] leading-7 text-[#333333]/65">Answers to common questions about appointments, testing and results.</p>
          </div>
          <div className="divide-y divide-[#333333]/15 border-y border-[#333333]/15">
            {page.faqs.map((faq) => (
              <details className="group py-6" key={faq.question}>
                <summary className="cursor-pointer list-none pr-8 text-[18px] font-medium leading-7 marker:content-none">{faq.question}</summary>
                <p className="mt-3 max-w-[720px] text-[16px] leading-7 text-[#333333]/66">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ActionLink({ action, primary = false }: { action: { label: string; href: string }; primary?: boolean }) {
  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium no-underline transition ${primary ? 'bg-[#333333] text-white hover:bg-[#2AA7A1]' : 'border border-[#333333]/20 text-[#333333] hover:border-[#2AA7A1] hover:text-[#2AA7A1]'}`
  if (action.href.startsWith('tel:')) {
    return <a className={className} href={action.href}>{action.label}<ArrowRight size={15} /></a>
  }
  if (action.href.startsWith('http')) {
    return <a className={className} href={action.href} rel="noopener noreferrer" target="_blank">{action.label}<ArrowRight size={15} /></a>
  }
  return <Link className={className} href={action.href}>{action.label}<ArrowRight size={15} /></Link>
}

function clinicForProviderLocation(providerLocation: string) {
  const matchingName = providerLocation.replace(/^Zomak\s+/i, '')
  return locations.find((location) => shortClinicName(location.name) === matchingName)
}

function shortClinicName(name: string) {
  return name.replace(/^Zomak Medical Clinic\s*-\s*/i, '').replace(/^Zomak\s+/i, '').replace('Centre St', 'Centre Street')
}

function formatLocationAddress(location: (typeof locations)[number]) {
  return [
    location.address,
    [location.city, location.province, location.postalCode].filter(Boolean).join(', ')
  ].filter(Boolean).join(', ')
}
