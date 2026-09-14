import { useEffect, useRef, useState } from 'react'

export function SilkBackground({ paused }: { paused: boolean }) {
  const host = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(paused)
  const engine = useRef<{ update: () => void; dispose: () => void } | null>(null)
  const [ready, setReady] = useState(false)
  useEffect(() => { pausedRef.current = paused; engine.current?.update() }, [paused])
  useEffect(() => {
    const element = host.current
    if (!element) return
    let cancelled = false
    let started = false
    const observer = new IntersectionObserver(entries => {
      if (started || !entries.some(entry => entry.isIntersecting)) return
      started = true
      import('../lib/silk-engine').then(({ createSilkEngine }) => {
        if (cancelled) return
        try {
          engine.current = createSilkEngine(element, {
            paused: pausedRef,
            onReady: () => { if (!cancelled) setReady(true) },
            onFailure: () => { if (!cancelled) setReady(false) },
          })
        } catch { if (!cancelled) setReady(false) }
      }).catch(() => { if (!cancelled) setReady(false) })
    }, { rootMargin: '120px' })
    observer.observe(element)
    return () => { cancelled = true; observer.disconnect(); engine.current?.dispose(); engine.current = null }
  }, [])
  return <div className="silk-background" data-ready={ready} ref={host} aria-hidden="true"/>
}
