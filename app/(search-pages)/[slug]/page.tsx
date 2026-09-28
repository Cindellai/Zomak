import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SearchLandingPage } from '@/components/search/SearchLandingPage'
import { getSearchLandingPage, searchLandingPages } from '@/data/search-pages'
import { pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return searchLandingPages.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getSearchLandingPage(slug)
  if (!page) return {}

  return pageMetadata({ pathname: `/${page.slug}`, title: page.title, description: page.description })
}

export default async function SearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getSearchLandingPage(slug)
  if (!page) notFound()

  return <SearchLandingPage page={page} />
}
