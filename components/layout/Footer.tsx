import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-encre text-parchemin mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-or text-lg tracking-widest mb-3">STRATNOV</p>
          <p className="text-sm text-brume leading-relaxed">
            Autrice. Écriture, formations et réflexions sur la création littéraire.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-brume mb-4">Navigation</p>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { href: '/manuscrits', label: 'Manuscrits' },
              { href: '/formations', label: 'Formations' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'À propos' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-or transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-brume mb-4">Contact</p>
          <a href="mailto:contact@stratnov.com" className="text-sm hover:text-or transition-colors">
            contact@stratnov.com
          </a>
        </div>
      </div>
      <div className="border-t border-or border-opacity-20 px-6 py-4 max-w-6xl mx-auto">
        <p className="text-xs text-brume">© {new Date().getFullYear()} Stratnov. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
