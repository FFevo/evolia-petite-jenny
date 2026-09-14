import { useEffect, useRef, useState } from 'react'
import { lp } from '../content/lp'
import './rest.css'

const { faq } = lp

type FaqEntry = { q: string; a: string }

/**
 * FAQSection — accordéon hairline, 5 Q/R.
 * Principe design : ouverture 200 ms sur height mesurée (scrollHeight),
 * bouton natif + aria-expanded ; prefers-reduced-motion → instantané (CSS).
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-inner">
        <h2 id="faq-title" className="faq-title">
          FAQ
        </h2>

        <div className="faq-list">
          {faq.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqEntry
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // Height mesurée AVANT l'ouverture : scrollHeight reste lisible pendant que
  // le panneau est masqué (height: 0 + overflow: hidden) → transition visible.
  const handleToggle = () => {
    if (!isOpen && panelRef.current) {
      setHeight(panelRef.current.scrollHeight)
    }
    onToggle()
  }

  // Ré-mesure si la fenêtre change de largeur pendant qu'un panneau est ouvert
  useEffect(() => {
    if (!isOpen) return
    const measure = () => {
      if (panelRef.current) setHeight(panelRef.current.scrollHeight)
    }
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [isOpen])

  const buttonId = `faq-button-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <h3 className="faq-q">
        {/* Bouton natif : clavier + lecteur d'écran sans JS supplémentaire */}
        <button
          id={buttonId}
          className="faq-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={handleToggle}
        >
          <span className="faq-button-text">{item.q}</span>
          <span className="faq-button-icon" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        ref={panelRef}
        className={`faq-panel${isOpen ? ' is-open' : ''}`}
        role="region"
        aria-labelledby={buttonId}
        style={{ height: isOpen ? height : 0 }}
      >
        <p className="faq-a">{item.a}</p>
      </div>
    </div>
  )
}
