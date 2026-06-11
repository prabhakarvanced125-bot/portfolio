import { projects } from '../data/portfolio'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <Reveal id="projects" className="wrap">
      <div className="sec-head">
        <div className="sec-kicker">04 — Projects</div>
        <h2 className="sec-title">
          Selected <em>work.</em>
        </h2>
      </div>
      <div className="proj-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="proj">
            <span className="arrow">↗</span>
            <span className="pn">PROJ_{String(index + 1).padStart(2, '0')}</span>
            <h3>{project.title}</h3>
            <p className="subtitle">{project.subtitle}</p>
            <div className="case-lines">
              <div>
                <span>Problem</span>
                <p>{project.problem}</p>
              </div>
              <div>
                <span>What I Built</span>
                <p>{project.built}</p>
              </div>
              <div>
                <span>Impact</span>
                <p>{project.impact}</p>
              </div>
            </div>
            <div className="pstack">
              {project.tech.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
