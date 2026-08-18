import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function GriffinAesthetics() {
  return (
    <section className="bg-[#333333] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.8fr)] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#BFEAE7]">
            Now offering
          </p>
          <h2 className="mt-4 max-w-[780px] font-serif text-[42px] font-normal leading-tight sm:text-[56px] lg:text-[68px]">
            Aesthetics at Zomak Medical Clinic - Griffin Road
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-white/70">
            Explore personalized Botox, fillers, PRP treatments for hair and facials,
            Vampire Breast Lift, and Vampire Wing Lift services.
          </p>
          <Link
            href="/services/aesthetics"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#BFEAE7] px-7 py-4 text-sm font-medium text-[#333333] no-underline transition hover:bg-white"
          >
            Explore Aesthetics <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[440px]">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
            alt="Personalized aesthetics consultation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/35 to-transparent" />
        </div>
      </div>
    </section>
  )
}
