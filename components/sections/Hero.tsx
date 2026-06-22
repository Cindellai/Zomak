import Image from 'next/image'
import Link from 'next/link'

const AVATARS = [
  { initials: 'ZN', bg: 'bg-[#1F6175]' },
  { initials: 'FM', bg: 'bg-[#2F7F95]' },
  { initials: 'HC', bg: 'bg-[#5A9BA8]' },
]

export function Hero() {
  return (
    /* Brought back the rounded bottom but upgraded to a smoother 3xl frame */
    <section className="relative min-h-screen overflow-hidden rounded-b-[2rem] bg-[#102A32] shadow-[0_20px_50px_rgba(16,42,50,0.08)]">
      {/* Background Image Canvas */}
      <Image
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=2200&q=90"
        alt="Medical team providing exceptional clinic care"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Layered Cinematic Overlays for Text Legibility */}
      <div className="absolute inset-0 bg-[#0A1A1E]/35 backdrop-blur-[1px]" />
      <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#09191D]/90 via-[#09191D]/45 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1360px] items-end px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <div className="grid w-full items-end gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Block: Social Proof and Core Headline */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 border border-white/10">
              <div className="flex">
                {AVATARS.map(({ initials, bg }, index) => (
                  <span
                    key={initials}
                    className={`flex size-7 items-center justify-center rounded-full border border-white/40 text-[9px] font-bold text-white tracking-wider ${bg} ${
                      index !== 0 ? '-ml-2' : ''
                    }`}
                  >
                    {initials}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-white">
                <span className="text-[#BEE8F2]">500+</span>
                <span className="text-white/80 font-normal">Satisfied Patients</span>
              </div>
            </div>

            <h1 className="text-[48px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-[68px] lg:text-[84px]">
              ZOMAK Medical,
              <br />
              <span className="font-serif font-normal italic text-[#BEE8F2] tracking-normal lowercase first-letter:uppercase">
                Care made simple.
              </span>
            </h1>
          </div>

          {/* Right Block: Summary Text and Call to Actions */}
          <div className="space-y-8 lg:col-span-5 lg:pb-3">
            <p className="text-[17px] leading-[1.65] text-white/85 font-medium tracking-tight max-w-[460px]">
              One trusted digital home for ZOMAK clinics, intuitive booking, 
              directions, service pages, and future patient care workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F7F95] px-7 text-[14px] font-bold text-white no-underline shadow-lg shadow-[#2F7F95]/20 transition-all duration-200 hover:bg-[#246B80] hover:scale-[1.01]"
              >
                Book appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[14px] font-bold text-[#102A32] no-underline shadow-md transition-all duration-200 hover:bg-neutral-50 hover:scale-[1.01]"
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