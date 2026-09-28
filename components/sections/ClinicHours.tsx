import { clinicHours, walkInCapacityNotice } from '@/data/site'

export function ClinicHours() {
  return (
    <section id="clinic-hours" className="scroll-mt-24 border-y border-[#333333]/10 bg-[#F7FAFA] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#2AA7A1]">
            Clinic hours
          </p>
          <h2 className="mt-3 font-serif text-[34px] font-normal leading-tight text-[#333333] sm:text-[44px]">
            Plan your visit
          </h2>
          <p className="mt-4 max-w-[440px] text-[16px] leading-7 text-[#333333]/70">
            {walkInCapacityNotice}
          </p>
        </div>

        <dl className="divide-y divide-[#333333]/10 border-y border-[#333333]/10">
          {clinicHours.map((item) => (
            <div
              className="grid grid-cols-[1fr_auto] items-center gap-6 py-4 sm:py-5"
              key={item.days}
            >
              <dt className="text-[15px] font-medium text-[#333333] sm:text-[17px]">
                {item.days}
              </dt>
              <dd className={`text-right text-[15px] sm:text-[17px] ${item.hours === 'Closed' ? 'font-medium text-[#333333]' : 'text-[#333333]/70'}`}>
                {item.hours}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
