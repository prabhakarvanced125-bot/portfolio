import Reveal from './Reveal'

const metrics = [
  { v: '5+', l: 'years_experience' },
  { v: '40%', l: 'build_time_cut' },
  { v: '4', l: 'production_roles' },
  { v: 'E2E', l: 'auth_test_coverage' },
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
            I build scalable React and TypeScript products across web and mobile, with a focus
            on secure enterprise workflows.
          </p>
          <p>
            My work spans component-driven development, WCAG-minded interfaces, state management,
            performance optimization, and production monitoring with tools like New Relic.
          </p>
          <p>
            I have modernized frontend architecture with Vite, migrated authentication from Keycloak
            to ESSO-based SSO, built AWS CDK/S3 deployment workflows, and shipped automated tests
            for OAuth and MFA flows.
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
