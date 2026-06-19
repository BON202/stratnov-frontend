import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .btn-primary { display: inline-block; background: #1a1a2e; color: #faf6f0; padding: .75rem 2rem; font-size: .8rem; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; font-weight: 500; transition: background .2s; font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { background: #8b3a2a; }
        .btn-outline { display: inline-block; border: 1px solid #1a1a2e; color: #1a1a2e; padding: .75rem 2rem; font-size: .8rem; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; font-weight: 500; transition: all .2s; font-family: 'DM Sans', sans-serif; }
        .btn-outline:hover { background: #1a1a2e; color: #faf6f0; }
        .book-card { background: white; border: 1px solid #e8e0d5; transition: transform .25s, box-shadow .25s; }
        .book-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,22,20,.1); }
        .or-line { width: 48px; height: 2px; background: #c9a84c; margin: 1rem 0; }
      `}</style>

      {/* HERO */}
      <section style={{ background: '#1a1a2e', color: '#faf6f0', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>
              ✦ Stratnov — De la page à la pratique
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem' }}>
              Livres, formations<br />
              <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>et stratégie</em><br />
              pour agir mieux
            </h1>
            <div className="or-line"></div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,246,240,.7)', lineHeight: 1.8, maxWidth: 440, marginBottom: '2rem', fontSize: '1rem' }}>
              Romans, essais et formations sur le leadership, le droit des affaires et le management. Un espace pour ceux qui veulent penser autrement et agir avec méthode.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/manuscrits" className="btn-primary">Découvrir les livres</a>
              <a href="/formations" className="btn-outline" style={{ borderColor: 'rgba(250,246,240,.4)', color: '#faf6f0' }}>Voir les formations</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ position: 'relative', height: 280, borderRadius: 2, overflow: 'hidden' }}>
              <Image src="/anathine-trilogie-v2.png" alt="L'Éveil d'Anathine AYA" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', height: 134, borderRadius: 2, overflow: 'hidden' }}>
                <Image src="/choisir-de-rester-v2.png" alt="Choisir de rester" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ position: 'relative', height: 134, borderRadius: 2, overflow: 'hidden' }}>
                <Image src="/penser-agir-dirigeant-v2.png" alt="Penser et Agir comme un Dirigeant" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUE JE PROPOSE */}
      <section style={{ padding: '5rem 2rem', background: '#faf6f0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.5rem' }}>✦ L'offre</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#1a1a2e', marginBottom: '.5rem' }}>
            Un package complet
          </h2>
          <div className="or-line" style={{ margin: '1rem auto' }}></div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#6b7280', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.7 }}>
            Romans et essais, formations et informations. Pour tous ceux qui veulent apprendre, se former et passer à l'action.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '📚', titre: 'Romans & Essais', desc: '5 ouvrages publiés sur Amazon KDP. Leadership, amour qui dure, loi et solidarité.', lien: '/manuscrits', cta: 'Voir les livres' },
              { icon: '🎓', titre: 'Formations', desc: '11 domaines d\'expertise. Initiation et perfectionnement. Présentiel et distanciel.', lien: '/formations', cta: 'Voir les formations' },
              { icon: '📰', titre: 'Blog & Newsletter', desc: 'Articles, réflexions et ressources sur la stratégie, le droit et le management.', lien: '/blog', cta: 'Lire le blog' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid #e8e0d5', padding: '2.5rem 2rem', textAlign: 'left' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: '#1a1a2e', marginBottom: '.75rem' }}>{item.titre}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#6b7280', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{item.desc}</p>
                <a href={item.lien} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '.75rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#c9a84c', textDecoration: 'none', fontWeight: 500 }}>{item.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVRES EN AVANT */}
      <section style={{ padding: '5rem 2rem', background: '#f2ede6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.5rem' }}>✦ Ouvrages</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#1a1a2e' }}>Les derniers titres</h2>
            </div>
            <a href="/manuscrits" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#1a1a2e', textDecoration: 'none', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>Tous les livres →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { img: '/anathine-tome1.jpg', titre: 'Les Miroirs Brisés', genre: 'Roman initiatique · Tome I', slug: 'tome1' },
              { img: '/anathine-tome2.png', titre: 'Les Miroirs en Reconquête', genre: 'Roman initiatique · Tome II', slug: 'tome2' },
              { img: '/anathine-tome3.png', titre: 'Les Miroirs et les Horizons', genre: 'Roman initiatique · Tome III', slug: 'tome3' },
              { img: '/choisir-de-rester-v2.png', titre: 'Choisir de rester', genre: 'Littérature romantique', slug: 'choisir' },
            ].map((book, i) => (
              <a key={i} href="/manuscrits" className="book-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image src={book.img} alt={book.titre} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.4rem', fontWeight: 500 }}>{book.genre}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', fontWeight: 400, color: '#1a1a2e', lineHeight: 1.3 }}>{book.titre}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ISIDORE BONY */}
      <section style={{ padding: '5rem 2rem', background: '#1a1a2e', color: '#faf6f0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>✦ Isidore Bony</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.2rem', fontWeight: 300, marginBottom: '.75rem' }}>
            Auteur · Formateur · Stratège
          </h2>
          <div className="or-line" style={{ margin: '1rem auto' }}></div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(250,246,240,.7)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 2rem', fontSize: '.95rem' }}>
            Expert multidisciplinaire avec plus de 15 années d'expérience en conseil, formation et management. Auteur publié sur le leadership, la gestion d'entreprise et la transformation personnelle.
          </p>
          <a href="/about" className="btn-outline" style={{ borderColor: 'rgba(250,246,240,.4)', color: '#faf6f0' }}>En savoir plus</a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '5rem 2rem', background: '#faf6f0', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>✦ Passez à l'action</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.2rem', fontWeight: 300, color: '#1a1a2e', marginBottom: '.75rem' }}>
            Une question ? Un projet ?
          </h2>
          <div className="or-line" style={{ margin: '1rem auto' }}></div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#6b7280', lineHeight: 1.8, marginBottom: '2rem' }}>
            Pour toute demande de formation, collaboration ou simplement pour échanger.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-primary">Me contacter</a>
            <a href="/devis" className="btn-outline">Demander un devis</a>
          </div>
        </div>
      </section>
    </div>
  )
}
