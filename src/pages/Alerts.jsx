import React from 'react'
import PageLayout from '../components/PageLayout'

export default function Alerts() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold text-emerald-900">Join Alerts</h1>
        <p className="mt-2 text-emerald-900/80">Private signup for timely updates and calls to action.</p>

        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-emerald-900">First Name</label>
            <input className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900">Last Name</label>
            <input className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-emerald-900">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-emerald-900">Camps or Areas</label>
            <input className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Optional" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-lg bg-emerald-900 px-4 py-2 text-amber-50 shadow hover:shadow-md transition">Join</button>
          </div>
        </form>
      </section>
    </PageLayout>
  )
}
