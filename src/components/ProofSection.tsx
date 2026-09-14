import { lp } from '../content/lp'
import './rest.css'

const { proof, proofNote } = lp

/**
 * ProofSection — preuve honnête : 4 slots [PREUVE À FOURNIR], aucun client
 * inventé, aucun taux affiché avant les résultats réels du pilote (L.6352-13).
 */
export function ProofSection() {
  return (
    <section id="preuve" className="proof-section" aria-labelledby="proof-title">
      <div className="proof-inner">
        <h2 id="proof-title" className="proof-title">
          Preuve
        </h2>

        {/* Slots quote + KPI — key = index : les placeholders sont identiques
            tant que les preuves réelles ne sont pas fournies */}
        <div className="proof-grid">
          {proof.map((item, index) => (
            <figure className="proof-slot" key={index}>
              <blockquote className="proof-quote">{item.quote}</blockquote>
              {/* KPI en Public Sans 800 — les chiffres portent le poids, pas la couleur */}
              <figcaption className="proof-kpi">{item.kpi}</figcaption>
            </figure>
          ))}
        </div>

        {/* Phrase d'honnêteté canonique — aucun taux avant les résultats du pilote */}
        <p className="proof-note">{proofNote}</p>
      </div>
    </section>
  )
}
