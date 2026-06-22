import Link from 'next/link'
import type { ReactNode } from 'react'

import { locations, services } from '@/data/site'
import { cta } from '@/lib/routes'

const resourceLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Patient FAQ', href: '/#faq' }
]

const followLinks = [
  { label: 'Phone', href: `tel:${cta.phone}` },
  { label: 'Directions', href: cta.directionsHref },
  { label: 'Contact', href: '/contact' }
]

export function Footer() {
  return (
    <footer className="bg-[#103134] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="max-w-[620px] text-[19px] font-normal leading-tight text-white sm:text-[22px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Coordinated healthcare across ZOMAK Medical clinics.
          </p>

          <Link
            href="/contact"
            className="inline-flex h-11 w-fit items-center justify-center rounded-md bg-white px-6 text-[13px] font-semibold text-pine no-underline transition hover:bg-white/90"
          >
            Contact
          </Link>
        </div>

        <div className="mt-12 h-px bg-white/20" />

        <div className="grid gap-12 pt-11 md:grid-cols-[1.35fr_3.2fr] lg:gap-20">
          <div className="flex flex-col justify-between gap-16">
            <Link href="/" className="w-fit text-white no-underline">
              <span className="block text-[38px] font-normal leading-none tracking-[0.02em] text-white">
                Zomak Medical
              </span>
              
            </Link>

            <p className="max-w-[230px] text-[12px] leading-[1.45] text-white">
              Copyright © 2026 ZOMAK Medical.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-9 gap-y-11 sm:grid-cols-3 lg:grid-cols-5">
            <FooterColumn title="Clinics">
              {locations.map((location) => (
                <FooterLink
                  href={`/locations/${location.slug}`}
                  key={location.slug}
                >
                  {location.name.replace('ZOMAK ', '').replace(' Medical Clinic', '')}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Services">
              {services.slice(0, 5).map((service) => (
                <FooterLink href={`/services/${service.slug}`} key={service.slug}>
                  {service.title}
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
              <FooterLink href={`tel:${cta.phone}`}>{cta.phone}</FooterLink>
              <FooterLink href={cta.directionsHref}>Directions</FooterLink>
              <FooterLink href="/contact">Contact Support</FooterLink>
              <FooterLink href="/contact">Clinic Hours</FooterLink>
            </FooterColumn>

            <FooterColumn title="Follow">
              {followLinks.map((link) => (
                <FooterLink href={link.href} key={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
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
      <p className="text-[12px] font-medium text-white">{title}</p>
      <div className="mt-4 grid gap-4 text-[13px] leading-none text-white">
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
      className="w-fit text-white no-underline transition hover:opacity-75"
    >
      {children}
    </Link>
  )
}
