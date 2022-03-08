export interface EducationItem {
  school: string;
  degree: string;
  location: string;
}

export const aboutText: string[] = [
  'Hi! My name is Matt and I love building things for the web. My journey into engineering began in 2016. After college, I began working in sales for a tech startup. I quickly came to realize two things: that I loved working in tech, and that sales was not my passion.',
  'With that realization in hand, I decided to go back to school. I enrolled in Portland State’s Computer Science program, where I spent a year learning the fundamentals before finding my passion for web development and enrolling at Fullstack Academy. After completing the Software Engineering program at Fullstack, I was offered a teaching fellowship, where I taught and mentored a group of students throughout their time in the program.',
  'For the past 3 years, I had the pleasure of working as a Software Engineer at an incredible PropTech startup, Doorkee. As the sixth full-time employee, I had an integral part in building the platform and team from the ground-up. Working on a small team also gave me the opportunity to touch every part of the app, from front-end, to back-end, to DevOps.',
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
