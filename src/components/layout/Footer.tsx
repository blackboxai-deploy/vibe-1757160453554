export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">ClicDesign</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformez vos photos produits en visuels marketing premium. 
              Génération par IA, templates inspirés d'Apple & Glossier, résultats garantis.
            </p>
            <div className="text-sm text-gray-500">
              ClicDesign – Designed to Sell
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Produit</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-white transition-colors">
                  Démo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="mailto:hello@clicdesign.ai" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
              aria-label="TikTok"
            >
              TikTok
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <span>© {currentYear} ClicDesign. Tous droits réservés.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="text-gray-400 text-sm mb-2">
            Des questions ? Nous sommes là pour vous aider
          </div>
          <a 
            href="mailto:hello@clicdesign.ai" 
            className="text-[#6DD77F] hover:text-[#5BC470] font-semibold transition-colors"
          >
            hello@clicdesign.ai
          </a>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#081C3A] to-[#111111] rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">
            Prêt à révolutionner vos visuels produits ?
          </h3>
          <button className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-8 py-3 rounded-full transition-colors">
            Commencer gratuitement
          </button>
        </div>
      </div>
    </footer>
  )
}