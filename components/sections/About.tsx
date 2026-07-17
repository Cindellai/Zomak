'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const STATS = [
  { value: '5K+', label: 'Patients Served' },
  { value: '2', label: 'Clinic Locations' },
  { value: '10+', label: 'Healthcare Providers' },
  { value: '98%', label: 'Patient Satisfaction' },
]

export function About() {
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

  const leftImageY = -20 + scrollProgress * 80
  const rightImageY = 30 - scrollProgress * 80
  const words = [
    'We',
    'are',
    'dedicated',
    'to',
    'providing',
    'high-quality',
    'medical',
    'care',
    'tailored',
    'to',
    'your',
    'needs.',
    'Our',
    'team',
    'focuses',
    'on',
    'family',
    'health',
    'and',
    'walk-in',
    'care,',
    'ensuring',
    'every',
    'patient',
    'feels',
    'heard,',
    'supported,',
    'and',
    'confident',
    'in',
    'their',
    'care.'
  ]

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-white px-5 pb-20 pt-24 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40 antialiased"
    >
      <div className="mx-auto max-w-[1400px]">
        
        <div className="relative text-center">
          <span className="relative z-20 mb-5 block text-[18px] font-normal text-[#2AA7A1] sm:mb-6 sm:text-[20px]">
            About Us
          </span>

          {/* Left Parallax Floating Image */}
          <div 
            style={{ transform: `translateY(${leftImageY}px)` }}
            className="absolute left-[-40px] top-[100px] z-10 hidden xl:block opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=90"
              alt="Doctor consulting with patient"
              width={220}
              height={140}
              className="h-[130px] w-[210px] rotate-[-4deg] rounded-[20px] object-cover shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
            />
          </div>

          {/* Right Parallax Floating Image */}
          <div 
            style={{ transform: `translateY(${rightImageY}px)` }}
            className="absolute right-[-40px] top-[120px] z-10 hidden xl:block opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=90"
              alt="Medical instruments and tools"
              width={220}
              height={140}
              className="h-[130px] w-[210px] rotate-[4deg] rounded-[20px] object-cover shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
            />
          </div>

          {/* ================= SCROLL TEXT REVEAL ================= */}
          <div className="relative z-20 mx-auto max-w-[1040px] select-none">
            <h2
              className="text-[30px] font-normal leading-snug tracking-tight text-black sm:text-[40px] lg:text-[48px]"
              aria-label="We are dedicated to providing high-quality medical care tailored to your needs. Our team focuses on family health and walk-in care, ensuring every patient feels heard, supported, and confident in their care."
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
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-[#2AA7A1] px-10 py-4 text-[14px] font-normal text-white no-underline shadow-sm transition-all duration-200 hover:bg-[#228e89] hover:shadow-md"
            >
              More About Us
            </Link>
          </div>
        </div>

        {/* Stats Grid Container */}
        <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-2 gap-x-5 gap-y-10 border-t border-neutral-100 pt-10 sm:mt-28 sm:gap-x-8 sm:gap-y-16 sm:pt-16 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
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
