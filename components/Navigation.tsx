'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-apple-gray-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={closeMobileMenu}>
              <Image 
                src="/logo.png" 
                alt="StoryBeyond" 
                width={28}
                height={28}
                className="h-5 w-auto sm:h-6 md:h-7 transition-opacity group-hover:opacity-80"
                priority
              />
            </a>

            {/* Desktop Navigation Links */}
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
              className="md:hidden text-apple-gray-900 p-2 -mr-2 transition-colors hover:text-apple-blue-600"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-apple-lg md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-apple-gray-200">
            <Image 
              src="/logo.png" 
              alt="StoryBeyond" 
              width={28}
              height={28}
              className="h-6 w-auto"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 px-4 sm:px-6 py-8 overflow-y-auto">
            <ul className="space-y-1">
              <li>
                <a
                  href="/#work"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-apple-gray-900 rounded-lg hover:bg-apple-gray-50 hover:text-apple-blue-600 transition-colors"
                >
                  Wat wij doen
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-base font-medium text-apple-gray-900 rounded-lg hover:bg-apple-gray-50 hover:text-apple-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-center text-base font-medium text-white bg-apple-gray-900 rounded-full hover:bg-apple-blue-600 transition-colors"
                >
                  Neem contact op
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
