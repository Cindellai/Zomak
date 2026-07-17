'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

import {
  getServiceCategorySlug,
  locations,
  serviceCategoryOrder
} from '@/data/site'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'services' | 'locations' | null>(
    null
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const isArticleDetail = pathname.startsWith('/blog/')
  const isServiceDetail = pathname.startsWith('/services/')
  const usesDarkImageHero =
    pathname === '/' || pathname === '/doctors' || isArticleDetail || isServiceDetail
  const isOverlayNav = !isScrolled
  const usesLightText = isOverlayNav && usesDarkImageHero && !mobileOpen
  const linkTone = usesLightText ? 'text-white' : 'text-[#333333]'
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
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors ${
        isOverlayNav && !mobileOpen ? 'bg-transparent' : 'bg-white/95 shadow-sm backdrop-blur-md'
      }`}
    >
      <nav className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-16">
        
        {/* Left Side: Brand Logo */}
        <Link
          href="/"
          className={`text-[26px] font-bold no-underline ${linkTone}`}
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          ZOMAK
        </Link>

        {/* Primary Navigation Hub */}
        <div className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-5 text-[14px] font-medium lg:flex xl:gap-6 ${linkTone}`}>
          <Link href="/about" className={`no-underline transition ${mutedHover}`}>
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('services')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href="/services/family-practice"
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
              <div className="max-h-[70vh] overflow-y-auto overscroll-contain rounded-xl border border-[#333333]/10 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                {serviceCategoryOrder.map((category) => (
                  <Link
                    href={`/services/${getServiceCategorySlug(category)}`}
                    key={category}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-[#333333] no-underline transition hover:bg-[#F4F6F7] hover:text-[#333333]"
                  >
                    {category}
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
              <div className="max-h-[70vh] overflow-y-auto overscroll-contain rounded-xl border border-[#333333]/10 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                {locations.map((location) => (
                  <Link
                    href={`/locations/${location.slug}`}
                    key={location.slug}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-[#333333] no-underline transition hover:bg-[#F4F6F7] hover:text-[#333333]"
                  >
                    {location.name}
                    <span className="mt-0.5 block text-[11px] font-normal text-[#333333]/45">
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

          <Link href="/visa-medicals" className={`no-underline transition ${mutedHover}`}>
            Visa Medicals
          </Link>

          <Link href="/blog" className={`no-underline transition ${mutedHover}`}>
            Articles
          </Link>
        </div>

        {/* Right-aligned Utilities */}
        <div className={`relative z-10 hidden items-center gap-5 text-[14px] font-medium lg:flex xl:gap-6 ${linkTone}`}>
          <Link
            href="/contact"
            className="inline-flex h-[38px] items-center gap-1.5 rounded-lg bg-[#333333] px-4 text-[13px] font-normal text-white no-underline shadow-[0_10px_26px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition hover:bg-[#2AA7A1]"
          >
            <ArrowUpRight size={15} strokeWidth={2.5} />
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={`relative z-10 flex size-10 items-center justify-center bg-transparent transition lg:hidden ${
            usesLightText ? 'text-white' : 'text-[#333333]'
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`lg:hidden ${
          mobileOpen ? 'block' : 'hidden'
        } border-t border-[#333333]/10 bg-white px-6 pb-6 pt-2 shadow-[0_18px_40px_rgba(51,51,51,0.08)] sm:px-10`}
      >
        <div className="mx-auto grid max-w-[1440px] gap-2 text-[#333333]">
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/services/family-practice">Services</MobileNavLink>
          <div className="rounded-xl bg-[#F4F6F7] p-3">
            <p className="px-1 text-xs font-normal text-[#2AA7A1]">
              Service categories
            </p>
            <div className="mt-2 grid gap-1">
              {serviceCategoryOrder.map((category) => (
                <MobileNavLink
                  href={`/services/${getServiceCategorySlug(category)}`}
                  key={category}
                >
                  {category}
                </MobileNavLink>
              ))}
            </div>
          </div>
          <MobileNavLink href="/locations/centre-street-north-medical-clinic">
            Locations
          </MobileNavLink>
          <MobileNavLink href="/doctors">Providers</MobileNavLink>
          <MobileNavLink href="/visa-medicals">Visa Medicals</MobileNavLink>
          <MobileNavLink href="/blog">Articles</MobileNavLink>
          <Link
            href="/contact"
            className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#333333] px-5 text-[14px] font-normal text-white no-underline transition hover:bg-[#2AA7A1]"
          >
            <ArrowUpRight size={16} />
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

function MobileNavLink({
  children,
  href
}: {
  children: ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2.5 text-[15px] font-normal text-[#333333] no-underline transition hover:bg-[#BFEAE7]"
    >
      {children}
    </Link>
  )
}
