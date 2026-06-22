import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (!process.env.REVALIDATION_SECRET || secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid revalidation secret' }, { status: 401 })
  }

  const { path, tag } = await request.json()

  if (typeof path === 'string') {
    revalidatePath(path)
  }

  if (typeof tag === 'string') {
    revalidateTag(tag)
  }

  return NextResponse.json({ revalidated: true })
}
