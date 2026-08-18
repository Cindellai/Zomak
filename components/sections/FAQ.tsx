'use client'

import { Minus, Plus, X } from 'lucide-react'
import { useState } from 'react'

const FAQS = [
  {
    question: 'How do I book an appointment at ZOMAK Medical Clinic?',
    answer:
      'You can book an appointment by contacting the clinic by phone, visiting the clinic website, or using the booking options provided on the ZOMAK platform.',
  },
  {
    question: 'Do ZOMAK clinics accept walk-in patients?',
    answer:
      'Some ZOMAK locations provide walk-in and same-day care depending on provider availability, clinic hours, and patient volume. We recommend calling ahead before visiting.',
  },
  {
    question: 'Which locations are part of the ZOMAK clinic network?',
    answer:
      'ZOMAK includes Zomak Medical Clinic - Griffin Road, Zomak Medical Clinic - Centre St, Zomak Medical Clinic - Lewisburg, Zomak Medical Clinic - Northmount, and Zomak Medical Clinic - Fairview.',
  },
  {
    question: 'What services are available?',
    answer:
      "Available services include family practice, pediatric care, internal medicine, women’s and men’s health, aesthetics, visa medical exams, medical piercings at Centre St., and driver’s medical exams.",
  },
  {
    question: 'Can I get directions to a specific clinic?',
    answer:
      'Yes. Each location includes a Get Directions option so patients can quickly open the clinic address in Google Maps.',
  },
  {
    question: 'How should I contact a clinic directly?',
    answer:
      'Each clinic location includes its direct phone number, fax number when available, website link, and directions so you can contact the right location quickly.',
  },
  {
    question: 'Do you offer follow-up support after a visit?',
    answer:
      'Yes. Patients can contact the clinic after their visit with questions, next steps, or follow-up needs related to their care.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start lg:gap-16">

          {/* Left — display heading only */}
          <div className="lg:sticky lg:top-28">
            <h2
              className="text-[42px] font-normal leading-tight text-[#333333] sm:text-[76px] lg:text-[92px]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              FAQ<em className="italic">s</em>
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="border-t border-[#333333]/15">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div key={faq.question} className="border-b border-[#333333]/15">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-5 py-6 text-left sm:gap-8"
                  >
                    <span className="text-[16px] font-normal leading-6 text-[#333333]">
                      {faq.question}
                    </span>

                    <span className="mt-0.5 shrink-0 text-[#333333]/60">
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7">
                      <p className="text-[14px] leading-7 text-[#333333]/55">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
