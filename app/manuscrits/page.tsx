'use client'

import { useState } from 'react'

type Filtre = 'tous' | 'trilogie' | 'roman' | 'essai'

const MANUSCRITS = [
  {
    id: 'tome1',
    filtre: 'trilogie' as Filtre,
    genre: 'Roman initiatique · Littérature engagée',
    badge: 'Tome I — Trilogie',
    titre: 'Les Miroirs Brisés',
    collection: "L'Éveil d'Anathine AYA",
    pages: 156,
    statut: 'Disponible',
    spineColor: 'linear-gradient(160deg,#1a3a5c,#2d6a9f)',
    frontColor: 'linear-gradient(160deg,#1a3a5c,#2d6a9f)',
    extrait: '« Chaque acte de violence est un caillou lancé sur la glace des cœurs. Mais chaque geste de solidarité est une source de chaleur. »',
    resume: "À Alkebulan, Anathine perçoit ce que les adultes ignorent : le monde est double. Entre lumière dorée des matins partagés et miroirs brisés des peurs héritées, elle tisse le Réseau des Cailloux de Lumière.",
    image: '/anathine-trilogie.png',
    amazon: 'https://www.amazon.com/dp/XXXXXXXXXX',
  },
  {
    id: 'tome2',
    filtre: 'trilogie' as Filtre,
    genre: 'Roman initiatique · Littérature engagée',
    badge: 'Tome II — Trilogie',
    titre: 'Les Miroirs en Reconquête',
    collection: "L'Éveil d'Anathine AYA",
    pages: 222,
    statut: 'Disponible',
    spineColor: 'linear-gradient(160deg,#2c1a0e,#6b3a1a)',
    frontColor: 'linear-gradient(160deg,#2c1a0e,#6b3a1a)',
    extrait: '« On ne répare pas le monde, Lior. On répare un morceau à la fois. Et on recommence. »',
    resume: "Dix ans après la disparition d'Anathine, ses enfants Lior et Umia découvrent ses carnets. Face aux divisions qui déchirent leur communauté, ils doivent choisir : reproduire les méthodes du passé ou en inventer de nouvelles.",
    image: '/anathine-tome2.png',
    amazon: 'https://www.amazon.com/dp/XXXXXXXXXX',
  },
  {
    id: 'tome3',
    filtre: 'trilogie' as Filtre,
    genre: 'Roman initiatique · Littérature engagée',
    badge: 'Tome III — Trilogie',
    titre: 'Les Miroirs et les Horizons',
    collection: "L'Éveil d'Anathine AYA",
    pages: 250,
    statut: 'Disponible',
    spineColor: 'linear-gradient(160deg,#3d1a0a,#8b3a10)',
    frontColor: 'linear-gradient(160deg,#3d1a0a,#8b3a10)',
    extrait: '« Pas de "mais". Juste une question : quand tu écris ça, tu as pensé à ce qui se passe quand deux familles ont des besoins contradictoires ? »',
    resume: "Lior et Umia ont hérité du rêve d'Anathine. Mais le mouvement grandit, les dilemmes aussi. Faut-il s'institutionnaliser pour survivre, au risque de trahir l'esprit initial ?",
    image: '/anathine-tome3.png',
    amazon: 'https://www.amazon.com/dp/XXXXXXXXXX',
  },
  {
    id: 'choisir',
    filtre: 'roman' as Filtre,
    genre: 'Littérature romantique',
    badge: 'Roman',
    titre: 'Choisir de rester',
    collection: '',
    pages: 149,
    statut: 'Disponible',
    spineColor: 'linear-gradient(160deg,#2c3e50,#4a6741)',
    frontColor: 'linear-gradient(160deg,#2c3e50,#4a6741)',
    extrait: '« La lettre était toujours là, intacte, comme leur amour malgré les tempêtes. »',
    resume: "Et si la plus grande preuve d'amour était de rester ? Clara et Georges ont construit leur vie sur des certitudes. Quand l'horloge s'arrête et que les non-dits s'accumulent, une question les hante.",
    image: '/choisir-de-rester.png',
    amazon: 'https://www.amazon.com/dp/XXXXXXXXXX',
  },
  {
    id: 'dirigeant',
    filtre: 'essai' as Filtre,
    genre: 'Essai · Management · Leadership',
    badge: 'Essai',
    titre: 'Penser et Agir comme un Dirigeant',
    collection: 'Ce que personne ne vous dit avant de diriger',
    pages: 150,
    statut: 'Disponible',
    spineColor: 'linear-gradient(160deg,#1a1a2e,#2d2d4e)',
    frontColor: 'linear-gradient(160deg,#1a1a2e,#2d2d4e)',
    extrait: '« Je ne sais pas si ça va marcher. Je pense que c\'est la meilleure décision avec ce que je sais ce matin. »',
    resume: "Isidore Bony déconstruit les illusions sur le leadership. À travers des cas concrets, elle révèle ce que diriger exige vraiment : accepter l'incertitude, assumer des arbitrages impossibles, construire une posture qui tienne dans la durée.",
    image: '/penser-agir-dirigeant.jpg',
    amazon: 'https://www.amazon.com/dp/XXXXXXXXXX',
  },
]

export default function ManuscritsPage() {
  const [filtre, setFiltre] = useState<Filtre>('tous')
  const [selection, setSelection] = useState<typeof MANUSCRITS[0] | null>(null)

  const filtres: { key: Filtre; label: string }[] = [
    { key: 'tous', label: 'Tous les titres' },
    { key: 'trilogie', label: 'Trilogie' },
    { key: 'roman', label: 'Roman' },
    { key: 'essai', label: 'Essai' },
  ]

  const visibles = filtre === 'tous' ? MANUSCRITS : MANUSCRITS.filter(m => m.filtre === filtre)

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#faf8f5', minHeight: '100vh', color: '#1a1614' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .ms-card { transition: transform .3s, box-shadow .3s; cursor: pointer; }
        .ms-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(26,22,20,.12); }
        .ms-btn { transition: all .2s; }
        .ms-btn:hover { background: #1a1614 !important; color: white !important; }
        .ms-filter { transition: all .2s; cursor: pointer; border: 1px solid #e2d9d0; border-radius: 20px; padding: .35rem 1.1rem; font-size: .8rem; letter-spacing: .08em; background: transparent; color: #4a3f3a; font-family: inherit; }
        .ms-filter.active, .ms-filter:hover { background: #1a1614; color: white; border-color: #1a1614; }
        .ms-amazon { display: inline-block; padding: .55rem 1.4rem; background: #b8912a; color: white; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; text-decoration: none; font-weight: 500; transition: background .2s; }
        .ms-amazon:hover { background: #8b6a1a; }
        .ms-contact { font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; color: #1a1614; border-bottom: 1px solid #b8912a; padding-bottom: 2px; text-decoration: none; }
        .deco-pattern { background-image: repeating-linear-gradient(45deg,white 0,white 1px,transparent 1px,transparent 8px),repeating-linear-gradient(-45deg,white 0,white 1px,transparent 1px,transparent 8px); width:100%;height:100%;opacity:.06; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .overlay { position: fixed; inset: 0; background: rgba(26,22,20,.55); z-index: 50; display: flex; align-items: stretch; justify-content: flex-end; }
        .panel { width: 100%; max-width: 460px; background: #faf8f5; overflow-y: auto; display: flex; flex-direction: column; }
      `}</style>

      {/* Header */}
      <div style={{ padding: '3rem 2rem 2rem', textAlign: 'center', borderBottom: '1px solid #e2d9d0', background: 'linear-gradient(to bottom,#faf6f0,#faf8f5)' }}>
        <div style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#b8912a', fontWeight: 500, marginBottom: '.75rem' }}>✦ Collection littéraire</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.2rem', fontWeight: 300, lineHeight: 1.1, marginBottom: '.75rem' }}>
          Mes <em style={{ fontStyle: 'italic', color: '#4a3f3a' }}>Manuscrits</em>
        </h1>
        <p style={{ fontSize: '.875rem', color: '#8a7b75', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
          5 œuvres — une trilogie, un roman et un essai sur le leadership. Disponibles en broché, relié et e-book sur Amazon KDP.
        </p>
      </div>

      {/* Filtres */}
      <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid #e2d9d0', flexWrap: 'wrap' }}>
        {filtres.map(f => (
          <button key={f.key} className={`ms-filter ${filtre === f.key ? 'active' : ''}`} onClick={() => setFiltre(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', borderTop: '1px solid #e2d9d0' }}>
        {visibles.map(m => (
          <div key={m.id} className="ms-card" style={{ background: 'white', borderRight: '1px solid #e2d9d0', borderBottom: '1px solid #e2d9d0', overflow: 'hidden' }} onClick={() => setSelection(m)}>
            {/* Couverture stylisée */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'stretch' }}>
                {/* Dos du livre */}
                <div style={{ width: 28, minWidth: 28, background: m.spineColor, display: 'flex', alignItems: 'center', justifyContent: 'center', writingMode: 'vertical-rl', fontFamily: "'Cormorant Garamond', serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'rgba(255,255,255,.85)', fontStyle: 'italic' }}>
                  {m.titre}
                </div>
                {/* Face du livre avec vraie image */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <img src={m.image} alt={m.titre} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 60%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                    <div style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', padding: '.2rem .6rem', border: '1px solid rgba(255,255,255,.5)', color: 'white', display: 'inline-block', marginBottom: '.5rem' }}>{m.badge}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 300, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,.4)', lineHeight: 1.2 }}>{m.titre}</div>
                    {m.collection && <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.7)', marginTop: '.25rem', fontStyle: 'italic' }}>{m.collection}</div>}
                  </div>
                </div>
              </div>
            </div>

            {/* Corps de la carte */}
            <div style={{ padding: '1.3rem 1.4rem' }}>
              <div style={{ fontSize: '.7rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#b8912a', marginBottom: '.5rem', fontWeight: 500 }}>{m.genre}</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 300, color: '#4a3f3a', lineHeight: 1.75, marginBottom: '1rem', fontStyle: 'italic' }}>{m.extrait}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '.9rem', borderTop: '1px solid #e2d9d0' }}>
                <span style={{ fontSize: '.72rem', color: '#5a8a5a', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '.35rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5a8a5a', display: 'inline-block' }}></span>
                  {m.statut} · {m.pages} p.
                </span>
                <span style={{ fontSize: '.75rem', letterSpacing: '.12em', textTransform: 'uppercase', padding: '.4rem 1rem', border: '1px solid #1a1614', color: '#1a1614', fontWeight: 500 }} className="ms-btn">
                  En savoir plus ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid #e2d9d0', background: '#f2ede6' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontStyle: 'italic', color: '#4a3f3a', marginBottom: '1.5rem' }}>
          « Chaque manuscrit est une invitation — à entrer dans un monde que j'ai construit pour vous. »
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="https://www.amazon.com/dp/XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="ms-amazon">
            Voir sur Amazon KDP ↗
          </a>
          <a href="mailto:contact.isi@stratnov.fr" className="ms-contact">contact.isi@stratnov.fr</a>
        </div>
      </div>

      {/* Panneau de détail */}
      {selection && (
        <div className="overlay" onClick={() => setSelection(null)}>
          <div className="panel" onClick={e => e.stopPropagation()}>
            {/* En-tête panneau */}
            <div style={{ position: 'sticky', top: 0, background: 'rgba(250,248,245,.96)', backdropFilter: 'blur(8px)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2d9d0', zIndex: 10 }}>
              <span style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8912a' }}>{selection.genre}</span>
              <button onClick={() => setSelection(null)} style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: '#8a7b75', cursor: 'pointer', lineHeight: 1 }}>✕</button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              {/* Image */}
              <div style={{ position: 'relative', height: 320, marginBottom: '1.5rem', overflow: 'hidden', background: '#1a1614' }}>
                <img src={selection.image} alt={selection.titre} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
              </div>

              {/* Infos */}
              <div style={{ marginBottom: '.25rem', fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#b8912a' }}>{selection.badge}</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, marginBottom: '.25rem' }}>{selection.titre}</h2>
              {selection.collection && <p style={{ fontStyle: 'italic', color: '#8a7b75', fontSize: '.85rem', marginBottom: '1rem' }}>{selection.collection}</p>}

              <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '.72rem', padding: '.25rem .75rem', border: '1px solid #e2d9d0', color: '#8a7b75' }}>{selection.pages} pages</span>
                <span style={{ fontSize: '.72rem', padding: '.25rem .75rem', border: '1px solid #e2d9d0', color: '#5a8a5a' }}>✓ {selection.statut}</span>
              </div>

              {/* Résumé */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8912a', marginBottom: '.75rem' }}>Résumé</div>
                <p style={{ fontSize: '.9rem', color: '#4a3f3a', lineHeight: 1.8 }}>{selection.resume}</p>
              </div>

              {/* Extrait */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#b8912a', marginBottom: '.75rem' }}>Extrait</div>
                <blockquote style={{ borderLeft: '2px solid #b8912a', paddingLeft: '1rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontStyle: 'italic', color: '#4a3f3a', lineHeight: 1.8 }}>
                  {selection.extrait}
                </blockquote>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                <a href={selection.amazon} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '.75rem', background: '#b8912a', color: 'white', textDecoration: 'none', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Commander sur Amazon KDP ↗
                </a>
                <a href="/contact" style={{ display: 'block', textAlign: 'center', padding: '.75rem', border: '1px solid #1a1614', color: '#1a1614', textDecoration: 'none', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>
                  Contacter
                </a>
              </div>

              {/* Navigation trilogie */}
              {selection.filtre === 'trilogie' && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2d9d0' }}>
                  <div style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#8a7b75', marginBottom: '.75rem' }}>Autres tomes</div>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    {MANUSCRITS.filter(m => m.filtre === 'trilogie' && m.id !== selection.id).map(t => (
                      <button key={t.id} onClick={() => setSelection(t)} style={{ flex: 1, padding: '.5rem', border: '1px solid #e2d9d0', background: 'transparent', fontSize: '.75rem', cursor: 'pointer', color: '#4a3f3a', fontFamily: 'inherit' }}>
                        {t.badge.split('—')[0].trim()}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
