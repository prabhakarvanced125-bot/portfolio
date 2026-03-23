import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const TITLE = 'SATYA KOTIPALLI'
const ROLE = 'Senior Frontend Engineer'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let frame = 0
    let raf: number

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const spacing = 60
      const offset = (frame * 0.3) % spacing
      ctx.strokeStyle = theme === 'dark' ? 'rgba(0,245,255,0.04)' : 'rgba(0,153,204,0.06)'
      ctx.lineWidth = 1
      for (let x = -spacing + offset; x < canvas.width + spacing; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = -spacing + offset; y < canvas.height + spacing; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
      frame++
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [theme])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div style={{
        position: 'absolute', width: '50vw', height: '50vw', maxWidth: 500, maxHeight: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--orb1) 0%, transparent 70%)',
        top: '10%', left: '-10%', filter: 'blur(40px)', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', width: '40vw', height: '40vw', maxWidth: 400, maxHeight: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--orb2) 0%, transparent 70%)',
        bottom: '10%', right: '-5%', filter: 'blur(40px)', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 5vw', width: '100%', maxWidth: 900 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(0.55rem, 1.5vw, 0.7rem)',
            letterSpacing: '0.3em',
            color: 'var(--cyan)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}>
            ◈ Available for opportunities ◈
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2rem, 7vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--cyan) 50%, var(--purple) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
          }}
        >
          {TITLE}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            height: 2,
            background: 'linear-gradient(90deg, transparent, var(--cyan), var(--purple), transparent)',
            margin: '1.5rem auto',
            maxWidth: 500,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(0.75rem, 2.5vw, 1.2rem)',
            color: 'var(--purple)',
            letterSpacing: '0.15em',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}
        >
          {ROLE}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)',
            maxWidth: 500,
            margin: '0 auto 2.5rem',
          }}
        >
          React · TypeScript · GraphQL · AWS · Vite · AI Dev Tools
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="hero-btns"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#experience" className="cyber-btn">View Experience</a>
          <a href="#contact" className="cyber-btn" style={{ borderColor: 'var(--purple)', color: 'var(--purple)' }}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ marginTop: '4rem' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ color: 'var(--cyan)', fontSize: '1.5rem', opacity: 0.6 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
