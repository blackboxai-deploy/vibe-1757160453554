export function TargetAudienceSection() {
  const audiences = [
    {
      title: "Marques Shopify",
      description: "Boostez vos conversions avec des visuels produits qui vendent",
      benefits: ["Templates e-commerce", "Formats optimisés", "A/B testing visuel"],
      gradient: "from-green-50 to-emerald-100",
      textColor: "text-emerald-700"
    },
    {
      title: "Vendeurs TikTok Live",
      description: "Créez des visuels accrocheurs pour vos lives shopping",
      benefits: ["Formats TikTok", "Visuels impactants", "Génération rapide"],
      gradient: "from-pink-50 to-rose-100",
      textColor: "text-rose-700"
    },
    {
      title: "Amazon FBA",
      description: "Respectez les guidelines Amazon avec des visuels conformes",
      benefits: ["Normes Amazon", "Fonds blancs", "Infographies produit"],
      gradient: "from-orange-50 to-amber-100",
      textColor: "text-amber-700"
    },
    {
      title: "Influenceurs & créateurs",
      description: "Monétisez votre audience avec des visuels professionnels",
      benefits: ["Contenus premium", "Personal branding", "Templates créatifs"],
      gradient: "from-purple-50 to-violet-100",
      textColor: "text-violet-700"
    },
    {
      title: "Studios photo no-code",
      description: "Proposez des services photo IA sans investissement matériel",
      benefits: ["Revenus passifs", "Zéro équipement", "Marge importante"],
      gradient: "from-blue-50 to-indigo-100",
      textColor: "text-indigo-700"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Pour qui est ClicDesign ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez vendeur en ligne, créateur de contenu ou entrepreneur, 
            ClicDesign s'adapte à vos besoins spécifiques.
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative">
                {/* Avatar/Icon */}
                <div className="w-16 h-16 bg-[#6DD77F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#111111] text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 transition-colors duration-500 text-[#111111] group-hover:text-emerald-700">
                  {audience.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-500">
                  {audience.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                      <div className="w-1.5 h-1.5 bg-[#6DD77F] rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-[#081C3A] to-[#111111] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ils ont boosté leurs ventes avec ClicDesign
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez comment nos utilisateurs ont transformé leurs performances de vente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-2">+127%</div>
              <div className="text-sm text-gray-300">Conversions moyennes</div>
              <div className="text-xs text-gray-400 mt-1">E-commerce Shopify</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-2">10s</div>
              <div className="text-sm text-gray-300">Temps de création</div>
              <div className="text-xs text-gray-400 mt-1">VS 2-3h en studio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6DD77F] mb-2">-89%</div>
              <div className="text-sm text-gray-300">Coûts de production</div>
              <div className="text-xs text-gray-400 mt-1">VS shooting photo</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl border border-gray-200 px-8 py-6 shadow-sm">
            <span className="text-gray-600 font-medium">
              Rejoignez plus de 1000+ créateurs qui font confiance à ClicDesign
            </span>
            <button className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap">
              Commencer gratuitement
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}