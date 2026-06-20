import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        .btn-dark { display: inline-block; background: #1a1a2e; color: #faf6f0; padding: .8rem 2rem; font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; text-decoration: none; font-weight: 600; transition: background .2s; font-family: 'DM Sans', sans-serif; border: 2px solid #1a1a2e; }
        .btn-dark:hover { background: #8b3a2a; border-color: #8b3a2a; }
        .btn-light { display: inline-block; background: transparent; color: #faf6f0; padding: .8rem 2rem; font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; text-decoration: none; font-weight: 600; transition: all .2s; font-family: 'DM Sans', sans-serif; border: 2px solid rgba(250,246,240,.5); }
        .btn-light:hover { background: rgba(250,246,240,.1); border-color: #faf6f0; }
        .btn-outline-dark { display: inline-block; background: transparent; color: #1a1a2e; padding: .8rem 2rem; font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; text-decoration: none; font-weight: 600; transition: all .2s; font-family: 'DM Sans', sans-serif; border: 2px solid #1a1a2e; }
        .btn-outline-dark:hover { background: #1a1a2e; color: #faf6f0; }
        .card-offre { background: white; border: 1px solid #e4dbd0; padding: 2.5rem 2rem; transition: transform .2s, box-shadow .2s; }
        .card-offre:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(26,22,20,.08); }
        .book-thumb { transition: transform .3s; }
        .book-thumb:hover { transform: translateY(-4px); }
        .or-line { width: 48px; height: 3px; background: #c9a84c; }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)', color: '#faf6f0', padding: '6rem 2rem 5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '55% 45%', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '1.25rem' }}>
              ✦ Stratnov · Isidore Bony
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.12, marginBottom: '1.5rem' }}>
              Des livres, des formations<br />
              <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>et des idées qui agissent</em>
            </h1>
            <div className="or-line" style={{ marginBottom: '1.5rem' }}></div>
            <p style={{ fontSize: '1.05rem', color: 'rgba(250,246,240,.75)', lineHeight: 1.85, maxWidth: 460, marginBottom: '2.5rem', fontWeight: 300 }}>
              Leadership, droit des affaires, management et stratégie. Romans et essais publiés sur Amazon. Formations en présentiel et à distance. Un seul objectif : vous aider à penser mieux et agir avec méthode.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/manuscrits" className="btn-dark" style={{ background: '#c9a84c', borderColor: '#c9a84c', color: '#1a1a2e' }}>Voir les livres</a>
              <a href="/formations" className="btn-light">Les formations</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,.4)' }}>
              <Image src="/manuscrits/tous_les_titres/tous-trilogie.png" alt="Trilogie L'Éveil d'Anathine AYA" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.3)' }}>
                <Image src="/manuscrits/romans/roman-choisir-rester.png" alt="Choisir de rester" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.3)' }}>
                <Image src="/manuscrits/essais/essai-dirigeant.jpg" alt="Penser et Agir comme un Dirigeant" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHIFFRES ═══ */}
      <section style={{ background: '#c9a84c', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { nb: '5', label: 'Ouvrages publiés' },
            { nb: '11', label: 'Domaines de formation' },
            { nb: '15+', label: "Années d'expérience" },
            { nb: '3', label: 'Tomes de la trilogie' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.8rem', fontWeight: 300, color: '#1a1a2e', lineHeight: 1 }}>{s.nb}</div>
              <div style={{ fontSize: '.78rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(26,22,20,.7)', fontWeight: 600, marginTop: '.4rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ L'OFFRE ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#faf6f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '.75rem' }}>✦ Ce que je propose</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.8rem', fontWeight: 300, color: '#1a1a2e', marginBottom: '.75rem' }}>Un package complet</h2>
            <div className="or-line" style={{ margin: '0 auto 1.25rem' }}></div>
            <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
              Romans et essais, formations et informations. Pour tous ceux qui veulent apprendre, se former et passer à l'action.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '📚', titre: 'Romans & Essais', desc: '5 ouvrages publiés sur Amazon KDP. Leadership, transformation personnelle, droit et solidarité. Disponibles en broché, relié et e-book.', lien: '/manuscrits', cta: 'Découvrir les livres' },
              { icon: '🎓', titre: 'Formations', desc: '11 domaines d\'expertise couverts. Initiation et perfectionnement. Présentiel et distanciel. Sur devis.', lien: '/formations', cta: 'Voir le catalogue' },
              { icon: '📰', titre: 'Blog & Newsletter', desc: 'Articles de fond, réflexions et ressources sur la stratégie, le droit des affaires, le management et la littérature.', lien: '/blog', cta: 'Lire le blog' },
            ].map((item, i) => (
              <div key={i} className="card-offre">
                <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#1a1a2e', marginBottom: '.75rem' }}>{item.titre}</h3>
                <div style={{ width: 32, height: 2, background: '#c9a84c', marginBottom: '1rem' }}></div>
                <p style={{ fontSize: '.9rem', color: '#6b7280', lineHeight: 1.8, marginBottom: '1.75rem', fontWeight: 300 }}>{item.desc}</p>
                <a href={item.lien} style={{ fontSize: '.75rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#1a1a2e', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>{item.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LIVRES ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#f2ede6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '.5rem' }}>✦ Ouvrages</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#1a1a2e' }}>Les derniers titres</h2>
            </div>
            <a href="/manuscrits" style={{ fontSize: '.78rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#1a1a2e', textDecoration: 'none', fontWeight: 600, borderBottom: '2px solid #c9a84c', paddingBottom: '2px' }}>Tous les livres →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { img: '/manuscrits/trilogie/tome1.jpg', titre: 'Les Miroirs Brisés', genre: 'Roman · Tome I' },
              { img: '/manuscrits/trilogie/tome2.png', titre: 'Les Miroirs en Reconquête', genre: 'Roman · Tome II' },
              { img: '/manuscrits/trilogie/tome3.png', titre: 'Les Miroirs et les Horizons', genre: 'Roman · Tome III' },
              { img: '/manuscrits/romans/roman-choisir-rester.png', titre: 'Choisir de rester', genre: 'Roman romantique' },
            ].map((book, i) => (
              <a key={i} href="/manuscrits" className="book-thumb" style={{ textDecoration: 'none', display: 'block', background: 'white', border: '1px solid #e4dbd0' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image src={book.img} alt={book.titre} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <p style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.4rem', fontWeight: 600 }}>{book.genre}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', fontWeight: 400, color: '#1a1a2e', lineHeight: 1.3 }}>{book.titre}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ISIDORE BONY ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#1a1a2e', color: '#faf6f0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '.75rem' }}>✦ Isidore Bony</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.4rem', fontWeight: 300, marginBottom: '.75rem' }}>
              Auteur · Formateur · Stratège
            </h2>
            <div className="or-line" style={{ marginBottom: '1.5rem' }}></div>
            <p style={{ fontSize: '1rem', color: 'rgba(250,246,240,.75)', lineHeight: 1.85, marginBottom: '2rem', fontWeight: 300 }}>
              Expert multidisciplinaire avec plus de 15 années d'expérience en conseil, formation et management. Auteur publié sur le leadership, la gestion d'entreprise et la transformation personnelle.
            </p>
            <a href="/about" className="btn-light">En savoir plus</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.75rem' }}>
            {[
              { titre: 'Auteur', desc: '5 ouvrages publiés' },
              { titre: 'Formateur', desc: '11 domaines' },
              { titre: 'Consultant', desc: '15+ ans terrain' },
              { titre: 'Droit', desc: 'Droit des affaires' },
              { titre: 'Finance', desc: 'Gestion & audit' },
              { titre: 'Stratégie', desc: 'Management' },
            ].map((c, i) => (
              <div key={i} style={{ border: '1px solid rgba(201,168,76,.3)', padding: '1rem .75rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', color: '#c9a84c', marginBottom: '.25rem' }}>{c.titre}</div>
                <div style={{ fontSize: '.7rem', color: 'rgba(250,246,240,.5)', letterSpacing: '.05em' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#faf6f0', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '.75rem' }}>✦ Passez à l'action</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#1a1a2e', marginBottom: '.75rem' }}>
            Une question ? Un projet ?
          </h2>
          <div className="or-line" style={{ margin: '0 auto 1.5rem' }}></div>
          <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
            Pour toute demande de formation, collaboration ou simplement pour échanger sur vos projets.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-dark">Me contacter</a>
            <a href="/devis" className="btn-outline-dark">Demander un devis</a>
          </div>
        </div>
      </section>
    </div>
  )
}
