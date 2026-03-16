export interface LaunchTierPricing {
  regular: number;
  launch: number;
  savings: number;
}

export interface Product {
  slug: string;
  name: string;
  codename: string;
  color: string;
  colorRgb: string;
  description: string;
  hook: string;
  industry: string;
  businessType: string;
  painPoint: string;
  outcomes: string[];
  competitor: string;
  competitorPrice: string;
  pricing: {
    foundation: number;
    structure: number;
    architect: number;
  };
  launchPricing: {
    foundation: LaunchTierPricing;
    structure: LaunchTierPricing;
    architect: LaunchTierPricing;
  };
  launchSpotsTotal: number;
  launchSpotsLeft: number;
  blocks: {
    name: string;
    description: string;
    icon: string;
    tier: "foundation" | "structure" | "architect";
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const products: Product[] = [
  {
    slug: "djbook",
    name: "DJBook",
    codename: "The Midnight",
    color: "#8b5cf6",
    colorRgb: "139, 92, 246",
    description: "The complete business operating system for DJs who want to stop hustling and start building.",
    hook: "Stop spinning plates. Start spinning records.",
    industry: "DJ",
    businessType: "DJ Business",
    painPoint: "You're running your DJ business from a notebook and texts. Gigs fall through. Clients ghost. You forget to follow up. Your rates are all over the place.",
    outcomes: [
      "Book more gigs with a professional client portal",
      "Never double-book with smart calendar management",
      "Get paid faster with automated invoicing",
      "Build your brand with a custom booking site",
    ],
    competitor: "StyleSeat + Honeybook combo",
    competitorPrice: "$780",
    pricing: { foundation: 197, structure: 397, architect: 997 },
    launchPricing: {
      foundation: { regular: 197, launch: 97, savings: 100 },
      structure: { regular: 397, launch: 197, savings: 200 },
      architect: { regular: 997, launch: 497, savings: 500 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Gig Booking Engine", description: "Clients book you directly. No more back-and-forth texts.", icon: "calendar", tier: "foundation" },
      { name: "Client Portal", description: "Every client sees their events, contracts, and invoices in one place.", icon: "users", tier: "foundation" },
      { name: "Rate Calculator", description: "Smart pricing based on event type, duration, travel, and equipment.", icon: "calculator", tier: "foundation" },
      { name: "Invoice & Payments", description: "Send invoices, collect deposits, track who owes you.", icon: "dollar", tier: "structure" },
      { name: "Music Library Manager", description: "Organize your catalog by genre, BPM, energy level, and mood.", icon: "music", tier: "structure" },
      { name: "Equipment Tracker", description: "Know what gear you have, what's out, and what needs maintenance.", icon: "speaker", tier: "structure" },
      { name: "AI Event Planner", description: "Claude builds setlists, timelines, and event flow suggestions.", icon: "brain", tier: "architect" },
      { name: "Review Collector", description: "Automatically request reviews after every gig.", icon: "star", tier: "structure" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own DJBook forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you the core booking and client management blocks. Structure adds invoicing, analytics, and the AI assistant. Architect gives you white-label capability to resell to other DJs." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "barberbook",
    name: "BarberBook",
    codename: "The Fade",
    color: "#eab308",
    colorRgb: "234, 179, 8",
    description: "Run your chair, your shop, and your empire. The barber business OS that cuts out the middleman.",
    hook: "Your chair. Your rules. Your brix.",
    industry: "barber",
    businessType: "Barber Shop",
    painPoint: "You're running your barber business from Instagram DMs and a paper calendar. Clients no-show. You can't track revenue. Your shop has no system.",
    outcomes: [
      "Fill your chair with automated appointment booking",
      "Eliminate no-shows with smart reminders",
      "Track every dollar with built-in revenue analytics",
      "Build a client base that comes back every 2 weeks",
    ],
    competitor: "Square Appointments",
    competitorPrice: "$600",
    pricing: { foundation: 197, structure: 397, architect: 997 },
    launchPricing: {
      foundation: { regular: 197, launch: 97, savings: 100 },
      structure: { regular: 397, launch: 197, savings: 200 },
      architect: { regular: 997, launch: 497, savings: 500 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Appointment Booking", description: "Clients book their own cuts. No more phone tag.", icon: "calendar", tier: "foundation" },
      { name: "Client Profiles", description: "Remember every client's cut, style preference, and product choice.", icon: "users", tier: "foundation" },
      { name: "Chair Revenue Tracker", description: "See exactly how much each chair generates daily, weekly, monthly.", icon: "chart", tier: "structure" },
      { name: "No-Show Shield", description: "Automated reminders and deposit requirements kill no-shows.", icon: "shield", tier: "foundation" },
      { name: "Product Inventory", description: "Track products you sell and use. Know when to reorder.", icon: "box", tier: "structure" },
      { name: "Loyalty System", description: "Reward regulars. Every 10th cut free. Your rules.", icon: "star", tier: "structure" },
      { name: "AI Style Advisor", description: "Claude suggests styles based on face shape and trends.", icon: "brain", tier: "architect" },
      { name: "Multi-Chair Management", description: "Run multiple barbers under one roof with individual tracking.", icon: "grid", tier: "architect" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own BarberBook forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you booking and client management. Structure adds revenue tracking, inventory, and AI. Architect lets you run a multi-location empire." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "churchos",
    name: "ChurchOS",
    codename: "The Sanctuary",
    color: "#3b82f6",
    colorRgb: "59, 130, 246",
    description: "Ministry management that serves your congregation, not a software company. Built for churches, not corporations.",
    hook: "Serve your flock, not your software.",
    industry: "church",
    businessType: "Church Administration",
    painPoint: "You're running your church from spreadsheets and group texts. Tithes get lost. Volunteers forget their shifts. New members slip through the cracks.",
    outcomes: [
      "Manage your congregation with a complete member directory",
      "Track tithes and donations with transparent reporting",
      "Coordinate volunteers without the chaos",
      "Engage your community with built-in communication tools",
    ],
    competitor: "Planning Center",
    competitorPrice: "$500",
    pricing: { foundation: 147, structure: 297, architect: 747 },
    launchPricing: {
      foundation: { regular: 147, launch: 77, savings: 70 },
      structure: { regular: 297, launch: 147, savings: 150 },
      architect: { regular: 747, launch: 377, savings: 370 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Member Directory", description: "Every member, family, and visitor in one searchable system.", icon: "users", tier: "foundation" },
      { name: "Tithe & Donation Tracker", description: "Track giving, generate tax receipts, and see giving trends.", icon: "dollar", tier: "foundation" },
      { name: "Volunteer Coordinator", description: "Schedule volunteers, send reminders, and track participation.", icon: "calendar", tier: "foundation" },
      { name: "Service Planner", description: "Plan worship services, assign roles, and share run-of-show.", icon: "clipboard", tier: "structure" },
      { name: "Group Manager", description: "Organize small groups, Bible studies, and ministry teams.", icon: "grid", tier: "structure" },
      { name: "Communication Hub", description: "Send announcements, prayer requests, and event updates.", icon: "message", tier: "structure" },
      { name: "AI Sermon Notes", description: "Claude helps organize sermon outlines and study materials.", icon: "brain", tier: "architect" },
      { name: "Event Manager", description: "Plan church events, track RSVPs, and manage logistics.", icon: "star", tier: "structure" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own ChurchOS forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gives you member management and basic communication. Structure adds donation tracking, volunteer coordination, and AI tools. Architect enables multi-campus management." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "freelanceos",
    name: "FreelanceOS",
    codename: "The Hustle",
    color: "#f97316",
    colorRgb: "249, 115, 22",
    description: "Stop freelancing like it's a side gig. Run it like the business it is. Proposals, contracts, invoices, and clients in one system.",
    hook: "Freelance is freedom. Act like it.",
    industry: "freelance",
    businessType: "Freelance Business",
    painPoint: "You're running your freelance business from a dozen apps and sticky notes. Proposals take hours. Invoices get forgotten. Scope creep eats your profit.",
    outcomes: [
      "Send professional proposals in minutes, not hours",
      "Lock scope and protect your profit with smart contracts",
      "Get paid on time with automated invoicing and reminders",
      "See your real revenue after expenses and taxes",
    ],
    competitor: "Honeybook",
    competitorPrice: "$468",
    pricing: { foundation: 197, structure: 397, architect: 997 },
    launchPricing: {
      foundation: { regular: 197, launch: 97, savings: 100 },
      structure: { regular: 397, launch: 197, savings: 200 },
      architect: { regular: 997, launch: 497, savings: 500 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Proposal Builder", description: "Create and send branded proposals that close deals.", icon: "clipboard", tier: "foundation" },
      { name: "Contract Generator", description: "AI-powered contracts that protect your scope and your money.", icon: "shield", tier: "foundation" },
      { name: "Invoice Engine", description: "Send invoices, track payments, automate follow-ups.", icon: "dollar", tier: "foundation" },
      { name: "Client Portal", description: "Clients see their projects, files, and invoices in one place.", icon: "users", tier: "structure" },
      { name: "Project Tracker", description: "Track time, milestones, and deliverables per project.", icon: "chart", tier: "structure" },
      { name: "Expense Logger", description: "Log expenses, categorize for taxes, see real profit.", icon: "calculator", tier: "structure" },
      { name: "AI Scope Defender", description: "Claude flags scope creep and suggests change order language.", icon: "brain", tier: "architect" },
      { name: "Tax Prep Dashboard", description: "Quarterly estimates, deduction tracking, export for your CPA.", icon: "grid", tier: "architect" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own FreelanceOS forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you proposals, contracts, and invoicing. Structure adds project tracking, expense logging, and AI. Architect lets you white-label and resell to other freelancers." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "realtorbrain",
    name: "RealtorBrain",
    codename: "The Close",
    color: "#1e40af",
    colorRgb: "30, 64, 175",
    description: "The real estate agent OS built for closers. Manage leads, listings, and closings without the bloated CRM.",
    hook: "Close more. Stress less. Own your pipeline.",
    industry: "real estate",
    businessType: "Real Estate Business",
    painPoint: "You're running your real estate business from a CRM that costs more than your car payment. Leads fall through. Follow-ups get missed. Your pipeline is a mess.",
    outcomes: [
      "Never lose a lead with intelligent pipeline tracking",
      "Close faster with automated follow-up sequences",
      "Manage listings, showings, and offers in one system",
      "See your commission forecast before the deals close",
    ],
    competitor: "kvCORE + Follow Up Boss",
    competitorPrice: "$1,200",
    pricing: { foundation: 247, structure: 497, architect: 1247 },
    launchPricing: {
      foundation: { regular: 247, launch: 127, savings: 120 },
      structure: { regular: 497, launch: 247, savings: 250 },
      architect: { regular: 1247, launch: 627, savings: 620 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Lead Pipeline", description: "Track every lead from first contact to closing day.", icon: "chart", tier: "foundation" },
      { name: "Listing Manager", description: "Manage all your listings, photos, and showing schedules.", icon: "grid", tier: "foundation" },
      { name: "Follow-Up Automator", description: "Automated drip sequences that keep you top of mind.", icon: "message", tier: "structure" },
      { name: "Commission Calculator", description: "See your cut on every deal before it closes.", icon: "calculator", tier: "structure" },
      { name: "Client Portal", description: "Buyers and sellers see their deals, docs, and timelines.", icon: "users", tier: "foundation" },
      { name: "Open House Tracker", description: "Capture leads at open houses and auto-add to pipeline.", icon: "calendar", tier: "structure" },
      { name: "AI Market Reporter", description: "Claude generates neighborhood market reports for your clients.", icon: "brain", tier: "architect" },
      { name: "Transaction Coordinator", description: "Track every document, deadline, and contingency to closing.", icon: "clipboard", tier: "architect" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own RealtorBrain forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you lead management and listing tools. Structure adds automation, commission tracking, and AI. Architect gives you team management and white-label capability." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "coachportal",
    name: "CoachPortal",
    codename: "The Session",
    color: "#14b8a6",
    colorRgb: "20, 184, 166",
    description: "Run your coaching practice like a pro. Sessions, clients, programs, and payments without the patchwork.",
    hook: "Coach the work. Let brix handle the business.",
    industry: "coaching",
    businessType: "Coaching Practice",
    painPoint: "You're running your coaching practice from Calendly, Stripe, Google Docs, and Zoom links. Clients fall off. You can't track progress. Payments are messy.",
    outcomes: [
      "Book and manage sessions with zero admin overhead",
      "Track client progress and outcomes over time",
      "Sell programs and packages, not just hourly sessions",
      "Get paid automatically with recurring billing",
    ],
    competitor: "Practice Better",
    competitorPrice: "$588",
    pricing: { foundation: 197, structure: 397, architect: 997 },
    launchPricing: {
      foundation: { regular: 197, launch: 97, savings: 100 },
      structure: { regular: 397, launch: 197, savings: 200 },
      architect: { regular: 997, launch: 497, savings: 500 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Session Scheduler", description: "Clients book sessions based on your real availability.", icon: "calendar", tier: "foundation" },
      { name: "Client Journey Tracker", description: "Track goals, milestones, and breakthroughs per client.", icon: "chart", tier: "foundation" },
      { name: "Program Builder", description: "Create and sell coaching programs with structured modules.", icon: "grid", tier: "structure" },
      { name: "Payment Manager", description: "Packages, subscriptions, and one-time payments handled.", icon: "dollar", tier: "foundation" },
      { name: "Session Notes", description: "Keep detailed notes linked to each client and session.", icon: "clipboard", tier: "structure" },
      { name: "Resource Library", description: "Share worksheets, videos, and resources with clients.", icon: "box", tier: "structure" },
      { name: "AI Insight Engine", description: "Claude identifies patterns and suggests coaching strategies.", icon: "brain", tier: "architect" },
      { name: "Community Hub", description: "Create group spaces for cohorts and mastermind programs.", icon: "users", tier: "architect" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own CoachPortal forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you scheduling and client management. Structure adds programs, payments, and AI tools. Architect lets you build and sell your own coaching platform." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "cleaningbiz",
    name: "CleaningBiz",
    codename: "The Fresh",
    color: "#22c55e",
    colorRgb: "34, 197, 94",
    description: "Run your cleaning business like a machine. Schedule crews, manage clients, and track every job without the chaos.",
    hook: "Clean houses. Dirty money. Organized business.",
    industry: "cleaning",
    businessType: "Cleaning Business",
    painPoint: "You're running your cleaning business from a text thread and a whiteboard. Jobs overlap. Crews show up to the wrong address. Clients cancel without notice.",
    outcomes: [
      "Schedule crews and routes with zero overlap",
      "Manage recurring clients on autopilot",
      "Track supplies, equipment, and job costs",
      "Scale from solo cleaner to crew manager",
    ],
    competitor: "Jobber",
    competitorPrice: "$588",
    pricing: { foundation: 147, structure: 297, architect: 747 },
    launchPricing: {
      foundation: { regular: 147, launch: 77, savings: 70 },
      structure: { regular: 297, launch: 147, savings: 150 },
      architect: { regular: 747, launch: 377, savings: 370 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Job Scheduler", description: "Schedule jobs, assign crews, and optimize routes.", icon: "calendar", tier: "foundation" },
      { name: "Client Manager", description: "Every client, address, access code, and preference stored.", icon: "users", tier: "foundation" },
      { name: "Crew Dashboard", description: "Your team sees their schedule, checklists, and job details.", icon: "grid", tier: "structure" },
      { name: "Recurring Jobs", description: "Set it and forget it. Weekly, biweekly, monthly auto-scheduling.", icon: "chart", tier: "foundation" },
      { name: "Supply Tracker", description: "Know what you have, what you need, and what each job costs.", icon: "box", tier: "structure" },
      { name: "Quote Builder", description: "Generate professional quotes based on square footage and scope.", icon: "calculator", tier: "structure" },
      { name: "AI Route Optimizer", description: "Claude plans the most efficient route for your day.", icon: "brain", tier: "architect" },
      { name: "Quality Checklist", description: "Photo verification and checklists ensure every job meets standards.", icon: "clipboard", tier: "structure" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own CleaningBiz forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you scheduling and client management. Structure adds crew management, supply tracking, and AI. Architect lets you franchise and white-label the system." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
  {
    slug: "tutoros",
    name: "TutorOS",
    codename: "The Scholar",
    color: "#be123c",
    colorRgb: "190, 18, 60",
    description: "The tutoring business OS for educators who teach, not tech. Manage students, sessions, and progress without the app overload.",
    hook: "Teach smarter. Get paid. Own your practice.",
    industry: "tutoring",
    businessType: "Tutoring Business",
    painPoint: "You're running your tutoring business from a calendar app and PayPal. Students reschedule constantly. Parents want updates you don't have time to write. Revenue is unpredictable.",
    outcomes: [
      "Book sessions and manage availability effortlessly",
      "Track student progress and share reports with parents",
      "Get paid consistently with package-based pricing",
      "Scale from solo tutor to tutoring agency",
    ],
    competitor: "TutorBird",
    competitorPrice: "$480",
    pricing: { foundation: 167, structure: 337, architect: 847 },
    launchPricing: {
      foundation: { regular: 167, launch: 87, savings: 80 },
      structure: { regular: 337, launch: 167, savings: 170 },
      architect: { regular: 847, launch: 427, savings: 420 },
    },
    launchSpotsTotal: 100,
    launchSpotsLeft: 100,
    blocks: [
      { name: "Session Scheduler", description: "Students and parents book based on your real availability.", icon: "calendar", tier: "foundation" },
      { name: "Student Profiles", description: "Track each student's level, goals, strengths, and areas to improve.", icon: "users", tier: "foundation" },
      { name: "Progress Reports", description: "Generate and share progress updates with parents automatically.", icon: "chart", tier: "structure" },
      { name: "Lesson Planner", description: "Plan lessons, attach resources, and track curriculum coverage.", icon: "clipboard", tier: "structure" },
      { name: "Payment & Packages", description: "Sell session packages, track payments, send invoices.", icon: "dollar", tier: "foundation" },
      { name: "Resource Library", description: "Organize and share worksheets, practice tests, and materials.", icon: "box", tier: "structure" },
      { name: "AI Study Planner", description: "Claude creates personalized study plans based on student data.", icon: "brain", tier: "architect" },
      { name: "Parent Portal", description: "Parents see schedules, progress, and payment history.", icon: "shield", tier: "architect" },
    ],
    faqs: [
      { question: "Is this really a one-time purchase?", answer: "Yes. You pay once and own TutorOS forever. No monthly fees. No annual renewals. No surprises. Lifetime updates included." },
      { question: "What's included in each stack level?", answer: "Foundation gets you scheduling and student management. Structure adds progress tracking, lesson planning, and AI. Architect lets you run a multi-tutor agency." },
      { question: "Can I upgrade later?", answer: "Absolutely. Start with Foundation and upgrade anytime. You only pay the difference between tiers." },
      { question: "Is there support?", answer: "Every purchase includes access to our community and documentation. Structure and Architect tiers include priority email support." },
    ],
  },
];

export const bundles = [
  {
    name: 'The Starter Stack',
    description: 'Any 3 Foundation BRIX',
    regularPrice: 591,
    launchPrice: 197,
    savings: 394,
    tier: 'foundation',
    quantity: 3,
    badge: 'BEST VALUE',
  },
  {
    name: 'The Builder Stack',
    description: 'Any 3 Structure BRIX',
    regularPrice: 1191,
    launchPrice: 497,
    savings: 694,
    tier: 'structure',
    quantity: 3,
    badge: 'MOST POPULAR',
  },
  {
    name: 'The Empire Stack',
    description: 'Any 3 Architect BRIX + SUPERDASH',
    regularPrice: 3488,
    launchPrice: 997,
    savings: 2491,
    tier: 'architect',
    quantity: 3,
    includesSuperdash: true,
    badge: 'EMPIRE BUILDER',
  },
];

export const superdash = {
  name: 'SUPERDASH',
  slug: 'superdash',
  tagline: 'One dashboard. All your businesses. Total control.',
  price: 497,
  launchPrice: 297,
  savings: 200,
  freeWithArchitect: true,
  description: 'Unified analytics, combined financials, and persona switching across all your BRIX.',
  features: [
    'Unified analytics across all BRIX',
    'Combined financial dashboard',
    'One-click persona switching',
    'Cross-business client insights',
    'AI-powered cross-promotion recommendations',
    'Empire-level reporting',
  ],
};

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
