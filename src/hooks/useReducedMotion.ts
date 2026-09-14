import { useSyncExternalStore } from 'react'

/* Reduced motion — l'animation ne doit jamais être une barrière (a11y).
   matchMedia('prefers-reduced-motion: reduce') = source de vérité OS.
   useSyncExternalStore : pas de flash au mount, réactif au changement système. */

const QUERY = '(prefers-reduced-motion: reduce)'

/* Fonctions module-level = références stables (pas de resubscribe à chaque render) */
function subscribe(onChange: () => void): () => void {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches
}

/* SSR / premier paint : on suppose le mouvement autorisé, jamais l'inverse */
function getServerSnapshot(): boolean {
  return false
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
