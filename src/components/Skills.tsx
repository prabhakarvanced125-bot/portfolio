import { skills } from '../data/portfolio'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <Reveal id="skills" className="wrap">
      <div className="sec-head">
        <div className="sec-kicker">02 — Stack</div>
        <h2 className="sec-title">
          Technical <em>skills.</em>
        </h2>
      </div>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={skill.cat} className="skill-card">
            <div className="ch">
              {skill.cat}
              <span className="i">[{String(index + 1).padStart(2, '0')}]</span>
            </div>
            <div className="tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
