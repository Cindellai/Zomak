import Link from 'next/link'
import { ExternalLink, FileText, Glasses, Info, Phone, Pill, ShieldCheck } from 'lucide-react'
import { notFound } from 'next/navigation'
import { locations, services } from '@/data/site'
import {
  centreStreetImmigrationPhone,
  centreStreetImmigrationPhoneHref,
  centreStreetIrccBookingUrl,
  centreStreetIrccDetailsUrl,
  offsiteTestingNotice
} from '@/data/visa-medicals'
import { TestosteroneQuestionnaire } from '@/components/forms/TestosteroneQuestionnaire'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) return {}

  if (slug === 'panel-physician-appointments') {
    return {
      ...pageMetadata({ pathname: '/ircc-panel-physician-calgary', title: 'IRCC Panel Physician Calgary | ZOMAK Medical', description: 'Review IRCC panel-physician examinations in Calgary and contact ZOMAK Centre Street, the only current ZOMAK location for Canadian immigration medical exams.' }),
      robots: { index: false, follow: true },
    }
  }

  if (slug === 'visa-medical-experts') {
    return {
      ...pageMetadata({ pathname: '/visa-medical-calgary', title: 'Visa Medical Calgary | ZOMAK Medical', description: 'Review international visa medical requirements and contact ZOMAK Centre Street in Calgary.' }),
      robots: { index: false, follow: true },
    }
  }

  return pageMetadata({ pathname: `/services/details/${service.slug}`, title: `${service.title} | ZOMAK Medical`, description: service.summary, image: service.image })
}

export default async function ServiceDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ focus?: string }>
}) {
  const { slug } = await params
  const { focus } = await searchParams
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  if (slug === 'panel-physician-appointments') return <PanelPhysicianPage />
  const displayTitle = focus || service.title
  const displayDetails = focus ? getFocusedServiceDetails(focus) : service.details
  const displayHighlights = focus ? getFocusedServiceHighlights(focus) : service.bestFor
  const displayImage = getServiceCardImage(service.category, displayTitle, service.image)
  const nextAction = getServiceNextAction(service)

  return (
    <main className="bg-[#F4F6F7] text-[#333333]">
      <header className={`relative flex items-end overflow-hidden bg-[#333333] px-6 pb-14 pt-28 sm:px-10 lg:px-16 ${focus ? 'min-h-[50vh]' : 'min-h-[66vh]'}`}>
        <img src={displayImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1200px]">
          <h1 className="max-w-4xl font-serif text-5xl leading-tight text-white sm:text-7xl">{displayTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{displayDetails}</p>
        </div>
      </header>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Understanding {displayTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-[#333333]/72">{displayDetails}</p>
            <p className="mt-5 text-lg leading-8 text-[#333333]/72">Your visit begins with a conversation about your symptoms, priorities, and health history. The provider will explain appropriate options, answer questions, and help you understand the next step before any treatment or referral is arranged.</p>
            <Link href={nextAction.href} className="mt-8 inline-flex rounded-full bg-[#333333] px-7 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">{nextAction.label} &rarr;</Link>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl sm:min-h-[500px]">
            <img src={displayImage} alt={`${displayTitle} consultation`} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/30 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-y border-[#333333]/10 bg-[#F4F6F7] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">What to know before your visit</h2>
            <p className="mt-5 text-lg leading-8 text-[#333333]/70">
              See what this service can help with, what to bring, and how the appointment usually works. Requirements can vary, and the provider will explain if additional information or follow-up is needed.
            </p>
          </div>

          <div className="mt-12 grid border-y border-[#333333]/15 lg:grid-cols-3">
            <div className="py-8 lg:pr-10">
              <h3 className="font-serif text-2xl">This service can help with</h3>
              <ul className="mt-5 space-y-4">
                {displayHighlights.map((item) => (
                  <li className="flex gap-3 text-[17px] leading-7" key={item}>
                    <span className="mt-[10px] size-2 shrink-0 rounded-full bg-[#2AA7A1]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#333333]/15 py-8 lg:border-l lg:border-t-0 lg:px-10">
              <h3 className="font-serif text-2xl">Bring to your appointment</h3>
              <ul className="mt-5 space-y-4">
                {service.whatToBring.map((item) => (
                  <li className="flex gap-3 text-[17px] leading-7" key={item}>
                    <span className="mt-[10px] size-2 shrink-0 rounded-full bg-[#2AA7A1]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#333333]/15 py-8 lg:border-l lg:border-t-0 lg:pl-10">
              <h3 className="font-serif text-2xl">How the visit works</h3>
              <ol className="mt-5 space-y-4">
                {service.visitFlow.map((item, index) => (
                  <li className="grid grid-cols-[30px_1fr] gap-3 text-[17px] leading-7" key={item}>
                    <span className="font-serif text-[#247F7A]">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFEAE7] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Talk with ZOMAK about {displayTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-[#333333]/68">Continue to the correct clinic, registration or referral step for this service.</p>
          <Link href={nextAction.href} className="mt-8 inline-flex rounded-full bg-[#333333] px-8 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">{nextAction.label}</Link>
        </div>
      </section>

      {slug === 'testosterone-replacement' && <TestosteroneQuestionnaire />}
    </main>
  )
}

function getServiceNextAction(service: (typeof services)[number]) {
  if (service.slug === 'visa-medical-experts') {
    return { label: 'Review visa requirements', href: '/visa-medical-calgary' }
  }

  if (service.category === 'Internal Medicine') {
    return { label: 'Review referral process', href: '/services/internal-medicine#referral-process' }
  }

  if (service.category === 'Pediatric Care') {
    return { label: 'Review referral process', href: '/services/pediatric-care#referral-process' }
  }

  if (service.category === 'Family Practice') {
    return { label: 'Find an accepting family doctor', href: '/doctors?filter=accepting-new-patients#provider-directory' }
  }

  if (service.category === 'Aesthetics') {
    return { label: 'View Griffin Road clinic', href: '/locations/griffin-road-medical-clinic' }
  }

  if (service.category === 'ZOMAK Home Care') {
    return { label: 'Contact the Home Care team', href: '/contact' }
  }

  return { label: 'Choose a clinic', href: '/locations#choose-clinic' }
}

function PanelPhysicianPage() {
  const centre = locations.find((item) => item.slug === 'centre-street-north-medical-clinic')!
  const whatToBring = [
    { title: 'Valid identification', description: 'Government-issued photo ID or valid passport', icon: ShieldCheck },
    { title: 'IRCC instructions', description: 'Official correspondence and IME, UMI or UCI number, if issued', icon: FileText },
    { title: 'Prescription medications', description: 'Bring all current prescription medications or a complete medication list', icon: Pill },
    { title: 'Medical reports', description: 'Relevant reports about existing or previous medical conditions', icon: FileText },
    { title: 'Vision aids', description: 'Eyeglasses or contact lenses if worn', icon: Glasses },
    { title: 'Language support', description: 'Arrange an interpreter if you cannot complete the examination in English', icon: Info }
  ]
  const visitFlow = [
    { step: '01', title: 'Confirm Requirements', description: 'Contact Centre Street to verify specific requirements for your visa type.' },
    { step: '02', title: 'Review & Exam', description: 'In-clinic identity verification and full physical examination.' },
    { step: '03', title: 'Partner Testing & Submission', description: `${offsiteTestingNotice} Complete the testing within the timeframe Centre Street provides so results can be reviewed and submitted.` }
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-16 text-[#333333]">
      <header className="grid w-full min-w-0 overflow-hidden bg-[#EAF7F6] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex min-w-0 flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-20">
          <h1 className="max-w-[700px] font-serif text-[39px] leading-[1.03] sm:text-[58px] lg:text-[66px]">IRCC Panel Physician in Calgary</h1>
          <p className="mt-6 max-w-[650px] text-[18px] leading-8 text-[#333333]/72">An IRCC-approved panel physician completes the official medical examination required for Canadian immigration applications.</p>
          <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-[#333333]/62">Appointments are available only at ZOMAK Centre Street. IRCC—not the physician—makes the final immigration decision.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={centreStreetIrccBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#333333] px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">Book at Centre Street <ExternalLink size={15} /></a>
            <a href={centreStreetImmigrationPhoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333333]/20 px-6 py-3 text-sm font-medium text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]"><Phone size={16} />Call Centre Street</a>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[650px]"><img src={centre.heroImageUrl} alt={centre.heroImageAlt} className="absolute inset-0 h-full w-full object-cover" /></div>
      </header>

      <section className="w-full px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="font-serif text-[38px] leading-[1.08] sm:text-[50px]">What a panel physician does</h2>
            <p className="mt-5 text-[17px] leading-8 text-[#333333]/70">A panel physician is approved by Immigration, Refugees and Citizenship Canada to perform official medical exams for permanent residence and for some visitors, students and workers.</p>
            <a href="https://www.cic.gc.ca/pp-md/pp-list.aspx" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#247F7A]">View the official IRCC directory <ExternalLink size={14} /></a>
          </div>
          <dl className="border-y border-[#333333]/15">
            {[['Clinic responsibility', 'The panel physician records and submits your medical information through the IRCC process.'], ['IRCC responsibility', 'IRCC reviews the submitted information and makes the final decision on your application.'], ['Testing locations', offsiteTestingNotice]].map(([term, description]) => <div className="grid gap-2 border-b border-[#333333]/15 py-6 last:border-0 sm:grid-cols-[180px_1fr]" key={term}><dt className="font-medium">{term}</dt><dd className="text-[16px] leading-7 text-[#333333]/68">{description}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="w-full bg-[#F4F6F7] px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-[760px]"><h2 className="font-serif text-[38px] leading-[1.08] sm:text-[50px]">Prepare for your appointment</h2><p className="mt-5 text-[17px] leading-8 text-[#333333]/68">Confirm your IRCC instructions with Centre Street and bring the information needed to complete your examination.</p></div>
          <div className="mt-12 grid border-y border-[#333333]/15 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="py-9 lg:pr-14">
              <h3 className="font-serif text-[28px]">Bring these items</h3>
              <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {whatToBring.map((item) => <li className="flex gap-4" key={item.title}><item.icon className="mt-1 shrink-0 text-[#2AA7A1]" size={20} /><div><p className="font-medium">{item.title}</p><p className="mt-1 text-[14px] leading-6 text-[#333333]/65">{item.description}</p></div></li>)}
              </ul>
            </div>
            <div className="border-t border-[#333333]/15 py-9 lg:border-l lg:border-t-0 lg:pl-14">
              <h3 className="font-serif text-[28px]">How the appointment works</h3>
              <ol className="mt-6 space-y-6">
                {visitFlow.map((item, index) => <li className="grid grid-cols-[34px_1fr] gap-3" key={item.step}><span className="font-serif text-[18px] text-[#247F7A]">{index + 1}.</span><div><p className="font-medium">{item.title}</p><p className="mt-1 text-[14px] leading-6 text-[#333333]/65">{item.description}</p></div></li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div><h2 className="font-serif text-[36px] leading-tight sm:text-[44px]">Fees and additional testing</h2><p className="mt-5 text-[16px] leading-8 text-[#333333]/68">Fees may include the clinic examination, partner-facility laboratory or X-ray services, repeat testing, follow-up review or late cancellation. Confirm current prices and payment methods before booking.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#247F7A]" href={centreStreetIrccDetailsUrl} target="_blank" rel="noopener noreferrer">Review current Centre Street details <ExternalLink size={14} /></a></div>
          <div><h2 className="font-serif text-[36px] leading-tight sm:text-[44px]">After the examination</h2><p className="mt-5 text-[16px] leading-8 text-[#333333]/68">Complete any required laboratory testing and chest X-ray at the designated partner facilities. Centre Street reviews the results and submits the medical information through eMedical. The clinic contacts you if repeat testing or follow-up is required.</p></div>
        </div>
      </section>

      <section className="w-full bg-[#BFEAE7] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div><h2 className="font-serif text-[38px] leading-tight sm:text-[48px]">Book your IRCC medical exam</h2><p className="mt-3 text-[16px] leading-7 text-[#333333]/68">Use the Centre Street booking portal or call the immigration medical team for assistance.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><a href={centreStreetImmigrationPhoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333333]/20 px-6 py-3 text-sm font-medium"><Phone size={16} />{centreStreetImmigrationPhone}</a><a href={centreStreetIrccBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#333333] px-6 py-3 text-sm font-medium text-white">Book at Centre Street <ExternalLink size={15} /></a></div>
        </div>
      </section>
    </main>
  )
}

function getFocusedServiceDetails(title: string) {
  const details: Record<string, string> = {
    'Preventive health & screening': 'A preventive health visit focused on age-appropriate screening, risk-factor review, and practical steps to support long-term wellness.',
    'Diagnosis and treatment of common illnesses': 'Assessment and treatment for common symptoms and illnesses, with prescriptions, testing, or follow-up arranged when clinically appropriate.',
    'Management of chronic conditions': 'Ongoing primary-care support for conditions such as diabetes, hypertension, asthma, and high cholesterol, including monitoring, medication review, lifestyle guidance, and coordinated follow-up.',
    'Comprehensive care of chronic medical conditions': 'Specialist care for complex or ongoing conditions such as diabetes, hypertension, asthma, heart failure, COPD, and dyslipidemia, with coordinated monitoring and treatment planning.',
    'Children’s routine health visits': 'Routine primary-care visits supporting children’s physical health, development, prevention, and family questions.',
    'Mental health assessment, treatment and support': 'A private visit to discuss mood, anxiety, attention, stress, sleep, or other mental-health concerns and develop an appropriate care plan.',
    'Minor skin procedures': 'Clinical assessment of an appropriate minor skin concern followed by an office-based procedure when suitable.',
    'Medication review and management': 'A structured review of current prescriptions, effectiveness, side effects, interactions, adherence, and ongoing medication needs.',
    'Driver’s Medicals': 'A medical assessment and documentation visit for personal or commercial driving requirements.',
    'General Women’s Health': 'Preventive, reproductive, and everyday healthcare for women across life stages, tailored to individual symptoms and goals.',
    'Menopausal support & treatment': 'Assessment and personalized support for menopausal symptoms, health changes, and appropriate treatment options.',
    'PAP smears': 'Routine cervical screening provided in a respectful clinical setting, with preparation and follow-up guidance.',
    'IUD consultations and referrals': 'A consultation covering contraceptive goals, suitability, benefits, risks, alternatives, and referral arrangements for IUD care.'
  }

  return details[title] || `Specialist assessment and coordinated care focused specifically on ${title.toLowerCase()}. Your provider will review your history, relevant results, and appropriate next steps.`
}

function getFocusedServiceHighlights(title: string) {
  return [
    `Focused assessment for ${title.toLowerCase()}`,
    'Individualized recommendations based on your health history',
    'Clear follow-up, testing, treatment, or referral guidance'
  ]
}

function getServiceCardImage(category: string, title: string, fallback: string) {
  const imagesByCategory: Record<string, Record<string, string>> = {
    'Internal Medicine': {
      'Comprehensive care of chronic medical conditions': '/images/services/internal-medicine-chronic.jpg',
      'Cardiovascular risk assessment and risk reduction / stroke prevention clinics': '/images/services/internal-medicine-cardiovascular.jpg',
      'Chronic kidney disease, proteinuria or hematuria': '/images/services/internal-medicine-kidney.jpg',
      'Cognitive impairment or suspected dementia': '/images/services/internal-medicine-cognitive.jpg',
      'Bone health and osteoporosis': '/images/services/internal-medicine-bone.jpg',
      'Coordinating care for multiple comorbidities': '/images/services/internal-medicine-comorbidities.jpg',
      'Hypermobility assessment': '/images/services/internal-medicine-exam.jpg',
      'Medically unexplained symptoms': '/images/services/internal-medicine-consultation.jpg',
      'Unexplained myalgias and arthralgias, fibromyalgia': '/images/services/internal-medicine-myalgia-fibromyalgia.jpg',
      'Abnormal liver enzymes': '/images/services/internal-medicine-liver-enzymes.jpg',
      'Genital dermatology': '/images/services/internal-medicine-genital-dermatology.jpg',
      'Hepatitis B or Hepatitis C management': '/images/services/internal-medicine-hepatitis.jpg'
    },
    'Family Practice': {
      'Preventive health & screening': '/images/services/internal-medicine-blood-pressure.jpg',
      'Diagnosis and treatment of common illnesses': '/images/services/internal-medicine-exam.jpg',
      'Management of chronic conditions': '/images/services/internal-medicine-diabetes.jpg',
      'Children’s routine health visits': '/images/services/pediatric-care-hero.jpg',
      'Mental health assessment, treatment and support': '/images/services/internal-medicine-consultation.jpg',
      'Minor skin procedures': '/images/services/internal-medicine-genital-dermatology.jpg',
      'Medication review and management': 'https://images.unsplash.com/photo-1624711076872-ecdbc5ade023?auto=format&fit=crop&w=1200&q=85',
      'Driver’s Medicals': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85'
    },
    "Women's Health": {
      'General Women’s Health': '/images/services/womens-health-hero.jpg',
      'Menopausal support & treatment': '/images/services/womens-health-menopause.jpg',
      'PAP smears': '/images/services/womens-health-pap-smear.jpg',
      'IUD consultations and referrals': '/images/services/womens-health-iud.jpg'
    },
    "Men's Health": {
      'P-Shot (Priapus Shot)': '/images/services/mens-health-p-shot-prp.jpg',
      Bocox: '/images/services/mens-health-bocox-treatment.jpg',
      'Shockwave for Erectile Dysfunction': '/images/services/mens-health-shockwave-graphic.jpg',
      Trimix: '/images/services/mens-health-trimix-graphic.jpg',
      'Testosterone Replacement': '/images/services/mens-health-running.jpg'
    }
  }

  return imagesByCategory[category]?.[title] || fallback
}
