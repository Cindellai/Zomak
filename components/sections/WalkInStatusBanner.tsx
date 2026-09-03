import Link from 'next/link'

type WalkInStatusBannerProps = {
  status: string
  waitTime: string
  href: string
  actionLabel: string
  phone?: string
  topClassName?: string
}

export function WalkInStatusBanner({
  status,
  waitTime,
  href,
  actionLabel,
  phone,
  topClassName = 'top-16'
}: WalkInStatusBannerProps) {
  return (
    <aside className={`sticky ${topClassName} z-40 bg-[#2AA7A1] px-5 py-3 text-center text-sm font-medium text-white shadow-md`} aria-label="Walk-in live status">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>{status}</span>
        <span aria-hidden="true">·</span>
        <span>Estimated wait: {waitTime}</span>
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
