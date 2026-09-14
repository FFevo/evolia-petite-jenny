import { useEffect, useState } from 'react'
import { lp } from '../content/lp'
import './chrome.css'

/**
 * StickyCTA — barre de conversion basse, glass (blur 14px) + hairline --line.
 * N'apparaît qu'une fois le hero passé (IntersectionObserver sur #top,
 * repli scrollY) : le CTA reste à portée de pouce sans interrompre la lecture.
 * prefers-reduced-motion : aucune animation, la barre s'affiche statiquement.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  // Fallback depuis brief/copy-lp.md si le champ manque dans ../content/lp
  const ctaSticky = lp.cta?.sticky ?? 'Candidater'

  useEffect(() => {
    const hero = document.getElementById('top')

    // Repli scroll si le hero n'est pas monté ou IntersectionObserver indisponible
    if (!hero || typeof IntersectionObserver === 'undefined') {
      const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`sticky-cta${visible ? ' is-visible' : ''}`}>
      <div className="sticky-cta__inner">
        <a className="sticky-cta__button" href="#candidater">
          {ctaSticky}
        </a>
      </div>
    </div>
  )
}
