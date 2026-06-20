import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', color: '#1a1614' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { font-size: 16px; line-height: 1.7; }
        .btn-gold { display: inline-block; background: #c9a84c; color: #1a1a2e; padding: .9rem 2.2rem; font-size: .85rem; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; font-weight: 700; transition: background .2s; font-family: 'DM Sans', sans-serif; border: 2px solid #c9a84c; }
        .btn-gold:hover { background: #b8912a; border-color: #b8912a; }
        .btn-light { display: inline-block; background: transparent; color: #faf6f0; padding: .9rem 2.2rem; font-size: .85rem; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; font-weight: 700; transition: all .2s; font-family: 'DM Sans', sans-serif; border: 2px solid rgba(250,246,240,.7); }
        .btn-light:hover { background: rgba(250,246,240,.15); border-color: #faf6f0; }
        .btn-dark { display: inline-block; background: #1a1a2e; color: #faf6f0; padding: .9rem 2.2rem; font-size: .85rem; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; font-weight: 700; transition: background .2s; font-family: 'DM Sans', sans-serif; border: 2px solid #1a1a2e; }
        .btn-dark:hover { background: #8b3a2a; border-color: #8b3a2a; }
        .btn-outline { display: inline-block; background: transparent; color: #1a1a2e; padding: .9rem 2.2rem; font-size: .85rem; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; font-weight: 700; transition: all .2s; font-family: 'DM Sans', sans-serif; border: 2px solid #1a1a2e; }
        .btn-outline:hover { background: #1a1a2e; color: #faf6f0; }
        .card-offre { background: white; border: 1px solid #d8cfc4; padding: 2.5rem 2rem; transition: transform .2s, box-shadow .2s; }
        .card-offre:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(26,22,20,.1); }
        .book-thumb { background: white; border: 1px solid #d8cfc4; transition: transform .3s, box-shadow .3s; display: block; text-decoration: none; }
        .book-thumb:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,22,20,.12); }
        .or-line { width: 52px; height: 4px; background: #c9a84c; }
        .section-label { font-size: .8rem; letter-spacing: .3em; text-transform: uppercase; color: #c9a84c; font-weight: 700; margin-bottom: .75rem; }
        .body-text { font-size: 1rem; line-height: 1.85; font-weight: 400; color: #2a1f1a; }
        .body-text-light { font-size: 1rem; line-height: 1.85; font-weight: 400; color: rgba(250,246,240,.8); }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)', color: '#faf6f0', padding: '6rem 2rem 5rem' }} aria-label="Présentation Stratnov">
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '55% 45%', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p className="section-label" style={{ color: '#c9a84c' }}>✦ Stratnov · Isidore Bony</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '1.5rem', color: '#faf6f0' }}>
              Des livres, des formations<br />
              <em style={{ color: '#c9a84c', fontStyle: 'italic', fontWeight: 400 }}>et des idées qui agissent</em>
            </h1>
            <div className="or-line" style={{ marginBottom: '1.5rem' }}></div>
            <p className="body-text-light" style={{ maxWidth: 460, marginBottom: '2.5rem' }}>
              Leadership, droit des affaires, management et stratégie. Romans et essais publiés sur Amazon. Formations en présentiel et à distance. Un seul objectif : vous aider à penser mieux et agir avec méthode.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/manuscrits" className="btn-gold" aria-label="Voir tous les livres de Stratnov">Voir les livres</a>
              <a href="/formations" className="btn-light" aria-label="Découvrir les formations Stratnov">Les formations</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }} aria-label="Couvertures des livres">
            <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,.4)' }}>
              <Image src="/manuscrits/tous_les_titres/tous-trilogie.png" alt="Trilogie L'Éveil d'Anathine AYA — Isidore Bony" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.3)' }}>
                <Image src="/manuscrits/romans/roman-choisir-rester.png" alt="Choisir de rester — Isidore Bony" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.3)' }}>
                <Image src="/manuscrits/essais/essai-dirigeant.jpg" alt="Penser et Agir comme un Dirigeant — Isidore Bony" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHIFFRES ═══ */}
      <section style={{ background: '#c9a84c', padding: '2.5rem 2rem' }} aria-label="Chiffres clés">
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { nb: '5', label: 'Ouvrages publiés' },
            { nb: '11', label: 'Domaines de formation' },
            { nb: '15+', label: "Années d'expérience" },
            { nb: '3', label: 'Tomes de la trilogie' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 700, color: '#1a1a2e', lineHeight: 1 }}>{s.nb}</div>
              <div style={{ fontSize: '.85rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#1a1a2e', fontWeight: 700, marginTop: '.4rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ L'OFFRE ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#faf6f0' }} aria-label="Ce que propose Stratnov">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label">✦ Ce que je propose</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 600, color: '#1a1a2e', marginBottom: '.75rem' }}>Un package complet</h2>
            <div className="or-line" style={{ margin: '0 auto 1.5rem' }}></div>
            <p className="body-text" style={{ maxWidth: 540, margin: '0 auto', color: '#3a2f2a' }}>
              Romans et essais, formations et informations. Pour tous ceux qui veulent apprendre, se former et passer à l'action.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '📚', titre: 'Romans & Essais', desc: '5 ouvrages publiés sur Amazon KDP. Leadership, transformation personnelle, droit et solidarité. Disponibles en broché, relié et e-book.', lien: '/manuscrits', cta: 'Découvrir les livres' },
              { icon: '🎓', titre: 'Formations', desc: '11 domaines d\'expertise couverts. Initiation et perfectionnement. Présentiel et distanciel. Devis sur demande.', lien: '/formations', cta: 'Voir le catalogue' },
              { icon: '📰', titre: 'Blog & Newsletter', desc: 'Articles de fond, réflexions et ressources sur la stratégie, le droit des affaires, le management et la littérature.', lien: '/blog', cta: 'Lire le blog' },
            ].map((item, i) => (
              <div key={i} className="card-offre">
                <div style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }} aria-hidden="true">{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.75rem' }}>{item.titre}</h3>
                <div style={{ width: 36, height: 3, background: '#c9a84c', marginBottom: '1rem' }}></div>
                <p className="body-text" style={{ marginBottom: '1.75rem', color: '#3a2f2a' }}>{item.desc}</p>
                <a href={item.lien} style={{ fontSize: '.82rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#1a1a2e', textDecoration: 'none', fontWeight: 700, borderBottom: '2px solid #c9a84c', paddingBottom: '2px' }}>{item.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LIVRES ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#f0e8de' }} aria-label="Derniers livres publiés">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
            <div>
              <p className="section-label">✦ Ouvrages</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 600, color: '#1a1a2e' }}>Les derniers titres</h2>
            </div>
            <a href="/manuscrits" style={{ fontSize: '.82rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#1a1a2e', textDecoration: 'none', fontWeight: 700, borderBottom: '2px solid #c9a84c', paddingBottom: '2px' }}>Tous les livres →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { img: '/manuscrits/trilogie/tome1.jpg', titre: 'Les Miroirs Brisés', genre: 'Roman · Tome I' },
              { img: '/manuscrits/trilogie/tome2.png', titre: 'Les Miroirs en Reconquête', genre: 'Roman · Tome II' },
              { img: '/manuscrits/trilogie/tome3.png', titre: 'Les Miroirs et les Horizons', genre: 'Roman · Tome III' },
              { img: '/manuscrits/romans/roman-choisir-rester.png', titre: 'Choisir de rester', genre: 'Roman romantique' },
            ].map((book, i) => (
              <a key={i} href="/manuscrits" className="book-thumb" aria-label={`Voir le livre : ${book.titre}`}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image src={book.img} alt={book.titre} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ padding: '1rem 1.25rem 1.5rem' }}>
                  <p style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.4rem', fontWeight: 700 }}>{book.genre}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', fontWeight: 600, color: '#1a1a2e', lineHeight: 1.3 }}>{book.titre}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ISIDORE BONY ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#1a1a2e', color: '#faf6f0' }} aria-label="À propos d'Isidore Bony">
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p className="section-label" style={{ color: '#c9a84c' }}>✦ Isidore Bony</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 600, marginBottom: '.75rem', color: '#faf6f0' }}>
              Auteur · Formateur · Stratège
            </h2>
            <div className="or-line" style={{ marginBottom: '1.5rem' }}></div>
            <p className="body-text-light" style={{ marginBottom: '2rem' }}>
              Expert multidisciplinaire avec plus de 15 années d'expérience en conseil, formation et management. Auteur publié sur le leadership, la gestion d'entreprise et la transformation personnelle.
            </p>
            <a href="/about" className="btn-light" aria-label="En savoir plus sur Isidore Bony">En savoir plus</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.75rem' }} aria-label="Domaines d'expertise">
            {[
              { titre: 'Auteur', desc: '5 ouvrages publiés' },
              { titre: 'Formateur', desc: '11 domaines' },
              { titre: 'Consultant', desc: '15+ ans terrain' },
              { titre: 'Droit', desc: 'Droit des affaires' },
              { titre: 'Finance', desc: 'Gestion & audit' },
              { titre: 'Stratégie', desc: 'Management' },
            ].map((c, i) => (
              <div key={i} style={{ border: '1px solid rgba(201,168,76,.4)', padding: '1rem .75rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.05rem', fontWeight: 600, color: '#c9a84c', marginBottom: '.3rem' }}>{c.titre}</div>
                <div style={{ fontSize: '.78rem', color: 'rgba(250,246,240,.6)', fontWeight: 400 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '6rem 2rem', background: '#faf6f0', textAlign: 'center' }} aria-label="Contact et devis">
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <p className="section-label">✦ Passez à l'action</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 600, color: '#1a1a2e', marginBottom: '.75rem' }}>
            Une question ? Un projet ?
          </h2>
          <div className="or-line" style={{ margin: '0 auto 1.5rem' }}></div>
          <p className="body-text" style={{ marginBottom: '2.5rem', color: '#3a2f2a' }}>
            Pour toute demande de formation, collaboration ou simplement pour échanger sur vos projets.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-dark" aria-label="Me contacter">Me contacter</a>
            <a href="/devis" className="btn-outline" aria-label="Demander un devis de formation">Demander un devis</a>
          </div>
        </div>
      </section>
    </div>
  )
}
