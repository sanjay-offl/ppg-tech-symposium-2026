export interface Department {
  name: string;
  slug: string;
  abbr: string;
  image: string;
  email: string;
  coordinators: string[];
  technicalEvents: string[];
  nonTechnicalEvents: string[];
}

export interface EventItem {
  name: string;
  slug: string;
  department: string;
  category: 'Technical' | 'Non-Technical';
  description: string;
  venue: string;
  time: string;
  teamSize: string;
  registrationStatus: 'Open' | 'Coming soon';
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
