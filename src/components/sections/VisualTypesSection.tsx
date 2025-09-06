'use client'

import { useState } from 'react'

export function VisualTypesSection() {
  const [activeType, setActiveType] = useState(0)

  const visualTypes = [
    {
      title: "Packshot Produit",
      description: "Fonds propres, ombres portées subtiles, éclairage premium",
      features: ["Détourage automatique", "Ombres réalistes", "Fonds personnalisables"],
      visual: "https://placehold.co/400x300?text=Packshot+professionnel+avec+fond+blanc+et+ombres+douces",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-600"
    },
    {
      title: "Lifestyle",
      description: "Contextualisez vos produits dans des environnements inspirants",
      features: ["Scènes réalistes", "Ambiances premium", "Contextualisation smart"],
      visual: "https://placehold.co/400x300?text=Produit+dans+scene+lifestyle+moderne+avec+decor+elegant",
      color: "bg-green-50 border-green-200",
      textColor: "text-green-600"
    },
    {
      title: "Argumentaire",
      description: "Ajoutez textes, icônes et call-to-action pour booster vos conversions",
      features: ["Templates de vente", "CTAs optimisés", "Mise en page pro"],
      visual: "https://placehold.co/400x300?text=Template+argumentaire+avec+textes+et+call+to+action",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Choisissez le style qui vend
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois types de visuels pour maximiser vos conversions sur toutes vos plateformes de vente.
          </p>
        </div>

        {/* Visual Types Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {visualTypes.map((type, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeType === index
                  ? 'bg-[#6DD77F] text-[#111111] scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveType(index)}
            >
              {type.title}
            </button>
          ))}
        </div>

        {/* Active Visual Type Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Preview */}
          <div className="order-2 lg:order-1">
            <div className={`rounded-2xl border-2 ${visualTypes[activeType].color} p-8 transition-all duration-500`}>
              <img 
                src={visualTypes[activeType].visual}
                alt={visualTypes[activeType].title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-[#111111] mb-2">
                  Exemple {visualTypes[activeType].title}
                </h4>
                <p className="text-gray-600 text-sm">
                  Généré automatiquement par ClicDesign IA
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-[#111111] mb-4">
              {visualTypes[activeType].title}
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              {visualTypes[activeType].description}
            </p>
            
            <div className="space-y-4 mb-8">
              {visualTypes[activeType].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#6DD77F] rounded-full flex items-center justify-center">
                    <span className="text-[#111111] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#081C3A] hover:bg-[#111111] text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Essayer ce style →
            </button>
          </div>
        </div>

        {/* All Types Gallery */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#111111] text-center mb-12">
            Tous nos styles en un coup d'œil
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {visualTypes.map((type, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  activeType === index ? type.color : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveType(index)}
              >
                <img 
                  src={type.visual}
                  alt={type.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h4 className={`font-bold mb-2 ${activeType === index ? type.textColor : 'text-[#111111]'}`}>
                  {type.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}