'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      price: "0€",
      period: "Gratuit",
      description: "Parfait pour découvrir ClicDesign",
      features: [
        "3 visuels par mois",
        "1 template inclus",
        "Résolution standard",
        "Watermark ClicDesign",
        "Support email"
      ],
      cta: "Commencer gratuitement",
      popular: false,
      buttonStyle: "border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
    },
    {
      name: "Pro",
      price: isAnnual ? "15€" : "19€",
      originalPrice: isAnnual ? "228€" : null,
      period: isAnnual ? "180€/an" : "/mois",
      description: "Le choix des professionnels",
      features: [
        "30 visuels par mois",
        "Tous les templates",
        "Résolution HD",
        "Sans watermark",
        "Exports multiples formats",
        "Support prioritaire"
      ],
      cta: "Choisir Pro",
      popular: true,
      buttonStyle: "bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111]"
    },
    {
      name: "Unlimited",
      price: isAnnual ? "39€" : "49€",
      originalPrice: isAnnual ? "588€" : null,
      period: isAnnual ? "468€/an" : "/mois",
      description: "Pour les équipes et agences",
      features: [
        "Visuels illimités",
        "Accès anticipé nouveautés",
        "Fonds transparents",
        "API personnalisée",
        "Formations exclusives",
        "Account manager dédié"
      ],
      cta: "Choisir Unlimited",
      popular: false,
      buttonStyle: "border-[#081C3A] text-[#081C3A] hover:bg-[#081C3A] hover:text-white"
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Des tarifs transparents qui s'adaptent à vous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Commencez gratuitement, upgradez quand vous voulez. 
            Pas d'engagement, annulation en un clic.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isAnnual ? 'bg-white text-[#111111] shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensuel
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isAnnual ? 'bg-white text-[#111111] shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annuel
              <span className="ml-2 bg-[#6DD77F] text-[#111111] text-xs px-2 py-1 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-[#6DD77F] shadow-lg scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#6DD77F] text-[#111111] px-6 py-2 rounded-full text-sm font-bold">
                    Plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#111111] mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#111111]">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                  )}
                  <div className="text-gray-600">{plan.period}</div>
                </div>

                <Button 
                  className={`w-full h-12 font-semibold ${plan.buttonStyle}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-[#6DD77F] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#111111] text-xs font-bold">
                        <span>✓</span>
                      </span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#111111] text-center mb-8">
            Questions fréquentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#111111] mb-2">Puis-je changer de plan à tout moment ?</h4>
              <p className="text-gray-600">Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment depuis votre tableau de bord.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#111111] mb-2">Les visuels sont-ils vraiment générés par IA ?</h4>
              <p className="text-gray-600">100% ! Notre IA analyse votre photo produit et applique automatiquement les templates premium sélectionnés.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#111111] mb-2">Quels formats d'export sont disponibles ?</h4>
              <p className="text-gray-600">JPG, PNG (avec fond transparent sur Unlimited), et bientôt WebP. Toutes les résolutions HD disponibles.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#111111] mb-2">Y a-t-il une garantie de remboursement ?</h4>
              <p className="text-gray-600">Oui, nous offrons une garantie satisfait ou remboursé de 14 jours sur tous nos plans payants.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#081C3A] to-[#111111] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer vos photos produits ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Rejoignez les 1000+ créateurs qui font déjà confiance à ClicDesign
            </p>
            <Button 
              size="lg"
              className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-8"
            >
              Commencer gratuitement
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}