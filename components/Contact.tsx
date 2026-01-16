'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with actual API call)
    try {
      // In a real implementation, you would send this to your backend/API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // You can replace this with actual form submission logic:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="section-divider px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display font-sans text-apple-gray-900 mb-3 md:mb-4">
            Neem contact op
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-apple-gray-600 max-w-3xl font-light">
            Laten we kennismaken. Bel, mail of stuur een bericht. Geen verplichtingen, gewoon een open gesprek over wat je nodig hebt.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6 md:space-y-10">
            <div className="group">
              <p className="text-apple-gray-500 mb-2 md:mb-3 text-xs md:text-sm font-medium uppercase tracking-wider">Email</p>
              <a 
                href="mailto:hello@storybeyond.io" 
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-apple-gray-900 hover:text-apple-blue-700 transition-all duration-300 inline-block hover:scale-105 break-all"
              >
                hello@storybeyond.io
              </a>
            </div>
            
            <div className="group">
              <p className="text-apple-gray-500 mb-2 md:mb-3 text-xs md:text-sm font-medium uppercase tracking-wider">Telefoon</p>
              <a 
                href="tel:+32490198049" 
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-apple-gray-900 hover:text-apple-blue-700 transition-all duration-300 inline-block hover:scale-105"
              >
                +32 490 19 80 49
              </a>
            </div>
          </div>
          
          <div className="bg-apple-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-apple-gray-200">
            <h3 className="text-heading font-sans text-apple-gray-900 mb-4 md:mb-6">Of stuur een bericht</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-800 text-xs md:text-sm font-medium">
                  Bedankt! We nemen zo snel mogelijk contact met je op.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 text-xs md:text-sm font-medium">
                  Er ging iets mis. Probeer het opnieuw of stuur direct een email.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-apple-gray-900 mb-1.5 md:mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-apple-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-apple-gray-900 mb-1.5 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-apple-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-apple-gray-900 mb-1.5 md:mb-2">
                  Telefoon <span className="text-apple-gray-400 font-normal">(optioneel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-apple-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-apple-gray-900 mb-1.5 md:mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-apple-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 md:px-8 py-3 md:py-4 bg-apple-gray-900 text-white rounded-full text-sm md:text-base font-medium hover:bg-apple-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Verzenden...' : 'Versturen'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
