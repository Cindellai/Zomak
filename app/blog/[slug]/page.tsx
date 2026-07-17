import Link from 'next/link'
import { notFound } from 'next/navigation'

import { articles } from '@/data/articles'

type BlogPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return {}
  }

  return {
    title: `${article.title} | ZOMAK Medical`,
    description: article.summary
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  const relatedArticles = articles
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-[#F4F6F7] text-[#333333] antialiased">
      {/* 1. Immersive Full-Bleed Top Banner Layer */}
      <header className="relative h-[58vh] min-h-[360px] w-full overflow-hidden bg-[#333333]">
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#333333]/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/48 via-[#333333]/10 to-[#333333]/20" />

        {/* Dynamic Absolute Metadata Labels Grid */}
        <div className="absolute bottom-6 left-0 right-0 z-10 mx-auto flex max-w-[1440px] items-end justify-between px-6 sm:px-10 lg:px-14">
          <div className="flex items-center gap-1.5">
            <span className="rounded bg-white px-3 py-2 text-[12px] font-normal leading-none text-[#333333] shadow-sm">
              {article.readTime}
            </span>
          </div>

          {/* Clean Timestamp Print */}
          <span className="pb-1 text-[15px] font-medium text-white/90">
            {article.date}
          </span>
        </div>
      </header>

      {/* 2. Main Content Frame Area */}
      <div className="mx-auto max-w-[1120px] px-6 py-12 sm:px-10 lg:px-14">
        <header className="mx-auto max-w-[900px] text-center">
          <h1 className="text-[42px] font-normal leading-tight text-[#333333] sm:text-[56px] lg:text-[68px]">
            {article.title}
          </h1>

          <p className="mx-auto mt-7 max-w-[760px] text-[18px] font-normal leading-8 text-[#333333]/60">
            {article.summary}
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-[#333333] text-[14px] font-normal text-white">
              ZM
            </div>
            <div className="text-left">
              <p className="text-[14px] font-normal leading-tight text-[#333333]">
                ZOMAK Medical
              </p>
              <p className="mt-1 text-[12px] font-medium leading-tight text-[#333333]/45">
                {article.date} / {article.readTime}
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto mt-24 max-w-[760px]">
          <div className="space-y-8 text-[19px] font-normal leading-9 text-[#333333]">
            {article.body.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? 'first-letter:float-left first-letter:mr-3 first-letter:text-[72px] first-letter:font-normal first-letter:leading-[0.85] first-letter:text-[#333333]'
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-[#333333]/20 pt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#333333] px-6 py-3.5 text-[14px] font-normal text-white no-underline transition hover:bg-[#2AA7A1]"
              >
                Contact
              </Link>
          </div>
        </div>

        {/* Bottom Carousel Grid Context */}
        <section className="mt-24 pt-12 border-t border-[#333333]/20">
          <h2 className="text-[26px] font-normal text-[#333333]">
            More articles
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/blog/${relatedArticle.slug}`}
                className="group flex flex-col justify-between rounded-xl bg-white p-4 text-[#333333] no-underline transition-all shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="aspect-[1.5/1] overflow-hidden rounded-lg bg-[#F4F6F7]">
                    <img
                      src={relatedArticle.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-[17px] font-normal leading-snug text-[#333333]">
                    {relatedArticle.title}
                  </h3>
                </div>
                <p className="mt-6 text-[12px] font-medium text-[#333333]/45">
                  {relatedArticle.date}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </article>
  )
}
