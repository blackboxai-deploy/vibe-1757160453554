import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'ClicDesign - Vos visuels produits générés par l\'IA',
  description: 'Transformez vos photos produits en visuels marketing professionnels. Templates Apple & Glossier, génération instantanée, zéro compétence requise.',
  keywords: 'IA, visuels produits, marketing, e-commerce, Shopify, TikTok, Amazon, génération automatique',
  authors: [{ name: 'ClicDesign' }],
  openGraph: {
    title: 'ClicDesign - Vos visuels produits générés par l\'IA',
    description: 'Transformez vos photos produits en visuels marketing professionnels en un seul clic.',
    url: 'https://clicdesign.ai',
    siteName: 'ClicDesign',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClicDesign - Vos visuels produits générés par l\'IA',
    description: 'Transformez vos photos produits en visuels marketing professionnels en un seul clic.',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}