export function LocationCareCta({
  clinicName,
  directionsHref,
  phone,
  walkInStatus,
  image = '/images/locations/centre-street-hero.jpg',
  imageAlt = 'Exterior of Zomak Medical Clinic on Centre Street North in Calgary'
}: {
  clinicName: string
  directionsHref: string
  phone: string
  walkInStatus: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="border-y border-[#333333]/10 bg-white">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-16">
            <div className="h-[92px] w-[92px] overflow-hidden bg-white">
              <img
                src="/images/zomak-logo.jpg"
                alt="ZOMAK Medical Clinic logo"
                className="h-full w-full scale-[1.04] object-contain"
              />
            </div>

            <h2
              className="mt-8 max-w-[520px] font-serif text-[40px] font-normal leading-[1.05] text-[#333333] sm:text-[50px] lg:text-[56px]"
            >
              Walk-ins are available
            </h2>

            <p className="mt-6 max-w-[500px] text-[16px] leading-7 text-[#333333]/72">
              Visit {clinicName} for walk-in care.{' '}
              <strong className="font-medium text-[#333333]">{walkInStatus}.</strong>{' '}
              Availability changes with provider schedules and patient volume, so call ahead before visiting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phone.replaceAll(' ', '')}`}
                aria-label={`Call ${clinicName} at ${phone}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#333333] px-7 py-3 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]"
              >
                Call now
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#333333]/25 px-7 py-3 text-sm font-medium text-[#333333] no-underline transition hover:border-[#2AA7A1] hover:text-[#247F7A]"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:py-10 lg:pl-0 lg:pr-10">
            <div className="h-full min-h-[360px] overflow-hidden rounded-[24px] lg:min-h-[580px]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
