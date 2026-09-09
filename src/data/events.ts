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

const allEvents: EventItem[] = departments.flatMap((department) => [
  ...department.technicalEvents.map((name) => ({ name, department: department.name, category: 'Technical' as const })),
  ...department.nonTechnicalEvents.map((name) => ({ name, department: department.name, category: 'Non-Technical' as const }))
]).map((event) => ({
  ...event,
  slug: event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  description: descriptions[event.name] ?? `${event.name} is part of the ${event.department} event track at VIYUGAM 2K26.`,
  venue: 'PPG Institute of Technology',
  time: '10:00 AM onwards',
  teamSize: 'Individual or team',
  registrationStatus: 'Open' as const
}));

export const events = allEvents;
export const getEvent = (slug: string) => events.find((event) => event.slug === slug);
