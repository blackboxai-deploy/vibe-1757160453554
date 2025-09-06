'use client'

import { useState, useEffect } from 'react'

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Fondatrice, Glossy Beauty",
      platform: "Shopify",
      content: "ClicDesign a révolutionné ma façon de créer du contenu. En 10 secondes, j'ai des visuels qui rivaliseraient avec ceux d'une agence parisienne à 5000€.",
      results: "+89% de conversions",
      avatar: "https://placehold.co/80x80?text=Marie+portrait+professionnel+femme+souriante"
    },
    {
      name: "Thomas Martin",
      role: "Seller Amazon FBA",
      platform: "Amazon",
      content: "Mes listings Amazon ont complètement décollé depuis que j'utilise ClicDesign. Les visuels respectent parfaitement les guidelines Amazon tout en étant premium.",
      results: "+156% de ventes",
      avatar: "https://placehold.co/80x80?text=Thomas+portrait+homme+entrepreneur+confiant"
    },
    {
      name: "Léa Rousseau",
      role: "Créatrice TikTok, 500K followers",
      platform: "TikTok",
      content: "Grâce aux templates ClicDesign, mes lives shopping cartonnent ! Les visuels s'affichent parfaitement et mes viewers achètent 3x plus qu'avant.",
      results: "+267% d'engagement",
      avatar: "https://placehold.co/80x80?text=Lea+portrait+creatrice+jeune+dynamique"
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 1000+ créateurs nous font confiance pour transformer leurs photos produits.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-12 border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-[#6DD77F] text-6xl mb-4">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-[#111111] leading-relaxed mb-8">
                {testimonials[currentTestimonial].content}
              </blockquote>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={`Portrait de ${testimonials[currentTestimonial].name}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#111111]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-[#081C3A] font-semibold">
                    {testimonials[currentTestimonial].platform}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-[#6DD77F] rounded-full px-6 py-3">
                <span className="text-[#111111] font-bold">
                  {testimonials[currentTestimonial].results}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-[#6DD77F] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index === currentTestimonial 
                  ? 'border-[#6DD77F] shadow-md' 
                  : 'border-gray-200'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={`Portrait de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-[#111111] text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {testimonial.content}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#081C3A] font-semibold">
                  {testimonial.platform}
                </span>
                <span className="text-xs bg-[#6DD77F] text-[#111111] px-3 py-1 rounded-full font-bold">
                  {testimonial.results}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="bg-gradient-to-r from-[#081C3A] to-[#111111] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              ClicDesign en chiffres
            </h3>
            <p className="text-gray-300">
              La confiance de nos utilisateurs se mesure en résultats concrets
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-1">1000+</div>
              <div className="text-sm text-gray-300">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-1">50K+</div>
              <div className="text-sm text-gray-300">Visuels générés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-1">4.9/5</div>
              <div className="text-sm text-gray-300">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-1">10s</div>
              <div className="text-sm text-gray-300">Temps moyen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}