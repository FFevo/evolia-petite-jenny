import { lp } from '../content/lp'
import './rest.css'

const { solution } = lp

// La copy est canonique (« ÉTAPE — libellé ») : on scinde sur le tiret cadratin,
// jamais de reformulation.
const splitEmDash = (value: string): [string, string] => {
  const [head, ...rest] = value.split(' — ')
  return [head, rest.join(' — ')]
}

/**
 * SolutionSection — « Une seule mission. Toutes les preuves utiles. »
 * Principe design : la rigueur d'un dossier — timeline hairline verticale,
 * 7 modules en grille de hairlines, deal en encadré papier teinté (transparence).
 */
export function SolutionSection() {
  return (
    <section id="solution" className="solution-section" aria-labelledby="solution-title">
      <div className="solution-inner">
        {/* H2 sur 2 lignes — convention copy : les segments **…** deviennent
            <strong>, rendus en --accent (titres = 8:1 AAA sur blanc) */}
        <h2 id="solution-title" className="solution-title">
          <span className="solution-title-line">{solution.h2a}</span>
          <span className="solution-title-line">
            {solution.h2b.split('**').map((part, index) =>
              index % 2 === 1 ? (
                <strong className="solution-title-accent" key={index}>
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </span>
        </h2>

        {/* Timeline S1–S6 — hairline verticale, puces carrées --accent-light
            (aplat/signe autorisé, jamais de texte en vert clair) */}
        <ol className="solution-timeline">
          {solution.timeline.map((entry) => {
            const [step, label] = splitEmDash(entry)
            return (
              <li className="solution-timeline-item" key={step}>
                <span className="solution-timeline-step">{step}</span>
                {/* Tiret cadratin réel du copy : séparation lue par les SR,
                    pas de concaténation « S1CADRER » */}
                {' — '}
                <span className="solution-timeline-label">{label}</span>
              </li>
            )
          })}
        </ol>

        {/* Note de cadrage : les 4 caps sont des évaluations internes,
            elles ne remplacent pas l'examen certificatif RS6776 */}
        <p className="solution-note">{solution.note}</p>

        {/* 7 modules — grille de hairlines : 1 col à 375, 2 cols dès 768 */}
        <ul className="solution-modules">
          {solution.modules.map((entry) => {
            const [name, benefit] = splitEmDash(entry)
            return (
              <li className="solution-module" key={name}>
                <span className="solution-module-name">{name}</span>
                <span className="solution-module-benefit">{benefit}</span>
              </li>
            )
          })}
        </ul>

        {/* Deal — transparence tarifaire : voile --paper-accent + filet 3px --accent */}
        <aside className="solution-deal" aria-label="Tarif et financement">
          <p className="solution-deal-text">{solution.deal}</p>
        </aside>

        {/* Figures métier — placeholders tant que le shoot n'existe pas :
            on ne remplace pas par du stock générique (spec images) */}
        <div className="solution-figures">
          <figure className="solution-figure">
            <div
              className="solution-figure-placeholder"
              role="img"
              aria-label="Atelier synchrone en visio — image à fournir"
            >
              [IMAGE À FOURNIR]
            </div>
          </figure>
          <figure className="solution-figure">
            <div
              className="solution-figure-placeholder"
              role="img"
              aria-label="Session Claude Code sur le cas fil rouge — image à fournir"
            >
              [IMAGE À FOURNIR]
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
