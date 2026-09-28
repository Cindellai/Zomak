import type { MetadataRoute } from 'next'

import { articles } from '@/data/articles'
import { providers } from '@/data/providers'
import {
  getServiceCategorySlug,
  locations,
  serviceCategoryOrder,
  services
} from '@/data/site'
import { absoluteUrl, isProductionIndexingEnabled } from '@/lib/seo'
import { searchLandingPages } from '@/data/search-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProductionIndexingEnabled()) {
    return []
  }

  const paths = [
    '/',
    '/about',
    '/blog',
    '/contact',
    '/doctors',
    '/locations',
    '/privacy',
    '/accessibility',
    '/terms',
    '/ircc-panel-physician-calgary',
    '/visa-medical-calgary',
    ...searchLandingPages.map((page) => `/${page.slug}`),
    ...locations.map((location) => `/locations/${location.slug}`),
    ...providers.map((provider) => `/doctors/${provider.slug}`),
    ...serviceCategoryOrder.map((category) => `/services/${getServiceCategorySlug(category)}`),
    ...services
      .filter((service) => !['panel-physician-appointments', 'visa-medical-experts'].includes(service.slug))
      .map((service) => `/services/details/${service.slug}`),
    ...articles.map((article) => `/blog/${article.slug}`)
  ]

  return Array.from(new Set(paths)).map((pathname) => ({
    url: absoluteUrl(pathname),
    changeFrequency: pathname === '/' ? 'weekly' : 'monthly'
  }))
}
