import { lp } from '../content/lp'
import './chrome.css'

/**
 * Header — chrome glass + hiérarchie nav.
 * Verre dépoli (papier 82 % + blur 18px) au-dessus du grain papier : la barre
 * reste lisible au scroll sans ombre portée — la séparation se fait uniquement
 * par la hairline basse (charte : radius 0, hairlines 1px, aucune ombre).
 * Hiérarchie : brand (intitulé du parcours, nom commercial non figé) → 2 liens
 * ancre → CTA Candidater, seul élément de conversion.
 */
export function Header() {
  // Fallbacks champ par champ depuis brief/copy-lp.md si ../content/lp est incomplet
  const brand = lp.brand ?? 'Consultant IA & Automatisation'
  const navProgramme = lp.nav?.programme ?? 'Programme'
  const navFaq = lp.nav?.faq ?? 'FAQ'
  const ctaPrimary = lp.cta?.primary ?? 'Candidater'

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Brand texte : intitulé du parcours, jamais un logo inventé */}
        <a className="site-header__brand" href="#top">
          {brand}
        </a>

        {/* 2 liens maximum : la nav ne concurrence pas le CTA */}
        <nav className="site-header__nav" aria-label="Navigation principale">
          <a className="site-header__link" href="#solution">
            {navProgramme}
          </a>
          <a className="site-header__link" href="#faq">
            {navFaq}
          </a>
        </nav>

        <a className="site-header__cta" href="#candidater">
          {ctaPrimary}
        </a>
      </div>
    </header>
  )
}
