import type { EventItem } from '@/types';
import { departments } from './departments';

const descriptions: Record<string, string> = {
  // Agricultural Engineering
  'Farm Tech Presentation': 'Present innovative ideas and technologies shaping modern agriculture, smart farming, and sustainable food production.',
  'CAD Craft': 'Demonstrate precision engineering and 2D/3D design skills tailored for agricultural machinery and farm implements.',
  'Agri vista (Poster Presentation)': 'Showcase visual technical posters highlighting groundbreaking research and agri-tech innovations.',
  'Clue Clash (Imposter)': 'An engaging deduction and social mystery game where teams work to spot and unmask the hidden imposter.',
  'Agri Canvas': 'Express creative artistic talents through theme-based visual design, drawing, and artwork.',

  // Artificial Intelligence & Data Science
  'Technology Casino': 'High-stakes technical problem-solving and algorithmic challenges in AI & Data Science.',
  'Code Breakers': 'Solve intricate coding logic, debugging, and data structure puzzles under time pressure.',
  'Idea Presentation': 'Pitch innovative AI & Data Science solutions and research concepts to expert judges.',
  'Memory Lens': 'Test your visual recall, focus, and observational precision in a fast-paced memory challenge.',
  'E-Football': 'Compete in an intense virtual football tournament to prove your esports strategy and gaming skills.',

  // Artificial Intelligence & Machine Learning
  'IDEA2PROTOTYPE': 'Transform innovative AI concepts into working functional prototypes.',
  'PROMPT2PIXEL': 'Generate creative visual art and designs using advanced AI prompt engineering.',
  'Web Redesign': 'Revamp and reimagine web interface designs with modern AI-driven UI/UX aesthetics.',
  'AI Short Film': 'Create compelling short stories and video narratives using AI generative tools.',
  'Human VS AI': 'Compete head-to-head in challenges comparing human logic against AI capabilities.',

  // Biomedical Engineering
  'InnoVision': 'Pitch futuristic biomedical devices and healthcare technological innovations.',
  'Idea Hub': 'Brainstorm and present practical engineering solutions for clinical and healthcare challenges.',
  'Technical Quiz': 'Test your foundational and advanced knowledge across biomedical engineering and biosciences.',
  'BIOSCOPE': 'A fun movie and media trivia challenge featuring medical cinema and pop culture history.',
  'Guess the organs': 'Identify anatomical structures, organ functions, and biological systems in a fast-paced quiz.',

  // Computer Science & Engineering
  'VibeCode Clash': 'An intense competitive programming battle testing algorithmic problem-solving speed and code efficiency.',
  'Circuit Breaker': 'Debugging and logic puzzle challenge to break down complex code bugs and fix algorithm flaws.',
  'Prompt War': 'Craft precise AI prompts to generate high-performing code, images, and creative tech assets under time limits.',
  'Apex Quiz Challenge': 'High-energy tech trivia and general knowledge quiz tournament.',
  'Memory Master': 'Put your short-term memory, pattern recognition, and focus to the ultimate test.',

  // Electronics & Communication Engineering
  'Tech talk (Paper Presentation)': 'Present technical research papers on emerging electronics, embedded systems, IoT, and wireless communication.',
  'Reverse Engineering Challenge': 'Deconstruct hardware systems and circuit modules to analyze, decode, and reconstruct their functionality.',
  'Circuit Crime Scene (Circuit Debugging)': 'Investigate faulty circuits, identify wiring bugs, and restore working electronic systems.',
  'IPL Auction': 'Strategic cricket auction simulation to build the ultimate team under mock budget constraints.',
  'Escape room': 'Solve electronic puzzles, decipher cryptic codes, and unlock your way out under time pressure.',

  // Information Technology
  'Cryptica': 'Crack secret codes, decrypt ciphers, and solve cybersecurity logic puzzles.',
  'Spin & Solve': 'Spin the mystery wheel and solve technical challenges across web, database, and software domains.',
  'Blind Build': 'Write bug-free code and web layouts with your monitor turned off or masked.',
  'AdRush': 'Fast-paced non-technical challenge testing spontaneous advertisement creation and marketing pitch skills.',
  'Guess the Logo': 'Test your brand recognition and visual memory across global tech brands and logos.',

  // Mechanical Engineering
  'Paper presentation': 'Present technical papers on modern mechanical design, robotics, thermal engineering, and manufacturing.',
  'CAD': 'Computer-aided design challenge testing 3D modeling speed, dimension accuracy, and drafting expertise.',
  'Tool finder': 'Identify industrial mechanical tools and engineering components against the clock.',
  'Quiz': 'Challenge your technical expertise across mechanical engineering principles and industrial systems.',
  'Photography': 'Capture compelling visual moments, perspectives, and mechanical themes across the campus.',
  'Creative ads': 'Design and act out imaginative marketing campaigns for funny or futuristic products.'
};

const eventSpecs: Record<string, Partial<EventItem>> = {
  // Agricultural Engineering
  'Farm Tech Presentation': {
    concept: 'A technology-focused PPT presentation where participants showcase innovative ideas, emerging technologies, research, or solutions related to agriculture and Agricultural Engineering. Participants will present their concepts and answer questions from the judging panel.',
    venue: 'Agri Classroom',
    time: '10:00 AM onwards',
    duration: '7 minutes (No. of Slides: 7)',
    teamSize: '1 to 4 members',
    format: 'Individual / Team participation (1 to 4 members)',
    stages: [
      { title: 'Stage 1 – Present', description: 'Present the selected agricultural technology or innovative concept using a PPT.' },
      { title: 'Stage 2 – Explain', description: 'Explain the working principle, applications, advantages, and practical feasibility of the proposed idea.' },
      { title: 'Stage 3 – Defend', description: 'Answer questions from the judges and demonstrate technical understanding.' }
    ],
    themes: [
      'Sustainable Agricultural Engineering',
      'Renewable Energy Sources for Agriculture',
      'Smart & Precision Agriculture',
      'Innovative Farm Mechanization',
      'Water Conservation & Efficient Irrigation',
      'Climate-Smart Agricultural Technologies',
      'Soil & Water Conservation Engineering',
      'Post-Harvest Technology & Food Processing',
      'Agricultural Waste Management & Value Addition',
      'Emerging Technologies in Agricultural Engineering'
    ],
    rules: [
      'Each team must consist of a minimum of 1 and a maximum of 4 members.',
      'The topics for the paper presentation can be selected from the themes listed above.',
      'Presentation time is limited to 5 minutes, followed by 2 minutes of Q&A.',
      'Plagiarized or copied content may lead to disqualification.',
      'Evaluation will be based on Technical Content, Innovation, Presentation, Practical Application, and Q&A.',
      'Judges decision will be final.'
    ]
  },
  'CAD Craft': {
    concept: 'A CAD-based design challenge where participants transform a given agricultural engineering model into an accurate digital design. The event tests participants CAD skills, design accuracy, creativity, and problem-solving ability.',
    venue: 'CAD Lab',
    time: '10:00 AM onwards',
    duration: '90 minutes',
    teamSize: '1 to 2 members',
    format: 'Individual / Team participation (1 to 2 members)',
    stages: [
      { title: 'Stage 1 – Observe', description: 'Participants will be provided with a basic model & image of an agricultural engineering component or structure on the spot.' },
      { title: 'Stage 2 – Design', description: 'Participants must accurately recreate the given model using the specified CAD software within the allotted time.' },
      { title: 'Stage 3 – Showcase', description: 'Participants submit their completed CAD design and briefly explain the design and its application.' }
    ],
    rules: [
      'Teams must consist of a minimum of 1 and a maximum of 2 members.',
      'The basic model/image will be provided only at the beginning of the event.',
      'Participants must create the CAD designs based on the given model/image.',
      'The design must be completed within the specified time limit.',
      'Previously prepared designs or models are not permitted.',
      'Evaluation will be based on Accuracy, Dimensioning, Design Quality, Time Management, and Presentation.',
      'Judges decision will be final.'
    ]
  },
  'Agri vista (Poster Presentation)': {
    concept: 'A technical poster presentation where participants showcase innovative ideas, research concepts, technologies, or practical solutions related to agriculture and Agricultural Engineering. Participants will visually present their selected topic through an informative poster and explain their concept to the judging panel.',
    venue: 'Agri Classroom',
    time: '10:00 AM onwards',
    duration: '7 minutes',
    teamSize: '1 to 4 members',
    format: 'Individual / Team participation (1 to 4 members)',
    stages: [
      { title: 'Stage 1 – Create', description: 'Prepare a technical poster based on a selected topic from the given themes.' },
      { title: 'Stage 2 – Present', description: 'Present the concept through the poster, highlighting the problem, proposed solution, methodology, applications, and significance.' },
      { title: 'Stage 3 – Defend', description: 'Answer questions from the judges and demonstrate technical understanding of the presented topic.' }
    ],
    themes: [
      'Future of Sustainable Farming',
      'Agricultural Engineering for Rural Development',
      'Innovations in Small-Scale Farming',
      'Mechanization for Small & Marginal Farmers',
      'Post-Harvest Loss Reduction',
      'Agri-Waste to Wealth',
      'Water-Efficient Agriculture',
      'Green Technologies for Agriculture',
      'Low-Cost Technologies for Farmers',
      'Engineering Solutions for Modern Agriculture'
    ],
    rules: [
      'Each team must consist of a minimum of 1 and a maximum of 4 members.',
      'The topics for the poster presentation can be selected from the themes listed above.',
      'The poster must be original, informative, and relevant to the selected theme.',
      'Participants must bring the poster in the specified size and format.',
      'Presentation time is limited to 5 minutes, followed by 2 minutes of Q&A.',
      'Plagiarized or copied content may lead to disqualification.',
      'Evaluation will be based on Technical Content, Creativity, Visual Presentation, Relevance, and Q&A.',
      'Judges decision will be final.'
    ]
  },
  'Clue Clash (Imposter)': {
    concept: 'A mystery-based team game where participants from different colleges are randomly grouped into mixed teams. Each team member receives an individual sheet containing either a common secret word or an Imposter indication. Participants must give suitable clues related to the secret word without directly revealing it. The team must carefully observe and analyse everyone\'s clues to identify the hidden Imposter. Points are awarded for correctly identifying the Imposter.',
    venue: 'Agri Classroom',
    time: '10:00 AM onwards',
    duration: '60 minutes',
    teamSize: '5 to 6 members',
    format: 'Mixed Team participation (5 to 6 members)',
    stages: [
      { title: 'Stage 1 – Mix', description: 'Participants from different colleges will be randomly divided into teams, ensuring that members from the same college are not grouped together.' },
      { title: 'Stage 2 – Reveal', description: 'Each team member will receive a separate sheet. Most members will receive the same secret word, while one member will receive an Imposter sheet without the secret word.' },
      { title: 'Stage 3 – Clue', description: 'Each participant must give a clue related to the secret word without directly mentioning the word or using obvious variations of it. The Imposter must carefully give a suitable clue without knowing the secret word.' },
      { title: 'Stage 4 – Identify', description: 'After listening to all the clues, team members will observe, discuss, and vote for the person they believe is the Imposter.' }
    ],
    rules: [
      'Each team will consist of 5–6 participants from different colleges.',
      'Each participant will receive only one sheet, which must not be shown to other participants.',
      'One participant in each team will receive the Imposter sheet.',
      'Participants must not directly reveal the secret word while giving clues.',
      'Participants must not show, exchange, or discuss the contents of their sheets with others.',
      'The Imposter must participate in the clue round without directly revealing their identity.',
      'Points will be awarded to participants/teams based on correct Imposter identification and successful deception by the Imposter.',
      'The team that achieves the highest score will be declared the winner.',
      'The organizers and judges decision will be final.'
    ]
  },
  'Agri Canvas': {
    concept: 'A creative on-the-spot poster-making competition where participants transform an agriculture-related theme into an attractive and meaningful visual artwork. The event encourages creativity, originality, imagination, and artistic expression while promoting awareness of agriculture and its importance.',
    venue: 'Agri Department Soil Lab',
    time: '10:00 AM onwards',
    duration: '90 minutes',
    teamSize: '1 to 2 members',
    format: 'Individual / Team participation (1 to 2 members)',
    stages: [
      { title: 'Stage 1 – Reveal', description: 'The theme for the poster will be announced by the organizers at the beginning of the event.' },
      { title: 'Stage 2 – Create', description: 'Participants must design and complete an original poster based on the given theme within the allotted time.' },
      { title: 'Stage 3 – Showcase', description: 'Participants will display their completed poster and briefly explain the idea or message conveyed through their artwork.' }
    ],
    rules: [
      'Participants can participate individually or in a team of maximum 2 members.',
      'The poster must be created entirely during the event.',
      'The theme will be announced on the spot.',
      'Participants must bring their own required stationery and art materials.',
      'Previously prepared posters, sketches, or artwork are not permitted.',
      'The artwork must be original and relevant to the given theme.',
      'Use of mobile phones or other electronic devices for designing the poster is not permitted.',
      'Evaluation will be based on Creativity, Theme Relevance, Originality, Visual Appeal, and Presentation.',
      'Judges decision will be final.'
    ]
  },

  // Electronics & Communication Engineering
  'Circuit Crime Scene (Circuit Debugging)': {
    concept: 'A fun hardware troubleshooting event where participants act as electronics detectives. Teams are given a breadboard circuit with a deliberate fault (loose wire, blown LED, wrong resistor, or reversed diode) along with simple clue cards. The goal is to spot the mistake, fix the connection, and get the circuit working.',
    venue: 'Electronics Lab',
    time: '10:00 AM onwards',
    duration: '45 minutes',
    teamSize: '2 to 4 members',
    format: 'Team participation (2 to 4 members)',
    stages: [
      { title: 'Stage 1: The Clue Sheet', description: 'Read the case file clues and perform a quick visual check on the breadboard setup.' },
      { title: 'Stage 2: Fault Finding', description: 'Use a basic digital multimeter to check continuity, resistor values, and supply voltage.' },
      { title: 'Stage 3: The Fix', description: 'Replace the wrong or damaged component with the correct one from the parts tray and power it on.' }
    ],
    rules: [
      'Teams must consist of 2 to 4 members.',
      'Only standard lab tools (multimeter, breadboards, jumper wires) provided by coordinators may be used.',
      'Points are awarded for identifying the exact fault and getting the output to work (e.g., LED glowing, buzzer beeping).',
      'Minor negative marks will apply for asking the volunteer for a hint.',
      'The fastest team to correctly fix the circuit will be declared the winner.'
    ]
  },
  'Tech talk (Paper Presentation)': {
    concept: 'A simple presentation event for students to share their ideas on modern technology and engineering trends. Participants present a set of slides in front of student and faculty coordinators followed by a short Q&A. The focus is on clear understanding, confidence, and neat slide delivery.',
    venue: 'Seminar Hall / Smart Classroom',
    time: '10:00 AM onwards',
    duration: '8 to 10 minutes per team',
    teamSize: '1 to 3 members',
    format: 'Team participation (1 to 3 members)',
    stages: [
      { title: 'Stage 1: Topic Submission', description: 'Quick registration and submission of the presentation topic and slide deck.' },
      { title: 'Stage 2: Slide Presentation', description: 'Teams deliver a 5 to 7 minute PowerPoint presentation covering their chosen topic.' },
      { title: 'Stage 3: Q&A Round', description: 'Answer 2 to 3 basic conceptual questions from the judges.' }
    ],
    rules: [
      'Teams can have 1 to 3 members.',
      'Presentations must strictly adhere to the 7-minute time limit; 2 to 3 minutes will be dedicated to Q&A.',
      'PPTs should be brought on a pen drive in .pptx or .pdf format.',
      'Scoring is based on content clarity (40%), presentation style/communication (40%), and Q&A answers (20%).',
      'The team with the highest combined judge score will be declared the winner.'
    ]
  },
  'Reverse Engineering Challenge': {
    concept: 'A hands-on event where teams are given a disassembled or opened electronic gadget (such as an old TV remote, toy car circuit, or basic sensor board). Participants must inspect the board, identify the basic parts they recognize, and figure out what the device does.',
    venue: 'Hardware Lab / Classroom',
    time: '10:00 AM onwards',
    duration: '45 minutes',
    teamSize: '2 to 3 members',
    format: 'Team participation (2 to 3 members)',
    stages: [
      { title: 'Stage 1: Component Spotting', description: 'Identify basic components on the PCB like resistors, capacitors, switches, LEDs, and ICs.' },
      { title: 'Stage 2: Tracing the Path', description: 'Trace the power lines and basic input/output connections across the board.' },
      { title: 'Stage 3: Function Guess', description: 'Write down a short 3-line explanation of what the device does and what each main part is for.' }
    ],
    rules: [
      'Teams must consist of 2 to 3 members.',
      'Mobile phones and external lookup tools are strictly not allowed during the identification round.',
      'Points are awarded for each correctly named component and an accurate guess of the gadget\'s purpose.',
      'No damaging, breaking, or pulling parts off the provided board.',
      'The team with the most accurate component list and explanation wins.'
    ]
  },
  'Escape room': {
    concept: 'A fun, mystery-themed room game where teams solve basic puzzle stations to "unlock" the next clue and escape the lab. The puzzles use simple concepts like matching resistor color codes, connecting paper switches, and solving riddles to find hidden lock codes.',
    venue: 'Department Classroom / Lab',
    time: '10:00 AM onwards',
    duration: '30 minutes',
    teamSize: '3 to 4 members',
    format: 'Team participation (3 to 4 members)',
    stages: [
      { title: 'Stage 1: The Color Lock', description: 'Calculate a 3-digit number from a resistor color code to unlock a box containing the next clue.' },
      { title: 'Stage 2: Logic Puzzle', description: 'Solve a simple logic-gate riddle (AND / OR / NOT) written on a chart to get a door hint.' },
      { title: 'Stage 3: Final Password', description: 'Connect two wires on a board to light an LED indicator and reveal the final exit passcode.' }
    ],
    rules: [
      'Teams must consist of 3 to 4 members.',
      'No phones or flashlights are allowed inside the room.',
      'Clues must not be torn, hidden, or broken; physical force is never required.',
      'Teams get up to 2 hints from the volunteer inside the room (each hint adds a 2-minute penalty).',
      'The team that escapes in the shortest total time wins.'
    ]
  },
  'IPL Auction': {
    concept: 'A mock cricket auction where participants manage a virtual budget to build their dream IPL playing 11. Teams bid in real time against other colleges for marquee, domestic, and international players while keeping an eye on their purse limit.',
    venue: 'Seminar Hall / Auditorium',
    time: '10:00 AM onwards',
    duration: '90 minutes',
    teamSize: '2 to 4 members',
    format: 'Team participation (2 to 4 members)',
    stages: [
      { title: 'Stage 1: Cricket Screening Quiz', description: 'A short 15-question written quiz on IPL trivia to qualify for the main bidding table.' },
      { title: 'Stage 2: The Live Auction', description: 'Bidding rounds on player cards with paddle raises using virtual points/crores.' },
      { title: 'Stage 3: Team Sheet Submission', description: 'Submit the final list of 11 players ensuring all team combination rules are satisfied.' }
    ],
    rules: [
      'Teams must consist of 2 to 4 members.',
      'Every squad must have exactly 11 players (including at least 1 wicketkeeper, 3-4 bowlers, 3-4 batsmen, and 1-2 allrounders; max 4 overseas players).',
      'Going over budget or failing to buy 11 players results in direct disqualification.',
      'Teams are evaluated based on total player rating points calculated from the official symposium ratings sheet.',
      'The team with the highest total rating points within budget wins.'
    ]
  }
};

const allEvents: EventItem[] = departments.flatMap((department) => [
  ...department.technicalEvents.map((name) => ({ name, department: department.name, category: 'Technical' as const })),
  ...department.nonTechnicalEvents.map((name) => ({ name, department: department.name, category: 'Non-Technical' as const }))
]).map((event) => {
  const spec = eventSpecs[event.name] ?? {};
  return {
    ...event,
    slug: event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    description: spec.concept ?? descriptions[event.name] ?? `${event.name} is part of the ${event.department} event track at VIYUGAM 2K26.`,
    venue: spec.venue ?? 'PPG Institute of Technology',
    time: spec.time ?? '10:00 AM onwards',
    teamSize: spec.teamSize ?? 'Individual or team',
    registrationStatus: 'Open' as const,
    duration: spec.duration,
    format: spec.format,
    concept: spec.concept,
    stages: spec.stages,
    rules: spec.rules,
    themes: spec.themes
  };
});

export const events = allEvents;
export const getEvent = (slug: string) => events.find((event) => event.slug === slug);
