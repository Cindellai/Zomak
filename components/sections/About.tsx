import Image from 'next/image'
import Link from 'next/link'

const STATS = [
  { value: '5K+', label: 'Patients Served' },
  { value: '2', label: 'Clinic Locations' },
  { value: '10+', label: 'Healthcare Providers' },
  { value: '98%', label: 'Patient Satisfaction' },
]

export function About() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative mx-auto text-center">
          <p className="relative z-20 mb-8 text-[15px] font-medium tracking-[-0.01em] text-[#0b1f21]">
            About Us
          </p>

          {/* Left floating image */}
          <div className="absolute left-0 top-[155px] z-10 hidden 2xl:block">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=90"
              alt="Doctor consulting with patient"
              width={230}
              height={150}
              className="h-[125px] w-[225px] rotate-[-6deg] rounded-[16px] object-cover shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            />
          </div>

          {/* Right floating image */}
          <div className="absolute right-0 top-[170px] z-10 hidden 2xl:block">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=90"
              alt="Medical instruments and tools"
              width={230}
              height={150}
              className="h-[125px] w-[225px] rotate-[3deg] rounded-[16px] object-cover shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            />
          </div>

          {/* Main statement */}
          <div className="relative z-20 mx-auto max-w-[1020px]">
            <h2 className="text-[32px] font-normal leading-[1.16] tracking-[-0.045em] text-[#0b1f21] sm:text-[40px] lg:text-[48px]">
              We are dedicated to providing high-quality medical care tailored to
              your needs. Our team focuses on family health and walk-in care,{' '}
              <span className="text-[#0b1f21]/35">
                ensuring every patient feels heard, supported, and confident in
                their care.
              </span>
            </h2>
          </div>

          <div className="relative z-20 mt-12">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-[#2F7F95] px-9 py-4 text-[15px] font-normal text-white no-underline transition hover:bg-[#246B80]"
            >
              More About Us
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-28 grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-[52px] font-medium leading-none tracking-[-0.055em] text-[#0b1f21] sm:text-[64px] lg:text-[74px]">
                {value}
              </p>
              <p className="mt-5 text-[17px] font-medium tracking-[-0.02em] text-[#0b1f21]/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}