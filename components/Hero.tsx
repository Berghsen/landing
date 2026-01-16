'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-apple-blue-400 rounded-full opacity-20 blur-3xl"
          style={{
            animation: 'blob 20s ease-in-out infinite',
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-apple-blue-500 rounded-full opacity-15 blur-3xl"
          style={{
            animation: 'blob 25s ease-in-out infinite reverse',
            animationDelay: '2s',
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-apple-blue-300 rounded-full opacity-20 blur-3xl"
          style={{
            animation: 'blob 18s ease-in-out infinite',
            animationDelay: '4s',
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-3 h-3 bg-apple-blue-500 rounded-full opacity-60"
          style={{
            animation: 'float 8s ease-in-out infinite',
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-2 h-2 bg-apple-blue-400 rounded-full opacity-50"
          style={{
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '1s',
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-apple-blue-600 rounded-full opacity-55"
          style={{
            animation: 'float 9s ease-in-out infinite',
            animationDelay: '2s',
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-apple-blue-500 rounded-full opacity-45"
          style={{
            animation: 'float 11s ease-in-out infinite',
            animationDelay: '3s',
          }}
        ></div>
      </div>

      <div className={`max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 w-full transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl">
          <h1 className="text-hero font-sans text-apple-gray-900 mb-6 md:mb-8 text-balance leading-tight fade-in-up">
            Laat zien wie u <span className="relative inline-block">
              <span className="text-apple-blue-700">écht</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-apple-blue-500 via-apple-blue-400 to-apple-blue-500 rounded-full animate-gradient"></span>
            </span> bent.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-apple-gray-600 max-w-3xl leading-relaxed mb-6 md:mb-8 font-light fade-in-delay-1">
            Wij maken websites en merkverhalen die écht bij jou passen. Geen templates, geen poespas. Gewoon helder en professioneel, precies zoals jij bent.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 fade-in-delay-2">
            <a 
              href="#contact" 
              className="px-6 md:px-8 py-3 md:py-4 bg-apple-gray-900 text-white rounded-full text-sm md:text-base font-medium hover:bg-apple-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
            >
              Neem contact op
            </a>
            <a 
              href="#work" 
              className="px-6 md:px-8 py-3 md:py-4 border border-apple-gray-300 text-apple-gray-900 rounded-full text-sm md:text-base font-medium hover:bg-apple-gray-50 transition-all duration-300 hover:scale-105 text-center"
            >
              Wat wij doen
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 fade-in-delay-3 z-10">
        <a href="#work" className="block">
          <svg className="w-5 h-5 text-apple-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
