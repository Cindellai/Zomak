'use client'

import { useEffect } from 'react'

declare global {
  interface Window { dataLayer?: Array<Record<string, unknown>> }
}

export function InteractionAnalytics() {
  useEffect(() => {
    const track = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const label = link.textContent?.replace(/\s+/g, ' ').trim() || ''
      const normalized = `${label} ${href}`.toLowerCase()
      let eventName = ''
      if (href.startsWith('tel:')) eventName = 'call_click'
      else if (normalized.includes('direction') || href.includes('google.com/maps')) eventName = 'directions_click'
      else if (normalized.includes('register')) eventName = 'registration_start'
      else if (normalized.includes('book')) eventName = 'booking_start'
      else if (normalized.includes('referral')) eventName = 'referral_action'
      if (!eventName) return

      const pathMatch = `${window.location.pathname} ${href}`.match(/\/locations\/([^/#?]+)/)
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: eventName,
        clinic: link.dataset.location || pathMatch?.[1] || 'location-selector',
        link_url: href,
        link_text: label
      })
    }
    document.addEventListener('click', track)
    return () => document.removeEventListener('click', track)
  }, [])
  return null
}
