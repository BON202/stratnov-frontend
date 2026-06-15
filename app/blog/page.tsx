'use client'

import { useState } from 'react'
import Link from 'next/link'

type Categorie = 'tous' | 'litterature' | 'droit' | 'management' | 'strategie'

type Article = {
  slug: string
  titre: string
  soustitre?: string
  categorie: Categorie
  labelCategorie: string
  date: string
  tempsLecture: string
  extrait: string
  contenu?: string
  featured?: boolean
}

const ARTICLES: Article[] = [
  {
    slug: 'loi-peur-et-liberte',
    titre: 'Loi, Peur et Liberté',
    soustitre: 'La dictature de la loi expliquée à tous',
    categorie: 'litterature',
    labelCategorie: 'Littérature',
    date: '2026-06-15',
    tempsLecture: '5 min',
    featured: true,
    extrait: "Il existe des glissements qui ne se remarquent pas tout de suite. Ils n'ont pas le fracas des ruptures, ni la netteté des bouleversements. Ils avancent à pas lents, presque invisibles, à travers des habitudes nouvelles, des précautions successives, des règles qui s'ajoutent aux règles.",
    contenu: `La loi, ce bouclier qui peut devenir une cage

Il existe des glissements qui ne se remarquent pas tout de suite. Ils n'ont pas le fracas des ruptures, ni la netteté des bouleversements. Ils avancent à pas lents, presque invisibles, à travers des habitudes nouvelles, des précautions successives, des règles qui s'ajoutent aux règles.

Un formulaire de plus. Une autorisation de plus. Une interdiction de plus. Et peu à peu, ce qui devait seulement organiser la vie commune finit par l'enserrer.

La loi naît pourtant d'une intention noble. Elle protège contre la violence, elle fixe des repères, elle rend la coexistence possible. Sans elle, la force déciderait de tout, et la vie collective se réduirait à un rapport de puissance. Que ce soit dans les rues de Lagos, les favelas de Rio ou les banlieues de Lyon, cette réalité est la même.

La loi rassure parce qu'elle rend le monde plus lisible. Elle dit ce qui est permis, ce qui est interdit, ce qui peut être attendu des autres et ce que chacun peut attendre de la société.`
  },
  {
    slug: 'diriger-sans-certitude',
    titre: 'Diriger sans certitude',
    soustitre: 'Ce que les manuels ne disent jamais',
    categorie: 'management',
    labelCategorie: 'Management',
    date: '2026-05-28',
    tempsLecture: '4 min',
    extrait: "On forme les managers à prendre des décisions. On leur enseigne des matrices, des modèles, des frameworks. Mais personne ne leur apprend à décider quand aucun cadre ne s'applique. C'est pourtant là que commence le vrai leadership.",
  },
  {
    slug: 'strategie-et-realite',
    titre: 'Stratégie et réalité',
    soustitre: 'Quand le plan rencontre le terrain',
    categorie: 'strategie',
    labelCategorie: 'Stratégie',
    date: '2026-05-10',
    tempsLecture: '6 min',
    extrait: "Toute stratégie est un pari sur l'avenir. Le problème, c'est que l'avenir ne lit pas les plans. Entre la vision du dirigeant et l'exécution sur le terrain, il y a souvent un gouffre que ni les consultants ni les PowerPoint ne comblent.",
  },
]

const CATEGORIES: { key: Categorie; label: string }[] = [
  { key: 'tous', label: 'Tous les articles' },
  { key: 'litterature', label: 'Littérature' },
  { key: 'droit', label: 'Droit' },
  { key: 'management', label: 'Management' },
  { key: 'strategie', label: 'Stratégie' },
]

const COULEURS: Record<string, string> = {
  litterature: '#5c3a1a',
  droit: '#1a2a5c',
  management: '#1a3a5c',
  strategie: '#2d5a27',
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const [categorie, setCategorie] = useState<Categorie>('tous')
  const [articleOuvert, setArticleOuvert] = useState<Article | null>(null)

  const visibles = categorie === 'tous' ? ARTICLES : ARTICLES.filter(a => a.categorie === categorie)
  const featured = ARTICLES.find(a => a.featured)
  const reste = visibles.filter(a => !a.featured || categorie !== 'tous')

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#faf8f5', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        .bl-card { transition: transform .25s, box-shadow .25s; cursor: pointer; }
        .bl-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(26,22,20,.1); }
        .bl-filter { padding: .35rem 1.1rem; font-size: .8rem; letter-spacing: .08em; border: 1px solid #e2d9d0; border-radius: 20px; background: transparent; color: #4a3f3a; cursor: pointer; font-family: inherit; transition: all .2s; }
        .bl-filter.active, .bl-filter:hover { background: #1a1614; color: white; border-color: #1a1614; }
        .overlay { position: fixed; inset: 0; background: rgba(26,22,20,.6); z-index: 50; display: flex; }
        .panel { width: 100%; max-width: 680px; background: #faf8f5; overflow-y: auto; margin-left: auto; }
        .prose p { margin-bottom: 1.4rem; line-height: 1.85; color: #2a1f1a; font-size: 1rem; }
      `}</style>

      {/* Header */}
      <div style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>✦ Réflexions</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 300, lineHeight: 1.1, marginBottom: '.75rem' }}>
            Le <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Blog</em>
          </h1>
          <div style={{ width: 48, height: 2, background: '#c9a84c', margin: '1rem 0' }}></div>
          <p style={{ color: 'rgba(245,240,232,.65)', maxWidth: 500, lineHeight: 1.7 }}>
            Littérature, droit, management et stratégie. Des textes pour penser, questionner et agir.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 2rem' }}>
        {/* Article à la une */}
        {categorie === 'tous' && featured && (
          <div
            className="bl-card"
            onClick={() => setArticleOuvert(featured)}
            style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '2.5rem', marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', background: COULEURS[featured.categorie], color: 'white', padding: '.25rem .75rem' }}>{featured.labelCategorie}</span>
                <span style={{ fontSize: '.7rem', color: 'rgba(245,240,232,.4)' }}>À la une</span>
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 300, marginBottom: '.5rem', lineHeight: 1.2 }}>{featured.titre}</h2>
              {featured.soustitre && <p style={{ fontStyle: 'italic', color: '#c9a84c', fontSize: '.9rem', marginBottom: '1rem' }}>{featured.soustitre}</p>}
              <p style={{ color: 'rgba(245,240,232,.65)', lineHeight: 1.7, fontSize: '.9rem', marginBottom: '1.25rem' }}>{featured.extrait}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontSize: '.75rem', color: 'rgba(245,240,232,.4)' }}>{formatDate(featured.date)}</span>
                <span style={{ fontSize: '.75rem', color: 'rgba(245,240,232,.4)' }}>{featured.tempsLecture} de lecture</span>
                <span style={{ fontSize: '.8rem', color: '#c9a84c' }}>Lire →</span>
              </div>
            </div>
          </div>
        )}

        {/* Filtres */}
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {CATEGORIES.map(c => (
            <button key={c.key} className={`bl-filter ${categorie === c.key ? 'active' : ''}`} onClick={() => setCategorie(c.key)}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Grille articles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {visibles.map(a => (
            <div key={a.slug} className="bl-card" onClick={() => setArticleOuvert(a)} style={{ background: 'white', border: '1px solid #e2d9d0', overflow: 'hidden' }}>
              {/* Bandeau catégorie */}
              <div style={{ height: 4, background: COULEURS[a.categorie] || '#1a1a2e' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase', color: COULEURS[a.categorie] || '#1a1a2e', fontWeight: 500 }}>{a.labelCategorie}</span>
                  <span style={{ fontSize: '.72rem', color: '#8a7b75' }}>{a.tempsLecture}</span>
                </div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.25rem', fontWeight: 400, marginBottom: '.4rem', lineHeight: 1.3, color: '#1a1614' }}>{a.titre}</h2>
                {a.soustitre && <p style={{ fontStyle: 'italic', color: '#8a7b75', fontSize: '.8rem', marginBottom: '.75rem' }}>{a.soustitre}</p>}
                <p style={{ fontSize: '.85rem', color: '#4a3f3a', lineHeight: 1.7, marginBottom: '1.25rem' }}>{a.extrait.substring(0, 140)}...</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '.75rem', borderTop: '1px solid #f0ece6' }}>
                  <span style={{ fontSize: '.72rem', color: '#8a7b75' }}>{formatDate(a.date)}</span>
                  <span style={{ fontSize: '.75rem', color: '#c9a84c' }}>Lire →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibles.length === 0 && (
          <p style={{ textAlign: 'center', color: '#8a7b75', padding: '4rem 0', fontStyle: 'italic' }}>Aucun article dans cette catégorie pour l'instant.</p>
        )}
      </div>

      {/* Panneau lecture */}
      {articleOuvert && (
        <div className="overlay" onClick={() => setArticleOuvert(null)}>
          <div className="panel" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div style={{ borderBottom: '1px solid #e2d9d0', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(250,248,245,.96)', backdropFilter: 'blur(8px)', zIndex: 10 }}>
              <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: COULEURS[articleOuvert.categorie] || '#1a1a2e', fontWeight: 500 }}>{articleOuvert.labelCategorie}</span>
              <button onClick={() => setArticleOuvert(null)} style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: '#8a7b75', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ padding: '2.5rem 2.5rem 4rem' }}>
              {/* Méta */}
              <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.2rem', fontWeight: 300, lineHeight: 1.2, marginBottom: '.5rem', color: '#1a1614' }}>{articleOuvert.titre}</h1>
                {articleOuvert.soustitre && (
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', fontStyle: 'italic', color: '#8a7b75', marginBottom: '1rem' }}>{articleOuvert.soustitre}</p>
                )}
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '.75rem', color: '#8a7b75' }}>{formatDate(articleOuvert.date)}</span>
                  <span style={{ fontSize: '.75rem', color: '#8a7b75' }}>{articleOuvert.tempsLecture} de lecture</span>
                </div>
                <div style={{ width: 40, height: 2, background: '#c9a84c', margin: '1.25rem 0' }}></div>
              </div>

              {/* Contenu */}
              <div className="prose">
                {(articleOuvert.contenu || articleOuvert.extrait).split('\n\n').map((para, i) => (
                  para.trim() && (
                    para.length < 80 && i > 0
                      ? <h3 key={i} style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 400, color: '#1a1614', margin: '2rem 0 1rem' }}>{para}</h3>
                      : <p key={i}>{para}</p>
                  )
                ))}
                {!articleOuvert.contenu && (
                  <p style={{ fontStyle: 'italic', color: '#8a7b75', borderLeft: '2px solid #c9a84c', paddingLeft: '1rem', marginTop: '2rem' }}>
                    Article complet à venir.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
