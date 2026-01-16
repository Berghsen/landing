'use client'

import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent === null) {
      setShowBanner(true)
    } else {
      setCookiesAccepted(consent === 'accepted')
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setCookiesAccepted(true)
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setCookiesAccepted(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-apple-gray-200 shadow-apple-lg">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-apple-gray-900 mb-2">
              Cookies
            </h3>
            <p className="text-sm text-apple-gray-600 leading-relaxed">
              We gebruiken cookies om uw ervaring op onze website te verbeteren. U kunt cookies accepteren of weigeren. Meer informatie vindt u in onze{' '}
              <a href="/cookies" className="text-apple-blue-700 hover:underline">
                cookieverklaring
              </a>.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="px-6 py-2.5 border border-apple-gray-300 text-apple-gray-900 rounded-full text-sm font-medium hover:bg-apple-gray-50 transition-colors"
            >
              Weigeren
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 bg-apple-gray-900 text-white rounded-full text-sm font-medium hover:bg-apple-gray-800 transition-colors"
            >
              Accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
