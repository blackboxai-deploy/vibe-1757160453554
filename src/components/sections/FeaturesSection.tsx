'use client'

export function FeaturesSection() {
  const features = [
    {
      title: "Templates inspirés d'Apple & Glossier",
      description: "Des designs premium qui convertissent, inspirés des plus grandes marques",
      gradient: "from-blue-50 to-indigo-100",
      textColor: "text-[#081C3A]"
    },
    {
      title: "Génération en un clic",
      description: "Uploadez votre photo, choisissez un template, et récupérez votre visuel en 10 secondes",
      gradient: "from-green-50 to-emerald-100",
      textColor: "text-emerald-700"
    },
    {
      title: "100% IA, 0 compétence requise",
      description: "Pas besoin de Photoshop ni de compétences en design. L'IA fait tout le travail",
      gradient: "from-purple-50 to-violet-100",
      textColor: "text-violet-700"
    },
    {
      title: "Optimisé pour Shopify, TikTok & Amazon",
      description: "Formats et dimensions parfaits pour toutes vos plateformes de vente",
      gradient: "from-orange-50 to-amber-100",
      textColor: "text-amber-700"
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Un studio créatif dans votre navigateur
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créez des visuels produits qui rivalisent avec les plus grandes marques, 
            sans équipe créative ni budget conséquent.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Feature Icon/Number */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#6DD77F] flex items-center justify-center text-[#111111] font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 group-hover:${feature.textColor} text-[#111111]`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Feature Visual */}
                <div className="mt-6 h-32 bg-gray-50 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                    <span className="text-sm">Aperçu visuel</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-8 py-4">
            <span className="text-gray-600">Prêt à transformer vos photos produits ?</span>
            <button className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-6 py-2 rounded-full transition-colors">
              Commencer →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}