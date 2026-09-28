'use client'

import { Star } from 'lucide-react'
import type { HomepageContent } from '@/lib/sanity/homepage'

export function PatientReviews({
  content,
  testimonials
}: {
  content?: HomepageContent['reviews']
  testimonials?: HomepageContent['testimonials']
}) {
  const visible = 4
  const cmsReviews = testimonials?.filter((review) => review.quote && review.source && review.googleProfileUrl)
  const reviewData = cmsReviews?.length
    ? cmsReviews.map((review, index) => ({
        category: review.category || 'Patient Care',
        badgeColor: index === 0 ? 'bg-[#F4F6F7] text-[#333333]' : 'bg-[#BFEAE7] text-[#333333]',
        headline: review.headline || review.quote!,
        body: review.quote!,
        name: review.source!,
        stars: review.rating || 5,
        googleProfileUrl: review.googleProfileUrl!,
        locationName: review.locationName
      }))
    : []
  if (!reviewData.length) return null

  return (
    <section className="bg-[#F4F6F7] px-5 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32 border-t border-[#333333]/12">
      <div className="mx-auto max-w-[1400px]">

        {/* 1. Asymmetric Editorial Header Block (Elevating image_ac950a.jpg structure) */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end border-b border-[#333333]/16 pb-10">
          <div className="lg:col-span-7">
          
            <h2 className="text-[38px] font-normal leading-tight text-[#333333] sm:text-[64px] lg:text-[76px]">
              {content?.headingNumber || '1800+'}{' '}
              <em
                className="font-normal italic text-[#2AA7A1] inline-block ml-1"
              >
                {content?.headingAccent || 'Reviews'}
              </em>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 lg:pl-6">
            <p className="text-[14px] leading-relaxed text-[#333333]/60 max-w-[340px]">
              {content?.description || 'Real patient clinical feedback collected directly from our active care centers in Alberta.'}
            </p>
            
            {/* Custom Styled Navigation Buttons */}
           
          </div>
        </div>

        {/* 2. Refined Review Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviewData.slice(0, visible).map((review) => (
            <article
              key={review.category}
              className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-white p-7 border border-[#333333]/12 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#333333]/20"
            >
              <div>
                {/* Clean, perfectly proportioned pill label */}
                <span className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-normal ${review.badgeColor}`}>
                  {review.category}
                </span>

                <h3 className="mt-6 text-[18px] font-normal leading-snug text-[#333333]">
                  “{review.headline}”
                </h3>

                <p className="mt-3 text-[14px] leading-[1.65] text-[#333333]/60">
                  {review.body}
                </p>
              </div>

              {/* Card Footer with explicit line break divider */}
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#333333]/8 pt-5">
                <div>
                  <p className="text-[13px] font-bold text-[#333333]">{review.name}</p>
                  {review.locationName && <p className="mt-1 text-[11px] text-[#333333]/50">{review.locationName}</p>}
                </div>

                {/* Elegant Minimal Star Grid */}
                <div className="flex items-center gap-0.5 text-[#2AA7A1]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.stars ? 'fill-current' : 'text-[#333333]/20'}
                    />
                  ))}
                </div>
              </div>
              <a href={review.googleProfileUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-xs font-medium text-[#178C87] no-underline hover:underline">View on Google</a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
