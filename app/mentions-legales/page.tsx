export default function MentionsLegalesPage() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#faf8f5', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400&display=swap');
        .ml-section { margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid #e2d9d0; }
        .ml-section:last-child { border-bottom: none; }
        .ml-h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 400; color: #1a1614; margin-bottom: 1rem; }
        .ml-p { font-size: .9rem; color: #4a3f3a; line-height: 1.8; margin-bottom: .75rem; }
        .ml-placeholder { background: #f5f0e8; border: 1px dashed #c9a84c; padding: .25rem .5rem; font-size: .85rem; color: #8a7b75; font-style: italic; display: inline; }
      `}</style>

      {/* Header */}
      <div style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>Informations légales</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.8rem', fontWeight: 300, lineHeight: 1.1 }}>
            Mentions légales
          </h1>
          <div style={{ width: 48, height: 2, background: '#c9a84c', margin: '1rem 0' }}></div>
          <p style={{ color: 'rgba(245,240,232,.6)', fontSize: '.9rem' }}>Dernière mise à jour : juin 2026</p>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 2rem' }}>

        <div className="ml-section">
          <h2 className="ml-h2">1. Éditeur du site</h2>
          <p className="ml-p">Le site stratnov.fr est édité par :</p>
          <p className="ml-p">
            <strong>Nom :</strong> <span className="ml-placeholder">À renseigner</span><br />
            <strong>Statut :</strong> <span className="ml-placeholder">À renseigner (auto-entrepreneur, société...)</span><br />
            <strong>SIRET :</strong> <span className="ml-placeholder">À renseigner</span><br />
            <strong>Adresse :</strong> <span className="ml-placeholder">À renseigner</span><br />
            <strong>Email :</strong> contact.isi@stratnov.fr
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">2. Directeur de la publication</h2>
          <p className="ml-p">
            Le directeur de la publication est <span className="ml-placeholder">À renseigner</span>, joignable à l'adresse contact.isi@stratnov.fr.
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">3. Hébergement</h2>
          <p className="ml-p">
            <strong>Frontend :</strong> Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis. Site : vercel.com
          </p>
          <p className="ml-p">
            <strong>Backend et base de données :</strong> OVHcloud, 2 rue Kellermann, 59100 Roubaix, France. Site : ovhcloud.com
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">4. Propriété intellectuelle</h2>
          <p className="ml-p">
            L'ensemble du contenu de ce site (textes, images, couvertures de livres, structure, mise en page) est la propriété exclusive de l'éditeur, sauf mentions contraires.
          </p>
          <p className="ml-p">
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable écrite.
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">5. Données personnelles</h2>
          <p className="ml-p">
            Les données collectées via les formulaires (contact, devis, newsletter) sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont jamais cédées à des tiers.
          </p>
          <p className="ml-p">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez : contact.isi@stratnov.fr
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">6. Cookies</h2>
          <p className="ml-p">
            Ce site n'utilise pas de cookies à des fins publicitaires ou de traçage. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">7. Limitation de responsabilité</h2>
          <p className="ml-p">
            Les informations publiées sur ce site sont données à titre informatif. L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, mais ne peut garantir l'exhaustivité ou l'absence d'erreur.
          </p>
          <p className="ml-p">
            Les contenus relatifs au droit, au management et à la gestion ne constituent pas des conseils juridiques ou financiers et ne sauraient remplacer l'avis d'un professionnel qualifié.
          </p>
        </div>

        <div className="ml-section">
          <h2 className="ml-h2">8. Droit applicable</h2>
          <p className="ml-p">
            Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.
          </p>
        </div>

      </div>
    </div>
  )
}
