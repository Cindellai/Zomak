import Link from 'next/link'
import { CheckCircle2, FileText, MapPin, Phone } from 'lucide-react'
import { notFound } from 'next/navigation'
import { locations, services } from '@/data/site'
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
  if (slug === 'panel-physician-appointments') return <PanelPhysicianPage />
  const displayTitle = focus || service.title
  const displayDetails = focus ? getFocusedServiceDetails(focus) : service.details
  const displayHighlights = focus ? getFocusedServiceHighlights(focus) : service.bestFor

  return (
    <main className="bg-[#F4F6F7] text-[#333333]">
      <header className={`relative flex items-end overflow-hidden bg-[#333333] px-6 pb-14 pt-28 sm:px-10 lg:px-16 ${focus ? 'min-h-[50vh]' : 'min-h-[66vh]'}`}>
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1200px]">
          <p className="text-sm text-[#BFEAE7]">{service.category}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-tight text-white sm:text-7xl">{displayTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{displayDetails}</p>
        </div>
      </header>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <div>
            {displayTitle !== 'Management of chronic conditions' &&
              displayTitle !== 'Comprehensive care of chronic medical conditions' && (
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">Specific service information</p>
              )}
            <h2 className={`${displayTitle !== 'Management of chronic conditions' && displayTitle !== 'Comprehensive care of chronic medical conditions' ? 'mt-3 ' : ''}font-serif text-4xl leading-tight sm:text-5xl`}>Understanding {displayTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-[#333333]/72">{displayDetails}</p>
            <p className="mt-5 leading-7 text-[#333333]/62">Your visit begins with a conversation about your symptoms, priorities, and health history. The provider will explain appropriate options, answer questions, and help you understand the next step before any treatment or referral is arranged.</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#333333] px-7 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">Discuss this service with our team &rarr;</Link>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl sm:min-h-[500px]">
            <img src={service.image} alt={`${displayTitle} consultation`} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/30 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">How this service can help</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Care shaped around your needs</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {displayHighlights.map((item, index) => (
              <article className="rounded-2xl border border-[#333333]/[0.08] bg-white p-7 shadow-sm" key={item}>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#BFEAE7] text-sm font-medium text-[#2AA7A1]">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-medium leading-7">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-[#333333]/60">Your provider will tailor this part of care to your history, goals, and clinical needs.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#333333] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#BFEAE7]">Your appointment</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">What to expect</h2>
              <p className="mt-5 leading-7 text-white/65">We keep the process clear from your first conversation through follow-up, so you know what is happening and why.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.visitFlow.map((item, index) => (
                <article className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-6" key={item}>
                  <span className="text-sm text-[#BFEAE7]">Step {index + 1}</span>
                  <h3 className="mt-4 text-xl leading-7 text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">The clinic team will guide you through this stage and explain what comes next.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-3xl bg-[#EAF7F6] p-7 sm:p-10">
            <h2 className="font-serif text-3xl">Prepare for your visit</h2>
            <p className="mt-4 leading-7 text-[#333333]/65">Bringing the right information helps your provider understand your needs and make the appointment more useful.</p>
            <div className="mt-7 space-y-4">
              {service.whatToBring.map((item) => <div className="flex gap-3 rounded-xl bg-white p-4 leading-6" key={item}><CheckCircle2 className="mt-0.5 shrink-0 text-[#2AA7A1]" size={19} />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#BFEAE7] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">Ready for the next step?</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Talk with ZOMAK about {displayTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-[#333333]/68">Contact our team to ask about availability, preparation, referrals, or booking.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#333333] px-8 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">Contact and booking</Link>
        </div>
      </section>

      {slug === 'testosterone-replacement' && <TestosteroneQuestionnaire />}
    </main>
  )
}

function PanelPhysicianPage() {
  const service = services.find((item) => item.slug === 'panel-physician-appointments')!
  const centre = locations.find((item) => item.slug === 'centre-street-north-medical-clinic')!

  return (
    <main className="min-h-screen bg-[#F4F6F7] pt-16 text-[#333333]">
      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[370px_minmax(0,1fr)]">
        <aside className="bg-[#333333] px-6 py-10 text-white sm:px-10 lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-col lg:justify-between lg:px-10 lg:py-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#BFEAE7]">Immigration medical desk</p>
            <h1 className="mt-6 font-serif text-[clamp(38px,11vw,48px)] leading-[0.98] sm:text-[50px] lg:text-[48px]">Panel Physician<span className="mt-2 block whitespace-nowrap">Appointments</span></h1>
            <div className="mt-9 rounded-r-2xl border-l-2 border-[#BFEAE7] bg-white/[0.06] py-5 pl-5"><p className="text-sm font-medium uppercase tracking-[0.12em] text-[#BFEAE7]">Only available at</p><p className="mt-2 text-xl leading-7">Zomak Medical Clinic<br />Centre St.</p></div>
          </div>
          <div className="mt-12 space-y-3">
            <a href={`tel:${centre.phone.replaceAll(' ', '')}`} className="flex w-full items-center justify-between rounded-full bg-[#BFEAE7] px-5 py-4 text-sm font-medium text-[#333333] no-underline transition hover:bg-white"><span>{centre.phone}</span><Phone size={17} /></a>
            <Link href={`/locations/${centre.slug}`} className="flex w-full items-center justify-between rounded-full border border-white/30 px-5 py-4 text-sm text-white no-underline transition hover:bg-white/10"><span>Centre St. clinic page</span><MapPin size={17} /></Link>
          </div>
        </aside>

        <div className="px-5 py-6 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
          <div className="mx-auto max-w-[1080px]">
            <section className="border-b border-[#333333]/15 py-10 lg:py-12">
              <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
                <div>
                  <h2 className="max-w-2xl font-serif text-4xl leading-[1.08] sm:text-5xl">What is a panel physician?</h2>
                  <p className="mt-6 text-lg leading-8 text-[#333333]/75">A panel physician is a doctor approved by Immigration, Refugees and Citizenship Canada (IRCC) to perform official Immigration Medical Exams for people applying for permanent residence and for some visitors, students, and workers.</p>
                  <p className="mt-4 leading-7 text-[#333333]/[0.62]">A regular family doctor cannot complete an immigration medical exam unless that doctor appears on IRCC’s approved panel-physician list. The panel physician completes and submits the medical information, but IRCC makes the final immigration or visa decision.</p>
                  <a href="https://www.cic.gc.ca/pp-md/pp-list.aspx" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#2AA7A1] px-6 py-3 text-sm font-medium text-white no-underline transition hover:bg-[#333333]">Open the official IRCC directory &rarr;</a>
                </div>
                <div className="overflow-hidden border-2 border-[#333333] bg-white">
                  {[['ROLE', 'The clinic records and submits your medical-exam results to IRCC.'], ['DECISION', 'The panel physician does not decide whether an application is approved.'], ['COST', 'Patients pay the clinic for the exam and any required laboratory tests, X-rays, or related services. Fees can vary.']].map(([label, text]) => <div className="border-b border-[#333333]/20 p-6 last:border-0" key={label}><span className="text-sm font-semibold tracking-[0.14em] text-[#2AA7A1]">{label}</span><p className="mt-3 text-base leading-7">{text}</p></div>)}
                </div>
              </div>
            </section>

            <section className="grid gap-6 border-b border-[#333333]/20 py-10 md:grid-cols-[1.2fr_0.8fr]">
              <div><span className="text-sm font-medium uppercase tracking-[0.1em] text-[#2AA7A1]">01 / Before booking</span><h2 className="mt-3 font-serif text-4xl">Confirm your instructions</h2><p className="mt-5 max-w-xl text-lg leading-8 text-[#333333]/68">Tell the Centre St. team which immigration medical you were instructed to complete. Requirements can vary, so the clinic will confirm the documents and identification needed for your appointment.</p></div>
              <div className="relative min-h-[260px] overflow-hidden bg-[#BFEAE7]"><img src={service.image} alt="Immigration medical preparation" className="absolute inset-0 h-full w-full object-cover grayscale" /><span className="absolute bottom-4 left-4 bg-[#F4F6F7] px-3 py-2 text-xs">CENTRE ST. / CALGARY</span></div>
            </section>

            <section className="border-b border-[#333333]/20 py-10">
              <span className="text-sm font-medium uppercase tracking-[0.1em] text-[#2AA7A1]">02 / Document check</span>
              <h2 className="mt-3 font-serif text-4xl">Bring these items</h2>
              <div className="mt-8 border-y-2 border-[#333333]">
                {service.whatToBring.map((item, index) => <div className="grid grid-cols-[54px_1fr_auto] items-center gap-4 border-b border-[#333333]/20 py-5 last:border-0" key={item}><span className="text-sm text-[#2AA7A1]">0{index + 1}</span><p className="text-lg leading-7">{item}</p><FileText className="text-[#333333]/35" size={20} /></div>)}
              </div>
            </section>

            <section className="border-b border-[#333333]/20 py-10">
              <span className="text-sm font-medium uppercase tracking-[0.1em] text-[#2AA7A1]">03 / Appointment sequence</span>
              <div className="mt-7 grid gap-px overflow-hidden border border-[#333333] bg-[#333333] md:grid-cols-3">
                {service.visitFlow.map((item, index) => <div className="bg-[#F4F6F7] p-6" key={item}><span className="font-serif text-5xl text-[#2AA7A1]">{index + 1}</span><h3 className="mt-8 text-xl leading-7">{item}</h3></div>)}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}

function getFocusedServiceDetails(title: string) {
  const details: Record<string, string> = {
    'Annual check-ups and preventative care': 'A routine health visit focused on prevention, age-appropriate screening, risk-factor review, and practical steps to support long-term wellness.',
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
