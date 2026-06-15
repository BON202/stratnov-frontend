'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/manuscrits', label: 'Manuscrits' },
  { href: '/formations', label: 'Formations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'À propos' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-encre text-parchemin">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-widest text-or">
          STRATNOV
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wide">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-or transition-colors duration-200">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-parchemin"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-encre border-t border-or border-opacity-30 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-sm tracking-wide">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="hover:text-or transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
