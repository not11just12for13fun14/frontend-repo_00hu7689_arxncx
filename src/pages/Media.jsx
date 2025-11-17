import React from 'react'
import PageLayout from '../components/PageLayout'

export default function Media() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold text-emerald-900">Media Center</h1>
        <p className="mt-2 text-emerald-900/80">Drop in galleries and videos. Ready for quick populate.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl bg-white/70 backdrop-blur ring-1 ring-emerald-900/10 shadow-sm flex items-center justify-center text-emerald-900/50">
              Image {i+1}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1,2].map((i) => (
            <div key={i} className="aspect-video rounded-xl overflow-hidden ring-1 ring-emerald-900/10 bg-emerald-900/90 text-amber-50 flex items-center justify-center shadow">
              Video {i}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
