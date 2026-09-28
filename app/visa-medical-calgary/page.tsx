import type { Metadata } from 'next'

import VisaMedicalsPage from '@/app/visa-medicals/page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ pathname: '/visa-medical-calgary', title: 'Visa Medical Calgary and Saudi Visa Medicals | ZOMAK', description: 'Review international visa medical requirements, including Saudi visa medicals, and contact ZOMAK Centre Street in Calgary to confirm your appointment.' })

export default VisaMedicalsPage
