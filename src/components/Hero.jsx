import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center px-6 pt-20 pb-12 sm:pt-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-900 drop-shadow-sm">
          Protecting our camps, our traditions, and our right to reliable power.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-emerald-800/90">
          Decade Camps United is a community of camp owners working together to stay informed, stay organized, and speak with one voice about the future of Bayou Decade.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-4 py-2 shadow ring-1 ring-emerald-900/10">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-sm font-medium text-emerald-900">Community is live</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
