import type { Metadata } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: 'StoryBeyond',
  description: 'Helping small businesses and zelfstandigen with websites, brand clarity, and print basics. Local, honest, no agency fluff.',
  keywords: ['digital agency', 'web design', 'branding', 'small business', 'zelfstandigen'],
  authors: [{ name: 'StoryBeyond' }],
  openGraph: {
    title: 'StoryBeyond',
    description: 'Helping small businesses and zelfstandigen with websites, brand clarity, and print basics.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
      </head>
      <body className="font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
