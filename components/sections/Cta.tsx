import Link from 'next/link'

import { cta } from '@/lib/routes'

export function CTA() {
  const medicalImage =
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=2400&q=90'

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden px-6 py-24 text-white sm:min-h-[700px] sm:px-10 lg:min-h-[760px] lg:px-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 scale-105 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url('${medicalImage}')`
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${medicalImage}')`,
          backgroundSize: '86% auto'
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#333333]/30"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 42%, rgba(19, 72, 76, 0.08), rgba(19, 72, 76, 0.62) 58%, rgba(12, 37, 39, 0.72) 100%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(14,79,85,0.18) 58%, rgba(8,34,36,0.44))'
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[18%] bg-gradient-to-t from-[#333333] to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[790px] flex-col items-center justify-center pt-20 text-center sm:min-h-[510px] lg:min-h-[560px]">
        <h2
          className="text-[34px] font-normal leading-[1.02] tracking-normal text-white drop-shadow-[0_2px_18px_rgba(5,23,25,0.36)] sm:text-[46px] lg:text-[54px]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Care is close.
          <br />
          Your next visit is simple.
        </h2>

        <Link
          href="/contact"
          className="mt-9 inline-flex h-12 min-w-[178px] items-center justify-center rounded-full bg-[#333333] px-7 text-[15px] font-normal text-white no-underline shadow-[0_12px_30px_rgba(10,15,15,0.24)] transition hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#2AA7A1]"
        >
          Contact
        </Link>
      </div>
    </section>
  )
}
