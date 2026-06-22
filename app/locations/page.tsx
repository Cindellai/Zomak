import Link from 'next/link'

import { locations } from '@/data/site'

export const metadata = {
  title: 'Locations | ZOMAK Medical',
  description: 'Find ZOMAK Medical clinic and care locations in Alberta.'
}

export default function LocationsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-teal">Locations</p>
        <h1 className="mt-3 text-4xl font-black text-ink">Find a ZOMAK location</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              className="rounded-md border border-pine/10 bg-cloud p-5 transition hover:border-teal/40"
              href={`/locations/${location.slug}`}
              key={location.slug}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black text-ink">{location.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{location.summary}</p>
                </div>
                <span className="rounded-md bg-mint px-2 py-1 text-xs font-bold text-pine">
                  {location.status}
                </span>
              </div>
              <p className="mt-4 text-sm text-pine">{location.phone}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
