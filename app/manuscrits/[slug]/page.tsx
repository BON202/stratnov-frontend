import Link from 'next/link'

// Page statique pour l'instant — sera dynamique avec l'API
export default function ManuscritDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/manuscrits" className="text-sm text-brume hover:text-or transition-colors mb-8 inline-block">
        ← Retour aux manuscrits
      </Link>

      <p className="text-xs tracking-widest text-or uppercase mb-2">Manuscrit</p>
      <h1 className="font-display text-4xl text-encre mb-4">{params.slug.replace(/-/g, ' ')}</h1>
      <div className="or-line"></div>

      <div className="mt-8 prose prose-lg max-w-none">
        <p className="text-brume leading-relaxed">
          Le contenu détaillé de ce manuscrit sera chargé depuis l'API.
          Connectez l'API backend pour afficher les informations complètes.
        </p>
      </div>
    </div>
  )
}
