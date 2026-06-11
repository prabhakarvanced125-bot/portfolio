export const skills = [
  { cat: 'Core Frontend', tags: ['React.js', 'TypeScript', 'JavaScript ES6+', 'React Native', 'Expo'] },
  { cat: 'Styling & UI', tags: ['Material UI', 'Chakra UI', 'Styled Components', 'HTML5/CSS3', 'WCAG'] },
  { cat: 'State Management', tags: ['Redux Toolkit', 'Zustand', 'Context API'] },
  { cat: 'API & Data', tags: ['RESTful APIs', 'GraphQL', 'Apollo Client'] },
  { cat: 'Engineering', tags: ['SAFe Agile', 'SDLC', 'System Design', 'Code Reviews', 'Performance'] },
  { cat: 'Cloud & DevOps', tags: ['AWS CDK', 'AWS S3', 'GitLab CI/CD', 'CI/CD'] },
  { cat: 'Testing & Tooling', tags: ['Vite', 'Webpack', 'New Relic', 'Vitest', 'Jest', 'RTL', 'Playwright'] },
  { cat: 'AI-Assisted Dev', tags: ['GitHub Copilot', 'Claude'] },
]

export const jobs = [
  {
    co: 'Spectrum Reach',
    loc: 'Charlotte, NC',
    role: 'Software Developer',
    when: 'Aug 2023 — Present',
    bullets: [
      'Migrated applications from Keycloak to ESSO-based SSO across multiple apps, standardizing secure access and authentication flows.',
      'Developed the FCC Document Manager UI for document uploads, affiliate management, and secure access workflows.',
      'Accelerated development speeds by 40% through Vite migration, optimized bundling, lazy loading, caching, and Core Web Vitals.',
      'Built frontend cloud infrastructure with AWS CDK, Amazon S3, custom domains, and automated deployment workflows.',
      'Monitored application health in New Relic and investigated production performance issues.',
      'Authored Vitest, React Testing Library, and Playwright coverage for OAuth/ESSO MFA flows while using Copilot and Claude to accelerate delivery.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'Vite', 'AWS CDK', 'Playwright'],
  },
  {
    co: 'Tabner',
    loc: 'Charlotte, NC',
    role: 'Software Developer',
    when: 'Jan 2023 — Aug 2023',
    bullets: [
      'Developed internal business applications with React and TypeScript, improving operational visibility and workflow efficiency.',
      'Implemented Redux Toolkit state management for complex, multi-user event configurations.',
      'Built responsive, accessible single-page application features with React, TypeScript, and Chakra UI aligned to WCAG standards.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Chakra UI', 'WCAG'],
  },
  {
    co: 'DigitalDots',
    loc: 'Hyderabad, India',
    role: 'Software Developer',
    when: 'Apr 2022 — Oct 2022',
    bullets: [
      'Developed and maintained React-based internal business applications with responsive user interfaces.',
      'Ensured reliable performance across modern browsers.',
      'Partnered with designers and backend teams to translate Figma designs into production-ready React interfaces.',
    ],
    stack: ['React', 'TypeScript', 'Figma', 'Responsive UI'],
  },
  {
    co: 'Aucupia Online Services',
    loc: 'Noida, India',
    role: 'Frontend Developer',
    when: 'Jan 2021 — Feb 2022',
    bullets: [
      'Led frontend engineering for a cross-platform mobile app using React Native, Expo, and React.js in a CI/CD startup environment.',
      'Integrated Firebase Authentication for Google Sign-In and traditional authentication workflows.',
      'Defined frontend architecture and a reusable design system with styled-components for web and mobile delivery.',
    ],
    stack: ['React Native', 'Expo', 'React', 'Firebase Auth', 'Styled Components'],
  },
]

export const projects = [
  {
    t: 'FCC Document Manager',
    d: 'Enterprise React UI supporting FCC document uploads, affiliate management, and secure access workflows.',
    s: ['React', 'TypeScript', 'Redux Toolkit', 'MUI'],
  },
  {
    t: 'Enterprise SSO Migration',
    d: 'Standardized authentication by moving applications from Keycloak to ESSO-based SSO with OAuth and MFA test coverage.',
    s: ['SSO', 'OAuth', 'Playwright'],
  },
  {
    t: 'Vite Performance Migration',
    d: 'Improved development speed by 40% through Vite migration, optimized bundling, lazy loading, caching, and Core Web Vitals work.',
    s: ['Vite', 'Webpack', 'Performance'],
  },
  {
    t: 'Cross-Platform Mobile App',
    d: 'React Native and Expo mobile experience with Firebase Authentication and a reusable styled-components design system.',
    s: ['React Native', 'Expo', 'Firebase'],
  },
]
