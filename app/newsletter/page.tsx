'use client'

import { useState } from 'react'
import { sendContact } from '@/lib/api'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [nom, setNom] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContact({
        name: nom,
        email,
        subject: 'Inscription newsletter',
        message: `Nouvelle inscription à la newsletter : ${nom} — ${email}`,
      })
      setStatus('success')
      setEmail('')
      setNom('')
    } catch {
      setStatus('error')
    }
  }

  const CONTENU = [
    {
      icone: '📖',
      label: 'Extraits & avant-premières',
      desc: 'Les premières pages de mes prochains livres, des passages inédits et les coulisses de l\'écriture.',
      couleur: '#5c3a1a',
    },
    {
      icone: '⚖️',
      label: 'Droit & affaires',
      desc: 'Décryptages juridiques, analyses de jurisprudence et points pratiques sur le droit des affaires.',
      couleur: '#1a2a5c',
    },
    {
      icone: '🎯',
      label: 'Management & leadership',
      desc: 'Réflexions sur la décision, la posture du dirigeant et les outils qui font vraiment la différence.',
      couleur: '#1a3a5c',
    },
    {
      icone: '📊',
      label: 'Stratégie & gestion',
      desc: 'Concepts clés, études de cas et méthodes issus du terrain pour piloter et développer une activité.',
      couleur: '#2d5a27',
    },
    {
      icone: '🎓',
      label: 'Actualités formations',
      desc: 'Nouvelles sessions, thématiques à venir et ressources pédagogiques en avant-première.',
      couleur: '#3a1a4a',
    },
  ]

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#faf8f5', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        .nl-input { width: 100%; border: 1px solid #e2d9d0; background: white; padding: .75rem 1rem; font-size: .95rem; font-family: inherit; color: #1a1614; outline: none; transition: border .2s; }
        .nl-input:focus { border-color: #c9a84c; }
        .nl-card { border-left: 3px solid; padding: 1.25rem 1.5rem; background: white; transition: transform .2s; }
        .nl-card:hover { transform: translateX(4px); }
      `}</style>

      {/* Hero */}
      <div style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1rem' }}>✦ Newsletter</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem' }}>
          De la page à la pratique,<br />
          <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>directement dans votre boîte</em>
        </h1>
        <div style={{ width: 48, height: 2, background: '#c9a84c', margin: '1.5rem auto' }}></div>
        <p style={{ color: 'rgba(245,240,232,.65)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8, fontSize: '1rem' }}>
          Une newsletter pour ceux qui aiment lire, penser et agir. Littérature, droit, management, stratégie et formations : tout ce que je partage, en un seul endroit.
        </p>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Ce que vous recevez */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.5rem' }}>Au programme</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 300, marginBottom: '2rem', color: '#1a1614' }}>
              Ce que vous recevez
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {CONTENU.map((c, i) => (
                <div key={i} className="nl-card" style={{ borderLeftColor: c.couleur }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem' }}>
                    <span style={{ fontSize: '1.2rem', lineHeight: 1.4 }}>{c.icone}</span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#1a1614', marginBottom: '.25rem', fontSize: '.9rem' }}>{c.label}</p>
                      <p style={{ fontSize: '.82rem', color: '#6b7280', lineHeight: 1.6 }}>{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#f2ede6', padding: '1.25rem 1.5rem', borderLeft: '3px solid #c9a84c' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', fontStyle: 'italic', color: '#4a3f3a', lineHeight: 1.7 }}>
                Pas de spam, pas de contenu publicitaire. Uniquement ce qui mérite votre attention, au rythme de l'actualité et de l'inspiration.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div style={{ position: 'sticky', top: '2rem' }}>
            <div style={{ background: 'white', border: '1px solid #e2d9d0', padding: '2.5rem' }}>
              <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.5rem' }}>Rejoindre</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 300, marginBottom: '.5rem', color: '#1a1614' }}>
                S'inscrire à la newsletter
              </h2>
              <p style={{ fontSize: '.82rem', color: '#8a7b75', marginBottom: '2rem', lineHeight: 1.6 }}>
                Gratuit. Désinscription en un clic à tout moment.
              </p>

              {status === 'success' ? (
                <div style={{ padding: '2rem', textAlign: 'center', border: '1px solid #c9a84c' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', color: '#1a1614', marginBottom: '.5rem' }}>Bienvenue !</p>
                  <p style={{ fontSize: '.85rem', color: '#6b7280' }}>Votre inscription est confirmée. À très bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 500, color: '#1a1614', marginBottom: '.4rem' }}>Prénom</label>
                    <input
                      type="text"
                      className="nl-input"
                      placeholder="Votre prénom"
                      value={nom}
                      onChange={e => setNom(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 500, color: '#1a1614', marginBottom: '.4rem' }}>Adresse email</label>
                    <input
                      type="email"
                      className="nl-input"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontSize: '.8rem', color: '#8b3a2a' }}>
                      Une erreur s'est produite. Écrivez directement à contact.isi@stratnov.fr
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{ background: '#1a1a2e', color: '#f5f0e8', border: 'none', padding: '.85rem', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', marginTop: '.5rem' }}
                  >
                    {status === 'loading' ? 'Inscription en cours...' : "S'inscrire gratuitement"}
                  </button>

                  <p style={{ fontSize: '.72rem', color: '#8a7b75', textAlign: 'center', lineHeight: 1.5 }}>
                    En vous inscrivant, vous acceptez de recevoir la newsletter Stratnov. Vos données ne sont jamais partagées. Conformément au RGPD, vous pouvez vous désinscrire à tout moment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
