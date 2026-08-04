import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/resumeData'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">03 · Projects</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-sub">Backend systems designed end-to-end — schema, security, and API surface.</p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__tab">
                <span className="project-card__file">{project.name.replace(/\s+/g, '')}.java</span>
                <span className="project-card__date">{project.date}</span>
              </div>

              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      <ArrowUpRight size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
