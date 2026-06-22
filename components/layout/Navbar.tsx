'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

import { locations, services } from '@/data/site'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'services' | 'locations' | null>(
    null
  )
  const isArticleDetail = pathname.startsWith('/blog/')
  const usesDarkImageHero = pathname === '/' || pathname === '/doctors' || isArticleDetail
  const isOverlayNav = !isScrolled
  const usesLightText = isOverlayNav && usesDarkImageHero
  const linkTone = usesLightText ? 'text-white' : 'text-[#111]'
  const mutedHover = usesLightText ? 'hover:text-white/70' : 'hover:opacity-70'

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24)
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrolled)
    }
  }, [])

  useEffect(() => {
    setOpenMenu(null)
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors ${
        isOverlayNav ? 'bg-transparent' : 'bg-white/90 shadow-sm backdrop-blur-md'
      }`}
    >
      <nav className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12">
        
        {/* Left Side: Brand Logo */}
        <Link
          href="/"
          className={`text-[26px] font-bold tracking-[-0.05em] no-underline ${linkTone}`}
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          ZOMAK
        </Link>

        {/* Primary Navigation Hub */}
        <div className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-[14px] font-medium md:flex ${linkTone}`}>
          <Link href="/" className={`no-underline transition ${mutedHover}`}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('services')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href="/services"
              onClick={() => setOpenMenu(null)}
              className={`flex items-center gap-1 no-underline transition ${mutedHover}`}
            >
              Services
              <ChevronDown
                aria-hidden="true"
                size={14}
                className={`transition duration-200 ${
                  openMenu === 'services' ? 'rotate-180' : ''
                }`}
              />
            </Link>

            <div
              className={`absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                openMenu === 'services'
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              }`}
            >
              <div className="max-h-[70vh] overflow-y-auto overscroll-contain rounded-xl border border-gray-100 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                {services.map((service) => (
                  <Link
                    href={`/services/${service.slug}`}
                    key={service.slug}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-[#333] no-underline transition hover:bg-gray-50 hover:text-black"
                  >
                    {service.title}
                    <span className="mt-0.5 block text-[11px] font-normal text-gray-400">
                      {service.category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('locations')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              onClick={() =>
                setOpenMenu(openMenu === 'locations' ? null : 'locations')
              }
              className={`flex cursor-pointer items-center gap-1 font-medium no-underline transition ${mutedHover}`}
            >
              Locations
              <ChevronDown
                aria-hidden="true"
                size={14}
                className={`transition duration-200 ${
                  openMenu === 'locations' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                openMenu === 'locations'
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              }`}
            >
              <div className="max-h-[70vh] overflow-y-auto overscroll-contain rounded-xl border border-gray-100 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                {locations.map((location) => (
                  <Link
                    href={`/locations/${location.slug}`}
                    key={location.slug}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-[#333] no-underline transition hover:bg-gray-50 hover:text-black"
                  >
                    {location.name
                      .replace('ZOMAK ', '')
                      .replace(' Medical Clinic', '')}
                    <span className="mt-0.5 block text-[11px] font-normal text-gray-400">
                      {location.city}, {location.province}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/doctors" className={`no-underline transition ${mutedHover}`}>
            Providers
          </Link>

          <Link href="/blog" className={`no-underline transition ${mutedHover}`}>
            Articles
          </Link>
        </div>

        {/* Right-aligned Utilities */}
        <div className={`relative z-10 hidden items-center gap-6 text-[14px] font-medium md:flex ${linkTone}`}>
          <Link href="/about" className={`no-underline transition ${mutedHover}`}>
            About
          </Link>


          <Link
            href="/contact"
            className="inline-flex h-[38px] items-center gap-1.5 rounded-lg bg-[#102A32] px-4 text-[13px] font-semibold text-white no-underline shadow-[0_10px_26px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition hover:bg-[#2F7F95]"
          >
            <ArrowUpRight size={15} strokeWidth={2.5} />
            Contact
          </Link>
        </div>

        {/* Mobile Variant Callout Button */}
        <Link
          href="/contact"
          className="rounded-lg bg-[#102A32] px-3.5 py-1.5 text-[12px] font-semibold text-white no-underline shadow-[0_10px_26px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition hover:bg-[#2F7F95] md:hidden"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
