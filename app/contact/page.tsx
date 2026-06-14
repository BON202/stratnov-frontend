'use client'

import { useState } from 'react'
import { sendContact } from '@/lib/api'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContact(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const field = (label: string, key: keyof typeof form, type = 'text') => (
    <div>
      <label className="block text-sm font-medium text-encre mb-2">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => setForm({ ...form, [key]: e.target.value })}
        required
        className="w-full border border-or-clair bg-white px-4 py-3 text-encre focus:outline-none focus:border-or transition-colors"
      />
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <p className="text-xs tracking-widest text-or uppercase mb-2">Échangeons</p>
      <h1 className="section-title">Contact</h1>
      <div className="or-line"></div>
      <p className="text-brume mt-4 mb-10 leading-relaxed">
        Pour toute demande, collaboration ou question sur les formations.
      </p>

      {status === 'success' ? (
        <div className="border border-or p-6 text-encre">
          <p className="font-display text-xl mb-2">Message envoyé</p>
          <p className="text-brume text-sm">Je vous réponds dans les 48 heures.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {field('Nom', 'name')}
          {field('Email', 'email', 'email')}
          {field('Sujet', 'subject')}
          <div>
            <label className="block text-sm font-medium text-encre mb-2">Message</label>
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
              rows={6}
              className="w-full border border-or-clair bg-white px-4 py-3 text-encre focus:outline-none focus:border-or transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-rouille text-sm">Une erreur s'est produite. Réessayez ou écrivez directement à contact.isi@stratnov.fr</p>
          )}

          <button type="submit" disabled={status === 'loading'} className="btn-primary self-start">
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      )}
    </div>
  )
}
