import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HomepageContent } from '@/lib/sanity/homepage'

export function FamilyPracticeCta({ content }: { content?: HomepageContent['familyPractice'] }) {
  return (
    <section className="w-full bg-white antialiased">
      <div className="grid w-full bg-white lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr]">
        
        {/* Left Typography Block */}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-12 sm:py-20 md:px-16 lg:px-16 xl:px-24">
          
       

          <h2 className="max-w-[620px] font-serif text-[34px] font-normal leading-[1.08] text-[#333333] sm:text-[48px] lg:text-[52px] xl:text-[60px]">
            {content?.headingBefore || 'Everyday care for '}
            <span className="font-sans font-normal italic text-[#2AA7A1]">{content?.headingAccent || 'children'}</span>
            {content?.headingAfter || ', families, and routine health needs'}
          </h2>

          <p className="mt-8 max-w-[620px] text-[17px] font-normal leading-8 text-[#333333] sm:text-[18px]">
            {content?.description || 'Family practice visits support common concerns, preventive care, pediatric guidance, and follow-up planning with ZOMAK clinic teams.'}
          </p>

          <div className="mt-10">
            <Link
              href={content?.buttonHref || '/services/family-practice'}
              className="group inline-flex items-center gap-2 rounded-full bg-[#333333] px-8 py-4 text-[15px] font-normal text-white no-underline shadow-sm transition-all duration-300 hover:bg-[#2AA7A1] hover:shadow-md"
            >
              <span>{content?.buttonLabel || 'Explore family practice'}</span> 
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Media Panel */}
        <div className="relative min-h-[320px] bg-neutral-100 sm:min-h-[520px] lg:min-h-full">
          <img
            src={content?.imageUrl || 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=85'}
            alt={content?.imageAlt || 'Family practice care for parents and children'}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
        </div>
        
      </div>
    </section>
  )
}
