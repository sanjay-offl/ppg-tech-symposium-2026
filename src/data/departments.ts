import type { Department } from '@/types';

export const departments: Department[] = [
  {
    name: 'AI and Data Science',
    slug: 'ai-ds',
    abbr: 'AI/DS',
    image: '/images/departments/ai-ds-logo.png',
    email: 'aidsppgit@gmail.com',
    coordinators: ['Rahul Krishnith — 9876543212', 'Sudhakar — 9876543213'],
    technicalEvents: ['Technology Casino', 'Code Breakers', 'Idea Presentation'],
    nonTechnicalEvents: ['Memory Lens', 'Stumble Guys']
  },
  {
    name: 'Information Technology',
    slug: 'it',
    abbr: 'IT',
    image: '/images/departments/it-logo.png',
    email: 'techtitansppg@gmail.com',
    coordinators: ['Deeksha — 9876543222', 'Abhishek — 9876543223'],
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
    coordinators: ['Aravind Samy — 9876543224', 'Thanaraj — 9876543225'],
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
    coordinators: ['Nakshatra — 9876543220', 'Subagaanthan — 9876543221'],
    technicalEvents: ['Circuit Crime Scene', 'PPT and Paper Presentation', 'Reverse Engineering'],
    nonTechnicalEvents: ['ECE Escape Room', 'IPL Auction']
  },
  {
    name: 'Agricultural Engineering',
    slug: 'agri',
    abbr: 'AGRI',
    image: '/images/departments/agri-logo.png',
    email: 'agrowingz.ppgit@gmail.com',
    coordinators: ['Rakshana — 9876543210', 'Saranya — 9876543211'],
    technicalEvents: ['Farm Tech (Paper Presentation)', 'Craft (CAD Design Challenge)', 'Agri Vista (Poster Presentation)'],
    nonTechnicalEvents: ['Clue Clash (Imposter)', 'Agri Canvas (Poster Making)']
  },
  {
    name: 'Computer Science & Engineering',
    slug: 'cse',
    abbr: 'CSE',
    image: '/images/departments/cse-logo.png',
    email: 'cyberzen2k25@gmail.com',
    coordinators: [
      'Dhanu Shree — 98428 15860',
      'Nithish S — 96007 17165'
    ],
    technicalEvents: ['Vibe Coding', 'Prompt War', 'Output Hunt'],
    nonTechnicalEvents: ['Chess Arena', 'Movie Mania'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe0TS5zT-kZtP3mGnpqDjE1pge9WYkoduJCkxCXMHMjGTZ43w/viewform?pli=1'
  },
  {
    name: 'Biomedical Engineering',
    slug: 'bme',
    abbr: 'BME',
    image: '/images/departments/bme.png',
    email: 'hodbiomedppgit@gmail.com',
    coordinators: ['Krishna Kumar — 9876543216', 'Ashwini — 9876543217'],
    technicalEvents: ['InnoVision', 'Idea Hub', 'Mind Rush'],
    nonTechnicalEvents: ['CONNECT', 'Guess the Organ']
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
    abbr: 'AI/ML',
    image: '/images/departments/ai-ml-logo.png',
    email: 'aispartanz.ppg.it@gmail.com',
    coordinators: ['Vyas — 78715 34011', 'Akash — 91594 04730'],
    technicalEvents: ['IDEA2PROTOTYPE', 'PROMPT2PIXEL', 'Web Redesign'],
    nonTechnicalEvents: ['AI Shortfilm', 'MemeRush']
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
