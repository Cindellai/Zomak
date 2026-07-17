import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin } from 'lucide-react'

import { providers } from '@/data/providers'

type ProviderPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return providers.map((provider) => ({ slug: provider.slug }))
}

export async function generateMetadata({ params }: ProviderPageProps) {
  const { slug } = await params
  const provider = providers.find((item) => item.slug === slug)

  if (!provider) {
    return {}
  }

  return {
    title: `${provider.name} | ZOMAK Medical`,
    description: provider.description
  }
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params
  const provider = providers.find((item) => item.slug === slug)

  if (!provider) {
    notFound()
  }

  const providerLocations = provider.secondaryLocation
    ? `${provider.location} and ${provider.secondaryLocation}`
    : provider.location

  return (
    <section className="min-h-screen bg-white px-5 pb-20 pt-24 text-[#333333] antialiased sm:px-10 sm:pb-24 sm:pt-32 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        
        {/* Back Navigation Link */}
        <div className="mb-10">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-[14px] font-normal text-black no-underline transition hover:text-[#2AA7A1]"
          >
            <ArrowLeft size={18} />
            Back to Providers
          </Link>
        </div>

        {/* Outer Split Layout */}
        <div className="grid gap-8 border-t border-neutral-100 pt-8 sm:gap-12 sm:pt-12 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)]">
          
          {/* Main Biography Stream Column */}
          <article className="lg:col-start-2 lg:row-start-1">
            
            {/* Header Identity Block */}
            <div className="mb-8 border-b border-neutral-100 pb-8">
              <span className="mb-3 block text-[15px] font-bold text-[#2AA7A1] sm:text-[16px]">
                {provider.role}
              </span>

              <h1
                className="text-[34px] font-normal leading-tight tracking-tight text-neutral-800 sm:text-[52px] lg:text-[64px]"
              >
                {provider.name}
              </h1>

              {provider.credentials && (
                <p className="mt-4 max-w-[760px] text-[14px] font-normal leading-relaxed text-neutral-400 sm:text-[15px]">
                  {provider.credentials}
                </p>
              )}
            </div>

            {/* Narrative Body Text */}
            <div className="space-y-6">
              <p className="whitespace-pre-line text-[16px] font-light leading-8 text-neutral-600 sm:text-[17px]">
                {provider.description}
              </p>
            </div>

            {/* Call To Action Block */}
            <div className="mt-12 border-t border-neutral-100 pt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-[12px] bg-[#333333] px-8 py-4 text-[15px] font-normal text-white no-underline transition hover:bg-[#2AA7A1] sm:w-auto"
              >
                Book Appointment
              </Link>
            </div>

          </article>

          {/* Left Sticky/Fixed Frame Profile Panel */}
          <aside className="lg:col-start-1 lg:row-start-1">
            <div className="aspect-[4/5] overflow-hidden rounded-[20px] bg-[#BFEAE7]">
              <img
                src={provider.image}
                alt={provider.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Minimal Flat Footer Meta tags */}
            <div className="mt-5 px-1">
              <div className="flex items-start gap-2.5 text-neutral-500">
                <MapPin size={15} className="mt-1 shrink-0 text-[#2AA7A1]" />
                <span className="text-[13px] font-normal  leading-6">
                  {providerLocations}
                </span>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </section>
  )
}
