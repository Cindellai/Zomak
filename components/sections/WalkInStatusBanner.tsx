import Link from 'next/link'

import { getBusyness } from '@/lib/walkInStatus'

type WalkInStatusBannerProps = {
  status: string
  waitTime?: string
  busyness?: string
  updatedLabel?: string
  href: string
  actionLabel: string
  phone?: string
  topClassName?: string
}

export function WalkInStatusBanner({
  status,
  waitTime,
  busyness,
  updatedLabel,
  href,
  actionLabel,
  phone,
  topClassName = 'top-16'
}: WalkInStatusBannerProps) {
  const level = getBusyness(busyness)
  const dot = level && (
    <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
      <span className={`absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:animate-none ${level.dotClassName}`} />
      <span className={`relative inline-flex size-2.5 rounded-full ring-1 ring-white/70 ${level.dotClassName}`} />
    </span>
  )

  return (
    <aside className={`sticky ${topClassName} z-40 bg-[#2AA7A1] px-3 py-2 text-[13px] font-medium text-white shadow-md sm:px-5 sm:py-3 sm:text-center sm:text-sm`} aria-label="Walk-in availability">
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 sm:hidden" aria-live="polite">
        {dot}
        {level && <span className="sr-only">{level.title}.</span>}
        <span>{status}</span>
        {waitTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>Wait: {waitTime}</span>
          </>
        )}
      </div>
      <div className="mx-auto hidden max-w-[1400px] flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:flex">
        {level && (
          <>
            <span className="inline-flex items-center gap-2">{dot}{level.title}</span>
            <span aria-hidden="true">·</span>
          </>
        )}
        <span>{status}</span>
        {waitTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>Estimated wait: {waitTime}</span>
          </>
        )}
        {updatedLabel && <span className="text-white/75">({updatedLabel})</span>}
        {phone && (
          <>
            <span aria-hidden="true">·</span>
            <a href={`tel:${phone.replaceAll(' ', '')}`} className="text-white underline decoration-white/60 underline-offset-2">Call {phone}</a>
          </>
        )}
        <span aria-hidden="true">·</span>
        <Link href={href} className="text-white underline decoration-white/60 underline-offset-2">{actionLabel}</Link>
      </div>
    </aside>
  )
}
