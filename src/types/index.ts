export interface Department {
  name: string;
  slug: string;
  abbr: string;
  image: string;
  email: string;
  coordinators: string[];
  technicalEvents: string[];
  nonTechnicalEvents: string[];
  registrationUrl?: string;
}

export interface EventStage {
  title: string;
  description: string;
}

export interface ScoringItem {
  label: string;
  points: string;
}

export interface EventItem {
  name: string;
  slug: string;
  department: string;
  departmentSlug: string;
  category: 'Technical' | 'Non-Technical';
  description: string;
  concept?: string;
  venue: string;
  time: string;
  duration?: string;
  teamSize: string;
  format?: string;
  registrationStatus: 'Open' | 'Coming soon';
  stages?: EventStage[];
  rules?: string[];
  scoring?: string[];
  scoringBreakdown?: ScoringItem[];
  themes?: string[];
  coordinators?: string[];
}

export interface RegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
  collegeName: string;
  department: string;
  yearOfStudy: string;
  selectedEvent: string;
  teamName?: string;
  additionalDetails?: string;
}

export interface PaymentPayload {
  participantName: string;
  email: string;
  selectedEvent: string;
  amount: number;
  transactionReference: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Registration & Fee' | 'Events & Rules' | 'Venue & Logistics' | 'Prizes & Certificates';
}

