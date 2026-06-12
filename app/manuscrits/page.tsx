'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchBooks } from '@/lib/api'

const MOCK_BOOKS = [
  { id: 1, slug: 'roman-en-cours', title: 'Roman en cours', genre: 'Fiction contemporaine', status: 'En écriture', excerpt: 'Une exploration des liens familiaux à travers trois générations.' },
  { id: 2, slug: 'recueil-nouvelles', title: 'Recueil de nouvelles', genre: 'Nouvelles', status: 'Terminé', excerpt: 'Dix nouvelles sur la solitude et les rencontres imprévues.' },
  { id: 3, slug: 'essai-litteraire', title: 'Essai littéraire', genre: 'Essai', status: 'En révision', excerpt: 'Réflexions sur la place du lecteur dans la création du sens.' },
]

export default function ManuscritsPage() {
  const [books, setBooks] = useState(MOCK_BOOKS)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetchBooks().then(data => {
      if (data?.data?.length) setBooks(data.data)
    }).catch(() => {}) // garde les mock en cas d'erreur API
  }, [])

  const filtered = filter ? books.filter(b => b.genre === filter) : books
  const genres = [...new Set(books.map(b => b.genre))]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-xs tracking-widest text-or uppercase mb-2">Travaux</p>
      <h1 className="section-title">Manuscrits</h1>
      <div className="or-line"></div>
      <p className="section-subtitle mt-4">Textes en cours et œuvres terminées</p>

      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setFilter('')}
          className={`px-4 py-2 text-sm border transition-colors ${!filter ? 'bg-encre text-parchemin border-encre' : 'border-or-clair hover:border-or'}`}
        >
          Tous
        </button>
        {genres.map(g => (
          <button
            key={g}
            onClick={() => setFilter(g)}
            className={`px-4 py-2 text-sm border transition-colors ${filter === g ? 'bg-encre text-parchemin border-encre' : 'border-or-clair hover:border-or'}`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(book => (
          <Link key={book.id} href={`/manuscrits/${book.slug}`} className="card p-6 block group">
            <p className="text-xs tracking-widest text-or uppercase mb-3">{book.genre}</p>
            <h2 className="font-display text-xl mb-3 group-hover:text-rouille transition-colors">{book.title}</h2>
            <p className="text-brume text-sm leading-relaxed mb-4">{book.excerpt}</p>
            <span className="text-xs px-3 py-1 bg-parchemin border border-or-clair text-brume">{book.status}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
