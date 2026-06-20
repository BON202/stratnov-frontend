import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Stratnov — Isidore Bony',
    template: '%s | Stratnov',
  },
  description: 'Auteur, formateur et stratège. Livres, formations et ressources sur le leadership, le droit des affaires et le management.',
  openGraph: {
    siteName: 'Stratnov',
    locale: 'fr_FR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
