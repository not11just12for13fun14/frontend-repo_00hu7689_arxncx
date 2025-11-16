import React from 'react'

function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-emerald-900/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-emerald-900/80">© {new Date().getFullYear()} Decade Camps United</p>
        <p className="text-sm text-emerald-900/70">Together across seasons</p>
      </div>
    </footer>
  )
}

export default Footer
