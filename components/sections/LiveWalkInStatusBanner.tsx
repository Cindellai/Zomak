'use client'

import { useEffect, useState } from 'react'

import { WalkInStatusBanner } from '@/components/sections/WalkInStatusBanner'
import { WALK_IN_POLL_MS, formatUpdatedAgo, type LiveWalkInStatus } from '@/lib/walkInStatus'

type LiveWalkInStatusBannerProps = {
  slug: string
  initial: LiveWalkInStatus
  href: string
  actionLabel: string
  phone?: string
  topClassName?: string
}

/** Clinic-page banner that keeps itself in sync with the status staff publish in Studio. */
export function LiveWalkInStatusBanner({ slug, initial, ...bannerProps }: LiveWalkInStatusBannerProps) {
  const [status, setStatus] = useState(initial)
  // Set after mount so the relative "Updated X min ago" label never causes a hydration mismatch.
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    let controller: AbortController | null = null

    async function refresh() {
      if (document.visibilityState !== 'visible') return
      controller?.abort()
      controller = new AbortController()
      try {
        const response = await fetch(`/api/walk-in-status/${encodeURIComponent(slug)}`, {
          cache: 'no-store',
          signal: controller.signal
        })
        if (response.ok && !cancelled) setStatus(await response.json())
      } catch {
        // Keep showing the last known status if a poll fails.
      }
      if (!cancelled) setNow(Date.now())
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') refresh()
    }

    setNow(Date.now())
    refresh()
    const interval = window.setInterval(refresh, WALK_IN_POLL_MS)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      cancelled = true
      controller?.abort()
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [slug])

  return (
    <WalkInStatusBanner
      {...bannerProps}
      status={status.status}
      waitTime={status.waitTime}
      busyness={status.live ? status.busyness : undefined}
      updatedLabel={status.live && now ? formatUpdatedAgo(status.updatedAt, now) : ''}
    />
  )
}
