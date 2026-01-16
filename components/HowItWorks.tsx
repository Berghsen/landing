'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      title: 'Wij praten',
      description: 'We bellen of spreken af. Je vertelt over je bedrijf, wat je wilt bereiken en waar je tegenaan loopt. Wij luisteren. Geen verkooppraatje, gewoon een eerlijk gesprek.',
    },
    {
      number: '02',
      title: 'Wij stellen voor',
      description: 'We maken een duidelijk voorstel. Wat we gaan doen, hoe lang het duurt en wat het kost. Alles op tafel, geen verrassingen achteraf. Je weet precies waar je aan toe bent.',
    },
    {
      number: '03',
      title: 'Wij werken samen',
      description: 'Tijdens het hele proces blijf je betrokken. We houden je op de hoogte, vragen je mening en zorgen dat je tevreden bent met het resultaat. Samen maken we het goed.',
    },
  ]

  return (
    <section ref={sectionRef} className="section-divider px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display font-sans text-apple-gray-900 mb-3 md:mb-4">
            Hoe dan?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-apple-gray-600 max-w-3xl font-light">
            Wij zijn StoryBeyond. Dat betekent dat wanneer je met ons werkt, je direct werkt met de mensen die het werk doen. Geen accountmanagers, geen overdrachten, geen verwarring.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`text-5xl sm:text-6xl md:text-7xl font-semibold mb-4 md:mb-6 leading-none ${
                index === 2 ? 'text-apple-blue-700' : 'text-apple-blue-200'
              }`}>
                {step.number}
              </div>
              <h3 className="text-heading font-sans text-apple-gray-900 mb-4 md:mb-5 group-hover:text-apple-blue-700 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-apple-gray-600 leading-relaxed font-light">
                {step.description}
              </p>
              
              {/* Animated connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-apple-gray-200 transform translate-x-8">
                  <div className="h-full w-0 bg-apple-blue-500 transition-all duration-1000 delay-500" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
