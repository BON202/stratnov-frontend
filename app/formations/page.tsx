import Link from 'next/link'

const formations = [
  {
    title: "Atelier d'écriture",
    duration: '4 semaines',
    format: 'En ligne',
    desc: 'Techniques fondamentales pour débuter ou approfondir sa pratique. Exercices hebdomadaires avec retours personnalisés.',
    points: ['Trouver sa voix', 'Travailler le rythme', 'Construire des scènes'],
  },
  {
    title: 'Parcours roman',
    duration: '12 semaines',
    format: 'En ligne',
    desc: 'Structurer et écrire un roman de A à Z. Du synopsis au premier jet complet.',
    points: ['Structure narrative', 'Personnages et arcs', 'Écriture du premier jet'],
  },
]

export default function FormationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-xs tracking-widest text-or uppercase mb-2">Apprendre</p>
      <h1 className="section-title">Formations</h1>
      <div className="or-line"></div>
      <p className="section-subtitle mt-4">Ateliers et parcours pour développer votre pratique</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {formations.map((f, i) => (
          <div key={i} className="card p-8">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-display text-2xl">{f.title}</h2>
            </div>
            <div className="flex gap-4 mb-4">
              <span className="text-xs px-3 py-1 border border-or-clair text-brume">{f.duration}</span>
              <span className="text-xs px-3 py-1 border border-or-clair text-brume">{f.format}</span>
            </div>
            <p className="text-brume text-sm leading-relaxed mb-6">{f.desc}</p>
            <ul className="space-y-2 mb-8">
              {f.points.map((p, j) => (
                <li key={j} className="text-sm text-encre flex items-start gap-2">
                  <span className="text-or mt-0.5">—</span> {p}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary inline-block text-sm">
              Demander des infos
            </Link>
          </div>
        ))}
      </div>

      <div className="border border-or-clair p-8 text-center">
        <h2 className="font-display text-2xl mb-3">Vous avez un projet spécifique ?</h2>
        <p className="text-brume text-sm mb-6">Je propose aussi des accompagnements sur mesure.</p>
        <Link href="/contact" className="btn-primary inline-block">Me contacter</Link>
      </div>
    </div>
  )
}
