'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export function LewisburgNowOpen() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [needsSound, setNeedsSound] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          const canPlayAudio = navigator.userActivation?.hasBeenActive ?? false
          video.muted = !canPlayAudio
          setNeedsSound(!canPlayAudio)
          void video.play().catch(() => {
            video.muted = true
            setNeedsSound(true)
            void video.play()
          })
        } else {
          video.pause()
        }
      },
      { threshold: [0, 0.45] }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-[#333333] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] text-white">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#BFEAE7]">
            Now Open
          </p>
          <h2 className="mt-4 text-[40px] font-normal leading-tight sm:text-[52px] lg:text-[60px]">
            Zomak Medical Clinic Lewisburg
          </h2>
          <p className="mt-5 max-w-[680px] text-lg leading-8 text-white/75">
            Our Lewisburg clinic is now welcoming patients at 1100 140 Avenue NE,
            Unit 220 in Calgary.
          </p>
          <Link
            href="/locations/lewisburg"
            className="mt-8 inline-flex w-fit rounded-full bg-[#BFEAE7] px-7 py-4 text-sm font-medium text-[#333333] no-underline transition hover:bg-white"
          >
            Explore Lewisburg →
          </Link>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-black sm:mt-12">
          <video
            ref={videoRef}
            aria-label="Inside Zomak Medical Clinic in Lewisburg"
            autoPlay
            className="aspect-video h-auto w-full object-cover"
            controls
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/lewisburg-clinic.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
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
              className="absolute bottom-5 right-5 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#333333] shadow-lg transition hover:bg-[#BFEAE7]"
            >
              Turn on sound
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
