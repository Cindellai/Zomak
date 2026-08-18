'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function RegistrationChat() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return <div className="fixed bottom-6 right-6 z-50">
    {open && <div className="mb-3 w-[min(380px,calc(100vw-48px))] rounded-2xl border bg-white p-6 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div><p className="font-serif text-2xl">Patient registration</p><p className="mt-1 text-sm text-[#333333]/65">Share your details and our team will contact you to book.</p></div>
        <button aria-label="Close registration chat" onClick={() => setOpen(false)}><X size={20} /></button>
      </div>
      {sent ? <p className="mt-6 rounded-xl bg-[#BFEAE7]/50 p-4 text-sm">Thank you. Your information is ready for the clinic team to review.</p> :
        <form className="mt-5 grid gap-3" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
          <input aria-label="Full name" required placeholder="Full name" className="rounded-lg border p-3 text-sm" />
          <input aria-label="Phone number" required type="tel" placeholder="Phone number" className="rounded-lg border p-3 text-sm" />
          <input aria-label="Email" type="email" placeholder="Email (optional)" className="rounded-lg border p-3 text-sm" />
          <select aria-label="Preferred clinic" required className="rounded-lg border bg-white p-3 text-sm"><option value="">Preferred clinic</option><option>Griffin Road</option><option>Centre St</option><option>Northmount</option><option>Lewisburg</option><option>Fairview</option></select>
          <textarea aria-label="Appointment request" required rows={3} placeholder="What would you like to book?" className="rounded-lg border p-3 text-sm" />
          <button className="rounded-lg bg-[#333333] px-4 py-3 text-sm text-white hover:bg-[#2AA7A1]">Send registration request</button>
        </form>}
    </div>}
    <button onClick={() => setOpen((value) => !value)} className="ml-auto flex items-center gap-2 rounded-full bg-[#2AA7A1] px-5 py-4 text-sm font-medium text-white shadow-xl" aria-expanded={open}><MessageCircle size={20} /> Register / Book</button>
  </div>
}
