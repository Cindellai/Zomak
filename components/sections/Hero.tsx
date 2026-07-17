import Image from 'next/image'
import Link from 'next/link'

const AVATARS = [
  { initials: 'ZN', bg: 'bg-[#2AA7A1]' },
  { initials: 'FM', bg: 'bg-[#2AA7A1]' },
  { initials: 'HC', bg: 'bg-[#2AA7A1]' },
]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden rounded-b-[2rem] bg-[#333333] ">
      <Image
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2200&q=90"
        alt="Modern clinic care environment for coordinated patient services"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#333333]/35 backdrop-blur-[1px]" />
      <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#333333]/90 via-[#333333]/45 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1360px] items-end px-5 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:px-16">
        <div className="grid w-full items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
          

            <h1 className="text-[42px] font-normal leading-tight text-white sm:text-[66px] lg:text-[82px]">
              ZOMAK Medical,
              <br />
              <span className="font-serif italic text-[#BFEAE7] lowercase first-letter:uppercase">
                Care made simple
              </span>
            </h1>
          </div>

          <div className="space-y-8 lg:col-span-5 lg:pb-3">
            <p className="max-w-[460px] text-[17px] font-medium leading-7 text-white/85">
              One trusted digital home for ZOMAK clinics, intuitive booking, 
              directions, service pages, and future patient care workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#2AA7A1] px-7 text-sm font-normal text-white no-underline  transition-all duration-200 hover:scale-[1.01]"
              >
                Book appointment
              </Link>

              <Link
                href="/services/family-practice"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-normal text-[#333333] no-underline shadow-md transition-all duration-200 hover:bg-[#F4F6F7] hover:scale-[1.01]"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
