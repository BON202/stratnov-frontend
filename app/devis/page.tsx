'use client'

import { useState } from 'react'
import { sendContact } from '@/lib/api'

const FORMATIONS = [
  'Management — Initiation (MGT-01)',
  'Management — Perfectionnement (MGT-02)',
  'Gestion des Ressources Humaines — Initiation (GRH-01)',
  'Gestion des Ressources Humaines — Perfectionnement (GRH-02)',
  'Responsabilité Sociale des Entreprises — Initiation (RSE-01)',
  'Responsabilité Sociale des Entreprises — Perfectionnement (RSE-02)',
  'Environnement, Social et Gouvernance — Initiation (ESG-01)',
  'Environnement, Social et Gouvernance — Perfectionnement (ESG-02)',
  'Propriété Intellectuelle — Initiation (PI-01)',
  'Propriété Intellectuelle — Perfectionnement (PI-02)',
  'Droit et Juridique — Initiation (DJR-01)',
  'Droit et Juridique — Perfectionnement (DJR-02)',
  'Comptabilité — Initiation (CPT-01)',
  'Comptabilité — Perfectionnement (CPT-02)',
  "Création d'Entreprise — Initiation (CRE-01)",
  "Création d'Entreprise — Perfectionnement (CRE-02)",
  "Gestion d'Entreprise — Initiation (GES-01)",
  "Gestion d'Entreprise — Perfectionnement (GES-02)",
  'Contrôle de Gestion — Initiation (CDG-01)',
  'Contrôle de Gestion — Perfectionnement (CDG-02)',
  'Audit — Initiation (AUD-01)',
  'Audit — Perfectionnement (AUD-02)',
]

export default function DevisPage() {
  const [form, setForm] = useState({
    nom: '', email: '', organisation: '', formation: '',
    participants: '', modalite: '', dates: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContact({
        name: form.nom,
        email: form.email,
        subject: `Demande de devis — ${form.formation}`,
        message: `Organisation : ${form.organisation}\nFormation : ${form.formation}\nParticipants : ${form.participants}\nModalité : ${form.modalite}\nDates envisagées : ${form.dates}\n\n${form.message}`,
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', border: '1px solid #e2d9d0', background: 'white',
    padding: '.7rem 1rem', fontSize: '.9rem', fontFamily: 'inherit',
    color: '#1a1614', outline: 'none', boxSizing: 'border-box' as const
  }
  const labelStyle = { display: 'block', fontSize: '.8rem', fontWeight: 500, color: '#1a1614', marginBottom: '.4rem' }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#faf8f5', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400&display=swap');
        input:focus, select:focus, textarea:focus { border-color: #c9a84c !important; }
        .dv-btn { background: #1a1a2e; color: #f5f0e8; border: none; padding: .85rem 2rem; font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; font-weight: 500; cursor: pointer; font-family: inherit; transition: background .2s; }
        .dv-btn:hover { background: #8b3a2a; }
        .dv-btn:disabled { opacity: .6; cursor: not-allowed; }
      `}</style>

      {/* Header */}
      <div style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>✦ Formations</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.1, marginBottom: '.75rem' }}>
            Demande de <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>devis</em>
          </h1>
          <div style={{ width: 48, height: 2, background: '#c9a84c', margin: '1rem 0' }}></div>
          <p style={{ color: 'rgba(245,240,232,.65)', lineHeight: 1.7 }}>
            Remplissez ce formulaire pour recevoir un devis personnalisé. Nous vous répondons sous 48 heures ouvrées.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 2rem' }}>
        {status === 'success' ? (
          <div style={{ border: '1px solid #c9a84c', padding: '3rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 300, marginBottom: '.75rem' }}>
              Demande envoyée
            </p>
            <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
              Nous avons bien reçu votre demande de devis. Vous recevrez une réponse sous 48 heures ouvrées à l'adresse indiquée.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Nom et prénom *</label>
                <input style={inputStyle} type="text" value={form.nom} onChange={set('nom')} required placeholder="Isidore Bony" />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input style={inputStyle} type="email" value={form.email} onChange={set('email')} required placeholder="votre@email.com" />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Organisation / Entreprise</label>
              <input style={inputStyle} type="text" value={form.organisation} onChange={set('organisation')} placeholder="Nom de votre organisation" />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Formation souhaitée *</label>
              <select style={inputStyle} value={form.formation} onChange={set('formation')} required>
                <option value="">Sélectionner une formation</option>
                {FORMATIONS.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Nombre de participants *</label>
                <input style={inputStyle} type="number" min="1" value={form.participants} onChange={set('participants')} required placeholder="Ex : 10" />
              </div>
              <div>
                <label style={labelStyle}>Modalité souhaitée *</label>
                <select style={inputStyle} value={form.modalite} onChange={set('modalite')} required>
                  <option value="">Choisir</option>
                  <option value="Présentiel">Présentiel</option>
                  <option value="Distanciel">Distanciel</option>
                  <option value="Hybride">Hybride</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Dates envisagées</label>
              <input style={inputStyle} type="text" value={form.dates} onChange={set('dates')} placeholder="Ex : Septembre 2026, ou flexible" />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}>Informations complémentaires</label>
              <textarea
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                value={form.message}
                onChange={set('message')}
                placeholder="Contexte, objectifs spécifiques, contraintes particulières..."
              />
            </div>

            {status === 'error' && (
              <p style={{ fontSize: '.85rem', color: '#8b3a2a', marginBottom: '1rem' }}>
                Une erreur s'est produite. Écrivez directement à contact.isi@stratnov.fr
              </p>
            )}

            <button type="submit" className="dv-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>

            <p style={{ fontSize: '.72rem', color: '#8a7b75', marginTop: '1rem', lineHeight: 1.6 }}>
              Ces informations sont utilisées uniquement pour traiter votre demande de devis. Elles ne sont jamais partagées avec des tiers.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
