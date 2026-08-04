import { Download, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '../data/resumeData'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__status">
            <span className="hero__status-dot" />
            {profile.status}
          </div>

          <p className="hero__greeting">Hi, I&apos;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__title">{profile.title}</h2>

          <p className="hero__intro">
            I build backend systems in Java &amp; Spring Boot — clean REST APIs, secure
            authentication, and well-modeled MySQL schemas that hold up under real use.
          </p>

          <div className="hero__location">
            <MapPin size={15} />
            {profile.location}
          </div>

          <div className="hero__actions">
            <a href={profile.resumeFile} download className="btn btn-primary">
              <Download size={17} />
              Download Résumé
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={17} />
              Contact Me
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-glow" aria-hidden="true" />
          <div className="hero__photo">
            <img src="/manish_portfolio_image.jpeg" alt={profile.name} />
          </div>
          <div className="hero__photo-badge">
            <span className="hero__photo-badge-dot" />
            Available for hire
          </div>
        </div>
      </div>
    </section>
  )
}