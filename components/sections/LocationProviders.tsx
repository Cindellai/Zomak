import Link from 'next/link'

import type { Provider } from '@/data/providers'

export function LocationProviders({ providers }: { providers: Provider[] }) {
  if (!providers.length) return null

  const orderedProviders = [...providers].sort((a, b) => {
    const aRotatesEverywhere = a.location === 'All ZOMAK Locations' ? 1 : 0
    const bRotatesEverywhere = b.location === 'All ZOMAK Locations' ? 1 : 0
    return aRotatesEverywhere - bRotatesEverywhere
  })
  const contentWidth = orderedProviders.length === 1
    ? 'max-w-[360px]'
    : orderedProviders.length === 2
      ? 'max-w-[780px]'
      : 'max-w-[1180px]'
  const gridColumns = orderedProviders.length === 1
    ? 'grid-cols-1'
    : orderedProviders.length === 2
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section id="providers" className="scroll-mt-24 bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className={`mx-auto mb-10 flex items-end justify-between gap-6 border-b border-[#333333]/10 pb-6 ${contentWidth}`}>
          <h2 className="max-w-[700px] font-serif text-[34px] font-normal leading-tight text-[#333333] sm:text-[42px]">
            Physicians at this clinic
          </h2>
        </div>

        <div className={`mx-auto grid gap-x-7 gap-y-12 ${contentWidth} ${gridColumns}`}>
          {orderedProviders.map((provider) => (
            <Link
              key={provider.slug}
              href={`/doctors/${provider.slug}`}
              className="group flex min-w-0 flex-col no-underline"
            >
              <div className="aspect-[0.82] overflow-hidden rounded-[16px] bg-[#BFEAE7]">
                {provider.image ? (
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-medium text-[#2AA7A1]" aria-label={`${provider.name} photo forthcoming`}>
                    {provider.name.split(' ').slice(1).map((part) => part[0]).join('')}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <h3 className="text-[18px] font-normal leading-tight text-[#333333] transition group-hover:text-[#2AA7A1]">
                  {provider.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-normal text-[#333333]">
                  {provider.role}
                </p>
                {provider.credentials && (
                  <p className="mt-1 text-[13px] font-normal leading-5 text-[#333333]">
                    {provider.credentials}
                  </p>
                )}
                <p className="mt-2 text-[12px] font-medium text-[#333333]">
                  {provider.status}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
