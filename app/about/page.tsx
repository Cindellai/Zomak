import Link from 'next/link'

export const metadata = {
  title: 'About ZOMAK Medical',
  description:
    'Learn about ZOMAK Medical, its clinic network, patient care philosophy, and coordinated healthcare platform.'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F6F7] text-black antialiased">
      <main className="min-h-screen w-full bg-[#F4F6F7] px-5 pb-16 pt-24 shadow-sm sm:px-10 sm:pb-20 sm:pt-28 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
        <header className="mb-8">
         
          <h1
            className="mt-4 text-[46px] font-normal leading-tight text-black sm:text-[62px] lg:text-[76px]"
          >
            About Us
          </h1>
        </header>

        <div className="relative mb-12 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#BFEAE7] sm:mb-14 sm:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1500&q=85"
            alt="Medical team in a clinic"
            className="h-full w-full object-cover"
          />
        </div>

        <section className="mb-14 grid gap-7 border-b border-[#2AA7A1]/18 pb-14 sm:mb-16 sm:gap-8 sm:pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[28px] font-normal leading-snug text-black sm:text-[34px] lg:text-[38px]">
              ZOMAK Medical brings multiple clinic and care locations into one
              clearer experience for Alberta patients.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-[18px] leading-8 text-black sm:text-[19px]">
              Our goal is simple: make it easier for patients to understand
              services, choose a location, contact the right clinic, and prepare
              for their visit with confidence.
            </p>
          </div>
        </section>

        <section className="mb-14 space-y-14 border-b border-[#2AA7A1]/18 pb-14 sm:mb-16 sm:space-y-20 sm:pb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-4 lg:col-span-4">
              <span className="block text-[16px] font-normal text-[#2AA7A1] underline decoration-[#2AA7A1]/30 underline-offset-4">
                What we do
              </span>
              <h3 className="text-[26px] font-normal leading-snug text-black sm:text-[30px]">
                We connect patients with clinic services, medical exams,
                testing, family care, and practical next steps.
              </h3>
            </div>

            <div className="space-y-4 lg:col-span-5 lg:pl-4">
              <span className="block text-[16px] font-normal text-[#2AA7A1] underline decoration-[#2AA7A1]/30 underline-offset-4">
                Our clinics
              </span>
              <div className="space-y-4 text-[18px] leading-8 text-black sm:text-[19px]">
                <p>
                  ZOMAK supports a growing network of clinic and care locations
                  across Calgary and Cochrane. Each location is presented in one
                  shared digital platform so patients can compare services,
                  directions, and contact details without confusion.
                </p>
                <p>
                  From visa medical exams and driver medicals to pediatric care,
                  women&apos;s health, and testing, the platform is designed to
                  make healthcare information easier to navigate.
                </p>
              </div>
            </div>

            <div className="hidden pt-6 lg:col-span-3 lg:block">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#BFEAE7]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=85"
                  alt="Bright clinic interior"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-4 lg:col-span-4">
              <span className="block text-[16px] font-normal text-[#2AA7A1] underline decoration-[#2AA7A1]/30 underline-offset-4">
                Patient access
              </span>
              <h3 className="text-[26px] font-normal leading-snug text-black sm:text-[30px]">
                Care information should be easy to find before a patient ever
                walks through the clinic door.
              </h3>
              <p className="text-[18px] leading-8 text-black sm:text-[19px]">
                ZOMAK’s digital experience is built around common patient tasks:
                booking, calling, finding directions, reviewing services, and
                understanding what to bring to an appointment.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-5 lg:col-start-5 lg:pl-4">
              <span className="block text-[16px] font-normal text-[#2AA7A1] underline decoration-[#2AA7A1]/30 underline-offset-4">
                Our team
              </span>
              <div className="space-y-4 text-[18px] leading-8 text-black sm:text-[19px]">
                <p>
                  Our providers and clinic teams support patients across routine
                  visits, specialized paperwork, family care, medical testing,
                  and follow-up needs.
                </p>
                <p>
                  The shared ZOMAK platform helps patients understand where to
                  go, what each service supports, and how to get connected to the
                  right care path.
                </p>
                <Link
                  href="/services/family-practice"
                  className="inline-flex items-center gap-1 border-b border-[#2AA7A1] pt-2 text-[16px] font-normal text-[#2AA7A1] no-underline transition-opacity hover:opacity-75"
                >
                  Explore Services ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[760px] space-y-6 py-8 text-center sm:py-10">
          <div className="text-[16px] font-normal text-[#2AA7A1]">
            Coordinated Care
          </div>
          <h2 className="text-[30px] font-normal leading-snug tracking-tight text-black sm:text-[38px]">
            We make clinic information simpler, clearer, and easier to act on.
            Contact ZOMAK to find the right care path.
          </h2>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 border-b border-[#2AA7A1] pb-0.5 text-[16px] font-normal text-[#2AA7A1] no-underline transition-opacity hover:opacity-75"
            >
              Contact Us ↗
            </Link>
          </div>
        </section>
        </div>
      </main>
    </div>
  )
}
