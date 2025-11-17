import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NavGrid from './components/NavGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-amber-50 to-emerald-50">
      <Header />

      <main className="flex-1">
        <Hero />

        <section className="mx-auto max-w-5xl px-6 pb-8">
          <div className="relative rounded-2xl border border-emerald-900/10 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm">
            <div className="absolute inset-x-0 -top-6 mx-auto h-12 w-12 rounded-full bg-amber-300/40 blur-xl" />
            <h2 className="relative text-xl sm:text-2xl font-semibold text-emerald-900">Welcome</h2>
            <p className="relative mt-2 text-emerald-900/80">
              Our families have gathered on Bayou Decade for generations — fishing, cooking, telling stories, and keeping the lights on through storms and seasons. After Hurricane Ida, many camps lost power and clarity. This space helps us organize, protect our traditions, and work together for reliable service.
            </p>

            <div className="relative mt-6 rounded-xl bg-emerald-900/90 text-amber-50 p-5 sm:p-6 shadow ring-1 ring-emerald-800/50">
              <h3 className="text-lg font-semibold">What you’ll find here</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-amber-100/90">
                <li>• Real-time updates</li>
                <li>• PSC filings and letters</li>
                <li>• Maps and exhibits</li>
                <li>• Photos/videos</li>
                <li>• Click-to-send email tools</li>
                <li>• Private alerts signup</li>
                <li>• Simple info submission</li>
              </ul>
              <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-amber-400/20 blur-2xl" />
            </div>
          </div>
        </section>

        <NavGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
