import type { EventItem } from '@/types';

export const events: EventItem[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // D1. AI AND DATA SCIENCE DEPARTMENT (ai-ds)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    name: 'Technology Casino',
    slug: 'technology-casino',
    department: 'AI and Data Science',
    departmentSlug: 'ai-ds',
    category: 'Technical',
    format: 'Team (2 to 4 members)',
    duration: '30 to 45 minutes',
    venue: 'Seminar Hall / Classroom',
    time: '10:00 AM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A strategy-based technical game where participants make decisions using their knowledge of AI, Data Science, algorithms, technologies, and real-world scenarios. Teams receive virtual credits and must use them wisely to maximize their final score.',
    description: 'A strategy-based technical game where participants make decisions using their knowledge of AI, Data Science, algorithms, technologies, and real-world scenarios.',
    stages: [
      {
        title: 'Stage 1 — Tech Quiz',
        description: 'Answer short questions on AI, Data Science, algorithms, programming, and emerging technologies to earn initial virtual credits.'
      },
      {
        title: 'Stage 2 — Technology Bidding',
        description: 'Teams use their credits to bid on technology cards, scenarios, or algorithm choices. Each decision carries a different reward or risk.'
      },
      {
        title: 'Stage 3 — Final Investment',
        description: 'Teams use their remaining credits on a final technical scenario. The best combination of knowledge, strategy, and risk management wins.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 4 members.',
      'Each team receives the same starting amount of virtual credits.',
      'Only materials and information provided by coordinators may be used.',
      'Credits earned or lost during each stage affect the final score.',
      'The team with the highest final score wins.'
    ],
    scoring: [
      'Credits accumulated across Quiz, Bidding, and Final Investment rounds.',
      'Judges and coordinators verify final point tally; highest total score wins.'
    ]
  },
  {
    name: 'Code Breakers',
    slug: 'code-breakers',
    department: 'AI and Data Science',
    departmentSlug: 'ai-ds',
    category: 'Technical',
    format: 'Team (2 to 3 members)',
    duration: '45 minutes',
    venue: 'Computer Lab',
    time: '10:00 AM onwards',
    teamSize: '2 - 3 Members',
    registrationStatus: 'Open',
    concept: 'A reverse-coding challenge where participants are given sample inputs and corresponding outputs. Their task is to identify the hidden pattern or logic and write a program that reproduces the expected output.',
    description: 'A reverse-coding challenge where participants identify hidden patterns from sample inputs/outputs and code the logic to pass unseen tests.',
    stages: [
      {
        title: 'Stage 1 — Decode the Pattern',
        description: 'Study the given input-output examples and identify the rule or transformation used.'
      },
      {
        title: 'Stage 2 — Crack the Logic',
        description: 'Write and test a program that follows the discovered logic and produces the expected output.'
      },
      {
        title: 'Stage 3 — Hidden Test',
        description: 'The submitted program is tested with unseen inputs. Teams must make their solution general enough to handle them correctly.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 3 members.',
      'Programming language(s) permitted will be announced by coordinators.',
      'Internet, AI assistants, and external solution lookup are not allowed during the challenge.',
      'Solutions are evaluated based on correctness and completion time.',
      'The team with the highest number of correct test cases wins; time used as the tie-breaker.'
    ],
    scoring: [
      'Evaluated based on code correctness and test cases passed.',
      'Time taken is used as the primary tie-breaker.'
    ]
  },
  {
    name: 'Idea Presentation',
    slug: 'idea-presentation',
    department: 'AI and Data Science',
    departmentSlug: 'ai-ds',
    category: 'Technical',
    format: 'Individual or Team (1 to 3 members)',
    duration: '8 to 10 minutes per team',
    venue: 'Seminar Hall / Smart Classroom',
    time: '10:00 AM onwards',
    teamSize: '1 - 3 Members',
    registrationStatus: 'Open',
    concept: 'A presentation event where participants propose an innovative solution to a real-world problem using AI, Data Science, or related technologies. The focus is on originality, technical feasibility, clarity, and practical impact.',
    description: 'Propose an innovative solution to a real-world problem using AI, Data Science, or related technologies with clear impact.',
    stages: [
      {
        title: 'Stage 1 — Idea Submission',
        description: 'Submit the problem statement, proposed solution, and presentation topic before the scheduled event.'
      },
      {
        title: 'Stage 2 — Idea Presentation',
        description: 'Present the proposed solution clearly, covering the problem, methodology, technology used, and expected outcome.'
      },
      {
        title: 'Stage 3 — Q&A Round',
        description: 'Answer questions from the judges about technical feasibility, implementation, innovation, and impact.'
      }
    ],
    rules: [
      'Participants may present individually or in teams of up to 3 members.',
      'Presentation must follow the time limit announced by coordinators.',
      'The idea should have a clear problem statement and an AI or Data Science connection.',
      'PPTs must be submitted or brought in the format specified by coordinators.',
      'Scoring considers innovation, technical feasibility, presentation quality, and Q&A performance.',
      'The participant or team with the highest combined judge score wins.'
    ],
    scoring: [
      'Innovation & Originality: 30%',
      'Technical Feasibility: 30%',
      'Presentation Quality & Clarity: 25%',
      'Q&A Defense: 15%'
    ]
  },
  {
    name: 'Memory Lens',
    slug: 'memory-lens',
    department: 'AI and Data Science',
    departmentSlug: 'ai-ds',
    category: 'Non-Technical',
    format: 'Individual or Team (as decided by coordinators)',
    duration: '30 to 45 minutes',
    venue: 'Classroom / Seminar Hall',
    time: '11:30 AM onwards',
    teamSize: 'Individual / Team',
    registrationStatus: 'Open',
    concept: 'An observation and memory challenge in which participants study a collection of pictures and answer questions based on the details they observed. The event tests visual attention, recall, and concentration.',
    description: 'An observation and memory challenge testing visual attention, recall, and concentration through picture analysis.',
    stages: [
      {
        title: 'Round 1 — Observe and Remember',
        description: 'Display 10 pictures for a fixed observation time. Participants carefully study the people, objects, colours, positions, and other visible details.'
      },
      {
        title: 'Round 2 — Spot the Difference',
        description: 'Show pairs of similar pictures and ask participants to identify changes or missing details.'
      },
      {
        title: 'Round 3 — Memory Under Pressure',
        description: 'Display a larger set of pictures for a short time and ask challenging questions that require accurate recall and comparison.'
      }
    ],
    rules: [
      'Participants must observe pictures only during the time provided.',
      'No screenshots, photography, or external assistance permitted.',
      'Answers must be submitted within the time given for each round.',
      'Points are awarded for correct observations and accurate recall.',
      'In case of a tie, a sudden-death observation question may be conducted.',
      'The participant or team with the highest total score wins.'
    ],
    scoring: [
      'Points awarded for correct observations and accurate recall.',
      'Sudden-death observation round conducted in case of ties.'
    ]
  },
  {
    name: 'Stumble Guys',
    slug: 'stumble-guys',
    department: 'AI and Data Science',
    departmentSlug: 'ai-ds',
    category: 'Non-Technical',
    format: 'Team or Group (format announced by coordinators)',
    duration: '45 to 60 minutes',
    venue: 'Smart Classroom / Gaming Area',
    time: '01:30 PM onwards',
    teamSize: 'Individual / Group',
    registrationStatus: 'Open',
    concept: 'A fun mobile gaming competition based on obstacle-course challenges. Participants compete through multiple rounds of Stumble Guys, with points awarded according to qualification and final performance.',
    description: 'A fun mobile gaming competition based on chaotic obstacle-course races, knockouts, and survival rounds.',
    stages: [
      {
        title: 'Stage 1 — Qualifying Round',
        description: 'Participants compete in selected matches. Highest-performing players or teams qualify for the next stage.'
      },
      {
        title: 'Stage 2 — Challenge Round',
        description: 'Qualified participants compete through additional obstacle-course matches to earn ranking points.'
      },
      {
        title: 'Stage 3 — Final Round',
        description: 'Top participants compete in the final match. Highest final ranking determines the champion.'
      }
    ],
    rules: [
      'Participants must use their own registered game account or device as permitted by coordinators.',
      'Game version, room code, match format, and number of participants will be announced before the event.',
      'Any cheating, unfair external assistance, or intentional disruption results in disqualification.',
      'Participants must follow coordinator instructions regarding match start, joining, and reporting results.',
      'Points and rankings calculated according to the announced match format.',
      'The participant or team with the highest final score or ranking wins.'
    ],
    scoring: [
      'Stage survival and qualification rank determine progression.',
      'Final tournament match placements determine the champions.'
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // D2. INFORMATION TECHNOLOGY DEPARTMENT (it)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    name: 'AI: Spin and Solve',
    slug: 'ai-spin-and-solve',
    department: 'Information Technology',
    departmentSlug: 'it',
    category: 'Technical',
    format: 'Team (3 to 4 members)',
    duration: '120 minutes',
    venue: 'Computer Lab / Seminar Hall',
    time: '10:00 AM onwards',
    teamSize: '3 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A fast-paced technical team challenge where teams randomly receive a problem through a spin wheel, use AI responsibly, build a solution or prototype, and present it. Key principle: AI can build it. You must understand it.',
    description: 'Spin the mystery wheel to receive a problem, utilize AI tools responsibly to develop a prototype in 50 minutes, and present your solution.',
    stages: [
      {
        title: 'Stage 1 — Welcome & Team Formation',
        description: 'Introduction to the event (10 min) followed by team formation and the spin-wheel draw assigning each team’s random problem (10 min).'
      },
      {
        title: 'Stage 2 — Challenge & Development',
        description: 'Teams brainstorm and build their solution or prototype using AI tools responsibly within 50 minutes, followed by 5 minutes for final submission.'
      },
      {
        title: 'Stage 3 — Presentation & Judging',
        description: 'Teams present their approach, demo, and AI contribution (30 min), followed by judging (7 min) and closing results (3 min).'
      }
    ],
    rules: [
      'Teams must consist of 3 to 4 participants; one team per participant.',
      'Each team receives one randomly assigned challenge; no problem change after the spin.',
      'Development time is fixed at 50 minutes; submission deadline must be followed strictly.',
      'AI tools are allowed for research, ideation, coding, debugging, and improvement. Internet, documentation, and libraries are permitted.',
      'Participants must understand and explain their submitted solution and disclose the AI tools used.',
      'Complete pre-built projects and external human assistance are strictly prohibited.',
      'Copying or cheating may result in disqualification; judges’ decision is final.'
    ],
    scoringBreakdown: [
      { label: 'Understanding', points: '10 pts' },
      { label: 'Technical Solution', points: '25 pts' },
      { label: 'Functionality', points: '20 pts' },
      { label: 'Creativity and Innovation', points: '15 pts' },
      { label: 'AI Usage', points: '10 pts' },
      { label: 'Teamwork', points: '5 pts' },
      { label: 'Presentation and Demo', points: '10 pts' },
      { label: 'Q&A and Explanation', points: '5 pts' }
    ],
    scoring: [
      'Total 100 Points based on technical execution, functionality, presentation, and defense.'
    ],
    coordinators: ['Sathana — +91 88835 25201']
  },
  {
    name: 'TechQuest: The Blind Tech Labyrinth',
    slug: 'techquest-the-blind-tech-labyrinth',
    department: 'Information Technology',
    departmentSlug: 'it',
    category: 'Technical',
    format: 'Team (1 to 2 members)',
    duration: '45 minutes',
    venue: 'Computer Lab',
    time: '11:30 AM onwards',
    teamSize: '1 - 2 Members',
    registrationStatus: 'Open',
    concept: 'A high-stakes, time-based web labyrinth where intuition and technical prowess are the only ways out. Teams solve 4 technical challenges per page to earn alphanumeric characters and decode a 5th riddle to sequence their Key before running out of lives.',
    description: 'A time-based web labyrinth where teams solve technical challenges and sequence riddles to generate keys and escape with limited lives.',
    stages: [
      {
        title: 'Stage 1 — The Gateway',
        description: 'Solve 4 basic technical questions and 1 simple sequencing riddle to learn the mechanics and generate the first key.'
      },
      {
        title: 'Stage 2 — The Logic Catacombs',
        description: 'Face intermediate technical questions where the 5th sequencing riddle becomes trickier, demanding closer attention.'
      },
      {
        title: 'Stage 3 — The Vault',
        description: 'Solve the final, highly specific set of complex questions to unlock the winning page and claim the victory code.'
      }
    ],
    rules: [
      'Teams must consist of 1 to 2 members.',
      'Every room presents 4 technical challenges and a 5th sequence riddle used to forge the team’s Key.',
      'Teams are given a maximum number of lives (e.g., 5 total incorrect attempts) for the entire event.',
      'Entering an incorrect key displays an error and consumes one life; losing all lives results in direct disqualification.',
      'There are no progress bars; participants will not know who is in the lead.',
      'The first team to reach the final page with at least one life remaining wins.'
    ],
    scoring: [
      'Survive the labyrinth with remaining lives.',
      'First team to reach the final page wins.'
    ],
    coordinators: ['S.Rohith — +91 63813 72410']
  },
  {
    name: 'Blind Build',
    slug: 'blind-build',
    department: 'Information Technology',
    departmentSlug: 'it',
    category: 'Technical',
    format: 'Team (one Guide plus multiple Builders)',
    duration: 'To be announced',
    venue: 'Computer Lab',
    time: '01:30 PM onwards',
    teamSize: '3 - 4 Members',
    registrationStatus: 'Open',
    concept: 'See the Problem. Guide the Solution. A communication-driven build challenge where one team member, the Guide, holds the problem statement and must relay it accurately to the Builders, who develop the solution without ever seeing the brief.',
    description: 'A communication-driven coding challenge where a Guide relays requirements verbally to Builders who code without ever seeing the brief.',
    stages: [
      {
        title: 'Stage 1 — Team Formation',
        description: 'One participant from each team is assigned as the Guide, and the remaining participants act as Builders in separate designated areas.'
      },
      {
        title: 'Stage 2 — Problem Distribution',
        description: 'The Guide receives the complete problem brief. Builders work on designated laptops without seeing the statement, and the Guide cannot see the code.'
      },
      {
        title: 'Stage 3 — Communication',
        description: 'The Guide explains the requirements to the Builders verbally. Builders may ask questions, but the Guide cannot write or inspect code directly.'
      }
    ],
    rules: [
      'Each team must consist of one Guide and multiple Builders.',
      'The Guide is the only team member allowed to view the complete problem statement.',
      'Builders must never be shown the original problem statement directly.',
      'The Guide must not see the Builders’ screen, code, or project at any point.',
      'The only permitted connection between the Guide and Builders is verbal communication.',
      'The team must understand and develop the solution entirely through effective communication.'
    ],
    scoring: [
      'Accuracy of implemented solution against original hidden problem statement.',
      'Effective communication and teamwork score.'
    ],
    coordinators: ['S.Abishek — +91 85318 28481']
  },
  {
    name: 'Pro Evolution Soccer',
    slug: 'pro-evolution-soccer',
    department: 'Information Technology',
    departmentSlug: 'it',
    category: 'Non-Technical',
    format: 'Individual',
    duration: '60 to 120 minutes',
    venue: 'Gaming Zone / Classroom',
    time: '11:00 AM onwards',
    teamSize: 'Individual',
    registrationStatus: 'Open',
    concept: 'A competitive mobile football tournament where participants compete in eFootball Mobile using their own Dream Teams, testing football skills and tactics in a knockout format.',
    description: 'A knockout mobile football tournament where gamers clash in standard matches with their customized Dream Teams.',
    stages: [
      {
        title: 'Stage 1 — Registration & Check-in',
        description: 'Participants register and report promptly when called.'
      },
      {
        title: 'Stage 2 — Match Setup',
        description: 'Players connect via Friend Match and initiate a Standard Match.'
      },
      {
        title: 'Stage 3 — Tournament Matches',
        description: 'Knockout tournament bracket matches (6-minute duration).'
      },
      {
        title: 'Stage 4 — Final',
        description: 'Finalists compete in a high-intensity championship match.'
      }
    ],
    rules: [
      'Participants must bring their own fully charged Android or iOS device and charger.',
      'Players must use their own eFootball account; account sharing is prohibited.',
      'The latest official version of the game must be used.',
      'Players are responsible for their own internet connection.',
      'Match duration is 6 minutes for tournament matches.',
      'Players must report within 5 minutes of being called; otherwise a walkover is awarded.',
      'Winners must submit a final-score screenshot to the coordinators.',
      'The coordinator’s decision is final in all disputes.'
    ],
    scoring: [
      'Standard knockout bracket progression.',
      'Goals scored and match victory determine advancement.'
    ],
    coordinators: ['P.Deeksha — +91 75500 47887']
  },
  {
    name: 'AdRush',
    slug: 'adrush',
    department: 'Information Technology',
    departmentSlug: 'it',
    category: 'Non-Technical',
    format: 'Solo or Team (1 to 2 members)',
    duration: '30 minutes',
    venue: 'Department Classroom',
    time: '02:00 PM onwards',
    teamSize: '1 - 2 Members',
    registrationStatus: 'Open',
    concept: 'A fun, quick-thinking advertisement event where a random object is displayed on stage. Teams must come up with a creative advertisement for that object as if they are selling it to an audience, highlighting its features and why people should buy it.',
    description: 'Spontaneous pitch competition where participants get an unexpected object, 3 minutes prep, and 1 minute on stage to sell it.',
    stages: [
      {
        title: 'Stage 1 — The Reveal',
        description: 'Coordinators display a random object; participants get 2 minutes observation time without touching.'
      },
      {
        title: 'Stage 2 — Ad Prep',
        description: 'Participants prepare a short advertisement pitch within 3 minutes.'
      },
      {
        title: 'Stage 3 — The Pitch',
        description: 'Deliver the pitch on stage within a strict 1-minute time limit.'
      }
    ],
    rules: [
      'Participation can be solo or in teams of 2 members.',
      'The object must not be touched or handled during observation; only visual inspection is allowed.',
      'Limited AI use is permitted only for a short tagline or catch-line; full ad pitch must be original.',
      'Ads must be original and prepared on the spot. Pre-written or fully AI-generated ads lead to disqualification.',
      'Each participant or team gets a fresh object per round; highest score across rounds wins.'
    ],
    scoringBreakdown: [
      { label: 'Creativity', points: '40%' },
      { label: 'Humor / Persuasiveness', points: '30%' },
      { label: 'Presentation Confidence', points: '30%' }
    ],
    scoring: [
      'Total 100% based on Creativity, Persuasiveness, and Stage Confidence.'
    ],
    coordinators: ['Saranya — +91 80150 22457']
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // D3. MECHANICAL ENGINEERING DEPARTMENT (mechanical)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    name: 'CAD Designing',
    slug: 'cad-designing',
    department: 'Mechanical Engineering',
    departmentSlug: 'mechanical',
    category: 'Technical',
    format: 'Individual',
    duration: '30 minutes per batch',
    venue: 'CAD Lab',
    time: '10:00 AM onwards',
    teamSize: 'Individual',
    registrationStatus: 'Open',
    concept: 'Recreate a given mechanical draft accurately using SOLIDWORKS or CATIA, demonstrating CAD skills, design accuracy, and problem-solving ability.',
    description: 'Recreate complex mechanical drafts accurately into 3D parts and assemblies using SOLIDWORKS or CATIA within 30 minutes.',
    stages: [
      {
        title: 'Stage 1 — Analyse',
        description: 'Study the given mechanical draft, dimensions, constraints, and features.'
      },
      {
        title: 'Stage 2 — Model',
        description: 'Create the required 3D component with precise dimensional accuracy.'
      },
      {
        title: 'Stage 3 — Assemble',
        description: 'Complete the required assembly mates and submit the final model.'
      }
    ],
    rules: [
      'Individual participation only.',
      'SOLIDWORKS or CATIA only; no other software permitted.',
      'Draft will be provided at the start of each batch.',
      'Participants may bring their own laptop with permitted software.',
      'Both part and assembly are mandatory.',
      'Only work created during the event will be evaluated.',
      'Judging is based on completion, accuracy, time, and part and assembly quality.',
      'Highest overall score wins; judges’ decision is final.'
    ],
    scoring: [
      'Accuracy of dimensions and geometry: 40%',
      'Assembly mates and constraint precision: 30%',
      'Completion time: 20%',
      'Modeling technique and feature tree: 10%'
    ],
    coordinators: ['Joy Kiruban — +91 99523 47433']
  },
  {
    name: 'Mr. Mechanic',
    slug: 'mr-mechanic',
    department: 'Mechanical Engineering',
    departmentSlug: 'mechanical',
    category: 'Technical',
    format: 'Individual',
    duration: '5 minutes per batch',
    venue: 'Dynamics Lab',
    time: '10:30 AM onwards',
    teamSize: 'Individual',
    registrationStatus: 'Open',
    concept: 'An interactive tool-identification challenge testing participants’ knowledge of engineering tools, instruments, components, and workshop equipment through images, physical samples, and technical clues.',
    description: 'Rapid-fire tool identification challenge testing workshop and mechanical equipment expertise with physical specimens.',
    stages: [
      {
        title: 'Stage 1 — Identify',
        description: 'Identify the displayed engineering tool or measuring instrument.'
      },
      {
        title: 'Stage 2 — Know Your Tool',
        description: 'State its primary application, standard material, and working principle.'
      },
      {
        title: 'Stage 3 — Mechanic’s Challenge',
        description: 'Answer rapid-fire technical questions on tool specifications and workshop use.'
      }
    ],
    rules: [
      'One participant per team.',
      'Questions cover mechanical, manufacturing, automobile, electrical, and workshop tools.',
      'Questions may use physical samples, images, or technical clues.',
      'Answers must be given within the specified time.',
      'Mobile phones and electronic devices are prohibited.',
      'Points are awarded for correct answers.',
      'Highest total score wins; tie-breaker conducted if required.'
    ],
    scoring: [
      'Points awarded for correct name and functional description.',
      'Speed and accuracy in the rapid-fire round.'
    ],
    coordinators: ['Manish — +91 82482 99640']
  },
  {
    name: 'Reverse Engineering Sketch',
    slug: 'reverse-engineering-sketch',
    department: 'Mechanical Engineering',
    departmentSlug: 'mechanical',
    category: 'Technical',
    format: 'Team (2 to 4 members)',
    duration: '30 minutes per batch',
    venue: 'MFT Lab',
    time: '11:30 AM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'Participants study an unknown mechanical component and recreate it as an accurate 2D or 3D engineering sketch without a provided drawing or dimensions. The event tests observation, measurement, and drafting accuracy.',
    description: 'Measure and examine an unknown physical component and produce an accurate engineering sketch with standard orthographic views.',
    stages: [
      {
        title: 'Stage 1 — Observe & Measure (10 min)',
        description: 'Examine the component and take physical measurements using vernier calipers and gauges.'
      },
      {
        title: 'Stage 2 — Sketch & Dimension (15 min)',
        description: 'Create the required orthographic and sectional views with accurate dimensioning.'
      },
      {
        title: 'Stage 3 — Explain (5 min)',
        description: 'Explain the component’s name, manufacturing process, function, and application to judges.'
      }
    ],
    rules: [
      'Component will be provided without a drawing or dimensions.',
      'Participants must bring basic drawing instruments.',
      'Mobile phones, internet, reference books, and prepared drawings are prohibited.',
      'Required front, top, side, or sectional views must be included where necessary.',
      'Copying or outside assistance leads to disqualification.'
    ],
    scoringBreakdown: [
      { label: 'Dimensional Accuracy', points: '30 pts' },
      { label: 'Correct Views', points: '25 pts' },
      { label: 'Drawing Quality', points: '20 pts' },
      { label: 'Engineering Representation', points: '15 pts' },
      { label: 'Time Management', points: '10 pts' }
    ],
    scoring: [
      'Scoring out of 100 based on dimensional precision, orthographic correctness, and drafting neatness.'
    ],
    coordinators: ['Anbu Mathan — +91 63803 92123']
  },
  {
    name: 'Paper Presentation',
    slug: 'mechanical-paper-presentation',
    department: 'Mechanical Engineering',
    departmentSlug: 'mechanical',
    category: 'Technical',
    format: 'Solo or Team (maximum 4 members)',
    duration: '60 minutes',
    venue: 'College Campus',
    time: '01:30 PM onwards',
    teamSize: '1 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A platform for presenting innovative ideas, research, emerging technologies, and practical solutions while demonstrating technical knowledge, research ability, analytical thinking, and communication skills.',
    description: 'Present original research and engineering solutions in mechanical domains with 7 slides in 7 minutes followed by defense.',
    stages: [
      {
        title: 'Stage 1 — Research & Submit',
        description: 'Submit final PPT and 3-page paper write-up before the deadline.'
      },
      {
        title: 'Stage 2 — Present (7 minutes)',
        description: 'Deliver the presentation using a maximum of 7 slides.'
      },
      {
        title: 'Stage 3 — Defend (3 minutes)',
        description: 'Answer technical questions from the panel of judges.'
      }
    ],
    rules: [
      'Maximum 4 members per team.',
      'Final PPT plus 3-page paper write-up must be submitted before the deadline.',
      'Maximum 7 slides.',
      'Presentation: 7 minutes presentation plus 3 minutes Q&A.',
      'Content must be original; plagiarism leads to disqualification.'
    ],
    scoringBreakdown: [
      { label: 'Content and Innovation', points: '30 pts' },
      { label: 'Presentation Skills', points: '25 pts' },
      { label: 'Technical Knowledge and Q&A', points: '25 pts' },
      { label: 'Impact and Practicality', points: '20 pts' }
    ],
    scoring: [
      'Scored out of 100 based on innovation, technical clarity, presentation delivery, and defense.'
    ],
    coordinators: ['Harikrishnan — +91 86376 22861']
  },
  {
    name: 'Creative Ad',
    slug: 'creative-ad',
    department: 'Mechanical Engineering',
    departmentSlug: 'mechanical',
    category: 'Non-Technical',
    format: 'Team (2 to 3 members)',
    duration: '60 minutes',
    venue: 'College Campus',
    time: '02:00 PM onwards',
    teamSize: '2 - 3 Members',
    registrationStatus: 'Open',
    concept: 'Teams receive a product and create an entertaining advertisement using creativity, acting, comedy, storytelling, slogans, dialogues, props, or AI-assisted ideas.',
    description: 'Create and perform a witty marketing campaign for an assigned product using skits, jingles, comedy, and acting.',
    stages: [
      {
        title: 'Stage 1 — Product Reveal',
        description: 'Receive the assigned product and brainstorm its unique selling proposition.'
      },
      {
        title: 'Stage 2 — Create & Prepare',
        description: 'Script the storyline, dialogues, tagline, and comedic angles.'
      },
      {
        title: 'Stage 3 — Advertise',
        description: 'Perform the advertisement live on stage before the judges.'
      }
    ],
    rules: [
      'Product will be provided by the organizers.',
      'Limited preparation time will be given.',
      'Acting, comedy, storytelling, dialogues, slogans, and props are allowed.',
      'AI tools may be used for ideas, scripts, slogans, and voiceovers.',
      'Advertisement must be related to the given product and respectful.',
      'No assistance from other teams or outsiders.'
    ],
    scoring: [
      'Creativity and Product Promotion',
      'Entertainment value and Stage Presence',
      'Slogan / Tagline catchiness and Overall Impact'
    ],
    coordinators: ['Dharsan — +91 93447 21779']
  },
  {
    name: 'Emoji Decode',
    slug: 'emoji-decode',
    department: 'Mechanical Engineering',
    departmentSlug: 'mechanical',
    category: 'Non-Technical',
    format: 'Team (2 members)',
    duration: '60 minutes',
    venue: 'College Campus',
    time: '02:30 PM onwards',
    teamSize: '2 Members',
    registrationStatus: 'Open',
    concept: 'A fun musical guessing game where teams decode emoji combinations to identify popular Tamil songs. It tests music knowledge, observation, memory, creativity, and quick thinking.',
    description: 'Decode visual emoji sequences to guess iconic Tamil film tracks and chartbusters against a 20-second timer.',
    stages: [
      {
        title: 'Stage 1 — Decode the Hit',
        description: 'Identify popular tracks from initial emoji clues.'
      },
      {
        title: 'Stage 2 — Speed Decode',
        description: 'Answer rapid emoji clues within 20 seconds per track.'
      },
      {
        title: 'Stage 3 — Final Challenge',
        description: 'Solve complex emoji riddles covering classics, melodies, and trending hits.'
      }
    ],
    rules: [
      'Two participants per team.',
      'Report 10 minutes before the event.',
      'Songs will be from Tamil cinema and popular Tamil music.',
      'Only the given emoji clues may be used.',
      '20 seconds per question; only one final answer is allowed.',
      'Mobile phones and internet lookup are strictly prohibited.'
    ],
    scoring: [
      'Points for correct answers within the 20-second window.',
      'Fastest response time breaks ties in the final round.'
    ],
    coordinators: ['Darsanaa — +91 93639 10437']
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // D4. ELECTRONICS AND COMMUNICATION ENGINEERING (ece)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    name: 'Circuit Crime Scene',
    slug: 'circuit-crime-scene',
    department: 'Electronics and Communication Engineering',
    departmentSlug: 'ece',
    category: 'Technical',
    format: 'Team (2 to 4 members)',
    duration: '45 minutes',
    venue: 'Electronics Lab',
    time: '10:00 AM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A hardware troubleshooting event where participants act as electronics detectives. Teams are given a breadboard circuit with a deliberate fault — loose wire, blown LED, wrong resistor, or reversed diode — and must spot and fix it.',
    description: 'Hardware circuit troubleshooting event where teams debug flawed breadboard circuits using multimeters and clue cards.',
    stages: [
      {
        title: 'Stage 1 — The Clue Sheet',
        description: 'Read the case file clues and perform a quick visual inspection of the breadboard setup.'
      },
      {
        title: 'Stage 2 — Fault Finding',
        description: 'Use a digital multimeter to verify continuity, test resistor values, and inspect supply rails.'
      },
      {
        title: 'Stage 3 — The Fix',
        description: 'Replace faulty components from the parts tray and power on the functional circuit.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 4 members.',
      'Only standard lab tools (multimeter, breadboards, jumper wires) provided by coordinators may be used.',
      'Points are awarded for identifying the exact fault and getting the output to work (e.g., LED glowing, buzzer beeping).',
      'Minor negative marks apply for asking coordinators for a hint.',
      'The fastest team to correctly fix the circuit wins.'
    ],
    scoring: [
      'Accuracy in fault identification and working circuit restoration.',
      'Time taken and deduction for hint requests.'
    ]
  },
  {
    name: 'PPT and Paper Presentation',
    slug: 'ece-paper-presentation',
    department: 'Electronics and Communication Engineering',
    departmentSlug: 'ece',
    category: 'Technical',
    format: 'Team (1 to 3 members)',
    duration: '8 to 10 minutes per team',
    venue: 'Seminar Hall / Smart Classroom',
    time: '11:00 AM onwards',
    teamSize: '1 - 3 Members',
    registrationStatus: 'Open',
    concept: 'A presentation event for students to share ideas on modern technology and engineering trends in electronics, communication, IoT, and embedded systems, followed by Q&A.',
    description: 'Present technological advances in electronics, VLSI, embedded systems, and communication to a panel of expert evaluators.',
    stages: [
      {
        title: 'Stage 1 — Topic Submission',
        description: 'Quick registration and submission of the slide deck (.pptx or .pdf).'
      },
      {
        title: 'Stage 2 — Slide Presentation',
        description: 'Deliver a 5 to 7 minute PowerPoint presentation covering the chosen topic.'
      },
      {
        title: 'Stage 3 — Q&A Round',
        description: 'Answer 2 to 3 conceptual questions posed by the judging panel.'
      }
    ],
    rules: [
      'Teams can have 1 to 3 members.',
      'Presentations must strictly adhere to the 7-minute limit; 2 to 3 minutes for Q&A.',
      'PPTs must be brought on a pen drive in .pptx or .pdf format.'
    ],
    scoringBreakdown: [
      { label: 'Content Clarity', points: '40%' },
      { label: 'Presentation Style & Communication', points: '40%' },
      { label: 'Q&A Answers', points: '20%' }
    ],
    scoring: [
      'Evaluated out of 100% on conceptual depth, clarity, and defense.'
    ]
  },
  {
    name: 'Reverse Engineering',
    slug: 'ece-reverse-engineering',
    department: 'Electronics and Communication Engineering',
    departmentSlug: 'ece',
    category: 'Technical',
    format: 'Team (2 to 3 members)',
    duration: '45 minutes',
    venue: 'Hardware Lab / Classroom',
    time: '01:30 PM onwards',
    teamSize: '2 - 3 Members',
    registrationStatus: 'Open',
    concept: 'A hands-on event where teams inspect a disassembled electronic gadget (e.g., remote control, sensor board, toy car circuit), spot parts, trace power tracks, and deduce its purpose.',
    description: 'Inspect opened hardware gadgets, identify onboard electronic components, and explain their schematic functionality.',
    stages: [
      {
        title: 'Stage 1 — Component Spotting',
        description: 'Identify basic components on the PCB like resistors, capacitors, switches, LEDs, and ICs.'
      },
      {
        title: 'Stage 2 — Tracing the Path',
        description: 'Trace the power lines and basic input and output connections across the board.'
      },
      {
        title: 'Stage 3 — Function Guess',
        description: 'Write down a short 3-line explanation of what the device does and what each main part is for.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 3 members.',
      'Mobile phones and external lookup tools are strictly prohibited.',
      'Points are awarded for each correctly named component and an accurate guess of the gadget’s purpose.',
      'No damaging, breaking, or pulling parts off the provided board.'
    ],
    scoring: [
      'Points per verified component identified.',
      'Accuracy and depth of the functional block diagram explanation.'
    ]
  },
  {
    name: 'ECE Escape Room',
    slug: 'ece-escape-room',
    department: 'Electronics and Communication Engineering',
    departmentSlug: 'ece',
    category: 'Non-Technical',
    format: 'Team (3 to 4 members)',
    duration: '30 minutes',
    venue: 'Department Classroom / Lab',
    time: '11:30 AM onwards',
    teamSize: '3 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A mystery-themed room game where teams solve puzzle stations (matching resistor color codes, connecting paper switches, and solving riddles) to unlock the next clue and escape.',
    description: 'A thrilling mystery room game where teams crack electronic puzzles and logic locks to decipher the escape code.',
    stages: [
      {
        title: 'Stage 1 — The Color Lock',
        description: 'Calculate a 3-digit number from a resistor color code to unlock a box containing the next clue.'
      },
      {
        title: 'Stage 2 — Logic Puzzle',
        description: 'Solve a simple logic-gate riddle using AND, OR, and NOT gates written on a chart to get a door hint.'
      },
      {
        title: 'Stage 3 — Final Password',
        description: 'Connect two wires on a board to light an LED indicator and reveal the final exit passcode.'
      }
    ],
    rules: [
      'Teams must consist of 3 to 4 members.',
      'No phones or flashlights are allowed inside the room.',
      'Clues must not be torn or broken; physical force is never required.',
      'Teams get up to 2 hints. Each hint adds a 2-minute penalty to final time.'
    ],
    scoring: [
      'Ranked purely by elapsed escape time including any hint penalties.'
    ]
  },
  {
    name: 'IPL Auction',
    slug: 'ipl-auction',
    department: 'Electronics and Communication Engineering',
    departmentSlug: 'ece',
    category: 'Non-Technical',
    format: 'Team (2 to 4 members)',
    duration: '90 minutes',
    venue: 'Seminar Hall / Auditorium',
    time: '02:00 PM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A mock cricket auction where participants manage a virtual budget to build their dream IPL playing 11, bidding in real time against other colleges while satisfying squad constraints.',
    description: 'Bid with virtual crores in a live mock auction to assemble the highest-rated IPL playing 11 within salary purse limits.',
    stages: [
      {
        title: 'Stage 1 — Cricket Screening Quiz',
        description: 'A short 15-question written quiz on IPL trivia to qualify for the main bidding table.'
      },
      {
        title: 'Stage 2 — The Live Auction',
        description: 'Live bidding rounds on player cards with paddle raises using virtual points and crores.'
      },
      {
        title: 'Stage 3 — Team Sheet Submission',
        description: 'Submit the final list of 11 players ensuring all squad combination rules are satisfied.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 4 members.',
      'Every squad must have exactly 11 players including at least 1 wicketkeeper, 3 to 4 bowlers, 3 to 4 batsmen, and 1 to 2 all-rounders; maximum 4 overseas players.',
      'Going over budget or failing to buy 11 players results in direct disqualification.',
      'Teams are evaluated based on total player rating points calculated from the official symposium ratings sheet.'
    ],
    scoring: [
      'Total squad rating points evaluated against purse balance efficiency.'
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // D5. AGRICULTURAL ENGINEERING DEPARTMENT (agri)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    name: 'Farm Tech (Paper Presentation)',
    slug: 'farm-tech-presentation',
    department: 'Agricultural Engineering',
    departmentSlug: 'agri',
    category: 'Technical',
    format: 'Individual or Team (1 to 4 members)',
    duration: '7 minutes',
    venue: 'Agri Classroom',
    time: '10:00 AM onwards',
    teamSize: '1 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A technology-focused PPT presentation where participants showcase innovative ideas, emerging technologies, research, or solutions related to agriculture and Agricultural Engineering.',
    description: 'Present technological breakthroughs in smart farming, precision agriculture, and sustainable farm mechanization.',
    stages: [
      {
        title: 'Stage 1 — Present',
        description: 'Present the selected agricultural technology or innovative concept using a maximum of 7 slides.'
      },
      {
        title: 'Stage 2 — Explain',
        description: 'Explain working principles, applications, advantages, and practical feasibility.'
      },
      {
        title: 'Stage 3 — Defend',
        description: 'Answer questions from the panel of judges demonstrating technical depth.'
      }
    ],
    themes: [
      'Sustainable Agricultural Engineering',
      'Renewable Energy Sources for Agriculture',
      'Smart and Precision Agriculture',
      'Innovative Farm Mechanization',
      'Water Conservation and Efficient Irrigation',
      'Climate-Smart Agricultural Technologies',
      'Soil and Water Conservation Engineering',
      'Post-Harvest Technology and Food Processing',
      'Agricultural Waste Management and Value Addition',
      'Emerging Technologies in Agricultural Engineering'
    ],
    rules: [
      'Each team must consist of a minimum of 1 and a maximum of 4 members.',
      'Topics must be selected from the approved themes list.',
      'Presentation time is limited to 5 minutes, followed by 2 minutes of Q&A.',
      'Plagiarized or copied content leads to disqualification.',
      'Maximum 7 slides permitted in the presentation.'
    ],
    scoring: [
      'Technical Content and Relevance',
      'Innovation and Practical Application',
      'Presentation Style and Slide Quality',
      'Q&A Defense and Technical Depth'
    ]
  },
  {
    name: 'CRAFT (CAD)',
    slug: 'craft-cad',
    department: 'Agricultural Engineering',
    departmentSlug: 'agri',
    category: 'Technical',
    format: 'Individual or Team (1 to 2 members)',
    duration: '90 minutes',
    venue: 'CAD Lab',
    time: '11:00 AM onwards',
    teamSize: '1 - 2 Members',
    registrationStatus: 'Open',
    concept: 'A CAD-based design challenge where participants transform a given agricultural engineering model into an accurate digital design, testing precision drafting and modeling skills.',
    description: 'Transform physical agricultural machinery models into accurate 3D CAD digital blueprints within 90 minutes.',
    stages: [
      {
        title: 'Stage 1 — Observe',
        description: 'Participants receive a physical model or image of an agricultural component on the spot.'
      },
      {
        title: 'Stage 2 — Design',
        description: 'Recreate the model using specified CAD software within the allotted time.'
      },
      {
        title: 'Stage 3 — Showcase',
        description: 'Submit the completed CAD file and briefly explain the design constraints and assembly.'
      }
    ],
    rules: [
      'Teams must consist of a minimum of 1 and a maximum of 2 members.',
      'The basic model or image will be provided only at the beginning of the event.',
      'Designs must be completed within the 90-minute limit.',
      'Previously prepared models are not permitted.'
    ],
    scoring: [
      'Accuracy and Dimensional Quality',
      'Modeling Speed and Feature Tree Structure',
      'Design Presentation and Functional Viability'
    ]
  },
  {
    name: 'Agri Vista (Poster Presentation)',
    slug: 'agri-vista',
    department: 'Agricultural Engineering',
    departmentSlug: 'agri',
    category: 'Technical',
    format: 'Individual or Team (1 to 4 members)',
    duration: '7 minutes',
    venue: 'Agri Classroom',
    time: '11:30 AM onwards',
    teamSize: '1 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A technical poster presentation showcasing innovative ideas, research concepts, and practical solutions related to agriculture and Agricultural Engineering.',
    description: 'Visual technical poster exhibition highlighting grassroots agricultural engineering solutions and rural sustainability.',
    stages: [
      {
        title: 'Stage 1 — Create',
        description: 'Prepare a technical poster based on a selected topic from the approved themes.'
      },
      {
        title: 'Stage 2 — Present',
        description: 'Present the problem, methodology, and proposed practical solution through the poster.'
      },
      {
        title: 'Stage 3 — Defend',
        description: 'Answer questions from the judges regarding technical feasibility and real-world impact.'
      }
    ],
    themes: [
      'Future of Sustainable Farming',
      'Agricultural Engineering for Rural Development',
      'Innovations in Small-Scale Farming',
      'Mechanization for Small and Marginal Farmers',
      'Post-Harvest Loss Reduction',
      'Agri-Waste to Wealth',
      'Water-Efficient Agriculture',
      'Green Technologies for Agriculture',
      'Low-Cost Technologies for Farmers',
      'Engineering Solutions for Modern Agriculture'
    ],
    rules: [
      'Each team must consist of 1 to 4 members.',
      'The poster must be original, informative, and relevant to the selected theme.',
      'Bring the poster in standard printed format (A1/A2 size recommended).',
      'Presentation: 5 minutes presentation plus 2 minutes Q&A.'
    ],
    scoring: [
      'Technical Content and Clarity',
      'Visual Aesthetics and Layout Organization',
      'Innovation and Agricultural Relevance',
      'Q&A Response and Confidence'
    ]
  },
  {
    name: 'Clue Clash (Imposter)',
    slug: 'clue-clash-imposter',
    department: 'Agricultural Engineering',
    departmentSlug: 'agri',
    category: 'Non-Technical',
    format: 'Mixed Team (5 to 6 members from different colleges)',
    duration: '60 minutes',
    venue: 'Agri Classroom',
    time: '01:30 PM onwards',
    teamSize: '5 - 6 Members',
    registrationStatus: 'Open',
    concept: 'A mystery deduction game where participants from different colleges form mixed teams. Most members receive a common secret word, while one receives an Imposter sheet. Players provide clues and try to expose the Imposter.',
    description: 'Social deduction mystery game where teams exchange subtle verbal clues to unmask the hidden imposter among them.',
    stages: [
      {
        title: 'Stage 1 — Mix',
        description: 'Participants from different colleges are randomly grouped into diverse teams.'
      },
      {
        title: 'Stage 2 — Reveal',
        description: 'Sheets are handed out in secret: one member receives the Imposter card, others get the secret word.'
      },
      {
        title: 'Stage 3 — Clue',
        description: 'Each participant gives a single cryptic clue without directly naming the secret word.'
      },
      {
        title: 'Stage 4 — Identify',
        description: 'Team members cross-examine clues and vote on who they believe is the Imposter.'
      }
    ],
    rules: [
      'Each team consists of 5 to 6 participants from different colleges.',
      'Each participant receives only one sheet which must not be shown to others.',
      'One participant in each team is the secret Imposter.',
      'Participants must not directly reveal the secret word.',
      'Points are awarded for correct Imposter identification and successful Imposter bluffing.'
    ],
    scoring: [
      'Team points for correctly exposing the Imposter.',
      'Bonus points for Imposters who survive without detection.'
    ]
  },
  {
    name: 'Agri Canvas (Poster Making)',
    slug: 'agri-canvas',
    department: 'Agricultural Engineering',
    departmentSlug: 'agri',
    category: 'Non-Technical',
    format: 'Individual or Team (1 to 2 members)',
    duration: '90 minutes',
    venue: 'Agri Department Soil Lab',
    time: '02:00 PM onwards',
    teamSize: '1 - 2 Members',
    registrationStatus: 'Open',
    concept: 'A creative on-the-spot poster-making competition where participants transform an agriculture-related theme into an attractive visual artwork, promoting awareness of agriculture and its importance.',
    description: 'Live artistic canvas competition bringing rural and agricultural themes to life with color and imagination.',
    stages: [
      {
        title: 'Stage 1 — Reveal',
        description: 'The theme for the artwork is announced on the spot by organizers.'
      },
      {
        title: 'Stage 2 — Create',
        description: 'Participants draft and paint an original poster on chart/canvas within 90 minutes.'
      },
      {
        title: 'Stage 3 — Showcase',
        description: 'Display the finished artwork and explain the message behind the visual creation.'
      }
    ],
    rules: [
      'Participants may compete individually or in teams of up to 2 members.',
      'The artwork must be produced entirely during the event.',
      'The theme is announced on the spot.',
      'Participants must bring their own drawing and coloring supplies.',
      'Use of mobile phones or internet references while drawing is prohibited.'
    ],
    scoring: [
      'Creativity and Originality: 35%',
      'Relevance to the Announced Theme: 30%',
      'Visual Appeal and Technique: 20%',
      'Concept Explanation: 15%'
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // D6. COMPUTER SCIENCE AND ENGINEERING DEPARTMENT (cse)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    name: 'Vibe Coding',
    slug: 'vibe-coding',
    department: 'Computer Science & Engineering',
    departmentSlug: 'cse',
    category: 'Technical',
    format: 'Team participation (maximum 4 members)',
    teamSize: 'Max 4 Members',
    duration: '1 Hour',
    venue: 'To Be Announced',
    time: '10:00 AM onwards',
    prerequisites: 'No prior coding experience required',
    registrationStatus: 'Open',
    concept: 'A creative and beginner-friendly coding challenge where participants use AI-powered vibe coding tools to build a functional and visually appealing website based on a theme provided on the spot. The event is designed to be simple and accessible, so participants do not need advanced coding skills or prior experience with AI-powered development tools. Participants will be judged on creativity, functionality, design, and how effectively they use AI tools to transform their ideas into a working website.',
    description: 'A creative and beginner-friendly coding challenge where participants use AI-powered vibe coding tools to build a functional and visually appealing website based on a theme provided on the spot.',
    stages: [
      {
        title: 'Stage 1 — Ideate',
        description: 'The on-spot theme will be revealed, and teams will plan their website concept and approach.'
      },
      {
        title: 'Stage 2 — Vibe Code',
        description: 'Teams use AI-powered coding tools and prompts to develop and complete their website within the allotted 1-hour time limit.'
      }
    ],
    rules: [
      'Each team can have a maximum of 4 members.',
      'The theme/topic will be disclosed only at the start of the event; no prior preparation is allowed.',
      'Participants can use AI-powered coding tools and website development platforms permitted by the organizers.',
      'No advanced coding knowledge is required; participants can use AI tools to assist them throughout the development process.',
      'The website must be developed and completed within the 1-hour time limit.',
      'Internet access and permitted AI tools may be used as instructed by the organizers.'
    ],
    scoringBreakdown: [
      { label: 'Functionality', points: 'Judging Criteria' },
      { label: 'Creativity', points: 'Judging Criteria' },
      { label: 'UI/UX Design', points: 'Judging Criteria' },
      { label: 'Effective AI Usage', points: 'Judging Criteria' },
      { label: 'Overall Execution', points: 'Judging Criteria' }
    ],
    scoring: [
      'Judging will be based on Functionality, Creativity, UI/UX, Effective AI Usage, and Overall Execution.',
      'The team with the highest overall score will be declared the winner.'
    ],
    coordinators: ['Rishikanth — +91 93440 55430']
  },
  {
    name: 'Output Hunt',
    slug: 'output-hunt',
    department: 'Computer Science & Engineering',
    departmentSlug: 'cse',
    category: 'Technical',
    format: 'Team (Maximum 4 members)',
    teamSize: 'Max 4 Members',
    duration: 'To Be Announced on Spot',
    venue: 'CLASS ROOM NO:317',
    time: '01:30 PM onwards',
    coverage: 'C, C++, Python, HTML',
    registrationStatus: 'Open',
    concept: 'Output Hunt is a code-output prediction challenge that tests participants’ ability to read, understand, and trace code to identify the correct output. The questions will be based on basic C, C++, Python, and HTML, making the event accessible to participants with fundamental programming knowledge. Each question will have four answer options, and team members can discuss the question before selecting their final answer.',
    description: 'Code-output prediction challenge testing code tracing across C, C++, Python, and HTML in two progressive rounds.',
    stages: [
      {
        title: 'Stage 1 — Round 1 (Basic Output)',
        description: 'Participants will be given 20 questions based on C, C++, Python, and HTML. Each program/code snippet will contain a maximum of 10–15 lines. Four answer options will be provided for each question. Team members can discuss the question among themselves and select one final answer. The questions will be provided as printed A4 sheets or through an answer form provided by the organizers, where teams can mark/select their answers.'
      },
      {
        title: 'Stage 2 — Qualification',
        description: 'Teams with the highest scores in Round 1 will qualify for the next round.'
      },
      {
        title: 'Stage 3 — Round 2 (Advanced Output)',
        description: 'Qualified teams will be given 10 questions based on C, C++, Python, and HTML. The code snippets in this round will be slightly more complex and will contain approximately 30–35 lines. Each question will have four answer options. Team members can discuss each question and select one final answer. The answers will be marked on the provided answer sheet/form. The team that scores the highest marks in Round 2 will be declared the winner.'
      }
    ],
    rules: [
      'Each team can have a maximum of 4 members.',
      'The questions will be based on C, C++, Python, and HTML.',
      'Team members are allowed to discuss the questions among themselves before selecting an answer.',
      'Only one option can be selected for each question.',
      'Round 1 consists of 20 basic questions, with code snippets of a maximum of 10–15 lines.',
      'Round 2 consists of 10 advanced questions, with code snippets of approximately 30–35 lines.',
      'Each question will have 4 multiple-choice options.',
      'Questions will be provided through printed A4 sheets or an answer form supplied by the organizers.',
      'No mobile phones, internet searches, or external assistance are allowed.',
      'Teams with the highest scores in Round 1 will qualify for Round 2.',
      'The team with the highest score in Round 2 will be declared the winner.',
      'In case of a tie, a tie-breaker question will be conducted.'
    ],
    scoringBreakdown: [
      { label: 'Round 1 (Qualifying Round)', points: '20 Questions (4 Options)' },
      { label: 'Round 2 (Final Round)', points: '10 Questions (4 Options)' }
    ],
    scoring: [
      'Teams with the highest scores in Round 1 qualify for Round 2.',
      'The team with the highest score in Round 2 will be declared the winner.',
      'In case of a tie, a tie-breaker question will be conducted.'
    ],
    coordinators: ['Nithish S — +91 96007 17165']
  },
  {
    name: 'Prompt War',
    slug: 'prompt-war',
    department: 'Computer Science & Engineering',
    departmentSlug: 'cse',
    category: 'Technical',
    format: 'Individual Participation',
    teamSize: 'Individual',
    duration: '35 Minutes Total',
    venue: 'CP LAB II / CLASS ROOM NO:320',
    time: '11:30 AM onwards',
    recommendedTools: 'Ideogram, Adobe Firefly, Bing / Designer',
    registrationStatus: 'Open',
    concept: 'Prompt War is an image recreation challenge where participants describe a reference image using only words and use an AI image generator to recreate it as closely as possible. The event tests how well participants can observe, analyze, and communicate visual details through text alone. A surprise constraint is introduced for the second image, pushing everyone to think more creatively about how they build their prompts.',
    description: 'Image recreation challenge where participants describe reference images via text prompts using AI image generators under surprise constraints.',
    stages: [
      {
        title: 'Stage 1 — Image 1 Recreate',
        description: 'The first reference image is displayed on the projector. Participants have 3 minutes to observe it and recreate it using any permitted AI image tool. Prompts can be refined and images regenerated freely within the time window. All participant screens feed into a shared live display so the audience can watch attempts evolve in real time.'
      },
      {
        title: 'Stage 2 — Image 2 Recreate with Constraint',
        description: 'The second reference image is displayed. Before the timer begins, organizers announce a prompt constraint that applies to everyone, for example: describe it in only 10 words, or do not name any color. Participants have 15 minutes to recreate the image while following that restriction.'
      },
      {
        title: 'Stage 3 — Final Submission and Live Judging',
        description: 'Participants submit one final image per reference before the 35-minute window closes. The top five submissions for each image are placed side by side on the projector next to the original. Judges score them live and briefly explain each decision so participants and the audience understand what separated the top entries.'
      }
    ],
    rules: [
      'This is an individual event. No team participation allowed.',
      'Two reference images are provided, one at a time, each with a 15-minute window.',
      'Participants can use any AI image generation tool. Recommended free tools include Ideogram, Adobe Firefly, Microsoft Designer, and Bing Image Creator.',
      'Only text prompts are allowed. Direct image uploads or editing outside the AI tool are not permitted.',
      'The Stage 2 prompt constraint is mandatory for all participants without exception.',
      'One final image must be submitted per reference before the window closes. Late submissions are not accepted.'
    ],
    scoringBreakdown: [
      { label: 'Similarity to Reference', points: '30 pts / image (60 pts total)' },
      { label: 'Prompt Quality and Creativity', points: '30 pts / image (60 pts total)' },
      { label: 'Accuracy of Detail', points: '25 pts / image (50 pts total)' },
      { label: 'Composition', points: '15 pts / image (30 pts total)' }
    ],
    scoring: [
      'Per Image Score: 100 Points | Grand Total Evaluation Score: 200 Points.',
      'The participant with the highest grand total wins. If scores are tied, the participant with the higher Stage 2 score decides the winner.'
    ],
    coordinators: ['Gowsik — +91 90034 27793']
  },
  {
    name: 'Chess Arena',
    slug: 'chess-arena',
    department: 'Computer Science & Engineering',
    departmentSlug: 'cse',
    category: 'Non-Technical',
    format: 'Individual Participation',
    teamSize: 'Individual',
    duration: '10 Minutes per Match',
    venue: 'CLASS ROOM NO:317',
    time: '11:00 AM onwards',
    rounds: 'Prelims, Knockouts, Final',
    registrationStatus: 'Open',
    concept: 'Chess Arena is an individual chess tournament where participants go through preliminary rounds, knockout matches, and a final to determine the champion. Every match runs on a 10-minute time control so the pace stays sharp and every decision counts. The final match is projected live on screen with light commentary so the entire room can follow along.',
    description: 'Individual chess tournament featuring prelims, knockouts, and a live-projected final match under a 10-minute time control.',
    stages: [
      {
        title: 'Stage 1 — Preliminary Round',
        description: 'All registered participants compete in preliminary matches. Results are tracked on a bracket board visible to everyone in the venue. Top performers from this round move forward to the knockout stage.'
      },
      {
        title: 'Stage 2 — Knockout Rounds',
        description: 'Remaining participants compete in individual knockout matches. The bracket is updated after every match. A visible countdown timer runs on the projector so the room feels the pressure alongside the players.'
      },
      {
        title: 'Stage 3 — Final Match',
        description: 'The two finalists compete on a board projected live on screen through a camera feed or digital board. Light commentary from the MC keeps the audience engaged. The winner of the final match is declared Chess Arena Champion.'
      }
    ],
    rules: [
      'This is an individual event.',
      'Standard international chess rules apply throughout all rounds.',
      'Each match has a 10-minute time control. Players must manage their own time.',
      'Players must compete independently. Coaching or signals from spectators during a match are not permitted.',
      'Players must be at their board within 3 minutes of being called. Absence beyond that is a forfeit.',
      'In the event of a draw, the result is decided by the tiebreak format announced at the start of the event.'
    ],
    scoringBreakdown: [
      { label: 'Queen (Material Value)', points: '9 Points' },
      { label: 'Rook (Material Value)', points: '5 Points' },
      { label: 'Bishop (Material Value)', points: '3 Points' },
      { label: 'Knight (Material Value)', points: '3 Points' },
      { label: 'Pawn (Material Value)', points: '1 Point' }
    ],
    scoring: [
      'Standard Match Result: Win advances to next round; Loss is eliminated.',
      'Material Value on Clock Expiry (Timeout Resolution): Queen (9 pts), Rook (5 pts), Bishop (3 pts), Knight (3 pts), Pawn (1 pt).',
      'The participant who wins the Final Match is declared Chess Arena Champion.'
    ],
    coordinators: ['Dhavasi K — +91 76038 90043']
  },
  {
    name: 'Movie Mania',
    slug: 'movie-mania',
    department: 'Computer Science & Engineering',
    departmentSlug: 'cse',
    category: 'Non-Technical',
    format: 'Team (Maximum 4 members)',
    teamSize: 'Max 4 Members',
    duration: 'Approximately 50 Minutes',
    venue: 'CLASS ROOM NO:317/320',
    time: '02:00 PM onwards',
    rounds: 'Picture Clue, Frame by Frame, Reverse Riddle',
    registrationStatus: 'Open',
    concept: 'Movie Mania is a team quiz event built across three rounds of movie and song identification using picture clues, frame sequences, and reversed audio. Teams compete to score points across all three rounds and a steal mechanic keeps every question alive even after one team gets it wrong. It is built to be just as entertaining for the crowd watching as it is for the teams on the floor.',
    description: 'Team quiz event across picture clues, frame sequences, and reverse audio with high-stakes steal mechanics.',
    stages: [
      {
        title: 'Stage 1 — Round 1 (Picture Clue)',
        description: 'A picture or visual clue is displayed on the projector. Teams identify the movie it represents. Each question comes with a fixed time window for teams to discuss and submit their final answer. This round has 8 questions.'
      },
      {
        title: 'Stage 2 — Round 2 (Frame by Frame)',
        description: 'A sequence of images from a song is shown on the projector. Teams identify the song from the visual frames. Images are revealed progressively, giving more detail as the countdown runs. This round has 6 questions.'
      },
      {
        title: 'Stage 3 — Round 3 (Reverse Riddle)',
        description: 'A song is played in reverse through speakers. Teams identify the original song. This round runs as a buzzer format where the first team to signal gets to answer. This round has 5 songs.'
      }
    ],
    rules: [
      'Each team can have a maximum of 4 members.',
      'Team members can discuss before answering in Rounds 1 and 2. In Round 3, the first team to buzz in must answer within 10 seconds.',
      'A steal rule applies across all three rounds. If a team answers incorrectly or does not answer within the time limit, any other team can immediately raise their hand to steal.',
      'No mobile phones, internet, or outside assistance is allowed during the event.',
      'A live scoreboard visible to all teams is updated after every single question.'
    ],
    scoringBreakdown: [
      { label: 'Round 1 (Picture Clue - 8 Qs)', points: '80 Points max (10 pts/Q)' },
      { label: 'Round 2 (Frame by Frame - 6 Qs)', points: '60 Points max (10 pts/Q)' },
      { label: 'Round 3 (Reverse Riddle - 5 Qs)', points: '50 Points max (10 pts/Q)' },
      { label: 'Correct Steal Answer', points: '15 Points (1.5x standard)' },
      { label: 'Wrong Steal Answer', points: '0 Points (question closed)' }
    ],
    scoring: [
      'Maximum Total: 19 Questions (190 Points max).',
      'The team with the highest total score across all three rounds wins. If scores are tied, a reserve tiebreaker question is given (5 reserve questions ready per round).'
    ],
    coordinators: ['Dhanu Shree — +91 98428 15860']
  },
  {
    name: 'InnoVision',
    slug: 'innovision',
    department: 'Biomedical Engineering',
    departmentSlug: 'bme',
    category: 'Technical',
    format: 'Team of 2 to 4',
    duration: '7 minutes per team (5 minutes discussion & 2 minutes Q&A)',
    venue: 'Department of Biomedical Engineering',
    time: '10:00 AM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A technical paper presentation competition where participants showcase knowledge, research, and innovative biomedical solutions.',
    description: 'A technical paper presentation competition where participants showcase knowledge, research, and innovative biomedical solutions.',
    stages: [
      { title: 'Stage 1 — Paper Presentation', description: 'Present a biomedical/healthcare topic. Judged on technical knowledge, innovation, relevance, and clarity.' },
      { title: 'Stage 2 — Technical Q&A', description: 'Judges ask questions on the paper, methodology, applications, and limitations.' }
    ],
    rules: [
      'Teams consist of 2 to 4 members.',
      'Present an original technical paper within the given time.',
      'No external assistance or plagiarism; violations may lead to disqualification.',
      'Scoring based on technical content, innovation, presentation, Q&A, and applicability.'
    ]
  },
  {
    name: 'Idea Hub',
    slug: 'idea-hub',
    department: 'Biomedical Engineering',
    departmentSlug: 'bme',
    category: 'Technical',
    format: 'Team of 2 to 4',
    duration: '7 minutes (5 minutes discussion & 2 minutes Q&A)',
    venue: 'Department of Biomedical Engineering',
    time: '11:00 AM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'An innovation-driven competition where teams present technology-based solutions to real-world healthcare and engineering challenges.',
    description: 'An innovation-driven competition where teams present technology-based solutions to real-world healthcare and engineering challenges.',
    stages: [
      { title: 'Stage 1 — Spot Theme', description: 'Teams receive a problem statement/topic on the spot and get a limited time to understand the problem, brainstorm, and develop an innovative solution.' },
      { title: 'Stage 2 — Innovation Pitch', description: 'Teams present their solution through a short pitch, highlighting innovation, concept, feasibility, system design, and real-world applications.' },
      { title: 'Stage 3 — Judge’s Q&A', description: 'Teams answer questions from the judges to demonstrate their technical knowledge, problem-solving approach, feasibility, and practical impact.' }
    ],
    rules: [
      'Teams must have 2–4 members with valid student IDs.',
      'The problem statement/theme will be given on the spot; teams must develop their solution within the allotted time.',
      'Ideas must be original and relevant to the given problem. Plagiarism or copied solutions will lead to disqualification.',
      'Scoring based on Problem Understanding, Innovation, Technical Feasibility, Impact & Applicability, Presentation & Q&A.'
    ]
  },
  {
    name: 'Mind Rush',
    slug: 'mind-rush',
    department: 'Biomedical Engineering',
    departmentSlug: 'bme',
    category: 'Technical',
    format: 'Team of 2 to 4',
    duration: 'Round 1: 15 minutes | Round 2: 15 minutes | Round 3: 30 minutes',
    venue: 'Department of Biomedical Engineering',
    time: '01:30 PM onwards',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'A fast-paced technical competition testing participants’ biomedical knowledge, speed, and problem-solving skills.',
    description: 'A fast-paced technical competition testing participants’ biomedical knowledge, speed, and problem-solving skills.',
    stages: [
      { title: 'Stage 1 — Med IQ', description: 'Identify devices, sensors, signals/waveforms, medical images, and answer MCQs.' },
      { title: 'Stage 2 — Pulse Rush', description: 'Answer rapid-fire technical questions against the clock.' },
      { title: 'Stage 3 — Case Breaker', description: 'Analyze a real-world biomedical case, identify the problem, and propose a solution.' }
    ],
    rules: [
      'Each team consists of 2 to 4 participants.',
      'Three rounds with increasing difficulty.',
      'No external assistance or communication; violations may lead to disqualification.',
      'Scores from all rounds are combined.'
    ]
  },
  {
    name: 'Bio Connect',
    slug: 'bio-connect',
    department: 'Biomedical Engineering',
    departmentSlug: 'bme',
    category: 'Non-Technical',
    format: 'Team participation (1 to 4 members)',
    duration: '90 minutes',
    venue: 'College Campus',
    time: '11:30 AM onwards',
    teamSize: '1 - 4 Members',
    registrationStatus: 'Open',
    concept: 'Bio Connect is a fun biomedical-themed team event that tests creativity, observation, knowledge, and quick thinking through three exciting challenges.',
    description: 'Bio Connect is a fun biomedical-themed team event that tests creativity, observation, knowledge, and quick thinking through three exciting challenges.',
    stages: [
      { title: 'Stage 1 — Med Sketch', description: 'Identify biomedical terms, organs, instruments, or concepts from sketches.' },
      { title: 'Stage 2 — Bio Connect', description: 'Connect the given biological and biomedical clues to find the correct answer.' },
      { title: 'Stage 3 — Hear and Heal', description: 'Listen to music and identify the related medical concept.' }
    ],
    rules: [
      'Teams must have 1 to 4 members.',
      'Each stage must be completed within the given time.',
      'Mobile phones and external assistance are not allowed.',
      'Teams must give one final answer for each challenge.',
      'Points are awarded for correct answers in each stage.',
      'In case of a tie, a tie-breaker may be conducted.',
      'The team with the highest total score will be declared the winner.'
    ]
  },
  {
    name: 'Organ Hunt',
    slug: 'organ-hunt',
    department: 'Biomedical Engineering',
    departmentSlug: 'bme',
    category: 'Non-Technical',
    format: 'Team participation (1 to 4 members)',
    duration: '60 minutes',
    venue: 'To be announced',
    time: '02:30 PM onwards',
    teamSize: '1 - 4 Members',
    registrationStatus: 'Open',
    concept: 'Organ Hunt is a fun medical-themed team event that tests participants\' observation, memory, and quick-thinking skills through three exciting rounds.',
    description: 'Organ Hunt is a fun medical-themed team event that tests participants\' observation, memory, and quick-thinking skills through three exciting rounds.',
    stages: [
      { title: 'Stage 1 — Mystery Detective (20 mins)', description: 'Identify the organ using visual clues and mystery images within the given time.' },
      { title: 'Stage 2 — Memory Challenge (20 mins)', description: 'Observe organ images for a limited time and identify them from memory after they disappear.' },
      { title: 'Stage 3 — Wrong Answer Only (20 mins)', description: 'Answer organ-related questions with a valid wrong answer. Correct answers are not allowed.' }
    ],
    rules: [
      'Each team must have 1 to 4 members.',
      'Teams must follow the time limit and instructions for each stage.',
      'Points are awarded for correct answers in Stages 1 and 2.',
      'In Stage 3, only valid wrong answers receive points.',
      'Mobile phones, internet access, and external assistance are not allowed.',
      'Teams must give one final answer for each question.',
      'The team with the highest cumulative score will be declared the winner.'
    ]
  },
  {
    name: 'IDEA2PROTOTYPE',
    slug: 'idea2prototype',
    department: 'Computer Science and Engineering (AI&ML)',
    departmentSlug: 'ai-ml',
    category: 'Technical',
    format: 'Individual / Team (2 to 4 members)',
    duration: '11:00 AM to 12:30 PM',
    venue: 'A207',
    time: '11:00 AM to 12:30 PM',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'Develop a solution for the given on-spot problem statement using your own innovative ideas, technologies and AI tools within the given duration. The prototype should demonstrate core functionality.',
    description: 'An on-spot innovation challenge where participants analyse a problem, design a solution, and develop a working prototype using software and AI technologies.',
    stages: [
      {
        title: 'Stage 1 — On-Spot Problem Statement Selection',
        description: 'Based on the given themes, participants will be provided with problem statements on the spot to analyse requirements, target users, and problem context.'
      },
      {
        title: 'Stage 2 — Develop Prototype Model',
        description: 'Develop an innovative solution and create a working prototype/model within the given time using permitted software and AI technologies.'
      },
      {
        title: 'Stage 3 — Presentation',
        description: 'Present the idea and demonstrate the working prototype to judges, explaining the problem, solution, tech stack, and real-world applications.'
      }
    ],
    rules: [
      'Participants can participate individually or as a team (maximum 4 members).',
      'Problem statements will be provided on the spot by organizers; choose only one.',
      'Pre-made complete projects or previously developed solutions are strictly prohibited.',
      'Plagiarism, direct copying of existing projects, and copyright infringement are strictly prohibited.',
      'Participants must be able to explain and demonstrate the working of their prototype.',
      'Participants must submit/show their working prototype within the given time limit.',
      'Participants must bring their own laptop, charger, and required accessories.'
    ],
    coordinators: [
      'KEERTHANA SRI R G — +91 9789706728',
      'ADHITH S — +91 7397617357'
    ]
  },
  {
    name: 'WEB REDESIGN',
    slug: 'web-redesign',
    department: 'Computer Science and Engineering (AI&ML)',
    departmentSlug: 'ai-ml',
    category: 'Technical',
    format: 'Individual / Team (2 to 4 members)',
    duration: '2:00 PM to 3:00 PM',
    venue: 'A207',
    time: '2:00 PM to 3:00 PM',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'WEB REDESIGN is a web development and UI/UX challenge where participants receive a sample website and recreate it accurately with clean, responsive design.',
    description: 'Recreate a reference website layout, design, content structure, navigation, and functionality using permitted web technologies and tools.',
    stages: [
      {
        title: 'Stage 1 — Analyse',
        description: 'Examine the reference website provided by organizers to understand page structure, layout, navigation, UI elements, and styling.'
      },
      {
        title: 'Stage 2 — Redesign',
        description: 'Recreate and implement the reference website maintaining core design and functionality while ensuring a clean and responsive interface.'
      },
      {
        title: 'Stage 3 — Presentation',
        description: 'Demonstrate completed website and explain implementation, design choices, responsiveness, and improvements made during the challenge.'
      }
    ],
    rules: [
      'Core purpose and functionality of the provided sample website must be maintained.',
      'Website must be created during the event from sample websites provided by organizers.',
      'Previously developed websites or templates cannot be submitted as final work.',
      'Participants may use HTML, CSS, JavaScript, frameworks, and tools (VS Code, Android Studio, etc.).',
      'Participants must bring their own laptop, charger, and required accessories.'
    ],
    coordinators: [
      'ARVIND M — +91 8148954829',
      'PONSEELAN P — +91 6381098458'
    ]
  },
  {
    name: 'PROMPT2PIXEL',
    slug: 'prompt2pixel',
    department: 'Computer Science and Engineering (AI&ML)',
    departmentSlug: 'ai-ml',
    category: 'Technical',
    format: 'Individual / Team (2 to 4 members)',
    duration: '3:00 PM to 4:00 PM',
    venue: 'A207',
    time: '3:00 PM to 4:00 PM',
    teamSize: '2 - 4 Members',
    registrationStatus: 'Open',
    concept: 'PROMPT2PIXEL is a prompting-based challenge where participants recreate a given reference image using AI image-generation tools.',
    description: 'Carefully observe a reference image and engineer text prompts to generate an image that closely matches composition, objects, lighting, and style.',
    stages: [
      {
        title: 'Stage 1 — Observe',
        description: 'Analyse reference image objects, composition, colours, environment, lighting, and visual style.'
      },
      {
        title: 'Stage 2 — Prompt',
        description: 'Create and refine text prompts using permitted AI image-generation tools.'
      },
      {
        title: 'Stage 3 — Recreate',
        description: 'Submit best generated image alongside the final prompt for similarity evaluation against the reference.'
      }
    ],
    rules: [
      'Participants can participate individually or as a team of up to 4 members.',
      'Participants cannot directly upload reference image into an image-to-image or copying tool.',
      'Only permitted AI image-generation tools may be used.',
      'Participants must submit their final prompt along with their generated image.',
      'Only the final submitted image will be considered for evaluation.',
      'Participants must bring their own laptop, charger, and required accessories.'
    ],
    coordinators: [
      'SWETHA S — +91 9025597773',
      'SREE GIRIJA S — +91 6379282382'
    ]
  },
  {
    name: 'AI Shortfilm',
    slug: 'ai-shortfilm',
    department: 'Computer Science and Engineering (AI&ML)',
    departmentSlug: 'ai-ml',
    category: 'Non-Technical',
    format: 'Team (2 members)',
    duration: '2:00 PM - 3:00 PM (Batch 1) / 3:00 PM - 4:00 PM (Batch 2)',
    venue: 'A209',
    time: '2:00 PM to 4:00 PM',
    teamSize: '2 Members',
    registrationStatus: 'Open',
    concept: 'Prepare a realistic short film based on an on-spot theme using generative AI tools within 1 hour.',
    description: 'Create a 3 to 5-minute professional AI short film on an on-spot theme using generative AI video, script, and voice tools.',
    stages: [
      {
        title: 'Stage 1 — AI Shortfilm Creation',
        description: 'Create AI short film on given on-spot theme using AI tools and submit to the designated drive within 1 hour.'
      }
    ],
    rules: [
      'Teams must contain exactly 2 members.',
      'Only AI-generated content permitted; pre-made footage or stock images are not allowed.',
      'Plagiarism and copyright-infringing tools (celebrity voice clones, etc.) are strictly restricted.',
      'Short film duration must be between 3 and 5 minutes.',
      'Must finish within given 1-hour duration and submit to designated drive.',
      'Evaluated on creativity, realistic visual quality, storytelling, and unique concept.',
      'Participants must bring their own laptop, charger, and required accessories.'
    ],
    coordinators: [
      'SARAVANA S — +91 9843871061',
      'SIKKANTHAR AJISH A — +91 7010790244'
    ]
  },
  {
    name: 'MemeRush',
    slug: 'memerush',
    department: 'Computer Science and Engineering (AI&ML)',
    departmentSlug: 'ai-ml',
    category: 'Non-Technical',
    format: 'Individual / Team (2 members)',
    duration: '11:00 AM - 12:00 PM (Batch 1) / 3:00 PM - 4:00 PM (Batch 2)',
    venue: 'A222',
    time: '11:00 AM to 4:00 PM',
    teamSize: '1 - 2 Members',
    registrationStatus: 'Open',
    concept: 'A fun visual connection game where participants identify hidden song, movie, or celebrity clues from projector images.',
    description: 'Analyse 3 to 5 visual clues displayed on screen, connect hidden patterns, and identify the correct song, movie, or celebrity name.',
    stages: [
      {
        title: 'Stage 1 — Visual Clues',
        description: '3 to 5 visual clue images displayed on projector screen.'
      },
      {
        title: 'Stage 2 — Connect the Images',
        description: 'Analyse images and identify hidden common connection.'
      },
      {
        title: 'Stage 3 — Find the Answer',
        description: 'Submit related Song, Movie, or Celebrity Name.'
      }
    ],
    rules: [
      'Individual or team participation (maximum 2 members).',
      'Each question contains 3 to 5 visual clues.',
      'Teams must connect all images to identify the correct answer.',
      'Faster correct answers receive bonus points.',
      'Participants must bring their own laptop, charger, and required accessories.'
    ],
    coordinators: [
      'AATHIL TAABIR A — +91 8610638901',
      'GURU PRASATH S — +91 6369513251'
    ]
  }
];

export function getEvent(slug: string): EventItem | undefined {
  return events.find((event) => event.slug === slug);
}

export function getEventsByDepartment(departmentSlug: string): EventItem[] {
  const normalized = departmentSlug.toLowerCase();
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
  return events.filter((e) => e.departmentSlug === targetSlug);
}
