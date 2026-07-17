import Link from 'next/link'
import { Sparkle } from 'lucide-react'

export function LocationCareCta() {
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
              Your health deserves a complete story
            </h2>

            <div className="my-8">
              <Sparkle size={44} className="text-[#2AA7A1]" strokeWidth={1.2} />
            </div>

            <p className="max-w-[380px] text-[15px] leading-8 text-[#333333]/55">
              At ZOMAK Medical Clinic, we believe every patient deserves
              personalized, attentive care. From routine check-ups to
              specialized services, our team is here to support your health
              at every stage of life.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-block bg-[#333333] px-8 py-4 text-sm font-normal text-white no-underline transition hover:bg-[#2AA7A1]"
            >
              Contact
            </Link>
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
