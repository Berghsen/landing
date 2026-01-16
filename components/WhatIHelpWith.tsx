'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhatIHelpWith() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services = [
    {
      title: 'Websites',
      description: 'We bouwen websites die écht werken. Geen templates, geen standaard oplossingen. Gewoon een site die past bij wie jij bent en wat je doet. Mobiel, snel, en precies zoals jij het wilt.',
      icon: '🌐',
    },
    {
      title: 'Merk & Verhaal',
      description: 'Samen ontdekken we wat jouw bedrijf uniek maakt. En dan zorgen we dat je dat ook goed kunt vertellen. Aan je klanten, op je website, in je communicatie. Helder, eerlijk, zonder poespas.',
      icon: '✨',
    },
    {
      title: 'Print & Basics',
      description: 'Visitekaartjes, flyers, simpel drukwerk. Soms heb je gewoon iets tastbaars nodig. Wij maken het netjes, professioneel en passend bij jouw merk.',
      icon: '📄',
    },
  ]

  return (
    <section ref={sectionRef} id="work" className="section-divider px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-apple-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display font-sans text-apple-gray-900 mb-3 md:mb-4">
            Wat wij doen
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-apple-gray-600 max-w-3xl font-light">
            Dit is wat we doen. Geen grote beloften, gewoon goed werk.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 md:p-8 lg:p-10 rounded-2xl border border-apple-gray-200 hover:border-apple-blue-300 hover:shadow-apple-lg transition-all duration-500 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl mb-4 md:mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-heading font-sans text-apple-gray-900 mb-3 md:mb-4 group-hover:text-apple-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-apple-gray-600 leading-relaxed font-light">
                {service.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-4 md:mt-6 h-0.5 w-0 bg-apple-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
