import Link from 'next/link'
import { Sparkle } from 'lucide-react'

export function LocationCareCta({
  clinicName,
  phone,
  walkInStatus
}: {
  clinicName: string
  phone: string
  walkInStatus: string
}) {
  return (
    <section className="bg-[#BFEAE7]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.2fr]">

          {/* Left — text centered */}
          <div className="flex flex-col items-center justify-center px-10 py-20 text-center lg:px-16 lg:py-28">
            <h2
              className="text-[42px] font-normal leading-tight text-[#333333] sm:text-[58px] lg:text-[72px]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Walk-ins are available
            </h2>

            <div className="my-8">
              <Sparkle size={44} className="text-[#2AA7A1]" strokeWidth={1.2} />
            </div>

            <p className="max-w-[460px] text-[17px] leading-8 text-[#333333]/70">
              Visit {clinicName} for walk-in care. Current status:{' '}
              <strong className="font-medium text-[#333333]">{walkInStatus}</strong>.
              Availability can change with provider schedules and patient volume,
              so call ahead when timing matters.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phone.replaceAll(' ', '')}`}
                className="inline-block bg-[#333333] px-8 py-4 text-sm font-normal text-white no-underline transition hover:bg-[#2AA7A1]"
              >
                Call {phone}
              </a>
              <Link
                href="/contact"
                className="inline-block border border-[#333333]/30 px-8 py-4 text-sm font-normal text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]"
              >
                Contact the clinic
              </Link>
            </div>
          </div>

          {/* Right — image with padding so it floats */}
          <div className="p-6 lg:py-10 lg:pr-10 lg:pl-0">
            <div className="h-full min-h-[500px] overflow-hidden rounded-[20px] lg:min-h-[580px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1400&q=90"
                alt="Doctor with patient"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
