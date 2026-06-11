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
        I'm Satya Kotipalli — a software engineer with 5+ years building scalable web and
        mobile applications across React, TypeScript, React Native, secure authentication,
        accessibility, testing, and frontend cloud delivery.
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
          <div className="l">Automated testing</div>
        </div>
      </div>
    </header>
  )
}
