export interface EducationItem {
  school: string;
  degree: string;
  location: string;
}

export const aboutText: string[] = [
  'Hi! My name is Matt, and I like to build things from scratch. For the past six years, I’ve been helping early-stage startups take ideas and products from zero to one. My passion is for building unforgettable experiences across app and web, and I revel in the challenge of wearing many hats.',
  'While I’m experienced working across the entire stack, my particular focus lately has been around all things mobile. I’m intimately familiar with the React Native and Expo ecosystems, and I take joy in squashing bugs in the depths of the native layer.',
  'Currently, I’m building the future of international money transfer at Pomelo, where I’ve been for the past three and a half years. As the ninth full-time employee at the company, I’ve experienced much of the startup lifecycle firsthand: from soft launch and early iteration, through full launch and our Founders Fund-led Series A, to rapidly scaling both platform and team, it’s safe to say we’ve covered a lot of ground! It has been an incredibly challenging and informative experience, and I’m proud to be a part of it.',
];

export const education: EducationItem[] = [
  {
    school: 'McGill University',
    degree: 'B.A. Honours, International Development',
    location: 'Montreal, QC',
  },
  {
    school: 'Portland State University',
    degree: 'Postbaccalaureate Computer Science',
    location: 'Portland, OR',
  },
  {
    school: 'Fullstack Academy',
    degree: 'Software Engineering Immersive',
    location: 'New York, NY',
  },
];

export const technologies: string[] = [
  'React',
  'Node.js',
  'Typescript',
  'MongoDB',
  'Sass',
  'AWS Lambda',
  'MySQL',
  'PostgreSQL',
  'Segment',
  'Snowflake',
  'Cypress',
  'Jest',
];
