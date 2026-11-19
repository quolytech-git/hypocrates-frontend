export type ClinicSlug =
  | "dental"
  | "dermatology"
  | "physiotherapy"
  | "hair-transplant"
  | "gynecology"
  | "plastic-surgery"
  | "ent"
  | "nutrition"
  | "eye-center";

export interface LiveClinicDashboard {
  id: ClinicSlug;
  title: string;
  shortTitle: string;
  liveUrl: string;
  displayUrl: string;
  screenshot: string;
  portalMode: string;
  entryHint: string;
  themeNote: string;
  sidebarModules: string[];
  treatments: string[];
  highlightMetric: string;
}

export const LIVE_CLINIC_DASHBOARDS: LiveClinicDashboard[] = [
  {
    id: "physiotherapy",
    title: "Physiotherapy Dashboard",
    shortTitle: "Physiotherapy",
    liveUrl: "https://physiotherapy-umber.vercel.app/hyrje",
    displayUrl: "physiotherapy-umber.vercel.app/hyrje",
    screenshot: "/images/dashboards/physiotherapy-dashboard.png",
    portalMode: "Doctor & Admin Portals",
    entryHint: "Quick Demo Roles: Admin · Doktor · Doktor 2 · Recepsion",
    themeNote: "Dark Clinical Theme · 8 Doctor Modules",
    sidebarModules: [
      "Paneli Kryesor",
      "Kalendari Im",
      "Takimet",
      "Pacientët",
      "Trajtimet",
      "Recetat",
      "Kontrollet Pas-op.",
      "Progresi i Trajtimit",
    ],
    treatments: [
      "Vlerësim Fillestar",
      "Terapi Manuale",
      "Elektroterapi",
      "Rehabilitim ROM",
    ],
    highlightMetric: "ROM & Exercise Progress",
  },
  {
    id: "hair-transplant",
    title: "Hair Transplant Dashboard",
    shortTitle: "Hair Transplant",
    liveUrl: "https://hair-transplant-tau.vercel.app",
    displayUrl: "hair-transplant-tau.vercel.app",
    screenshot: "/images/dashboards/hair-transplant-dashboard.png",
    portalMode: "Direct Admin Command Center",
    entryHint: "Instant /admin access · AI Assistant (3/50) · €1 = 116.5L",
    themeNote: "Dark Command Center · 13 Admin Modules",
    sidebarModules: [
      "Paneli Kryesor",
      "Inbox",
      "Pacientët",
      "Takimet",
      "Kontrollet Pas-op.",
      "Progresi i Trajtimit",
      "Financa",
      "Inventari",
      "Stafi",
      "Dokumenta",
      "Kujtesat",
      "Uebsajti",
      "Importo",
    ],
    treatments: [
      "Transplant FUE",
      "Terapi PRP",
      "Mezoterapi Kapilare",
      "Terapi Lazer i Kokës",
    ],
    highlightMetric: "Post-Op Graft Tracking",
  },
  {
    id: "gynecology",
    title: "Gynecology Dashboard",
    shortTitle: "Gynecology",
    liveUrl: "https://gynecology-kappa.vercel.app/hyrje",
    displayUrl: "gynecology-kappa.vercel.app/hyrje",
    screenshot: "/images/dashboards/gynecology-dashboard.png",
    portalMode: "Admin & OB/GYN Portals",
    entryHint: "Quick Demo Roles: Admin · Doktor · Doktor 2 · Recepsion",
    themeNote: "Dark Clinical Suite · 13 Admin Modules",
    sidebarModules: [
      "Paneli Kryesor",
      "Inbox",
      "Pacientët",
      "Takimet",
      "Kontrollet Pas-op.",
      "Progresi i Trajtimit",
      "Financa",
      "Inventari",
      "Stafi",
      "Dokumenta",
      "Kujtesat",
      "Uebsajti",
      "Importo",
    ],
    treatments: [
      "Kontroll Gjinekologjik",
      "Kolposkopi",
      "Ekzaminim Pap Test",
      "Ultratingull & Prenatal",
    ],
    highlightMetric: "Ultrasound & Prenatal Logs",
  },
  {
    id: "dermatology",
    title: "Dermatology Dashboard",
    shortTitle: "Dermatology",
    liveUrl: "https://dermatology-phi.vercel.app/hyrje",
    displayUrl: "dermatology-phi.vercel.app/hyrje",
    screenshot: "/images/dashboards/dermatology-dashboard.png",
    portalMode: "Admin & Dermatology Portals",
    entryHint: "Quick Demo Roles: Admin · Doktor · Doktor 2 · Recepsion",
    themeNote: "Dark Derm Suite · 13 Admin Modules",
    sidebarModules: [
      "Paneli Kryesor",
      "Inbox",
      "Pacientët",
      "Takimet",
      "Kontrollet Pas-op.",
      "Progresi i Trajtimit",
      "Financa",
      "Inventari",
      "Stafi",
      "Dokumenta",
      "Kujtesat",
      "Uebsajti",
      "Importo",
    ],
    treatments: [
      "Kontroll i Nishaneve",
      "Biopsi Lëkure",
      "Heqje Qimesh me Lazer",
      "Trajtim Akne",
    ],
    highlightMetric: "Lesion & Laser Progress",
  },
  {
    id: "dental",
    title: "Dental Dashboard",
    shortTitle: "Dental",
    liveUrl: "https://dental-demo-ynvj.vercel.app/hyrje",
    displayUrl: "dental-demo-ynvj.vercel.app/hyrje",
    screenshot: "/images/dashboards/dental-dashboard.png",
    portalMode: "Admin & Dental Portals",
    entryHint: "Quick Demo Roles: Admin · Doktor · Doktor 2 · Recepsion",
    themeNote: "Crisp Clinical Theme · Ortodoncia Module",
    sidebarModules: [
      "Paneli Kryesor",
      "Inbox",
      "Pacientët",
      "Takimet",
      "Kontrollet Pas-op.",
      "Ortodoncia",
      "Financa",
      "Inventari",
      "Stafi",
      "Dokumenta",
      "Kujtesat",
      "Uebsajti",
      "Importo",
    ],
    treatments: [
      "Pastrim Dhëmbësh",
      "Zbardhim Dhëmbësh",
      "Mbushje Dentare",
      "Trajtim Kanalar",
    ],
    highlightMetric: "Ortodoncia & Canal Care",
  },
];

export interface RoleWorkspace {
  title: string;
  category: string;
  dashboard: string;
  agentName: string;
  agentFuncs: string;
}

export interface RoleCategory {
  id: string;
  name: string;
  roles: string[];
}

export interface JourneyStep {
  title: string;
  detail: string;
}

export interface AiAgentInfo {
  name: string;
  func: string;
  interacts: string;
}

export interface FeatureBlock {
  title: string;
  items: string[];
}

export interface Differentiator {
  title: string;
  desc: string;
}

export interface ClinicSolution {
  slug: ClinicSlug;
  title: string;
  shortTitle: string;
  tenantTitle: string;
  heroSubtitle: string;
  showcaseDesc: string;
  showcaseFeatures: string[];
  ctaText: string;
  soloPrice: number;
  clinicPrice: number;
  pricingFeatures: string[];
  parentSaaSDescription: string;
  subTenantHighlights: { label: string; text: string }[];
  tier1Cards: { title: string; desc: string }[];
  branches: {
    name: string;
    dbDesc: string;
    webDesc: string;
    terminals: string[];
  }[];
  agentBadges: string[];
  orchestratorNote: string;
  categories: RoleCategory[];
  defaultCategory: string;
  defaultRole: string;
  rolesData: Record<string, RoleWorkspace>;
  patientJourney: JourneyStep[];
  aiAgentsList: AiAgentInfo[];
  featureBlocks: FeatureBlock[];
  differentiators: Differentiator[];
  simulatorTitle: string;
}

export const CLINIC_ORDER: ClinicSlug[] = [
  "physiotherapy",
  "hair-transplant",
  "gynecology",
  "dermatology",
  "dental",
  "plastic-surgery",
  "ent",
  "nutrition",
  "eye-center",
];

export const clinicSolutions: Record<ClinicSlug, ClinicSolution> = {
  dental: {
    slug: "dental",
    title: "Dental Clinics",
    shortTitle: "Dental",
    tenantTitle: "Dental Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location dental software solution running as an isolated sub-tenant under the main Hypocrates SaaS.",
    showcaseDesc:
      "Multi-location franchise tenant with isolated data, 10+ role-specific dashboards, and an orchestrated AI suite.",
    showcaseFeatures: [
      "Isolated Multi-Tenant Architecture",
      "10+ Role-Specific AI Dashboards",
      "Automated Location Websites",
    ],
    ctaText: "Explore Dental Workflows",
    soloPrice: 149,
    clinicPrice: 399,
    pricingFeatures: [
      "Dental SOAP templates & odontogram shorthand",
      "Intraoral camera image layout links",
      "Specialized tooth charting vocabulary",
    ],
    parentSaaSDescription:
      "Hypocrates hosts various specialized clinic tenants under one shared framework, facilitating easy cross-specialty expansions.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Complete segregation of patients, staff, invoicing, and stocks per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Supports franchise branches with unified manager overrides and consolidated reporting.",
      },
      {
        label: "Role-Based Access",
        text: "Staff accounts are locked to specific physical branch access tokens.",
      },
    ],
    tier1Cards: [
      {
        title: "Manager Control Portal",
        desc: "Single login manager override to review clinic settings, staff hiring, and user permissions across all locations.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates revenue tracking, procedure logs, active appointments, and inventory checklists across the franchise.",
      },
      {
        title: "Operations AI",
        desc: "Franchise-wide predictive engine that forecasts scheduling patterns, optimizes staffing, and predicts revenue flows.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate client charts, billing records, files, and treatment logs.",
        webDesc: "Dedicated public portal pre-integrated with an AI scheduling chatbot.",
        terminals: [
          "Dentist Terminal",
          "Assistant Terminal",
          "Receptionist Terminal",
          "Hygienist Terminal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "Complete data isolation guaranteeing legal security and HIPAA compliance.",
        webDesc: "Synced calendar, services, and online patient check-in queues.",
        terminals: [
          "Dentist Terminal",
          "Assistant Terminal",
          "Receptionist Terminal",
          "Hygienist Terminal",
        ],
      },
    ],
    agentBadges: [
      "Reception AI",
      "Clinical AI",
      "Finance AI",
      "Inventory AI",
      "Hygiene AI",
      "Lab AI",
    ],
    orchestratorNote:
      "AI Agents are deployed locally inside each branch. They communicate in real-time via our AI Orchestrator (e.g. Clinical AI suggests dental implants, which triggers Lab AI to check prosthetics and Finance AI to forecast revenue adjustments).",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Lab",
        roles: ["dentist", "assistant", "hygienist", "sterilization", "labtech"],
      },
      {
        id: "frontoffice",
        name: "Front Desk & Billing",
        roles: ["receptionist", "finance", "marketing"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "inventory", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "dentist",
    rolesData: {
      manager: {
        title: "Clinic Manager",
        category: "Management & Admin",
        dashboard:
          "Multi-location operations, staff scheduling, revenue charts, and franchise consolidated analytics.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts busy periods, suggests staff allocation adjustments, forecasts multi-branch revenue, and identifies bottlenecks.",
      },
      dentist: {
        title: "Dentist / Specialist",
        category: "Clinical Staff",
        dashboard:
          "Patient records, interactive teeth maps, procedure history, X-rays, and AI clinical drafts.",
        agentName: "Clinical AI",
        agentFuncs:
          "Analyzes imaging/X-rays, provides diagnostic treatment suggestions, flags high-urgency cases, and auto-drafts SOAP notes.",
      },
      assistant: {
        title: "Dental Assistant",
        category: "Support & Assistants",
        dashboard:
          "Daily procedure checklist, room preparation tasks, and instrument tracker.",
        agentName: "Assistant AI",
        agentFuncs:
          "Predicts necessary instruments per treatment type, automates room prep notifications, and coordinates sterilization logs.",
      },
      hygienist: {
        title: "Hygienist",
        category: "Support & Assistants",
        dashboard:
          "Hygiene appointment schedules, periodontal charting, and patient preventive plans.",
        agentName: "Hygiene AI",
        agentFuncs:
          "Analyzes hygiene intervals, recommends custom preventive care plans, and schedules recall appointments.",
      },
      receptionist: {
        title: "Receptionist / Front Desk",
        category: "Front Office",
        dashboard:
          "Appointment calendar, live check-in queue, patient details, and communications portal.",
        agentName: "Reception AI",
        agentFuncs:
          "Automates scheduling, predicts no-shows/cancellations, and handles website patient booking inquiries.",
      },
      finance: {
        title: "Billing & Finance Staff",
        category: "Finance & Operations",
        dashboard:
          "Invoices, payment logs, insurance claims tracking, and revenue graphs.",
        agentName: "Finance AI",
        agentFuncs:
          "Monitors cash flow, flags billing anomalies/overdue invoices, and automates insurance verification.",
      },
      inventory: {
        title: "Inventory Manager",
        category: "Finance & Operations",
        dashboard:
          "Stock levels, purchase orders, and equipment maintenance logs.",
        agentName: "Inventory AI",
        agentFuncs:
          "Predicts supply consumption rates and triggers predictive purchase orders for low-stock dental supplies.",
      },
      marketing: {
        title: "Marketing Coordinator",
        category: "Finance & Operations",
        dashboard:
          "Campaign metrics, patient retention lists, and promotion tools.",
        agentName: "Marketing AI",
        agentFuncs:
          "Automates targeted patient newsletters, recommends custom promotional triggers, and predicts patient churn.",
      },
      sterilization: {
        title: "Sterilization Tech",
        category: "Support & Assistants",
        dashboard:
          "Autoclave logs, instrument sterilization schedules, and room prep requirements.",
        agentName: "Sterilization AI",
        agentFuncs:
          "Logs sterilization cycles automatically, optimizes instruments turnover speed, and alerts if testing is overdue.",
      },
      labtech: {
        title: "Lab Technician",
        category: "Support & Assistants",
        dashboard:
          "Lab orders queue, prosthetics inventory, and delivery schedule.",
        agentName: "Lab AI",
        agentFuncs:
          "Optimizes prosthetic manufacturing queue and coordinates delivery timelines with the dentist schedule.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Finance & Operations",
        dashboard:
          "Server health dashboard, encryption statuses, access control logs, and backup schedules.",
        agentName: "IT AI",
        agentFuncs:
          "Runs continuous diagnostics, identifies performance anomalies, and flags suspicious login attempts.",
      },
    },
    patientJourney: [
      {
        title: "Online Booking",
        detail:
          "Patient schedules an appointment online. The Reception AI analyzes calendar efficiency, predicts the best dentist match, and sends confirmation notifications.",
      },
      {
        title: "Check-In",
        detail:
          "The patient registers at the front desk. A check-in notification is pushed immediately to the dentist and assistant dashboards, and the AI projects the treatment timeframe.",
      },
      {
        title: "Treatment",
        detail:
          "The dentist reviews history alongside Clinical AI diagnostic suggestions. The assistant prepares instruments based on Assistant AI predictions while sterilization and lab queues stay synced.",
      },
      {
        title: "Billing & Insurance",
        detail:
          "Finance staff processes invoices and files claims. Finance AI inspects the invoice for billing correctness, forecasts cash flow, and handles ledger logs.",
      },
      {
        title: "Follow-Up & Marketing",
        detail:
          "The patient receives post-care advice via email/SMS. Hygiene AI schedules preventive cleaning, and Marketing AI engages patients to maximize clinic retention.",
      },
    ],
    aiAgentsList: [
      {
        name: "Reception AI",
        func: "Handles website inquiries, predicts no-shows, and books calendar spots.",
        interacts: "Assistant AI, Clinical AI, Marketing AI",
      },
      {
        name: "Clinical AI",
        func: "Suggests diagnostics, reads X-ray records, and drafts SOAP notes.",
        interacts: "Finance AI, Reception AI",
      },
      {
        name: "Operations AI",
        func: "Optimizes staffing and predicts clinic busy periods.",
        interacts: "Assistant AI, Manager dashboards",
      },
      {
        name: "Finance AI",
        func: "Claims checking, cash flow predictions, and overdue alerts.",
        interacts: "Clinical AI, Reception AI",
      },
      {
        name: "Inventory AI",
        func: "Tracks stock levels and automates supply purchasing orders.",
        interacts: "Assistant AI, Lab AI",
      },
      {
        name: "Hygiene AI",
        func: "Hygiene recalls, follow-up scheduling, and preventive recommendations.",
        interacts: "Clinical AI, Marketing AI",
      },
      {
        name: "Marketing AI",
        func: "Automates patient newsletters, promos, and engagement cards.",
        interacts: "Reception AI, Finance AI, Hygiene AI",
      },
      {
        name: "Lab AI",
        func: "Manages prosthetics lab workflow queues.",
        interacts: "Clinical AI, Inventory AI",
      },
      {
        name: "IT AI",
        func: "Monitors backup tasks, system security, and API integrity.",
        interacts: "All staff dashboards",
      },
    ],
    featureBlocks: [
      {
        title: "Multi-Location Management",
        items: [
          "Single franchise manager login",
          "Location switcher dropdown to inspect individual branches",
          "Consolidated branch revenue, bookings, and work performance reports",
          "Franchise-wide workload and schedule predictions",
        ],
      },
      {
        title: "Clinic Website Automation",
        items: [
          "Automatic public websites deployed per location",
          "Pre-built Home, About, Services, Team, and Booking templates",
          "Pre-integrated AI booking chatbots to handle appointments",
          "Direct calendar synchronization back to the tenant dashboard",
        ],
      },
      {
        title: "Workflow Automation",
        items: [
          "Predictive models for no-show and cancellation probability",
          "AI estimated procedure durations based on history",
          "Automated cross-role notifications (Reception → Assistant → Dentist → Finance)",
          "Automated supply inventory consumption forecasts",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI-First Orchestration",
        desc: "Rather than simple forms, our AI agents run prediction models and communicate to automate cross-role workflows.",
      },
      {
        title: "Franchise-Ready Structure",
        desc: "Allows clinic networks to view individual branch reports, manage staffing across locations, and switch locations instantly.",
      },
      {
        title: "Automatic Public Websites",
        desc: "Every location gets its own public website pre-integrated with an AI booking chatbot that syncs straight to the SaaS.",
      },
      {
        title: "Role-Specific UI Dashboards",
        desc: "Personalized widgets and workflows for every member of the dental staff, from sterilization to management.",
      },
    ],
    simulatorTitle: "Interactive Dental Chart & DeltaDental Billing Simulator",
  },

  dermatology: {
    slug: "dermatology",
    title: "Dermatology Clinics",
    shortTitle: "Dermatology",
    tenantTitle: "Dermatology Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location dermatology software solution running as an isolated sub-tenant under the main Hypocrates SaaS — from skin consultations to cosmetic procedures.",
    showcaseDesc:
      "Multi-location AI-first tenant for skin consultations, cosmetic procedures, and photo progress tracking.",
    showcaseFeatures: [
      "10+ Role-Specific AI Dashboards",
      "Skin Imaging & Progress Tracking",
      "Cosmetic Procedure Intelligence",
    ],
    ctaText: "Explore Dermatology EHR",
    soloPrice: 169,
    clinicPrice: 429,
    pricingFeatures: [
      "Visual lesion profiling & description logs",
      "High-res photo metadata syncing",
      "Dermatological diagnostic term libraries",
    ],
    parentSaaSDescription:
      "Hypocrates hosts specialized clinic tenants under one shared framework. The Dermatology Tenant operates in full isolation while leveraging shared auth, security, and billing infrastructure.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Separate patient records, skin images, treatment logs, and billing per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Franchise branches with unified admin override and cross-location analytics.",
      },
      {
        label: "Role-Based Access",
        text: "Each staff member sees only what is relevant to their role — no clutter, no risk.",
      },
    ],
    tier1Cards: [
      {
        title: "Admin Control Portal",
        desc: "Single login admin override to review clinic settings, staff, service menus, and permissions across all dermatology locations.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates revenue tracking, treatment logs, active appointments, cosmetic procedure popularity, and inventory across the franchise.",
      },
      {
        title: "Operations AI",
        desc: "Franchise-wide predictive engine that forecasts patient load, optimizes staffing across branches, and identifies revenue opportunities.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate skin imaging records, treatment logs, prescriptions, and patient billing with zero data bleed.",
        webDesc: "Dedicated public portal with AI booking chatbot, treatment services, and dermatologist profiles.",
        terminals: [
          "Dermatologist Terminal",
          "Nurse Terminal",
          "Receptionist Terminal",
          "Cosmetic Tech Terminal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "Complete data isolation guaranteeing legal security, HIPAA compliance, and full audit trail per location.",
        webDesc: "Synced calendar, cosmetic treatment services, and online patient skin history intake forms.",
        terminals: [
          "Dermatologist Terminal",
          "Nurse Terminal",
          "Receptionist Terminal",
          "Cosmetic Tech Terminal",
        ],
      },
    ],
    agentBadges: [
      "Reception AI",
      "Clinical AI",
      "Aesthetic AI",
      "Finance AI",
      "Inventory AI",
      "Assistant AI",
      "Lab AI",
      "Marketing AI",
      "IT AI",
    ],
    orchestratorNote:
      "AI Agents are deployed locally inside each branch and communicate in real-time via our AI Orchestrator — e.g. Clinical AI identifies a treatment plan, triggering Inventory AI to check supplies, Finance AI to forecast revenue, and Reception AI to schedule a follow-up.",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Cosmetic",
        roles: [
          "dermatologist",
          "nurse",
          "cosmetictechnician",
          "sterilization",
          "labtech",
        ],
      },
      {
        id: "frontoffice",
        name: "Front Desk & Billing",
        roles: ["receptionist", "finance", "marketing"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "inventory", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "dermatologist",
    rolesData: {
      manager: {
        title: "Admin / Clinic Owner",
        category: "Management & Admin",
        dashboard:
          "Multi-location KPIs, revenue charts, staff performance overview, treatment analytics, occupancy per location, and consolidated financial reports.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts busy periods across all locations, optimizes staff scheduling by patient load, forecasts revenue per branch, and identifies underperforming services or clinics.",
      },
      dermatologist: {
        title: "Dermatologist",
        category: "Clinical Staff",
        dashboard:
          "Daily schedule, full patient panel with skin history, uploaded images and photo comparisons, prior treatment notes, prescription logs, and AI-flagged alerts.",
        agentName: "Clinical AI",
        agentFuncs:
          "Analyzes patient photos for skin condition severity (acne, moles, rashes), suggests treatment plans based on history, highlights contraindications, and flags follow-ups.",
      },
      nurse: {
        title: "Nurse / Medical Assistant",
        category: "Clinical Support",
        dashboard:
          "Procedure queue for the day, patient vitals and prep notes, allergy screening checklists, assigned treatment details, and consumables tracker.",
        agentName: "Assistant AI",
        agentFuncs:
          "Generates automatic preparation checklists per treatment type, recommends daily supply needs based on procedure schedule, and sends alerts for allergy flags.",
      },
      cosmetictechnician: {
        title: "Cosmetic Technician / Aesthetician",
        category: "Cosmetic Staff",
        dashboard:
          "Session list with patient skin profiles, treatment logs per session, before-and-after photo upload, equipment usage tracker, and laser/serum inventory.",
        agentName: "Aesthetic AI",
        agentFuncs:
          "Suggests treatment parameters (laser intensity, peel depth) based on skin type and history, notifies when equipment needs calibration, and tracks repeat session trends.",
      },
      receptionist: {
        title: "Receptionist / Front Desk",
        category: "Front Office",
        dashboard:
          "Appointment calendar with provider and procedure filters, patient check-in queue, registration forms, billing and insurance status, and arrival alerts.",
        agentName: "Reception AI",
        agentFuncs:
          "Auto-suggests available slots based on provider availability, predicts no-shows or late cancellations, flags scheduling conflicts, and sends automated SMS/email reminders.",
      },
      finance: {
        title: "Billing / Finance Staff",
        category: "Finance & Operations",
        dashboard:
          "Invoice management, payment logs, insurance claims tracker, outstanding balance alerts, and revenue trend graphs per location.",
        agentName: "Finance AI",
        agentFuncs:
          "Flags overdue invoices, monitors cash flow anomalies, predicts treatment-based revenue, forecasts monthly earnings, and automates insurance pre-authorization checks.",
      },
      inventory: {
        title: "Inventory Manager",
        category: "Finance & Operations",
        dashboard:
          "Stock levels for dermatology consumables (peels, laser tips, serums, injectables), purchase order management, and equipment maintenance schedule.",
        agentName: "Inventory AI",
        agentFuncs:
          "Predicts supply consumption per scheduled procedure type, auto-triggers low-stock alerts, and recommends reorder quantities based on usage trends.",
      },
      marketing: {
        title: "Marketing Coordinator",
        category: "Finance & Operations",
        dashboard:
          "Campaign metrics, patient retention lists, procedure-based promotion tools, and social engagement tracking.",
        agentName: "Marketing AI",
        agentFuncs:
          "Recommends patient retention campaigns, targets promotions based on treatment history, predicts churn, and automates post-treatment skincare newsletters.",
      },
      sterilization: {
        title: "Sterilization Tech",
        category: "Clinical Support",
        dashboard:
          "Instrument sterilization logs, autoclave cycle records, room prep checklists for procedures, and compliance audit trail.",
        agentName: "Sterilization AI",
        agentFuncs:
          "Automates sterilization cycle logging, optimizes instrument turnover between procedures, and alerts when testing cycles are overdue.",
      },
      labtech: {
        title: "Lab Technician",
        category: "Clinical Support",
        dashboard:
          "Skin biopsy order queue, pathology result logs, lab processing timelines, and result urgency classification.",
        agentName: "Lab AI",
        agentFuncs:
          "Optimizes biopsy lab processing queue, predicts result turnaround times, and highlights critical pathology results directly on the dermatologist dashboard.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Operations & IT",
        dashboard:
          "System health metrics, encrypted storage status, user access control logs, HIPAA compliance audit, backup schedules, and API monitoring.",
        agentName: "IT AI",
        agentFuncs:
          "Runs continuous diagnostics, identifies security anomalies or suspicious login patterns, monitors GDPR/HIPAA compliance, and auto-resolves minor issues.",
      },
    },
    patientJourney: [
      {
        title: "Online Booking",
        detail:
          "Patient books online selecting a dermatologist, nurse, or cosmetic technician. Reception AI analyzes calendar efficiency and sends instant confirmation with a skin history form.",
      },
      {
        title: "Check-In",
        detail:
          "Receptionist verifies details, insurance, and consent forms. Check-in notification is pushed to the dermatologist and nurse dashboards with Clinical AI pre-loading skin history.",
      },
      {
        title: "Consultation & Exam",
        detail:
          "Dermatologist performs a skin examination, reviews prior images, and documents findings. Clinical AI suggests diagnoses or treatment plans and flags mole monitoring urgencies.",
      },
      {
        title: "Treatment / Procedure",
        detail:
          "Cosmetic technician performs the procedure with Aesthetic AI suggesting optimal parameters per skin type. Before-and-after photos are uploaded and supply usage is tracked.",
      },
      {
        title: "Prescription & Follow-Up Plan",
        detail:
          "Dermatologist prescribes medications or a skincare routine. Follow-up appointments are auto-scheduled and post-treatment instructions are sent to the patient portal.",
      },
      {
        title: "Billing & Checkout",
        detail:
          "Finance staff processes the invoice. Finance AI checks billing accuracy and files insurance claims while Marketing AI enrolls the patient in retention campaigns.",
      },
    ],
    aiAgentsList: [
      {
        name: "Reception AI",
        func: "Handles patient booking inquiries, predicts no-shows, and optimizes the appointment calendar.",
        interacts: "Clinical AI, Operations AI, Marketing AI",
      },
      {
        name: "Clinical AI",
        func: "Analyzes skin images, suggests diagnoses and treatment plans, flags contraindications and follow-up urgencies.",
        interacts: "Finance AI, Reception AI, Lab AI",
      },
      {
        name: "Aesthetic AI",
        func: "Optimizes cosmetic procedure parameters, tracks sessions, and alerts on equipment maintenance needs.",
        interacts: "Inventory AI, Assistant AI",
      },
      {
        name: "Operations AI",
        func: "Forecasts busy periods, optimizes multi-location staffing, and identifies underperforming branches.",
        interacts: "All staff dashboards",
      },
      {
        name: "Finance AI",
        func: "Monitors revenue flows, flags overdue invoices, and automates insurance pre-authorizations.",
        interacts: "Clinical AI, Reception AI",
      },
      {
        name: "Inventory AI",
        func: "Predicts supply consumption by procedure type and triggers automated low-stock purchase orders.",
        interacts: "Assistant AI, Aesthetic AI",
      },
      {
        name: "Marketing AI",
        func: "Automates skincare newsletters, targets promotions by treatment history, and predicts patient churn.",
        interacts: "Reception AI, Finance AI",
      },
      {
        name: "Lab AI",
        func: "Manages biopsy queue, predicts lab turnaround, and highlights critical pathology results.",
        interacts: "Clinical AI, Inventory AI",
      },
    ],
    featureBlocks: [
      {
        title: "Skin Imaging & Tracking",
        items: [
          "Upload patient photos per session with timestamp and provider attribution",
          "Side-by-side photo comparisons to visualize treatment progress over time",
          "Clinical AI image analysis for acne severity, mole monitoring, and rash classification",
          "Consent-based image storage with encrypted HIPAA-compliant access controls",
        ],
      },
      {
        title: "Cosmetic Treatment Packages",
        items: [
          "Pre-built session plans for laser therapy, chemical peels, and microneedling",
          "Cosmetic injectable tracking with dosage and provider logs per session",
          "Package billing and progress milestones tied directly to patient records",
          "Aesthetic AI parameter suggestions per skin type and treatment history",
        ],
      },
      {
        title: "Preventive Care & Prescriptions",
        items: [
          "Dermatology-specific prescription tracking with skincare routine assignments",
          "Automated follow-up scheduling and mole monitoring reminders",
          "Sun protection, seasonal skin check, and preventive care alert campaigns",
          "Patient portal access to treatment history, prescriptions, and post-care guides",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI-Powered Skin Analysis",
        desc: "Clinical AI analyzes uploaded patient photos to assess skin condition severity, mole changes, and treatment progression over time.",
      },
      {
        title: "Multi-Location Franchise View",
        desc: "Clinic owners see consolidated KPIs across all branches, compare performance, and push standardized pricing or promotions instantly.",
      },
      {
        title: "Cosmetic Procedure Intelligence",
        desc: "Aesthetic AI suggests optimized parameters per patient skin type, monitors session logs, and keeps equipment maintenance on schedule.",
      },
      {
        title: "HIPAA & GDPR Compliant By Design",
        desc: "Patient health data and skin images are encrypted, access-controlled by role, and fully auditable — built to the highest compliance standards.",
      },
    ],
    simulatorTitle: "Interactive AI Skin Scanner & Biometric Report Simulator",
  },

  "plastic-surgery": {
    slug: "plastic-surgery",
    title: "Plastic Surgery",
    shortTitle: "Plastic Surgery",
    tenantTitle: "Plastic Surgery Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location plastic and aesthetic surgery solution — managing pre-op planning, real-time OR intelligence, photo-based recovery monitoring, and VIP patient management.",
    showcaseDesc:
      "AI-first aesthetic surgery tenant with OR intelligence, 3D simulation, photo recovery monitoring, and VIP CRM.",
    showcaseFeatures: [
      "Pre-Op AI & 3D Simulation",
      "Real-Time OR Intelligence",
      "VIP & Marketing Engine",
    ],
    ctaText: "Explore Surgery EHR",
    soloPrice: 189,
    clinicPrice: 479,
    pricingFeatures: [
      "Clinical photography timeline tracking",
      "Aesthetic measurement note-taking formats",
      "High-security patient consent flows",
    ],
    parentSaaSDescription:
      "Hypocrates hosts specialized clinic tenants under one shared framework. The Plastic Surgery Tenant operates in full isolation while connecting cross-specialty referrals with dermatology, physiotherapy, and nutrition.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Separate surgical records, imaging files, consent documents, implant logs, and billing per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Franchise branches with unified admin override, comparative OR utilization KPIs, and surgeon analytics.",
      },
      {
        label: "Cross-Specialty Referrals",
        text: "Receives referrals from dermatology and sends post-op patients to physiotherapy and nutrition.",
      },
    ],
    tier1Cards: [
      {
        title: "Admin Control Portal",
        desc: "Single login admin override to manage staff access, OR scheduling templates, procedure menus, and consolidated performance metrics.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates OR utilization, procedure volumes, surgeon performance, lead conversion rates, and marketing ROI across the franchise.",
      },
      {
        title: "Operations AI",
        desc: "Forecasts procedure demand, optimizes surgeon and OR scheduling, and recommends targeted regional marketing campaigns.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate surgical records, imaging files, implant logs, consent documents, and billing — zero data bleed.",
        webDesc: "Public-facing portal with AI consultation booking, surgeon profiles, before/after gallery, and intake forms.",
        terminals: [
          "Surgeon Terminal",
          "Anesthesiologist",
          "OR Nurse Terminal",
          "Coordinator Terminal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "Full legal audit trail per branch with HIPAA-compliant encryption for pre-op and post-op imagery.",
        webDesc: "Synced OR consultation slots, procedure packages, and VIP concierge patient portal.",
        terminals: [
          "Surgeon Terminal",
          "Anesthesiologist",
          "OR Nurse Terminal",
          "VIP Concierge",
        ],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "Anesthesia AI",
      "Pre-Op AI",
      "Surgery AI",
      "Recovery AI",
      "Marketing AI",
      "VIP AI",
      "Operations AI",
    ],
    orchestratorNote:
      "Surgery AI, Anesthesia AI, Pre-Op AI, and Recovery AI coordinate seamlessly across pre-op evaluation, intraoperative OR tracking, and post-op photo healing milestones.",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Surgical",
        roles: ["surgeon", "anesthesiologist", "nurse", "recovery"],
      },
      {
        id: "frontoffice",
        name: "Patient Relations & Marketing",
        roles: ["coordinator", "marketing", "vip"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "surgeon",
    rolesData: {
      manager: {
        title: "Clinic Manager / Admin",
        category: "Management & Admin",
        dashboard:
          "Multi-clinic revenue and procedure volume overview, OR utilization per location, staff performance metrics, compliance alerts, and lead conversion dashboards.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts peak procedure periods, optimizes multi-location staffing, forecasts revenue, and recommends targeted marketing campaigns per procedure type.",
      },
      surgeon: {
        title: "Plastic Surgeon",
        category: "Clinical Staff",
        dashboard:
          "Daily patient list with pre-op and post-op files, OR slot assignments, before/after comparison viewer, consent status, and AI risk assessment reports.",
        agentName: "Clinical AI",
        agentFuncs:
          "Calculates procedure risk scores per patient profile, generates predicted aesthetic outcome simulations, auto-drafts post-op recovery plans, and flags contraindications.",
      },
      anesthesiologist: {
        title: "Anesthesiologist",
        category: "Clinical Staff",
        dashboard:
          "OR schedule with patient anesthesia history, pre-op vitals review, contraindication flag log, intraoperative vitals monitor, and post-anesthesia recovery.",
        agentName: "Anesthesia AI",
        agentFuncs:
          "Recommends anesthesia type and dosage, alerts on drug interaction risks before OR entry, tracks intraoperative vitals, and auto-documents anesthesia events.",
      },
      nurse: {
        title: "Surgical Nurse / OR Assistant",
        category: "Clinical Support",
        dashboard:
          "OR preparation checklist per procedure, instrument and implant tracking panel, sterile equipment inventory, and pre-op room readiness status.",
        agentName: "Assistant AI",
        agentFuncs:
          "Automates OR preparation checklists, tracks implants and instruments used per surgery, optimizes OR turnaround time, and verifies implant batch sterility.",
      },
      coordinator: {
        title: "Reception / Patient Coordinator",
        category: "Patient Relations",
        dashboard:
          "Appointment booking and rescheduling calendar, insurance and payment tracker, pre-op and post-op reminder log, and patient communication inbox.",
        agentName: "Patient Engagement AI",
        agentFuncs:
          "Suggests optimal consultation slots, automates pre-op instruction reminders, predicts no-shows, and scores patient satisfaction after each touchpoint.",
      },
      marketing: {
        title: "Marketing / Aesthetic Consultant",
        category: "Patient Relations",
        dashboard:
          "Lead pipeline and conversion metrics, campaign performance dashboard, procedure package performance, ROI analytics, and seasonal demand forecasts.",
        agentName: "Marketing AI",
        agentFuncs:
          "Segments leads by procedure interest, recommends personalized treatment packages, predicts seasonal aesthetic demand spikes, and optimizes ad spend.",
      },
      vip: {
        title: "VIP / Concierge Coordinator",
        category: "Patient Relations",
        dashboard:
          "High-value patient roster with preference history, exclusive appointment management, personalized treatment bundle tracker, and concierge log.",
        agentName: "VIP AI",
        agentFuncs:
          "Predicts VIP patient needs from treatment history, suggests personalized bundles, ensures VIP scheduling priority, and monitors concierge satisfaction scores.",
      },
      recovery: {
        title: "Recovery / Physiotherapy Specialist",
        category: "Clinical Support",
        dashboard:
          "Post-op recovery schedule per patient, physiotherapy milestone tracking, healing progress notes, uploaded photo log, and complication alerts.",
        agentName: "Recovery AI",
        agentFuncs:
          "Monitors healing from patient-uploaded photos, detects early abnormal swelling or delayed healing, adjusts recovery plans, and auto-schedules follow-ups.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Operations & IT",
        dashboard:
          "System health metrics, encrypted imaging storage status, user access control logs, HIPAA compliance audit trail, and digital consent integrity.",
        agentName: "IT AI",
        agentFuncs:
          "Monitors data pipeline integrity for imaging and consent systems, detects access anomalies, and maintains digital consent legal audit chains.",
      },
    },
    patientJourney: [
      {
        title: "Lead & Consultation",
        detail:
          "Marketing AI pre-screens eligibility and routes the lead. During consultation, Clinical AI presents a 3D imaging simulation of predicted aesthetic outcomes.",
      },
      {
        title: "Medical Evaluation",
        detail:
          "Patient uploads labs and pre-op imaging. Pre-Op AI calculates complication probabilities and flags contraindications for surgeon approval.",
      },
      {
        title: "Procedure Scheduling",
        detail:
          "Operations AI assigns optimal OR slots and staff. Patient receives pre-op instructions and digital consent forms while Anesthesia AI reviews vitals.",
      },
      {
        title: "Surgery Day",
        detail:
          "Assistant AI confirms sterile instrument and implant readiness. Anesthesia AI and Surgery AI track intraoperative vitals and auto-log every event.",
      },
      {
        title: "Post-Op Recovery",
        detail:
          "Patient uploads daily healing photos via the portal. Recovery AI compares progress against healing benchmarks and alerts specialists to any deviations.",
      },
      {
        title: "Long-Term Follow-Up & VIP Program",
        detail:
          "Patient Engagement AI monitors outcomes while VIP AI manages concierge scheduling, exclusive packages, and long-term maintenance milestones.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Suggests procedures with risk scoring, simulates 3D aesthetic outcomes, and auto-drafts recovery plans.",
        interacts: "Anesthesia AI, Recovery AI, Patient Engagement AI",
      },
      {
        name: "Anesthesia AI",
        func: "Recommends anesthesia type and dosage, tracks intraoperative vitals, and auto-documents OR events.",
        interacts: "Clinical AI, Assistant AI",
      },
      {
        name: "Pre-Op AI",
        func: "Analyzes medical history, labs, and imaging to calculate risk scores and procedure suitability.",
        interacts: "Clinical AI, Anesthesia AI",
      },
      {
        name: "Surgery AI",
        func: "Monitors real-time OR status — instruments, implants, vitals, and procedure steps.",
        interacts: "Anesthesia AI, Assistant AI, Clinical AI",
      },
      {
        name: "Recovery AI",
        func: "Tracks post-op healing from patient photos, detects early complication signals, and adjusts plans.",
        interacts: "Clinical AI, Patient Engagement AI",
      },
      {
        name: "VIP AI",
        func: "Predicts VIP patient needs, ensures scheduling priority, and manages concierge bundles.",
        interacts: "Patient Engagement AI, Marketing AI",
      },
    ],
    featureBlocks: [
      {
        title: "OR & Surgical Intelligence",
        items: [
          "Real-time OR slot allocation across surgeons and anesthesiologists",
          "Batch implant tracking with sterility and expiry alerts",
          "Intraoperative vitals & anesthesia event auto-logging",
          "Digital pre-op clearance & surgical escrow tracking",
        ],
      },
      {
        title: "VIP & Concierge CRM",
        items: [
          "Dedicated Platinum VIP patient roster & preference history",
          "Automated pre-op & post-op instruction timelines",
          "Personalized treatment package & maintenance reminders",
          "Real-time patient satisfaction scoring",
        ],
      },
      {
        title: "Photo Recovery Monitoring",
        items: [
          "Daily patient portal photo uploads with timestamped timelines",
          "Recovery AI benchmark healing comparison & swelling alerts",
          "Integrated post-op physiotherapy & hyperbaric care scheduling",
          "Encrypted HIPAA-compliant clinical photography archive",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI Risk Scoring & 3D Simulation",
        desc: "Clinical AI calculates per-patient procedure risk scores and generates predicted 3D aesthetic outcome simulations.",
      },
      {
        title: "Real-Time OR Intelligence",
        desc: "Surgery AI and Anesthesia AI run simultaneously during every procedure — monitoring instruments, implants, and vitals.",
      },
      {
        title: "Photo-Based Recovery Monitoring",
        desc: "Recovery AI analyzes patient-uploaded daily healing photos against benchmarks and flags early complication indicators.",
      },
      {
        title: "Integrated VIP & Marketing Engine",
        desc: "VIP AI manages concierge-level relationships while Marketing AI drives lead conversion and seasonal campaign planning.",
      },
    ],
    simulatorTitle: "Interactive OR Scheduler & VIP Pre-Op Compliance Simulator",
  },

  ent: {
    slug: "ent",
    title: "ENT Clinics",
    shortTitle: "ENT",
    tenantTitle: "ENT Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location otolaryngology software solution — managing ear, nose, throat, audiology, and surgical workflows as an isolated sub-tenant under the Hypocrates SaaS.",
    showcaseDesc:
      "AI-first otolaryngology tenant for diagnostics, audiology, surgical coordination, and chronic ENT care.",
    showcaseFeatures: [
      "Audiometry & Endoscopy Integration",
      "Surgery AI Coordination",
      "Hearing Health Tracking",
    ],
    ctaText: "Explore ENT EHR",
    soloPrice: 149,
    clinicPrice: 389,
    pricingFeatures: [
      "Audiogram visual attachment links",
      "Otoscopic record timeline sync",
      "Specialized nasal/throat terminology",
    ],
    parentSaaSDescription:
      "Hypocrates hosts specialized clinic tenants under one shared framework. The ENT Tenant operates in full isolation while leveraging shared authentication, compliance infrastructure, and multi-specialty patient records.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Separate audiograms, endoscopy records, surgical logs, and billing per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Franchise branches with unified admin override and cross-location analytics.",
      },
      {
        label: "Cross-Tenant Patient Records",
        text: "Patients visiting multiple specialties share a unified profile with per-tenant access control.",
      },
    ],
    tier1Cards: [
      {
        title: "Admin Control Portal",
        desc: "Single login admin override to manage clinic settings, staff access, service menus, and consolidated ENT metrics across locations.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates revenue, procedure volumes (audiology, surgery, endoscopy), active appointments, and staff efficiency across the franchise.",
      },
      {
        title: "Operations AI",
        desc: "Franchise-wide predictive engine that forecasts patient load, optimizes cross-branch staffing, and highlights resource needs.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate audiograms, endoscopy images, surgical records, and billing — zero data bleed across locations.",
        webDesc: "Public portal with AI booking chatbot, ENT specialist profiles, and online symptom intake forms.",
        terminals: [
          "ENT Doctor Terminal",
          "Audiologist Terminal",
          "Nurse Terminal",
          "Receptionist Terminal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "Complete data isolation with HIPAA-compliant storage, encrypted imaging, and full audit trail per location.",
        webDesc: "Synced calendar, surgical and audiology services, and self-check-in patient intake portal.",
        terminals: [
          "ENT Doctor Terminal",
          "Audiologist Terminal",
          "Surgical Coordinator",
          "Finance Terminal",
        ],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "Diagnostic AI",
      "Scheduler AI",
      "Surgery AI",
      "Assistant AI",
      "Operations AI",
      "Finance AI",
      "IT AI",
    ],
    orchestratorNote:
      "Diagnostic AI evaluates audiograms in real time and alerts Clinical AI, which drafts ENT diagnoses and coordinates with Surgery AI for OR allocation when surgical intervention is required.",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Surgical",
        roles: ["entspecialist", "audiologist", "nurse", "surgicalcoordinator"],
      },
      {
        id: "frontoffice",
        name: "Front Desk & Billing",
        roles: ["receptionist", "finance"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "entspecialist",
    rolesData: {
      manager: {
        title: "Clinic Manager / Admin",
        category: "Management & Admin",
        dashboard:
          "Multi-location revenue overview, patient flow analytics, staff performance metrics, occupancy per location, and ENT procedure volume trends.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts peak patient hours, optimizes staff scheduling by procedure load, forecasts monthly revenue per branch, and flags overbooked slots.",
      },
      entspecialist: {
        title: "ENT Specialist / Doctor",
        category: "Clinical Staff",
        dashboard:
          "Daily patient schedule, full patient history with ENT-specific records, audiograms, endoscopy/laryngoscopy images, treatment plans, and surgery schedules.",
        agentName: "Clinical AI",
        agentFuncs:
          "Analyzes audiograms and endoscopy images for abnormalities, suggests ENT diagnoses (sinusitis, otitis, sleep apnea), and flags urgent findings.",
      },
      audiologist: {
        title: "Audiologist",
        category: "Clinical Staff",
        dashboard:
          "Hearing test scheduling, audiometry and tympanometry result logs, patient hearing improvement tracking over time, and hearing aid prescriptions.",
        agentName: "Diagnostic AI",
        agentFuncs:
          "Analyzes audiogram patterns for early hearing loss detection, suggests hearing aid options, flags hearing decline, and sends reassessment reminders.",
      },
      nurse: {
        title: "Nurse / Medical Assistant",
        category: "Clinical Support",
        dashboard:
          "Room preparation checklists, pre-op and post-op procedure guides, patient vitals monitoring, and instrument readiness tracker.",
        agentName: "Assistant AI",
        agentFuncs:
          "Tracks patient prep status, monitors vitals for abnormal readings, triggers instrument sterilization reminders, and guides exam room sequencing.",
      },
      surgicalcoordinator: {
        title: "Surgical Coordinator",
        category: "Clinical Support",
        dashboard:
          "Operating room scheduling, instrument and equipment tracker, surgery outcome logs, pre-op checklist status, and post-op follow-up schedule.",
        agentName: "Surgery AI",
        agentFuncs:
          "Predicts accurate surgery durations, suggests optimal OR allocation, flags un-sterilized instruments before surgery, and tracks post-op outcomes.",
      },
      receptionist: {
        title: "Receptionist / Front Desk",
        category: "Front Office",
        dashboard:
          "Appointment calendar with provider and procedure filters, live check-in queue, insurance verification forms, and cancellation alerts.",
        agentName: "Scheduler AI",
        agentFuncs:
          "Optimizes booking slots to minimize wait times, auto-assigns providers, detects double-bookings, validates insurance, and sends SMS/email reminders.",
      },
      finance: {
        title: "Billing / Accountant",
        category: "Finance & Operations",
        dashboard:
          "Invoice and payment tracking, insurance claims management, revenue trend graphs per location, and claim rejection logs.",
        agentName: "Finance AI",
        agentFuncs:
          "Detects missed or underbilled charges, automates insurance pre-authorization submissions, forecasts monthly revenue, and flags claim discrepancies.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Operations & IT",
        dashboard:
          "System health metrics, encrypted storage status, access control logs, HIPAA audit trail, and ENT device integration monitoring.",
        agentName: "IT AI",
        agentFuncs:
          "Runs continuous diagnostics, detects suspicious login attempts, and ensures audiometer and endoscopy integrations remain connected.",
      },
    },
    patientJourney: [
      {
        title: "Booking & Intake",
        detail:
          "Scheduler AI ensures no overbooking, selects the optimal provider slot, and triggers pre-populated ENT symptom intake forms.",
      },
      {
        title: "Diagnostics & Tests",
        detail:
          "Patient undergoes audiometry, tympanometry, or endoscopy. Diagnostic AI analyzes audiograms in real time and notifies the ENT specialist.",
      },
      {
        title: "Consultation & Treatment Plan",
        detail:
          "ENT Specialist reviews Clinical AI diagnostic suggestions (sinusitis, hearing loss, tonsillitis, sleep apnea) and approves the treatment plan in one click.",
      },
      {
        title: "Surgical Planning",
        detail:
          "If surgery is required, Surgery AI predicts procedure duration, assigns an optimal OR slot, and generates a pre-op instrument checklist.",
      },
      {
        title: "Billing & Insurance",
        detail:
          "Finance AI validates procedural charges, submits insurance pre-authorizations, and flags claim discrepancies before submission.",
      },
      {
        title: "Follow-Up & Monitoring",
        detail:
          "Diagnostic AI tracks hearing thresholds between sessions and generates reassessment alerts for chronic ENT conditions.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Analyzes audiograms and endoscopy images, suggests ENT diagnoses, and proposes treatment plans.",
        interacts: "Diagnostic AI, Finance AI, Reception AI",
      },
      {
        name: "Diagnostic AI",
        func: "Evaluates audiometry results, detects early hearing loss, and recommends hearing aid profiles.",
        interacts: "Clinical AI, Patient Engagement AI",
      },
      {
        name: "Scheduler AI",
        func: "Optimizes appointment booking, prevents double-bookings, and auto-assigns specialists.",
        interacts: "Operations AI, Clinical AI",
      },
      {
        name: "Surgery AI",
        func: "Predicts surgery durations, allocates OR rooms, and flags missing instruments.",
        interacts: "Assistant AI, Clinical AI",
      },
      {
        name: "Finance AI",
        func: "Detects missed charges, automates pre-approvals, and flags claim rejections.",
        interacts: "Clinical AI, Scheduler AI",
      },
      {
        name: "IT AI",
        func: "Monitors audiometer and endoscopy device feeds while maintaining HIPAA compliance.",
        interacts: "All staff dashboards",
      },
    ],
    featureBlocks: [
      {
        title: "Audiology & Endoscopy Integration",
        items: [
          "Direct audiometry & tympanometry threshold plotting",
          "4000Hz acoustic notch & sensorineural loss pattern detection",
          "Endoscopy & laryngoscopy imaging timeline storage",
          "Hearing aid prescription & longitudinal hearing logs",
        ],
      },
      {
        title: "Ambient ENT Voice Dictation",
        items: [
          "Speak naturally and draft structured ENT clinical notes",
          "Automatic ICD-10 & CPT coding for sinus, otology & throat visits",
          "Zero-retention audio pipeline with instant deletion after approval",
          "One-click bi-directional writeback to clinic records",
        ],
      },
      {
        title: "Surgical Coordination",
        items: [
          "AI-predicted OR durations based on ENT procedure complexity",
          "Automated sterile instrument & scope readiness checklists",
          "Insurance pre-authorization scrubbing before surgical dates",
          "Post-op recovery milestone & follow-up reminders",
        ],
      },
    ],
    differentiators: [
      {
        title: "ENT Diagnostic Integration",
        desc: "Audiometry, tympanometry, and endoscopy results feed directly into the platform for Clinical AI pre-review.",
      },
      {
        title: "Surgical Coordination Intelligence",
        desc: "Surgery AI predicts procedure durations, optimizes OR allocation, and generates pre-op checklists.",
      },
      {
        title: "Hearing Health Tracking",
        desc: "Diagnostic AI tracks patient audiogram history over time, detects early hearing loss patterns, and recommends hearing aid options.",
      },
      {
        title: "Multi-Location Franchise View",
        desc: "Clinic owners compare patient flow, procedure volume, and revenue across all ENT branches with Operations AI.",
      },
    ],
    simulatorTitle: "Interactive Diagnostic Audiogram & AI Voice Dictation Simulator",
  },

  nutrition: {
    slug: "nutrition",
    title: "Nutrition Clinics",
    shortTitle: "Nutrition",
    tenantTitle: "Nutrition Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location nutrition and dietary health solution — managing consultations, personalized meal planning, supplement tracking, and wearable integration.",
    showcaseDesc:
      "AI-first dietary health tenant for meal planning, wearable integration, supplement management, and virtual coaching.",
    showcaseFeatures: [
      "AI Personalized Meal Planning",
      "Real-Time Virtual Coaching",
      "Wearable & Lab Integration",
    ],
    ctaText: "Explore Nutrition EHR",
    soloPrice: 129,
    clinicPrice: 329,
    pricingFeatures: [
      "Meal plan and macro intake mapping",
      "Body composition chart updates",
      "Caloric intake metric analysis",
    ],
    parentSaaSDescription:
      "Hypocrates hosts specialized clinic tenants under one shared framework. The Nutrition Tenant operates in full isolation while accepting cross-specialty referrals from eye centers, ENT, dermatology, and physiotherapy.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Separate meal plans, dietary logs, lab results, supplement records, and billing per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Franchise branches with unified admin override, KPI comparison, and centralized AI models.",
      },
      {
        label: "Cross-Specialty Referrals",
        text: "Receive referrals from ophthalmology, ENT, or dermatology and refer to physiotherapy.",
      },
    ],
    tier1Cards: [
      {
        title: "Admin Control Portal",
        desc: "Single login admin override to manage staff access, supplement menus, meal program rollouts, and consolidated metrics.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates consultation revenue, supplement sales, patient adherence rates, and meal plan success metrics franchise-wide.",
      },
      {
        title: "Operations AI",
        desc: "Forecasts consultation load, optimizes cross-branch staffing, monitors supplement inventory, and compares outcome metrics.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate meal plans, dietary logs, lab results, supplement prescriptions, and billing — zero data bleed.",
        webDesc: "Public portal with AI booking chatbot, nutritionist profiles, virtual consults, and health intake forms.",
        terminals: [
          "Nutritionist Terminal",
          "Receptionist Terminal",
          "Wellness Coach Terminal",
          "Patient App Portal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "HIPAA-compliant storage for all dietary health records, lab integrations, and supplement data.",
        webDesc: "Synced consultation calendar, supplement store, group wellness booking, and patient progress portal.",
        terminals: [
          "Nutritionist Terminal",
          "Dietitian Assistant",
          "Wellness Coach Terminal",
          "Billing Terminal",
        ],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "Virtual Coaching AI",
      "Wellness AI",
      "Assistant AI",
      "Operations AI",
      "IT AI",
    ],
    orchestratorNote:
      "Clinical AI ingests lab results and wearable biometrics to craft baseline meal plans, while Virtual Coaching AI guides patients daily and alerts clinicians to nutritional deviations.",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Wellness",
        roles: ["nutritionist", "dietitianassistant", "wellnesscoach"],
      },
      {
        id: "frontoffice",
        name: "Front Desk & Operations",
        roles: ["receptionist"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "nutritionist",
    rolesData: {
      manager: {
        title: "Clinic Manager / Admin",
        category: "Management & Admin",
        dashboard:
          "Multi-location overview for nutrition branches, staff schedules, revenue and billing analytics, and supplement/meal-kit inventory levels.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts peak consultation hours, forecasts supplement sales revenue, generates low-inventory alerts, and compares branch outcome metrics.",
      },
      nutritionist: {
        title: "Nutritionist / Dietitian",
        category: "Clinical Staff",
        dashboard:
          "Individual patient profiles with lab results (BMI, blood markers, vitamin levels), meal plan builder, supplement management, and macro progress charts.",
        agentName: "Clinical AI",
        agentFuncs:
          "Generates personalized meal plans from health goals and labs, flags nutrient deficiencies, predicts adherence, and integrates wearable activity data.",
      },
      dietitianassistant: {
        title: "Dietitian Assistant / Intern",
        category: "Clinical Staff",
        dashboard:
          "Assigned patient list with supervised consultation notes, meal plan prep checklists, lab summaries, and daily task queue.",
        agentName: "Clinical AI",
        agentFuncs:
          "Auto-generates meal preparation guides, flags patients requiring senior review, and highlights logged patient data that deviates from prescribed plans.",
      },
      wellnesscoach: {
        title: "Fitness / Wellness Coach",
        category: "Clinical & Wellness",
        dashboard:
          "Patient fitness and activity logs integrated with dietary plans, exercise session schedule, and wearable data sync panel.",
        agentName: "Wellness AI",
        agentFuncs:
          "Integrates activity data from wearables for holistic recommendations, alerts nutritionists on compliance dips, and coordinates activity adjustments.",
      },
      receptionist: {
        title: "Receptionist / Front Desk",
        category: "Front Office",
        dashboard:
          "Appointment calendar, patient intake and onboarding queue, billing and insurance claim management, and follow-up reminders tracker.",
        agentName: "Assistant AI",
        agentFuncs:
          "Auto-schedules appointments, sends automated reminders for consults and supplement intake, flags cancellations, and verifies insurance coverage.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Operations & IT",
        dashboard:
          "System health metrics, encrypted data storage status, access control logs, HIPAA audit trail, and Apple Health/Fitbit/Garmin integration status.",
        agentName: "IT AI",
        agentFuncs:
          "Monitors connectivity integrity for all wearable and health app integrations, detects security anomalies, and ensures HIPAA/GDPR compliance.",
      },
    },
    patientJourney: [
      {
        title: "Registration & Health Assessment",
        detail:
          "Patient completes health intake with medical history, allergies, dietary preferences, and goals. Clinical AI prepares a baseline health profile.",
      },
      {
        title: "Consultation Booking",
        detail:
          "Assistant AI suggests optimal slots and pulls existing lab results and wearable data into the nutritionist dashboard before the visit.",
      },
      {
        title: "Consultation & Baseline Plan",
        detail:
          "Nutritionist approves Clinical AI's personalized meal plan with macro targets and supplements, published instantly to the patient portal.",
      },
      {
        title: "Meal Tracking & Daily Coaching",
        detail:
          "Patient logs meals and hydration. Virtual Coaching AI analyzes nutrition in real time and sends motivational nudges and micro-adjustments.",
      },
      {
        title: "Follow-Up & Plan Adjustment",
        detail:
          "Clinical AI highlights emerging deficiencies or plateaus before follow-up visits and suggests plan modifications synced with Wellness Coach.",
      },
      {
        title: "Reporting & Long-Term Monitoring",
        detail:
          "Automated supplement renewals and progress dashboards track calorie trends, macro balance, weight trajectory, and lab improvements.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Analyzes lab results, dietary logs, and wearable data to generate personalized meal plans and flag deficiencies.",
        interacts: "Virtual Coaching AI, Operations AI, Assistant AI",
      },
      {
        name: "Virtual Coaching AI",
        func: "Analyzes daily meal logs, sends motivational nudges, and delivers real-time macro micro-adjustments.",
        interacts: "Clinical AI, Patient Portal",
      },
      {
        name: "Wellness AI",
        func: "Integrates wearable and fitness activity data and aligns exercise plans with dietary goals.",
        interacts: "Clinical AI, Operations AI",
      },
      {
        name: "Assistant AI",
        func: "Auto-schedules appointments, sends supplement reminders, and assists with insurance verification.",
        interacts: "Operations AI, Receptionist dashboard",
      },
      {
        name: "Operations AI",
        func: "Tracks supplement inventory across branches and compares adherence and patient outcome metrics.",
        interacts: "All staff dashboards",
      },
    ],
    featureBlocks: [
      {
        title: "Dynamic Meal & Macro Planning",
        items: [
          "AI-calculated caloric, protein, carb & fat targets per lab profile",
          "Glycemic load forecasting & allergy-safe recipe suggestions",
          "Instant publishing to patient mobile & web portals",
          "Micro-adjustment nudges based on daily food logs",
        ],
      },
      {
        title: "Wearable & Lab Synchronization",
        items: [
          "Bi-directional sync with Apple HealthKit, Fitbit, Garmin & Dexcom CGM",
          "Automated hydration, step count & sleep correlation",
          "Vitamin, lipid & metabolic lab panel tracking",
          "Holistic diet-fitness alignment with Wellness AI",
        ],
      },
      {
        title: "Supplement & Inventory Operations",
        items: [
          "Supplement prescription tracking & automated refill reminders",
          "Predictive branch inventory alerts for clinical supplements",
          "Cross-specialty referral workflows (Eye, ENT, Physio)",
          "Compliance dashboards for dietitians & coaches",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI-Personalized Meal Planning",
        desc: "Clinical AI generates fully individualized meal plans from lab data, allergies, goals, and lifestyle — updated dynamically.",
      },
      {
        title: "Real-Time Virtual Coaching",
        desc: "Virtual Coaching AI acts as a 24/7 dietary coach — logging meals, sending nudges, and delivering micro-adjustments.",
      },
      {
        title: "Wearable & Health App Integration",
        desc: "Wellness AI ingests data from Apple Health, Fitbit, and Garmin — combining biometrics with dietary logs.",
      },
      {
        title: "Multi-Location Supplement Management",
        desc: "Operations AI tracks supplement stock across all branches and predicts reorder needs based on patient prescriptions.",
      },
    ],
    simulatorTitle: "Interactive Meal Macro Builder & Glycemic Load Simulator",
  },

  physiotherapy: {
    slug: "physiotherapy",
    title: "Physiotherapy",
    shortTitle: "Physiotherapy",
    tenantTitle: "Physiotherapy Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location physiotherapy and rehabilitation solution — managing therapy sessions, personalized exercise programs, equipment tracking, and long-term recovery monitoring.",
    showcaseDesc:
      "AI-first rehabilitation tenant for therapy planning, home exercise adherence, ROM tracking, and equipment intelligence.",
    showcaseFeatures: [
      "AI Therapy Optimization",
      "Home Exercise & Adherence Tracking",
      "Equipment & Room Intelligence",
    ],
    ctaText: "Explore Rehab EHR",
    soloPrice: 139,
    clinicPrice: 349,
    pricingFeatures: [
      "Range of motion measurement tracking",
      "Custom exercise routine presets",
      "Musculoskeletal chart notes",
    ],
    parentSaaSDescription:
      "Hypocrates hosts specialized clinic tenants under one shared framework. The Physiotherapy Tenant operates in full isolation while receiving referrals from ENT, nutrition, plastic surgery, and orthopaedic teams.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Separate patient rehab records, session notes, exercise plans, equipment logs, and billing per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Franchise branches with unified admin override, comparative KPIs, and clinic-specific branding.",
      },
      {
        label: "Cross-Specialty Referrals",
        text: "Receives post-op and ENT/orthopaedic referrals and refers to nutrition for diet-aided recovery.",
      },
    ],
    tier1Cards: [
      {
        title: "Admin Control Portal",
        desc: "Single login admin override to manage staff access, service menus, therapy room configurations, and consolidated metrics.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates session revenue, patient retention rates, therapy completion metrics, equipment usage, and staff productivity.",
      },
      {
        title: "Operations AI",
        desc: "Forecasts patient demand, optimizes cross-branch therapist scheduling, monitors equipment health, and highlights recovery trends.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate patient rehab records, session notes, exercise plans, equipment logs, and billing — zero data bleed.",
        webDesc: "Public portal with AI booking chatbot, physiotherapist profiles, therapy menu, and online intake forms.",
        terminals: [
          "Physiotherapist Terminal",
          "Assistant Terminal",
          "Receptionist Terminal",
          "Patient App Portal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "HIPAA-compliant storage for all rehabilitation records, session data, exercise logs, and insurance claims.",
        webDesc: "Synced therapy calendar, equipment and room availability, online package booking, and home exercise portal.",
        terminals: [
          "Physiotherapist Terminal",
          "Rehab Tech Terminal",
          "Receptionist Terminal",
          "Billing Terminal",
        ],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "Patient AI",
      "Scheduler AI",
      "Assistant AI",
      "Operations AI",
      "Equipment AI",
      "IT AI",
    ],
    orchestratorNote:
      "Clinical AI adjusts rehabilitation progressions from ROM and pain scores while Patient AI tracks Home Exercise Program (HEP) adherence and Equipment AI schedules therapy room gear.",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Rehab",
        roles: ["physiotherapist", "assistant"],
      },
      {
        id: "frontoffice",
        name: "Front Desk & Billing",
        roles: ["receptionist"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "physiotherapist",
    rolesData: {
      manager: {
        title: "Clinic Manager / Admin",
        category: "Management & Admin",
        dashboard:
          "Multi-location overview for physiotherapy branches, staff productivity metrics, revenue summaries, room/equipment availability, and Operations AI forecasts.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts high-demand therapy periods, forecasts cancellation spikes, compares branch retention, and monitors equipment usage patterns to preempt downtime.",
      },
      physiotherapist: {
        title: "Physiotherapist",
        category: "Clinical Staff",
        dashboard:
          "Patient profiles with injury history, session notes editor, exercise plan builder with video guides, and range-of-motion & pain-level trend charts.",
        agentName: "Clinical AI",
        agentFuncs:
          "Suggests personalized exercise programs by injury and recovery stage, detects regression, recommends plan adjustments, and auto-drafts session notes.",
      },
      assistant: {
        title: "Assistant / Rehab Technician",
        category: "Clinical Support",
        dashboard:
          "Therapy room availability and scheduling panel, equipment readiness tracker, patient check-in status, and maintenance alert log.",
        agentName: "Assistant AI",
        agentFuncs:
          "Manages therapy room prep and equipment assignment per session, flags maintenance needs, and predicts high-usage equipment demand.",
      },
      receptionist: {
        title: "Receptionist / Front Desk",
        category: "Front Office",
        dashboard:
          "Appointment booking and rescheduling calendar, check-in/check-out queue, billing and insurance claims overview, and cancellation log.",
        agentName: "Scheduler AI",
        agentFuncs:
          "Auto-suggests optimal slots by therapist availability and priority, fills cancellations from waitlists, sends reminders, and validates insurance.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Operations & IT",
        dashboard:
          "System health metrics, encrypted storage status, access control logs, HIPAA audit trail, and wearable/movement device integration monitoring.",
        agentName: "IT AI",
        agentFuncs:
          "Monitors movement-tracking device integrations, detects security anomalies, and ensures HIPAA/GDPR compliance for all rehab records.",
      },
    },
    patientJourney: [
      {
        title: "Registration & Health Assessment",
        detail:
          "Patient submits injury history, pain levels, and mobility limitations. Clinical AI flags risk factors before the first session.",
      },
      {
        title: "Appointment Booking",
        detail:
          "Scheduler AI matches therapist specialty and availability, sending instant booking confirmations and pre-session questionnaires.",
      },
      {
        title: "Therapy Session",
        detail:
          "Physiotherapist logs ROM measurements and pain trends while Clinical AI recommends exercise progressions and drafts session notes.",
      },
      {
        title: "Post-Session & Home Exercise",
        detail:
          "Patient receives video-guided Home Exercise Programs (HEP). Patient AI tracks daily adherence and pain feedback.",
      },
      {
        title: "Billing & Insurance",
        detail:
          "Per-session or package billing runs automatically with Scheduler AI tracking pre-authorizations and payment reminders.",
      },
      {
        title: "Progress Review & Discharge Planning",
        detail:
          "Clinical AI generates longitudinal mobility and pain reports to guide discharge timing and 30/60/90-day check-in reminders.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Suggests personalized exercise programs, detects recovery regression, and auto-drafts session notes.",
        interacts: "Patient AI, Operations AI, Scheduler AI",
      },
      {
        name: "Patient AI",
        func: "Delivers home exercise plans with video guides, sends adherence reminders, and logs pain feedback.",
        interacts: "Clinical AI, Scheduler AI",
      },
      {
        name: "Scheduler AI",
        func: "Auto-suggests slots, fills cancellations from waitlists, and validates insurance at intake.",
        interacts: "Operations AI, Clinical AI",
      },
      {
        name: "Assistant AI",
        func: "Manages therapy room prep and equipment assignment while flagging maintenance needs.",
        interacts: "Operations AI, Clinical AI",
      },
      {
        name: "Equipment AI",
        func: "Tracks therapy equipment usage cycles and predicts maintenance before session conflicts arise.",
        interacts: "Assistant AI, Operations AI",
      },
    ],
    featureBlocks: [
      {
        title: "ROM & Pain Analytics",
        items: [
          "Visual joint Range of Motion (ROM) flexion tracking",
          "Pain scale trend monitoring with threshold alerts",
          "AI recovery trajectory & regression detection",
          "Musculoskeletal charting templates & SOAP auto-drafts",
        ],
      },
      {
        title: "Home Exercise Programs (HEP)",
        items: [
          "Video-guided workout delivery straight to patient portal",
          "Daily adherence & rep completion monitoring",
          "Automated motivational reminders via SMS & mobile app",
          "Pre-visit adherence summaries for therapists",
        ],
      },
      {
        title: "Room & Equipment Intelligence",
        items: [
          "Real-time therapy room & rehab equipment scheduling",
          "Usage cycle tracking & predictive maintenance alerts",
          "Multi-location therapist utilization comparisons",
          "Automated package & insurance claim synchronization",
        ],
      },
    ],
    differentiators: [
      {
        title: "AI-Driven Therapy Optimization",
        desc: "Clinical AI continuously monitors recovery trajectories and recommends exercise plan adjustments proactively.",
      },
      {
        title: "Home Exercise Adherence Monitoring",
        desc: "Patient AI delivers video-guided home exercise programs and tracks daily compliance before each follow-up.",
      },
      {
        title: "Therapy Room & Equipment Intelligence",
        desc: "Assistant AI tracks room availability while Equipment AI predicts maintenance needs before breakdowns occur.",
      },
      {
        title: "Multi-Location Recovery Analytics",
        desc: "Operations AI compares patient retention, session completion rates, and recovery outcomes across all branches.",
      },
    ],
    simulatorTitle: "Interactive Joint ROM & Rehab Pain Compliance Simulator",
  },

  "eye-center": {
    slug: "eye-center",
    title: "Eye Centers",
    shortTitle: "Eye Centers",
    tenantTitle: "Eye Center Clinic Tenant",
    heroSubtitle:
      "An AI-first, multi-location ophthalmology and optometry solution — managing diagnostics, surgical coordination, optical dispensing, and long-term vision monitoring.",
    showcaseDesc:
      "AI-first ophthalmology and optometry tenant for OCT imaging, surgical coordination, and optical dispensing.",
    showcaseFeatures: [
      "OCT & Retinal Imaging AI",
      "Surgical Planning & Recovery",
      "Optical Dispensing Workflow",
    ],
    ctaText: "Explore Optometry EHR",
    soloPrice: 159,
    clinicPrice: 419,
    pricingFeatures: [
      "Refractive prescription chart templates",
      "Visual acuity test record linking",
      "Ophthalmoscopy text shorthand",
    ],
    parentSaaSDescription:
      "Hypocrates hosts specialized clinic tenants under one shared framework. The Eye Center Tenant operates in full isolation while leveraging shared auth, compliance, and cross-specialty referral pathways.",
    subTenantHighlights: [
      {
        label: "Isolated Data Scopes",
        text: "Separate OCT imaging records, prescriptions, surgical logs, and optical billing per location.",
      },
      {
        label: "Multi-Location Support",
        text: "Franchise branches with unified admin override, KPI comparison, and cross-location analytics.",
      },
      {
        label: "Cross-Specialty Referrals",
        text: "Optometrists refer directly to ophthalmologists, or to nutrition and physiotherapy for systemic conditions.",
      },
    ],
    tier1Cards: [
      {
        title: "Admin Control Portal",
        desc: "Single login admin override to manage staff access, service menus, equipment inventory, and consolidated performance metrics.",
      },
      {
        title: "Consolidated Analytics",
        desc: "Aggregates revenue, procedure volumes (surgery, optometry, optical dispensing), equipment usage, and patient satisfaction scores.",
      },
      {
        title: "Operations AI",
        desc: "Forecasts patient demand, optimizes cross-branch staffing, monitors imaging device health, and schedules OCT service cycles.",
      },
    ],
    branches: [
      {
        name: "Location 1 (Branch A)",
        dbDesc: "Separate OCT scans, retinal images, prescriptions, surgical records, and optical orders — zero data bleed.",
        webDesc: "Public portal with AI booking chatbot, ophthalmologist profiles, optometry services, and intake forms.",
        terminals: [
          "Ophthalmologist Terminal",
          "Optometrist Terminal",
          "Receptionist Terminal",
          "Optician Terminal",
        ],
      },
      {
        name: "Location 2 (Branch B)",
        dbDesc: "HIPAA-compliant encrypted storage for all imaging data, prescriptions, and surgical outcomes with audit trail.",
        webDesc: "Synced calendar, surgical and optometry services, optical shop inventory portal, and patient check-in.",
        terminals: [
          "Ophthalmologist Terminal",
          "Optometrist Terminal",
          "Surgery Nurse Terminal",
          "Optician Terminal",
        ],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "Assistant AI",
      "Surgical AI",
      "Lab AI",
      "Reception AI",
      "Optician AI",
      "Operations AI",
      "IT AI",
    ],
    orchestratorNote:
      "Clinical AI evaluates OCT and retinal scans for early glaucoma or retinopathy, Assistant AI syncs refraction tests, and Optician AI recommends frame-lens combinations and tracks optical stock.",
    categories: [
      {
        id: "clinical",
        name: "Clinical & Surgical",
        roles: ["ophthalmologist", "optometrist", "nurse", "labtech"],
      },
      {
        id: "frontoffice",
        name: "Front Desk & Optical",
        roles: ["receptionist", "optician"],
      },
      {
        id: "management",
        name: "Management & Ops",
        roles: ["manager", "itadmin"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "ophthalmologist",
    rolesData: {
      manager: {
        title: "Clinic Manager / Admin",
        category: "Management & Admin",
        dashboard:
          "Multi-location overview of eye center branches, staff KPIs, revenue summaries, equipment inventory (OCT, slit lamps, fundus cameras), and maintenance alerts.",
        agentName: "Operations AI",
        agentFuncs:
          "Predicts high-demand days, forecasts revenue trends, alerts for OCT maintenance cycles, and recommends resource reallocation across locations.",
      },
      ophthalmologist: {
        title: "Ophthalmologist / Eye Doctor",
        category: "Clinical Staff",
        dashboard:
          "Daily patient list, diagnostic imaging viewer (retina scans, corneal topography, OCT), surgery planning dashboard with pre-op checklists, and treatment plans.",
        agentName: "Clinical AI",
        agentFuncs:
          "Analyzes retinal images and OCT scans for early glaucoma, cataracts, macular degeneration, and diabetic retinopathy, and flags urgent cases.",
      },
      optometrist: {
        title: "Optometrist",
        category: "Clinical Staff",
        dashboard:
          "Visual acuity exam scheduling, refraction test records, lens prescription management, longitudinal eye health tracking, and glasses/contact history.",
        agentName: "Assistant AI",
        agentFuncs:
          "Suggests lens types by prescription and lifestyle, identifies vision anomalies during routine exams, predicts future vision changes, and recommends referrals.",
      },
      nurse: {
        title: "Surgery Assistant / Nurse",
        category: "Clinical Support",
        dashboard:
          "Surgery preparation checklists with instrument tracking, real-time surgery status monitoring, patient vitals display, and post-op care notes.",
        agentName: "Surgical AI",
        agentFuncs:
          "Alerts on missing or un-sterilized instruments before surgery, monitors intraoperative vitals, and predicts post-operative complications.",
      },
      labtech: {
        title: "Lab Technician",
        category: "Clinical Support",
        dashboard:
          "Lab test queue (tear fluid analysis, corneal scans, blood work), result upload linking, pending vs completed tracker, and critical result log.",
        agentName: "Lab AI",
        agentFuncs:
          "Auto-analyzes tear fluid and corneal scan results, pushes urgent alerts to the ophthalmologist dashboard, and recommends follow-on tests.",
      },
      receptionist: {
        title: "Receptionist / Front Desk",
        category: "Front Office",
        dashboard:
          "Appointment calendar with doctor and procedure filters, check-in/check-out queue, billing & insurance tracker, and wait time monitor.",
        agentName: "Reception AI",
        agentFuncs:
          "Auto-suggests optimal slots, predicts no-shows using attendance patterns, sends automated SMS/email reminders, and minimizes waiting room bottlenecks.",
      },
      optician: {
        title: "Optician / Glasses Specialist",
        category: "Front Office",
        dashboard:
          "Lens order queue and prescription fulfillment status, frame and lens inventory management, patient fitting notes, and delivery tracking.",
        agentName: "Optician AI",
        agentFuncs:
          "Suggests optimal frame-lens combinations by prescription power and face profile, predicts frame/lens reorder needs, and tracks dispensing satisfaction.",
      },
      itadmin: {
        title: "IT Admin / SysAdmin",
        category: "Operations & IT",
        dashboard:
          "System health metrics, encrypted imaging storage status, access control logs, HIPAA audit, and OCT/fundus camera/slit lamp integration monitoring.",
        agentName: "IT AI",
        agentFuncs:
          "Monitors diagnostic imaging device data feeds, detects security anomalies, ensures HIPAA/GDPR compliance, and prevents device downtime.",
      },
    },
    patientJourney: [
      {
        title: "Appointment Booking & Pre-Check",
        detail:
          "Reception AI recommends optimal slots and sends a pre-check questionnaire capturing vision history and existing lens prescriptions.",
      },
      {
        title: "Check-In & Initial Assessment",
        detail:
          "Optometrist performs visual acuity and refraction tests while Assistant AI surfaces early anomaly flags in real time.",
      },
      {
        title: "Diagnostic Imaging & Lab Tests",
        detail:
          "Patient undergoes OCT scans, retinal imaging, and corneal topography. Clinical AI flags early glaucoma, cataracts, or retinopathy instantly.",
      },
      {
        title: "Treatment Planning",
        detail:
          "Ophthalmologist reviews Clinical AI findings and approves medication, corrective lenses, or surgical plans shared directly to the patient portal.",
      },
      {
        title: "Surgery & Post-Op Monitoring",
        detail:
          "Surgical AI tracks instrument readiness and intraoperative vitals while post-op healing is benchmarked automatically.",
      },
      {
        title: "Follow-Up, Lens & Long-Term Monitoring",
        detail:
          "Optician AI streamlines lens dispensing while Clinical AI tracks longitudinal disease progression and triggers check-up reminders.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Analyzes OCT and retinal scans for glaucoma, cataracts, macular degeneration, and diabetic retinopathy.",
        interacts: "Lab AI, Surgical AI, Reception AI",
      },
      {
        name: "Assistant AI",
        func: "Evaluates visual acuity and refraction data, suggests lens types, and flags anomalies for specialist review.",
        interacts: "Clinical AI, Optician AI",
      },
      {
        name: "Surgical AI",
        func: "Tracks instrument readiness, monitors intraoperative vitals, and automates recovery deviation alerts.",
        interacts: "Clinical AI, Assistant AI",
      },
      {
        name: "Optician AI",
        func: "Suggests frame-lens combinations by prescription and style while predicting optical inventory needs.",
        interacts: "Assistant AI, Operations AI",
      },
      {
        name: "Operations AI",
        func: "Forecasts patient volume per location and alerts on OCT/slit-lamp maintenance cycles.",
        interacts: "All staff dashboards",
      },
    ],
    featureBlocks: [
      {
        title: "OCT & Retinal Imaging AI",
        items: [
          "Instant retinal scan, corneal topography & OCT analysis",
          "Early screening flags for glaucoma, cataracts & retinopathy",
          "Longitudinal visual acuity & intraocular pressure tracking",
          "Encrypted DICOM/PACS imaging archive per branch",
        ],
      },
      {
        title: "Optometry & Optical Dispensing",
        items: [
          "Interactive Tumbling E visual acuity & autorefractor logging",
          "Diopter sphere/cylinder prescription templates & autosave",
          "Frame & contact lens stock management with reorder triggers",
          "End-to-end lens order fulfillment & fitting history",
        ],
      },
      {
        title: "Ophthalmic Surgery & Recovery",
        items: [
          "Pre-op surgical clearance & instrument readiness verification",
          "Intraoperative vitals monitoring & auto-charting",
          "Post-op recovery milestone tracking & alert escalations",
          "Cross-specialty referrals for systemic eye conditions",
        ],
      },
    ],
    differentiators: [
      {
        title: "Real-Time Ophthalmic AI Imaging",
        desc: "Clinical AI analyzes OCT scans, retinal images, and corneal topography on upload before the consultation begins.",
      },
      {
        title: "Full Optical Dispensing Workflow",
        desc: "From lens prescription to frame selection to order fulfillment — Optician AI unifies optometry and retail optics.",
      },
      {
        title: "Predictive Disease Progression",
        desc: "Clinical AI tracks longitudinal vision data to predict progression risk of glaucoma, retinopathy, and macular degeneration.",
      },
      {
        title: "Equipment & Maintenance Intelligence",
        desc: "Operations AI tracks OCT machine, slit lamp, and fundus camera usage cycles to prevent unexpected downtime.",
      },
    ],
    simulatorTitle: "Interactive Optometry Acuity Test & Autorefractor Simulator",
  },

  "hair-transplant": {
    slug: "hair-transplant",
    title: "Hair Transplant Clinics",
    shortTitle: "Hair Transplant",
    tenantTitle: "Hair Transplant Clinic Tenant",
    heroSubtitle:
      "An AI-first multi-location restoration platform featuring direct FUE graft planning, PRP therapy scheduling, post-op follow-ups, multi-currency Financa (€1 = 116.5L), and an integrated AI Assistant.",
    showcaseDesc:
      "Dedicated FUE graft planning, PRP & laser sessions, post-op milestone tracking, and live financial reporting.",
    showcaseFeatures: [
      "13 Admin & Restoration Modules",
      "PRP, Mezoterapi Kapilare & FUE Flows",
      "Post-Op Progress & Multi-Currency Financa",
    ],
    ctaText: "Explore Hair Transplant",
    soloPrice: 179,
    clinicPrice: 449,
    pricingFeatures: [
      "Norwood zone graft density & donor area calculators",
      "Automated PRP & laser regrowth session reminders",
      "Monthly revenue & doctor performance telemetry",
    ],
    parentSaaSDescription:
      "Hypocrates hosts isolated specialized restoration clinics under one core architecture. The Hair Transplant Tenant isolates donor/graft imaging, post-op checkups, and financial ledgers per branch.",
    subTenantHighlights: [
      {
        label: "FUE & PRP Pipelines",
        text: "Track Transplant FUE, Terapi PRP, Mezoterapi Kapilare, and Terapi Lazer i Kokës end-to-end.",
      },
      {
        label: "Post-Op Continuity",
        text: "Automated Kontrollet Pas-op. and Progresi i Trajtimit milestones for 1-week, 3-month, and 12-month growth.",
      },
      {
        label: "Multi-Currency Ledgers",
        text: "Built-in EUR/LEK conversion (€1 = 116.5L) with instant pending payment tracking and financial summaries.",
      },
    ],
    tier1Cards: [
      {
        title: "Surgical & Restoration Hub",
        desc: "Monitor daily consultations, PRP follow-ups, and surgical theater slot readiness from Paneli Kryesor.",
      },
      {
        title: "Consolidated Revenue Analytics",
        desc: "Track Të Ardhura Totale, pending balances, monthly curves, and doctor caseload performance in real time.",
      },
      {
        title: "AI Clinical & Ops Assistant",
        desc: "Integrated Hap Asistentin AI quota workspace drafting post-op instructions and summarizing patient intakes.",
      },
    ],
    branches: [
      {
        name: "Hair Transplant Branch A — Flagship Studio",
        dbDesc:
          "Isolated donor/recipient imaging, PRP vials inventory, and graft surgery logs.",
        webDesc:
          "Dedicated public clinic website with graft consultation booking synced to Orari i Sotëm.",
        terminals: ["Surgeon Console", "PRP Nurse Tablet", "Front Desk", "Financa"],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "Reception AI",
      "Post-Op AI",
      "Finance AI",
      "Inventory AI",
    ],
    orchestratorNote:
      "Surgical consultations, PRP therapy recalls, and post-op growth photo milestones stay synchronized across every team role.",
    categories: [
      {
        id: "clinical",
        name: "Restoration & Surgical",
        roles: ["Hair Transplant Surgeon", "PRP Specialist"],
      },
      {
        id: "ops",
        name: "Front Desk & Finance",
        roles: ["Administrator", "Patient Coordinator"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "Hair Transplant Surgeon",
    rolesData: {
      "Hair Transplant Surgeon": {
        title: "Hair Transplant Surgeon",
        category: "Restoration & Surgical",
        dashboard:
          "Plan Norwood zones, allocate FUE graft counts, review donor density, and monitor Kontrollet Pas-op. recovery milestones.",
        agentName: "Clinical AI",
        agentFuncs:
          "Summarizes intake hair-loss history, drafts FUE operative summaries, and tracks 3/6/12-month photo comparisons.",
      },
      "PRP Specialist": {
        title: "PRP & Mezoterapi",
        category: "Restoration & Surgical",
        dashboard:
          "Manage Terapi PRP, Mezoterapi Kapilare, and Terapi Lazer i Kokës recurring treatment packages.",
        agentName: "Post-Op AI",
        agentFuncs:
          "Schedules follow-up booster intervals and alerts coordinators if a patient misses a regrowth milestone.",
      },
      Administrator: {
        title: "Clinic Administrator",
        category: "Front Desk & Finance",
        dashboard:
          "Full oversight across Paneli Kryesor, Financa (LEK/EUR), Inventari, Stafi attendance, Uebsajti requests, and Importo.",
        agentName: "Finance AI",
        agentFuncs:
          "Reconciles package installments, flags Pagesa në Pritje balances, and tracks clinician utilization.",
      },
      "Patient Coordinator": {
        title: "Coordinator & Reception",
        category: "Front Desk & Finance",
        dashboard:
          "Coordinates Konsultë Fillestare bookings, Inbox inquiries, and automated Kujtesat reminders.",
        agentName: "Reception AI",
        agentFuncs:
          "Responds to international transplant inquiries and confirms pre-op lab completion before arrival.",
      },
    },
    patientJourney: [
      {
        title: "Graft Assessment & Intake",
        detail:
          "Patient submits scalp photos via Uebsajti. Clinical AI estimates Norwood stage and books Konsultë Fillestare.",
      },
      {
        title: "FUE Procedure & PRP Planning",
        detail:
          "Surgeon confirms donor extraction targets and schedules adjunct Terapi PRP or Mezoterapi Kapilare cycles.",
      },
      {
        title: "Post-Op Recovery & Financa",
        detail:
          "Kontrollet Pas-op. tracks healing milestones while Financa manages multi-currency EUR/LEK settlement.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Drafts operative graft logs and longitudinal regrowth comparisons.",
        interacts: "Post-Op AI, Finance AI",
      },
      {
        name: "Post-Op AI",
        func: "Automates day-3, month-1, month-6, and month-12 recovery check-ins.",
        interacts: "Clinical AI, Reception AI",
      },
      {
        name: "Finance AI",
        func: "Tracks multi-currency payments (€1 = 116.5L) and pending balances.",
        interacts: "Administrator dashboards",
      },
    ],
    featureBlocks: [
      {
        title: "Restoration Treatments",
        items: [
          "Transplant FUE graft counter & zone mapping",
          "Terapi PRP & Mezoterapi Kapilare series tracking",
          "Terapi Lazer i Kokës protocol logs",
          "Kontrollet Pas-op. longitudinal photo timeline",
        ],
      },
      {
        title: "Complete Admin Suite",
        items: [
          "13 integrated modules including Financa, Inventari & Stafi",
          "Live EUR / LEK exchange rate calculations",
          "Integrated Hap Asistentin AI copilot",
          "Custom clinic website intake sync (Uebsajti)",
        ],
      },
      {
        title: "Staff & Presence Tracking",
        items: [
          "Fizikisht / Nga Shtëpia / Më Vonë check-in workflows",
          "Doctor caseload performance charts",
          "Role-scoped dashboards for Admin, Doktor & Recepsion",
          "Automated patient SMS & Kujtesat alerts",
        ],
      },
    ],
    differentiators: [
      {
        title: "Live Hair Transplant Portal",
        desc: "Deployed live at hair-transplant-tau.vercel.app with direct /admin access to every restoration module.",
      },
      {
        title: "End-to-End Post-Op Tracking",
        desc: "Connects surgical FUE days directly with 12-month density follow-ups and PRP maintenance.",
      },
    ],
    simulatorTitle: "Interactive FUE Graft Density & PRP Session Planner",
  },

  gynecology: {
    slug: "gynecology",
    title: "Gynecology & OB/GYN Clinics",
    shortTitle: "Gynecology",
    tenantTitle: "Gynecology Clinic Tenant",
    heroSubtitle:
      "A compassionate, security-hardened OB/GYN clinic platform uniting Pap smear & colposcopy workflows, prenatal ultrasound tracking, post-op follow-ups, and role-based care portals.",
    showcaseDesc:
      "OB/GYN clinic OS for Pap tests, colposcopy exams, prenatal ultrasound milestones, and encrypted patient records.",
    showcaseFeatures: [
      "13 Admin & OB/GYN Clinical Modules",
      "Pap Test, Kolposkopi & Prenatal Ultrasounds",
      "Role Demo Portals (Admin · Doktor · Recepsion)",
    ],
    ctaText: "Explore Gynecology EHR",
    soloPrice: 169,
    clinicPrice: 419,
    pricingFeatures: [
      "Prenatal gestational week & trimester ultrasound templates",
      "Cervical screening (Pap Test / Kolposkopi) follow-up alerts",
      "Encrypted patient portal with private test results delivery",
    ],
    parentSaaSDescription:
      "The Gynecology Tenant operates inside isolated HIPAA & GDPR compliant databases, separating sensitive OB/GYN exams, ultrasound imaging, and prenatal timelines per branch.",
    subTenantHighlights: [
      {
        label: "Specialized OB/GYN Exams",
        text: "Native workflows for Kontroll Gjinekologjik, Ekzaminim Pap Test, Kolposkopi, and Ultratingull Gjinekologjik.",
      },
      {
        label: "Longitudinal Prenatal Care",
        text: "Tracks Kontrollet e Shtatzënisë trimester milestones, lab panels, and upcoming delivery readiness.",
      },
      {
        label: "1-Click Role Portals",
        text: "Switch cleanly between Admin, Doktor, Doktor 2, and Recepsion views in the live demo portal.",
      },
    ],
    tier1Cards: [
      {
        title: "OB/GYN Command Suite",
        desc: "Unified daily schedule balancing routine Pap screenings, colposcopies, and prenatal ultrasounds.",
      },
      {
        title: "Screening & Follow-Up Safety",
        desc: "Automated recall tracking ensures abnormal Pap or biopsy follow-ups never slip through the cracks.",
      },
      {
        title: "Financa & Insurance Telemetry",
        desc: "Real-time monthly revenue tracking, EUR/LEK reconciliation, and pending payment alerts.",
      },
    ],
    branches: [
      {
        name: "Women's Health Center — Branch A",
        dbDesc:
          "Isolated OB/GYN charts, lab cytology reports, and ultrasound telemetry.",
        webDesc:
          "Patient-friendly online booking site with discrete appointment confirmation.",
        terminals: ["OB/GYN Consult Room", "Ultrasound Suite", "Recepsion", "Financa"],
      },
    ],
    agentBadges: [
      "Clinical AI",
      "OB/GYN Triage AI",
      "Reception AI",
      "Finance AI",
    ],
    orchestratorNote:
      "Annual screening recalls, prenatal gestational milestones, and private cytology results stay coordinated across clinicians and reception.",
    categories: [
      {
        id: "clinical",
        name: "OB/GYN Clinical",
        roles: ["Gynecologist (Mjek)", "Ultrasound Specialist"],
      },
      {
        id: "ops",
        name: "Practice Operations",
        roles: ["Administrator", "Reception Coordinator"],
      },
    ],
    defaultCategory: "clinical",
    defaultRole: "Gynecologist (Mjek)",
    rolesData: {
      "Gynecologist (Mjek)": {
        title: "Gynecologist",
        category: "OB/GYN Clinical",
        dashboard:
          "Review Orari i Sotëm across Kontroll Gjinekologjik, Kolposkopi, and Ekzaminim Pap Test visits with instant Clinical AI SOAP notes.",
        agentName: "Clinical AI",
        agentFuncs:
          "Drafts structured pelvic/prenatal notes, tracks Pap screening intervals, and summarizes lab history.",
      },
      "Ultrasound Specialist": {
        title: "Sonography & Prenatal",
        category: "OB/GYN Clinical",
        dashboard:
          "Logs Ultratingull Gjinekologjik and Kontrollet e Shtatzënisë fetal biometric measurements.",
        agentName: "OB/GYN Triage AI",
        agentFuncs:
          "Flags gestational anomalies against reference growth curves and triggers specialist alerts.",
      },
      Administrator: {
        title: "Practice Administrator",
        category: "Practice Operations",
        dashboard:
          "Oversees 13 core modules: Pacientët, Takimet, Financa, Inventari, Stafi attendance, Dokumenta, and Kujtesat.",
        agentName: "Finance AI",
        agentFuncs:
          "Monitors clinic revenue trends, doctor caseload distribution, and pending patient statements.",
      },
      "Reception Coordinator": {
        title: "Reception & Patient Privacy Desk",
        category: "Practice Operations",
        dashboard:
          "Handles discrete appointment booking, annual screening reminders, and post-visit care sheets.",
        agentName: "Reception AI",
        agentFuncs:
          "Automates prenatal check-in schedules and fills urgent same-day openings safely.",
      },
    },
    patientJourney: [
      {
        title: "Discrete Scheduling & Intake",
        detail:
          "Patient books Kontroll Gjinekologjik or prenatal consultation online via encrypted forms.",
      },
      {
        title: "Exam, Ultrasound & Ambient Note",
        detail:
          "Clinician performs Pap Test, Kolposkopi, or Ultratingull while Clinical AI compiles the visit note.",
      },
      {
        title: "Longitudinal Follow-Up & Lab Recalls",
        detail:
          "Automated Kujtesat schedules annual cytology screenings and trimester prenatal milestones.",
      },
    ],
    aiAgentsList: [
      {
        name: "Clinical AI",
        func: "Generates structured OB/GYN notes and prenatal progress summaries.",
        interacts: "OB/GYN Triage AI, Finance AI",
      },
      {
        name: "OB/GYN Triage AI",
        func: "Tracks screening intervals, colposcopy recalls, and gestational checkpoints.",
        interacts: "Clinical AI, Reception AI",
      },
      {
        name: "Finance AI",
        func: "Manages consultation billing, lab panels, and monthly revenue metrics.",
        interacts: "Administrator dashboard",
      },
    ],
    featureBlocks: [
      {
        title: "OB/GYN Clinical Workflows",
        items: [
          "Ekzaminim Pap Test & Kolposkopi documentation",
          "Ultratingull Gjinekologjik structured reporting",
          "Kontroll Shtatzënie week-by-week prenatal charts",
          "Kontrollet Pas-op. & Progresi i Trajtimit tracking",
        ],
      },
      {
        title: "Security & Role Isolation",
        items: [
          "Separate Admin, Doktor, Doktor 2 & Recepsion demo logins",
          "Strict HIPAA & GDPR audit trails on every chart view",
          "Encrypted Document Vault (Dokumenta)",
          "Hap Asistentin AI built directly into the top bar",
        ],
      },
      {
        title: "Financial & Staff Clarity",
        items: [
          "Të Ardhurat Mujore & Takimet Javore live charts",
          "Performanca e Mjekëve caseload analytics",
          "EUR / LEK dual-currency visibility",
          "Real-time inventory & clinic presence counters",
        ],
      },
    ],
    differentiators: [
      {
        title: "Live Gynecology Portal",
        desc: "Explore live at gynecology-kappa.vercel.app/hyrje with instant one-click Admin, Doktor, and Recepsion logins.",
      },
      {
        title: "Privacy-First OB/GYN Design",
        desc: "Engineered from the ground up so sensitive cytology and prenatal records remain strictly scoped per clinical role.",
      },
    ],
    simulatorTitle: "Interactive Prenatal Milestone & OB/GYN Screening Planner",
  },
};

export const platformEngines = [
  {
    title: "Clinical AI",
    badge: "Documentation & Triage",
    desc: "Empowers medical practitioners by drafting precise SOAP notes, summarizing historical records, and building clinical timelines.",
    features: [
      "Real-time ambient dictation matching",
      "Automatic medical coding (ICD-10 & CPT)",
      "Custom template generation per specialty",
      "Historical timeline extraction",
    ],
  },
  {
    title: "Receptionist AI",
    badge: "24/7 Front Desk",
    desc: "Handles patients with premium care 24/7, managing bookings, answers, and intake processes across SMS, email, and web.",
    features: [
      "Conversational booking chatbot integration",
      "Intelligent waitlist matching",
      "Automated intake form collection",
      "Multi-channel appointment updates",
    ],
  },
  {
    title: "Operations AI",
    badge: "Franchise Logistics",
    desc: "Streamlines operational schedules, room assignments, and staffing patterns based on predictive machine learning models.",
    features: [
      "Predictive staffing & scheduling guides",
      "Automated room & device routing",
      "Dynamic inventory replenishment tracking",
      "Wait time prediction dashboards",
    ],
  },
  {
    title: "Billing & Claims AI",
    badge: "Revenue Cycle",
    desc: "Reduces medical claim denials and handles billing audits, ensuring fast reimbursement cycles and clear billing reports.",
    features: [
      "Real-time claim validation checks",
      "Automated coverage eligibility pre-checks",
      "Intelligent payment reminders",
      "Custom patient billing workflows",
    ],
  },
];

export const workflowSteps = [
  {
    id: "Step 01",
    title: "Patient books appointment",
    description: "Self-service booking via custom mobile or web portal.",
    meta: "Confirmed via Portal",
  },
  {
    id: "Step 02",
    title: "System assigns clinic & doctor",
    description: "Smart routing based on availability and specialty.",
    meta: "Clinic → Dr. S.",
  },
  {
    id: "Step 03",
    title: "AI prepares patient file",
    description: "Prior records and intake forms are summarized.",
    meta: "Intake Forms • 12 Records • Vitals Summary",
  },
  {
    id: "Step 04",
    title: "Doctor reviews medical data",
    description: "Instant access to a clean, timeline-based history.",
    meta: "2024 • 2025 • Today",
  },
  {
    id: "Step 05",
    title: "Treatment is completed",
    description: "AI drafts the clinical notes based on short audio dictation.",
    meta: "SOAP Draft < 1 min",
  },
  {
    id: "Step 06",
    title: "System updates analytics",
    description: "Billing is automated and dashboard metrics reflect new data.",
    meta: "ICD-10 & Ledger Synced",
  },
];

export const featuresList = [
  {
    title: "Smart Scheduling",
    desc: "Orchestrates staff rotas, room availability, and client booking dynamically using intelligent predictive constraints.",
  },
  {
    title: "AI EHR Scribe",
    desc: "Transcribes patient visits or clinical dictation and drafts detailed, formatted SOAP notes in real-time.",
  },
  {
    title: "Integrated Telehealth",
    desc: "Launches HIPAA-compliant secure calls directly from the scheduler with embedded diagnostic side panels.",
  },
  {
    title: "Patient Portal",
    desc: "Empowers clients to fill out intake forms, securely message their providers, view medical histories, and process payments.",
  },
  {
    title: "Automated Billing",
    desc: "Checks insurance coverage parameters instantly, codes procedural encounters, and alerts billers to denial flags.",
  },
  {
    title: "Clinic Analytics",
    desc: "Generates real-time dashboards detailing client retention, clinician performance metrics, and financial flow.",
  },
];

export const comparisonRows = [
  {
    feature: "Clinical Note Writing",
    traditional: "Manual drafting (takes hours daily)",
    hypocrates: "AI Ambient scribe (under 1 min per client)",
  },
  {
    feature: "Patient Scheduling",
    traditional: "Manual booking or disjointed widgets",
    hypocrates: "Smart self-service conversational flow",
  },
  {
    feature: "Claim Validation",
    traditional: "Checked manually (high rejection rate)",
    hypocrates: "AI claims scrubber (pre-checks rules)",
  },
  {
    feature: "Systems Structure",
    traditional: "Separate tools for scheduling, EHR, and billing",
    hypocrates: "One fully unified operating environment",
  },
  {
    feature: "Clinic Analytics",
    traditional: "Delayed month-end financial reviews",
    hypocrates: "Real-time performance dashboards",
  },
];

export const integrationCategories = [
  {
    title: "EHR & Practice Management",
    desc: "Seamlessly sync patient demographics, scheduling, and SOAP notes in real-time with industry-standard EHR databases.",
    partners: [
      "Epic Systems",
      "Cerner Corporation",
      "Athenahealth",
      "Modernizing Medicine",
      "DrChrono",
      "eClinicalWorks",
    ],
  },
  {
    title: "Diagnostics & Imaging (PACS)",
    desc: "Retrieve and display visual exam records, DICOM structures, eye prescriptions, and photo galleries directly in the practitioner workspace.",
    partners: [
      "DICOM PACS",
      "Acuity Systems",
      "Dermatoscope Bridges",
      "LabCorp / Quest APIs",
    ],
  },
  {
    title: "Wearables & Patient Devices",
    desc: "Aggregate continuous remote health markers and food diaries directly from consumer and medical-grade IoT patient gateways.",
    partners: [
      "Apple HealthKit",
      "Fitbit Care",
      "Google Fit",
      "Garmin Health",
      "Dexcom CGM",
    ],
  },
  {
    title: "Billing & Clearinghouses",
    desc: "Send procedurally coded encounters directly to major insurance pipelines and process patient fees with secure merchant services.",
    partners: [
      "Change Healthcare",
      "Availity",
      "Stripe Payments",
      "Waystar",
      "Optum Pay",
    ],
  },
];

export interface ResourceItem {
  id: string;
  category: "guide" | "case-study" | "news";
  categoryLabel: string;
  title: string;
  desc: string;
  readTime: string;
  date: string;
  highlights: string[];
}

export const resourceItems: ResourceItem[] = [
  {
    id: "ai-scribing-dental",
    category: "guide",
    categoryLabel: "Guide",
    title: "Integrating AI Scribing in Dental Practices",
    desc: "Learn how to configure ambient transcription models to automate charting, procedure records, and treatment plans.",
    readTime: "6 min read",
    date: "June 10, 2026",
    highlights: [
      "Configure odontogram shorthand and tooth numbering dictionaries for instant voice-to-chart mapping.",
      "Route Clinical AI notes automatically to DeltaDental billing codes and Finance AI pre-checks.",
      "Enforce zero-retention voice processing so raw consultation audio is deleted immediately after SOAP approval.",
    ],
  },
  {
    id: "hipaa-checklist-ai",
    category: "guide",
    categoryLabel: "Guide",
    title: "HIPAA Compliance Checklist for AI Systems",
    desc: "The essential security guidelines for clinical operators deploying AI assistants, handling data encryption, and managing records.",
    readTime: "10 min read",
    date: "May 28, 2026",
    highlights: [
      "Execute a Business Associate Agreement (BAA) with every AI and cloud subprocessor before ingesting PHI.",
      "Verify AES-256 encryption at rest, TLS 1.3 in transit, and mandatory MFA with automatic session timeouts.",
      "Maintain immutable audit logs for authentication events, SOAP edits, and role-based access changes.",
    ],
  },
  {
    id: "apex-dermatology-case-study",
    category: "case-study",
    categoryLabel: "Case Study",
    title: "How Apex Dermatology Saved 12 Hours Weekly",
    desc: "A case study on how before/after galleries and Clinical AI minimized SOAP note overhead and optimized billing claims.",
    readTime: "8 min read",
    date: "May 15, 2026",
    highlights: [
      "Reduced average clinical chart turnaround time by 68% across 4 dermatology franchise branches.",
      "Paired side-by-side cosmetic skin imaging with Aesthetic AI parameter suggestions.",
      "Pre-checked ICD-10/CPT claims prior to clearinghouse submission, cutting billing rework.",
    ],
  },
  {
    id: "visioneye-case-study",
    category: "case-study",
    categoryLabel: "Case Study",
    title: "Optimizing Room Rotations at VisionEye Centers",
    desc: "How scheduling models optimized clinic staffing, device scheduling, and cut patient wait times by 22 minutes.",
    readTime: "12 min read",
    date: "April 30, 2026",
    highlights: [
      "Connected OCT and fundus camera utilization directly to Operations AI scheduling heuristics.",
      "Integrated Optometry Tumbling E & refraction logs with Optician AI frame-lens dispensing.",
      "Reduced waiting room bottlenecks by 22 minutes per visit across multi-location eye centers.",
    ],
  },
  {
    id: "hypocrates-v25-release",
    category: "news",
    categoryLabel: "Product News",
    title: "Hypocrates Version 2.5 Release Notes",
    desc: "Introducing advanced variable typography support, speech-to-text engines, and customizable dashboard widgets.",
    readTime: "4 min read",
    date: "April 12, 2026",
    highlights: [
      "Upgraded ambient speech-to-text engine with sub-minute SOAP compilation across 7 clinical specialties.",
      "Launched bi-directional HL7 / FHIR writebacks for Epic, Cerner, Athenahealth, and DrChrono.",
      "Added multi-branch Operations AI forecasting and consolidated franchise analytics.",
    ],
  },
];

export const trustCenterCards = [
  {
    title: "HIPAA Compliance",
    desc: "Protecting Sensitive Healthcare Information (PHI) with enterprise-grade safeguards.",
    link: "/legal/hipaa-compliance",
    tag: "Healthcare Standard",
  },
  {
    title: "GDPR Compliance",
    desc: "Ensuring personal privacy and data processing transparency under European standards.",
    link: "/legal/gdpr-compliance",
    tag: "European Standard",
  },
  {
    title: "Security Infrastructure",
    desc: "Cloud firewalls, IAM, continuous threat monitoring, and penetration testing.",
    link: "/legal/security",
    tag: "Infrastructure",
  },
  {
    title: "Data Protection",
    desc: "Encryption parameters at rest/transit, database isolation, and zero-retention voice engines.",
    link: "/legal/data-protection-policy",
    tag: "Data Integrity",
  },
  {
    title: "Privacy Policy",
    desc: "Transparency in data collection, processing bases, and personal records disclosure.",
    link: "/legal/privacy-policy",
    tag: "Legal",
  },
  {
    title: "Cookie Policy",
    desc: "Clear parameters on session validation cookies, functional preferences, and tracking.",
    link: "/legal/cookie-policy",
    tag: "Legal",
  },
  {
    title: "Subprocessors",
    desc: "Authorized third-party infrastructure and sub-processing partner services directory.",
    link: "/compliance/subprocessors",
    tag: "Third Party",
  },
  {
    title: "Disaster Recovery",
    desc: "Continuous backups, cross-region failover routines, and recovery target metrics (RPO ≤ 24h, RTO ≤ 4h).",
    link: "/compliance/disaster-recovery",
    tag: "Availability",
  },
  {
    title: "Business Continuity",
    desc: "99.9% uptime guarantees, operational incident containment, and customer SLA definitions.",
    link: "/compliance/business-continuity",
    tag: "Availability",
  },
];

export const subprocessors = [
  {
    name: "Vercel Inc.",
    purpose:
      "Application hosting, routing, and globally distributed static page caching.",
    location: "United States / European Economic Area",
  },
  {
    name: "Supabase Inc. (AWS)",
    purpose:
      "Primary database hosting, logical patient record isolation, and account user authentication.",
    location: "United States (AWS VPC)",
  },
  {
    name: "OpenAI LLC",
    purpose:
      "AI transcription parsing and automated clinical SOAP note compilation APIs.",
    location: "United States (Zero-Data-Retention agreement)",
  },
  {
    name: "Resend Inc.",
    purpose:
      "Transactional email transmissions, intake link alerts, and account notifications.",
    location: "United States",
  },
  {
    name: "Stripe Inc.",
    purpose:
      "SaaS licensing payment processing, billing, and merchant gateway operations.",
    location: "United States",
  },
];

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

export interface LegalDoc {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  contactEmail: string;
  sections: LegalSection[];
  relatedLinks: { label: string; desc: string; href: string }[];
}

export const legalDocs: Record<string, LegalDoc> = {
  "hipaa-compliance": {
    slug: "hipaa-compliance",
    badge: "Healthcare Standard",
    title: "HIPAA Compliance",
    subtitle:
      "Protecting Sensitive Healthcare Information with Enterprise-Grade Security",
    contactEmail: "legal@hypocrates.com",
    sections: [
      {
        id: "what-is-hipaa",
        title: "1. What is HIPAA?",
        content: [
          "The Health Insurance Portability and Accountability Act (HIPAA) establishes national standards for protecting sensitive patient health information.",
          "Healthcare organizations must ensure the confidentiality, integrity, availability, accountability, and secure access of Protected Health Information (PHI) at all times.",
          "Hypocrates provides the administrative, technical, and physical safeguards needed to help our covered entity customers support compliance.",
        ],
      },
      {
        id: "phi-secured",
        title: "2. Protected Health Information (PHI) Secured",
        content: [
          "Hypocrates secures critical clinical records within our environment including: patient names, dates of birth, contact information, medical histories, diagnoses, treatment plans, consultation audio transcriptions, SOAP notes, imaging records, prescription histories, lab results, and billing/insurance details.",
        ],
      },
      {
        id: "administrative-safeguards",
        title: "3. Administrative Safeguards",
        content: [
          "Role-Based Access Control (RBAC): Restricts access parameters based on workforce roles (Owners, Admins, Doctors, Nurses, Receptionists, Assistants).",
          "Identity & Session Management: Individual account authorization, password complexity rules, and session controls.",
          "Detailed Audit Logging: Automatic logging of record access, editing events, metadata updates, and account configurations.",
          "Workforce Security Training: Mandatory HIPAA compliance and security training for all Hypocrates personnel.",
        ],
      },
      {
        id: "technical-safeguards",
        title: "4. Technical Safeguards",
        content: [
          "Data Encryption: All PHI is encrypted in transit using TLS 1.3 and at rest using AES-256 standard keys.",
          "Secure Authentication: Support for strong password enforcement and multi-factor authentication (MFA).",
          "Automatic Session Timeout: Interactive sessions are automatically timed out after periods of inactivity to protect physical workstations.",
          "Continuous Monitoring: Ongoing log analysis, threat intelligence reporting, and security anomaly detection.",
        ],
      },
      {
        id: "physical-safeguards",
        title: "5. Physical Safeguards",
        content: [
          "Hosted in enterprise-grade, certified cloud data center facilities with physical access barriers, security patrols, and biometric checks.",
          "Policies restricting physical storage of PHI on employee workstations or portable media, alongside secure media destruction protocols.",
        ],
      },
      {
        id: "incident-response",
        title: "6. Incident Response & BAA",
        content: [
          "In the event of a confirmed breach affecting PHI, we notify affected covered entities within 60 calendar days of discovery or as required by the HIPAA Breach Notification Rule.",
          "Under HIPAA, Hypocrates acts as a Business Associate to Covered Entities and executes a signed Business Associate Agreement (BAA) before processing any PHI. Contact legal@hypocrates.com to execute our standard BAA.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Data Protection Policy",
        desc: "Encryption standards and zero-retention voice scribing",
        href: "/legal/data-protection-policy",
      },
      {
        label: "Security Infrastructure",
        desc: "Cloud firewalls, IAM, and continuous threat monitoring",
        href: "/legal/security",
      },
    ],
  },
  "gdpr-compliance": {
    slug: "gdpr-compliance",
    badge: "European Standard",
    title: "GDPR Compliance",
    subtitle:
      "Ensuring Personal Privacy and Data Processing Transparency under European Standards",
    contactEmail: "dpo@hypocrates.com",
    sections: [
      {
        id: "overview",
        title: "1. GDPR Framework Overview",
        content: [
          "The General Data Protection Regulation (GDPR) regulates how organizations process the personal data of individuals inside the European Economic Area (EEA).",
          "Hypocrates acts as both a Data Controller (for our own client account information such as registrations and billing) and a Data Processor (for clinical patient data processed on behalf of our clinic customers).",
        ],
      },
      {
        id: "lawful-bases",
        title: "2. Lawful Bases for Processing",
        content: [
          "Contractual Necessity: Processing required to perform contracted clinic software services.",
          "Legal Obligation: Processing necessary to comply with administrative, regulatory, or tax laws.",
          "Legitimate Interests: Optimizing platform performance, monitoring security, and preventing fraud without overriding privacy rights.",
          "Consent: Explicit, unambiguous consent for specific workflows such as ambient voice transcription, withdrawable at any time.",
        ],
      },
      {
        id: "data-subject-rights",
        title: "3. Rights of EEA Data Subjects",
        content: [
          "Hypocrates supports the execution of Right of Access, Right to Rectification, Right to Erasure (To Be Forgotten), Right to Restriction, Right to Data Portability (CSV/JSON export), and Right to Object.",
        ],
      },
      {
        id: "international-transfers",
        title: "4. Cross-Border Data Transfers",
        content: [
          "For data originating in the EEA, UK, or Switzerland, any cross-border transfers are protected by Standard Contractual Clauses (SCCs) approved by the European Commission and strict vendor assessments.",
        ],
      },
      {
        id: "dpo-contact",
        title: "5. Data Protection Officer (DPO)",
        content: [
          "Our Data Protection Officer oversees our legal compliance and privacy framework. Contact dpo@hypocrates.com or write to Rruga Ibrahim Rugova, Sky Tower, Floor 8, Tirana 1001, Albania.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Privacy Policy",
        desc: "Read how we collect, use, and protect personal data",
        href: "/legal/privacy-policy",
      },
      {
        label: "Trust Center",
        desc: "Explore all compliance standards and subprocessors",
        href: "/compliance",
      },
    ],
  },
  security: {
    slug: "security",
    badge: "Infrastructure",
    title: "Security Infrastructure",
    subtitle:
      "Cloud Firewalls, Access Management, and Threat Detection Systems",
    contactEmail: "security@hypocrates.com",
    sections: [
      {
        id: "cloud-security",
        title: "1. Cloud Server Security",
        content: [
          "Hypocrates is hosted within enterprise-grade, certified cloud hosting environments, leveraging physical security protocols, continuous surveillance, and strict entry restrictions managed by our infrastructure partners.",
          "Physical access to server facilities is protected by multi-factor authentication, biometric scanners, and round-the-clock armed security patrols.",
        ],
      },
      {
        id: "network-firewalls",
        title: "2. Network Borders & Firewalls",
        content: [
          "Our application layers are isolated within secure private networks with restricted routing. We utilize advanced firewalls to filter incoming traffic and prevent security vulnerabilities, malicious requests, and denial-of-service attempts.",
          "All network communication with Hypocrates is encrypted using modern, industry-standard cryptographic protocols (TLS 1.3).",
        ],
      },
      {
        id: "iam",
        title: "3. Identity & Access Management (IAM)",
        content: [
          "Multi-Factor Authentication (MFA): Mandatory MFA for all engineering and administrative staff.",
          "Least Privilege Roles: System access is restricted strictly using fine-grained authorization parameters based on role requirements.",
          "Audit Logging: All administrative sessions, internal access requests, and database queries are logged and reviewed.",
        ],
      },
      {
        id: "threat-monitoring",
        title: "4. Continuous Threat Monitoring",
        content: [
          "Our automated threat detection systems run continuously, monitoring access patterns and flagging anomalous requests. Security alerts are instantly routed to our Clinical Reliability Engineers on call 24/7.",
        ],
      },
      {
        id: "pentesting",
        title: "5. Vulnerability Assessments & Penetration Testing",
        content: [
          "We run automated code scans regularly to flag dependency vulnerabilities and outdated software. Annual third-party penetration testing is executed to validate the integrity of our endpoints, verify logical boundaries, and test system defenses.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Privacy Policy",
        desc: "Read about our clinical data protection framework",
        href: "/legal/privacy-policy",
      },
      {
        label: "Data Protection Policy",
        desc: "Understand how we safeguard and process your data",
        href: "/legal/data-protection-policy",
      },
    ],
  },
  "data-protection-policy": {
    slug: "data-protection-policy",
    badge: "Data Integrity",
    title: "Data Protection Policy",
    subtitle:
      "Encryption Standards, Zero-Retention Scribes, and Record Isolation",
    contactEmail: "privacy@hypocrates.com",
    sections: [
      {
        id: "encryption-standards",
        title: "1. Encryption Standards",
        content: [
          "We protect clinical data using robust cryptographic controls. All database records and media files are encrypted at rest using AES-256 keys, and active network channels require TLS 1.3 encryption.",
        ],
      },
      {
        id: "database-isolation",
        title: "2. Database Isolation & Multi-Tenancy",
        content: [
          "Hypocrates utilizes multi-tenant logical isolation barriers so each clinic's records, schedules, and billing procedures cannot be accessed, queried, or modified by other tenant accounts.",
        ],
      },
      {
        id: "zero-retention",
        title: "3. Zero-Retention Voice Scribing",
        content: [
          "Our ambient AI clinical note writing workflow functions on a strict zero-retention architecture. Voice recordings processed during patient visits are compiled into SOAP notes, formatted, and instantly deleted from our computing nodes.",
        ],
      },
      {
        id: "key-management",
        title: "4. Key Management & Rotation",
        content: [
          "Cryptographic keys are managed and rotated dynamically using cloud-native key management modules with strict logged access.",
        ],
      },
      {
        id: "automated-backups",
        title: "5. Automated Backups",
        content: [
          "Automated daily database backups are encrypted with unique keys and stored in geographically isolated storage environments.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "HIPAA Compliance",
        desc: "Administrative, technical, and physical PHI safeguards",
        href: "/legal/hipaa-compliance",
      },
      {
        label: "Disaster Recovery",
        desc: "Point-in-time recovery and RPO/RTO targets",
        href: "/compliance/disaster-recovery",
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    badge: "Legal",
    title: "Privacy Policy",
    subtitle:
      "How Hypocrates collects, uses, stores, and protects personal and clinical information",
    contactEmail: "privacy@hypocrates.com",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        content: [
          "Hypocrates is committed to protecting the privacy and security of the personal information of healthcare providers, clinic administrators, staff members, and patients whose data may be processed through our platform. Effective June 12, 2026.",
        ],
      },
      {
        id: "information-collected",
        title: "2. Information We Collect",
        content: [
          "Account & Registration Information: Name, professional title, work email, phone number, clinic name/address, billing info, and specialty.",
          "Clinical & Patient Data (PHI): Processed strictly on behalf of your clinic under a Business Associate Agreement (BAA) acting solely as a data processor.",
          "Usage, Device & Communications Data: Non-PHI operational telemetry, diagnostics, and support inquiry contents.",
        ],
      },
      {
        id: "how-we-use",
        title: "3. How We Use Your Information",
        content: [
          "Providing and operating clinical workflows, scheduling, and AI models; de-identified/aggregated model improvement (never using identifiable PHI without explicit consent and BAA coverage); customer support; and fraud/security prevention.",
        ],
      },
      {
        id: "data-sharing",
        title: "4. Data Sharing & Disclosure",
        content: [
          "We Do Not Sell Your Data. Hypocrates never sells, rents, or trades personal information or PHI.",
          "Authorized subprocessors are contractually bound under strict safeguards and BAAs. Integrations with EHRs, labs, and clearinghouses occur only as authorized by your clinic.",
        ],
      },
      {
        id: "data-retention",
        title: "5. Data Retention & Your Rights",
        content: [
          "Upon subscription termination, clinics may request complete export and deletion within 90 days. Users have rights of access, correction, deletion (fulfilled within 30 days), portability, and objection.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Terms of Service",
        desc: "Subscription terms, clinical use disclaimer, and SLA",
        href: "/legal/terms-of-service",
      },
      {
        label: "Cookie Policy",
        desc: "Session, functional, and analytics cookie parameters",
        href: "/legal/cookie-policy",
      },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    badge: "Legal",
    title: "Terms of Service",
    subtitle:
      "Governing access to and use of the Hypocrates platform, APIs, and services",
    contactEmail: "legal@hypocrates.com",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance & Registration",
        content: [
          "These Terms constitute a binding agreement governing access to the Hypocrates platform, APIs, and support services. Accounts require accurate registration details and strict credential confidentiality.",
        ],
      },
      {
        id: "subscription-fees",
        title: "2. Subscriptions, Fees & Trials",
        content: [
          "Plans are billed monthly or annually in advance. Annual subscriptions cancelled within the first 14 days of an initial term are eligible for a pro-rated refund.",
        ],
      },
      {
        id: "permitted-use",
        title: "3. Acceptable Clinical Use",
        content: [
          "Hypocrates is designed to support—not replace—clinical judgment. AI-generated outputs (including SOAP notes, coding suggestions, and scheduling recommendations) must be reviewed and validated by a licensed healthcare professional before clinical use.",
        ],
      },
      {
        id: "hipaa-baa",
        title: "4. HIPAA, PHI & Data Ownership",
        content: [
          "You retain full ownership of all Customer Data. Covered Entities processing PHI must execute a BAA prior to importing PHI.",
        ],
      },
      {
        id: "liability",
        title: "5. Warranties & Liability",
        content: [
          "Hypocrates implements industry-standard security measures and targets 99.9% uptime SLA. Total cumulative liability is capped at total fees paid in the 12 months preceding a claim.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Privacy Policy",
        desc: "How personal and clinical data is handled",
        href: "/legal/privacy-policy",
      },
      {
        label: "HIPAA Compliance",
        desc: "Safeguards and BAA execution process",
        href: "/legal/hipaa-compliance",
      },
    ],
  },
  "cookie-policy": {
    slug: "cookie-policy",
    badge: "Legal",
    title: "Cookie Policy",
    subtitle:
      "Clear parameters on essential session cookies, functional preferences, and consent",
    contactEmail: "privacy@hypocrates.com",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction & What Are Cookies",
        content: [
          "Cookies are small text files stored on your device to maintain secure sessions, remember preferences, improve platform functionality, and measure performance.",
        ],
      },
      {
        id: "types-of-cookies",
        title: "2. Types of Cookies We Use",
        content: [
          "Essential Cookies: Necessary for authentication, session security, and core platform operation.",
          "Functional Cookies: Language, theme, and saved workspace preferences.",
          "Analytics & Performance Cookies: Aggregate navigation metrics, load times, and error reporting.",
          "Marketing Cookies: Used only with explicit user consent for campaign attribution.",
        ],
      },
      {
        id: "phi-exclusion",
        title: "3. No PHI in Cookies",
        content: [
          "Cookies do not intentionally collect medical records or Protected Health Information (PHI).",
        ],
      },
      {
        id: "managing-cookies",
        title: "4. Managing Cookie Preferences",
        content: [
          "You can accept, reject non-essential cookies, or manage preferences via browser settings at any time.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Privacy Policy",
        desc: "Full data privacy and retention disclosures",
        href: "/legal/privacy-policy",
      },
      {
        label: "GDPR Compliance",
        desc: "EEA data subject rights and consent framework",
        href: "/legal/gdpr-compliance",
      },
    ],
  },
};

