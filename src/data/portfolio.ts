export const skills = [
  { cat: 'Frontend', tags: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Zustand'] },
  { cat: 'Styling & UI', tags: ['Material UI', 'SASS', 'CSS3', 'Responsive', 'WCAG a11y'] },
  { cat: 'Build & Tooling', tags: ['Vite', 'Webpack', 'Babel', 'Bun', 'Yarn'] },
  { cat: 'Testing', tags: ['Vitest', 'Jest', 'RTL', 'Playwright'] },
  { cat: 'API & Data', tags: ['GraphQL', 'Apollo', 'REST'] },
  { cat: 'Cloud & DevOps', tags: ['AWS S3', 'Lambda', 'CDK', 'CI/CD'] },
  { cat: 'Auth', tags: ['Keycloak', 'OAuth2', 'SSO'] },
  { cat: 'AI & Productivity', tags: ['Amazon Q', 'Copilot', 'Claude Code', 'Figma MCP'] },
]

export const jobs = [
  {
    co: 'Spectrum Reach',
    loc: 'Charlotte, NC',
    role: 'Full Stack Developer (Frontend Focused)',
    when: 'Aug 2023 — Present',
    bullets: [
      'Integrated GraphQL (Apollo), improving data-fetch efficiency by 20%',
      'Migrated build CRA → Vite, cutting build times by 40%',
      'Refactored auth: Keycloak → enterprise SSO',
      'Introduced Playwright E2E across Chrome, Firefox & Safari',
      'Architected kiro-cli workflows for AI-assisted delivery across the frontend stack',
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Vite', 'AWS', 'Playwright'],
  },
  {
    co: 'Tabner',
    loc: 'Charlotte, NC',
    role: 'React Developer',
    when: 'Jan 2023 — Aug 2023',
    bullets: [
      'Migrated legacy Angular → React/TS, improving LCP/CLS by 1.5s',
      'Built reusable MUI component library',
      'Implemented Redux Toolkit, cutting redundant re-renders',
      'Raised test coverage to 90%+ with Vitest & RTL',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Vitest', 'MUI'],
  },
  {
    co: 'Digital Dots',
    loc: 'Hyderabad, India',
    role: 'Front End Developer (React)',
    when: 'Apr 2022 — Oct 2022',
    bullets: [
      'Built responsive, cross-browser React apps from UX specs',
      'Integrated REST APIs, validated with Postman & Swagger',
      'Mobile-first layouts with SASS/LESS',
    ],
    stack: ['React', 'TypeScript', 'REST', 'SASS'],
  },
  {
    co: 'Aucupia Online Services',
    loc: 'Noida, India',
    role: 'Front End Developer',
    when: 'Jan 2021 — Mar 2022',
    bullets: [
      'Built React Native app & React web platform for service booking',
      'Developed an in-app customizable website builder',
      'Integrated Google Sign-In, Maps API & geolocation',
      'Implemented localization (Hindi, Telugu)',
    ],
    stack: ['React Native', 'React', 'Firebase', 'i18n'],
  },
]

export const projects = [
  {
    t: 'Campaign Pacing Calculator',
    d: 'Client-facing forecasting tool with strict validation and full test coverage for ad ops teams.',
    s: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    t: 'CRA → Vite Migration',
    d: 'Modernized a large build pipeline, cutting build times 40% and improving DX team-wide.',
    s: ['Vite', 'Babel', 'CI/CD'],
  },
  {
    t: 'Enterprise Component Library',
    d: 'Accessible, reusable MUI design system shared across multiple products.',
    s: ['React', 'MUI', 'Storybook'],
  },
  {
    t: 'Service Booking Platform',
    d: 'React Native + web platform with in-app website builder, maps, and multi-language support.',
    s: ['React Native', 'Firebase', 'i18n'],
  },
]
