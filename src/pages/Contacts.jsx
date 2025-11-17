import React from 'react'
import PageLayout from '../components/PageLayout'

const people = [
  { name: 'Coordinator Name', role: 'Role / Area', note: 'Preferred contact method placeholder' },
  { name: 'Outreach Lead', role: 'Role / Area', note: 'Office hours placeholder' },
  { name: 'Media Liaison', role: 'Role / Area', note: 'Press contact placeholder' },
]

export default function Contacts() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold text-emerald-900">Contacts</h1>
        <p className="mt-2 text-emerald-900/80">Quick reference cards. We’ll drop in real names and links next.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {people.map((p, idx) => (
            <div key={idx} className="rounded-xl border border-emerald-900/10 bg-white/70 backdrop-blur p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900">{p.name}</h3>
              <p className="text-sm text-emerald-900/70">{p.role}</p>
              <p className="mt-2 text-emerald-900/80">{p.note}</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-emerald-900 px-3 py-1.5 text-sm text-amber-50 shadow">Email</button>
                <button className="rounded-lg bg-amber-500/90 px-3 py-1.5 text-sm text-emerald-900 font-semibold shadow">Call</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
