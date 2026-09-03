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
    heroImage?: string
  }
> = {
  Aesthetics: {
    description: 'Aesthetic and regenerative treatments offered through personalized consultations.',
    image: '/images/services/aesthetics-facial-treatment.jpg',
    heroImage: '/images/services/aesthetics-hero-women.jpg',
    accentImage: '/images/services/aesthetics-botox-consultation.jpg',
    overview: 'Aesthetics services are organized for patients exploring non-surgical cosmetic, regenerative, and appearance-focused care.'
  },
  'Internal Medicine': {
    description: 'Referral-based specialist care for complex and chronic adult medical conditions.',
    image: '/images/services/internal-medicine-exam.jpg',
    heroImage: '/images/services/internal-medicine-hero-v2.jpg',
    accentImage: '/images/services/internal-medicine-diabetes.jpg',
    overview: 'Internal Medicine provides specialist assessment and coordinated care for complex and chronic adult medical conditions.'
  },
  'Family Practice': {
    description: 'Primary care support for children, families, and routine health concerns.',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=85',
    heroImage: '/images/services/family-practice-hero.png',
    accentImage: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=85',
    overview: 'Family practice visits focus on practical, relationship-based care for common concerns, routine checkups, and prevention.'
  },
  'Pediatric Care': {
    description: 'Specialist care for newborns, infants, children and adolescents. A clinic referral is required.',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=85',
    heroImage: '/images/services/pediatric-care-hero.jpg',
    accentImage: '/images/services/pediatric-care-children-activity.jpg',
    overview: 'Pediatric services include newborn care, ADHD and autism assessment, development support, and management of acute and chronic illness.'
  },
  "Women's Health": {
    description: 'Women’s preventive and reproductive health support across life stages.',
    image: '/images/services/womens-health-wellness.jpg',
    heroImage: '/images/services/womens-health-group-hero.jpg',
    accentImage: '/images/services/womens-health-symbol-hero.jpg',
    overview: 'Women’s health services include menopausal support and treatment, PAP smears, and IUD consultations and referrals.'
  },
  "Men's Health": {
    description: 'Private men’s health and intimate wellness services reviewed with a provider.',
    image: '/images/services/mens-health-cycling.jpg',
    heroImage: '/images/services/mens-health-running.jpg',
    accentImage: '/images/services/mens-health-battle-ropes.jpg',
    overview: 'Men’s health services are designed for patients seeking private, provider-guided support for specialized treatment planning.'
  },
  'Zomak Home Care': {
    description: 'Home care services for seniors, families, caregivers, and client-directed support.',
    image: '/images/services/home-care-family-support.jpg',
    heroImage: '/images/services/home-care-hero-caregiver.jpg',
    accentImage: '/images/services/home-care-health-monitoring.jpg',
    overview: 'Zomak Home Care services support daily living, respite, personal care, and approved home care program coordination.'
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
  const allCategoryServices = services.filter((service) => service.category === category)
  const categoryServices = getDisplayedServices(category, allCategoryServices)
  const availableLocations = locations.filter((location) =>
    allCategoryServices.some((service) => location.services.includes(service.title))
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
            src={details.heroImage || details.image}
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
              {displayCategory}
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

      {(category === 'Internal Medicine' || category === 'Pediatric Care') && (
        <section className="bg-[#BFEAE7] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              
              <h2
                className="mt-3 max-w-[820px] text-[34px] font-normal leading-tight text-[#333333] sm:text-[44px]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Ask your clinic to send your {category.toLowerCase()} referral by fax.
              </h2>
              <p className="mt-4 max-w-[760px] text-base leading-7 text-[#333333]/75 sm:text-lg">
                Patients do not need to fax the referral themselves. Your referring clinic should send it directly to the ZOMAK specialist team.
              </p>
            </div>

            <div
              className="inline-flex min-w-[280px] flex-col rounded-2xl bg-[#333333] px-8 py-6 text-white shadow-lg"
              aria-label="Referral fax number 403-538-6747"
            >
              <span className="text-sm text-white/65">Fax</span>
              <span className="mt-1 text-[28px] font-medium tracking-tight sm:text-[32px]">
                403-538-6747
              </span>
            </div>
          </div>
        </section>
      )}

      {category === "Men's Health" && (
        <section className="bg-[#333333] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#BFEAE7]">
                Men’s Health
              </p>
              <h2 className="mt-4 max-w-[780px] font-serif text-[42px] font-normal leading-tight sm:text-[56px]">
                Testosterone Replacement
              </h2>
              <p className="mt-5 max-w-[720px] text-lg leading-8 text-white/72">
                Start with a confidential symptom questionnaire, then meet with a provider to review your health history, appropriate laboratory testing, treatment options, and ongoing monitoring.
              </p>
              <Link
                href="/services/details/testosterone-replacement"
                className="mt-8 inline-flex rounded-full bg-[#BFEAE7] px-7 py-4 text-sm font-medium text-[#333333] no-underline transition hover:bg-white"
              >
                Learn more and complete questionnaire &rarr;
              </Link>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-sm text-[#BFEAE7]">Your care pathway</p>
              <ol className="mt-6 space-y-5 text-white/85">
                {['Complete the confidential screening', 'Meet with a qualified provider', 'Review testing and treatment options', 'Continue with clinical monitoring'].map((item, index) => (
                  <li className="flex items-center gap-4" key={item}>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-sm text-[#333333]">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* ================= 3. TREATMENT CAROUSEL / OPTIONS LIST ================= */}
      <div className="bg-white">
        <LocationServicesCarousel services={categoryServices} />
      </div>

      <ServiceLocationsCarousel locations={availableLocations} />

      <ServiceContactCta
        label={serviceCtaLabel}
        href={serviceCtaHref}
        image={
          category === 'Aesthetics'
            ? '/images/home-aesthetics-cta-group.jpg'
            : category === 'Internal Medicine'
              ? '/images/services/internal-medicine-patients.jpg'
              : category === 'Family Practice'
                ? '/images/services/family-practice-cta.jpg'
                : category === "Women's Health"
                  ? '/images/services/womens-health-hero.jpg'
                  : category === "Men's Health"
                    ? '/images/services/mens-health-training-pair.jpg'
                    : category === 'Pediatric Care'
                      ? '/images/services/pediatric-care-cta-family.jpg'
                      : category === 'Zomak Home Care'
                        ? '/images/services/home-care-cta-independence.jpg'
                        : undefined
        }
        imageAlt={
          category === 'Aesthetics'
            ? 'A diverse group of women smiling together'
            : category === 'Internal Medicine'
              ? 'A diverse group of patients smiling together'
              : category === 'Family Practice'
                ? 'A family relaxing and laughing together at home'
                : category === "Women's Health"
                  ? 'A physician speaking with a patient about women’s healthcare'
                  : category === "Men's Health"
                    ? 'Two men training together outdoors'
                    : category === 'Pediatric Care'
                      ? 'Parents spending time at home with their young child'
                      : category === 'Zomak Home Care'
                        ? 'An older adult using a mobility aid at home'
                        : undefined
        }
        imagePosition={category === 'Family Practice' ? 'center 28%' : undefined}
      />

    </section>
  )
}

function getDisplayedServices(category: string, categoryServices: typeof services) {
  if (category === 'Pediatric Care') {
    return categoryServices.filter((service) => service.slug !== 'pediatric-care')
  }

  if (category === "Men's Health") {
    return categoryServices.map((service) => ({
      ...service,
      image: getMensHealthServiceImage(service.title)
    }))
  }

  const expandableServiceTitles: Record<string, string> = {
    'Internal Medicine': 'Internal Medicine Specialist Care',
    'Family Practice': 'Family Practice & Walk-in Care',
    "Women's Health": "Women's Health Care"
  }
  const expandableService = categoryServices.find(
    (service) => service.title === expandableServiceTitles[category]
  )

  if (!expandableService) return categoryServices

  const specificServices = category === "Women's Health"
    ? ['General Women’s Health', ...expandableService.bestFor]
    : expandableService.bestFor

  return specificServices.map((title) => ({
    ...expandableService,
    title,
    slug: `${expandableService.slug}?focus=${encodeURIComponent(title)}`,
    summary: getSpecificServiceSummary(title),
    image:
      category === 'Internal Medicine'
        ? getInternalMedicineServiceImage(title)
        : category === 'Family Practice'
          ? getFamilyPracticeServiceImage(title)
          : category === "Women's Health"
            ? getWomensHealthServiceImage(title)
            : expandableService.image
  }))
}

function getMensHealthServiceImage(title: string) {
  const serviceImages: Record<string, string> = {
    'P-Shot (Priapus Shot)': '/images/services/mens-health-p-shot-prp.jpg',
    Bocox: '/images/services/mens-health-bocox-treatment.jpg',
    'Shockwave for Erectile Dysfunction':
      '/images/services/mens-health-shockwave-graphic.jpg',
    Trimix: '/images/services/mens-health-trimix-graphic.jpg',
    'Testosterone Replacement': '/images/services/mens-health-running.jpg'
  }

  return serviceImages[title] || '/images/services/mens-health-running.jpg'
}

function getWomensHealthServiceImage(title: string) {
  const serviceImages: Record<string, string> = {
    'General Women’s Health': '/images/services/womens-health-hero.jpg',
    'Menopausal support & treatment':
      '/images/services/womens-health-menopause.jpg',
    'PAP smears': '/images/services/womens-health-pap-smear.jpg',
    'IUD consultations and referrals': '/images/services/womens-health-iud.jpg'
  }

  return serviceImages[title] || '/images/services/womens-health-hero.jpg'
}

function getFamilyPracticeServiceImage(title: string) {
  const serviceImages: Record<string, string> = {
    'Preventive health & screening':
      '/images/services/internal-medicine-blood-pressure.jpg',
    'Diagnosis and treatment of common illnesses':
      '/images/services/internal-medicine-exam.jpg',
    'Management of chronic conditions':
      '/images/services/internal-medicine-diabetes.jpg',
    'Children’s routine health visits':
      '/images/services/pediatric-care-hero.jpg',
    'Mental health assessment, treatment and support':
      '/images/services/internal-medicine-consultation.jpg',
    'Minor skin procedures':
      '/images/services/internal-medicine-genital-dermatology.jpg',
    'Medication review and management':
      'https://images.unsplash.com/photo-1624711076872-ecdbc5ade023?auto=format&fit=crop&w=1200&q=85',
    'Driver’s Medicals':
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85'
  }

  return serviceImages[title] || '/images/services/family-practice-hero.png'
}

function getInternalMedicineServiceImage(title: string) {
  const serviceImages: Record<string, string> = {
    'Comprehensive care of chronic medical conditions':
      '/images/services/internal-medicine-chronic.jpg',
    'Cardiovascular risk assessment and risk reduction / stroke prevention clinics':
      '/images/services/internal-medicine-cardiovascular.jpg',
    'Chronic kidney disease, proteinuria or hematuria':
      '/images/services/internal-medicine-kidney.jpg',
    'Cognitive impairment or suspected dementia':
      '/images/services/internal-medicine-cognitive.jpg',
    'Bone health and osteoporosis': '/images/services/internal-medicine-bone.jpg',
    'Coordinating care for multiple comorbidities':
      '/images/services/internal-medicine-comorbidities.jpg',
    'Hypermobility assessment': '/images/services/internal-medicine-exam.jpg',
    'Medically unexplained symptoms':
      '/images/services/internal-medicine-consultation.jpg',
    'Unexplained myalgias and arthralgias, fibromyalgia':
      '/images/services/internal-medicine-myalgia-fibromyalgia.jpg',
    'Abnormal liver enzymes':
      '/images/services/internal-medicine-liver-enzymes.jpg',
    'Genital dermatology':
      '/images/services/internal-medicine-genital-dermatology.jpg',
    'Hepatitis B or Hepatitis C management':
      '/images/services/internal-medicine-hepatitis.jpg'
  }

  return serviceImages[title] || '/images/services/internal-medicine-consultation.jpg'
}

function getSpecificServiceSummary(title: string) {
  const summaries: Record<string, string> = {
    'Preventive health & screening': 'Age-appropriate screening, risk review and preventive health guidance.',
    'Diagnosis and treatment of common illnesses': 'Assessment and treatment for everyday illnesses and health concerns.',
    'Management of chronic conditions': 'Ongoing care for conditions such as diabetes, hypertension, asthma, and high cholesterol.',
    'Children’s routine health visits': 'Routine primary-care visits supporting children’s health and development.',
    'Mental health assessment, treatment and support': 'Private assessment and ongoing support for mental health concerns.',
    'Minor skin procedures': 'Office-based assessment and treatment for appropriate minor skin concerns.',
    'Medication review and management': 'Review medications for effectiveness, safety and ongoing care needs.',
    'Driver’s Medicals': 'Medical assessment and documentation for driving requirements.',
    'General Women’s Health': 'Preventive, reproductive and everyday healthcare for women across all life stages.',
    'Menopausal support & treatment': 'Personalized support for symptoms and health changes during menopause.',
    'PAP smears': 'Routine cervical screening delivered in a respectful clinical setting.',
    'IUD consultations and referrals': 'Contraceptive counselling and referral planning for IUD care.'
  }

  return summaries[title] || `Specialist assessment and care for ${title.toLowerCase()}.`
}
