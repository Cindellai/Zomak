import { ArrowLeft, ArrowRight } from 'lucide-react'

const PROVIDERS = [
  {
    name: 'Medical Provider',
    role: 'Visa medical exams and driver medicals',
    cardBg: 'bg-[#E8D4CC]',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=90',
  },
  {
    name: 'Pediatric Care Provider',
    role: 'Child and family healthcare',
    cardBg: 'bg-[#B8CCBE]',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=90',
  },
  {
    name: "Women's Health Provider",
    role: 'Wellness, prenatal, and ongoing care',
    cardBg: 'bg-[#B8BEC8]',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=90',
  },
  {
    name: 'Clinical Support Team',
    role: 'Testing, procedures, and patient support',
    cardBg: 'bg-[#C8B898]',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=700&q=90',
  },
]

export function LocationProviders() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1420px]">

        {/* Header row */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[14px] font-normal uppercase text-[#0b1f21]">
              Meet our providers
            </p>
            <h2 className="max-w-[700px] text-[42px] font-normal leading-[1.0] tracking-[-0.04em] text-[#0b1f21] sm:text-[54px] lg:text-[64px]">
              Discover Our Team of{' '}
              <em
                className="font-normal italic text-cyan-700"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Medical
              </em>{' '}
              Experts
            </h2>
          </div>

         
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROVIDERS.map((provider) => (
            <article key={provider.name}>
              {/* Photo card with solid pastel bg */}
              <div className={`aspect-[0.82] overflow-hidden rounded-[16px] ${provider.cardBg}`}>
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Name + role */}
              <div className="pt-4">
                <h3 className="text-[20px] font-normal leading-none tracking-[-0.03em] text-[#0b1f21]">
                  {provider.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-normal text-[#0b1f21]/55">
                  {provider.role}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}