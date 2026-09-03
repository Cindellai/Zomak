import { groq } from 'next-sanity'

import { serviceCategoryOrder, getServiceCategorySlug } from '@/data/site'
import { client } from './client'
import { projectId } from './env'

export type NavigationServiceCategory = { title: string; slug: string }

const fallbackCategories: NavigationServiceCategory[] = serviceCategoryOrder.map((title) => ({
  title,
  slug: getServiceCategorySlug(title)
}))

export async function getNavigationServiceCategories(): Promise<NavigationServiceCategory[]> {
  if (projectId === 'replace-me') return fallbackCategories

  try {
    const categories = await client.fetch<NavigationServiceCategory[]>(
      groq`*[_type == "serviceCategory" && showInNavigation != false] | order(navigationOrder asc){
        title, "slug": slug.current
      }`,
      {},
      { next: { revalidate: 60 } }
    )

    return categories.length ? categories : fallbackCategories
  } catch {
    return fallbackCategories
  }
}
