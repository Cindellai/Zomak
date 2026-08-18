'use client'

import { useState } from 'react'
import Link from 'next/link'

const questions = [
  'How would you rate your energy level?',
  'Have you noticed a decrease in libido?',
  'Have you noticed reduced strength or physical endurance?',
  'Have you experienced low mood, irritability or difficulty concentrating?',
  'Do you regularly experience poor or disrupted sleep?',
  'Have laboratory tests ever shown low testosterone?'
]

const choices = ['No / normal', 'Mild', 'Moderate', 'Significant']

export function TestosteroneQuestionnaire() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const isComplete = questions.every((_, index) => Boolean(answers[index]))
  const assessmentScore = Object.values(answers).reduce(
    (total, answer) => total + Math.max(choices.indexOf(answer), 0),
    0
  )
  const shouldBookAssessment = assessmentScore >= 6

  return (
    <section className="bg-[#EAF7F6] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#2AA7A1]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#247F7A]">Private and confidential</span>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Testosterone assessment questionnaire</h2>
          <p className="mt-5 text-lg leading-8 text-[#333333]/68">Answer all six questions, then submit your screening information to continue.</p>
        </div>

        <form
          className="mt-12 overflow-hidden rounded-3xl border border-[#2AA7A1]/15 bg-white shadow-[0_24px_70px_rgba(42,167,161,0.12)]"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="grid gap-5 border-b border-[#333333]/10 p-6 sm:grid-cols-2 sm:p-10">
            <label className="grid gap-2 text-sm font-medium">Full name<input required name="name" className="rounded-xl border border-[#333333]/15 bg-[#F8FAFA] p-4 font-normal outline-none focus:border-[#2AA7A1] focus:ring-4 focus:ring-[#2AA7A1]/10" /></label>
            <label className="grid gap-2 text-sm font-medium">Phone number<input required name="phone" type="tel" className="rounded-xl border border-[#333333]/15 bg-[#F8FAFA] p-4 font-normal outline-none focus:border-[#2AA7A1] focus:ring-4 focus:ring-[#2AA7A1]/10" /></label>
          </div>

          <div className="space-y-5 p-6 sm:p-10">
            {questions.map((question, questionIndex) => (
              <fieldset className="rounded-2xl border border-[#333333]/10 bg-[#F8FAFA] p-5 sm:p-6" key={question}>
                <legend className="px-2 text-lg font-medium leading-7"><span className="mr-2 text-[#2AA7A1]">{questionIndex + 1}.</span>{question}</legend>
                <div className="mt-4 grid gap-2 sm:grid-cols-4">
                  {choices.map((choice) => (
                    <label className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm transition ${answers[questionIndex] === choice ? 'border-[#2AA7A1] bg-[#BFEAE7] text-[#333333]' : 'border-[#333333]/10 bg-white hover:border-[#2AA7A1]/50'}`} key={choice}>
                      <input
                        className="sr-only"
                        type="radio"
                        name={`question-${questionIndex + 1}`}
                        value={choice}
                        required
                        checked={answers[questionIndex] === choice}
                        onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: choice }))}
                      />
                      {choice}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          {submitted && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#333333]/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="screening-result-title">
              <div className={`relative w-full max-w-xl rounded-3xl p-7 shadow-2xl sm:p-10 ${shouldBookAssessment ? 'bg-[#E1F5F3]' : 'bg-white'}`}>
                <button type="button" onClick={() => setSubmitted(false)} className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white/75 text-xl text-[#333333] transition hover:bg-white" aria-label="Close result">&times;</button>
                <p className="pr-12 text-xs font-medium uppercase tracking-[0.16em] text-[#247F7A]">Screening complete</p>
                <h3 id="screening-result-title" className="mt-4 pr-8 font-serif text-4xl leading-tight text-[#333333]">
                  {shouldBookAssessment ? 'Your answers suggest booking an assessment.' : 'Consider speaking with a provider.'}
                </h3>
                <p className="mt-5 leading-7 text-[#333333]/70">
                  {shouldBookAssessment
                    ? 'Several of your responses indicate symptoms worth discussing with a qualified provider. We strongly encourage you to book an appointment to review your history and determine whether laboratory testing or treatment may be appropriate.'
                    : 'This screening does not show a strong symptom pattern, but it cannot rule out a medical concern. Book an appointment if symptoms persist, change, or affect your wellbeing.'}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#333333] px-7 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#2AA7A1]">
                    Book an appointment
                  </Link>
                  <button type="button" onClick={() => setSubmitted(false)} className="rounded-full border border-[#333333]/20 px-7 py-4 text-sm font-medium text-[#333333] transition hover:border-[#2AA7A1] hover:text-[#247F7A]">Review answers</button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-[#333333] p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <p className="text-sm text-white/65">{Object.keys(answers).length} of {questions.length} questions answered</p>
              <p className="mt-2 max-w-xl text-xs leading-5 text-white/50">This screening does not diagnose low testosterone or guarantee treatment. A qualified provider must review your history and appropriate laboratory testing.</p>
            </div>
            <button disabled={!isComplete} className="mt-6 w-full shrink-0 rounded-full bg-[#BFEAE7] px-8 py-4 text-sm font-medium text-[#333333] transition hover:bg-white disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/40 sm:mt-0 sm:w-auto">{submitted ? 'Update results' : 'Submit questionnaire'}</button>
          </div>
        </form>
      </div>
    </section>
  )
}
