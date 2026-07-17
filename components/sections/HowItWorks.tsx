import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    title: 'Contact Clinic',
    description:
      'Contact us via phone or email to set up a convenient appointment time that works for you.',
    cta: 'Contact Us',
    href: '/contact',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=90',
  },
  {
    number: '02',
    title: 'Visit Our Clinic',
    description:
      'Arrive at our welcoming clinic, where our friendly staff will guide you through check-in.',
    cta: 'Find Nearest Clinic',
    href: '/locations',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=90',
  },
  {
    number: '03',
    title: 'Receive Care',
    description:
      'Our healthcare professionals assess your needs and provide tailored treatment.',
    cta: 'Begin The Process',
    href: '/services/family-practice',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=90',
  },
  {
    number: '04',
    title: 'Follow-Up Support',
    description:
      'Reach out after your visit for questions, support, and next steps.',
    cta: 'Complete Follow-Up',
    href: '/contact',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=90',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-36 antialiased">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Sleek Minimal Header */}
        <div className="mx-auto max-w-[760px] text-center mb-16">
          <h2 className="text-[38px] font-normal leading-[1.2] tracking-tight text-neutral-900 sm:text-[50px] lg:text-[58px] font-serif">
            How it <span className="text-[#2AA7A1] italic font-serif font-light">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[18px] font-normal leading-relaxed text-neutral-400">
            Getting the right care is easier than ever. Just follow these simple steps.
          </p>
        </div>

        {/* Improved Cards Layout */}
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {STEPS.map((step) => (
            <Link
              key={step.title}
              href={step.href}
              className="group flex flex-col no-underline text-neutral-900"
            >
              
              {/* Image Frame with Liquid Chrome Badge */}
              <div className="relative aspect-[1.15/1] w-full shrink-0 overflow-hidden rounded-[24px] shadow-sm z-10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${step.image})` }}
                />

                {/* Liquid Metal Refractive Badge */}
                <div className="absolute left-5 top-5 z-20 flex size-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white/40">
                  <span className="bg-gradient-to-br from-neutral-900 via-neutral-400 to-neutral-700 bg-clip-text text-xs font-normal text-transparent group-hover:from-neutral-700 group-hover:via-neutral-300 group-hover:to-neutral-900">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Connected Text Panel block with your layout style */}
              <div className="relative -mt-8 flex flex-col flex-1 rounded-b-[24px] bg-[#BFEAE7]/35 border border-[#BFEAE7]/50 p-6 pt-12 transition-all duration-300 group-hover:bg-[#BFEAE7]/50">
                
                <h3 className="text-[22px] font-medium leading-snug tracking-tight text-neutral-800">
                  {step.title}
                </h3>

                <p className="mt-3 text-[14px] font-light leading-relaxed text-neutral-600 flex-1">
                  {step.description}
                </p>

                {/* Sleek CTA Border Trigger */}
                <div className="mt-6 pt-4 border-t border-neutral-900/5 inline-flex w-fit items-center gap-1.5 text-[13px] font-normal text-neutral-800">
                  <span>{step.cta}</span>
                  <ArrowUpRight
                    size={14}
                    className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
