'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

type ServiceFaqProps = {
  faq: {
    question: string
    answer: string
  }[]
}

export function ServiceFaq({ faq }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#ffffff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1040px]">
        
        {/* Header Block */}
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex rounded-full bg-[#cbeaf0] px-3.5 py-1 text-[12px] font-medium tracking-tight text-[#3b7180]">
            FAQ
          </span>
          <h2 className="mt-5 text-[38px] font-normal leading-[1.1] tracking-tight text-[#112329] sm:text-[46px] lg:text-[52px]">
            In case you were wondering
          </h2>
          <p className="mt-4 text-[15px] tracking-normal text-[#447685]">
            Some of the most common things patients ask before booking this service.
          </p>
        </div>

        {/* Accordion List Block */}
        <div className="mt-16 divide-y divide-[#1F6175]/10 border-b border-[#1F6175]/10">
          {faq.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div className="py-7" key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="group flex w-full items-center justify-between gap-8 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  {/* Elegant Sans-serif Question Text Styling */}
                  <span className="text-[22px] font-light tracking-tight text-[#112329] sm:text-[26px] lg:text-[29px]">
                    {item.question}
                  </span>
                  
                  {/* Soft Minimalist Round Icon Container */}
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#cae8ef] text-[#4d8291] transition-transform duration-200 group-hover:bg-[#bcdfe7]">
                    {isOpen ? (
                      <Minus size={14} strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {/* Smooth Answer Box Flow */}
                {isOpen && (
                  <div className="mt-4 max-w-[820px] animate-fadeIn">
                    <p className="text-[15px] leading-[1.6] text-[#447685]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}