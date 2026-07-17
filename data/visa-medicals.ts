export type VisaMedicalCountry = {
  country: string
  summary: string
  tests: string[]
  preparation: string[]
  during: string
  results: string
}

export const visaMedicalCountries: VisaMedicalCountry[] = [
  {
    country: 'Angola',
    summary:
      'Some Angolan visa types require a medical visa examination to confirm fitness for travel and work.',
    tests: ['Physical examination', 'HIV blood test', 'Chest X-ray'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.',
      'Stay hydrated before the appointment.'
    ],
    during:
      'A physician completes a physical examination and arranges the required chest X-ray.',
    results: 'Most results are available within 3 days.'
  },
  {
    country: 'Antigua',
    summary:
      'Antigua requires a medical examination and blood test to confirm good health for visa purposes.',
    tests: ['Physical examination', 'HIV blood test'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.',
      'Drink enough fluids before blood collection.'
    ],
    during: 'A healthcare professional completes the required exam and testing.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Bahrain',
    summary:
      'Bahrain work permit medicals include a broad set of blood, urine, stool, and imaging tests.',
    tests: [
      'Comprehensive medical examination',
      'HIV, hepatitis B, hepatitis C, and syphilis blood tests',
      'Urinalysis',
      'Chest X-ray',
      'Stool microscopy and ova, cysts, and parasites testing'
    ],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'The clinic reviews your medical history and collects blood and urine samples.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Barbados',
    summary:
      'Applicants who want to live and work in Barbados may need medical assessment to confirm health status.',
    tests: ['Syphilis blood test', 'Chest X-ray', 'Mid-stream urine test'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.',
      'Arrive with a full bladder for the urine test.',
      'Hepatitis A and typhoid vaccines may be recommended for travellers.'
    ],
    during:
      'The clinic collects a urine sample and completes a physical examination.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Brunei',
    summary:
      'Brunei work visa applications may require blood testing, urine testing, vaccination review, and chest imaging.',
    tests: [
      'HIV, hepatitis B, malaria parasite, and syphilis blood tests',
      'Pregnancy blood test for women',
      'Stool parasite test for food industry applicants',
      'Chest X-ray',
      'Typhoid, tetanus, and hepatitis B vaccination review'
    ],
    preparation: [
      'Bring your passport.',
      'Bring two passport-sized photographs.',
      'Hold urine for up to 4 hours before the urine test if possible.'
    ],
    during:
      'A licensed doctor reviews your medical history and completes the required chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Cayman Islands',
    summary:
      'The PDF describes testing for applicants seeking to work and live in the Cayman Islands.',
    tests: ['HIV blood test', 'Syphilis blood test', 'Chest X-ray'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.',
      'Take enough fluids before the appointment.'
    ],
    during: 'The clinic collects blood and urine samples.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'China',
    summary:
      'Applicants who want to live and work in the People’s Republic of China may need documentation of good health.',
    tests: [
      'Chest X-ray',
      'Resting ECG',
      'Syphilis, HIV, hepatitis B, and liver function blood tests'
    ],
    preparation: [
      'Bring your passport or driver’s license.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'The clinic reviews your medical history and completes chest X-ray and resting ECG requirements.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Dubai',
    summary:
      'Completing Dubai visa medical tests before travel may help speed up the visa process.',
    tests: [
      'HIV, syphilis, hepatitis B, hepatitis C, and liver function blood tests',
      'Chest X-ray',
      'Pregnancy blood test for women'
    ],
    preparation: [
      'Bring your passport or driver’s license.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'A licensed healthcare professional reviews your medical history and requests a urine sample.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Fiji Islands',
    summary:
      'The Fiji Islands embassy requires a recent medical assessment, completed within three months of the application.',
    tests: [
      'Urine testing for chlamydia and gonorrhea',
      'Glucose, HbA1C, HIV, hepatitis B, hepatitis C, and syphilis blood tests',
      'Chest X-ray'
    ],
    preparation: [
      'Bring your passport or driver’s license.',
      'Bring two passport-sized photographs.'
    ],
    during:
      'The doctor discusses your current health and medical history, collects a urine sample, and arranges a chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Greece',
    summary:
      'Greece has medical test requirements for extended stay D visas and some other visa types.',
    tests: [
      'Physical examination',
      'Chest X-ray to exclude pulmonary tuberculosis',
      'Syphilis blood test',
      'Drug abuse screen'
    ],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.'
    ],
    during: 'You provide a urine sample for the required screening.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Indonesia',
    summary:
      'Indonesian visa applications may require a comprehensive medical examination.',
    tests: ['Medical consultation', 'HIV blood test', 'Drug use blood test'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'A certified healthcare professional completes a full medical consultation.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Kuwait',
    summary:
      'Kuwait visa forms may require a medical exam with physical assessment, blood testing, and chest imaging.',
    tests: ['Physical examination', 'HIV blood test', 'Drug use blood test', 'Chest X-ray'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'The clinic completes a physical examination and chest X-ray in line with Kuwait visa form requirements.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Malaysia',
    summary:
      'Malaysian visa applications require a medical visa examination with a certified doctor.',
    tests: [
      'Urine test',
      'Beta-HCG, HIV, hepatitis B, hepatitis C, and syphilis blood tests',
      'Chest X-ray'
    ],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'A licensed doctor reviews your medical history, requests a urine sample, and arranges a chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Oman',
    summary:
      'Oman may require a medical visa examination with a licensed healthcare professional.',
    tests: [
      'Physical examination',
      'Chest X-ray',
      'HIV, hepatitis B, hepatitis C, and syphilis blood and urine testing',
      'Stool sample'
    ],
    preparation: [
      'Bring your passport or driver’s license.',
      'Bring one passport-sized photograph.'
    ],
    during: 'You provide a urine sample during the visit.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Papua New Guinea',
    summary:
      'Work visas for Papua New Guinea may require a medical visa test; vacationers may not require medicals.',
    tests: ['Urine test', 'HIV blood test', 'Chest X-ray'],
    preparation: ['Bring your passport.'],
    during:
      'A licensed healthcare professional requests a urine sample and arranges a chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Philippines',
    summary:
      'Philippines immigrant, student, and employment visas may require an extensive medical examination.',
    tests: [
      'Physical examination',
      'Syphilis blood test',
      'Chest X-ray to exclude pulmonary tuberculosis',
      'Stool test for ova, cysts, and parasites',
      'Urinalysis',
      'Malarial parasite test'
    ],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.',
      'Stay well hydrated before blood collection.'
    ],
    during: 'You provide a urine sample and complete the required chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Qatar',
    summary:
      'Qatar visa medical testing includes blood tests and a check-up, with further testing required on arrival.',
    tests: ['HIV, syphilis, hepatitis B, and hepatitis C blood tests', 'Chest X-ray for tuberculosis'],
    preparation: [
      'Bring your passport.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'A healthcare professional requests a urine sample and arranges a chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Saudi Arabia',
    summary:
      'Saudi Arabia work and residency visas include medical history review, urine testing, blood testing, and chest imaging.',
    tests: [
      'Urinalysis',
      'HIV, syphilis, hepatitis B, hepatitis C, and liver function blood tests',
      'Chest X-ray',
      'Pregnancy test for women'
    ],
    preparation: [
      'Bring your original passport or driver’s license.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'The clinic collects a urine sample, completes a chest X-ray, performs a general medical examination, and reviews medical history, vision, and hearing.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Seychelles',
    summary:
      'The clinic can support medical requirements for Seychelles work visa applications.',
    tests: [
      'Chest X-ray',
      'Stool test for salmonella typhi',
      'HIV, hepatitis B, syphilis, and full blood count blood tests'
    ],
    preparation: [
      'Bring your original passport or driver’s license.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'The doctor reviews your medical history, requests urine and stool samples, and arranges a chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'South Africa',
    summary:
      'South African residency and work medical visa examinations include imaging, blood testing, urine testing, and physical examination.',
    tests: ['Chest X-ray', 'Blood tests', 'Urinalysis', 'Physical examination'],
    preparation: [
      'Bring your original passport or driver’s license.',
      'Bring one passport-sized photograph.'
    ],
    during:
      'The doctor reviews your medical history, requests urine and stool samples, and arranges a chest X-ray.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'St. Kitts & Nevis',
    summary:
      'Work and travel visa applicants for St. Kitts & Nevis may need a general medical examination.',
    tests: ['Routine physical examination', 'HIV blood test'],
    preparation: [
      'Bring your driver’s license or passport.',
      'Bring one passport-sized photograph.',
      'Hepatitis A and typhoid vaccinations may be recommended before travel.'
    ],
    during:
      'A licensed healthcare professional conducts a routine physical examination.',
    results: 'Most results are ready within 3 days.'
  },
  {
    country: 'Vietnam',
    summary:
      'Some Vietnamese visas require a certificate of healthy examination completed by a licensed healthcare professional.',
    tests: [
      'Physical examination',
      'Eye and ear examination',
      'Urinalysis',
      'Hematology, liver enzyme, and glucose blood tests'
    ],
    preparation: [
      'Bring photo ID, ideally your passport or driver’s license.',
      'Bring one passport-sized photograph.',
      'Drink enough fluids for urinalysis.',
      'Fast for at least 6 hours before fasting glucose testing.'
    ],
    during: 'The doctor reviews your medical history.',
    results: 'Most results are ready within 3 days.'
  }
]

