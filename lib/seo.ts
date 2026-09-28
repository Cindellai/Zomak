const fallbackSiteUrl = 'https://zomak-sandy.vercel.app'

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  return (configuredUrl || fallbackSiteUrl).replace(/\/$/, '')
}

export function isProductionIndexingEnabled() {
  return Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim()) &&
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
}

export function absoluteUrl(pathname: string) {
  return new URL(pathname, `${getSiteUrl()}/`).toString()
}

export function canonicalMetadata(pathname: string) {
  return isProductionIndexingEnabled()
    ? { alternates: { canonical: pathname } }
    : {}
}

export function pageMetadata({
  pathname,
  title,
  description,
  image = '/images/home-zomak-logo.jpg'
}: {
  pathname: string
  title: string
  description: string
  image?: string
}) {
  return {
    title,
    description,
    ...canonicalMetadata(pathname),
    openGraph: {
      type: 'website' as const,
      siteName: 'ZOMAK Medical',
      title,
      description,
      url: pathname,
      images: [{ url: image }]
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [image]
    }
  }
}
