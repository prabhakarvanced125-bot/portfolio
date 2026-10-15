export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="badge">
        <span className="pulse" />
        Senior Frontend & Mobile Software Engineer
      </div>
      <h1>
        Scalable web
        <br />
        and mobile apps.
        <br />
        <span className="grad">Built with purpose.</span>
      </h1>
      <p className="lead">
        I'm Satya Kotipalli, a software engineer with 5+ years building enterprise web applications
        and cross-platform mobile experiences. I specialize in React, React Native, and TypeScript,
        with a focus on reusable components, authentication, accessibility, and performance.
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
        <a href="https://www.linkedin.com/in/satya-siva-kotipalli/" className="btn btn-gho" target="_blank" rel="noopener noreferrer">
          LinkedIn
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
