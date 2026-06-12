import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <section className="bg-encre text-parchemin py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-or uppercase mb-6">À propos</p>
          <h1 className="font-display text-5xl leading-tight mb-4">Stratnov</h1>
          <div className="or-line"></div>
          <p className="text-parchemin text-opacity-80 text-lg mt-6 leading-relaxed max-w-xl">
            Autrice. J'écris, je transmets, je réfléchis à la création littéraire comme pratique quotidienne.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">La démarche</h2>
          <div className="or-line"></div>
          <div className="mt-8 space-y-6 text-brume leading-relaxed">
            <p>
              L'écriture n'est pas un don. C'est une pratique. Elle s'apprend, se travaille, se questionne.
              Ce site est le reflet de ce travail : manuscrits en cours, textes terminés, formations pour ceux qui veulent s'y mettre.
            </p>
            <p>
              Les formations que je propose viennent de ce que j'ai appris en écrivant, en lisant, en recommençant.
              Pas de méthode universelle — des outils, des expériences, des retours concrets.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/manuscrits" className="btn-primary">Voir les manuscrits</Link>
            <Link href="/contact" className="btn-outline">Me contacter</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
