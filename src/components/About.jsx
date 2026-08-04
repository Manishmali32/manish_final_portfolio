import { Briefcase, GraduationCap, Target } from 'lucide-react'
import { profile, experience } from '../data/resumeData'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">01 · About</p>
          <h2 className="section-title">A backend developer who likes things well-modeled</h2>
        </div>

        <div className="about__grid">
          <div className="about__summary glass">
            <p>{profile.summary}</p>
          </div>

          <div className="about__side">
            <div className="about__card">
              <Target size={18} className="about__card-icon" />
              <div>
                <h4>What I'm looking for</h4>
                <p>A Backend or Java Developer role building scalable, production-quality software.</p>
              </div>
            </div>

            <div className="about__card">
              <GraduationCap size={18} className="about__card-icon" />
              <div>
                <h4>Currently</h4>
                <p>Pursuing MCA at K.K. Wagh Institute of Engineering, Nashik — SGPA 8.23.</p>
              </div>
            </div>

            {experience.map((exp) => (
              <div className="about__card" key={exp.role}>
                <Briefcase size={18} className="about__card-icon" />
                <div>
                  <h4>{exp.role}</h4>
                  <p>
                    {exp.company} · {exp.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
