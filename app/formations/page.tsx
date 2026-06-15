'use client'

import { useState } from 'react'
import Link from 'next/link'

type Niveau = 'initiation' | 'perfectionnement'
type Domaine = {
  code: string
  label: string
  couleur: string
  initiation: Formation
  perfectionnement: Formation
}
type Formation = {
  code: string
  objectifs: string
  public: string
  prerequis: string
  modules: string[]
  methodes: string[]
  duree: string
  modalites: string[]
}

const DOMAINES: Domaine[] = [
  {
    code: 'MGT', label: 'Management', couleur: '#1a3a5c',
    initiation: {
      code: 'MGT-01', objectifs: "Comprendre les fondamentaux du management, identifier les styles de leadership, acquérir les bases de la communication managériale et de la gestion d'équipe.",
      public: "Tout public. Nouveaux managers, chefs d'équipe débutants, collaborateurs en évolution vers des fonctions d'encadrement.",
      prerequis: 'Aucun prérequis', modules: ['Rôles et responsabilités du manager', 'Les styles de management', 'Communication interpersonnelle et écoute active', 'Fixer des objectifs SMART et motiver son équipe', 'Gérer les conflits au quotidien', 'Introduction à la conduite de réunion'],
      methodes: ['Apports théoriques', 'Mises en situation', 'Jeux de rôle', 'Études de cas', 'Quiz interactifs'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'MGT-02', objectifs: "Maîtriser les outils avancés du management stratégique, développer l'intelligence émotionnelle, piloter la performance et accompagner le changement.",
      public: "Managers expérimentés, directeurs d'équipes, responsables de service.",
      prerequis: 'MGT-01 ou 2 ans d\'expérience managériale', modules: ['Management stratégique et vision d\'entreprise', 'Intelligence émotionnelle et leadership transformationnel', 'Pilotage de la performance et tableaux de bord RH', 'Conduite du changement et gestion de la résistance', 'Management à distance et équipes hybrides', 'Coaching et développement des talents'],
      methodes: ['Ateliers pratiques', 'Coaching individuel', 'Simulations', 'Retours d\'expérience', 'Plan d\'action personnel'], duree: '5 jours (35h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'GRH', label: 'Gestion des Ressources Humaines', couleur: '#2d5a27',
    initiation: {
      code: 'GRH-01', objectifs: "Comprendre les missions de la fonction RH, maîtriser le cadre légal de base, conduire un recrutement et gérer les contrats de travail essentiels.",
      public: "Tout public. Assistants RH, responsables non-spécialistes, TPE/PME souhaitant internaliser la fonction RH.",
      prerequis: 'Aucun prérequis', modules: ['Les missions et rôles de la fonction RH', 'Le droit du travail : contrats, durée, rupture', "Recrutement : de l'offre à l'intégration", 'Gestion administrative du personnel', 'Introduction à la paie et aux charges sociales', 'Le dialogue social et les IRP'],
      methodes: ['Exposés théoriques', 'Documents réels', 'Exercices pratiques', 'Quiz'], duree: '4 jours (28h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'GRH-02', objectifs: "Piloter la stratégie RH, développer la marque employeur, gérer les plans de formation, mener des entretiens de performance et prévenir les risques psychosociaux.",
      public: "DRH, responsables RH expérimentés, business partners RH.",
      prerequis: 'GRH-01 ou 3 ans en RH', modules: ['Stratégie RH et GPEC / GEPP', 'Marque employeur et attractivité des talents', 'Ingénierie de la formation professionnelle', 'Évaluation de la performance et entretiens annuels', 'Prévention des risques psychosociaux (RPS)', 'SIRH et digitalisation de la fonction RH'],
      methodes: ['Ateliers collaboratifs', "Cas d'entreprises", 'Benchmarking', 'Plan de développement RH'], duree: '5 jours (35h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'RSE', label: 'Responsabilité Sociale des Entreprises', couleur: '#3d6b1a',
    initiation: {
      code: 'RSE-01', objectifs: "Définir la RSE et ses enjeux, comprendre les normes internationales (ISO 26000, ODD), identifier les parties prenantes et initier une démarche RSE.",
      public: "Tout public. Dirigeants, responsables qualité, chargés de communication, collaborateurs sensibles aux enjeux durables.",
      prerequis: 'Aucun prérequis', modules: ['Histoire et définition de la RSE', 'Les référentiels : ISO 26000, Pacte Mondial, ODD', 'Cartographie des parties prenantes', 'Les 3 piliers : économique, social, environnemental', 'Initier et communiquer une démarche RSE'],
      methodes: ['Exposés', 'Études de cas RSE', 'Ateliers de sensibilisation'], duree: '2 jours (14h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'RSE-02', objectifs: "Concevoir et piloter une stratégie RSE intégrée, réaliser un bilan carbone, rédiger un rapport extra-financier (CSRD) et évaluer l'impact RSE.",
      public: "Responsables RSE/développement durable, DAF, directeurs généraux, auditeurs extra-financiers.",
      prerequis: 'RSE-01 recommandé', modules: ['Stratégie RSE intégrée et matérialité', 'Bilan carbone et empreinte environnementale', 'Reporting extra-financier — CSRD / DPEF', 'Achats responsables et chaîne de valeur durable', "Mesure d'impact et indicateurs clés RSE", 'Label et certification RSE'],
      methodes: ['Ateliers terrain', 'Outils de diagnostic', 'Reporting réel', 'Plan d\'action RSE'], duree: '4 jours (28h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'ESG', label: 'Environnement, Social et Gouvernance', couleur: '#1a5c4a',
    initiation: {
      code: 'ESG-01', objectifs: "Comprendre les critères ESG, leur usage dans la finance durable et l'investissement responsable (ISR), et les intégrer dans la stratégie d'entreprise.",
      public: "Tout public. Investisseurs, analystes financiers, dirigeants, banquiers, responsables conformité.",
      prerequis: 'Notions de base en finance souhaitées', modules: ['Définition et historique des critères ESG', "L'investissement socialement responsable (ISR)", 'Les agences de notation ESG', 'Réglementation ESG européenne (SFDR, Taxonomie)', "Intégrer les ESG dans la gouvernance d'entreprise"],
      methodes: ['Cours magistraux', 'Analyse de rapports ESG', 'Études de portefeuilles'], duree: '2 jours (14h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'ESG-02', objectifs: "Maîtriser les outils de scoring ESG, intégrer les risques climatiques (TCFD), construire une politique ESG d'entreprise et répondre aux exigences réglementaires avancées.",
      public: "Analystes ESG, responsables risques, directeurs financiers, compliance officers.",
      prerequis: 'ESG-01 ou formation Finance', modules: ['Méthodologies de scoring et évaluation ESG avancée', 'Risques climatiques et TCFD', "Construction d'une politique ESG d'entreprise", 'SFDR, PAI et conformité réglementaire avancée', 'Communication et dialogue avec les investisseurs ESG'],
      methodes: ['Cas pratiques', 'Outils de scoring', 'Simulation réglementaire'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'PI', label: 'Propriété Intellectuelle', couleur: '#5c3a1a',
    initiation: {
      code: 'PI-01', objectifs: "Distinguer les différents droits de propriété intellectuelle (brevets, marques, droits d'auteur), comprendre leur protection et éviter les infractions courantes.",
      public: "Tout public. Entrepreneurs, créateurs, chefs de produit, équipes marketing, R&D et juridique non spécialisées.",
      prerequis: 'Aucun prérequis', modules: ['Panorama de la propriété intellectuelle', 'Le brevet : comment protéger une invention', 'Les marques : enregistrement et défense', "Le droit d'auteur et les droits voisins", 'Les dessins et modèles industriels', 'Risques de contrefaçon et sanctions'],
      methodes: ['Cours théoriques', 'Exemples concrets', 'Quiz de validation'], duree: '2 jours (14h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'PI-02', objectifs: "Élaborer une stratégie de PI, gérer un portefeuille de brevets/marques, négocier des licences et conduire des procédures de défense ou d'attaque en contrefaçon.",
      public: "Juristes d'entreprise, responsables PI, ingénieurs brevets, directeurs R&D.",
      prerequis: 'PI-01 ou pratique PI', modules: ['Stratégie de portefeuille PI', 'Licences, cessions et valorisation des actifs immatériels', 'Procédures de contrefaçon et actions judiciaires', 'PI à l\'international (PCT, EUIPO, OMPI)', 'PI et numérique : logiciels, IA, données'],
      methodes: ['Ateliers pratiques', 'Jurisprudence commentée', 'Négociation simulée'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'DJR', label: 'Droit et Juridique', couleur: '#4a1a5c',
    initiation: {
      code: 'DJR-01', objectifs: "Appréhender les bases du droit des affaires (contrats, sociétés, responsabilité civile) et sécuriser les actes courants de l'entreprise.",
      public: "Tout public. Dirigeants de TPE/PME, commerciaux, acheteurs, assistants de direction sans formation juridique.",
      prerequis: 'Aucun prérequis', modules: ["Les sources du droit et l'organisation judiciaire", "Le droit des contrats : formation, exécution, rupture", 'Les formes juridiques d\'entreprise (SARL, SAS, SA…)', 'Responsabilité civile et pénale du dirigeant', 'Introduction au droit de la consommation et du commerce'],
      methodes: ['Exposés', 'Analyse de contrats réels', 'Quiz juridiques'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'DJR-02', objectifs: "Maîtriser les mécanismes avancés du droit des affaires : fusions-acquisitions, droit de la concurrence, contentieux commerciaux, RGPD et compliance.",
      public: "Juristes d'entreprise, directeurs juridiques, avocats, responsables conformité.",
      prerequis: 'DJR-01 ou formation juridique', modules: ['Fusions, acquisitions et due diligence juridique', 'Droit de la concurrence et pratiques anticoncurrentielles', 'RGPD avancé et gestion des données personnelles', "Compliance et programmes d'éthique des affaires", 'Contentieux commerciaux et modes alternatifs de règlement'],
      methodes: ['Cas pratiques avancés', 'Jurisprudence récente', 'Simulation de négociation'], duree: '4 jours (28h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'CPT', label: 'Comptabilité', couleur: '#1a4a5c',
    initiation: {
      code: 'CPT-01', objectifs: "Comprendre les principes de la comptabilité générale, lire un bilan et un compte de résultat, enregistrer les opérations courantes.",
      public: "Tout public. Non-comptables, créateurs d'entreprise, responsables de PME souhaitant mieux lire leurs chiffres.",
      prerequis: 'Aucun prérequis', modules: ['Principes et concepts fondamentaux de la comptabilité', 'Le plan comptable général (PCG)', 'Enregistrement des opérations courantes', 'Lecture et analyse du bilan', 'Le compte de résultat et la formation du résultat', 'Notions de TVA et déclarations fiscales'],
      methodes: ['Exercices comptables', "Cas pratiques d'entreprise", 'Logiciels de simulation'], duree: '4 jours (28h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'CPT-02', objectifs: "Maîtriser les opérations de clôture, les immobilisations, les provisions, la liasse fiscale, la consolidation des comptes et les normes IFRS.",
      public: "Comptables, responsables comptables, experts-comptables juniors, DAF.",
      prerequis: 'CPT-01 ou BTS Comptabilité', modules: ["Opérations de clôture et travaux d'inventaire", 'Immobilisations, amortissements et dépréciations', 'Provisions, charges à payer, produits constatés d\'avance', 'Liasse fiscale et intégration fiscale', 'Introduction aux normes IFRS', 'Consolidation des comptes de groupe'],
      methodes: ['Exercices avancés', 'Liasse fiscale réelle', 'Logiciels comptables', 'IFRS comparatif'], duree: '5 jours (35h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'CRE', label: "Création d'Entreprise", couleur: '#5c4a1a',
    initiation: {
      code: 'CRE-01', objectifs: "Identifier les étapes clés de la création d'entreprise, choisir une forme juridique adaptée, comprendre les obligations légales, sociales et fiscales initiales.",
      public: "Tout public. Porteurs de projet, futurs entrepreneurs, salariés souhaitant créer leur activité.",
      prerequis: 'Aucun prérequis', modules: ["De l'idée au projet entrepreneurial", 'Choisir sa forme juridique (auto-entrepreneur, SARL, SAS…)', 'Les démarches de création (CFE, INPI, immatriculation)', 'Fiscalité et régimes d\'imposition pour le créateur', 'Les aides et financements à la création', 'Construire son premier budget prévisionnel'],
      methodes: ['Ateliers projet', 'Témoignages entrepreneurs', 'Outils de business plan'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'CRE-02', objectifs: "Structurer un business plan solide, lever des fonds, négocier avec des investisseurs, piloter la croissance post-création et anticiper les risques.",
      public: "Créateurs ayant déjà lancé leur activité, startups en phase d'amorçage, entrepreneurs cherchant à structurer et financer leur développement.",
      prerequis: 'CRE-01 ou entreprise existante', modules: ['Business plan avancé et modèle économique', 'Levée de fonds : love money, BA, VC, crowdfunding', 'Négociation avec les investisseurs et term sheet', 'Gouvernance et pacte d\'associés', 'Croissance, pivot et gestion de la trésorerie'],
      methodes: ['Pitch training', 'Mentoring', 'Simulations de levée'], duree: '4 jours (28h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'GES', label: "Gestion d'Entreprise", couleur: '#2a4a1a',
    initiation: {
      code: 'GES-01', objectifs: "Comprendre les mécanismes de gestion d'une entreprise : pilotage financier, gestion des stocks, relation client et organisation opérationnelle.",
      public: "Tout public. Dirigeants de TPE/PME, managers opérationnels, responsables de service sans formation en gestion.",
      prerequis: 'Aucun prérequis', modules: ['Les fonctions clés de l\'entreprise', 'Lecture des états financiers essentiels', 'Gestion des stocks et des approvisionnements', 'Relation client et gestion commerciale', 'Tableaux de bord de gestion simples', 'Introduction au budget d\'exploitation'],
      methodes: ['Exposés illustrés', 'Exercices de simulation', 'Études de cas PME'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'GES-02', objectifs: "Piloter la performance globale de l'entreprise, optimiser la chaîne de valeur, structurer un plan stratégique et maîtriser les outils de gestion avancés.",
      public: "Directeurs généraux, DAF, responsables de centre de profit, consultants en organisation.",
      prerequis: "GES-01 ou expérience en gestion d'entreprise", modules: ['Stratégie d\'entreprise et positionnement concurrentiel', 'Analyse financière avancée et diagnostic', 'Optimisation de la chaîne de valeur', 'Gestion de projet et pilotage de la performance', 'Plan stratégique et déploiement opérationnel', 'Digitalisation et transformation des modèles'],
      methodes: ['Cas d\'entreprises réels', 'Diagnostic stratégique', 'Plan d\'action personnalisé'], duree: '5 jours (35h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'CDG', label: 'Contrôle de Gestion', couleur: '#1a2a5c',
    initiation: {
      code: 'CDG-01', objectifs: "Découvrir les outils fondamentaux du contrôle de gestion : budgets, coûts, tableaux de bord et indicateurs de performance.",
      public: "Tout public. Comptables souhaitant évoluer, contrôleurs de gestion juniors, responsables de service impliqués dans le budget.",
      prerequis: 'Notions de comptabilité souhaitées', modules: ['Rôle et missions du contrôleur de gestion', 'Les coûts : directs, indirects, variables, fixes', 'La méthode des coûts complets', 'Le budget : construction et suivi', 'Les indicateurs de performance (KPI)', 'Introduction au tableau de bord'],
      methodes: ['Cours théoriques', 'Exercices de calcul', 'Mini-cas pratiques'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'CDG-02', objectifs: "Maîtriser le contrôle de gestion avancé : comptabilité analytique, reporting, balanced scorecard, contrôle budgétaire et analyse des écarts.",
      public: "Contrôleurs de gestion, DAF, directeurs de business units, responsables reporting.",
      prerequis: 'CDG-01 ou expérience en contrôle de gestion', modules: ['Comptabilité analytique avancée et méthode ABC', 'Reporting de gestion et consolidation', 'Balanced Scorecard et pilotage stratégique', 'Contrôle budgétaire et analyse des écarts', 'Gestion prévisionnelle et rolling forecast', 'Outils digitaux et BI pour le contrôle de gestion'],
      methodes: ['Cas complexes', 'Tableaux de bord réels', 'Outils BI', 'Projets de reporting'], duree: '5 jours (35h)', modalites: ['Présentiel', 'Distanciel']
    }
  },
  {
    code: 'AUD', label: 'Audit', couleur: '#3a1a4a',
    initiation: {
      code: 'AUD-01', objectifs: "Comprendre les fondements de l'audit, distinguer audit interne et externe, maîtriser les étapes d'une mission d'audit et les normes de base.",
      public: "Tout public. Auditeurs juniors, comptables souhaitant se reconvertir, contrôleurs internes débutants.",
      prerequis: 'Notions de comptabilité', modules: ["Les fondements de l'audit : définitions et enjeux", 'Audit interne vs audit externe : rôles et différences', "Les étapes d'une mission d'audit", 'Les normes d\'audit (ISA, NEP)', 'Évaluation des risques et contrôles internes', 'Rédaction du rapport d\'audit'],
      methodes: ['Cours théoriques', 'Exemples de rapports', 'Exercices de terrain'], duree: '3 jours (21h)', modalites: ['Présentiel', 'Distanciel']
    },
    perfectionnement: {
      code: 'AUD-02', objectifs: "Conduire des missions d'audit complexes, évaluer un dispositif de contrôle interne, maîtriser l'audit des systèmes d'information et l'audit forensique.",
      public: "Auditeurs confirmés, responsables audit interne, commissaires aux comptes, risk managers.",
      prerequis: 'AUD-01 ou expérience en audit', modules: ["Planification et conduite d'une mission d'audit complexe", 'Évaluation du dispositif de contrôle interne (COSO)', "Audit des systèmes d'information (DSI)", 'Audit forensique et détection des fraudes', 'Communication des résultats et suivi des recommandations', 'Certification CIA et normes IIA'],
      methodes: ['Missions simulées', 'Rapports réels commentés', 'Cas de fraude', 'Travaux en groupe'], duree: '5 jours (35h)', modalites: ['Présentiel', 'Distanciel']
    }
  }
]

export default function FormationsPage() {
  const [domaineActif, setDomaineActif] = useState<string | null>(null)
  const [niveauActif, setNiveauActif] = useState<Niveau>('initiation')
  const [filtreNiveau, setFiltreNiveau] = useState<'tous' | Niveau>('tous')

  const domaine = DOMAINES.find(d => d.code === domaineActif)
  const formation = domaine ? domaine[niveauActif] : null

  const visibles = filtreNiveau === 'tous'
    ? DOMAINES
    : DOMAINES.filter(() => true) // tous les domaines, le filtre s'applique à l'affichage

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#faf8f5', minHeight: '100vh' }}>
      <style>{`
        .fd-card { transition: transform .25s, box-shadow .25s; cursor: pointer; }
        .fd-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(26,22,20,.1); }
        .fd-tag { display: inline-block; font-size: 10px; letter-spacing: .15em; text-transform: uppercase; padding: .2rem .6rem; border-radius: 20px; font-weight: 500; }
        .fd-tag-init { background: rgba(90,138,90,.15); color: #3d6b3d; }
        .fd-tag-perf { background: rgba(184,145,42,.15); color: #7a5f1a; }
        .overlay { position: fixed; inset: 0; background: rgba(26,22,20,.6); z-index: 50; display: flex; align-items: stretch; justify-content: flex-end; }
        .panel { width: 100%; max-width: 520px; background: #faf8f5; overflow-y: auto; }
        .niveau-btn { padding: .4rem 1rem; font-size: .8rem; letter-spacing: .05em; border: 1px solid; cursor: pointer; font-family: inherit; transition: all .2s; border-radius: 4px; }
      `}</style>

      {/* Header */}
      <div style={{ background: '#1a1a2e', color: '#f5f0e8', padding: '4rem 2rem 3rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: '.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>✦ Formations proposées</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', fontWeight: 300, lineHeight: 1.1, marginBottom: '.75rem' }}>
            Formations <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>générales et spécifiques</em>
          </h1>
          <div style={{ width: 48, height: 2, background: '#c9a84c', margin: '1rem 0' }}></div>
          <p style={{ color: 'rgba(245,240,232,.65)', maxWidth: 560, lineHeight: 1.7 }}>
            11 domaines d'expertise · Présentiel et distanciel · Initiation et perfectionnement.
            Ces formations sont présentées à titre indicatif. Pour toute demande ou devis, contactez-nous.
          </p>
        </div>
      </div>

      {/* Légende niveaux */}
      <div style={{ background: '#1a1614', padding: '1rem 2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.8rem', color: 'rgba(255,255,255,.6)' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}></span>
          Formations générales (acquisition de connaissances)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.8rem', color: 'rgba(255,255,255,.6)' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#c9a84c', display: 'inline-block' }}></span>
          Formations spécifiques (acquisition de compétences)
        </span>
      </div>

      {/* Grille domaines */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {DOMAINES.map(d => (
            <div key={d.code} className="fd-card" style={{ background: 'white', border: '1px solid #e2d9d0', overflow: 'hidden' }}>
              {/* Bandeau couleur */}
              <div style={{ background: d.couleur, padding: '1.25rem 1.5rem' }}>
                <p style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '.25rem' }}>{d.code}</p>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: 'white', fontWeight: 300, lineHeight: 1.3 }}>{d.label}</h2>
              </div>
              {/* Corps */}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  <button
                    onClick={() => { setDomaineActif(d.code); setNiveauActif('initiation') }}
                    style={{ textAlign: 'left', background: 'none', border: '1px solid #e2d9d0', padding: '.75rem 1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>
                      <span className="fd-tag fd-tag-init" style={{ marginBottom: '.3rem', display: 'block' }}>Initiation</span>
                      <span style={{ fontSize: '.8rem', color: '#4a3f3a', display: 'block' }}>{d.initiation.code} · {d.initiation.duree}</span>
                    </span>
                    <span style={{ color: '#c9a84c', fontSize: '.9rem' }}>→</span>
                  </button>
                  <button
                    onClick={() => { setDomaineActif(d.code); setNiveauActif('perfectionnement') }}
                    style={{ textAlign: 'left', background: 'none', border: '1px solid #e2d9d0', padding: '.75rem 1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>
                      <span className="fd-tag fd-tag-perf" style={{ marginBottom: '.3rem', display: 'block' }}>Perfectionnement</span>
                      <span style={{ fontSize: '.8rem', color: '#4a3f3a', display: 'block' }}>{d.perfectionnement.code} · {d.perfectionnement.duree}</span>
                    </span>
                    <span style={{ color: '#c9a84c', fontSize: '.9rem' }}>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem', padding: '2.5rem', background: '#1a1a2e', color: '#f5f0e8', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', fontWeight: 300, marginBottom: '.5rem' }}>
            Une formation vous intéresse ?
          </p>
          <p style={{ color: 'rgba(245,240,232,.6)', fontSize: '.9rem', marginBottom: '1.5rem' }}>
            Contactez-nous pour obtenir un devis personnalisé ou des informations complémentaires.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '.7rem 2rem', background: '#c9a84c', color: '#1a1a2e', textDecoration: 'none', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            Demander un devis
          </Link>
        </div>
      </div>

      {/* Panneau détail */}
      {domaineActif && formation && domaine && (
        <div className="overlay" onClick={() => setDomaineActif(null)}>
          <div className="panel" onClick={e => e.stopPropagation()}>
            {/* Header panneau */}
            <div style={{ background: domaine.couleur, padding: '1.5rem', position: 'sticky', top: 0, zIndex: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: '.25rem' }}>{domaine.code}</p>
                  <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: 'white', fontWeight: 300 }}>{domaine.label}</h2>
                </div>
                <button onClick={() => setDomaineActif(null)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,.6)', cursor: 'pointer', fontSize: '1.25rem', lineHeight: 1 }}>✕</button>
              </div>
              {/* Toggle niveau */}
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                <button
                  className="niveau-btn"
                  onClick={() => setNiveauActif('initiation')}
                  style={{ background: niveauActif === 'initiation' ? 'rgba(255,255,255,.2)' : 'transparent', color: 'white', borderColor: 'rgba(255,255,255,.3)' }}
                >
                  Initiation
                </button>
                <button
                  className="niveau-btn"
                  onClick={() => setNiveauActif('perfectionnement')}
                  style={{ background: niveauActif === 'perfectionnement' ? 'rgba(255,255,255,.2)' : 'transparent', color: 'white', borderColor: 'rgba(255,255,255,.3)' }}
                >
                  Perfectionnement
                </button>
              </div>
            </div>

            <div style={{ padding: '1.5rem' }}>
              {/* Badge niveau */}
              <span className={`fd-tag ${niveauActif === 'initiation' ? 'fd-tag-init' : 'fd-tag-perf'}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>
                {niveauActif === 'initiation' ? 'Formation générale — Acquisition de connaissances' : 'Formation spécifique — Acquisition de compétences'}
              </span>

              {/* Code et durée */}
              <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '.72rem', padding: '.25rem .75rem', border: '1px solid #e2d9d0', color: '#8a7b75' }}>{formation.code}</span>
                <span style={{ fontSize: '.72rem', padding: '.25rem .75rem', border: '1px solid #e2d9d0', color: '#8a7b75' }}>{formation.duree}</span>
                {formation.modalites.map(m => (
                  <span key={m} style={{ fontSize: '.72rem', padding: '.25rem .75rem', border: '1px solid #e2d9d0', color: '#8a7b75' }}>{m}</span>
                ))}
              </div>

              {/* Objectifs */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.5rem' }}>Objectifs</p>
                <p style={{ fontSize: '.9rem', color: '#4a3f3a', lineHeight: 1.7 }}>{formation.objectifs}</p>
              </div>

              {/* Public */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.5rem' }}>Public cible</p>
                <p style={{ fontSize: '.85rem', color: '#4a3f3a', lineHeight: 1.7 }}>{formation.public}</p>
              </div>

              {/* Prérequis */}
              <div style={{ marginBottom: '1.5rem', padding: '.75rem 1rem', background: '#f5f0e8', borderLeft: '3px solid #c9a84c' }}>
                <p style={{ fontSize: '.7rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.25rem' }}>Prérequis</p>
                <p style={{ fontSize: '.85rem', color: '#4a3f3a' }}>{formation.prerequis}</p>
              </div>

              {/* Modules */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>Programme</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                  {formation.modules.map((m, i) => (
                    <li key={i} style={{ display: 'flex', gap: '.75rem', fontSize: '.85rem', color: '#4a3f3a', paddingBottom: '.5rem', borderBottom: '1px solid #f0ece6' }}>
                      <span style={{ color: '#c9a84c', fontFamily: 'Georgia, serif', minWidth: 20 }}>0{i + 1}</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Méthodes */}
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '.75rem' }}>Méthodes pédagogiques</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                  {formation.methodes.map((m, i) => (
                    <span key={i} style={{ fontSize: '.75rem', padding: '.25rem .75rem', border: '1px solid #e2d9d0', color: '#4a3f3a' }}>{m}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                style={{ display: 'block', textAlign: 'center', padding: '.8rem', background: '#1a1a2e', color: '#f5f0e8', textDecoration: 'none', fontSize: '.8rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 500 }}
                onClick={() => setDomaineActif(null)}
              >
                Demander un devis pour cette formation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
