import { Bell, Database, Smartphone } from 'lucide-react'

const items = [
  {
    icon: Database,
    title: 'CMS-backed content',
    body: 'Sanity schemas separate locations, services, providers, media, reviews, and articles.'
  },
  {
    icon: Smartphone,
    title: 'App-ready architecture',
    body: 'The site starts with clean content models and API routes that can support future patient tools.'
  },
  {
    icon: Bell,
    title: 'Marketing workflows',
    body: 'Blog and service content can support SEO, social planning, and AI-assisted editorial review.'
  }
]

export function FuturePlatform() {
  return (
    <section className="bg-mint py-14">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-teal">Built beyond launch</p>
            <h2 className="mt-2 text-3xl font-normal text-ink">Ready for CMS growth and future app integration</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon

              return (
                <div className="rounded-md bg-white p-5" key={item.title}>
                  <Icon className="text-coral" size={24} />
                  <h3 className="mt-4 font-normal text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
