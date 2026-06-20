import Link from 'next/link'

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#faf6f0' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      <section style={{ background: '#1a1a2e', color: '#faf6f0', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '.82rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '1rem' }}>À propos</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '.75rem' }}>
            Isidore Bony
          </h1>
          <div style={{ width: 52, height: 4, background: '#c9a84c', margin: '1rem 0' }}></div>
          <p style={{ color: 'rgba(250,246,240,.8)', fontSize: '1rem', lineHeight: 1.85, maxWidth: 560, fontWeight: 400 }}>
            Auteur · Formateur · Stratège
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
            {[
              { titre: 'Auteur', desc: 'Publié sur le leadership, la gestion d\'entreprise et la transformation personnelle. 5 ouvrages disponibles sur Amazon KDP.' },
              { titre: 'Formateur', desc: 'Enseignant-formateur auprès des principaux instituts. Plus de 15 ans d\'expérience en formation et management.' },
              { titre: 'Stratège', desc: 'Consultant expert en droit des affaires, finance, gestion et stratégie d\'entreprise.' },
            ].map((c, i) => (
              <div key={i} style={{ borderTop: '4px solid #c9a84c', paddingTop: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '.75rem' }}>{c.titre}</h2>
                <p style={{ fontSize: '1rem', color: '#3a2f2a', lineHeight: 1.8, fontWeight: 400 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 680 }}>
            <p style={{ fontSize: '1rem', color: '#3a2f2a', lineHeight: 1.85, marginBottom: '1.5rem', fontWeight: 400 }}>
              Expert multidisciplinaire avec plus de 15 années d'expérience en conseil, formation et management, Isidore Bony intervient à l'intersection du droit des affaires, de la finance et de la gestion.
            </p>
            <p style={{ fontSize: '1rem', color: '#3a2f2a', lineHeight: 1.85, marginBottom: '3rem', fontWeight: 400 }}>
              Stratnov, c'est ce fil conducteur entre la réflexion et l'action. Les livres, les formations, le blog et la newsletter sont autant d'espaces pour partager ce qui a été appris sur le terrain et en salle, avec des dirigeants, des étudiants et des organisations qui veulent penser autrement pour agir mieux.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/manuscrits" style={{ display: 'inline-block', background: '#1a1a2e', color: '#faf6f0', padding: '.9rem 2.2rem', fontSize: '.85rem', letterSpacing: '.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, border: '2px solid #1a1a2e' }}>Voir les manuscrits</a>
            <a href="/formations" style={{ display: 'inline-block', background: 'transparent', color: '#1a1a2e', padding: '.9rem 2.2rem', fontSize: '.85rem', letterSpacing: '.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, border: '2px solid #1a1a2e' }}>Les formations</a>
            <a href="/contact" style={{ display: 'inline-block', background: 'transparent', color: '#1a1a2e', padding: '.9rem 2.2rem', fontSize: '.85rem', letterSpacing: '.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, border: '2px solid #1a1a2e' }}>Prendre contact</a>
          </div>
        </div>
      </section>
    </div>
  )
}
