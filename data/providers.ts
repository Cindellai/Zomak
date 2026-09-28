export type Provider = {
  slug: string
  name: string
  credentials: string
  role: string
  location: string
  secondaryLocation?: string
  locations?: string[]
  image: string
  status: string
  description: string
}

export const providers: Provider[] = [
  {
    slug: 'fatima-yerima-bulama',
    name: 'Dr. Fatima Yerima Bulama',
    credentials: 'BSc (Human Anatomy), MBBS, MSc (Public Health), MRCGP, CCFP',
    role: 'Family Physician',
    location: 'Zomak Northmount',
    image: '/images/provider-fatima-yerima-bulama.jpg',
    status: 'Accepting New Patients and Walk-ins',
    description: `Dr. Fatima Yerima Bulama is a UK trained Family Physician with a unique journey into medicine. She first earned a BSc in Human Anatomy before returning to medical school to pursue her MBBS. Her passion for both individual and public health led her to complete an MSc in Public Health at Glasgow Caledonian University.

With training in Nigeria (MBBS) and the UK (MRCGP), Dr. Bulama blends clinical expertise with a holistic, patient-centered approach. She is passionate about chronic disease management, women’s health, and preventive care, bringing a culturally aware and compassionate touch to every patient she serves. Her work across Nigeria and the UK has shaped her belief that medicine is not just about treating illness but empowering people to take control of their health.

Dr. Fatima is accepting patients.`
  },
  {
    slug: 'kehinde-s-king-kaka',
    name: 'Dr. Kehinde S. King-Kaka',
    credentials: 'MBBS, MRCGP, CCFP',
    role: 'Family Physician',
    location: 'Zomak Northmount',
    image: '/images/provider-kehinde-king-kaka.jpg',
    status: 'Accepting New Patients and Walk-ins',
    description: `Dr. King-Kaka is a dedicated and compassionate family physician with over a decade of experience in providing high-quality medical care. Her expertise spans various fields, including acute and emergency care, catering to patients of all ages and genders.

Certifications:
- Royal College of General Practitioners (UK) — MRCGP
- College of Family Physicians of Canada — CCFP

She warmly welcomes new patients and looks forward to providing personalized, compassionate healthcare to individuals and families.`
  },
  {
    slug: 'chika-olijo',
    name: 'Dr. Chika Olijo',
    credentials: 'MD (Pediatric Specialist)',
    role: 'Pediatrician',
    location: 'Zomak Northmount',
    secondaryLocation: 'Zomak Fairview',
    locations: ['Zomak Northmount', 'Zomak Fairview'],
    image: '/images/provider-chika-olijo.jpg',
    status: 'Referral Required',
    description: `Dr. Olijo recently graduated from the University of Calgary Medical School in 2024 and was honored with the prestigious George Frieur Award. This award recognizes senior pediatric residency students who demonstrate not only clinical excellence but also a commitment to delivering care with warmth and compassion for both patients and their families.

In addition to this recognition, she received a supplementary prize for her professionalism, neatness, and dedication throughout her training.

Her journey in medicine began at the University of Nigeria in Enugu, followed by a residency at the University of Benin Teaching Hospital in Edo State. She then gained international experience at Macclesfield General Hospital in the UK before pursuing her certification as a pediatrician in Canada.

Outside of medicine, she is a proud wife and mother of four children.

Her dedication to warm, compassionate patient care aligns with the mission of ZOMAK Medical Clinic.

Family Physicians: We invite you to refer your pediatric patients to Dr. Olijo. For referral inquiries, please contact us at 403-250-2150 or fax 403-538-6747.

Parents: If you’re looking for a compassionate pediatrician for your child, encourage your family physician to refer you to Dr. Chika Olijo.

Dr. Olijo rotates between ZOMAK Northmount and ZOMAK Fairview. Pediatric referrals may be initiated through any ZOMAK clinic location.`
  },
  {
    slug: 'izuchukwu-ezeh',
    name: 'Dr. Izuchukwu Ezeh',
    credentials: 'MBBS, MRCP(UK), DGM, DipHIV, DipGUM, DFSRH, PGC MedEd',
    role: 'General Internist',
    location: 'All ZOMAK Locations',
    locations: ['Zomak Griffin Road', 'Zomak Centre Street', 'Zomak Lewisburg', 'Zomak Northmount', 'Zomak Fairview'],
    image: '/images/provider-izuchukwu-ezeh.jpg',
    status: 'Referral Required',
    description: `Dr. Izuchukwu Ezeh is a highly skilled and compassionate General Internist serving the community of Calgary and Cochrane. With a strong academic foundation and extensive training across the United Kingdom, Dr. Ezeh brings a thoughtful, evidence-based, and patient-centred approach to internal medicine.

He is a Member of the Royal College of Physicians (MRCP UK) and completed dual specialty residency training in General Internal Medicine and Genitourinary Medicine at the prestigious Manchester Royal Infirmary. His dedication to continuous learning led him to pursue additional training in Geriatric Medicine, earning a Diploma in Geriatric Medicine (DGM).

He is also deeply committed to medical education. He completed a fellowship in medical education and obtained a Postgraduate Certificate in Postgraduate Medical Education (PGC MedEd) from Edge Hill University in Ormskirk, England. His clinical expertise is further strengthened by diplomas in HIV Medicine (DipHIV) and Sexual Health (DipGUM, DFSRH).

Clinical Interests
The majority of Dr. Ezeh’s practice focuses on the diagnosis and management of complex and chronic medical conditions, including:
• Hypertension
• Diabetes
• Heart failure
• Multimorbidity in adult patients

With specialized training in both internal medicine and genitourinary medicine, he has particular expertise in:
• HIV care
• Hepatitis B & C
• Infectious diseases
• Genital dermatology

His background in geriatrics also informs his interest in:
• Osteoporosis management
• Falls risk assessment
• Comprehensive geriatric evaluations

Approach to Care
Known for his warm bedside manner, clear communication, and holistic approach, he aims to give patients the knowledge and support they need to navigate their health journey. His broad training supports thorough, integrated care for adults with both routine and complex medical concerns.

Dr. Ezeh is now accepting referrals for all Internal Medicine conditions. He rotates across all five ZOMAK locations; appointment location and timing are confirmed after referral review.`
  },
  {
    slug: 'oloko-abdulmujeeb-olugbenga',
    name: 'Dr. Oloko Abdulmujeeb Olugbenga',
    credentials: 'MBBS, MRCGP, LMCC, CCFP',
    role: 'Family Physician',
    location: 'Zomak Fairview',
    image: '/images/provider-oloko-abdulmujeeb-olugbenga.jpg',
    status: 'Accepting New Patients',
    description: `Dr. Oloko Abdulmujeeb Olugbenga (MBBS, MRCGP, LMCC, CCFP) Nigerian born British Family Physician.

He is a compassionate and dedicated family physician with over 15 years of clinical experience.

He obtained his primary medical degree in Nigeria, then worked in primary care in Saudi Arabia and developed consultation skills in Arabic. He later moved to the United Kingdom, where he worked in emergency medicine and completed general-practice training.

Before moving to Canada, he practised as a general practitioner in England and served as an Associate Specialist in Urgent Care. His experience includes emergency and acute medicine, haematology and oncology, urology, general surgery, trauma orthopaedics and adult psychiatry.

Warm, approachable and empathetic, he brings a holistic approach to patient care. Patients value his openness and commitment to helping them navigate both their health needs and the everyday challenges that affect their well-being.

He has additional training in minor office surgery and continues to pursue professional development in high-quality, evidence-based care.

He is fluent in English and Yoruba and conversational in Arabic, and is committed to creating a welcoming, culturally sensitive environment for diverse individuals and families.

Outside medicine, he enjoys being active in the community and values family life.

He is currently accepting patients.`
  },
  {
    slug: 'desmond-obih',
    name: 'Dr. Desmond Duncan Obih',
    credentials: 'MBBS, MRCGP, CCFP, MCFP',
    role: 'Family Physician',
    location: 'Zomak Centre Street',
    image: '/images/provider-desmond-obih.jpg',
    status: 'Accepting New Patients',
    description: `Dr. Desmond Duncan Obih is a UK qualified family physician. He has 12 years of uninterrupted clinical experience with an outstanding doctor-patient relationship. His health model belief is continuity of care and health promotion at the community level.

He completed his Bachelor of Medicine and Bachelor of Surgery at the University of Jos, Nigeria, and began residency training in acute internal medicine before moving to the United Kingdom to work in emergency and urgent care.

Due to his passion for continuity of care and follow up, he started residency training in family medicine in the UK, which he completed and worked as a General Practitioner (family physician) and Urgent Care physician. He has been a member of Royal College of General Practitioners (MRCGP) in the UK prior to relocating to Canada, where he obtained his practice permit and license from the College of Physicians & Surgeons of Alberta and certification with the College of Family Physicians Canada (CCFP). He is a Member of College of Family Physicians Canada (MCFP).

He is comfortable with minor surgery and joint injections and has an interest in mental health and counselling.

He is also a medical tutor who has helped train family-medicine residents in the UK. Outside medicine, he enjoys spending time with his son, playing outdoor games and running.

He is accepting new patients.`
  },
  {
    slug: 'ugonna-nwakuna',
    name: 'Dr. Ugonna Nwakuna',
    credentials: 'LMCC, CCFP, MPH',
    role: 'Family Physician',
    location: 'Zomak Centre Street',
    image: '/images/provider-ugonna-nwakuna.jpg',
    status: 'Accepting New Patients',
    description: `Dr. Ugonna Nwakuna trained as a family physician in East Midlands UK. He has 17 years experience in medical practice.

He holds a master’s degree in public health from the University of Wolverhampton and LMCC and CCFP certification in family medicine. He completed his undergraduate degree at the University of Benin and is committed to providing empathetic, current care to patients of all ages.

He is accepting patients.`
  },
  {
    slug: 'anderimam-waquong',
    name: 'Dr. Anderimam Waquong',
    credentials: 'MBBS, MRCGP, CCFP, MCFP',
    role: 'Family Physician',
    location: 'Zomak Griffin Road',
    image: '/images/provider-anderimam-waquong.jpg',
    status: 'Case-by-Case',
    description: `Dr. Anderimam Waquong is a full-time family physician and enjoys providing full-scope and ongoing comprehensive care for patients of all ages and backgrounds.

He believes that the most rewarding part of family medicine is the long-term relationships he establishes with his patients.

He has an interest in minor surgery and joint injections.

He completed his Bachelor of Medicine and Bachelor of Surgery (MBBS), followed by a diploma in anesthesiology and intensive care medicine.

He completed family-medicine residency in the United Kingdom and then worked there as a general practitioner. A member of the Royal College of General Practitioners (MRCGP), he later moved to Canada, where he obtained his Alberta practice permit and certification with the College of Family Physicians of Canada (CCFP and MCFP).

He has over 13 years of working experience.

When away from his clinic, Dr. Waquong spends his time with his young children and wife at home. Cycling, trying new cooking recipes, and travelling with family and friends.

Patient acceptance is assessed by the Griffin Road clinic on a case-by-case basis.`
  },
  {
    slug: 'ijeoma-ofoto',
    name: 'Dr. Ijeoma Ofoto',
    credentials: 'MBBS, LMCC, CCFP',
    role: 'Family Physician',
    location: 'Zomak Griffin Road',
    image: '/images/provider-ijeoma-ofoto.jpg',
    status: 'Case-by-Case',
    description: `With eight years of dedicated practice, Dr. Ijeoma Ofoto is a compassionate and detail-oriented family physician based in Cochrane, committed to delivering high-quality, patient-centered care.

She earned her medical degree from Odessa National Medical University in Ukraine and continued practising in Nigeria. She prioritizes strong, lasting patient relationships and personalized care.

She follows evidence-based medical protocols for the diagnosis and management of both chronic and acute illnesses. Additionally, she is experienced in minor surgical procedures and has a particular passion for women’s health.

Patient acceptance is assessed by the Griffin Road clinic on a case-by-case basis.`
  },
  {
    slug: 'rose-kalu',
    name: 'Dr. Rose Kalu',
    credentials: 'MD, MSc (Paediatric Sciences), MCFP',
    role: 'Family Physician',
    location: 'Zomak Griffin Road',
    image: '',
    status: 'Case-by-Case',
    description: `Dr. Rose Kalu is a highly motivated and dedicated family physician with over eight years of experience in providing care in both acute and chronic medical conditions, to all age groups within a multicultural population. She is very friendly with a warm disposition and is committed to providing high quality evidence based medical services. She believes in a holistic approach to the care of each patient.

She has an interest in women’s health and dermatology.

She graduated from Kharkov National Medical University in Ukraine, continued practising in Nigeria, earned an MSc in Paediatric Sciences from the University of Alberta and completed family-medicine residency in the United Kingdom.

For leisure, she enjoys reading, exploring nature and travelling with her husband and two children.

Patient acceptance is assessed by the Griffin Road clinic on a case-by-case basis.`
  },
  {
    slug: 'abimbola-uwaoluetan',
    name: 'Dr. Abimbola Uwaoluetan',
    credentials: 'MBBS, MRCGP, LMCC, CCFP',
    role: 'Family Physician (Dr. Bola)',
    location: 'Zomak Griffin Road',
    image: '/images/provider-abimbola-uwaoluetan.jpg',
    status: 'Accepting New Patients and Walk-ins',
    description: `Dr. Abimbola Uwaoluetan (Dr. BOLA) is a skilled and compassionate Medical Practitioner with over 12 years of continuous clinical experience. He is a UK trained Family Physician, with a background in Emergency Medicine, Urgent Care, and comprehensive primary care.

He earned his medical degree (MBBS) from the College of Health Sciences at Delta State University in Abraka, Nigeria. After his housemanship, he served as a Senior Medical Officer across acute and internal medicine, women’s health and child health.

He later worked extensively in emergency medicine in the United Kingdom before completing specialized family-medicine training and qualifying as a general practitioner and Member of the Royal College of General Practitioners (MRCGP).

His Canadian qualifications include Licentiate of the Medical Council of Canada (LMCC), membership in the College of Family Physicians of Canada (MCFP) and Certification in Family Medicine (CCFP).

He provides empathetic care to patients of all ages and backgrounds, with an interest in mental health and compassionate, patient-centred practice.

Outside medicine, he enjoys spending time with family and friends, playing music and engaging in wellness and mindfulness activities.

He is currently accepting new patients.`
  },
  {
    slug: 'barrow',
    name: 'Dr. John L. Barrow',
    credentials: 'MBBS, D.Obst. RCOG, BA Anthropology, CCFP',
    role: 'Family Physician',
    location: 'Zomak Centre Street',
    image: '/images/provider-john-barrow.jpg',
    status: 'Accepting New Patients',
    description: `For more than five decades, Dr. John Barrow has cared for individuals and families across Calgary. His long-standing commitment to community medicine, combined with extensive experience in family practice, seniors’ health and medical education, has made him a trusted physician to generations of patients.

His comprehensive family-medicine practice includes preventive care, chronic disease management, medication review and the complex healthcare needs of older adults. His background also includes obstetrics training and many years of caring for patients in hospitals, assisted-living residences, long-term care facilities and community group homes.

Beyond clinical practice, he has contributed to medical education in Calgary as a clinical lecturer with the University of Calgary’s Department of Family Medicine and has helped train and assess medical students, family-medicine residents and international medical graduates.

He believes excellent family medicine begins with knowing the patient, not simply treating the condition. His thoughtful approach considers each patient’s medical history, personal circumstances and long-term health goals.

Patients appreciate the depth of experience, continuity and sound clinical judgment he brings to every appointment.`
  },
  {
    slug: 'nwadike',
    name: 'Dr. Uche C. Nwadike',
    credentials: 'MBBS, MPH, LMCC, CCFP, CIME',
    role: 'Family Physician and IRCC Panel Physician',
    location: 'Zomak Centre Street',
    image: '/images/provider-uche-nwadike.jpg',
    status: 'Accepting New Patients',
    description: `Dr. Uche C. Nwadike is an accomplished family physician and healthcare leader with more than 20 years of clinical experience across Canada, the United Kingdom, the Caribbean and Nigeria. As Medical Director of ZOMAK Medical Group, he is committed to improving access to high-quality, compassionate and culturally responsive healthcare for individuals and families across Calgary and Cochrane.

He earned his medical degree from the University of Nigeria and holds a Master of Public Health with Distinction from the University of Hertfordshire in England. He is certified in family medicine by the College of Family Physicians of Canada and is a Certified Independent Medical Examiner through the American Board of Independent Medical Examiners.

His broad clinical background includes comprehensive family medicine, hospital care, rural and emergency medicine, mental health, addiction medicine, preventive care and chronic disease management. He has also held leadership roles focused on clinical quality, medical governance, healthcare transformation and the integration of mental health and addiction services into primary care.

A significant part of Dr. Nwadike’s practice is providing immigration and visa medical examinations. As an IRCC Panel Physician, he performs Canadian immigration medical examinations for permanent residence, temporary residence, work permits, study permits and other immigration applications. He also provides medical examinations for Saudi Arabia and several other countries, helping applicants navigate the medical requirements of their destination.

His approach is grounded in careful listening, respect and shared decision-making. He believes patients receive the best care when their physical, emotional and social needs are considered together.

He is accepting patients.`
  },
  {
    slug: 'opeyemi-familusi',
    name: 'Dr. Opeyemi Familusi',
    credentials: '',
    role: 'Family Physician',
    location: 'Zomak Centre Street',
    image: '',
    status: 'Accepting New Patients',
    description: 'Professional biography and credentials forthcoming.'
  },
  {
    slug: 'yetunde',
    name: 'Dr. Yetunde Agbeja',
    credentials: 'MBBS, MRCGP, CCFP',
    role: 'Family Physician',
    location: 'Zomak Lewisburg',
    image: '/images/provider-yetunde-agbeja.jpg',
    status: 'Accepting New Patients and Walk-ins',
    description: `Dr. Yetunde Agbeja is a compassionate and experienced family physician providing comprehensive, patient-centred medical care to individuals and families in Calgary.

Her clinical experience across Canada and the United Kingdom brings a broad international perspective to family medicine. She cares for patients of all ages and is committed to listening carefully, explaining concerns clearly and involving patients in decisions about their health.

Her practice covers acute and chronic health concerns, minor illnesses and injuries, mental health, medication management and preventive healthcare, including routine checkups, health screening, investigation and ongoing follow-up.

Her previous clinical training included family medicine, emergency medicine, ear, nose and throat care, palliative medicine and neurorehabilitation. This diverse experience has strengthened her ability to assess complex health concerns, recognize when urgent or specialized care is needed and coordinate appropriate referrals.

She believes excellent primary care is built on trust, clear communication and continuity, and strives to create a welcoming environment where every patient feels heard and supported.

She welcomes patients at ZOMAK Lewisburg for scheduled, same-day, in-person, walk-in and virtual appointments.`
  },
  {
    slug: 'ngozi',
    name: 'Dr. Ngozi Ohaka-Ibe',
    credentials: 'MBBS, MRCGP, CCFP',
    role: 'Family Physician',
    location: 'Zomak Lewisburg',
    image: '/images/provider-ngozi-ohaka-ibe.jpg',
    status: 'Accepting New Patients and Walk-ins',
    description: `Dr. Ngozi Ohaka-Ibe is a dedicated and experienced family physician providing comprehensive, patient-centred medical care to individuals and families in Calgary.

With more than 11 years of clinical experience in the United Kingdom and globally, she brings extensive knowledge and a broad perspective to family medicine. She cares for patients of all ages and takes time to listen, explain concerns clearly and involve patients in healthcare decisions.

Her practice covers acute and chronic health concerns, minor illnesses and injuries and preventive healthcare, including routine checkups, health screening and ongoing follow-up.

Her previous clinical training and experience include family medicine, pediatrics, emergency medicine, general medicine, psychiatry, cardiology and orthopedics. This diverse background has strengthened her ability to assess complex health concerns, manage medical emergencies and recognize when specialized care is required.

She provides compassionate, respectful and evidence-based care, working collaboratively with patients on personalized treatment plans in a welcoming environment.

She welcomes patients at ZOMAK Lewisburg for scheduled, same-day, in-person, walk-in and virtual appointments, subject to availability.`
  }
]

export const providerSeo: Record<string, { description: string }> = {
  nwadike: {
    description: 'Meet Dr. Uche C. Nwadike, an experienced Calgary family physician and IRCC Panel Physician providing Canadian, Saudi Arabian and international immigration medical examinations.'
  },
  yetunde: {
    description: 'Meet Dr. Yetunde Agbeja, a compassionate family physician at ZOMAK Medical Clinic Lewisburg in Calgary, providing comprehensive primary care, chronic disease management, preventive care and same-day appointments.'
  },
  ngozi: {
    description: 'Meet Dr. Ngozi Ohaka-Ibe, an experienced family physician at ZOMAK Medical Clinic Lewisburg in Calgary, providing comprehensive and patient-centred care.'
  }
}

export const providerClinicalInterests: Record<string, string[]> = {
  'fatima-yerima-bulama': ['Chronic disease management', "Women’s health", 'Preventive care'],
  'kehinde-s-king-kaka': ['Primary healthcare', 'Preventive medicine', 'Comprehensive family care'],
  'chika-olijo': ['Newborn and infant care', 'Growth and development', 'Acute and chronic pediatric illness'],
  'izuchukwu-ezeh': ['Complex and chronic conditions', 'Cardiovascular risk', 'Geriatric medicine', 'Infectious and genitourinary medicine'],
  'oloko-abdulmujeeb-olugbenga': ['Comprehensive family medicine', 'Urgent care', 'Minor office procedures'],
  'desmond-obih': ['Comprehensive family medicine', 'Minor surgery and joint injections', 'Mental health and counselling'],
  'ugonna-nwakuna': ['Comprehensive care for patients of all ages', 'Preventive and public health'],
  'anderimam-waquong': ['Full-scope family medicine', 'Minor surgery', 'Joint injections'],
  'ijeoma-ofoto': ['Acute and chronic illness', "Women’s health", 'Minor surgical procedures'],
  'rose-kalu': ['Acute and chronic medical care', "Women’s health", 'Dermatology'],
  'abimbola-uwaoluetan': ['Comprehensive primary care', 'Emergency and urgent care', 'Mental health'],
  barrow: ['Preventive care', 'Chronic disease management', 'Medication review', 'Seniors’ health'],
  nwadike: ['Comprehensive family medicine', 'Preventive and chronic disease care', 'IRCC and international visa medicals'],
  yetunde: ['Acute and chronic health concerns', 'Mental health', 'Medication management', 'Preventive care'],
  ngozi: ['Acute and chronic health concerns', 'Preventive healthcare', 'Pediatrics and family medicine']
}
