import type { FAQItem } from '@/types';

export const faqCategories = [
  'All',
  'Registration & Fee',
  'Events & Rules',
  'Venue & Logistics',
  'Prizes & Certificates'
] as const;

export type FAQCategory = typeof faqCategories[number];

export const faqs: FAQItem[] = [
  {
    id: 'fee-coverage',
    category: 'Registration & Fee',
    question: 'What does the ₹250 registration fee cover?',
    answer: 'The ₹250 registration fee is an all-inclusive single pass. It grants you full access to participate in events across any of the 7 departments, provides an official participation certificate, and includes complimentary lunch and refreshments for the day.'
  },
  {
    id: 'multiple-events',
    category: 'Events & Rules',
    question: 'Can I participate in multiple events across different departments?',
    answer: 'Yes! Your single registration allows you to enter both technical and non-technical events across different departments, provided their schedules and time slots do not overlap.'
  },
  {
    id: 'eligibility',
    category: 'Registration & Fee',
    question: 'Who is eligible to participate in VIYUGAM 2K26?',
    answer: 'Undergraduate and postgraduate students from any recognized engineering college, university, or polytechnic institution are eligible. Students from all branches and all academic years (1st through 4th year) are welcome.'
  },
  {
    id: 'team-intercollege',
    category: 'Events & Rules',
    question: 'Are inter-college and inter-department teams allowed?',
    answer: 'Yes, absolutely. For team events, members can belong to different departments or even different colleges. You can indicate your team name during registration or at the check-in desk.'
  },
  {
    id: 'payment-process',
    category: 'Registration & Fee',
    question: 'How do I pay and verify my registration?',
    answer: 'Submit your details on the Register page, then proceed to the Payment page. Pay ₹250 via the official UPI QR code and enter your UTR / transaction reference number. Your registration status will be confirmed once verified.'
  },
  {
    id: 'on-spot-registration',
    category: 'Registration & Fee',
    question: 'Is on-spot registration available on the event day?',
    answer: 'Yes, on-spot registration desks will be active starting at 8:30 AM on September 25, 2026. However, online pre-registration is strongly encouraged to guarantee event slots, lunch tokens, and faster check-in.'
  },
  {
    id: 'what-to-bring',
    category: 'Venue & Logistics',
    question: 'What should I bring on the day of the event?',
    answer: 'Please carry a valid College Identity Card (or bonafide certificate) and your payment / registration reference. For coding, web development, or presentation events, we recommend carrying your personal laptops with necessary software installed.'
  },
  {
    id: 'reporting-time',
    category: 'Venue & Logistics',
    question: 'What is the reporting time and symposium schedule?',
    answer: 'The registration and helpdesk open at 08:30 AM. Events commence at 10:00 AM sharp, followed by lunch at 01:00 PM, and the Valedictory & Prize Distribution ceremony at 04:00 PM.'
  },
  {
    id: 'food-refreshments',
    category: 'Venue & Logistics',
    question: 'Will food and refreshments be provided?',
    answer: 'Yes. Every registered participant will receive tokens for morning refreshments and a delicious hot lunch prepared on campus.'
  },
  {
    id: 'venue-transport',
    category: 'Venue & Logistics',
    question: 'Where is the venue located and how do I reach it?',
    answer: 'The symposium takes place at PPG Institute of Technology, NH-209, Sathy Road, Saravanampatti, Coimbatore - 641035. The campus is well-connected by local public buses running from Gandhipuram Central Bus Stand (Buses heading towards Annur / Sathy).'
  },
  {
    id: 'prizes-cash',
    category: 'Prizes & Certificates',
    question: 'What prizes can winners expect?',
    answer: 'Winners across all 37 technical and non-technical events will receive exciting cash prizes, winner certificates, and trophies/mementos awarded during the grand Valedictory ceremony.'
  },
  {
    id: 'f1-giveaway',
    category: 'Prizes & Certificates',
    question: 'How does the Hot Wheels F1 Collection giveaway work?',
    answer: 'In keeping with our racing theme, an exclusive Hot Wheels Formula 1 die-cast car collection will be awarded to standout performers and top event winners. This is a limited collector prize given to select championship champions!'
  },
  {
    id: 'certificates',
    category: 'Prizes & Certificates',
    question: 'Will all participants receive certificates?',
    answer: 'Yes, every attendee who registers and participates in the symposium will be awarded an official hard-copy Participation Certificate from PPG Institute of Technology (NAAC A Grade, AICTE approved).'
  }
];
