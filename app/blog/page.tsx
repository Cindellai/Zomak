import Link from 'next/link'

import { articles } from '@/data/articles'

export const metadata = {
  title: 'Articles | ZOMAK Medical',
  description:
    'Read ZOMAK Medical articles on clinic services, medical exams, family care, and patient preparation.'
}

export default function ArticlesPage() {
  return (
    <section className="min-h-screen bg-[#F4F6F7] px-6 pb-24 pt-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Main Title Header */}
        <div className="mb-6">
          <h1 className="text-[42px] font-normal leading-tight text-[#333333] sm:text-[58px] lg:text-[72px]">
            Articles
          </h1>
        </div>

        {/* Card Stack Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col justify-between rounded-xl bg-white p-4 text-[#333333] no-underline shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div>
                {/* Image Window */}
                <div className="relative aspect-[1.46/1] w-full overflow-hidden rounded-lg bg-[#F4F6F7]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Read time badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span className="rounded bg-white px-2.5 py-1.5 text-xs font-medium leading-none text-[#333333] shadow-sm">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Typography Header Title Element */}
                <h2 className="mt-4 text-[22px] font-normal leading-snug text-[#333333]">
                  {article.title}
                </h2>

                {/* Subtext Body Summary Hook */}
                <p className="mt-2.5 line-clamp-3 text-[14px] leading-relaxed text-[#333333]/60">
                  {article.summary}
                </p>
              </div>

              {/* Timestamp Footer Anchor */}
              <div className="mt-8 text-xs font-normal text-[#333333]/45">
                {article.date}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
