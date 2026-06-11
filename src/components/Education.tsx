import { education } from '../data/portfolio'
import Reveal from './Reveal'

export default function Education() {
  return (
    <Reveal id="education" className="wrap">
      <div className="sec-head">
        <div className="sec-kicker">05 — Education</div>
        <h2 className="sec-title">
          Academic <em>background.</em>
        </h2>
      </div>
      <div className="edu-grid">
        {education.map((item) => (
          <div key={item.school} className="edu-card">
            <div>
              <h3>{item.school}</h3>
              <div className="degree">{item.degree}</div>
              <div className="loc">{item.loc}</div>
            </div>
            <span className="when">{item.when}</span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
