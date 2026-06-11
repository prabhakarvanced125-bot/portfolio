import Reveal from './Reveal'

const metrics = [
  { v: '5+', l: 'years_experience' },
  { v: '40%', l: 'build_time_cut' },
  { v: 'SSO', l: 'auth_modernization' },
  { v: 'AWS', l: 'frontend_delivery' },
]

export default function About() {
  return (
    <Reveal id="about" className="wrap">
      <div className="sec-head">
        <div className="sec-kicker">01 — About</div>
        <h2 className="sec-title">
          Engineering with <em>intent.</em>
        </h2>
      </div>
      <div className="about-grid">
        <div>
          <p className="lead-p">
            I am a frontend-focused software engineer with 5+ years of experience building
            React and TypeScript applications for enterprise teams.
          </p>
          <p>
            My day-to-day work includes React, TypeScript, Redux Toolkit, and Material UI, with
            an emphasis on maintainable interfaces, accessible workflows, and clear state management.
          </p>
          <p>
            I have helped modernize enterprise applications through Keycloak to ESSO authentication
            migrations, Firebase Auth and Google Sign-In integrations, automated testing with Vitest,
            React Testing Library, and Playwright, plus frontend infrastructure work using AWS CDK,
            Amazon S3, and GitLab CI/CD.
          </p>
        </div>
        <div className="panel">
          <div className="ph">
            <span>impact.json</span>
            <span>// metrics</span>
          </div>
          <div className="pb">
            {metrics.map((metric) => (
              <div key={metric.l} className="cell">
                <div className="v">{metric.v}</div>
                <div className="l">{metric.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
