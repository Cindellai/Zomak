import Link from 'next/link'

import { locations } from '@/data/site'

export const metadata = {
  title: 'Locations | ZOMAK Medical',
  description: 'Find ZOMAK Medical clinic and care locations in Alberta.'
}

export default function LocationsPage() {
  return (
    <section className="min-h-screen bg-cloud px-6 pb-24 pt-28 text-ink antialiased sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-sm font-normal text-teal">Locations</p>
        <h1
          className="mt-4 max-w-[760px] text-[42px] font-normal leading-tight text-ink sm:text-[58px] lg:text-[72px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Find a ZOMAK location
        </h1>
        <p className="mt-5 max-w-[680px] text-base leading-7 text-ink/70">
          Review clinic addresses, contact details, and available location pages before your visit.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <Link
              className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 text-ink no-underline shadow-sm transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-md"
              href={`/locations/${location.slug}`}
              key={location.slug}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-normal leading-tight text-ink transition group-hover:text-teal">
                    {location.name}
                  </h2>
                  <span className="shrink-0 rounded-full bg-mint px-3 py-1 text-xs font-normal text-ink">
                  {location.status}
                </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/65">{location.summary}</p>
              </div>

              <p className="mt-8 border-t border-ink/10 pt-5 text-sm font-medium leading-6 text-ink/75">
                {formatLocationAddress(location)}
                <br />
                {location.phone || 'Phone to confirm'}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function formatLocationAddress(location: (typeof locations)[number]) {
  return [
    location.address,
    [location.city, location.province, location.postalCode].filter(Boolean).join(', ')
  ]
    .filter(Boolean)
    .join(', ')
}
