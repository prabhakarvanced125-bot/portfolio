import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { useTheme } from '../context/ThemeContext'

export default function ParticlesBg() {
  const { theme } = useTheme()
  const init = useCallback(async (engine: Engine) => { await loadSlim(engine) }, [])

  const isDark = theme === 'dark'

  return (
    <Particles
      key={theme}
      id="tsparticles"
      init={init}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      options={{
        background: { color: { value: isDark ? '#020010' : '#f0f2ff' } },
        fpsLimit: 60,
        particles: {
          number: { value: isDark ? 80 : 50, density: { enable: true, area: 900 } },
          color: { value: isDark ? ['#00f5ff', '#7b2fff', '#ff2d78'] : ['#0099cc', '#6620e0', '#e0005a'] },
          links: {
            enable: true,
            color: isDark ? '#00f5ff' : '#0099cc',
            opacity: isDark ? 0.08 : 0.12,
            distance: 140,
            width: 1,
          },
          move: { enable: true, speed: 0.6, outModes: 'bounce' },
          opacity: { value: isDark ? 0.4 : 0.3, random: true },
          size: { value: { min: 1, max: 2.5 } },
          shape: { type: 'circle' },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
