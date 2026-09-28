import Link from 'next/link'

import { locations } from '@/data/site'
import { getEditableWalkInStatus } from '@/lib/sanity/walkIns'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({ pathname: '/locations', title: 'Locations | ZOMAK Medical', description: 'Find ZOMAK Medical clinic and care locations in Alberta.', image: '/images/locations/lewisburg-exterior.jpg' })

export default async function LocationsPage() {
  const liveWaitTimesEnabled = process.env.NEXT_PUBLIC_LIVE_WAIT_TIMES_ENABLED === 'true'
  const clinicCards = await Promise.all(
    locations.map(async (location) => {
      const editable = liveWaitTimesEnabled
        ? await getEditableWalkInStatus(location.slug)
        : null

      return {
        ...location,
        displayWalkInStatus:
          editable?.walkInStatus || 'Call to confirm walk-in availability',
        displayWaitTime: editable?.waitTime || ''
      }
    })
  )

  return (
    <section id="choose-clinic" className="min-h-screen scroll-mt-24 bg-white px-6 pb-24 pt-28 text-ink antialiased sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <h1
          className="max-w-[760px] text-[42px] font-normal leading-tight text-ink sm:text-[58px] lg:text-[72px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Find a ZOMAK location
        </h1>
        <p className="mt-5 max-w-[680px] text-[17px] leading-8 text-ink">
          Compare clinic services and hours, then call, get directions or view the location for more information.
        </p>

        <div className="mt-12 grid gap-x-7 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {clinicCards.map((location) => (
            <article
              className="flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-ink/15 bg-white text-ink"
              key={location.slug}
            >
              <Link href={`/locations/${location.slug}`} className="block aspect-[16/9] overflow-hidden bg-mint">
                <img src={location.heroImageUrl} alt={location.heroImageAlt} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="font-serif text-[28px] font-normal leading-tight text-ink">
                    <Link className="text-ink no-underline transition hover:text-teal" href={`/locations/${location.slug}`}>
                      {shortClinicName(location.name)}
                    </Link>
                    </h2>
                    <p className="mt-1 text-sm text-ink">{location.city}, {location.province}</p>
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-ink">{location.summary}</p>

                <dl className="mt-6 border-y border-ink/15">
                  <div className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[92px_1fr] sm:gap-4">
                    <dt className="font-medium">Walk-ins</dt>
                    <dd className="text-[15px] leading-6">{location.displayWalkInStatus}</dd>
                  </div>
                  <div className="py-4">
                    <dt className="font-medium">Clinic hours</dt>
                    <dd className="mt-3 space-y-2">
                      {location.hours.map((entry) => (
                        <div className="flex justify-between gap-4 text-[14px] leading-6" key={entry.days}>
                          <span>{entry.days}</span>
                          <span className="text-right">{entry.hours}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </dl>

                {location.displayWaitTime && (
                  <p className="mt-4 text-sm leading-6">Estimated wait: {location.displayWaitTime}</p>
                )}

                <div className="mt-auto pt-6">
                  <p className="text-[14px] leading-6 text-ink">{formatLocationAddress(location)}</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    {location.phone && <a className="inline-flex min-h-10 items-center rounded-full bg-ink px-4 py-2 font-medium text-white no-underline transition hover:bg-teal" href={`tel:${location.phone.replace(/\D/g, '')}`}>Call clinic</a>}
                    <a className="inline-flex min-h-10 items-center rounded-full border border-ink/20 px-4 py-2 font-medium text-ink no-underline hover:border-teal hover:text-teal" href={getDirectionsHref(location)} target="_blank" rel="noopener noreferrer">Get directions</a>
                    <Link className="inline-flex min-h-10 items-center px-2 py-2 font-medium text-ink no-underline hover:text-teal" href={`/locations/${location.slug}`}>View clinic</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function shortClinicName(name: string) {
  return name
    .replace(/^Zomak Medical Clinic\s*-\s*/i, 'ZOMAK ')
    .replace('Centre St', 'Centre Street')
}

function getDirectionsHref(location: (typeof locations)[number]) {
  const query = [
    location.address,
    location.city,
    location.province,
    location.postalCode
  ]
    .filter(Boolean)
    .join(', ')

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function formatLocationAddress(location: (typeof locations)[number]) {
  return [
    location.address,
    [location.city, location.province, location.postalCode].filter(Boolean).join(', ')
  ]
    .filter(Boolean)
    .join(', ')
}
