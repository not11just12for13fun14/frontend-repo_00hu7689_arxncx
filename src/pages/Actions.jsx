import React from 'react'
import PageLayout from '../components/PageLayout'

export default function Actions() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold text-emerald-900">Action Items</h1>
        <p className="mt-2 text-emerald-900/80">Ready for custom click-to-send email scripts and quick actions.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1,2,3,4].map((i) => (
            <button key={i} className="group relative overflow-hidden rounded-xl bg-emerald-900/90 p-5 text-left text-amber-50 shadow ring-1 ring-emerald-800/50 transition hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 via-emerald-700/30 to-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-lg font-semibold">Email Script {i}</h3>
                <p className="mt-1 text-amber-100/90">Pre-filled subject + body. Wire up mailto or API later.</p>
              </div>
              <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-amber-400/20 blur-2xl group-hover:scale-125 transition-transform" />
            </button>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
