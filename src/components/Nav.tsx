import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const links = ['About', 'Skills', 'Experience', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinkStyle = {
    fontFamily: 'Orbitron, monospace',
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    textTransform: 'uppercase' as const,
    transition: 'color 0.3s',
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '1rem 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'all 0.4s',
        }}
      >
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Orbitron, monospace',
            fontWeight: 900,
            fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}>
            SATYA KOTIPALLI
          </span>
        </a>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={navLinkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme"
            style={{ display: 'none' }}
            id="mobile-theme-btn"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <button className="theme-toggle" onClick={toggle} style={{ marginBottom: '1rem' }}>
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  padding: '0.5rem 0',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 600px) {
          #mobile-theme-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
