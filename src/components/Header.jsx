import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 border-b border-emerald-900/10 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-emerald-900 tracking-tight">
          Decade Camps United
        </Link>
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <Link to="/status" className="text-emerald-900/80 hover:text-emerald-900 transition-colors">Status</Link>
          <Link to="/documents" className="text-emerald-900/80 hover:text-emerald-900 transition-colors">Docs</Link>
          <Link to="/media" className="text-emerald-900/80 hover:text-emerald-900 transition-colors">Media</Link>
          <Link to="/actions" className="text-emerald-900/80 hover:text-emerald-900 transition-colors">Actions</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
