'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const serviceLinks = [
  ['Family Practice', '/services/family-practice'], ['Walk-In Care', '/locations#choose-clinic'],
  ["Women's Health", '/services/womens-health'], ["Men's Health", '/services/mens-health'],
  ['Pediatric Care', '/services/pediatric-care'], ['Internal Medicine', '/services/internal-medicine'],
  ['Medical Aesthetics', '/services/aesthetics'], ['ZOMAK Home Care', '/services/zomak-home-care']
] as const
const locationLinks = [
  ['Lewisburg', '/locations/lewisburg'],
  ['Centre Street', '/locations/centre-street-north-medical-clinic'],
  ['Northmount', '/locations/northmount'],
  ['Fairview', '/locations/fairview'],
  ['Griffin Road · Cochrane', '/locations/griffin-road-medical-clinic'],
  ['View all locations', '/locations#choose-clinic']
] as const
const immigrationLinks = [
  ['Canadian IRCC Medicals', '/immigration-medical-exam-calgary'],
  ['IRCC Panel Physician', '/ircc-panel-physician-calgary'],
  ['International Visa Medicals', '/visa-medical-calgary']
] as const
const resourceLinks = [
  ['Articles', '/blog'],
  ['About ZOMAK', '/about']
] as const
type MenuName = 'locations' | 'services' | 'immigration' | 'resources'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null)
  useEffect(() => { setMobileOpen(false); setOpenMenu(null) }, [pathname])
  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [mobileOpen])

  return <header className="fixed inset-x-0 top-0 z-[80] bg-white/95 backdrop-blur-md">
    <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-14">
      <Link href="/" aria-label="ZOMAK Medical home" className="flex shrink-0 items-center gap-2 text-[#333333] no-underline">
        <img src="/images/zomak-logo-transparent.png" alt="" className="size-10 object-contain" />
        <span className="text-[25px] font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>ZOMAK</span>
      </Link>
      <div className="hidden items-center gap-4 text-[13px] font-medium text-[#333333] xl:flex xl:gap-6 xl:text-[14px]">
        <Dropdown label="Locations" name="locations" openMenu={openMenu} setOpenMenu={setOpenMenu} links={locationLinks} />
        <Dropdown label="Services" name="services" openMenu={openMenu} setOpenMenu={setOpenMenu} links={serviceLinks} />
        <NavLink href="/doctors">Doctors</NavLink>
        <Dropdown label="Immigration & Visa Medicals" name="immigration" openMenu={openMenu} setOpenMenu={setOpenMenu} links={immigrationLinks} />
        <Dropdown label="Patient Resources" name="resources" openMenu={openMenu} setOpenMenu={setOpenMenu} links={resourceLinks} />
      </div>
      <Link href="/locations#choose-clinic" className="hidden h-10 shrink-0 items-center gap-1.5 rounded-lg bg-[#333333] px-4 text-[13px] text-white no-underline transition hover:bg-[#2AA7A1] xl:inline-flex"><ArrowUpRight size={15} /> Book or Contact</Link>
      <button type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} className="flex size-10 items-center justify-center text-[#333333] xl:hidden">{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
    </nav>
    {mobileOpen && <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#333333]/10 bg-white px-5 pb-10 pt-4 sm:px-10 xl:hidden">
      <div className="mx-auto grid max-w-[720px] gap-1 text-[#333333]">
        <MobileDropdown label="Locations" name="locations" openMenu={openMenu} setOpenMenu={setOpenMenu} links={locationLinks} />
        <MobileDropdown label="Services" name="services" openMenu={openMenu} setOpenMenu={setOpenMenu} links={serviceLinks} />
        <MobileLink href="/doctors">Doctors</MobileLink>
        <MobileDropdown label="Immigration & Visa Medicals" name="immigration" openMenu={openMenu} setOpenMenu={setOpenMenu} links={immigrationLinks} />
        <MobileDropdown label="Patient Resources" name="resources" openMenu={openMenu} setOpenMenu={setOpenMenu} links={resourceLinks} />
        <Link href="/locations#choose-clinic" className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#333333] px-5 text-[14px] text-white no-underline"><ArrowUpRight size={16} /> Book or Contact</Link>
      </div>
    </div>}
  </header>
}

function NavLink({ href, children }: { href: string; children: ReactNode }) { return <Link href={href} className="whitespace-nowrap text-[#333333] no-underline transition hover:text-[#2AA7A1]">{children}</Link> }
function Dropdown({ label, name, openMenu, setOpenMenu, links }: { label: string; name: MenuName; openMenu: MenuName | null; setOpenMenu: (menu: MenuName | null) => void; links: readonly (readonly [string, string])[] }) {
  const open = openMenu === name
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(name)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return <div className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleClose} onFocus={openDropdown} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) scheduleClose()
  }}>
    <button type="button" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpenMenu(open ? null : name)} className="flex items-center gap-1 whitespace-nowrap transition hover:text-[#2AA7A1]">{label}<ChevronDown size={14} className={`transition ${open ? 'rotate-180' : ''}`} /></button>
    <div className={`absolute left-1/2 top-full z-[90] w-[300px] -translate-x-1/2 pt-3 transition duration-150 ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 pointer-events-none opacity-0'}`}><div role="menu" className="rounded-xl border border-[#333333]/10 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,.12)]">{links.map(([text, href]) => <Link role="menuitem" key={href} href={href} className="block rounded-lg px-3.5 py-2.5 text-[13px] text-[#333333] no-underline hover:bg-[#F4F6F7] focus:bg-[#F4F6F7] focus:outline-none">{text}</Link>)}</div></div>
  </div>
}
function MobileLink({ href, children }: { href: string; children: ReactNode }) { return <Link href={href} className="rounded-lg px-3 py-3 text-[15px] text-[#333333] no-underline hover:bg-[#BFEAE7]">{children}</Link> }
function MobileDropdown({ label, name, openMenu, setOpenMenu, links }: { label: string; name: MenuName; openMenu: MenuName | null; setOpenMenu: (menu: MenuName | null) => void; links: readonly (readonly [string, string])[] }) {
  const open = openMenu === name
  return <><button type="button" aria-expanded={open} onClick={() => setOpenMenu(open ? null : name)} className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-[15px] hover:bg-[#BFEAE7]">{label}<ChevronDown size={17} className={`transition ${open ? 'rotate-180' : ''}`} /></button>{open && <div className="grid gap-1 rounded-xl bg-[#F4F6F7] p-3">{links.map(([text, href]) => <MobileLink key={href} href={href}>{text}</MobileLink>)}</div>}</>
}
