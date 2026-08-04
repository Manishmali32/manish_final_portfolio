import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/resumeData'
import './Contact.css'

const CHANNELS = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'manish-mali', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: 'ManishMali', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__panel glass">
          <div className="contact__intro">
            <p className="eyebrow">05 · Contact</p>
            <h2 className="section-title">Let&apos;s build something reliable</h2>
            <p className="section-sub">
              I'm currently open to Backend / Java Developer roles. Reach out directly — I reply fast.
            </p>
            <div className="contact__location">
              <MapPin size={15} />
              {profile.location}
            </div>
          </div>

          <div className="contact__channels">
            {CHANNELS.map(({ icon: Icon, label, value, href }) => (
              <a
                className="contact__channel"
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact__channel-icon">
                  <Icon size={17} />
                </span>
                <span>
                  <span className="contact__channel-label">{label}</span>
                  <span className="contact__channel-value">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
