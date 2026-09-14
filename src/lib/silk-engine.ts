import * as THREE from 'three'
import { vertexShader, fragmentShader } from '../vendor/react-bits/silk-shaders'

type Options = { paused: { current: boolean }; onReady: () => void; onFailure: () => void }

export function createSilkEngine(host: HTMLElement, options: Options) {
  const cleanups: Array<() => void> = []
  let disposed = false
  let frame = 0
  const dispose = () => {
    if (disposed) return
    disposed = true
    cancelAnimationFrame(frame)
    for (const cleanup of cleanups.reverse()) { try { cleanup() } catch { /* Release remaining resources. */ } }
  }
  try {
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' })
    cleanups.push(() => { renderer.dispose(); renderer.domElement.remove() })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25))
    const geometry = new THREE.PlaneGeometry(2, 2)
    cleanups.push(() => geometry.dispose())
    const uniforms = {
      uTime: { value: 0 }, uSpeed: { value: 3.6 }, uScale: { value: 1.35 },
      uRotation: { value: 0.45 }, uNoiseIntensity: { value: 0.45 },
      uColor: { value: new THREE.Color(20 / 255, 134 / 255, 89 / 255) }, uLightMode: { value: 0 },
    }
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms })
    cleanups.push(() => material.dispose())
    const scene = new THREE.Scene()
    scene.add(new THREE.Mesh(geometry, material))
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2)
    camera.position.z = 1
    host.appendChild(renderer.domElement)
    let visible = false
    let previous = 0
    let ready = false
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const draw = (timestamp: number) => {
      frame = 0
      if (!visible || document.hidden || disposed) return
      const moving = !options.paused.current && !reduced.matches
      // Limit mobile GPU work without reducing the fabric's movement speed.
      if (moving && innerWidth <= 800 && previous && timestamp - previous < 32) {
        frame = requestAnimationFrame(draw)
        return
      }
      const delta = previous ? Math.min((timestamp - previous) / 1000, 0.05) : 0
      previous = timestamp
      if (moving) uniforms.uTime.value += delta * 0.35
      try {
        renderer.render(scene, camera)
        if (!ready) { ready = true; options.onReady() }
        const motion = moving ? 'playing' : 'paused'
        if (host.dataset.motion !== motion) host.dataset.motion = motion
      } catch { dispose(); options.onFailure(); return }
      if (moving) frame = requestAnimationFrame(draw)
    }
    const update = () => { if (!frame && visible && !disposed && !document.hidden) frame = requestAnimationFrame(draw) }
    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (width && height) { renderer.setSize(width, height, false); update() }
    }
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting
      if (visible) update()
      else { cancelAnimationFrame(frame); frame = 0; previous = 0; host.dataset.motion = 'idle' }
    })
    cleanups.push(() => observer.disconnect())
    observer.observe(host)
    const resizeObserver = new ResizeObserver(resize)
    cleanups.push(() => resizeObserver.disconnect())
    resizeObserver.observe(host)
    const visibility = () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; previous = 0; host.dataset.motion = 'idle' }
      else update()
    }
    const contextLost = (event: Event) => { event.preventDefault(); dispose(); options.onFailure() }
    document.addEventListener('visibilitychange', visibility)
    reduced.addEventListener('change', update)
    renderer.domElement.addEventListener('webglcontextlost', contextLost)
    cleanups.push(() => {
      document.removeEventListener('visibilitychange', visibility)
      reduced.removeEventListener('change', update)
      renderer.domElement.removeEventListener('webglcontextlost', contextLost)
    })
    resize()
    return { update, dispose }
  } catch (error) { dispose(); throw error }
}
