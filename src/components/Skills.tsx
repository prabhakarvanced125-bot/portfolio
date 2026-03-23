import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  { category: 'Frontend', color: 'var(--cyan)', skills: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'React Hooks'] },
  { category: 'Styling & UI', color: 'var(--purple)', skills: ['Material UI', 'SASS', 'CSS3', 'Responsive Design', 'WCAG Accessibility'] },
  { category: 'Build & Tooling', color: 'var(--pink)', skills: ['Vite', 'Webpack', 'Babel', 'NPM', 'Yarn', 'Bun'] },
  { category: 'Testing', color: 'var(--cyan)', skills: ['Vitest', 'Jest', 'React Testing Library', 'Playwright'] },
  { category: 'API & Data', color: 'var(--purple)', skills: ['GraphQL', 'Apollo Client', 'REST APIs'] },
  { category: 'Cloud & DevOps', color: 'var(--pink)', skills: ['AWS S3', 'Lambda', 'CDK', 'CI/CD', 'GitLab'] },
  { category: 'Auth', color: 'var(--cyan)', skills: ['Keycloak', 'OAuth2', 'SSO'] },
  { category: 'AI & Productivity', color: 'var(--purple)', skills: ['Amazon Q', 'GitHub Copilot', 'Claude Code', 'Figma MCP'] },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section" style={{ zIndex: 1, position: 'relative' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card"
              initial={{ opacity: 0, x: gi % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <div style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                color: group.color,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: group.color,
                  display: 'inline-block',
                  boxShadow: `0 0 8px ${group.color}`,
                  flexShrink: 0,
                }} />
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                      padding: '0.3rem 0.7rem',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      cursor: 'default',
                      transition: 'all 0.2s',
                      display: 'inline-block',
                      background: 'var(--glass)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
