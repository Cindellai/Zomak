import { NextResponse } from 'next/server'

import { locations } from '@/data/site'
import { getLiveWalkInStatus } from '@/lib/sanity/walkIns'

export const dynamic = 'force-dynamic'

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!locations.some((location) => location.slug === slug)) {
    return NextResponse.json({ message: 'Unknown clinic' }, { status: 404 })
  }

  const status = await getLiveWalkInStatus(slug, { fresh: true })

  // A short shared cache absorbs many patients polling at once while keeping updates under ~15s old.
  return NextResponse.json(status, {
    headers: { 'Cache-Control': 'public, s-maxage=15, stale-while-revalidate=15' }
  })
}
