export type SearchLandingPageConfig = {
  slug: string
  title: string
  description: string
  eyebrow: string
  h1: string
  introduction: string
  locationSlugs: string[]
  locationHeading: string
  locationIntroduction: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  acceptingDoctorLocations?: string[]
  details: Array<{ heading: string; body: string; href?: string; linkLabel?: string }>
  faqs: Array<{ question: string; answer: string }>
}

export const searchLandingPages: SearchLandingPageConfig[] = [
  {
    slug: 'walk-in-clinic-calgary',
    title: 'Walk-In Clinic Calgary and Same-Day Doctors | ZOMAK',
    description:
      'Find walk-in clinics in Calgary at four ZOMAK locations. Review clinic hours, phone numbers and current call-to-confirm availability before your visit.',
    eyebrow: 'Walk-in care in Calgary',
    h1: 'Walk-In Clinics in Calgary',
    introduction:
      'Choose from four ZOMAK walk-in clinics in Calgary for same-day medical concerns. Walk-ins are subject to daily capacity and provider availability, so contact your preferred clinic before travelling.',
    locationSlugs: [
      'centre-street-north-medical-clinic',
      'lewisburg',
      'northmount',
      'fairview'
    ],
    locationHeading: 'Choose a Calgary walk-in clinic',
    locationIntroduction:
      'Each clinic page includes its direct phone number, confirmed hours, address, physician roster and directions.',
    primaryAction: { label: 'Choose a Calgary clinic', href: '#calgary-clinics' },
    secondaryAction: { label: 'View all locations', href: '/locations' },
    details: [
      {
        heading: 'Call before you leave',
        body: 'Walk-in capacity changes throughout the day. The clinic team can confirm whether patients are still being accepted when you call.'
      },
      {
        heading: 'Bring the essentials',
        body: 'Bring your Alberta health card or other coverage information, photo identification and an up-to-date medication list when relevant.'
      },
      {
        heading: 'Specialists require referrals',
        body: 'Pediatric and internal medicine consultations are referral only and are not offered as walk-in appointments.'
      }
    ],
    faqs: [
      {
        question: 'Which ZOMAK clinics offer walk-in care in Calgary?',
        answer:
          'ZOMAK Centre Street, Lewisburg, Northmount and Fairview offer walk-in access subject to daily capacity and provider availability.'
      },
      {
        question: 'Can I confirm a same-day doctor before travelling?',
        answer:
          'Yes. Call the clinic directly to confirm current walk-in capacity. The website does not display a live wait time until the live system is operational.'
      },
      {
        question: 'Are pediatric and internal medicine visits available as walk-ins?',
        answer:
          'No. Pediatric care with Dr. Chika Olijo and internal medicine with Dr. Izuchukwu Ezeh require referrals.'
      }
    ]
  },
  {
    slug: 'family-doctors-accepting-new-patients-calgary',
    title: 'Family Doctors Accepting New Patients in Calgary | ZOMAK',
    description:
      'Find ZOMAK family doctors accepting new patients in Calgary. Review current physicians and contact the appropriate clinic to confirm registration.',
    eyebrow: 'Family medicine in Calgary',
    h1: 'Family Doctors Accepting New Patients in Calgary',
    introduction:
      'Review ZOMAK family physicians currently listed as accepting new patients in Calgary. Registration and appointment availability must be confirmed directly with the physician’s clinic.',
    locationSlugs: [
      'centre-street-north-medical-clinic',
      'lewisburg',
      'northmount',
      'fairview'
    ],
    locationHeading: 'Calgary clinics registering family-medicine patients',
    locationIntroduction:
      'Choose a clinic to review its physicians, contact details, hours and registration options.',
    primaryAction: { label: 'See accepting physicians', href: '#accepting-family-doctors' },
    secondaryAction: { label: 'All family-doctor options', href: '/doctors?filter=accepting-new-patients#provider-directory' },
    acceptingDoctorLocations: [
      'Zomak Centre Street',
      'Zomak Lewisburg',
      'Zomak Northmount',
      'Zomak Fairview'
    ],
    details: [
      {
        heading: 'Confirm registration',
        body: 'Acceptance status can change. Contact the listed clinic to confirm registration and the next available appointment.'
      },
      {
        heading: 'Choose the right location',
        body: 'Physicians are shown with their clinic so patients can select a practical location before contacting the team.'
      },
      {
        heading: 'Review the physician profile',
        body: 'Each name links to the physician’s full profile, including supplied credentials, clinical role and current patient status.'
      }
    ],
    faqs: [
      {
        question: 'How do I register with a ZOMAK family doctor in Calgary?',
        answer:
          'Choose an accepting physician and contact that physician’s clinic. The clinic will confirm whether registration remains available and explain the next step.'
      },
      {
        question: 'Does accepting new patients guarantee an immediate appointment?',
        answer:
          'No. The status indicates that registration is available, but appointment timing must be confirmed with the clinic.'
      },
      {
        question: 'Where can I find a ZOMAK family doctor in Cochrane?',
        answer:
          'Use the dedicated Cochrane family-doctor page for current accepting physicians at ZOMAK Griffin Road.'
      }
    ]
  },
  {
    slug: 'medical-clinic-calgary',
    title: 'Medical Clinics in Calgary | ZOMAK Medical',
    description:
      'Explore four ZOMAK medical clinics in Calgary for family medicine, walk-in access and selected referral-based services. Compare locations and contact details.',
    eyebrow: 'Four Calgary locations',
    h1: 'Medical Clinics Across Calgary',
    introduction:
      'Find the ZOMAK medical clinic that fits your location and care needs. Compare four Calgary clinics for family medicine, walk-in access and selected referral-based services.',
    locationSlugs: [
      'centre-street-north-medical-clinic',
      'lewisburg',
      'northmount',
      'fairview'
    ],
    locationHeading: 'Find a ZOMAK medical clinic in Calgary',
    locationIntroduction:
      'Open a clinic page for its current physicians, patient status, services, address, hours and direct booking actions.',
    primaryAction: { label: 'Compare Calgary clinics', href: '#calgary-clinics' },
    secondaryAction: { label: 'Include Cochrane', href: '/locations' },
    details: [
      {
        heading: 'Family and walk-in medicine',
        body: 'All four Calgary clinics provide family medicine and walk-in access, subject to current physician and daily capacity.'
      },
      {
        heading: 'Referral-based specialists',
        body: 'Pediatric care and internal medicine are available by referral. Appointment location and timing are confirmed after referral review.'
      },
      {
        heading: 'Immigration medicals',
        body: 'Centre Street is the only current ZOMAK location for IRCC panel-physician services and international visa medicals.',
        href: '/immigration-medical-exam-calgary',
        linkLabel: 'Review immigration medicals'
      }
    ],
    faqs: [
      {
        question: 'How many ZOMAK medical clinics are in Calgary?',
        answer:
          'ZOMAK has four Calgary clinics: Centre Street, Lewisburg, Northmount and Fairview. Griffin Road is located in Cochrane.'
      },
      {
        question: 'Which Calgary clinic offers immigration and visa medicals?',
        answer:
          'Centre Street is the only current ZOMAK location offering IRCC panel-physician examinations and international visa medicals.'
      },
      {
        question: 'How do I choose a clinic?',
        answer:
          'Compare location, physician roster, services and contact details, then call the selected clinic to confirm registration, walk-in capacity or booking requirements.'
      }
    ]
  },
  {
    slug: 'immigration-medical-exam-calgary',
    title: 'IRCC Immigration Medical Exam Calgary | ZOMAK Medical',
    description:
      'Book an IRCC immigration medical exam in Calgary at ZOMAK Centre Street. Review required documents, offsite partner testing and clinic contact details.',
    eyebrow: 'Canadian immigration medical exams',
    h1: 'IRCC Medical Exams in Calgary',
    introduction:
      'ZOMAK Centre Street is the only current ZOMAK location for official Canadian IRCC Immigration Medical Examinations. These examinations are separate from medical requirements imposed by other countries. Review the requirements below before using the Centre Street booking portal.',
    locationSlugs: ['centre-street-north-medical-clinic'],
    locationHeading: 'Book your exam at ZOMAK Centre Street',
    locationIntroduction:
      'The Centre Street team confirms appointment availability, required identification and the documents connected to your IRCC instructions.',
    primaryAction: { label: 'Book at Centre Street', href: 'https://booking.csnmc.ca/' },
    secondaryAction: { label: 'IRCC panel-physician information', href: '/ircc-panel-physician-calgary' },
    details: [
      {
        heading: 'Bring these documents',
        body: 'Bring valid government-issued photo identification or a passport, IRCC correspondence and any IME, UMI or UCI number, current prescription medications, relevant medical reports, and vision aids if worn.'
      },
      {
        heading: 'Plan for testing and fees',
        body: 'The clinic examination fee applies. Laboratory or X-ray services, repeat testing, follow-up review, or late cancellation may involve additional fees. Required laboratory testing and X-rays are completed at partner facilities approximately ten minutes away.'
      },
      {
        heading: 'After your medical exam',
        body: 'Complete any required partner-facility testing within the timeframe Centre Street provides. Results are reviewed and the medical information is submitted through eMedical. The clinic contacts you if repeat testing or follow-up is required; IRCC makes the final decision. Medical requirements set by other countries use a separate service.',
        href: '/visa-medical-calgary',
        linkLabel: 'Review international visa medicals'
      }
    ],
    faqs: [
      {
        question: 'Where can I complete an IRCC immigration medical exam with ZOMAK?',
        answer:
          'ZOMAK Centre Street is the only current ZOMAK location for IRCC panel-physician examinations.'
      },
      {
        question: 'Where are the laboratory tests and X-rays completed?',
        answer:
          'Required laboratory testing and X-rays are completed at partner facilities approximately ten minutes away.'
      },
      {
        question: 'Is an IRCC medical the same as an international visa medical?',
        answer:
          'No. Canadian immigration medical exams follow IRCC requirements. International visa medicals follow the requirements of the destination country.'
      },
      {
        question: 'Where can I find the current Centre Street fees and detailed instructions?',
        answer:
          'Use the linked Centre Street IRCC panel-physician page for current fees, preparation, partner-testing and post-examination instructions, or call the dedicated immigration line before booking.'
      }
    ]
  },
  {
    slug: 'walk-in-clinic-cochrane',
    title: 'Walk-In Clinic Cochrane and Same-Day Doctor | ZOMAK',
    description:
      'Contact ZOMAK Griffin Road for walk-in care and same-day medical concerns in Cochrane. Review hours, directions and call-to-confirm availability.',
    eyebrow: 'Walk-in care in Cochrane',
    h1: 'Walk-In Clinic in Cochrane',
    introduction:
      'ZOMAK Griffin Road provides walk-in and family medical care in Cochrane. Walk-ins are subject to daily capacity and provider availability, so call the clinic to confirm before travelling.',
    locationSlugs: ['griffin-road-medical-clinic'],
    locationHeading: 'Visit ZOMAK Griffin Road',
    locationIntroduction:
      'Review the clinic address, direct phone number, confirmed hours, physician roster and directions.',
    primaryAction: { label: 'Call Griffin Road', href: 'tel:4035136040' },
    secondaryAction: { label: 'View Griffin Road clinic', href: '/locations/griffin-road-medical-clinic' },
    details: [
      {
        heading: 'Confirm same-day capacity',
        body: 'Call before you leave because walk-in capacity changes throughout the day.'
      },
      {
        heading: 'Family medicine',
        body: 'Dr. Abimbola Uwaoluetan (Dr. Bola) is accepting new patients and walk-ins at Griffin Road.'
      },
      {
        heading: 'Referral-only internal medicine',
        body: 'Internal medicine consultations with Dr. Izuchukwu Ezeh require a referral. Location and timing are confirmed after review.'
      }
    ],
    faqs: [
      {
        question: 'Does ZOMAK offer walk-in care in Cochrane?',
        answer:
          'Yes. ZOMAK Griffin Road offers walk-in access subject to daily capacity and provider availability.'
      },
      {
        question: 'Can I call before travelling to the clinic?',
        answer:
          'Yes. Call Griffin Road directly at 403-513-6040 to confirm current walk-in capacity.'
      },
      {
        question: 'Is internal medicine available as a walk-in service in Cochrane?',
        answer:
          'No. Internal medicine consultations with Dr. Izuchukwu Ezeh are available by referral only.'
      }
    ]
  },
  {
    slug: 'family-doctors-accepting-new-patients-cochrane',
    title: 'Family Doctors Accepting New Patients in Cochrane | ZOMAK',
    description:
      'Find a ZOMAK family doctor accepting new patients in Cochrane. Review the current physician and contact Griffin Road to confirm registration.',
    eyebrow: 'Family medicine in Cochrane',
    h1: 'Family Doctors Accepting New Patients in Cochrane',
    introduction:
      'Review the ZOMAK Griffin Road physician currently listed as accepting new patients in Cochrane. Contact the clinic directly to confirm registration and appointment availability.',
    locationSlugs: ['griffin-road-medical-clinic'],
    locationHeading: 'Register through ZOMAK Griffin Road',
    locationIntroduction:
      'The clinic can confirm whether registration remains available and explain the next step.',
    primaryAction: { label: 'See accepting physician', href: '#accepting-family-doctors' },
    secondaryAction: { label: 'Call Griffin Road', href: 'tel:4035136040' },
    acceptingDoctorLocations: ['Zomak Griffin Road'],
    details: [
      {
        heading: 'Current accepting physician',
        body: 'Dr. Abimbola Uwaoluetan (Dr. Bola) is currently listed as accepting new patients and walk-ins at Griffin Road.'
      },
      {
        heading: 'Confirm directly with the clinic',
        body: 'Patient status and appointment availability can change. Call Griffin Road before completing registration.'
      },
      {
        heading: 'Other Griffin Road physicians',
        body: 'Dr. Rose Kalu, Dr. Ijeoma Ofoto and Dr. Anderimam Waquong accept patients on a case-by-case basis and are not presented here as currently accepting new registrations.'
      }
    ],
    faqs: [
      {
        question: 'Which ZOMAK family doctor is accepting new patients in Cochrane?',
        answer:
          'Dr. Abimbola Uwaoluetan (Dr. Bola) is currently listed as accepting new patients and walk-ins at ZOMAK Griffin Road.'
      },
      {
        question: 'How do I confirm registration?',
        answer:
          'Call ZOMAK Griffin Road at 403-513-6040. The clinic will confirm current registration and appointment availability.'
      },
      {
        question: 'Are all Griffin Road physicians accepting new patients?',
        answer:
          'No. Dr. Rose Kalu, Dr. Ijeoma Ofoto and Dr. Anderimam Waquong accept patients on a case-by-case basis.'
      }
    ]
  }
]

export function getSearchLandingPage(slug: string) {
  return searchLandingPages.find((page) => page.slug === slug)
}
