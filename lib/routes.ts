export const navItems = [
  { label: 'Locations', href: '/locations/centre-street-north-medical-clinic' },
  { label: 'Services', href: '/services/internal-medicine' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

export const cta = {
  phone: '403-250-2150',
  bookingHref: '/locations#choose-clinic',
  directionsHref: '/locations#choose-clinic'
}

export function getServiceDetailHref(slug: string) {
  if (slug === 'panel-physician-appointments') return '/ircc-panel-physician-calgary'
  if (slug === 'visa-medical-experts') return '/visa-medical-calgary'
  return `/services/details/${slug}`
}
