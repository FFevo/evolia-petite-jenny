import { useState } from 'react'
import type { FormEvent } from 'react'
import { lp } from '../content/lp'
import './rest.css'

const { form, legal, incompatibilites } = lp

// Tunnel d'entrée : la page ne promet que l'entrée dans le tunnel,
// jamais le résultat — information → candidature → admission → CPF → inscription
const TUNNEL_STEPS = ['Information', 'Candidature', 'Admission', 'CPF', 'Inscription'] as const

// Le champ d'adaptation est le seul facultatif : une case à cocher — une réponse
// positive déclenche un échange confidentiel (informations-produit-marketing.md).
const ADAPTATION_FIELD = "Besoin d'être recontacté"

/**
 * FooterCTA — CTA candidature + conformité L.6352-13.
 * Formulaire de qualification sans backend : envoi intercepté (preventDefault),
 * accusé local explicite. Incompatibilités et mentions légales visibles avant
 * l'envoi — aucune mention susceptible d'induire en erreur.
 */
export function FooterCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="candidater" className="footer-cta-section" aria-labelledby="footer-cta-title">
      <div className="footer-cta-inner">
        <h2 id="footer-cta-title" className="footer-cta-title">
          {form.title}
        </h2>
        <p className="footer-cta-hint">{form.hint}</p>

        {/* Tunnel — étape courante « Candidature » signalée par aria-current,
            jamais par la couleur seule (soulignement + contraste 8:1).
            Séparateur réel dans le DOM : espace texte lu par les SR + flèche
            décorative aria-hidden (la séquence est déjà portée par la ol). */}
        <ol className="footer-cta-tunnel" aria-label="Étapes du parcours d'entrée">
          {TUNNEL_STEPS.map((step, index) => (
            <li
              key={step}
              className="footer-cta-tunnel-step"
              aria-current={step === 'Candidature' ? 'step' : undefined}
            >
              {step}
              {index < TUNNEL_STEPS.length - 1 ? (
                <>
                  {' '}
                  <span className="footer-cta-tunnel-sep" aria-hidden="true">
                    →
                  </span>
                </>
              ) : null}
            </li>
          ))}
        </ol>

        {/* Incompatibilités visibles avant candidature — honnêteté de qualification */}
        <div className="footer-cta-incompat">
          <h3 className="footer-cta-subtitle">Incompatibilités</h3>
          <ul className="footer-cta-incompat-list">
            {incompatibilites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Formulaire de qualification — labels associés (htmlFor/id), cibles
            ≥ 44 px, validation native conservée. Champs texte requis ; seul le
            besoin d'adaptation est une case facultative. */}
        <form className="footer-cta-form" action="#" onSubmit={handleSubmit}>
          {form.fields.map((label, index) => {
            const id = `candidature-field-${index}`
            if (label.startsWith(ADAPTATION_FIELD)) {
              return (
                <div className="footer-cta-field footer-cta-field-checkbox" key={id}>
                  <input id={id} name={id} type="checkbox" />
                  <label htmlFor={id}>{label}</label>
                </div>
              )
            }
            return (
              <div className="footer-cta-field" key={id}>
                <label htmlFor={id}>
                  {label}
                  <span className="footer-cta-required" aria-hidden="true">
                    {' '}
                    *
                  </span>
                </label>
                <input id={id} name={id} type="text" required />
              </div>
            )
          })}

          {/* Primary — même langage que le hero : fond --accent, radius 0 */}
          <button className="footer-cta-submit" type="submit">
            Candidater
          </button>

          {/* Pas de backend : accusé local explicite, destination à préciser */}
          {submitted ? (
            <p className="footer-cta-ack" role="status">
              Candidature enregistrée localement — destination [À PRÉCISER]
            </p>
          ) : null}
        </form>

        {/* Mentions — le parcours « Consultant IA & Automatisation » ne se
            confond jamais avec la certification RS6776 */}
        <div className="footer-cta-legal">
          <p>{legal.line}</p>
          <p>{legal.rs6776}</p>
          <p>
            Certification <span className="footer-cta-ref">RS6776</span> délivrée par INKREA
            FORMATIONS, évaluation organisée par Autonomia (SIRET 51520065700028).{' '}
            <a href="https://www.francecompetences.fr/recherche/rs/6776/">
              Fiche RS6776 — France Compétences
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
