export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="badge">
        <span className="pulse" />
        Software Developer · Charlotte, NC
      </div>
      <h1>
        Frontend
        <br />
        engineer building
        <br />
        <span className="grad">fast, tested UIs.</span>
      </h1>
      <p className="lead">
        Software Engineer specializing in React, TypeScript, enterprise frontend applications,
        authentication integrations, testing, and cloud-based frontend delivery.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-pri">
          View Projects
        </a>
        <a href="/Satya_Kotipalli_Resume.pdf" className="btn btn-gho" download>
          Download Resume
        </a>
        <a href="#contact" className="btn btn-gho">
          Contact Me
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
          <div className="v">E2E</div>
          <div className="l">Vitest · RTL · Playwright</div>
        </div>
      </div>
    </header>
  )
}
