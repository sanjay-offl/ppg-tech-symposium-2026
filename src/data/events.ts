import type { EventItem } from '@/types';
import { departments } from './departments';

const descriptions: Record<string, string> = {
  'Tech Harvest': 'A technical challenge built around ideas, innovation, and agricultural engineering.',
  'Greenovation': 'Present a practical, sustainable solution for a better future.',
  'HydroQuiz': 'Test your knowledge with a fast-paced technical quiz.',
  'Web-athon': 'Build, solve, and present a web experience under pressure.',
  'Code Sprint': 'Race against the clock through a focused programming challenge.',
  'Paper Presentation': 'Share a considered technical idea with a curious audience.'
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
