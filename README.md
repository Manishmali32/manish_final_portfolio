# Manish Mali — Portfolio

A personal portfolio built with React + Vite, populated from Manish Suresh Mali's résumé.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- **Profile photo**: no photo was supplied with the résumé, so the hero shows a large
  generated "MM" initials mark instead. To use a real photo, drop an image into `public/`
  (e.g. `public/profile.jpg`), then in `src/components/Hero.jsx` replace the
  `<span>{profile.initials}</span>` inside `.hero__photo` with
  `<img src="/profile.jpg" alt="Manish Mali" />`. The circular frame, gradient ring and
  shadow are already sized for a photo — no CSS changes needed.
- **Résumé download**: the uploaded PDF is served from `public/Manish_Mali_Resume.pdf` and
  wired to the "Download Résumé" button in the hero.
- **Content**: all résumé content (skills, projects, education, certifications, contact
  info) lives in `src/data/resumeData.js` — edit that one file to update the whole site.
- **Project links**: project cards link to `github.com/ManishMali` since the résumé
  doesn't list per-project repo URLs. Update `github` / add `demo` links per project in
  `resumeData.js` once individual repos are live.
