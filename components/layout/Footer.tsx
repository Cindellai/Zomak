import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  getServiceCategorySlug,
  locations,
  serviceCategoryOrder
} from '@/data/site'

const resourceLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Visa Medicals', href: '/visa-medical-calgary' },
  { label: 'IRCC Panel Physicians', href: '/ircc-panel-physician-calgary' },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1400px] overflow-hidden px-5 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <p
            className="max-w-[620px] text-[22px] font-normal leading-tight text-white sm:text-[30px] md:text-[22px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Coordinated healthcare across ZOMAK Medical clinics.
          </p>

          <Link
            href="/locations#choose-clinic"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-white px-6 text-[13px] font-normal text-[#333333] no-underline transition hover:bg-[#BFEAE7] sm:w-fit"
          >
            Choose a Clinic
          </Link>
        </div>

        <div className="mt-12 h-px bg-white/20" />

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.05fr_3fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-8 lg:gap-16">
            <Link href="/" className="w-fit text-white no-underline">
              <span className="block text-[34px] font-normal leading-none text-white sm:text-[38px]">
                Zomak Medical
              </span>
              
            </Link>

            <p className="max-w-[260px] text-[12px] leading-[1.55] text-white/80">
              Copyright © 2026 ZOMAK Medical.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-8 md:grid-cols-4">
            <FooterColumn title="Clinics">
              {locations.map((location) => (
                <FooterLink
                  href={`/locations/${location.slug}`}
                  key={location.slug}
                >
                  {location.name}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Services">
              {serviceCategoryOrder.map((category) => (
                <FooterLink
                  href={`/services/${getServiceCategorySlug(category)}`}
                  key={category}
                >
                  {category}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Company">
              {resourceLinks.map((link) => (
                <FooterLink href={link.href} key={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact">
              <FooterLink href="/locations#choose-clinic">Choose a Clinic</FooterLink>
              <FooterLink href="/contact">Contact Support</FooterLink>
              <FooterLink href="/locations">Clinic Hours</FooterLink>
            </FooterColumn>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-7 text-[12px] leading-6 text-white/70">
          <p>ZOMAK does not provide emergency care through this website. If you have a medical emergency, call 911 or go to the nearest emergency department.</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/accessibility">Accessibility</FooterLink>
            <FooterLink href="/terms">Website Terms</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  children,
  title
}: {
  children: ReactNode
  title: string
}) {
  return (
    <div>
      <p className="text-xs font-normal text-[#BFEAE7]">
        {title}
      </p>
      <div className="mt-4 grid gap-3 text-[14px] leading-snug text-white sm:text-[13px]">
        {children}
      </div>
    </div>
  )
}

function FooterLink({
  children,
  href
}: {
  children: ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="w-fit max-w-full break-words text-white/82 no-underline transition hover:text-white"
    >
      {children}
    </Link>
  )
}
