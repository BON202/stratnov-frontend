'use client'

import { useState } from 'react'
import Image from 'next/image'

type Filtre = 'tous' | 'trilogie' | 'roman' | 'essai'

const AMAZON = {
  tome1: 'https://www.amazon.fr/dp/B0GYDMM4WQ',
  tome2: 'https://www.amazon.fr/dp/B0H184R29R',
  tome3: 'https://www.amazon.fr/dp/B0H377RRJN',
  choisir: 'https://www.amazon.fr/dp/B0H4RT5GHX',
  dirigeant: 'https://www.amazon.fr/dp/B0GVPCXJ6D',
}

const TOUS = [
  {
    id: 'trilogie',
    img: '/manuscrits/tous_les_titres/tous-trilogie.png',
    titre: "L'Éveil d'Anathine AYA",
    soustitre: "Chroniques d'une âme nouvelle",
    genre: 'Trilogie · Roman initiatique',
    pages: '156 / 222 / 250 pages',
    statut: 'Disponible',
    resume: "Trois tomes. Un seul voyage. D'Alkebulan à la transmission, Anathine et ses héritiers tissent un réseau invisible de solidarité où chaque geste compte.",
    filtre: 'trilogie' as Filtre,
    amazon: null,
  },
  {
    id: 'choisir',
    img: '/manuscrits/tous_les_titres/tous-choisir-rester.png',
    titre: 'Choisir de rester',
    soustitre: 'Aimer et durer dans un monde qui fragilise les liens',
    genre: 'Littérature romantique',
    pages: '149 pages',
    statut: 'Disponible',
    resume: "Et si la plus grande preuve d'amour était de rester ? Clara et Georges ont construit leur vie sur des certitudes. Jusqu'au jour où l'horloge s'arrête.",
    filtre: 'roman' as Filtre,
    amazon: AMAZON.choisir,
  },
  {
    id: 'dirigeant',
    img: '/manuscrits/tous_les_titres/tous-essai.jpg',
    titre: 'Penser et Agir comme un Dirigeant',
    soustitre: 'Ce que personne ne vous dit avant de diriger',
    genre: 'Essai · Leadership',
    pages: '150 pages',
    statut: 'Disponible',
    resume: "Isidore Bony déconstruit les illusions sur le leadership. Six piliers essentiels pour décider sous pression, communiquer avec influence et tenir dans la durée.",
    filtre: 'essai' as Filtre,
    amazon: AMAZON.dirigeant,
  },
]

const TOMES = [
  {
    id: 'tome1',
    img: '/manuscrits/trilogie/tome1.jpg',
    titre: 'Les Miroirs Brisés',
    badge: 'Tome I',
    pages: 156,
    amazon: AMAZON.tome1,
    resume: "À Alkebulan, Anathine perçoit ce que les adultes ignorent : le monde est double. Entre lumière et fractures, elle tisse le Réseau des Cailloux de Lumière.",
    extrait: "Chaque acte de violence est un caillou lancé sur la glace des cœurs. Mais chaque geste de solidarité est une source de chaleur.",
    couleur: '#1a3a5c',
  },
  {
    id: 'tome2',
    img: '/manuscrits/trilogie/tome2.png',
    titre: 'Les Miroirs en Reconquête',
    badge: 'Tome II',
    pages: 222,
    amazon: AMAZON.tome2,
    resume: "Dix ans après la disparition d'Anathine, ses enfants Lior et Umia découvrent ses carnets. Ils doivent choisir : reproduire le passé ou inventer de nouvelles réponses.",
    extrait: "On ne répare pas le monde, Lior. On répare un morceau à la fois. Et on recommence.",
    couleur: '#3a1a0a',
  },
  {
    id: 'tome3',
    img: '/manuscrits/trilogie/tome3.png',
    titre: 'Les Miroirs et les Horizons',
    badge: 'Tome III',
    pages: 250,
    amazon: AMAZON.tome3,
    resume: "Lior et Umia ont hérité du rêve d'Anathine. Mais le mouvement grandit et avec lui les dilemmes. Faut-il s'institutionnaliser pour survivre ?",
    extrait: "Pas de « mais ». Juste une question : quand tu écris ça, tu as pensé à ce qui se passe quand deux familles ont des besoins contradictoires ?",
    couleur: '#3d1a0a',
  },
]

type PanelData = {
  img: string
  titre: string
  soustitre?: string
  genre: string
  pages: string | number
  statut?: string
  resume: string
  extrait?: string
  badge?: string
  amazon?: string | null
  tomes?: typeof TOMES
}

export default function ManuscritsPage() {
  const [filtre, setFiltre] = useState<Filtre>('tous')
  const [panel, setPanel] = useState<PanelData | null>(null)

  const filtres: { key: Filtre; label: string }[] = [
    { key: 'tous', label: 'Tous les titres' },
    { key: 'trilogie', label: 'Trilogie' },
    { key: 'roman', label: 'Roman' },
    { key: 'essai', label: 'Essai' },
  ]

  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', color: '#1a1614' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .ms-filter { padding: .45rem 1.4rem; font-size: .82rem; letter-spacing: .1em; border: 2px solid #d4c9bc; border-radius: 20px; background: transparent; color: #2a1f1a; cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 600; transition: all .2s; }
        .ms-filter.active, .ms-filter:hover { background: #1a1a2e; color: white; border-color: #1a1a2e; }
        .ms-card { background: white; border: 1px solid #d8cfc4; transition: transform .25s, box-shadow .25s; cursor: pointer; }
        .ms-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,22,20,.12); }
        .tome-card { background: white; border: 1px solid #d8cfc4; transition: transform .25s, box-shadow .25s; cursor: pointer; overflow: hidden; }
        .tome-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(26,22,20,.12); }
        .overlay { position: fixed; inset: 0; background: rgba(26,22,20,.65); z-index: 50; display: flex; justify-content: flex-end; }
        .panel { width: 100%; max-width: 500px; background: #faf6f0; overflow-y: auto; }
        .amazon-btn { display: block; text-align: center; padding: .9rem; background: #c9a84c; color: #1a1a2e; text-decoration: none; font-size: .82rem; letter-spacing: .15em; text-transform: uppercase; font-weight: 700; font-family: 'DM Sans', sans-serif; transition: background .2s; }
        .amazon-btn:hover { background: #b8912a; }
        .contact-btn { display: block; text-align: center; padding: .9rem; border: 2px solid #1a1a2e; color: #1a1a2e; text-decoration: none; font-size: .82rem; letter-spacing: .15em; text-transform: uppercase; font-weight: 700; font-family: 'DM Sans', sans-serif; transition: all .2s; }
        .contact-btn:hover { background: #1a1a2e; color: #faf6f0; }
        .section-label { font-size: .82rem; letter-spacing: .3em; text-transform: uppercase; color: #c9a84c; font-weight: 700; margin-bottom: .75rem; }
        .body-text { font-size: 1rem; line-height: 1.85; font-weight: 400; color: #2a1f1a; }
      `}</style>

      {/* Header */}
      <div style={{ background: '#1a1a2e', color: '#faf6f0', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: '.82rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.75rem' }}>✦ Collection littéraire</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '.75rem' }}>
            Mes <em style={{ fontStyle: 'italic', color: '#c9a84c', fontWeight: 400 }}>Manuscrits</em>
          </h1>
          <div style={{ width: 52, height: 4, background: '#c9a84c', margin: '1rem 0' }}></div>
          <p style={{ color: 'rgba(250,246,240,.8)', maxWidth: 520, lineHeight: 1.8, fontSize: '1rem', fontWeight: 400 }}>
            5 ouvrages disponibles sur Amazon KDP — une trilogie, un roman et un essai sur le leadership. Broché, relié et e-book.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div style={{ background: '#1a1614', padding: '1.25rem 2rem', display: 'flex', gap: '.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filtres.map(f => (
          <button key={f.key} className={`ms-filter ${filtre === f.key ? 'active' : ''}`} onClick={() => setFiltre(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>

        {/* VUE TOUS */}
        {filtre === 'tous' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {TOUS.map(m => (
              <div key={m.id} className="ms-card" onClick={() => setPanel({
                img: m.img, titre: m.titre, soustitre: m.soustitre, genre: m.genre,
                pages: m.pages, statut: m.statut, resume: m.resume, amazon: m.amazon,
                tomes: m.filtre === 'trilogie' ? TOMES : undefined
              })}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image src={m.img} alt={m.titre} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 55%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                    <span style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', background: '#c9a84c', color: '#1a1a2e', padding: '.25rem .7rem', fontWeight: 700 }}>{m.genre}</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.4rem', lineHeight: 1.3 }}>{m.titre}</h2>
                  {m.soustitre && <p style={{ fontStyle: 'italic', color: '#5a4f4a', fontSize: '.9rem', marginBottom: '.75rem', fontWeight: 400 }}>{m.soustitre}</p>}
                  <div style={{ width: 36, height: 3, background: '#c9a84c', marginBottom: '.75rem' }}></div>
                  <p className="body-text" style={{ marginBottom: '1rem' }}>{m.resume}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '.75rem', borderTop: '1px solid #e8ddd5' }}>
                    <span style={{ fontSize: '.78rem', color: '#5a4f4a', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '.35rem' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#5a8a5a', display: 'inline-block' }}></span>
                      {m.statut} · {m.pages}
                    </span>
                    <span style={{ fontSize: '.78rem', color: '#c9a84c', fontWeight: 700 }}>Voir le détail →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VUE TRILOGIE */}
        {filtre === 'trilogie' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', background: '#1a1a2e', padding: '3rem', marginBottom: '3rem' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <Image src="/manuscrits/tous_les_titres/tous-trilogie.png" alt="Trilogie L'Éveil d'Anathine AYA" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ color: '#faf6f0' }}>
                <p style={{ fontSize: '.82rem', letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.75rem' }}>Une trilogie · Une quête · Une renaissance</p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 600, marginBottom: '.5rem' }}>L'Éveil d'Anathine AYA</h2>
                <p style={{ fontStyle: 'italic', color: 'rgba(250,246,240,.65)', marginBottom: '1.25rem', fontSize: '.95rem', fontWeight: 400 }}>Chroniques d'une âme nouvelle</p>
                <div style={{ width: 44, height: 4, background: '#c9a84c', marginBottom: '1.25rem' }}></div>
                <p style={{ color: 'rgba(250,246,240,.8)', lineHeight: 1.85, fontSize: '1rem', fontWeight: 400, marginBottom: '1.5rem' }}>
                  Un voyage initiatique de l'enfance à l'âge adulte. Trois tomes qui explorent la solidarité, l'héritage et le prix du leadership quotidien.
                </p>
                <p style={{ fontStyle: 'italic', color: '#c9a84c', fontSize: '.95rem', fontWeight: 400 }}>« Parfois, il faut se briser pour mieux se reconstruire. »</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {TOMES.map(t => (
                <div key={t.id} className="tome-card">
                  <div style={{ height: 6, background: t.couleur }}></div>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setPanel({ img: t.img, titre: t.titre, badge: t.badge, genre: 'Roman initiatique · Littérature engagée', pages: t.pages, resume: t.resume, extrait: t.extrait, amazon: t.amazon })}>
                    <Image src={t.img} alt={t.titre} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                      <span style={{ fontSize: '.7rem', letterSpacing: '.15em', textTransform: 'uppercase', background: t.couleur, color: 'white', padding: '.25rem .7rem', fontWeight: 700 }}>{t.badge}</span>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.5rem' }}>{t.titre}</h3>
                    <div style={{ width: 32, height: 3, background: '#c9a84c', marginBottom: '.75rem' }}></div>
                    <p className="body-text" style={{ marginBottom: '1.25rem' }}>{t.resume.substring(0, 130)}...</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '.75rem', borderTop: '1px solid #e8ddd5', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '.78rem', color: '#5a4f4a', fontWeight: 500 }}>{t.pages} pages</span>
                      <span style={{ fontSize: '.78rem', color: '#c9a84c', fontWeight: 700, cursor: 'pointer' }} onClick={() => setPanel({ img: t.img, titre: t.titre, badge: t.badge, genre: 'Roman initiatique · Littérature engagée', pages: t.pages, resume: t.resume, extrait: t.extrait, amazon: t.amazon })}>Lire l'extrait →</span>
                    </div>
                    <a href={t.amazon} target="_blank" rel="noopener noreferrer" className="amazon-btn">
                      Commander sur Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VUE ROMAN */}
        {filtre === 'roman' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start', background: 'white', border: '1px solid #d8cfc4', overflow: 'hidden' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4' }}>
              <Image src="/manuscrits/romans/roman-choisir-rester.png" alt="Choisir de rester" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ padding: '3rem 3rem 3rem 0' }}>
              <p style={{ fontSize: '.82rem', letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.75rem' }}>Littérature romantique</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.2rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.4rem' }}>Choisir de rester</h2>
              <p style={{ fontStyle: 'italic', color: '#5a4f4a', marginBottom: '1.25rem', fontSize: '.95rem', fontWeight: 400 }}>Aimer et durer dans un monde qui fragilise les liens</p>
              <div style={{ width: 44, height: 4, background: '#c9a84c', marginBottom: '1.5rem' }}></div>
              <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                Et si la plus grande preuve d'amour était de rester ? Clara et Georges ont construit leur vie sur des certitudes. Pourtant, quand l'horloge s'arrête et que les non-dits s'accumulent, une question les hante : faut-il tout quitter ou choisir de se battre ?
              </p>
              <blockquote style={{ borderLeft: '4px solid #c9a84c', paddingLeft: '1.25rem', fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', color: '#2a1f1a', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 400 }}>
                « La lettre était toujours là, intacte, comme leur amour malgré les tempêtes. »
              </blockquote>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '.78rem', padding: '.35rem .85rem', border: '1px solid #d8cfc4', color: '#5a4f4a', fontWeight: 500 }}>149 pages</span>
                <span style={{ fontSize: '.78rem', padding: '.35rem .85rem', border: '1px solid #d8cfc4', color: '#5a4f4a', fontWeight: 500 }}>Relié</span>
                <span style={{ fontSize: '.78rem', padding: '.35rem .85rem', background: 'rgba(90,138,90,.12)', color: '#3d6b3d', fontWeight: 700 }}>✓ Disponible</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={AMAZON.choisir} target="_blank" rel="noopener noreferrer" className="amazon-btn" style={{ flex: 1 }}>Commander sur Amazon →</a>
                <a href="/contact" className="contact-btn" style={{ flex: 1 }}>Contacter</a>
              </div>
            </div>
          </div>
        )}

        {/* VUE ESSAI */}
        {filtre === 'essai' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start', background: 'white', border: '1px solid #d8cfc4', overflow: 'hidden' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', background: '#1a1a2e' }}>
              <Image src="/manuscrits/essais/essai-dirigeant.jpg" alt="Penser et Agir comme un Dirigeant" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ padding: '3rem 3rem 3rem 0' }}>
              <p style={{ fontSize: '.82rem', letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.75rem' }}>Essai · Management · Leadership</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.4rem' }}>Penser et Agir comme un Dirigeant</h2>
              <p style={{ fontStyle: 'italic', color: '#5a4f4a', marginBottom: '1.25rem', fontSize: '.95rem', fontWeight: 400 }}>Ce que personne ne vous dit avant de diriger</p>
              <div style={{ width: 44, height: 4, background: '#c9a84c', marginBottom: '1.5rem' }}></div>
              <p className="body-text" style={{ marginBottom: '1.5rem' }}>
                Isidore Bony déconstruit les illusions sur le leadership avec une honnêteté rare. À travers des cas concrets, il révèle ce que diriger exige vraiment : accepter l'incertitude, assumer des arbitrages impossibles et construire une posture qui tienne dans la durée.
              </p>
              <blockquote style={{ borderLeft: '4px solid #c9a84c', paddingLeft: '1.25rem', fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', color: '#2a1f1a', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 400 }}>
                « Je ne sais pas si ça va marcher. Je pense que c'est la meilleure décision avec ce que je sais ce matin. »
              </blockquote>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '.78rem', padding: '.35rem .85rem', border: '1px solid #d8cfc4', color: '#5a4f4a', fontWeight: 500 }}>150 pages</span>
                <span style={{ fontSize: '.78rem', padding: '.35rem .85rem', border: '1px solid #d8cfc4', color: '#5a4f4a', fontWeight: 500 }}>Broché</span>
                <span style={{ fontSize: '.78rem', padding: '.35rem .85rem', background: 'rgba(90,138,90,.12)', color: '#3d6b3d', fontWeight: 700 }}>✓ Disponible</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={AMAZON.dirigeant} target="_blank" rel="noopener noreferrer" className="amazon-btn" style={{ flex: 1 }}>Commander sur Amazon →</a>
                <a href="/contact" className="contact-btn" style={{ flex: 1 }}>Contacter</a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Panneau latéral */}
      {panel && (
        <div className="overlay" onClick={() => setPanel(null)}>
          <div className="panel" onClick={e => e.stopPropagation()}>
            <div style={{ position: 'sticky', top: 0, background: 'rgba(250,246,240,.97)', backdropFilter: 'blur(8px)', padding: '1.1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #d8cfc4', zIndex: 10 }}>
              <span style={{ fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700 }}>{panel.genre}</span>
              <button onClick={() => setPanel(null)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', color: '#5a4f4a', cursor: 'pointer', lineHeight: 1, fontWeight: 700 }}>✕</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ position: 'relative', height: 340, marginBottom: '1.5rem', overflow: 'hidden', background: '#1a1614' }}>
                <Image src={panel.img} alt={panel.titre} fill style={{ objectFit: 'contain', objectPosition: 'center' }} />
              </div>
              {panel.badge && <span style={{ fontSize: '.7rem', letterSpacing: '.15em', textTransform: 'uppercase', background: '#c9a84c', color: '#1a1a2e', padding: '.25rem .7rem', fontWeight: 700, display: 'inline-block', marginBottom: '.75rem' }}>{panel.badge}</span>}
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.4rem' }}>{panel.titre}</h2>
              {panel.soustitre && <p style={{ fontStyle: 'italic', color: '#5a4f4a', fontSize: '.9rem', marginBottom: '1rem', fontWeight: 400 }}>{panel.soustitre}</p>}
              <div style={{ width: 40, height: 3, background: '#c9a84c', marginBottom: '1.25rem' }}></div>
              <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '.78rem', padding: '.3rem .75rem', border: '1px solid #d8cfc4', color: '#5a4f4a', fontWeight: 500 }}>{panel.pages} {typeof panel.pages === 'number' ? 'pages' : ''}</span>
                {panel.statut && <span style={{ fontSize: '.78rem', padding: '.3rem .75rem', background: 'rgba(90,138,90,.12)', color: '#3d6b3d', fontWeight: 700 }}>✓ {panel.statut}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.6rem' }}>Résumé</p>
                <p className="body-text">{panel.resume}</p>
              </div>
              {panel.extrait && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.6rem' }}>Extrait</p>
                  <blockquote style={{ borderLeft: '4px solid #c9a84c', paddingLeft: '1rem', fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', color: '#2a1f1a', fontSize: '1rem', lineHeight: 1.8, fontWeight: 400 }}>{panel.extrait}</blockquote>
                </div>
              )}
              {panel.tomes && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '.75rem' }}>Les 3 tomes</p>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    {panel.tomes.map(t => (
                      <button key={t.id} onClick={() => setPanel({ img: t.img, titre: t.titre, badge: t.badge, genre: 'Roman initiatique', pages: t.pages, resume: t.resume, extrait: t.extrait, amazon: t.amazon })} style={{ flex: 1, padding: '.6rem', border: '2px solid #d8cfc4', background: 'transparent', cursor: 'pointer', fontSize: '.78rem', color: '#2a1f1a', fontFamily: 'inherit', fontWeight: 600 }}>
                        {t.badge}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {panel.amazon && (
                  <a href={panel.amazon} target="_blank" rel="noopener noreferrer" className="amazon-btn">
                    Commander sur Amazon KDP →
                  </a>
                )}
                {panel.tomes && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    {panel.tomes.map(t => (
                      <a key={t.id} href={t.amazon} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '.7rem', background: 'transparent', border: '2px solid #c9a84c', color: '#1a1a2e', textDecoration: 'none', fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                        Commander {t.badge} sur Amazon →
                      </a>
                    ))}
                  </div>
                )}
                <a href="/contact" className="contact-btn" onClick={() => setPanel(null)}>Contacter</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
