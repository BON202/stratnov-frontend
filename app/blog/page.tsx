import Link from 'next/link'

const articles = [
  { slug: 'ecrire-sans-attendre', title: 'Écrire sans attendre l\'inspiration', date: '2026-05-10', category: 'Pratique', excerpt: 'L\'inspiration est un mythe commode. Ce qui fonctionne, c\'est l\'habitude.' },
  { slug: 'premier-jet', title: 'Le premier jet ne doit pas être bon', date: '2026-04-22', category: 'Technique', excerpt: 'Pourquoi s\'autoriser à écrire mal est la condition du progrès.' },
  { slug: 'lire-pour-ecrire', title: 'Lire comme on écrit', date: '2026-03-15', category: 'Lecture', excerpt: 'Lire activement, c\'est décortiquer les choix d\'un auteur pour enrichir les siens.' },
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs tracking-widest text-or uppercase mb-2">Réflexions</p>
      <h1 className="section-title">Blog</h1>
      <div className="or-line"></div>
      <p className="section-subtitle mt-4">Notes sur l'écriture, la lecture et la création</p>

      <div className="divide-y divide-or-clair">
        {articles.map(a => (
          <article key={a.slug} className="py-8 group">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs tracking-widest text-or uppercase">{a.category}</span>
              <span className="text-xs text-brume">{new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h2 className="font-display text-2xl mb-3 group-hover:text-rouille transition-colors">
              <Link href={`/blog/${a.slug}`}>{a.title}</Link>
            </h2>
            <p className="text-brume leading-relaxed mb-4">{a.excerpt}</p>
            <Link href={`/blog/${a.slug}`} className="text-sm text-or hover:text-rouille transition-colors">
              Lire l'article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
