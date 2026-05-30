import { jobs } from '../data/portfolio'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Reveal id="work" className="wrap">
      <div className="sec-head">
        <div className="sec-kicker">03 — Experience</div>
        <h2 className="sec-title">
          Where I've <em>shipped.</em>
        </h2>
      </div>
      <div className="exp">
        {jobs.map((job) => (
          <div key={job.co} className="job">
            <div className="job-card">
              <div className="job-top">
                <div>
                  <h3>{job.co}</h3>
                  <div className="role">
                    {job.role} · {job.loc}
                  </div>
                </div>
                <span className="when">{job.when}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="stack">
                {job.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
