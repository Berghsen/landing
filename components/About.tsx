'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="section-divider px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-apple-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className={`mb-6 md:mb-8 lg:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display font-sans text-apple-gray-900 mb-3 md:mb-4">
            Over ons
          </h2>
        </div>
        
        <div className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-apple-gray-900 leading-relaxed font-light">
            Wij zijn StoryBeyond. Dat betekent dat wanneer je met ons werkt, je direct werkt met de mensen die het werk doen. Geen accountmanagers, geen overdrachten, geen verwarring.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 pt-6 md:pt-8">
            <div className="group">
              <h3 className="text-2xl font-semibold text-apple-gray-900 mb-4 group-hover:text-apple-blue-700 transition-colors duration-300">
                Lokaal & Eerlijk
              </h3>
              <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
                Wij zijn lokaal, wij zijn eerlijk en wij geloven in goed werk doen voor goede mensen. Wij werken met kleine bedrijven en zelfstandigen omdat wij begrijpen hoe het is om iets zelf te runnen.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-2xl font-semibold text-apple-gray-900 mb-4 group-hover:text-apple-blue-700 transition-colors duration-300">
                Geen flauwekul
              </h3>
              <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
                Geen bureau-onzin, geen marketingtaal, geen beloften die wij niet kunnen houden. Gewoon duidelijke communicatie, kwaliteitswerk en resultaten die ertoe doen voor jouw bedrijf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
