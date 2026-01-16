'use client'

import { useEffect, useRef, useState } from 'react'

export default function Reviews() {
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

  const reviews = [
    {
      name: 'Sarah van der Berg',
      business: 'Bakkerij De Zoete Liefde',
      text: 'Eindelijk een website die echt bij ons past! StoryBeyond heeft precies begrepen wat we wilden: simpel, duidelijk en professioneel. Onze klanten vinden nu makkelijk wat ze zoeken en we krijgen veel meer online boekingen. Super tevreden!',
    },
    {
      name: 'Mark Janssen',
      business: 'Janssen Installaties',
      text: 'Als zelfstandige had ik geen idee waar ik moest beginnen met een website. StoryBeyond heeft me geholpen om mijn verhaal helder te vertellen. Het resultaat? Meer opdrachten en een website waar ik trots op ben. Echt een aanrader!',
    },
  ]

  return (
    <section ref={sectionRef} className="section-divider px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display font-sans text-apple-gray-900 mb-3 md:mb-4">
            Wat klanten zeggen
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-apple-gray-600 max-w-3xl font-light">
            Dit zeggen ondernemers die met ons hebben gewerkt. Echte verhalen, geen marketingpraatjes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className={`bg-apple-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-apple-gray-200 hover:border-apple-blue-300 hover:shadow-apple transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 md:mb-6">
                <svg className="w-6 md:w-8 h-6 md:h-8 text-apple-blue-500 mb-3 md:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.68 1.214 5.203 1.214 5.203s-4.197 0-5.197-6.304zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.848-5 7.153 0 3.68 1.229 5.203 1.229 5.203s-4.225 0-5.225-6.304z"/>
                </svg>
              </div>
              <p className="text-base md:text-lg text-apple-gray-700 leading-relaxed font-light mb-4 md:mb-6">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-apple-gray-900 text-sm md:text-base">
                  {review.name}
                </p>
                <p className="text-xs md:text-sm text-apple-gray-600 font-light">
                  {review.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
