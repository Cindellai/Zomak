'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Volume2 } from 'lucide-react'
import { homeActionPrimary, homeActionSecondary } from '@/components/ui/homeActionStyles'

export function LewisburgNowOpen() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const backgroundVideoRef = useRef<HTMLVideoElement>(null)
  const [needsSound, setNeedsSound] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    const backgroundVideo = backgroundVideoRef.current
    if (!section || !video || !backgroundVideo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          const canPlayAudio = navigator.userActivation?.hasBeenActive ?? false
          video.muted = !canPlayAudio
          setNeedsSound(!canPlayAudio)
          backgroundVideo.currentTime = video.currentTime
          void backgroundVideo.play()
          void video.play().catch(() => {
            video.muted = true
            setNeedsSound(true)
            void video.play()
          })
        } else {
          video.pause()
          backgroundVideo.pause()
        }
      },
      { threshold: [0, 0.45] }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#F3F8F7] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 text-[#333333] lg:grid-cols-[minmax(0,1fr)_minmax(560px,1.08fr)] lg:gap-14 xl:gap-20">
        <div className="flex max-w-[690px] flex-col items-start text-left">
          <h2 className="max-w-[690px] font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.025em] text-[#333333] sm:text-[48px] lg:text-[52px] xl:text-[54px]">
            <span className="text-[#248E89]">Now Open:</span>{' '}
            Zomak Medical Clinic Lewisburg
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-7 text-[#465250] sm:text-[18px] sm:leading-8">
            Our Lewisburg clinic is open and welcoming patients. Our team is here
            to provide reliable care for you and your family in a comfortable,
            modern clinic.
          </p>

          <address className="mt-7 flex w-full max-w-[620px] items-start gap-3 border-t border-[#333333]/10 pt-5 text-[15px] not-italic leading-6 text-[#52605E]">
            <MapPin className="mt-0.5 shrink-0 text-[#248E89]" size={18} aria-hidden="true" />
            <span>1100 140 Avenue NE, Unit 220, Calgary</span>
          </address>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/locations/lewisburg"
              className={homeActionPrimary}
            >
              Explore Lewisburg
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" />
            </Link>
            <a
              href="tel:4032558200"
              className={homeActionSecondary}
            >
              <Phone size={15} aria-hidden="true" />
              403-255-8200
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#1C2927] shadow-[0_24px_60px_rgba(33,66,63,0.16)]">
          <video
            ref={backgroundVideoRef}
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-2xl"
            loop
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            <source src="/videos/lewisburg-homepage.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#14211F]/35" />
          <video
            ref={videoRef}
            aria-label="Inside Zomak Medical Clinic in Lewisburg"
            autoPlay
            className="relative z-10 h-full w-full object-contain"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/lewisburg-homepage.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#14211F]/50 via-transparent to-transparent" />
          {needsSound && (
            <button
              type="button"
              onClick={() => {
                const video = videoRef.current
                if (!video) return
                video.muted = false
                void video.play()
                setNeedsSound(false)
              }}
              className="absolute right-5 top-5 z-30 inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-[#333333] shadow-lg backdrop-blur-sm transition hover:bg-white sm:right-7 sm:top-7"
              aria-label="Turn on video sound"
            >
              <Volume2 size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
