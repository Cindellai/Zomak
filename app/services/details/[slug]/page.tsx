import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { services } from '@/data/site'

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()

  return (
    <main className="bg-[#F4F6F7] text-[#333333]">
      <header className="relative flex min-h-[66vh] items-end overflow-hidden bg-[#333333] px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/45 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1200px]">
          <p className="text-sm text-[#BFEAE7]">{service.category}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-tight text-white sm:text-7xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{service.details}</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div>
          <h2 className="font-serif text-4xl">Services and support</h2>
          <ul className="mt-8 space-y-4">
            {service.bestFor.map((item) => <li className="flex gap-3 leading-7" key={item}><CheckCircle2 className="mt-1 shrink-0 text-[#2AA7A1]" size={19} />{item}</li>)}
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

function TestosteroneQuestionnaire() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <form className="mx-auto max-w-3xl" action="/contact">
        <p className="text-sm text-[#2AA7A1]">Confidential pre-visit screening</p>
        <h2 className="mt-2 font-serif text-4xl">Testosterone assessment questionnaire</h2>
        <p className="mt-4 leading-7 text-[#333333]/70">This screening does not diagnose low testosterone or guarantee treatment. Your provider will review symptoms, medical history and laboratory testing.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2">Full name<input required name="name" className="rounded-lg border p-3" /></label>
          <label className="grid gap-2">Phone number<input required name="phone" type="tel" className="rounded-lg border p-3" /></label>
          <label className="grid gap-2 sm:col-span-2">Which symptoms are you experiencing?<textarea required name="symptoms" rows={4} className="rounded-lg border p-3" placeholder="For example: low energy, mood changes, reduced strength or sexual-health concerns" /></label>
          <label className="grid gap-2">How long have symptoms been present?<input name="duration" className="rounded-lg border p-3" /></label>
          <label className="grid gap-2">Have you had recent testosterone bloodwork?<select name="bloodwork" className="rounded-lg border bg-white p-3"><option>No</option><option>Yes</option><option>Not sure</option></select></label>
          <label className="grid gap-2 sm:col-span-2">Relevant conditions, medications or prior treatment<textarea name="history" rows={3} className="rounded-lg border p-3" /></label>
        </div>
        <button className="mt-8 rounded-xl bg-[#333333] px-7 py-3.5 text-white hover:bg-[#2AA7A1]">Continue to contact and registration</button>
      </form>
    </section>
  )
}
