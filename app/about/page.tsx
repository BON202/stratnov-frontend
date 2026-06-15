import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <section className="bg-encre text-parchemin py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-or uppercase mb-6">À propos</p>
          <h1 className="font-display text-5xl leading-tight mb-4">Isidore Bony</h1>
          <div className="or-line"></div>
          <p className="text-parchemin/70 text-lg mt-6 leading-relaxed max-w-xl">
            De la page à la pratique.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border-t-2 border-or pt-6">
              <p className="font-display text-2xl text-encre mb-2">Auteur</p>
              <p className="text-brume text-sm leading-relaxed">
                Publié sur le leadership, la gestion d'entreprise et la transformation personnelle. 5 ouvrages disponibles sur Amazon KDP.
              </p>
            </div>
            <div className="border-t-2 border-or pt-6">
              <p className="font-display text-2xl text-encre mb-2">Formateur</p>
              <p className="text-brume text-sm leading-relaxed">
                Enseignant-formateur auprès des principaux instituts. Plus de 15 ans d'expérience en formation et management.
              </p>
            </div>
            <div className="border-t-2 border-or pt-6">
              <p className="font-display text-2xl text-encre mb-2">Stratège</p>
              <p className="text-brume text-sm leading-relaxed">
                Consultant expert en droit des affaires, finance, gestion et stratégie d'entreprise.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-encre/80 leading-relaxed mb-12">
            <p>
              Expert multidisciplinaire avec plus de 15 années d'expérience en conseil, formation et management, j'interviens à l'intersection du droit des affaires, de la finance et de la gestion.
            </p>
            <p>
              Stratnov, c'est ce fil conducteur entre la réflexion et l'action. Les livres, les formations, le blog et la newsletter sont autant d'espaces pour partager ce que j'ai appris sur le terrain et en salle, avec des dirigeants, des étudiants et des organisations qui veulent penser autrement pour agir mieux.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/manuscrits" className="btn-primary">Voir les manuscrits</Link>
            <Link href="/formations" className="btn-outline">Découvrir les formations</Link>
            <Link href="/contact" className="btn-outline">Prendre contact</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
