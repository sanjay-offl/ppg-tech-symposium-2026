import type { Department } from '@/types';

export const departments: Department[] = [
  {
    name: 'AI and Data Science',
    slug: 'ai-ds',
    abbr: 'AI/DS',
    image: '/images/departments/ai-ds-logo.png',
    email: 'aidsppgit@gmail.com',
    coordinators: ['Rahul Krishnith', 'Sudhakar'],
    technicalEvents: ['Technology Casino', 'Code Breakers', 'Idea Presentation'],
    nonTechnicalEvents: ['Memory Lens', 'Stumble Guys']
  },
  {
    name: 'Information Technology',
    slug: 'it',
    abbr: 'IT',
    image: '/images/departments/it-logo.png',
    email: 'techtitansppg@gmail.com',
    coordinators: ['Deeksha', 'Abhishek'],
    technicalEvents: ['AI: Spin and Solve', 'TechQuest: The Blind Tech Labyrinth', 'Blind Build'],
    nonTechnicalEvents: ['eFootball Mobile Tournament', 'AdRush'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc7_-3VZCzi3lsqOCBi8-TDE1a5iiY89Flo_TziXkYFtVCaQw/viewform?usp=publish-editor'
  },
  {
    name: 'Mechanical Engineering',
    slug: 'mechanical',
    abbr: 'MECH',
    image: '/images/departments/MECH.png',
    email: 'mohanm.it@ppg.edu.in',
    coordinators: ['Aravind Samy', 'Thanaraj'],
    technicalEvents: ['CAD Designing', 'Mr. Mechanic', 'Reverse Engineering Sketch', 'Paper Presentation'],
    nonTechnicalEvents: ['Creative Ad', 'Emoji Decode'],
    registrationUrl: 'https://forms.gle/NxqhVtV6MmcmBpHNA'
  },
  {
    name: 'Electronics and Communication Engineering',
    slug: 'ece',
    abbr: 'ECE',
    image: '/images/departments/ECE.png',
    email: 'electrosparks2024@gmail.com',
    coordinators: ['Nakshatra', 'Subagaanthan'],
    technicalEvents: ['Circuit Crime Scene', 'PPT and Paper Presentation', 'Reverse Engineering'],
    nonTechnicalEvents: ['ECE Escape Room', 'IPL Auction']
  },
  {
    name: 'Agricultural Engineering',
    slug: 'agri',
    abbr: 'AGRI',
    image: '/images/departments/agri-logo.png',
    email: 'agrowingz.ppgit@gmail.com',
    coordinators: ['Rakshana', 'Saranya'],
    technicalEvents: ['Farm Tech (Paper Presentation)', 'Craft (CAD Design Challenge)', 'Agri Vista (Poster Presentation)'],
    nonTechnicalEvents: ['Clue Clash (Imposter)', 'Agri Canvas (Poster Making)']
  },
  {
    name: 'Computer Science & Engineering',
    slug: 'cse',
    abbr: 'CSE',
    image: '/images/departments/cse-logo.png',
    email: 'cyberzen2k25@gmail.com',
    coordinators: ['Nitheesh', 'Dhanu Shree'],
    technicalEvents: ['VibeCode Clash', 'Circuit Breaker', 'Prompt War'],
    nonTechnicalEvents: ['Apex Quiz Challenge', 'Memory Master'],
    registrationUrl: 'https://forms.gle/ofmENiDuVkfGZvbf9'
  },
  {
    name: 'Biomedical Engineering',
    slug: 'bme',
    abbr: 'BME',
    image: '/images/departments/bme.png',
    email: 'hodbiomedppgit@gmail.com',
    coordinators: ['Krishna Kumar', 'Ashwini'],
    technicalEvents: ['InnoVision', 'Idea Hub', 'Technical Quiz'],
    nonTechnicalEvents: ['BIOSCOPE', 'Guess the organs']
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
    abbr: 'AI/ML',
    image: '/images/departments/ai-ml-logo.png',
    email: 'aispartanz.ppg.it@gmail.com',
    coordinators: ['Vyas', 'Akash'],
    technicalEvents: ['IDEA2PROTOTYPE', 'PROMPT2PIXEL', 'Web Redesign'],
    nonTechnicalEvents: ['AI Short Film', 'Human VS AI']
  }
];

// Helper to find department by slug or alias
export function getDepartmentBySlug(slug: string): Department | undefined {
  const normalized = slug.toLowerCase();
  const aliasMap: Record<string, string> = {
    'agricultural-engineering': 'agri',
    'ai-data-science': 'ai-ds',
    'information-technology': 'it',
    'mechanical-engineering': 'mechanical',
    'electronics-communication': 'ece',
    'computer-science-engineering': 'cse',
    'biomedical-engineering': 'bme',
    'ai-machine-learning': 'ai-ml'
  };
  const targetSlug = aliasMap[normalized] || normalized;
  return departments.find((d) => d.slug === targetSlug);
}
