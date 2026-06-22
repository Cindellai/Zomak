'use client'

import { Star, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const REVIEWS = [
  {
    category: 'Family Medicine',
    badgeColor: 'bg-[#f5efe3] text-[#6B5120]',
    headline: 'The team made me feel comfortable from the moment I walked in.',
    body: 'I was nervous about visiting a new clinic, but every staff member was warm and attentive. I left feeling reassured.',
    name: 'Sarah M.',
    stars: 5,
  },
  {
    category: 'Walk-In Care',
    badgeColor: 'bg-[#f0edf7] text-[#4B3B8C]',
    headline: 'Kind, professional, and helped me get care quickly.',
    body: 'The staff were efficient without feeling rushed. I would definitely recommend this clinic to anyone in Calgary.',
    name: 'James T.',
    stars: 4,
  },
  {
    category: 'Pediatric Care',
    badgeColor: 'bg-[#f7edf3] text-[#7A2E5A]',
    headline: 'Very gentle and patient with my child throughout the visit.',
    body: 'The visit felt calm, organized, and supportive. My daughter was at ease the entire time.',
    name: 'Priya K.',
    stars: 5,
  },
  {
    category: "Women's Health",
    badgeColor: 'bg-[#edf5ed] text-[#2E5A2E]',
    headline: 'The provider listened carefully and made sure I understood every step.',
    body: 'She answered all my questions thoroughly and never made me feel rushed. Exceptional care.',
    name: 'Linda R.',
    stars: 5,
  },
]

export function PatientReviews() {
  const [start, setStart] = useState(0)
  const visible = 4
  const canPrev = start > 0
  const canNext = start + visible < REVIEWS.length

  return (
    <section className="bg-[#fbfaf7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-t border-neutral-200/60">
      <div className="mx-auto max-w-[1360px]">

        {/* 1. Asymmetric Editorial Header Block (Elevating image_ac950a.jpg structure) */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end border-b border-neutral-300/40 pb-10">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2F7F95] block mb-3">
              / Verified Experiences
            </span>
            <h2 className="text-[52px] font-extrabold leading-none tracking-[-0.04em] text-[#102A32] sm:text-[72px] lg:text-[84px]">
              1800+{' '}
              <em
                className="font-serif font-normal italic text-[#2F7F95] tracking-normal inline-block ml-1"
              >
                Reviews
              </em>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 lg:pl-6">
            <p className="text-[14px] leading-relaxed text-neutral-500 max-w-[340px]">
              Real patient clinical feedback collected directly from our active care centers in Alberta.
            </p>
            
            {/* Custom Styled Navigation Buttons */}
           
          </div>
        </div>

        {/* 2. Refined Review Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.slice(start, start + visible).map((review) => (
            <article
              key={review.category}
              className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-white p-7 border border-neutral-200/70 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300"
            >
              <div>
                {/* Clean, perfectly proportioned pill label */}
                <span className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${review.badgeColor}`}>
                  {review.category}
                </span>

                <h3 className="mt-6 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#102A32]">
                  “{review.headline}”
                </h3>

                <p className="mt-3 text-[14px] leading-[1.65] text-neutral-500">
                  {review.body}
                </p>
              </div>

              {/* Card Footer with explicit line break divider */}
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-neutral-100 pt-5">
                <p className="text-[13px] font-bold text-neutral-800">
                  {review.name}
                </p>

                {/* Elegant Minimal Star Grid */}
                <div className="flex items-center gap-0.5 text-[#e1b726]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.stars ? 'fill-current' : 'text-neutral-200'}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}