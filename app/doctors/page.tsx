export const metadata = {
  title: 'Doctors | ZOMAK Medical',
  description: 'Provider profiles and credentials for ZOMAK Medical.'
}

export default function DoctorsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-teal">Doctors</p>
        <h1 className="mt-3 text-4xl font-black text-ink">Provider profiles</h1>
        <p className="mt-5 text-lg leading-8 text-ink/70">
          This page is ready for Sanity-managed provider profiles, credentials, headshots,
          locations, and service relationships once ZOMAK provides final staff information.
        </p>
      </div>
    </section>
  )
}
