'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Vos visuels produits générés par l'IA.
            <br />
            <span className="text-[#081C3A]">En un seul clic.</span>
          </h1>

          {/* Sub-headline */}
          <p className={`text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transformez vos photos produits en visuels marketing professionnels. 
            Templates Apple & Glossier, génération instantanée, zéro compétence requise.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-8 py-4 text-lg h-auto"
            >
              Essayez gratuitement
              <span className="ml-2">→</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8 py-4 text-lg h-auto"
            >
              Voir la démo
            </Button>
          </div>

          {/* Hero Visual */}
          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-gradient-to-r from-[#081C3A] to-[#111111] rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Before */}
                  <div className="text-center">
                    <h3 className="font-semibold text-[#111111] mb-4">Avant</h3>
                    <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                      <img 
                        src="https://placehold.co/200x200?text=Photo+produit+basique+sur+fond+blanc+simple" 
                        alt="Photo produit basique sur fond blanc simple"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="text-[#6DD77F] text-4xl font-bold">→</div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <h3 className="font-semibold text-[#111111] mb-4">Après</h3>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg aspect-square flex items-center justify-center">
                      <img 
                        src="https://placehold.co/200x200?text=Visuel+marketing+professionnel+style+Apple+avec+ombres+et+effets" 
                        alt="Visuel marketing professionnel style Apple avec ombres et effets"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-500 mb-4">Déjà utilisé par plus de 1000+ créateurs</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-600">Shopify</div>
              <div className="text-lg font-semibold text-gray-600">TikTok Shop</div>
              <div className="text-lg font-semibold text-gray-600">Amazon FBA</div>
              <div className="text-lg font-semibold text-gray-600">Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}