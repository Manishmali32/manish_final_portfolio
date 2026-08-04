import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/resumeData'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">&lt;MM/&gt; {profile.name}</p>

        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>

        <p className="footer__note">© {year} · Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}
