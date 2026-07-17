import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

import { LocationServicesCarousel } from '@/components/sections/LocationServicesCarousel'
import { ServiceContactCta } from '@/components/sections/ServiceContactCta'
import { ServiceLocationsCarousel } from '@/components/sections/ServiceLocationsCarousel'
import {
  getServiceCategoryBySlug,
  getServiceCategorySlug,
  locations,
  serviceCategoryOrder,
  services
} from '@/data/site'

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

const categoryDetails: Record<
  string,
  {
    description: string
    image: string
    overview: string
    accentImage?: string
  }
> = {
  Aesthetics: {
    description: 'Aesthetic and regenerative treatments offered through personalized consultations.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1800&q=85',
    accentImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    overview: 'Aesthetics services are organized for patients exploring non-surgical cosmetic, regenerative, and appearance-focused care.'
  },
  'Internal Medicine': {
    description: 'Medical exams, documentation visits, and clinical assessments for everyday health needs.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=90',
    accentImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85',
    overview: 'Internal medicine services support patients who need clinical review, medical forms, testing direction, or documentation.'
  },
  'Family Practice': {
    description: 'Primary care support for children, families, and routine health concerns.',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=85',
    accentImage: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=85',
    overview: 'Family practice visits focus on practical, relationship-based care for common concerns, routine checkups, and prevention.'
  },
  "Women's Health": {
    description: 'Women’s health, pregnancy-related testing, and intimate wellness support.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1800&q=85',
    accentImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=85',
    overview: 'Women’s health services bring together preventive care, reproductive health, pregnancy-related testing, and wellness options.'
  },
  "Men's Health": {
    description: 'Private men’s health and intimate wellness services reviewed with a provider.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1800&q=85',
    accentImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=85',
    overview: 'Men’s health services are designed for patients seeking private, provider-guided support for specialized treatment planning.'
  },
  '360 Home Care': {
    description: 'Home care services for seniors, families, caregivers, and client-directed support.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1800&q=85',
    accentImage: 'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=900&q=85',
    overview: '360 Home Care services support daily living, respite, personal care, and approved home care program coordination.'
  }
}

export function generateStaticParams() {
  return serviceCategoryOrder.map((category) => ({
    slug: getServiceCategorySlug(category)
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const category = getServiceCategoryBySlug(slug)
  if (!category) return {}

  const details = categoryDetails[category]
  const cleanedCategory = category.replace(/-too/gi, '').replace(/-/g, ' ')

  return {
    title: `${cleanedCategory} | ZOMAK`,
    description: details.description
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const category = getServiceCategoryBySlug(slug)

  if (!category) {
    const legacyService = services.find((service) => service.slug === slug)
    if (legacyService) {
      redirect(`/services/${getServiceCategorySlug(legacyService.category)}`)
    }
    notFound()
  }

  const details = categoryDetails[category]
  const categoryServices = services.filter((service) => service.category === category)
  const availableLocations = locations.filter((location) =>
    categoryServices.some((service) => location.services.includes(service.title))
  )
  const usesContactCta =
    category === 'Internal Medicine' ||
    categoryServices.some((service) => service.title === 'Pediatric Care')
  const serviceCtaLabel = usesContactCta ? 'Contact Us' : 'Book Now'
  const serviceCtaHref = '/contact'

  const displayCategory = category.replace(/-too/gi, '').replace(/-/g, ' ');

  return (
    <section className="bg-cloud text-ink antialiased selection:bg-mint">
      
      {/* ================= BOUTIQUE OVERLAY HERO (Matching Discovery Doctor Style) ================= */}
      <header className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-ink">
        {/* Full Cinematic Soft Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={details.image}
            alt={displayCategory}
            className="h-full w-full object-cover object-center brightness-[0.74] contrast-[0.98]"
          />
          <div className="absolute inset-0 bg-ink/38" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/58 to-transparent" />
        </div>

        {/* Content Overlay pinned to bottom left */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pb-20 pt-40">
          <div className="max-w-[800px] space-y-6">
           
            
            <h1 
              className="text-[38px] font-normal leading-tight text-white sm:text-[56px] lg:text-[68px]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Our {displayCategory.toLowerCase()} framework is a profound journey into wellness
            </h1>
            
            <p className="max-w-[620px] pt-2 text-sm font-medium leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-base">
              ZOMAK serves as your personal health advocate. {details.description}
            </p>
          </div>
          
          {/* Subtle downwards prompt */}
          <div className="absolute bottom-20 right-6 sm:right-16 hidden md:block">
            <a href="#our-approach" className="text-white/60 hover:text-white transition-colors duration-300">
              <span className="text-[10px] font-mono vertical-text block mb-3">SCROLL</span>
              <div className="w-[1px] h-12 bg-white/30 mx-auto" />
            </a>
          </div>
        </div>
      </header>

      {/* ================= 2. THE ASYMMETRICAL ABOUT SECTION ================= */}
      <section id="our-approach" className="bg-cloud px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="w-full lg:col-span-6">
              <div className="relative h-[320px] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/10 sm:h-[500px] lg:h-[700px]">
                <img
                  src={details.image}
                  alt={displayCategory}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex h-full flex-col justify-between space-y-12 lg:col-span-6 lg:pl-8">
              <div className="w-full max-w-[380px] self-end">
                <div className="relative h-[160px] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink/10 sm:h-[220px]">
                  <img
                    src={details.accentImage || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85'}
                    alt="Clinic detail view"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="max-w-[660px] space-y-6">
                <h2
                  className="text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[44px]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  <span className="block">At ZOMAK, we believe</span>
                  <span className="block">premium care is more than</span>
                  <span className="block">
                    clinical{' '}
                    <span className="italic text-teal">it&apos;s meant to be personal</span>
                  </span>
                </h2>

                <p className="text-[18px] font-normal leading-relaxed text-ink/75">
                  {details.overview} Review our services below, then contact our
                  support team to coordinate clinical timing, required physical
                  preparation, and verify if the assessments correspond to your
                  healthcare needs.
                </p>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-xs font-normal text-ink no-underline transition hover:border-teal hover:text-teal"
                  >
                    About Us &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. TREATMENT CAROUSEL / OPTIONS LIST ================= */}
      <div className="bg-white">
        <LocationServicesCarousel services={categoryServices} />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10 lg:px-16">
        <ServiceLocationsCarousel locations={availableLocations} />
      </div>

      <ServiceContactCta label={serviceCtaLabel} href={serviceCtaHref} />

    </section>
  )
}
