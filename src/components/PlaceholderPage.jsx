import React from 'react'
import PageLayout from './PageLayout'
import { Link } from 'react-router-dom'

function PlaceholderPage({ title, description }) {
  return (
    <PageLayout>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-emerald-900/10 bg-white/70 backdrop-blur p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-emerald-900">{title}</h1>
          <p className="mt-3 text-emerald-900/80">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="inline-flex items-center rounded-lg bg-emerald-900 px-4 py-2 text-amber-50 shadow hover:shadow-md transition">
              Back Home
            </Link>
            <Link to="/alerts" className="inline-flex items-center rounded-lg bg-amber-500/90 px-4 py-2 text-emerald-900 font-semibold shadow hover:shadow-md transition">
              Join Alerts
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default PlaceholderPage
