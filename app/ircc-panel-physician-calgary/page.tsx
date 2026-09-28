import type { Metadata } from 'next'

import ServiceDetailPage from '@/app/services/details/[slug]/page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ pathname: '/ircc-panel-physician-calgary', title: 'IRCC Panel Physician Calgary | ZOMAK Medical', description: 'Review IRCC panel-physician examinations in Calgary and contact ZOMAK Centre Street, the only current ZOMAK location for Canadian immigration medical exams.' })

export default function IrccPanelPhysicianCalgaryPage() {
  return ServiceDetailPage({
    params: Promise.resolve({ slug: 'panel-physician-appointments' }),
    searchParams: Promise.resolve({})
  })
}
