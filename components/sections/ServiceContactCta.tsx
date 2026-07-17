import Link from 'next/link'

type ServiceContactCtaProps = {
  label?: string
  href?: string
}

export function ServiceContactCta({
  label = 'Book Now',
  href = '/contact'
}: ServiceContactCtaProps) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] flex h-[520px] w-screen items-center justify-center overflow-hidden bg-neutral-100 sm:h-[620px] lg:h-[720px]">
      
      {/* Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=90" 
          alt="Zomak patient education and consultation environment"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft, centered overlay for natural legibility */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Perfectly Centered Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[900px] px-6 text-center text-white">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          <h2 
            className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-6xl lg:text-[76px]" 
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            We treat <br />
            the whole person
          </h2>
          
          <p className="max-w-[520px] text-[15px] sm:text-[17px] leading-relaxed text-white/90 font-light">
            Every patient path is unique. Connect with us to ask questions about this service, prepare for your visit, and verify your health needs.
          </p>

          <div className="pt-2">
            <Link 
              href={href} 
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-xs font-normal text-[#333333] transition-all duration-300 hover:bg-[#2AA7A1] hover:text-white"
            >
              {label} &nbsp;&nbsp;&rarr;
            </Link>
          </div>
          
        </div>
      </div>

    </section>
  )
}
