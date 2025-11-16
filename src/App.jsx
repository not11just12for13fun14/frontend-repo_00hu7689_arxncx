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
              Explore updates, browse documents, share media, and coordinate action across our community. Use the buttons below to jump into any area.
            </p>
          </div>
        </section>

        <NavGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
