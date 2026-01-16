'use client'

import Navigation from './Navigation'
import Footer from './Footer'
import PageTransition from './PageTransition'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </>
  )
}
