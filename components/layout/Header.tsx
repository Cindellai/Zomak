import { CalendarDays, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { cta, navItems } from '@/lib/routes'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-pine/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3 sm:px-10 lg:px-16">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid size-10 place-items-center rounded-md bg-pine text-base font-normal text-white">
            Z
          </span>
          <span className="leading-tight">
            <span className="block text-base font-normal text-pine">ZOMAK</span>
            <span className="block text-xs font-normal text-ink/60">Medical</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-normal text-ink/75 md:flex">
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
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-coral px-3 py-2 text-sm font-normal text-white hover:bg-[#2AA7A1]"
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
