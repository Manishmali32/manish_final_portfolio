import { Award, GraduationCap } from 'lucide-react'
import { education, certifications } from '../data/resumeData'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 · Education</p>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="education__cards">
          {education.map((ed) => (
            <div className="edu-card" key={ed.degree}>
              <div className="edu-card__icon">
                <GraduationCap size={19} />
              </div>
              <div className="edu-card__body">
                <h3>{ed.degree}</h3>
                <p className="edu-card__school">{ed.school}</p>
                <div className="edu-card__meta">
                  <span className="tag">{ed.period}</span>
                  <span className="tag">{ed.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3 className="certifications__title">
            <Award size={17} />
            Certifications
          </h3>
          <div className="certifications__list">
            {certifications.map((cert) => (
              <div className="certifications__card" key={cert.name}>
                <p className="certifications__name">{cert.name}</p>
                <p className="certifications__issuer">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
