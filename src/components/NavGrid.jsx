import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home' },
  { to: '/status', label: 'Status Updates' },
  { to: '/documents', label: 'Document Library' },
  { to: '/media', label: 'Media Center' },
  { to: '/actions', label: 'Action Items' },
  { to: '/contacts', label: 'Contacts' },
  { to: '/submit', label: 'Submit Info' },
  { to: '/alerts', label: 'Join Alerts' },
]

function NavGrid() {
  return (
    <nav className="mx-auto max-w-5xl px-6 pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group relative overflow-hidden rounded-xl bg-emerald-900/90 p-4 sm:p-5 text-amber-50 shadow hover:shadow-lg transition-all duration-300 ring-1 ring-emerald-800/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 via-emerald-700/30 to-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-base sm:text-lg font-semibold tracking-tight">
                {item.label}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-amber-100/80">
                {item.to === '/' ? 'Welcome home' : 'Open'}
              </p>
            </div>
            <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-amber-400/20 blur-2xl group-hover:scale-125 transition-transform" />
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavGrid
