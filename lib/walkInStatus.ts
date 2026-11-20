// Client-safe helpers shared by the live walk-in banner, its API route and the Studio schema.

export const busynessLevels = [
  { value: 'quiet', title: 'Not busy', dotClassName: 'bg-[#86efac]' },
  { value: 'moderate', title: 'Moderately busy', dotClassName: 'bg-[#fde047]' },
  { value: 'busy', title: 'Busy', dotClassName: 'bg-[#fdba74]' },
  { value: 'very-busy', title: 'Very busy', dotClassName: 'bg-[#fca5a5]' }
] as const

export type Busyness = (typeof busynessLevels)[number]['value']

export type LiveWalkInStatus = {
  status: string
  waitTime: string
  busyness?: Busyness
  updatedAt?: string
  /** false when showing the generic fallback (feature off, not configured, or not updated today). */
  live: boolean
}

export const fallbackWalkInStatus: LiveWalkInStatus = {
  status: 'Call to confirm walk-in availability',
  waitTime: '',
  live: false
}

export const WALK_IN_POLL_MS = 30_000

const CLINIC_TIME_ZONE = 'America/Edmonton'

const clinicDay = new Intl.DateTimeFormat('en-CA', {
  timeZone: CLINIC_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})

/** A status set yesterday must never be shown as today's wait, so it only counts if updated on the current clinic day. */
export function isUpdatedToday(updatedAt: string | undefined, now: Date = new Date()) {
  if (!updatedAt) return false
  const updated = new Date(updatedAt)
  if (Number.isNaN(updated.getTime())) return false
  return clinicDay.format(updated) === clinicDay.format(now)
}

export function getBusyness(value?: string) {
  return busynessLevels.find((level) => level.value === value)
}

export function formatUpdatedAgo(updatedAt: string | undefined, now: number) {
  if (!updatedAt) return ''
  const minutes = Math.max(0, Math.round((now - new Date(updatedAt).getTime()) / 60_000))
  if (minutes < 1) return 'Updated just now'
  if (minutes < 60) return `Updated ${minutes} min ago`
  const hours = Math.floor(minutes / 60)
  return `Updated ${hours} hr${hours === 1 ? '' : 's'} ago`
}
