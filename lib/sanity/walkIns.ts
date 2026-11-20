import { groq } from 'next-sanity'

import { client } from './client'
import { projectId } from './env'
import { fallbackWalkInStatus, getBusyness, isUpdatedToday, type LiveWalkInStatus } from '@/lib/walkInStatus'

export type EditableWalkInStatus = {
  slug: string
  name?: string
  summary?: string
  address?: string
  city?: string
  province?: string
  postalCode?: string
  phone?: string
  email?: string
  fax?: string
  walkInStatus?: string
  waitTime?: string
  heroImageUrl?: string
  heroImageAlt?: string
  philosophy?: string
  services?: string[]
}

const configured = projectId !== 'replace-me'

export async function getEditableWalkInStatus(slug: string): Promise<EditableWalkInStatus | null> {
  if (!configured) return null

  try {
    return await client.fetch(
      groq`*[_type == "location" && slug.current == $slug][0]{
        "slug": slug.current,
        name,
        summary,
        address,
        city,
        province,
        postalCode,
        phone,
        email,
        fax,
        "walkInStatus": coalesce(*[_type == "walkInStatus" && clinic._ref == ^._id] | order(_updatedAt desc)[0].status, walkInStatus),
        "waitTime": coalesce(*[_type == "walkInStatus" && clinic._ref == ^._id] | order(_updatedAt desc)[0].waitTime, waitTime),
        "heroImageUrl": heroImage.asset->url,
        heroImageAlt,
        philosophy,
        "services": services[]->title
      }`,
      { slug },
      { next: { revalidate: 60 } }
    )
  } catch {
    return null
  }
}

const liveClient = client.withConfig({ useCdn: false })

type LiveWalkInStatusRow = {
  status?: string
  waitTime?: string
  busyness?: string
  updatedAt?: string
}

/**
 * Current walk-in status for a clinic, as staff last published it in Studio.
 * `fresh: true` skips every cache (used by the polling API route); otherwise it's cached for 30s (initial page render).
 */
export async function getLiveWalkInStatus(slug: string, { fresh = false } = {}): Promise<LiveWalkInStatus> {
  if (!configured || process.env.NEXT_PUBLIC_LIVE_WAIT_TIMES_ENABLED !== 'true') return fallbackWalkInStatus

  try {
    const row = await liveClient.fetch<LiveWalkInStatusRow | null>(
      groq`*[_type == "walkInStatus" && clinic->slug.current == $slug] | order(_updatedAt desc)[0]{
        status,
        waitTime,
        busyness,
        "updatedAt": _updatedAt
      }`,
      { slug },
      fresh ? { cache: 'no-store' } : { next: { revalidate: 30 } }
    )

    if (!row?.status || !isUpdatedToday(row.updatedAt)) return fallbackWalkInStatus

    return {
      status: row.status,
      waitTime: row.waitTime || '',
      busyness: getBusyness(row.busyness)?.value,
      updatedAt: row.updatedAt,
      live: true
    }
  } catch {
    return fallbackWalkInStatus
  }
}
