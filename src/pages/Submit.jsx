import React from 'react'
import PageLayout from '../components/PageLayout'

export default function Submit() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold text-emerald-900">Submit Info</h1>
        <p className="mt-2 text-emerald-900/80">Simple form layout for updates, files, or stories.</p>

        <form className="mt-8 space-y-4 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-emerald-900">Your Name</label>
            <input className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="rounded-lg bg-emerald-900 px-4 py-2 text-amber-50 shadow hover:shadow-md transition">Send</button>
            <button type="button" className="rounded-lg bg-amber-500/90 px-4 py-2 text-emerald-900 font-semibold shadow hover:shadow-md transition">Attach</button>
          </div>
        </form>
      </section>
    </PageLayout>
  )
}
