import type { Project, SkillCategory, SocialLink, Activity } from '../types';

export const personalInfo = {
  name: 'Ashish',
  title: 'Web Developer',
  tagline: 'Passionate about Backend Development, UI/UX Design, and Data Structures & Algorithms',
  email: 'ashish@example.com',
};

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration. Features real-time inventory management and admin dashboard.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://example.com/ecommerce',
    codeUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: 'taskmanager',
    title: 'Task Management Dashboard',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking analytics.',
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://example.com/taskmanager',
    codeUrl: 'https://github.com/example/taskmanager',
  },
  {
    id: 'dsa-visualizer',
    title: 'Algorithm Visualizer',
    description: 'An interactive tool for visualizing data structures and algorithms. Features step-by-step execution, speed controls, and explanations for sorting, searching, and graph algorithms.',
    images: [
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    techStack: ['React', 'TypeScript', 'Canvas API', 'CSS Animations'],
    liveUrl: 'https://example.com/dsa-visualizer',
    codeUrl: 'https://github.com/example/dsa-visualizer',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
    ],
  },
  {
    category: 'UI/UX',
    skills: [
      { name: 'Figma' },
      { name: 'Responsive Design' },
      { name: 'User Research' },
      { name: 'Prototyping' },
      { name: 'Design Systems' },
    ],
  },
  {
    category: 'DSA',
    skills: [
      { name: 'Algorithms' },
      { name: 'Data Structures' },
      { name: 'Problem Solving' },
      { name: 'Complexity Analysis' },
      { name: 'Competitive Programming' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com',
    icon: '🐙',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: '💼',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: '🐦',
  },
  {
    platform: 'Email',
    url: 'mailto:ashish@example.com',
    icon: '📧',
  },
];

export const activities: Activity[] = [
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to various open source projects on GitHub',
  },
  {
    title: 'Tech Blog Writer',
    description: 'Writing technical articles about web development and algorithms',
  },
  {
    title: 'Hackathon Winner',
    description: 'Won first place at XYZ Hackathon 2024',
  },
];
