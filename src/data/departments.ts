import type { Department } from '@/types';

export const departments: Department[] = [
  {
    name: 'Agricultural Engineering',
    slug: 'agri',
    abbr: 'AGRI',
    image: '/images/departments/agri-logo.png',
    email: 'agrowings2k26@rediffmail.com',
    coordinators: ['Rakshana G — +91 97915 07259', 'Desikan — +91 63838 02312'],
    staffCoordinators: ['Mr. G. Udhayakumar, AP/Agri — +91 95667 44930'],
    technicalEvents: ['Farm Tech (Paper Presentation)', 'Craft (CAD Design Challenge)', 'Agri Vista (Poster Presentation)'],
    nonTechnicalEvents: ['Clue Clash (Imposter)', 'Agri Canvas (Poster Making)'],
    registrationUrl: 'https://forms.gle/Yp4xDHDPK3z4AuYKA'
  },
  {
    name: 'AI and Data Science',
    slug: 'ai-ds',
    abbr: 'AI/DS',
    image: '/images/departments/ai-ds-logo.png',
    email: 'aidsppgit@gmail.com',
    coordinators: ['Rahul Krishnith — +91 93448 96158', 'Sudhakar — +91 80150 22457'],
    staffCoordinators: ['Mr. A. Santhana Boopathi, AP/AI&DS — +91 80564 50237'],
    technicalEvents: ['Technology Casino', 'Code Breakers', 'Idea Presentation'],
    nonTechnicalEvents: ['Memory Lens', 'Stumble Guys'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSetkwhIORgx3BNdvKKh5rGtx49deC9YWYmBKhxksm6ejIdhOA/viewform?usp=header'
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
    abbr: 'AI/ML',
    image: '/images/departments/ai-ml-logo.png',
    email: 'aispartanz.ppg.it@gmail.com',
    coordinators: ['Vyas — +91 78715 34011', 'Akash — +91 91594 04730'],
    staffCoordinators: ['Ms. B. Sivadharshini, AP/AI&ML — +91 99424 23983'],
    technicalEvents: ['IDEA2PROTOTYPE', 'PROMPT2PIXEL', 'Web Redesign'],
    nonTechnicalEvents: ['AI Shortfilm', 'MemeRush']
  },
  {
    name: 'Biomedical Engineering',
    slug: 'bme',
    abbr: 'BME',
    image: '/images/departments/bme.png',
    email: 'biobuds.ppgit@gmail.com',
    coordinators: ['Ashwini M — +91 97906 04694', 'Monisha K — +91 78068 68490'],
    staffCoordinators: ['Ms. V. Hema, AP/BME — +91 95006 77540'],
    technicalEvents: ['InnoVision', 'Idea Hub', 'Mind Rush'],
    nonTechnicalEvents: ['CONNECT', 'Guess the Organ']
  },
  {
    name: 'Computer Science & Engineering',
    slug: 'cse',
    abbr: 'CSE',
    image: '/images/departments/cse-logo.png',
    email: 'cyberzen.org@gmail.com',
    coordinators: [
      'Dhanu Shree — +91 98428 15860',
      'Nithish S — +91 96007 17165'
    ],
    staffCoordinators: ['Ms. A. Jenefa, AP/CSE — +91 81975 38732'],
    technicalEvents: ['Vibe Coding', 'Prompt War', 'Output Hunt'],
    nonTechnicalEvents: ['Chess Arena', 'Movie Mania'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe0TS5zT-kZtP3mGnpqDjE1pge9WYkoduJCkxCXMHMjGTZ43w/viewform?pli=1'
  },
  {
    name: 'Electronics and Communication Engineering',
    slug: 'ece',
    abbr: 'ECE',
    image: '/images/departments/ECE.png',
    email: 'electrosparks2024@gmail.com',
    coordinators: ['Nakshatra — +91 99404 48047', 'Subagaanthan — +91 90258 52595'],
    staffCoordinators: ['Ms. G. Karthiga, AP/ECE — +91 80567 18288'],
    technicalEvents: ['Circuit Crime Scene', 'PPT and Paper Presentation', 'Reverse Engineering'],
    nonTechnicalEvents: ['ECE Escape Room', 'IPL Auction'],
    registrationUrl: 'https://forms.gle/VFmp1MkKmPMfKEeh8'
  },
  {
    name: 'Information Technology',
    slug: 'it',
    abbr: 'IT',
    image: '/images/departments/it-logo.png',
    email: 'techtitansppg@gmail.com',
    coordinators: ['Deeksha — +91 75500 47887', 'Abhishek — +91 85318 28481'],
    staffCoordinators: ['Mr. A. Muthukumar, AP/IT — +91 63696 31525'],
    technicalEvents: ['AI: Spin and Solve', 'TechQuest: The Blind Tech Labyrinth', 'Blind Build'],
    nonTechnicalEvents: ['eFootball Mobile Tournament', 'AdRush'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc7_-3VZCzi3lsqOCBi8-TDE1a5iiY89Flo_TziXkYFtVCaQw/viewform?usp=publish-editor'
  },
  {
    name: 'Mechanical Engineering',
    slug: 'mechanical',
    abbr: 'MECH',
    image: '/images/departments/MECH.png',
    email: 'stratos.mech.it@ppg.edu.in',
    coordinators: ['Aravind Samy — +91 80568 43025', 'Thanaraj — +91 93440 37117'],
    staffCoordinators: ['Mr. M. Mohan, AP/Mech — +91 63693 25530'],
    technicalEvents: ['CAD Designing', 'Mr. Mechanic', 'Reverse Engineering Sketch', 'Paper Presentation'],
    nonTechnicalEvents: ['Creative Ad', 'Emoji Decode'],
    registrationUrl: 'https://forms.gle/NxqhVtV6MmcmBpHNA'
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
