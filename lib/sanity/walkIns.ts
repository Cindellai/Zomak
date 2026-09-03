import { groq } from 'next-sanity'

import { client } from './client'
import { projectId } from './env'

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
        "walkInStatus": coalesce(*[_type == "walkInStatus" && clinic._ref == ^._id][0].status, walkInStatus),
        "waitTime": coalesce(*[_type == "walkInStatus" && clinic._ref == ^._id][0].waitTime, waitTime),
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
