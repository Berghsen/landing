import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import WhatIHelpWith from '@/components/WhatIHelpWith'
import HowItWorks from '@/components/HowItWorks'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <Hero />
        <WhatIHelpWith />
        <HowItWorks />
        <Reviews />
        <Contact />
      </main>
    </Layout>
  )
}
