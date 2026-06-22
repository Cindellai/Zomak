import { CalendarDays, Phone } from 'lucide-react'

import { locations } from '@/data/site'

export const metadata = {
  title: 'Contact ZOMAK Medical',
  description: 'Contact or call a ZOMAK Medical clinic.'
}

export default function BookPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-teal">Contact</p>
        <h1 className="mt-3 text-4xl font-black text-ink">Contact a clinic</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
          Patients can choose a location, contact the clinic team, or call the
          main clinic line.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <div className="rounded-md border border-pine/10 bg-cloud p-5" key={location.slug}>
              <h2 className="text-lg font-black text-ink">{location.name}</h2>
              <p className="mt-2 text-sm text-ink/65">
                {location.city}, {location.province}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-10 items-center gap-2 rounded-md bg-coral px-4 py-2 text-sm font-bold text-white"
                  href="/contact"
                >
                  <CalendarDays size={17} />
                  Contact clinic
                </a>
                <a
                  className="inline-flex min-h-10 items-center gap-2 rounded-md bg-pine px-4 py-2 text-sm font-bold text-white"
                  href={`tel:${location.phone}`}
                >
                  <Phone size={17} />
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
