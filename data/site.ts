const commonLocationServices = [
  'Visa Medical Experts',
  'Pediatric Care',
  "Women's Health Care",
  "Driver's Medical"
]

const revitalizeServices = [
  'P-Shot (Priapus Shot)',
  'Bocox',
  'Shockwave for Erectile Dysfunction',
  'Trimix',
  'O-Shot (Orgasm Shot)',
  'PRP Treatment for Hair and Facials',
  'Vampire Breast Lift',
  'Vampire Wing Lift'
]

const homeCareServices = [
  'Respite Care',
  'Elderly Care',
  'Client Directed Homecare Invoicing Program',
  'Personal Care'
]

const serviceCategories = {
  aesthetics: 'Aesthetics',
  internalMedicine: 'Internal Medicine',
  familyPractice: 'Family Practice',
  womensHealth: "Women's Health",
  mensHealth: "Men's Health",
  pediatrics: 'Pediatric Care',
  homeCare: 'Zomak Home Care'
} as const

export const serviceCategoryOrder = [
  serviceCategories.aesthetics,
  serviceCategories.internalMedicine,
  serviceCategories.familyPractice,
  serviceCategories.womensHealth,
  serviceCategories.mensHealth,
  serviceCategories.pediatrics,
  serviceCategories.homeCare
] as const

export const serviceCategorySlugs: Record<(typeof serviceCategoryOrder)[number], string> = {
  [serviceCategories.aesthetics]: 'aesthetics',
  [serviceCategories.internalMedicine]: 'internal-medicine',
  [serviceCategories.familyPractice]: 'family-practice',
  [serviceCategories.womensHealth]: 'womens-health',
  [serviceCategories.mensHealth]: 'mens-health',
  [serviceCategories.pediatrics]: 'pediatric-care',
  [serviceCategories.homeCare]: 'zomak-home-care'
}

export const getServiceCategorySlug = (category: string) =>
  serviceCategorySlugs[category as (typeof serviceCategoryOrder)[number]]

export const getServiceCategoryBySlug = (slug: string) =>
  serviceCategoryOrder.find((category) =>
    serviceCategorySlugs[category] === (slug === '360-home-care' ? 'zomak-home-care' : slug)
  )

export const locations = [
  {
    name: 'Zomak Medical Clinic - Griffin Road',
    slug: 'griffin-road-medical-clinic',
    summary:
      "Multi-service clinic supporting medical exams, pediatric care, women's health care, testing, and specialty patient needs.",
    address: '239 Griffin Rd E #2145',
    city: 'Cochrane',
    province: 'AB',
    postalCode: 'T4C 2B9',
    phone: '403-513-6040',
    email: 'griffinrdmedreception@gmail.com',
    fax: '403-538-6747',
    status: 'Active',
    walkInStatus: 'Walk-ins now',
    services: [...commonLocationServices, 'Internal Medicine Specialist Care', 'Botox', 'Fillers', 'PRP Treatment for Hair and Facials', 'Vampire Breast Lift', 'Vampire Wing Lift']
  },
  {
    name: 'Zomak Medical Clinic - Centre St',
    slug: 'centre-street-north-medical-clinic',
    summary:
      "North Calgary clinic supporting medical exams, pediatric care, women's health care, testing, and specialty patient needs.",
    address: '6213 Centre St NW Suite 10',
    city: 'Calgary',
    province: 'AB',
    postalCode: 'T2K 0V2',
    phone: '403-906-0210',
    email: 'info@csnmc.ca',
    fax: '403-538-6747',
    status: 'Active',
    walkInStatus: 'Walk-ins now',
    services: [...commonLocationServices, 'Medical Piercings', 'Panel Physician Appointments']
  },
  {
    name: 'Zomak Medical Clinic - Lewisburg',
    slug: 'lewisburg',
    summary:
      'Lewisburg location supporting ZOMAK patients with medical exams, pediatric care, testing, and specialty services.',
    address: '1100 140 Avenue NE, Unit 220',
    city: 'Calgary',
    province: 'AB',
    postalCode: 'T3P 0T7',
    phone: '403-255-8200',
    email: '',
    fax: '403-906-4775',
    status: 'Active',
    walkInStatus: 'Call for walk-in availability',
    services: commonLocationServices
  },
  {
    name: 'Zomak Medical Clinic - Northmount',
    slug: 'northmount',
    summary:
      'Northmount location supporting ZOMAK patients with medical exams, pediatric care, testing, and specialty services.',
    address: '555 Northmount Dr NW',
    city: 'Calgary',
    province: 'AB',
    postalCode: 'T2K 3J3',
    phone: '403-250-2150',
    email: 'zomakmedreception@gmail.com',
    fax: '403-538-6747',
    status: 'Active',
    walkInStatus: 'Walk-ins now',
    services: [...commonLocationServices, 'Internal Medicine Specialist Care']
  },
  {
    name: 'Zomak Medical Clinic - Fairview',
    slug: 'fairview',
    summary:
      'Fairview location supporting ZOMAK patients with medical exams, pediatric care, testing, and specialty services.',
    address: '7640 Fairmount Dr SE',
    city: 'Calgary',
    province: 'AB',
    postalCode: 'T2H 0X9',
    phone: '403-251-2690',
    email: 'dmmc.calgary1@gmail.com',
    fax: '403-538-6747',
    status: 'Active',
    walkInStatus: 'Call for walk-in availability',
    services: commonLocationServices
  }
]

export const services = [
  {
    title: 'Visa Medical Experts',
    slug: 'visa-medical-experts',
    category: serviceCategories.familyPractice,
    image:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=85',
    summary:
      'Specializing in visa medical exams, we help patients prepare required health documentation efficiently and accurately.',
    details:
      'Support for patients completing immigration, residency, employment, or travel-related medical exam requirements.',
    bestFor: ['Immigration medical forms', 'Work or school requirements', 'Travel documentation'],
    whatToBring: ['Government-issued photo ID', 'Required forms or case documents', 'Medication list and relevant medical records'],
    visitFlow: ['Document review and intake', 'Provider assessment', 'Required forms, tests, or follow-up instructions'],
    faq: [
      {
        question: 'Do I need to bring paperwork?',
        answer:
          'Yes. Bring all forms, case numbers, or instructions connected to the medical exam so the clinic can confirm requirements.'
      },
      {
        question: 'How long does the process take?',
        answer:
          'Timing depends on the type of exam and whether additional testing or documentation is required.'
      },
      {
        question: 'Can I book if I am unsure which forms are required?',
        answer:
          'Yes. Bring any instructions you have received, and the clinic team can help review what may be needed for the visit.'
      },
      {
        question: 'Will I need follow-up testing?',
        answer:
          'Some exams may require additional testing or documentation. The provider will explain next steps during the appointment.'
      }
    ]
  },
  {
    title: 'Medical Piercings',
    slug: 'medical-piercings',
    category: 'Centre St Services',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=85',
    summary:
      'Medical piercing services performed by trained professionals in a clean clinical environment.',
    details:
      'A clinic-based approach for patients who want piercing support with attention to cleanliness, preparation, and aftercare.',
    bestFor: ['Ear piercings', 'Patients who prefer a clinical setting', 'Aftercare guidance'],
    whatToBring: ['Photo ID', 'Guardian consent when required', 'Any allergy or skin sensitivity details'],
    visitFlow: ['Placement review', 'Sterile preparation', 'Piercing and aftercare instructions'],
    faq: [
      {
        question: 'Is aftercare explained?',
        answer:
          'Yes. Patients receive aftercare guidance before leaving so they know how to care for the piercing at home.'
      },
      {
        question: 'Can children receive medical piercings?',
        answer:
          'Guardian requirements may apply. Contact the clinic before booking to confirm age and consent details.'
      },
      {
        question: 'What should I avoid before the appointment?',
        answer:
          'Avoid applying lotions or products around the piercing area before the visit unless the clinic gives different instructions.'
      },
      {
        question: 'What if I have metal sensitivities?',
        answer:
          'Tell the clinic team about any allergies or sensitivities before the procedure so they can review appropriate options.'
      }
    ]
  },
  {
    title: 'Pediatric Care',
    slug: 'pediatric-care',
    category: serviceCategories.pediatrics,
    image:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=85',
    summary:
      "Friendly healthcare for infants, children, and adolescents, including routine checkups and family guidance.",
    details:
      'Specialist care for children and families focused on growth, development, symptoms and follow-up.',
    bestFor: ['Newborn & infant care', 'ADHD assessment & management', 'Autism spectrum assessment and support', 'Growth & development support', 'Acute and chronic illness management for infants, children and adolescents'],
    whatToBring: ['Health card or ID', 'Medication and allergy list', 'Vaccine records or previous visit notes'],
    visitFlow: ['Family intake and concern review', 'Provider assessment', 'Care plan, follow-up, or referral guidance'],
    faq: [
      {
        question: 'What should parents prepare?',
        answer:
          'Bring notes about symptoms, medication details, vaccine records, and any questions you want answered during the visit.'
      },
      {
        question: 'Can pediatric visits include preventive care?',
        answer:
          'Yes. Visits may include development questions, vaccine review, growth tracking, and general health guidance.'
      },
      {
        question: 'Should I bring vaccine records?',
        answer:
          'Yes. Vaccine records and previous visit notes help the provider understand your child’s care history.'
      },
      {
        question: 'Can parents raise more than one concern?',
        answer:
          'Yes. Bring a short list of concerns so the provider can prioritize the most important items during the visit.'
      }
    ]
  },
  {
    title: "Women's Health Care",
    slug: 'womens-health-care',
    category: serviceCategories.aesthetics,
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1600&q=85',
    summary:
      "Wellness visits, prenatal support, reproductive health, and menopause care across life stages.",
    details:
      'Supportive visits for preventive care, reproductive health questions, pregnancy-related needs, and changing symptoms.',
    bestFor: ['Menopausal support & treatment', 'PAP smears', 'IUD consultations and referrals'],
    whatToBring: ['Medication list', 'Recent test results when available', 'Cycle, symptom, or pregnancy notes'],
    visitFlow: ['Health history and concern review', 'Provider assessment', 'Screening, testing, or follow-up plan'],
    faq: [
      {
        question: 'Can I discuss multiple concerns?',
        answer:
          'Yes. Bring a short list so the provider can prioritize your concerns and identify the right next steps.'
      },
      {
        question: 'Are sensitive concerns handled privately?',
        answer:
          'Yes. The visit is designed to support clear, respectful conversations about personal health concerns.'
      },
      {
        question: 'What details should I track before my visit?',
        answer:
          'It can help to note symptom timing, cycle dates, medication changes, pregnancy details, or questions you want answered.'
      },
      {
        question: 'Can this visit include screening or testing?',
        answer:
          'Depending on your concern and health history, the provider may discuss screening, testing, follow-up, or referral options.'
      }
    ]
  },
  {
    title: 'Newborn & Infant Care',
    slug: 'newborn-infant-care',
    category: serviceCategories.pediatrics,
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=85',
    summary: 'Specialist care for newborn health, feeding, early development and infant medical concerns.',
    details: 'Pediatric assessment and guidance for newborns and infants. A clinic referral is required and should be faxed to 403-538-6747.',
    bestFor: ['Newborn health concerns', 'Feeding and early development', 'Infant wellness support'],
    whatToBring: ['Health card', 'Feeding and symptom notes', 'Relevant birth or hospital records'],
    visitFlow: ['Clinic referral', 'Pediatric assessment', 'Care and follow-up plan'],
    faq: [{ question: 'Is a referral required?', answer: 'Yes. Ask your clinic to fax the referral to 403-538-6747.' }]
  },
  {
    title: 'ADHD Assessment & Management',
    slug: 'adhd-assessment-management',
    category: serviceCategories.pediatrics,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=85',
    summary: 'Assessment and ongoing management support for children and adolescents with possible ADHD.',
    details: 'A pediatric specialist reviews symptoms, development and relevant school or family observations. A clinic referral is required.',
    bestFor: ['Attention concerns', 'Hyperactivity or impulsivity', 'Ongoing ADHD management'],
    whatToBring: ['Health card', 'School reports or assessments', 'Medication and symptom history'],
    visitFlow: ['Clinic referral', 'History and assessment', 'Management and follow-up plan'],
    faq: [{ question: 'Is a referral required?', answer: 'Yes. Ask your clinic to fax the referral to 403-538-6747.' }]
  },
  {
    title: 'Autism Spectrum Assessment & Support',
    slug: 'autism-spectrum-assessment-support',
    category: serviceCategories.pediatrics,
    image: 'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1600&q=85',
    summary: 'Specialist assessment and practical support for autism spectrum concerns.',
    details: 'Pediatric evaluation and support planning for children with developmental or autism spectrum concerns. A clinic referral is required.',
    bestFor: ['Developmental concerns', 'Autism spectrum assessment', 'Family support and next steps'],
    whatToBring: ['Health card', 'Developmental and school records', 'Previous assessments when available'],
    visitFlow: ['Clinic referral', 'Developmental assessment', 'Support and follow-up plan'],
    faq: [{ question: 'Is a referral required?', answer: 'Yes. Ask your clinic to fax the referral to 403-538-6747.' }]
  },
  {
    title: 'Growth & Development Support',
    slug: 'growth-development-support',
    category: serviceCategories.pediatrics,
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1600&q=85',
    summary: 'Assessment and support for physical growth, milestones and childhood development.',
    details: 'Specialist review of growth patterns and developmental milestones with clear follow-up guidance. A clinic referral is required.',
    bestFor: ['Growth concerns', 'Developmental milestones', 'Ongoing monitoring and guidance'],
    whatToBring: ['Health card', 'Growth records when available', 'Developmental or school reports'],
    visitFlow: ['Clinic referral', 'Growth and development review', 'Care and monitoring plan'],
    faq: [{ question: 'Is a referral required?', answer: 'Yes. Ask your clinic to fax the referral to 403-538-6747.' }]
  },
  {
    title: 'Acute & Chronic Illness Management',
    slug: 'pediatric-acute-chronic-illness-management',
    category: serviceCategories.pediatrics,
    image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=1600&q=85',
    summary: 'Specialist management for acute and chronic illness in infants, children and adolescents.',
    details: 'Pediatric assessment and coordinated management for short-term illness and ongoing medical conditions. A clinic referral is required.',
    bestFor: ['Complex acute illness', 'Chronic childhood conditions', 'Coordinated pediatric follow-up'],
    whatToBring: ['Health card', 'Medication list', 'Relevant laboratory, imaging or specialist records'],
    visitFlow: ['Clinic referral', 'Pediatric assessment', 'Treatment and follow-up plan'],
    faq: [{ question: 'Is a referral required?', answer: 'Yes. Ask your clinic to fax the referral to 403-538-6747.' }]
  },
  {
    title: "Driver's Medical",
    slug: 'drivers-medical',
    category: serviceCategories.familyPractice,
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=85',
    summary:
      "Driver's medical exams for patients who need health documentation for licensing or driving requirements.",
    details:
      'Assessment and documentation support for personal, commercial, or regulatory driver medical requirements.',
    bestFor: ['Commercial driver medicals', 'License renewal requirements', 'Employer or regulatory forms'],
    whatToBring: ['Driver medical form', 'Photo ID or license', 'Glasses, medication list, and relevant medical records'],
    visitFlow: ['Form and history review', 'Provider assessment', 'Completed documentation or follow-up instructions'],
    faq: [
      {
        question: 'Should I bring my driver medical form?',
        answer:
          'Yes. Bring the required form and any instructions from the licensing body, employer, or regulator.'
      },
      {
        question: 'What if follow-up is needed?',
        answer:
          'The provider will explain what additional information, testing, or documentation is required before completion.'
      },
      {
        question: 'Should I bring glasses or contacts?',
        answer:
          'Yes. Bring any glasses or contacts you use for driving, along with your medication list and relevant health records.'
      },
      {
        question: 'Can the form be completed the same day?',
        answer:
          'Some forms can be completed during the visit, while others may require additional information or follow-up.'
      }
    ]
  },
  {
    title: 'Family Practice & Walk-in Care',
    slug: 'family-practice-walk-in-care',
    category: serviceCategories.familyPractice,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=85',
    summary: 'Comprehensive primary and walk-in care for patients and families.',
    details: 'Accessible care for preventive health, common illnesses, chronic conditions and everyday medical needs.',
    bestFor: ['Annual check-ups and preventative care', 'Diagnosis and treatment of common illnesses', 'Management of chronic conditions including diabetes, hypertension, asthma and high cholesterol', 'Children’s routine health visits', 'Mental health assessment, treatment and support', 'Minor skin procedures', 'Medication review and management', 'Driver’s Medicals'],
    whatToBring: ['Health card or ID', 'Medication list', 'Relevant records or forms'],
    visitFlow: ['Check in', 'Provider assessment', 'Treatment, prescription or follow-up plan'],
    faq: [{ question: 'Are walk-ins accepted?', answer: 'Yes. Live availability varies by clinic and is shown on each clinic page.' }]
  },
  {
    title: 'Internal Medicine Specialist Care',
    slug: 'internal-medicine-specialist-care',
    category: serviceCategories.internalMedicine,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=85',
    summary: 'Specialist assessment and coordinated care for complex adult medical conditions. A clinic referral is required.',
    details: 'Referring clinics can fax referrals to 403-538-6747.',
    bestFor: ['Comprehensive chronic-condition care, including diabetes, hypertension, asthma, heart failure, COPD and dyslipidemia', 'Cardiovascular risk assessment and risk reduction / stroke prevention clinics', 'Chronic kidney disease, proteinuria or hematuria', 'Cognitive impairment or suspected dementia', 'Bone health and osteoporosis', 'Coordinating care for multiple comorbidities', 'Hypermobility assessment', 'Medically unexplained symptoms', 'Unexplained myalgias and arthralgias, including fibromyalgia', 'Abnormal liver enzymes', 'Genital dermatology', 'Hepatitis B or Hepatitis C management'],
    whatToBring: ['Health card or ID', 'Medication list', 'Relevant test results and specialist records'],
    visitFlow: ['Clinic referral by fax', 'Specialist consultation', 'Care plan and follow-up'],
    faq: [{ question: 'How do I access Internal Medicine?', answer: 'Your clinic must send a referral by fax to 403-538-6747.' }]
  },
  {
    title: 'P-Shot (Priapus Shot)',
    slug: 'p-shot-priapus-shot',
    category: serviceCategories.mensHealth,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A PRP-based intimate wellness treatment designed to support male sexual function and confidence.',
    details:
      'The P-Shot uses platelet-rich plasma in a provider-guided treatment plan for patients seeking support with intimate wellness and performance concerns.',
    bestFor: ['Male intimate wellness', 'Patients exploring PRP options', 'Provider-guided sexual health support'],
    whatToBring: ['Photo ID', 'Medication list', 'Relevant health history or prior treatment notes'],
    visitFlow: ['Private consultation', 'Provider assessment and treatment planning', 'Procedure instructions and follow-up guidance'],
    faq: [
      {
        question: 'Is a consultation required?',
        answer:
          'Yes. A provider consultation helps confirm whether this treatment is appropriate for your needs and health history.'
      },
      {
        question: 'What is PRP?',
        answer:
          'PRP stands for platelet-rich plasma, which is prepared from a patient sample and used in regenerative treatment settings.'
      },
      {
        question: 'Will I receive aftercare instructions?',
        answer:
          'Yes. The clinic team will explain preparation, aftercare, and any follow-up recommendations.'
      },
      {
        question: 'Is this available at all ZOMAK locations?',
        answer:
          'No. This service is listed for Zomak Revitalize Medical Clinic.'
      }
    ]
  },
  {
    title: 'Bocox',
    slug: 'bocox',
    category: serviceCategories.mensHealth,
    image:
      'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A cosmetic treatment option focused on refinement, appearance, and a refreshed natural look.',
    details:
      'Bocox is offered as a provider-guided aesthetic service for patients interested in targeted cosmetic refinement.',
    bestFor: ['Aesthetic consultation', 'Natural-looking refresh', 'Patients exploring non-surgical options'],
    whatToBring: ['Photo ID', 'Medication and allergy list', 'Previous cosmetic treatment details if available'],
    visitFlow: ['Aesthetic consultation', 'Treatment area review', 'Personalized plan and aftercare instructions'],
    faq: [
      {
        question: 'Will the provider review my goals first?',
        answer:
          'Yes. The visit begins with a discussion of goals, health history, and whether the treatment is appropriate.'
      },
      {
        question: 'Is there downtime?',
        answer:
          'Downtime varies by patient and treatment plan. The provider will explain what to expect before you proceed.'
      },
      {
        question: 'Can this be combined with other services?',
        answer:
          'The provider can discuss whether combining treatments is appropriate during the consultation.'
      },
      {
        question: 'Where is this service available?',
        answer:
          'Bocox is listed as a Zomak Revitalize Medical Clinic service.'
      }
    ]
  },
  {
    title: 'Shockwave for Erectile Dysfunction',
    slug: 'shockwave-for-erectile-dysfunction',
    category: serviceCategories.mensHealth,
    image:
      'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A non-invasive treatment option for patients exploring support for erectile dysfunction.',
    details:
      'Shockwave therapy is offered as a provider-guided option intended to support blood flow and intimate wellness planning.',
    bestFor: ['Erectile dysfunction concerns', 'Non-invasive treatment planning', 'Private provider consultation'],
    whatToBring: ['Photo ID', 'Medication list', 'Relevant medical history and prior treatment details'],
    visitFlow: ['Private intake', 'Provider assessment', 'Treatment plan and follow-up recommendations'],
    faq: [
      {
        question: 'Is shockwave therapy non-invasive?',
        answer:
          'Yes. The clinic can explain the treatment process and whether it is appropriate after assessment.'
      },
      {
        question: 'How many visits are needed?',
        answer:
          'The number of visits depends on the treatment plan discussed with the provider.'
      },
      {
        question: 'Can I discuss medication history?',
        answer:
          'Yes. Bring a medication list and any prior treatment history so the provider has full context.'
      },
      {
        question: 'Is this service private?',
        answer:
          'Yes. Intimate wellness services are handled with privacy and discretion.'
      }
    ]
  },
  {
    title: 'Trimix',
    slug: 'trimix',
    category: serviceCategories.mensHealth,
    image:
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A personalized erectile dysfunction treatment option reviewed and guided by a provider.',
    details:
      'Trimix therapy is tailored to the patient and requires clinical review, education, and follow-up planning.',
    bestFor: ['Personalized ED treatment planning', 'Patients needing provider guidance', 'Follow-up based intimate wellness care'],
    whatToBring: ['Photo ID', 'Medication list', 'Relevant medical and treatment history'],
    visitFlow: ['Clinical consultation', 'Treatment suitability review', 'Instructions and follow-up plan'],
    faq: [
      {
        question: 'Is Trimix personalized?',
        answer:
          'Yes. A provider reviews patient needs and determines whether this option is appropriate.'
      },
      {
        question: 'Will instructions be provided?',
        answer:
          'Yes. Patients receive treatment instructions and follow-up guidance from the clinic team.'
      },
      {
        question: 'Do I need to disclose medications?',
        answer:
          'Yes. Medication and health history are important for provider review.'
      },
      {
        question: 'Where can I book Trimix?',
        answer:
          'Trimix is listed as a Zomak Revitalize Medical Clinic service.'
      }
    ]
  },
  {
    title: 'O-Shot (Orgasm Shot)',
    slug: 'o-shot-orgasm-shot',
    category: serviceCategories.aesthetics,
    image:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A PRP-based intimate wellness treatment designed to support female sensual wellness and satisfaction.',
    details:
      'The O-Shot uses platelet-rich plasma in a provider-guided care setting for patients seeking intimate wellness support.',
    bestFor: ['Female intimate wellness', 'Patients exploring PRP treatment', 'Private consultation and support'],
    whatToBring: ['Photo ID', 'Medication list', 'Relevant health or treatment history'],
    visitFlow: ['Private consultation', 'Provider assessment', 'Treatment and aftercare guidance'],
    faq: [
      {
        question: 'Is the consultation private?',
        answer:
          'Yes. The clinic handles intimate wellness concerns privately and respectfully.'
      },
      {
        question: 'What does PRP mean?',
        answer:
          'PRP means platelet-rich plasma, prepared from a patient sample for use in regenerative treatment settings.'
      },
      {
        question: 'Can I ask sensitive questions?',
        answer:
          'Yes. Patients are encouraged to ask questions before deciding whether to proceed.'
      },
      {
        question: 'Is this service at every clinic?',
        answer:
          'No. This service is listed for Zomak Revitalize Medical Clinic.'
      }
    ]
  },
  {
    title: 'PRP Treatment for Hair and Facials',
    slug: 'prp-hair-treatment-restoration',
    category: serviceCategories.aesthetics,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A PRP-based hair restoration treatment option for patients seeking support with hair thickness and growth.',
    details:
      'PRP hair treatment uses platelet-rich plasma in a clinical setting to support a personalized hair restoration plan.',
    bestFor: ['Hair restoration consultation', 'Thinning hair concerns', 'Patients exploring PRP options'],
    whatToBring: ['Photo ID', 'Medication list', 'Hair loss history or previous treatment details'],
    visitFlow: ['Hair and health history review', 'Provider assessment', 'Treatment plan and follow-up schedule'],
    faq: [
      {
        question: 'Is PRP hair treatment right for everyone?',
        answer:
          'Suitability depends on health history and hair concerns. A consultation helps determine next steps.'
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'The provider will discuss a recommended plan based on your goals and assessment.'
      },
      {
        question: 'Should I bring prior treatment details?',
        answer:
          'Yes. Prior treatments, medications, and timeline details help the provider understand your history.'
      },
      {
        question: 'Where is this offered?',
        answer:
      'PRP Hair Treatment is listed for Zomak Revitalize Medical Clinic.'
      }
    ]
  },
  {
    title: 'Vampire Breast Lift',
    slug: 'vampire-breast-lift',
    category: serviceCategories.womensHealth,
    image:
      'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A non-surgical PRP aesthetic treatment option focused on natural breast-area rejuvenation.',
    details:
      'The Vampire Breast Lift uses platelet-rich plasma in a non-surgical aesthetic treatment plan reviewed by a provider.',
    bestFor: ['Non-surgical aesthetic consultation', 'PRP rejuvenation options', 'Patients seeking natural-looking refinement'],
    whatToBring: ['Photo ID', 'Medication and allergy list', 'Relevant aesthetic or medical history'],
    visitFlow: ['Aesthetic consultation', 'Provider assessment', 'Treatment and aftercare guidance'],
    faq: [
      {
        question: 'Is this a surgical procedure?',
        answer:
          'No. This is listed as a non-surgical PRP aesthetic service.'
      },
      {
        question: 'Will results vary?',
        answer:
          'Yes. Results and suitability vary by patient, and the provider will discuss expectations during consultation.'
      },
      {
        question: 'Is aftercare required?',
        answer:
          'The clinic team will explain any aftercare and follow-up instructions before you leave.'
      },
      {
        question: 'Which clinic offers it?',
        answer:
          'The Vampire Breast Lift is listed for Zomak Revitalize Medical Clinic.'
      }
    ]
  },
  {
    title: 'Vampire Wing Lift',
    slug: 'vampire-wing-lift',
    category: serviceCategories.womensHealth,
    image:
      'https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=1600&q=85',
    summary:
      'A non-surgical PRP labia rejuvenation treatment focused on appearance and tissue fullness.',
    details:
      'The Vampire Wing Lift uses platelet-rich plasma for non-surgical outer vaginal skin-lip rejuvenation in a private clinical setting.',
    bestFor: ['Labia rejuvenation consultation', 'Non-surgical PRP treatment', 'Private intimate wellness support'],
    whatToBring: ['Photo ID', 'Medication and allergy list', 'Relevant health or treatment history'],
    visitFlow: ['Private consultation', 'Provider review and treatment planning', 'Procedure and aftercare instructions'],
    faq: [
      {
        question: 'Is this a surgical treatment?',
        answer:
          'No. This is listed as a non-surgical PRP labia rejuvenation service.'
      },
      {
        question: 'Will the visit be private?',
        answer:
          'Yes. Intimate wellness visits are handled with discretion and respect.'
      },
      {
        question: 'Can I ask questions before treatment?',
        answer:
          'Yes. The provider can review goals, expectations, and suitability before treatment.'
      },
      {
        question: 'Where is this service available?',
        answer:
          'The Vampire Wing Lift is listed for Zomak Revitalize Medical Clinic.'
      }
    ]
  },
  {
    title: 'Respite Care',
    slug: 'respite-care',
    category: serviceCategories.homeCare,
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=85',
    summary:
      'Flexible respite care that helps family caregivers rest while loved ones continue receiving compassionate support.',
    details:
      'Respite Care provides temporary in-home support so family caregivers can take time to rest, recharge, attend appointments, or manage other responsibilities.',
    bestFor: ['Family caregiver relief', 'Short-term care support', 'Ongoing in-home assistance coverage'],
    whatToBring: ['Care routine notes', 'Medication and mobility details', 'Emergency contact information'],
    visitFlow: ['Care needs review', 'Schedule and support planning', 'Compassionate in-home care visit'],
    faq: [
      {
        question: 'Who is respite care for?',
        answer:
          'Respite care is for families who need temporary support while a regular caregiver takes a break or handles other responsibilities.'
      },
      {
        question: 'Can respite care be flexible?',
        answer:
          'Yes. The care plan can be discussed around the family’s schedule and the client’s support needs.'
      },
      {
        question: 'What information should families share?',
        answer:
          'Share daily routines, mobility needs, medication details, preferences, and emergency contacts.'
      },
      {
        question: 'Where is this service offered?',
        answer:
          'Respite Care is listed for Zomak Zomak Home Care.'
      }
    ]
  },
  {
    title: 'Elderly Care',
    slug: 'elderly-care',
    category: serviceCategories.homeCare,
    image:
      'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=1600&q=85',
    summary:
      'Tailored senior care focused on independence, dignity, daily activity support, and quality of life.',
    details:
      'Elderly Care supports seniors with practical daily needs while helping them maintain comfort, dignity, routine, and independence at home.',
    bestFor: ['Seniors needing daily support', 'Independence-focused care', 'Families coordinating home care'],
    whatToBring: ['Daily routine notes', 'Medication and mobility details', 'Family contact information'],
    visitFlow: ['Care needs conversation', 'Personalized support plan', 'Ongoing daily activity assistance'],
    faq: [
      {
        question: 'What can elderly care include?',
        answer:
          'Support may include daily activity assistance, companionship, mobility support, routine help, and family coordination.'
      },
      {
        question: 'Is the plan personalized?',
        answer:
          'Yes. Care should be discussed around the client’s routines, preferences, abilities, and family goals.'
      },
      {
        question: 'Can families be involved?',
        answer:
          'Yes. Family input helps create a care plan that reflects the client’s needs and preferences.'
      },
      {
        question: 'Where is this service offered?',
        answer:
          'Elderly Care is listed for Zomak Zomak Home Care.'
      }
    ]
  },
  {
    title: 'Client Directed Homecare Invoicing Program',
    slug: 'client-directed-homecare-invoicing-program',
    category: serviceCategories.homeCare,
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85',
    summary:
      'Approved-provider support for Alberta Health Services’ Client-Directed Home Care Invoicing program.',
    details:
      'Zomak Home Care Agency is recognized as an approved provider under Alberta Health Services’ Client-Directed Home Care Invoicing program.',
    bestFor: ['AHS CDHCI program clients', 'Client-directed home care support', 'Families coordinating approved provider services'],
    whatToBring: ['Program approval details', 'Client care requirements', 'Contact and invoicing information'],
    visitFlow: ['Program eligibility review', 'Care and invoicing coordination', 'Approved provider support'],
    faq: [
      {
        question: 'What is CDHCI?',
        answer:
          'CDHCI refers to Alberta Health Services’ Client-Directed Home Care Invoicing program.'
      },
      {
        question: 'Is Zomak Home Care an approved provider?',
        answer:
          'Yes. Zomak Home Care Agency is described as an approved provider under the AHS CDHCI program.'
      },
      {
        question: 'What should clients prepare?',
        answer:
          'Bring program approval details, care requirements, contact information, and any invoicing instructions.'
      },
      {
        question: 'Where is this service offered?',
        answer:
          'This program support is listed for Zomak Zomak Home Care.'
      }
    ]
  },
  {
    title: 'Personal Care',
    slug: 'personal-care',
    category: serviceCategories.homeCare,
    image:
      'https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1600&q=85',
    summary:
      'Dignified support with personal hygiene and mobility to improve comfort, safety, and well-being.',
    details:
      'Personal Care provides respectful in-home assistance with hygiene, mobility, comfort, and daily routines based on the client’s needs.',
    bestFor: ['Personal hygiene support', 'Mobility assistance', 'Daily comfort and routine support'],
    whatToBring: ['Care preferences', 'Mobility and transfer notes', 'Medication or safety considerations'],
    visitFlow: ['Personal care needs review', 'Routine and safety planning', 'Respectful in-home support'],
    faq: [
      {
        question: 'What does personal care include?',
        answer:
          'Personal care may include hygiene support, mobility assistance, routine help, and comfort-focused daily support.'
      },
      {
        question: 'Is care provided respectfully?',
        answer:
          'Yes. The service is focused on dignity, comfort, privacy, and respectful support.'
      },
      {
        question: 'Can preferences be included?',
        answer:
          'Yes. Client preferences, routines, mobility needs, and safety considerations should be discussed during planning.'
      },
      {
        question: 'Where is this service offered?',
        answer:
          'Personal Care is listed for Zomak Zomak Home Care.'
      }
    ]
  },
  {
    title: 'Botox', slug: 'botox', category: serviceCategories.aesthetics,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85',
    summary: 'Personalized cosmetic Botox consultations and treatment by a qualified provider.',
    details: 'A provider reviews your goals, medical history and treatment areas before creating an individualized plan.',
    bestFor: ['Expression lines', 'Forehead and eye-area concerns', 'Personalized aesthetic goals'],
    whatToBring: ['Photo ID', 'Medication list', 'Questions and treatment goals'],
    visitFlow: ['Consultation', 'Treatment planning', 'Procedure and aftercare'],
    faq: [{ question: 'Is a consultation required?', answer: 'Yes. Your provider will assess suitability, expected results and aftercare before treatment.' }]
  },
  {
    title: 'Fillers', slug: 'fillers', category: serviceCategories.aesthetics,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=85',
    summary: 'Dermal filler treatments planned around your features and aesthetic goals.',
    details: 'A personalized consultation covers treatment areas, product options, expectations and aftercare.',
    bestFor: ['Facial volume', 'Contour and balance', 'Personalized aesthetic goals'],
    whatToBring: ['Photo ID', 'Medication list', 'Questions and treatment goals'],
    visitFlow: ['Consultation', 'Treatment planning', 'Procedure and aftercare'],
    faq: [{ question: 'How is treatment selected?', answer: 'Your provider recommends an approach after reviewing your anatomy, goals and medical history.' }]
  },
  {
    title: 'Testosterone Replacement', slug: 'testosterone-replacement', category: serviceCategories.mensHealth,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=85',
    summary: 'Assessment and provider-guided treatment for patients with symptoms of low testosterone.',
    details: 'Complete the confidential screening questionnaire before your consultation. Testing and treatment are determined by a qualified provider.',
    bestFor: ['Low-energy concerns', 'Changes in strength or mood', 'Clinically assessed low testosterone'],
    whatToBring: ['Photo ID', 'Medication list', 'Relevant laboratory results'],
    visitFlow: ['Screening questionnaire', 'Clinical assessment and testing', 'Personalized treatment and monitoring'],
    faq: [{ question: 'Does the questionnaire confirm eligibility?', answer: 'No. It supports your consultation; a provider must assess you and determine whether treatment is appropriate.' }]
  },
  {
    title: 'Panel Physician Appointments', slug: 'panel-physician-appointments', category: 'Centre St Services',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=85',
    summary: 'Panel physician appointments are offered exclusively at Zomak Medical Clinic - Centre St.',
    details: 'Bring the documents and identification issued for your immigration medical examination. Contact the Centre St clinic before your visit to confirm the current appointment requirements.',
    bestFor: ['Immigration medical examinations', 'Panel physician documentation', 'Patients directed to complete an immigration medical'],
    whatToBring: ['Valid government-issued identification or passport', 'Immigration medical form or IME/UMI number, if issued', 'Eyeglasses or contact lenses', 'Medication list and relevant medical records'],
    visitFlow: ['Confirm requirements with Centre St', 'Document review and examination', 'Testing and submission instructions'],
    faq: [{ question: 'Where are panel physician appointments offered?', answer: 'Only at Zomak Medical Clinic - Centre St. Call 403-906-0210 to confirm requirements and book.' }]
  }
]

export const stats = [
  { value: '7', label: 'clinic and care locations' },
  { value: '12k', label: 'patients prepared for future app workflows' },
  { value: '1', label: 'unified ZOMAK digital platform' }
]

export const testimonials = [
  {
    patientName: 'Patient review',
    quote:
      'The new site should make it easy for patients to choose a location, call, book, and get directions without confusion.',
    rating: 5
  }
]

export type Location = (typeof locations)[number]
export type Service = (typeof services)[number]
