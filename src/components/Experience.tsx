import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const jobs = [
  {
    company: 'Spectrum Reach',
    location: 'Charlotte, NC',
    role: 'Full Stack Developer (Frontend Focused)',
    period: 'Aug 2023 – Present',
    colorVar: 'var(--cyan)',
    colorHex: '#00f5ff',
    bullets: [
      'Integrated GraphQL (Apollo Client), improving data-fetching efficiency by 20%',
      'Migrated frontend build from CRA → Vite, reducing build times by 40%',
      'Built client-facing campaign pacing calculator with strict validation & test coverage',
      'Refactored auth flows: Keycloak → enterprise SSO, updated protected routes & token logic',
      'Introduced Playwright E2E suites across Chrome, Firefox, and Safari',
      'Used Amazon Q for AI-assisted test generation and TypeScript refactoring',
      'Integrated Figma MCP servers to streamline design-to-code and enforce design tokens',
      'Contributed to CI/CD automation and AWS deployments (S3, Lambda, CDK)',
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Redux Toolkit', 'Vite', 'AWS', 'Playwright', 'Keycloak', 'MUI'],
  },
  {
    company: 'Tabner',
    location: 'Charlotte, NC',
    role: 'React Developer',
    period: 'Jan 2023 – Aug 2023',
    colorVar: 'var(--purple)',
    colorHex: '#7b2fff',
    bullets: [
      'Modernized core enterprise app with React/TypeScript, reducing technical debt',
      'Migrated legacy Angular app to React/TypeScript, improving LCP/CLS by 1.5s',
      'Built reusable component library with Material UI for cross-platform consistency',
      'Implemented Redux Toolkit state management, eliminating redundant DOM re-renders',
      'Increased test coverage to 90%+ using Vitest and React Testing Library',
      'Standardized ESLint/Prettier configs across cross-functional teams',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Vitest', 'MUI', 'AWS CDK', 'Keycloak'],
  },
  {
    company: 'Digital Dots',
    location: 'Hyderabad, India',
    role: 'Front End Developer (React)',
    period: 'Apr 2022 – Oct 2022',
    colorVar: 'var(--pink)',
    colorHex: '#ff2d78',
    bullets: [
      'Built responsive, cross-browser React apps from UX design specs',
      'Integrated REST APIs, validated with Postman and Swagger',
      'Implemented mobile-first layouts using SASS/LESS with low-latency rendering',
      'Delivered production-ready features in Agile sprints',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'REST APIs', 'SASS'],
  },
  {
    company: 'Aucupia Online Services',
    location: 'Noida, India',
    role: 'Front End Developer',
    period: 'Jan 2021 – Mar 2022',
    colorVar: 'var(--cyan)',
    colorHex: '#00f5ff',
    bullets: [
      'Built React Native mobile app and React web platform for service booking',
      'Developed customizable website builder within the mobile app',
      'Integrated Google Sign-In, Google Maps API, and geolocation APIs',
      'Implemented localization support (Hindi, Telugu)',
      'Assisted in publishing to iOS App Store and Google Play Store',
    ],
    stack: ['React Native', 'React', 'Firebase', 'Node.js', 'Google Maps API', 'i18n'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="section" style={{ zIndex: 1, position: 'relative' }}>
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
        <h2 className="section-title">Experience</h2>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, var(--cyan), var(--purple), var(--pink), var(--cyan))',
            opacity: 0.3,
          }} />

          <div className="timeline-pad" style={{ paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ position: 'relative' }}
              >
                <motion.div
                  className="timeline-dot"
                  animate={{ boxShadow: [`0 0 0px ${job.colorHex}`, `0 0 16px ${job.colorHex}`, `0 0 0px ${job.colorHex}`] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  style={{
                    position: 'absolute',
                    left: '-2.85rem',
                    top: '1.5rem',
                    width: 12, height: 12,
                    borderRadius: '50%',
                    background: job.colorVar,
                    border: `2px solid ${job.colorVar}`,
                    flexShrink: 0,
                  }}
                />

                <div className="glass-card">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        fontWeight: 700,
                        color: job.colorVar,
                        marginBottom: '0.25rem',
                      }}>
                        {job.company}
                      </h3>
                      <div style={{ color: 'var(--card-role)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}>{job.role}</div>
                      <div style={{ color: 'var(--card-loc)', fontSize: '0.78rem', marginTop: '0.1rem' }}>{job.location}</div>
                    </div>
                    <div style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.62rem',
                      color: job.colorVar,
                      border: `1px solid ${job.colorHex}44`,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                      alignSelf: 'flex-start',
                    }}>
                      {job.period}
                    </div>
                  </div>

                  <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: '0.75rem 0' }}>
                    {job.bullets.map(b => (
                      <li key={b} style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.78rem, 1.6vw, 0.88rem)', lineHeight: 1.6 }}>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '1rem' }}>
                    {job.stack.map(s => (
                      <span key={s} style={{
                        fontSize: '0.62rem',
                        fontFamily: 'Orbitron, monospace',
                        padding: '0.2rem 0.55rem',
                        border: `1px solid ${job.colorHex}44`,
                        color: job.colorVar,
                        borderRadius: '3px',
                        letterSpacing: '0.05em',
                        background: `${job.colorHex}08`,
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
