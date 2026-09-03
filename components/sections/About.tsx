'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { HomepageContent } from '@/lib/sanity/homepage'

const STATS = [
  { value: '5K+', label: 'Patients Served' },
  { value: '2', label: 'Clinic Locations' },
  { value: '10+', label: 'Healthcare Providers' },
  { value: '98%', label: 'Patient Satisfaction' },
]

const fallbackStatement = 'We are dedicated to providing high-quality medical care tailored to your needs. Our team focuses on family health and walk-in care, ensuring every patient feels heard, supported, and confident in their care.'

export function About({ content }: { content?: HomepageContent['about'] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const revealStart = viewportHeight * 0.82
      const revealEnd = viewportHeight * 0.22
      const progress = (revealStart - rect.top) / (revealStart - revealEnd)

      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const statement = content?.statement || fallbackStatement
  const words = statement.split(/\s+/)
  const stats = content?.stats?.filter((item) => item.value && item.label) || STATS

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-white px-5 pb-20 pt-24 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40 antialiased"
    >
      <div className="mx-auto max-w-[1400px]">
        
        <div className="relative text-center">
          <span className="relative z-20 mb-5 block text-[18px] font-normal text-[#2AA7A1] sm:mb-6 sm:text-[20px]">
            {content?.eyebrow || 'About Us'}
          </span>

          {/* ================= SCROLL TEXT REVEAL ================= */}
          <div className="relative z-20 mx-auto max-w-[1040px] select-none">
            <h2
              className="text-[30px] font-normal leading-snug tracking-tight text-black sm:text-[40px] lg:text-[48px]"
              aria-label={statement}
            >
              {words.map((word, index) => {
                const threshold = index / words.length
                const isRevealed = scrollProgress >= threshold

                return (
                  <span
                    key={`${word}-${index}`}
                    className={`mr-[0.24em] inline-block transition-colors duration-300 ${
                      isRevealed ? 'text-black' : 'text-neutral-300'
                    }`}
                    aria-hidden="true"
                  >
                    {word}
                  </span>
                )
              })}
            </h2>
          </div>

          {/* Action Link Button */}
          <div className="relative z-20 mt-12">
            <Link
              href={content?.buttonHref || '/about'}
              className="inline-flex items-center justify-center rounded-full bg-[#2AA7A1] px-10 py-4 text-[14px] font-normal text-white no-underline shadow-sm transition-all duration-200 hover:bg-[#228e89] hover:shadow-md"
            >
              {content?.buttonLabel || 'More About Us'}
            </Link>
          </div>
        </div>

        {/* Stats Grid Container */}
        <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-2 gap-x-5 gap-y-10 border-t border-neutral-100 pt-10 sm:mt-28 sm:gap-x-8 sm:gap-y-16 sm:pt-16 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-[38px] font-normal leading-none tracking-tight text-black sm:text-[58px] lg:text-[68px]">
                {value}
              </p>
              <p className="mt-3 text-[16px] font-normal text-black sm:mt-4 sm:text-[18px]">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
