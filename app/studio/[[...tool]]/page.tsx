'use client'

import { NextStudio } from 'next-sanity/studio'

import config from '@/sanity.config'

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4F6F7] px-6 text-[#333333]">
        <div className="w-full max-w-xl rounded-2xl border border-[#333333]/10 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#2AA7A1]">Sanity Studio setup</p>
          <h1 className="mt-4 font-serif text-4xl">Connect the ZOMAK content project</h1>
          <p className="mt-5 leading-7 text-[#333333]/70">
            Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to .env.local, then restart the development server. Clinic staff can sign in here and publish walk-in status updates after the project is connected.
          </p>
        </div>
      </main>
    )
  }

  return <NextStudio config={config} />
}
