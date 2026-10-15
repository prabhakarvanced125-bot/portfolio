import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import CostShareCaseStudy from './CostShareCaseStudy'

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
          <div key={project.title} className={`proj ${project.featured ? 'is-featured' : ''}`}>
            <span className="pn">{project.featured ? 'FEATURED · PERSONAL MOBILE APPLICATION' : `CASE STUDY ${String(index).padStart(2, '0')}`}</span>
            <h3>{project.title}</h3>
            <p className="subtitle">{project.subtitle}</p>
            {project.featured && (
              <div className="featured-media">
                <div>
                  <p className="platforms">Android · iOS</p>
                  <p>Group expenses, itemized bill splitting, and settlements in a shared React Native codebase.</p>
                  <div className="store-links">
                    <a href="https://play.google.com/store/apps/details?id=com.satyakotipalli.costshare" target="_blank" rel="noopener noreferrer">Google Play</a>
                    <a href="https://apps.apple.com/us/app/cost-share-split-bills/id6759198570" target="_blank" rel="noopener noreferrer">App Store</a>
                  </div>
                </div>
              </div>
            )}
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                rel="noreferrer"
                target="_blank"
              >
                Visit project
                <span>{project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              </a>
            ) : null}
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
            {project.featured && <CostShareCaseStudy />}
            {!project.featured && project.title === 'FCC Document Manager' && (
              <details className="case-study">
                <summary>Explore the frontend approach</summary>
                <div className="case-study-body">
                  <h4>Frontend architecture</h4>
                  <p>React and TypeScript UI features use Redux Toolkit for application state, Material UI for consistent interface components, and REST APIs for document and affiliate workflows.</p>
                  <h4>My contribution</h4>
                  <p>Developed document management interfaces, upload workflows, affiliate administration, reusable UI components, backend API integration, and secure access flows. The engineering focus was maintainability, accessible interfaces, and clear enterprise workflows.</p>
                </div>
              </details>
            )}
            {!project.featured && project.title === 'Enterprise SSO Modernization' && (
              <details className="case-study">
                <summary>Explore the authentication approach</summary>
                <div className="case-study-body">
                  <h4>Migration scope</h4>
                  <p>Updated frontend authentication integrations from Keycloak to Microsoft Entra ID/MSAL across multiple applications. Work included login and session handling, authorization behavior, and consistent SSO experiences.</p>
                  <h4>Verification</h4>
                  <p>Implemented Playwright testing for OAuth/OIDC, SSO, and MFA workflows. These integrations require attention to redirect behavior, session transitions, and protected UI states. This summary is limited to frontend contributions and excludes employer implementation details.</p>
                </div>
              </details>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  )
}
