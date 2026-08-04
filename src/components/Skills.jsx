import { Code2, Database, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../data/resumeData'
import './Skills.css'

const ICONS = { Code2, Server, Database, Wrench }

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">02 · Skills</p>
          <h2 className="section-title">Toolkit</h2>
          <p className="section-sub">The languages, frameworks and tools I reach for most.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon]
            return (
              <div className="skills__card" key={group.key}>
                <div className="skills__icon">
                  <Icon size={20} />
                </div>
                <h3>{group.label}</h3>
                <ul className="skills__list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="skills__bullet" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
