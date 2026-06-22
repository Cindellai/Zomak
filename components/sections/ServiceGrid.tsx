import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ServiceGrid() {
  return (
    <section className="bg-white px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10">
        
        </div>

        <div className="grid gap-2 rounded-[28px] border border-[#0b1f21]/5 bg-white p-2 shadow-[0_20px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_1fr]">
          {/* Left side */}
          <div className="grid gap-2">
            <div className="rounded-[22px] bg-[#F7F8F8] p-8">
              <h3 className="max-w-[620px] text-[64px] font-semibold leading-[0.88] tracking-[-0.055em] text-[#050b0c] sm:text-[82px] lg:text-[96px]">
                ZOMAK
                <br />
                Services
              </h3>

              <p className="mt-8 text-[16px] font-semibold text-[#050b0c]/75">
                Care options for patients and families
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <ServiceImageCard
                href="/services/pediatric-care"
                title="Pediatric Care"
                image="https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=90"
              />

              <ServiceImageCard
                href="/services/womens-health-care"
                title="Women’s Health Care"
                image="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&q=90"
              />
            </div>

            <Link
              href="/services/drivers-medical"
              className="group flex min-h-[250px] items-end justify-between gap-8 rounded-[22px] bg-[#EAF2F4] p-8 text-[#050b0c] no-underline transition hover:bg-[#DDECEF]"
            >
              <div>
                <p className="mb-20 text-[16px] font-semibold text-[#050b0c]">
                  Medical Exam
                </p>

                <h3 className="max-w-[340px] text-[42px] font-normal leading-[0.9] tracking-[-0.045em]">
                  Driver’s
                  <br />
                  Medical
                </h3>
              </div>

              <span className="flex h-[76px] min-w-[190px] items-center justify-center rounded-full bg-white px-8 text-[20px] font-normal text-[#050b0c] transition group-hover:translate-x-1">
                View Details
              </span>
            </Link>
          </div>

          {/* Right side image panel */}
          <div className="relative min-h-[760px] overflow-hidden rounded-[22px] bg-[#0b1f21]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=90')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-[#0b1f21]/15" />
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0b1f21]/70 via-[#0b1f21]/20 to-transparent" />

            <div className="absolute inset-x-5 bottom-5 grid gap-4 sm:grid-cols-2">
              <OverlayCard
                href="/services/visa-medical-experts"
                title="Visa Medical Experts"
                variant="solid"
              />

              <OverlayCard
                href="/services/medical-piercings"
                title="Medical Piercings"
                variant="glass"
              />
            </div>
          </div>
        </div>

        {/* Bottom 2 remaining services */}
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <BottomCard
            href="/services/babys-gender-dna-test"
            title="Baby’s Gender DNA Test"
          />

          <BottomCard
            href="/services/pediatric-care"
            title="Pediatric Care"
            dark
          />
        </div>
      </div>
    </section>
  )
}

function ServiceImageCard({
  href,
  title,
  image,
}: {
  href: string
  title: string
  image: string
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[330px] overflow-hidden rounded-[22px] bg-[#EAF2F4] no-underline"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f21]/55 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <h3 className="max-w-[230px] text-[34px] font-normal leading-[0.9]  tracking-[-0.045em] text-white">
          {title}
        </h3>

        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#050b0c] transition group-hover:translate-x-1">
          <ArrowRight size={20} />
        </span>
      </div>
    </Link>
  )
}

function OverlayCard({
  href,
  title,
  variant,
}: {
  href: string
  title: string
  variant: 'solid' | 'glass'
}) {
  const isGlass = variant === 'glass'

  return (
    <Link
      href={href}
      className={`group flex min-h-[210px] flex-col justify-between rounded-[22px] p-6 no-underline transition hover:-translate-y-1 ${
        isGlass
          ? 'border border-white/35 bg-white/20 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-[22px]'
          : 'bg-white text-[#050b0c] shadow-[0_18px_45px_rgba(15,23,42,0.16)]'
      }`}
    >
      <h3 className="max-w-[280px] text-[34px] font-normal leading-[0.9]  tracking-[-0.045em]">
        {title}
      </h3>

      <div className="flex justify-end">
        <span
          className={`flex size-12 items-center justify-center rounded-full border transition group-hover:translate-x-1 ${
            isGlass
              ? 'border-white/75 text-white'
              : 'border-[#050b0c] text-[#050b0c]'
          }`}
        >
          <ArrowRight size={20} />
        </span>
      </div>
    </Link>
  )
}

function BottomCard({
  
  href,
  title,
  dark = false,
}: {
  href: string
  title: string
  dark?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group flex min-h-[220px] flex-col justify-between rounded-[28px] p-8 no-underline transition hover:-translate-y-1 ${
        dark
          ? 'bg-[#0b1f21] text-white'
          : 'bg-[#F5F8F8] text-[#0b1f21] ring-1 ring-[#0b1f21]/5'
      }`}
    >
      <div>
        

        <h3 className="mt-5 max-w-[520px] text-[42px] font-normal leading-[0.9] tracking-[-0.045em]">
          {title}
        </h3>
      </div>

      <div className="mt-8 flex items-end justify-between gap-6">
       

        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0b1f21] transition group-hover:translate-x-1">
          <ArrowRight size={22} />
        </span>
      </div>
    </Link>
  )
}
