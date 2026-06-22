export const metadata = {
  title: 'Doctors | ZOMAK Medical',
  description: 'Provider profiles and credentials for ZOMAK Medical.'
}

const providers = [
  {
    name: 'Dr. Chris Bruce, MD',
    role: 'Chief of Cardiology',
    location: 'Griffin Road Medical Clinic',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
  {
    name: 'Dr. Sean Carey, DO',
    role: 'Lead Pediatrician',
    location: 'Centre Street North Medical Clinic',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
  {
    name: 'Dr. Aileen Gomes, MD',
    role: 'Family Medicine',
    location: 'ZOMAK Northmount',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
  {
    name: 'Our Care Mission',
    role: 'Dedicated to 24/7 patient support and medical excellence.',
    quote: '"The art of healing comes from the heart, driven by absolute dedication."',
    highlight: true,
  },
  {
    name: 'Dr. Thomas Stätter',
    role: 'Neurologist',
    location: 'ZOMAK Lewisburg',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
  {
    name: 'Dr. Oleksii Suslov',
    role: 'Orthopedic Surgeon',
    location: 'ZOMAK Fairview',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
  {
    name: 'Dr. Joe Harrison',
    role: 'Dermatologist',
    location: 'Revitalize Medical Clinic',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
  {
    name: 'Dr. Jason Alex',
    role: 'General Practitioner',
    location: 'ZOMAK 360 Home Care',
    image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=900&q=85',
    highlight: false,
  },
];

export default function DoctorsPage() {
  return (
    <section className="min-h-screen bg-[#F8F9F9]">
      {/* 50vh Hero Image Header Section */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-[#0b1f21]">
        {/* Hero Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=90"
          alt="ZOMAK Medical Center"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        />
        
        {/* Gradient Overlay for modern contrast & text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f21]/98 via-[#0b1f21]/92 to-[#0b1f21]/88" />

        {/* Content Box Over Image */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3">
             
              <h1 className="font-sans text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                Provider Profiles
              </h1>
             
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout for Providers Section */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {providers.map((provider, index) => {
            if (provider.highlight) {
              return (
                <div 
                  key={index} 
                  className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-[#0b1f21] p-6 text-white shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7F95] text-xs">+</div>
                    <p className="pt-2 text-lg font-medium italic leading-snug text-white/90">
                      {provider.quote}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block rounded-full border border-white/40 bg-white/10 px-3 py-0.5 text-xs font-semibold tracking-wide">
                      {provider.name}
                    </span>
                    <p className="mt-2 text-xs text-white/80">{provider.role}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="group flex flex-col">
                <div className="flex aspect-[4/5] w-full items-end justify-center overflow-hidden rounded-2xl border border-[#D5E5E9] bg-[#E8F4F1] shadow-sm transition-transform duration-200 group-hover:-translate-y-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 space-y-2 px-1">
                  <div>
                    <span className="inline-block rounded-full border border-[#0b1f21] bg-white px-3 py-0.5 text-xs font-bold tracking-wide text-[#0b1f21]">
                      {provider.name}
                    </span>
                  </div>
                  <p className="pl-1 text-xs font-medium text-[#0b1f21]/60">
                    {provider.role}
                  </p>
                  <p className="pl-1 text-[11px] font-normal  text-[#2F7F95]">
                    {provider.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
