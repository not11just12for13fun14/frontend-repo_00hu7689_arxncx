import React from 'react'
import Header from './Header'
import Footer from './Footer'

function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-amber-50 to-emerald-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
