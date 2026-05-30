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
          <div key={project.t} className="proj">
            <span className="arrow">↗</span>
            <span className="pn">PROJ_{String(index + 1).padStart(2, '0')}</span>
            <h3>{project.t}</h3>
            <p>{project.d}</p>
            <div className="pstack">
              {project.s.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="pnote">// placeholder projects — send details to populate with real work + links</p>
    </Reveal>
  )
}
