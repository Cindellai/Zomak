import type { ReactNode } from 'react'

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <div className="bg-white pb-24 pt-32 text-[#333333]">
    <div className="mx-auto max-w-[900px] px-6 sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#2AA7A1]">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#333333]/70">{intro}</p>
      <div className="mt-12 space-y-10 border-t border-[#333333]/15 pt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_p]:mt-3 [&_p]:leading-7 [&_p]:text-[#333333]/75 [&_a]:text-[#178C87]">{children}</div>
    </div>
  </div>
}
