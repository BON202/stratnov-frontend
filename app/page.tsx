import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-encre text-parchemin py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-or uppercase mb-6">Autrice</p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            L'écriture comme<br />pratique et transmission
          </h1>
          <div className="or-line"></div>
          <p className="text-lg text-parchemin text-opacity-80 mt-6 mb-10 max-w-xl leading-relaxed">
            Manuscrits, formations et réflexions sur la création littéraire.
            Un espace pour ceux qui écrivent et ceux qui veulent commencer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/manuscrits" className="btn-primary">
              Découvrir les manuscrits
            </Link>
            <Link href="/formations" className="border border-parchemin text-parchemin px-6 py-3 font-medium tracking-wide hover:bg-parchemin hover:text-encre transition-colors duration-200">
              Voir les formations
            </Link>
          </div>
        </div>
      </section>

      {/* Manuscrits récents */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest text-or uppercase mb-2">Travaux récents</p>
          <h2 className="section-title">Manuscrits</h2>
          <div className="or-line"></div>
          <p className="section-subtitle mt-4">Textes en cours et œuvres terminées</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Roman en cours', genre: 'Fiction contemporaine', status: 'En écriture' },
              { title: 'Recueil de nouvelles', genre: 'Nouvelles', status: 'Terminé' },
              { title: 'Essai littéraire', genre: 'Essai', status: 'En révision' },
            ].map((book, i) => (
              <div key={i} className="card p-6">
                <p className="text-xs tracking-widest text-or uppercase mb-3">{book.genre}</p>
                <h3 className="font-display text-xl mb-4">{book.title}</h3>
                <span className="text-xs px-3 py-1 bg-parchemin border border-or-clair text-brume">
                  {book.status}
                </span>
              </div>
            ))}
          </div>

          <Link href="/manuscrits" className="btn-outline inline-block">
            Tous les manuscrits →
          </Link>
        </div>
      </section>

      {/* Formations */}
      <section className="bg-encre text-parchemin py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest text-or uppercase mb-2">Apprendre à écrire</p>
          <h2 className="font-display text-3xl md:text-4xl mb-2">Formations</h2>
          <div className="or-line"></div>
          <p className="text-parchemin text-opacity-70 text-lg mt-4 mb-12">
            Ateliers et parcours pour développer votre pratique
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { title: 'Atelier d\'écriture', desc: 'Techniques de base pour débuter ou approfondir sa pratique.' },
              { title: 'Parcours roman', desc: 'Structurer et écrire un roman de A à Z en 12 semaines.' },
            ].map((f, i) => (
              <div key={i} className="border border-or border-opacity-30 p-6 hover:border-opacity-70 transition-colors">
                <h3 className="font-display text-xl text-or mb-3">{f.title}</h3>
                <p className="text-parchemin text-opacity-70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/formations" className="border border-parchemin text-parchemin px-6 py-3 font-medium tracking-wide hover:bg-parchemin hover:text-encre transition-colors duration-200 inline-block">
            Voir toutes les formations →
          </Link>
        </div>
      </section>

      {/* CTA contact */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title">Une question ?</h2>
          <div className="or-line mx-auto"></div>
          <p className="text-brume mt-4 mb-8 leading-relaxed">
            Pour toute demande, collaboration ou simplement pour échanger sur l'écriture.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  )
}
