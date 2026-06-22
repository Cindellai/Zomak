import Link from 'next/link'

import { articles } from '@/data/articles'

export const metadata = {
  title: 'Articles | ZOMAK Medical',
  description:
    'Read ZOMAK Medical articles on clinic services, medical exams, family care, and patient preparation.'
}

export default function ArticlesPage() {
  return (
    <section className="min-h-screen bg-[#ededed] px-6 pb-24 pt-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Main Title Header */}
        <div className="mb-6">
          <h1 className="text-[64px] font-medium tracking-tight text-[#1a1a1a] sm:text-[76px] lg:text-[82px]">
            Articles
          </h1>
        </div>

        {/* Card Stack Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col justify-between rounded-xl bg-[#f6f6f6] p-4 text-black no-underline transition-all duration-200 hover:bg-white hover:shadow-md"
            >
              <div>
                {/* Image Window */}
                <div className="relative aspect-[1.46/1] w-full overflow-hidden rounded-lg bg-neutral-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Read time badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span className="rounded bg-white px-2.5 py-1.5 text-[11px] font-medium text-black tracking-wide leading-none shadow-sm">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Typography Header Title Element */}
                <h2 className="mt-4 text-[22px] font-normal leading-[1.2] tracking-tight text-[#1a1a1a]">
                  {article.title}
                </h2>

                {/* Subtext Body Summary Hook */}
                <p className="mt-2.5 text-[14px] leading-relaxed tracking-normal text-neutral-500 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Timestamp Footer Anchor */}
              <div className="mt-8 text-[12px] font-normal tracking-wide text-neutral-400">
                {article.date}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
