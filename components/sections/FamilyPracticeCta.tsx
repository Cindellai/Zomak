import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FamilyPracticeCta() {
  return (
    <section className="w-full bg-white antialiased">
      <div className="grid w-full bg-[#BFEAE7]/50 lg:min-h-[760px] lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Typography Block */}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-20 xl:px-32">
          
       

          <h2 className="mb-6 max-w-[700px] font-serif text-[36px] font-normal leading-tight text-[#333333] sm:mb-8 sm:text-[56px] lg:text-[64px] xl:text-[72px]">
            Everyday care for <span className="font-sans font-normal italic text-[#2AA7A1]">children</span>, families, and routine health needs
          </h2>

          {/* Increased space here under the title (mt-10) */}
          <p className="mt-6 max-w-[700px] text-[17px] font-normal leading-8 text-[#333333] sm:mt-10 sm:text-[18px]">
            Family practice visits support common concerns, preventive care, pediatric guidance, and follow-up planning with ZOMAK clinic teams.
          </p>

          <div className="mt-10">
            <Link
              href="/services/family-practice"
              className="group inline-flex items-center gap-2 rounded-full bg-[#333333] px-8 py-4 text-[15px] font-normal text-white no-underline shadow-sm transition-all duration-300 hover:bg-[#2AA7A1] hover:shadow-md"
            >
              <span>Explore family practice</span> 
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Media Panel */}
        <div className="relative min-h-[320px] bg-neutral-100 sm:min-h-[520px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=85"
            alt="Family practice care for parents and children"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
        </div>
        
      </div>
    </section>
  )
}
