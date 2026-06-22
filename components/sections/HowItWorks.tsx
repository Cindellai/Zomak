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
    href: '/services',
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
    <section className="bg-[#FBFBF4] px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[760px] text-center">
          
<h2 className="text-[48px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#0b1f21] sm:text-[64px] lg:text-[76px]">
  How it <span className="text-[#2F7F95]">Works</span>
</h2>

          <p className="mx-auto mt-5 max-w-[480px] text-[17px] font-normal leading-7 text-[black]">
            Getting the right care is easier than ever. Just follow these simple
            steps.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => (
            <Link
              key={step.title}
              href={step.href}
              className="group flex h-full flex-col overflow-hidden rounded-[30px] text-[#0b1f21] no-underline transition hover:-translate-y-1"
            >
              <div className="relative h-[280px] shrink-0 overflow-hidden rounded-t-[30px] bg-[#EAF2F4]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${step.image})` }}
                />

                <div className="absolute left-5 top-5 z-10 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-[#2F7F95] shadow-sm">
                  {step.number}
                </div>
              </div>

              <div className="relative -mt-10 flex min-h-[300px] flex-1 flex-col rounded-[30px] bg-[#DFF0F2] p-8">
                <h3 className="min-h-[82px] text-[36px] font-normal leading-[0.95] tracking-[-0.045em] text-[#0b1f21]">
                  {step.title}
                </h3>

                <p className="mt-4 min-h-[112px] text-[16px] font-normal leading-7 text-[#0b1f21]">
                  {step.description}
                </p>

                <div className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#0b1f21]/45 pb-1 text-[16px] font-semibold text-[#0b1f21]">
                  {step.cta}
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
