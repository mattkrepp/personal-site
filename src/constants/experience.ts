export interface ExperienceItem {
  company: string;
  date: string;
  role: string;
  location: string;
  description: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Pomelo',
    date: '2022 - Present',
    role: 'Senior Software Engineer',
    location: 'San Francisco, CA / Remote',
    description: [
      'Employee number 9 at Founders Fund-backed FinTech startup. Scrappy, generalist mindset, with a particular focus on mobile development',
      'Leveraging React Native and Expo to deliver a performant, reliable app experience across platforms',
      'Working cross-functionally to manage complex technical projects from inception to launch and beyond',
      'Building and maintaining React web app, including design system components shared between web and native app',
      'Implementing mobile and frontend infrastructure, including custom native modules, CI/CD, app distribution (native and OTA), testing, and monitoring',
      'Designing and managing hiring and onboarding processes to enable rapid scaling of team',
      'Facilitating mentorship and knowledge transfer to accelerate new engineer/intern ramp-up',
    ],
  },
  {
    company: 'Doorkee',
    date: '2019 - 2022',
    role: 'Software Engineer',
    location: 'New York, NY / Remote',
    description: [
      'Full-stack software engineer working primarily with Node, React, Typescript, and MongoDB',
      '6th full-time employee at company, built platform and team process from the ground up',
      'Built and maintained third-party integrations',
      'Designed and implemented internal metrics capture and analytics system',
      'Managed data integrity, data ingestion, and migrations',
      'Coordinated with internal and external stakeholders to iterate and improve product',
    ],
  },
  {
    company: 'Innovid',
    date: '2019',
    role: 'Technical Services Engineer',
    location: 'New York, NY',
    description: [
      'Developed complex, performant SQL Queries to suit the reporting needs of clients',
      'Oversaw the development and maintenance of internal tools across a variety of languages and frameworks',
      'Investigated discrepancies with third-party data',
      'Coordinated with third-party stakeholders to ensure timely and accurate resolution of technical issues',
      'Formalized and codified the employee onboarding process',
      'Maintained extensive external documentation',
    ],
  },
  {
    company: 'Fullstack Academy',
    date: '2018',
    role: 'Teaching Fellow',
    location: 'New York, NY',
    description: [
      'Led a team of students through their educational journey at Fullstack',
      'Helped students debug code on the fly during workshops and projects',
      'Hosted office hours to help students work through technical and career challenges',
      'Worked with the engineering team to create new learning modules on our proprietary LMS; converted legacy Angular modules to React',
    ],
  },
  {
    company: 'inDinero',
    date: '2016 - 2017',
    role: 'Sales Development Representative',
    location: 'Portland, OR',
    description: [
      'Worked with startups to establish need for accounting services',
      'Prospected and contacted potential leads via phone and email outreach',
      'Led effort to redevelop team analytics system',
      'Built out a training curriculum for new hires',
    ],
  },
];
