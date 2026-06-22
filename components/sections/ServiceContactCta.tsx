import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ServiceContactCta() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#1F6175] px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <h2
          className="mb-6 text-[52px] font-normal leading-[1.0] tracking-[-0.04em] text-white sm:text-[66px] lg:text-[80px]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Get in Touch
        </h2>

        <div className="relative overflow-hidden rounded-[18px]">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1800&q=90"
            alt="ZOMAK Medical Clinic"
            className="h-[420px] w-full object-cover object-center lg:h-[800px]"
          />

          <div className="absolute bottom-6 left-6 max-w-[340px] rounded-[16px] bg-[#ffffff] p-7 shadow-[0_18px_50px_rgba(9,37,45,0.18)]">
            <p className="text-[15px] leading-7 text-[#102A32]/74">
              Have a question about our services, locations, or booking? Get in
              touch and our team will help you find the right care because every
              patient matters.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2F7F95] px-5 py-3 text-[14px] font-semibold text-white no-underline transition hover:bg-[#246B80]"
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
