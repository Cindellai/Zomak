import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { services } from '@/data/site'
import { TestosteroneQuestionnaire } from '@/components/forms/TestosteroneQuestionnaire'

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
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
  const displayTitle = focus || service.title
  const displayDetails = focus ? getFocusedServiceDetails(focus) : service.details
  const displayHighlights = focus ? getFocusedServiceHighlights(focus) : service.bestFor

  return (
    <main className="bg-[#F4F6F7] text-[#333333]">
      <header className="relative flex min-h-[66vh] items-end overflow-hidden bg-[#333333] px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1200px]">
          <p className="text-sm text-[#BFEAE7]">{service.category}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-tight text-white sm:text-7xl">{displayTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{displayDetails}</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <h2 className="font-serif text-4xl">Services and support</h2>
          <ul className="mt-8 space-y-4">
            {displayHighlights.map((item) => <li className="flex gap-3 leading-7" key={item}><CheckCircle2 className="mt-1 shrink-0 text-[#2AA7A1]" size={19} />{item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="font-serif text-3xl">What to expect</h2>
          <ol className="mt-6 space-y-4">{service.visitFlow.map((item, index) => <li key={item}><span className="mr-3 text-[#2AA7A1]">0{index + 1}</span>{item}</li>)}</ol>
          <h3 className="mt-10 text-lg">What to bring</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[#333333]/75">{service.whatToBring.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-[#333333] px-6 py-3 text-white no-underline hover:bg-[#2AA7A1]">Contact us</Link>
        </div>
      </section>

      {slug === 'testosterone-replacement' && <TestosteroneQuestionnaire />}
    </main>
  )
}

function getFocusedServiceDetails(title: string) {
  const details: Record<string, string> = {
    'Annual check-ups and preventative care': 'A routine health visit focused on prevention, age-appropriate screening, risk-factor review, and practical steps to support long-term wellness.',
    'Diagnosis and treatment of common illnesses': 'Assessment and treatment for common symptoms and illnesses, with prescriptions, testing, or follow-up arranged when clinically appropriate.',
    'Management of chronic conditions (i.e. diabetes, hypertension, asthma, high cholesterol, etc.)': 'Ongoing primary-care support for chronic conditions, including monitoring, medication review, lifestyle guidance, and coordinated follow-up.',
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
