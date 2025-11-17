import React from 'react'
import PageLayout from '../components/PageLayout'

export default function Status() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-emerald-900">Status Updates</h1>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-sm text-emerald-900 ring-1 ring-emerald-900/10">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            Live feed ready
          </div>
        </div>

        <div className="space-y-4">
          {[1,2,3].map((i) => (
            <div key={i} className="relative rounded-xl border border-emerald-900/10 bg-white/70 backdrop-blur p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-sm text-emerald-900/60">2024-00-00 • Placeholder</p>
                  <h3 className="mt-1 text-lg font-semibold text-emerald-900">Update headline</h3>
                  <p className="mt-1 text-emerald-900/80">Short description for a timeline-style update. Replace with live content soon.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
