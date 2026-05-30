export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="badge">
        <span className="pulse" />
        Available for senior roles · Charlotte, NC
      </div>
      <h1>
        Senior frontend
        <br />
        engineer building
        <br />
        <span className="grad">fast, tested UIs.</span>
      </h1>
      <p className="lead">
        I'm Satya Kotipalli — 5+ years shipping scalable React & TypeScript applications
        end-to-end, from modernizing legacy systems to optimizing the data layer and hardening auth.
      </p>
      <div className="hero-cta">
        <a href="#work" className="btn btn-pri">
          View experience →
        </a>
        <a href="#contact" className="btn btn-gho">
          Get in touch
        </a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="v">
            5<span>+</span>
          </div>
          <div className="l">Years exp</div>
        </div>
        <div className="hero-stat">
          <div className="v">
            40<span>%</span>
          </div>
          <div className="l">Build time cut</div>
        </div>
        <div className="hero-stat">
          <div className="v">
            90<span>%+</span>
          </div>
          <div className="l">Test coverage</div>
        </div>
      </div>
    </header>
  )
}
