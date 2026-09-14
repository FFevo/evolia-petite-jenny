import { useRef } from 'react'
import { lp } from '../content/lp'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useScrollyProgress } from '../hooks/useScrollyProgress'
import './scrolly.css'

/* Scrolly 01–04 + barre = accent (âme).
   Desktop ≥ 768 : pin ~400vh, crossfade opacity only (ease-out, pas de bounce),
   barre de progression verticale 1px → pleine hauteur en --accent
   (jamais --accent-light : la barre est un texte de progression, pas une puce).
   Mobile < 768 ou prefers-reduced-motion : stack vertical, pin désactivé. */

const panels = lp.probleme.panels
const COUNT = panels.length
const SEGMENT = 1 / COUNT
/* Fenêtre de fondu : 50 % d'un segment, centrée sur la frontière —
   le panneau entrant et le sortant se croisent à opacité égale (vrai crossfade) */
const HALF_FADE = (0.5 * SEGMENT) / 2

function panelOpacity(index: number, progress: number): number {
  const enter = index * SEGMENT
  const exit = (index + 1) * SEGMENT
  let opacity = 1
  /* Premier panneau visible dès l'entrée ; les autres fondent à la frontière */
  if (index > 0 && progress < enter + HALF_FADE) {
    opacity = (progress - (enter - HALF_FADE)) / (2 * HALF_FADE)
  }
  /* Dernier panneau jamais masqué en fin de piste ; les autres fondent dehors */
  if (index < COUNT - 1 && progress > exit - HALF_FADE) {
    opacity = Math.min(opacity, (exit + HALF_FADE - progress) / (2 * HALF_FADE))
  }
  return Math.min(1, Math.max(0, opacity))
}

export function ScrollySection() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)
  const progress = useScrollyProgress(sectionRef)

  return (
    <section
      ref={sectionRef}
      className={reducedMotion ? 'scrolly scrolly--stack' : 'scrolly'}
      aria-label="Ce qui casse la reconversion IA — quatre constats"
    >
      <div className="scrolly__sticky">
        {/* Barre de progression : rail hairline --line, remplissage --accent.
            scaleY piloté par le scroll (rAF) — opacity/transform only, 60 fps. */}
        <div className="scrolly__rail" aria-hidden="true">
          <span className="scrolly__fill" style={{ transform: `scaleY(${progress})` }} />
        </div>

        <div className="scrolly__stage container">
          {panels.map((panel, index) => (
            <article
              key={panel.id}
              className="scrolly__panel"
              style={reducedMotion ? undefined : { opacity: panelOpacity(index, progress) }}
            >
              {/* Onglet dossier : languette hairline fusionnée à la carte,
                  ref Fira Mono 14 en haut à gauche (codes uniquement, jamais de texte à lire) */}
              <div className="scrolly__card">
                <span className="scrolly__tab">
                  <span className="scrolly__ref">{panel.ref}</span>
                </span>
                <span className="scrolly__id" aria-hidden="true">
                  {panel.id}
                </span>

                {/* Titre 28/700 : un constat par panneau, hiérarchie nette */}
                <h3 className="scrolly__title">{panel.titre}</h3>
                {/* Corps 16 : mesure 60–70 ch, encre douce AA */}
                <p className="scrolly__body">{panel.corps}</p>
                {/* Punchline isolée : filet hairline au-dessus, vert forêt AAA */}
                <p className="scrolly__accent">{panel.accent}</p>

                {/* Statuts = labels problème en CAPS, pills hairline radius 0.
                    Échelle charte accent → encre douce → encre faible (CSS nth-child). */}
                <ul className="scrolly__statuses">
                  {panel.statuts.map((statut) => (
                    <li key={statut} className="scrolly__status">
                      {statut}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
