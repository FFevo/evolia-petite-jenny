import { lp } from '../content/lp'
import './scrolly.css'

/* Bandeau problème — SEULE zone inversée de la page.
   Fond --ink / texte --paper : bandeau inversé = 20 % encre, contraste AAA
   (blanc sur #111814 = 18,03:1). Le vert reste un accent, jamais un fond. */

export function ProblemBanner() {
  const { bandeau, sous } = lp.probleme

  return (
    <section id="probleme" className="problem-banner" aria-labelledby="problem-banner-title">
      <div className="problem-banner__inner container">
        {/* Kicker CAPS : la rupture se lit avant le détail des panneaux */}
        <h2 id="problem-banner-title" className="problem-banner__title">
          {bandeau}
        </h2>
        {/* Lede 20/300 : hiérarchie calme, la rigueur avant la dramatisation */}
        <p className="problem-banner__sub">{sous}</p>
      </div>
    </section>
  )
}
