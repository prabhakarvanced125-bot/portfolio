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
      'Authored automated tests with Vitest, React Testing Library, and Playwright for OAuth/ESSO MFA flows while using Copilot and Claude to accelerate delivery.',
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
    title: 'FCC Document Manager',
    subtitle: 'Enterprise document management and affiliate administration UI',
    problem:
      'Internal teams needed a reliable interface to manage FCC document uploads, affiliate access, and regulatory workflows.',
    built:
      'Built React/TypeScript UI features using Redux Toolkit and Material UI for document upload workflows, affiliate management, and secure access flows.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI', 'REST APIs'],
    impact: 'Improved maintainability and supported critical internal document-management workflows.',
  },
  {
    title: 'Keycloak to ESSO Migration',
    subtitle: 'Authentication modernization across enterprise applications',
    problem:
      'Applications needed to migrate from legacy Keycloak-based authentication to enterprise ESSO-based SSO.',
    built:
      'Implemented secure frontend authentication and authorization flows, updated login/session handling, and supported OAuth/ESSO MFA scenarios.',
    tech: ['React', 'TypeScript', 'OAuth', 'ESSO', 'Keycloak', 'Playwright'],
    impact: 'Standardized authentication flows and improved secure access management across applications.',
  },
  {
    title: 'Frontend Infrastructure and Performance Migration',
    subtitle: 'Vite migration and AWS frontend deployment',
    problem:
      'Legacy build tooling slowed local development and frontend deployment workflows needed better maintainability.',
    built:
      'Migrated frontend tooling to Vite, optimized bundling/lazy loading/caching/Core Web Vitals, and helped deploy frontend apps using AWS CDK and Amazon S3 with custom domains.',
    tech: ['Vite', 'React', 'TypeScript', 'AWS CDK', 'Amazon S3', 'GitLab CI/CD'],
    impact: 'Improved local development speed by 40% and strengthened frontend deployment workflows.',
  },
]
