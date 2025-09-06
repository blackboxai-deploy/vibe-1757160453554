'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#111111]">
              ClicDesign
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
              Fonctionnalités
            </a>
            <a href="#demo" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
              Démo
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
              Tarifs
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
              À propos
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white">
              Connexion
            </Button>
            <Button className="bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold px-6">
              Essayez gratuitement
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-[#111111] transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-[#111111] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-[#111111] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
                Fonctionnalités
              </a>
              <a href="#demo" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
                Démo
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
                Tarifs
              </a>
              <a href="#about" className="text-gray-600 hover:text-[#111111] transition-colors font-medium">
                À propos
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white">
                  Connexion
                </Button>
                <Button className="w-full bg-[#6DD77F] hover:bg-[#5BC470] text-[#111111] font-semibold">
                  Essayez gratuitement
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}