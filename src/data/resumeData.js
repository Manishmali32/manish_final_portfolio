export const profile = {
  name: 'Manish Suresh Mali',
  initials: 'MM',
  title: 'Java Full Stack Developer',
  tagline: 'Backend Developer — Java / Spring Boot',
  location: 'Surat, Gujarat, India',
  email: 'malimanish7a@gmail.com',
  phone: '+91 6359845528',
  github: 'https://github.com/Manishmali32/manish_final_portfolio.git',
  linkedin: 'https://www.linkedin.com/in/manish-mali-ab4b43283/',
  resumeFile: '/Manish_Mali_Resume.pdf',
  summary:
    "Motivated MCA student with hands-on experience building Java backend systems using Spring Boot, Spring Security, Spring MVC, Spring Data JPA, Hibernate, REST APIs and MySQL. I design RESTful services with clean, normalized schemas, role-based access control, and full CRUD lifecycles — and I've solved 50+ DSA problems along the way. Currently looking for a Backend or Java Developer role where I can ship scalable, production-quality software.",
  status: 'Open to backend / Java developer roles',
}

export const stats = [
  { value: '3', label: 'Full-stack backend projects' },
  { value: '50+', label: 'LeetCode problems solved' },
  { value: '8.23', label: 'SGPA — MCA, current' },
  { value: '1', label: 'Hackathon finalist run' },
]

export const skillGroups = [
  {
    key: 'core',
    label: 'Core & Languages',
    icon: 'Code2',
    items: ['Java', 'OOP', 'Collections Framework', 'Exception Handling', 'Data Structures & Algorithms'],
  },
  {
    key: 'backend',
    label: 'Backend & Frameworks',
    icon: 'Server',
    items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs'],
  },
  {
    key: 'database',
    label: 'Database',
    icon: 'Database',
    items: ['MySQL', 'Schema Design', 'Normalization', 'Query Optimization'],
  },
  {
    key: 'tools',
    label: 'Tools & Practices',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Maven', 'Postman', 'Agile Development'],
  },
]

export const projects = [
  {
    id: 'civicconnect',
    name: 'CivicConnect',
    subtitle: 'Smart Citizen Complaint Management System',
    date: 'Jan 2026',
    description:
      'A full-stack backend enabling citizens to report civic issues — road damage, drainage, water leakage, streetlight failures — with real-time complaint lifecycle tracking from submission to resolution.',
    highlights: [
      'Complaint lifecycle: Submitted → In Progress → Resolved → Closed',
      'Spring Security auth with role-based access control for citizens & admins',
      'Normalized MySQL schema for complaints, users & location tracking',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'MySQL', 'REST API', 'Maven'],
    github: 'https://github.com/ManishMali',
    demo: null,
  },
  {
    id: 'localconnect',
    name: 'Local Connect',
    subtitle: 'Community Service Platform',
    date: 'Mar 2026',
    description:
      'Backend services for a community platform connecting local users with nearby businesses, built on MVC architecture and Spring Boot best practices.',
    highlights: [
      'CRUD operations for service listings and user management',
      'MVC architecture following Spring Boot conventions',
      'Build & version control managed with Maven and GitHub',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Maven', 'Git'],
    github: 'https://github.com/ManishMali',
    demo: null,
  },
  {
    id: 'smart-expense-tracker',
    name: 'Smart Expense Tracker',
    subtitle: 'Personal Finance Backend',
    date: 'Jul 2026',
    description:
      'A backend application for logging, categorizing and tracking daily expenses, with monthly budget limits and spending summaries.',
    highlights: [
      'Normalized schema for categories, transactions & user accounts',
      'Secure session handling implemented with Spring Security',
      'API surface tested end-to-end with Postman',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'REST API', 'Maven'],
    github: 'https://github.com/ManishMali',
    demo: null,
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'K.K. Wagh Institute of Engineering Education & Research, Nashik',
    period: '2025 — Present',
    score: 'SGPA: 8.23',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Veer Narmad South Gujarat University',
    period: '2022 — 2025',
    score: 'CGPA: 6.97',
  },
  {
    degree: 'Class 12 — Commerce',
    school: 'Vidya Vihar Sankul',
    period: '2022',
    score: '69.06%',
  },
  {
    degree: 'Class 10',
    school: 'Suman High School No. 5',
    period: '2020',
    score: '52.5%',
  },
]

export const certifications = [
  { name: 'Java Full Stack Developer', issuer: 'Telusko' },
  { name: 'Mobile App Development', issuer: 'MKCL' },
]

export const experience = [
  {
    role: 'Software Development Intern',
    company: 'Tech Ready Solution',
    period: 'Apr 2025',
    points: [
      'Contributed to backend web application development and maintenance',
      'Debugged modules and participated in Agile-based development activities',
    ],
  },
]
