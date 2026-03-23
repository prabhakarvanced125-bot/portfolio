import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40%', label: 'Build Time Reduction' },
  { value: '20%', label: 'Data Fetch Improvement' },
  { value: '90%+', label: 'Test Coverage' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section" style={{ zIndex: 1, position: 'relative' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Me</h2>

        <div
          className="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
        >
          <div>
            <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', marginBottom: '1.5rem' }}>
              Senior Frontend Engineer with 5+ years of experience building scalable,
              high-performance web applications. Based in Charlotte, NC.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}>
              I specialize in React and TypeScript ecosystems, delivering end-to-end features
              from concept through production — modernizing legacy systems, optimizing GraphQL
              data flows, and building secure authentication pipelines.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}>
              Experienced with AWS-based deployments, AI-assisted development workflows,
              and a strong focus on performance, accessibility, and clean code.
            </p>
          </div>

          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {s.value}
                </div>
                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                  marginTop: '0.5rem',
                  fontFamily: 'Orbitron, monospace',
                  letterSpacing: '0.05em',
                }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
