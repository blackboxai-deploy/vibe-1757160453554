'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "1. Uploadez votre photo",
      description: "Glissez-déposez votre photo produit ou sélectionnez-la depuis votre appareil",
      visual: "https://placehold.co/300x200?text=Upload+interface+moderne+avec+drag+drop+zone"
    },
    {
      title: "2. Choisissez votre template",
      description: "Sélectionnez parmi nos templates premium inspirés d'Apple, Glossier et autres grandes marques",
      visual: "https://placehold.co/300x200?text=Galerie+templates+design+premium+Apple+style"
    },
    {
      title: "3. Récupérez votre visuel",
      description: "En moins de 10 secondes, téléchargez votre visuel marketing professionnel",
      visual: "https://placehold.co/300x200?text=Resultat+final+visuel+marketing+professionnel"
    }
  ]

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour transformer vos photos produits en visuels marketing qui convertissent.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-[#6DD77F] text-[#111111] shadow-lg scale-105'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className={`${currentStep === index ? 'text-[#111111]' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Visual Demonstration */}
            <div className="bg-gradient-to-br from-[#081C3A] to-[#111111] rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <img 
                  src={steps[currentStep].visual} 
                  alt={steps[currentStep].title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-[#111111] mb-2">
                  {steps[currentStep].title}
                </h4>
                <div className="flex justify-center space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStep ? 'bg-[#6DD77F]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#081C3A] to-[#111111] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à voir la magie opérer ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Testez notre outil avec vos propres photos produits. 
              Première génération gratuite, sans inscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-8"
              >
                Essayer maintenant
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#111111] px-8"
              >
                Voir des exemples
              </Button>
            </div>
          </div>
        </div>

        {/* Process Animation */}
        <div className="mt-16">
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6DD77F] rounded-full flex items-center justify-center text-[#111111] font-bold text-xl mb-2">
                <span>📷</span>
              </div>
              <span className="text-sm text-gray-600">Upload</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 max-w-16"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#081C3A] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                <span>🎨</span>
              </div>
              <span className="text-sm text-gray-600">IA Magic</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 max-w-16"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6DD77F] rounded-full flex items-center justify-center text-[#111111] font-bold text-xl mb-2">
                <span>⬇️</span>
              </div>
              <span className="text-sm text-gray-600">Download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}