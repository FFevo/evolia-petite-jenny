import { useEffect, useState } from 'react'

/* Progression de scroll d'une section pinnée — retour 0 → 1.
   rAF-throttled : une mesure par frame, jamais plus (60 fps d'abord).
   Pas de GSAP : sticky CSS + progress suffisent (âme LandingScrolly). */

type ScrollyRef = { current: HTMLElement | null }

export function useScrollyProgress(ref: ScrollyRef): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const measure = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      /* Distance scrollable = hauteur de la piste (ex. 400vh) moins l'écran visible */
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) {
        setProgress((prev) => (prev === 0 ? prev : 0))
        return
      }
      const next = -rect.top / scrollable
      const clamped = next < 0 ? 0 : next > 1 ? 1 : next
      /* Hors zone, la valeur ne change pas : pas de re-render inutile */
      setProgress((prev) => (prev === clamped ? prev : clamped))
    }

    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf !== 0) cancelAnimationFrame(raf)
    }
  }, [ref])

  return progress
}
