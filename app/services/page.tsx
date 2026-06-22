import Link from 'next/link'

import { services } from '@/data/site'

export const metadata = {
  title: 'Services | ZOMAK Medical',
  description: 'Explore ZOMAK Medical services across Calgary and Cochrane clinics.'
}

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-[#ededed] px-6 pb-24 pt-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[820px]">
          
          <h1
            className="mt-5 text-[54px] font-normal leading-[0.95] tracking-[-0.05em] text-[#102A32] sm:text-[72px] lg:text-[88px]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Our Services
          </h1>
          <p className="mt-7 max-w-[680px] text-[18px] leading-8 text-ink/65">
            Explore ZOMAK services by what each visit supports, what to bring,
            where it is available, and what patients can expect next.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              className="group flex min-h-[520px] flex-col rounded-xl bg-[#f7f7f7] p-4 text-ink no-underline transition hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <div className="aspect-[1.35/1] overflow-hidden rounded-lg bg-cloud">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2F7F95]">
                {service.category}
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#202020]">
                {service.title}
              </h2>
              <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-ink/62">
                {service.summary}
              </p>

              <div className="mt-auto pt-8">
                <p className="text-[13px] font-semibold text-[#2F7F95]">
                  View details
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
