import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const contacts = [
  { label: 'Email', value: 'satyasivasaik@gmail.com', href: 'mailto:satyasivasaik@gmail.com', colorVar: 'var(--cyan)', colorHex: '#00f5ff' },
  { label: 'LinkedIn', value: 'linkedin.com/in/satya-siva-kotipalli', href: 'https://www.linkedin.com/in/satya-siva-kotipalli/', colorVar: 'var(--purple)', colorHex: '#7b2fff' },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="section" style={{ zIndex: 1, position: 'relative' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}
      >
        <h2 className="section-title" style={{ textAlign: 'center' }}>Get In Touch</h2>

        <p style={{
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          marginBottom: '3rem',
          fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
        }}>
          Open to new opportunities. Whether it's a full-time role, contract work, or just a conversation — reach out.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ x: 6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
                background: 'var(--glass)',
                border: `1px solid ${item.colorHex}22`,
                borderRadius: '8px',
                textDecoration: 'none',
                width: '100%',
                maxWidth: 500,
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = item.colorHex
                e.currentTarget.style.background = `${item.colorHex}10`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${item.colorHex}22`
                e.currentTarget.style.background = 'var(--glass)'
              }}
            >
              <span style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(0.55rem, 1.2vw, 0.65rem)',
                color: item.colorVar,
                letterSpacing: '0.15em',
                minWidth: 55,
                textTransform: 'uppercase',
                flexShrink: 0,
              }}>
                {item.label}
              </span>
              <span style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(0.78rem, 1.8vw, 0.9rem)',
                wordBreak: 'break-all',
                textAlign: 'left',
              }}>
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '2rem',
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
            fontFamily: 'Orbitron, monospace',
            letterSpacing: '0.1em',
          }}
        >
          © 2025 SATYA KOTIPALLI · CHARLOTTE, NC
        </motion.div>
      </motion.div>
    </section>
  )
}
