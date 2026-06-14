'use client'

import { useState } from 'react'
import Image from 'next/image'

const TRILOGIE = {
  id: 'trilogie',
  label: 'Trilogie',
  collection: "L'Éveil d'Anathine AYA",
  soustitre: 'Chroniques d\'une âme nouvelle',
  tomes: [
    {
      id: 'tome1',
      titre: 'Tome I — Les Miroirs Brisés',
      genre: 'Roman initiatique · Littérature engagée',
      pages: 156,
      image: '/anathine-trilogie.png',
      resume: "Et si changer le monde commençait par voir vraiment les gens ? À Alkebulan, Anathine grandit entre la chaleur des bras de sa mère et le bruit assourdissant des fractures humaines. Dès son plus jeune âge, elle perçoit ce que les adultes ignorent : le monde est double. Entre les leçons de Yawah qui parle à ses plantes et d'Elijah qui répare bien plus que des vélos, Anathine comprend une vérité simple mais révolutionnaire : chaque geste compte.",
      extrait: "L'aiguille de l'horloge n'avait plus bougé depuis ce soir-là. Anathine la fixa longtemps avant de comprendre : chaque acte de violence est un caillou lancé sur la glace des cœurs. Mais chaque geste de solidarité est une source de chaleur. Répétée, multipliée, partagée, elle finit par faire fondre les murs. Elle plantait sa graine dans un pot posé sur le rebord de la fenêtre. Puis elle appela Sam.",
      dispo: 'Disponible en broché, relié et e-book'
    },
    {
      id: 'tome2',
      titre: 'Tome II — Les Miroirs en Reconquête',
      genre: 'Roman initiatique · Littérature engagée',
      pages: 222,
      image: '/anathine-tome2.png',
      resume: "Et si l'héritage le plus précieux n'était pas une réponse mais une question ? Dix ans après la disparition d'Anathine, ses enfants Lior et Umia découvrent ses carnets remplis de doutes, de victoires et de principes immuables. Face à l'indifférence glacée des bureaucrates et aux divisions qui déchirent leur communauté, ils doivent choisir entre reproduire les méthodes du passé ou en inventer de nouvelles.",
      extrait: "Lior serra le stéthoscope d'Anathine contre sa poitrine. Les murs de l'hôpital portaient les cicatrices des crises passées. Son père Siloé posa une main sur son épaule : « On ne répare pas le monde, Lior. On répare un morceau à la fois. Et on recommence. »",
      dispo: 'Disponible en broché, relié et e-book'
    },
    {
      id: 'tome3',
      titre: 'Tome III — Les Miroirs et les Horizons',
      genre: 'Roman initiatique · Littérature engagée',
      pages: 250,
      image: '/anathine-tome3.png',
      resume: "Et si le plus grand défi n'était pas de changer le monde mais de rester fidèle à soi en le faisant ? Lior et Umia ont hérité des carnets d'Anathine et de son rêve : un centre communautaire où la solidarité se vit au quotidien. Mais le mouvement grandit et avec lui les dilemmes. Faut-il s'institutionnaliser pour survivre, au risque de trahir l'esprit initial ?",
      extrait: "Lior lut les trois pages de Yacine, serrées d'écriture et de schémas. Il y avait là une idée juste mais incomplète. Lior posa les feuilles. Pas de « mais ». Juste une question : « Quand tu écris ça, tu as pensé à ce qui se passe quand deux familles ont des besoins contradictoires ? » Yacine réfléchit vraiment. « Non. » « Alors c'est ça qu'il faut travailler. Pas l'idée. La mécanique. »",
      dispo: 'Disponible en broché, relié et e-book'
    }
  ]
}

const AUTRES = [
  {
    id: 'choisir',
    titre: 'Choisir de rester',
    genre: 'Littérature romantique',
    pages: 149,
    image: '/choisir-de-rester.png',
    resume: "Et si la plus grande preuve d'amour était de rester ? Clara et Georges ont construit leur vie sur des certitudes. Pourtant, quand l'horloge s'arrête et que les non-dits s'accumulent, une question les hante : faut-il tout quitter ou choisir de se battre ? Entre une robe de velours bleu qui porte le poids des souvenirs et une lettre jamais envoyée, ce roman explore avec justesse la décision la plus intime qui soit.",
    extrait: "L'aiguille de l'horloge n'avait plus bougé depuis ce soir-là. Clara la fixa longtemps avant de poser ses doigts sur le velours usé de sa robe. Elle revit alors le regard de Georges, ce jour où il avait glissé l'enveloppe sous le tapis sans un mot. La lettre était toujours là, intacte, comme leur amour malgré les tempêtes.",
    dispo: 'Disponible en broché, relié et e-book'
  },
  {
    id: 'dirigeant',
    titre: 'Penser et Agir comme un Dirigeant',
    soustitre: 'Ce que personne ne vous dit avant de diriger',
    genre: 'Essai · Management · Leadership',
    pages: 150,
    image: '/penser-agir-dirigeant.jpg',
    resume: "Et si le vrai défi du dirigeant n'était pas de savoir-faire mais d'oser être ? Isidore Bony déconstruit les illusions sur le leadership avec une honnêteté rare. À travers des cas concrets, elle révèle ce que diriger exige vraiment : accepter l'incertitude, assumer des arbitrages impossibles et construire une posture qui tienne dans la durée.",
    extrait: "Élisa, directrice générale, reçoit l'appel à 6h47 : un ransomware a chiffré 87 % des données de son entreprise. Les pirates demandent 180 000 euros. À 15h, elle a cartographié trois scénarios. Le lendemain matin, elle annonce sa décision en quinze minutes et dit : « Je ne sais pas si ça va marcher. Je pense que c'est la meilleure décision avec ce que je sais ce matin. »",
    dispo: 'Disponible en broché, relié et e-book'
  }
]

type Tome = typeof TRILOGIE.tomes[0]
type Livre = typeof AUTRES[0]
type Selection = { type: 'tome'; data: Tome } | { type: 'livre'; data: Livre } | null

export default function ManuscritsPage() {
  const [filtre, setFiltre] = useState<'tous' | 'trilogie' | 'roman' | 'essai'>('tous')
  const [selection, setSelection] = useState<Selection>(null)
  const [tomeActif, setTomeActif] = useState(0)

  const fermer = () => setSelection(null)

  return (
    <div className="min-h-screen bg-parchemin">
      {/* Header */}
      <div className="bg-encre text-parchemin py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest text-or uppercase mb-3">Isidore Bony</p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Manuscrits</h1>
          <div className="w-12 h-0.5 bg-or mb-6"></div>
          <p className="text-parchemin/70 text-lg max-w-xl">
            5 œuvres — une trilogie, un roman et un essai sur le leadership.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 mb-14">
          {[
            { key: 'tous', label: 'Tout voir' },
            { key: 'trilogie', label: 'Trilogie' },
            { key: 'roman', label: 'Roman' },
            { key: 'essai', label: 'Essai' },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFiltre(f.key as typeof filtre)}
              className={`px-5 py-2 text-sm tracking-wide border transition-all duration-200 ${
                filtre === f.key
                  ? 'bg-encre text-parchemin border-encre'
                  : 'border-or-clair text-encre hover:border-or'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Trilogie */}
        {(filtre === 'tous' || filtre === 'trilogie') && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs tracking-widest text-or uppercase">Trilogie</p>
              <div className="flex-1 h-px bg-or-clair"></div>
            </div>

            {/* Image trilogie + présentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 p-8 bg-encre text-parchemin">
              <div className="relative h-80 md:h-96">
                <Image
                  src="/anathine-trilogie.png"
                  alt="L'Éveil d'Anathine AYA — Trilogie"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div>
                <p className="text-or text-xs tracking-widest uppercase mb-2">Une trilogie · Une quête · Une renaissance</p>
                <h2 className="font-display text-3xl mb-1">L'Éveil d'Anathine AYA</h2>
                <p className="text-parchemin/60 italic mb-6">Chroniques d'une âme nouvelle</p>
                <p className="text-parchemin/80 text-sm leading-relaxed mb-6">
                  Un voyage initiatique de l'enfance à l'âge adulte, à travers trois tomes qui explorent la solidarité, l'héritage et le prix du leadership quotidien.
                </p>
                <p className="text-or/80 text-xs italic mb-6">« Parfois, il faut se briser pour mieux se reconstruire. »</p>
                <div className="flex gap-3">
                  {TRILOGIE.tomes.map((t, i) => (
                    <button
                      key={t.id}
                      onClick={() => { setTomeActif(i); setSelection({ type: 'tome', data: t }) }}
                      className="text-xs px-3 py-2 border border-or/40 text-or hover:bg-or hover:text-encre transition-colors"
                    >
                      Tome {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 tomes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRILOGIE.tomes.map((tome, i) => (
                <button
                  key={tome.id}
                  onClick={() => { setTomeActif(i); setSelection({ type: 'tome', data: tome }) }}
                  className="text-left group border border-or-clair hover:border-or transition-all duration-300 bg-white overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden bg-encre/5">
                    <Image
                      src={tome.image}
                      alt={tome.titre}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-encre/0 group-hover:bg-encre/20 transition-all duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <span className="text-xs px-2 py-1 bg-or text-encre font-medium">Tome {i + 1}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-encre mb-2 group-hover:text-rouille transition-colors">{tome.titre.split('—')[1]?.trim()}</h3>
                    <p className="text-brume text-xs mb-3">{tome.pages} pages</p>
                    <p className="text-encre/70 text-sm leading-relaxed line-clamp-3">{tome.resume.substring(0, 120)}...</p>
                    <p className="text-or text-xs mt-4 group-hover:text-rouille transition-colors">Lire le détail →</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Roman */}
        {(filtre === 'tous' || filtre === 'roman') && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs tracking-widest text-or uppercase">Roman</p>
              <div className="flex-1 h-px bg-or-clair"></div>
            </div>
            <button
              onClick={() => setSelection({ type: 'livre', data: AUTRES[0] })}
              className="w-full text-left group border border-or-clair hover:border-or transition-all duration-300 bg-white overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src="/choisir-de-rester.png"
                    alt="Choisir de rester"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <p className="text-xs tracking-widest text-or uppercase mb-3">Littérature romantique</p>
                  <h2 className="font-display text-3xl text-encre mb-4 group-hover:text-rouille transition-colors">Choisir de rester</h2>
                  <p className="text-encre/70 leading-relaxed mb-6">{AUTRES[0].resume.substring(0, 200)}...</p>
                  <div className="flex items-center gap-6">
                    <span className="text-brume text-sm">{AUTRES[0].pages} pages</span>
                    <span className="text-or text-sm group-hover:text-rouille transition-colors">Lire le détail →</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Essai */}
        {(filtre === 'tous' || filtre === 'essai') && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs tracking-widest text-or uppercase">Essai</p>
              <div className="flex-1 h-px bg-or-clair"></div>
            </div>
            <button
              onClick={() => setSelection({ type: 'livre', data: AUTRES[1] })}
              className="w-full text-left group border border-or-clair hover:border-or transition-all duration-300 bg-white overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-64 md:h-80 overflow-hidden bg-encre">
                  <Image
                    src="/penser-agir-dirigeant.jpg"
                    alt="Penser et Agir comme un Dirigeant"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <p className="text-xs tracking-widest text-or uppercase mb-3">Essai · Management · Leadership</p>
                  <h2 className="font-display text-3xl text-encre mb-1 group-hover:text-rouille transition-colors">Penser et Agir comme un Dirigeant</h2>
                  <p className="text-brume italic text-sm mb-4">Ce que personne ne vous dit avant de diriger</p>
                  <p className="text-encre/70 leading-relaxed mb-6">{AUTRES[1].resume.substring(0, 200)}...</p>
                  <div className="flex items-center gap-6">
                    <span className="text-brume text-sm">{AUTRES[1].pages} pages</span>
                    <span className="text-or text-sm group-hover:text-rouille transition-colors">Lire le détail →</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Panneau latéral */}
      {selection && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-encre/60 backdrop-blur-sm" onClick={fermer}></div>
          <div className="w-full max-w-lg bg-parchemin overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-parchemin/95 backdrop-blur px-6 py-4 flex justify-between items-center border-b border-or-clair z-10">
              <p className="text-xs tracking-widest text-or uppercase">
                {selection.type === 'tome' ? 'Trilogie · L\'Éveil d\'Anathine AYA' : selection.data.genre}
              </p>
              <button onClick={fermer} className="text-brume hover:text-encre transition-colors text-xl">✕</button>
            </div>

            <div className="p-6">
              {/* Image */}
              <div className="relative h-72 mb-6 bg-encre/5 overflow-hidden">
                <Image
                  src={selection.data.image}
                  alt={selection.data.titre}
                  fill
                  className="object-contain object-center"
                />
              </div>

              {/* Titre */}
              <h2 className="font-display text-2xl text-encre mb-1">{selection.data.titre}</h2>
              {'soustitre' in selection.data && selection.data.soustitre && (
                <p className="text-brume italic text-sm mb-4">{selection.data.soustitre}</p>
              )}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs px-3 py-1 border border-or-clair text-brume">{selection.data.genre}</span>
                <span className="text-xs text-brume">{selection.data.pages} pages</span>
              </div>

              {/* Résumé */}
              <div className="mb-6">
                <p className="text-xs tracking-widest text-or uppercase mb-3">Résumé</p>
                <p className="text-encre/80 leading-relaxed text-sm">{selection.data.resume}</p>
              </div>

              {/* Extrait */}
              <div className="mb-8">
                <p className="text-xs tracking-widest text-or uppercase mb-3">Extrait</p>
                <blockquote className="border-l-2 border-or pl-4 italic text-encre/70 text-sm leading-relaxed">
                  {selection.data.extrait}
                </blockquote>
              </div>

              {/* Dispo */}
              <p className="text-xs text-brume mb-6">{selection.data.dispo}</p>

              {/* Navigation tomes */}
              {selection.type === 'tome' && (
                <div className="flex gap-3 mb-6">
                  {TRILOGIE.tomes.map((t, i) => (
                    <button
                      key={t.id}
                      onClick={() => setSelection({ type: 'tome', data: t })}
                      className={`flex-1 text-xs py-2 border transition-colors ${
                        selection.data.id === t.id
                          ? 'bg-encre text-parchemin border-encre'
                          : 'border-or-clair text-encre hover:border-or'
                      }`}
                    >
                      Tome {i + 1}
                    </button>
                  ))}
                </div>
              )}

              <a
                href="/contact"
                className="block w-full text-center bg-encre text-parchemin py-3 text-sm tracking-wide hover:bg-rouille transition-colors"
              >
                Commander ou en savoir plus
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
