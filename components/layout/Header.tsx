import { CalendarDays, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { cta, navItems } from '@/lib/routes'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-pine/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid size-10 place-items-center rounded-md bg-pine text-base font-black text-white">
            Z
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-wide text-pine">ZOMAK</span>
            <span className="block text-xs font-semibold uppercase text-ink/60">Medical</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/75 md:flex">
          {navItems.map((item) => (
            <Link className="hover:text-pine" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            aria-label="Call ZOMAK Medical"
            className="grid size-10 place-items-center rounded-md border border-pine/15 text-pine md:hidden"
            href={`tel:${cta.phone}`}
          >
            <Phone size={18} />
          </a>
          <Link
            aria-label="Find a clinic"
            className="hidden size-10 place-items-center rounded-md border border-pine/15 text-pine sm:grid"
            href={cta.directionsHref}
          >
            <MapPin size={18} />
          </Link>
          <Link
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-coral px-3 py-2 text-sm font-bold text-white hover:bg-[#c84f3e]"
            href="/contact"
          >
            <CalendarDays size={17} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
