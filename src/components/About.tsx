import Reveal from './Reveal'

const metrics = [
  { v: '5+', l: 'years_experience' },
  { v: '40%', l: 'build_time_cut' },
  { v: '20%', l: 'faster_fetch' },
  { v: '90%+', l: 'test_coverage' },
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
            I specialize in React and TypeScript ecosystems — delivering features from concept through production.
          </p>
          <p>
            That means modernizing legacy systems, optimizing GraphQL data flows, and building secure
            authentication pipelines that hold up in the enterprise.
          </p>
          <p>
            I lean on AWS deployments, CI/CD, and AI-assisted workflows — always with a focus on
            performance, accessibility, and clean, well-tested code.
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
