'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-apple-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image 
              src="/logo.png" 
              alt="StoryBeyond" 
              width={28}
              height={28}
              className="h-5 w-auto sm:h-6 md:h-7 transition-opacity group-hover:opacity-80"
              priority
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/#work" 
              className="text-sm font-medium text-apple-gray-600 hover:text-apple-blue-600 transition-colors"
            >
              Wat wij doen
            </a>
            <a 
              href="/#contact" 
              className="text-sm font-medium text-apple-gray-600 hover:text-apple-blue-600 transition-colors"
            >
              Contact
            </a>
            <a 
              href="/#contact" 
              className="px-5 py-2 bg-apple-gray-900 text-white rounded-full text-sm font-medium hover:bg-apple-blue-600 transition-colors"
            >
              Neem contact op
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-apple-gray-900"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
