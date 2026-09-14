import { lp } from '../content/lp'
import './chrome.css'

// Convention copy (lp.ts) : les segments **…** marquent l'emphase et deviennent
// <strong> — même rendu que SolutionSection, sans reformuler le wording.
const renderEmphasis = (text: string) =>
  text.split('**').map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
  )

/**
 * Hero — H1 chrono + highlight phrase clé (âme LandingScrolly).
 * Le titre se lit comme un chronomètre : 4 lignes Public Sans 800, promesse
 * datée (« la première session. » / « six semaines. ») surlignée --highlight,
 * padding 0/4, radius 0. La tête (kicker + H1) spanne toute la largeur :
 * à 44px/800, « opérationnel dès la première session. » exige ~800px — une
 * colonne étroite la ferait envelopper et casserait le rythme des 4 lignes.
 * Pas de slogan, pas de stock photo : la figure reste un slot réservé tant
 * que la photo de session n'est pas fournie (spec §5).
 */
export function Hero() {
  // Fallbacks champ par champ depuis brief/copy-lp.md si ../content/lp est incomplet
  const kicker =
    lp.kicker ?? 'CONSULTANT IA & AUTOMATISATION / MISSION · AGENTS · DOSSIER DE PREUVES'
  const h1 = {
    l1: lp.h1?.l1 ?? 'Notre parcours Consultant IA',
    l2Before: lp.h1?.l2Before ?? 'opérationnel dès ',
    l2Strong: lp.h1?.l2Strong ?? 'la première session.',
    l3: lp.h1?.l3 ?? 'Dossier de preuves en ',
    l4: lp.h1?.l4 ?? 'six semaines.',
  }
  const persona =
    lp.persona ??
    'Pour les profils métier, support, projet ou no-code qui visent le conseil en IA, **sans coder.**'
  const mecanisme =
    lp.mecanisme ??
    '36 heures à distance, en direct, sur un cas conduit de bout en bout. **Claude Code et Codex dès les premières heures.** Dossier de preuves visé en **six semaines.**'
  const ctaPrimary = lp.cta?.primary ?? 'Candidater'
  const ctaSecondary = lp.cta?.secondary ?? 'Voir ce qui bloque'
  const disclaimer =
    lp.disclaimer ??
    "L'admission précède l'inscription : nous vérifions que le parcours vous convient avant tout engagement. Aucun tarif affiché hors dossier — tarif [À PRÉCISER]. « Consultant IA & Automatisation » est l'intitulé du parcours ; la certification visée est la RS6776 « Création de contenus rédactionnels et visuels par l'usage responsable de l'intelligence artificielle générative », délivrée par INKREA FORMATIONS, évaluation organisée par AUTONOMIA."
  const preuves = lp.preuves?.length
    ? lp.preuves
    : [
        { value: '36 heures', label: 'sur six semaines — 24 h encadrées + 12 h de projet' },
        { value: '6 à 10', label: 'participants par cohorte, jamais plus' },
        { value: '100 %', label: 'à distance, 0 % asynchrone — chaque session est en direct' },
        {
          value: '[PREUVE À FOURNIR]',
          label: 'Taux de réussite RS6776 — indisponible avant la première cohorte',
        },
      ]

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        {/* Tête pleine largeur : le H1 chrono garde ses 4 lignes à 1024 comme à 1280 */}
        <div className="hero__head">
          <p className="hero__kicker">{kicker}</p>

          {/* H1 chrono : une ligne = un temps de la promesse */}
          <h1 className="hero__title">
            <span className="hero__line">{h1.l1}</span>
            <span className="hero__line">
              {h1.l2Before}
              <mark className="hero__hl">{h1.l2Strong}</mark>
            </span>
            <span className="hero__line">{h1.l3}</span>
            <span className="hero__line">
              <mark className="hero__hl">{h1.l4}</mark>
            </span>
          </h1>
        </div>

        <div className="hero__body">
          {/* Hiérarchie typographique : lede 20/300 (persona) puis corps 16 (mécanisme).
              Les **…** de la copy deviennent <strong> (convention lp.ts) */}
          <p className="hero__persona">{renderEmphasis(persona)}</p>
          <p className="hero__mecanisme">{renderEmphasis(mecanisme)}</p>

          <div className="hero__actions">
            <a className="hero__cta-primary" href="#candidater">
              {ctaPrimary}
            </a>
            <a className="hero__cta-secondary" href="#probleme">
              {ctaSecondary}
            </a>
          </div>

          {/* Disclaimer : honnêteté tarifaire/admission, petit corps, max 70ch */}
          <p className="hero__disclaimer">{disclaimer}</p>
        </div>

        {/* Slot image réservé — jamais de stock photo générique (spec §5) */}
        <figure
          className="hero__figure"
          role="img"
          aria-label="Image à fournir : une session synchrone en cours, écran partagé, lumière jour de bureau."
        >
          <span className="hero__figure-ref">[IMAGE À FOURNIR]</span>
        </figure>
      </div>

      {/* Preuves : chiffres Public Sans 800, labels secondaires, hairlines hautes */}
      <ul className="hero__preuves">
        {preuves.map((preuve, index) => (
          <li className="hero__preuve" key={index}>
            <strong className="hero__preuve-value">{preuve.value}</strong>
            <span className="hero__preuve-label">{preuve.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
