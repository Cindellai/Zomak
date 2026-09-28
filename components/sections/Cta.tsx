import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { homeActionPrimary } from '@/components/ui/homeActionStyles'

import type { HomepageContent } from '@/lib/sanity/homepage'

export function CTA({ content }: { content?: HomepageContent['finalCta'] }) {
  const medicalImage = '/images/home-final-cta-patients.jpg'

  return (
    <section className="relative isolate min-h-[500px] overflow-hidden px-5 py-16 text-white sm:min-h-[700px] sm:px-10 sm:py-24 lg:min-h-[760px] lg:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${medicalImage}')`
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#173F42]/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 42%, rgba(19, 72, 76, 0.02), rgba(19, 72, 76, 0.24) 62%, rgba(12, 37, 39, 0.38) 100%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(8,34,36,0.16))'
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[14%] bg-gradient-to-t from-[#173F42]/30 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[370px] max-w-[790px] flex-col items-center justify-center text-center sm:min-h-[510px] sm:pt-20 lg:min-h-[560px]">
        <h2
          className="max-w-[340px] text-[32px] font-normal leading-[1.08] tracking-normal text-white drop-shadow-[0_2px_18px_rgba(5,23,25,0.36)] sm:max-w-none sm:text-[46px] lg:text-[54px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {(content?.heading || 'Care is close.\nYour next visit is simple.').split('\n').map((line, index) => <span className="block" key={`${line}-${index}`}>{line}</span>)}
        </h2>

        <Link
          href={content?.buttonHref || '/contact'}
          className={`${homeActionPrimary} mt-8 w-full max-w-[260px] sm:mt-9 sm:w-auto sm:min-w-[178px]`}
        >
          {content?.buttonLabel || 'Contact'}
          <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
