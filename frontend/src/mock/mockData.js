// Mock Skills Data
export const mockSkills = [
  // Front-End
  { id: 1, name: 'HTML', category: 'Front-End', level: 95 },
  { id: 2, name: 'CSS', category: 'Front-End', level: 95 },
  { id: 3, name: 'JavaScript', category: 'Front-End', level: 90 },
  { id: 4, name: 'Bootstrap', category: 'Front-End', level: 90 },
  { id: 5, name: 'Tailwind CSS', category: 'Front-End', level: 92 },
  
  // Frameworks
  { id: 6, name: 'React', category: 'Frameworks', level: 88 },
  { id: 7, name: 'React Native', category: 'Frameworks', level: 85 },
  { id: 8, name: 'Angular', category: 'Frameworks', level: 80 },
  
  // Databases
  { id: 9, name: 'SQL', category: 'Databases', level: 87 },
  { id: 10, name: 'NoSQL', category: 'Databases', level: 85 },
  { id: 11, name: 'MongoDB', category: 'Databases', level: 88 },
  { id: 12, name: 'Firebase', category: 'Databases', level: 82 },
  { id: 13, name: 'Oracle', category: 'Databases', level: 78 },
  
  // Data Science
  { id: 14, name: 'Python', category: 'Data Science', level: 90 },
  { id: 15, name: 'Data Analysis', category: 'Data Science', level: 85 },
  { id: 16, name: 'Visualization', category: 'Data Science', level: 83 }
];

// Mock Projects Data
export const mockProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment integration, cart management, and user authentication.',
    category: 'Web Apps',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind']
  },
  {
    id: 2,
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with real-time sync.',
    category: 'Mobile Apps',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for analyzing and visualizing complex datasets with custom charts and reports.',
    category: 'Data Science',
    technologies: ['Python', 'Pandas', 'Plotly', 'Flask']
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'Collaborative project management tool with team features, deadlines, and progress tracking.',
    category: 'Web Apps',
    technologies: ['Angular', 'TypeScript', 'SQL', 'Bootstrap']
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with animations and unique design elements.',
    category: 'UI/UX',
    technologies: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'Python-based tool for analyzing social media trends, sentiment analysis, and engagement metrics.',
    category: 'Data Science',
    technologies: ['Python', 'NumPy', 'NLP', 'Matplotlib']
  }
];

// Mock Experience Data
export const mockExperience = [
  {
    id: 1,
    role: 'Senior Front-End Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Leading front-end development for enterprise web applications, focusing on React-based solutions and UI/UX excellence.',
    achievements: [
      'Architected and deployed 5+ production-ready React applications',
      'Improved application performance by 40% through optimization',
      'Mentored junior developers and established coding standards'
    ]
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    location: 'Hybrid',
    description: 'Developed end-to-end web solutions using modern JavaScript frameworks and database technologies.',
    achievements: [
      'Built RESTful APIs serving 100K+ daily requests',
      'Integrated MongoDB and Firebase for real-time data sync',
      'Implemented responsive designs with 99% mobile compatibility'
    ]
  },
  {
    id: 3,
    role: 'Data Analyst',
    company: 'Analytics Pro',
    period: '2019 - 2020',
    location: 'On-site',
    description: 'Analyzed large datasets using Python and created insightful visualizations for business intelligence.',
    achievements: [
      'Processed and analyzed datasets with 1M+ records',
      'Created automated reporting pipelines saving 20 hours/week',
      'Developed predictive models with 85% accuracy'
    ]
  }
];
