export const methodologyPhases = [
  {
    number: "01",
    name: "Design",
    window: "Days 0–30",
    objective: "Design for certainty",
    description:
      "Eliminate ambiguity before execution begins. The operating model, location and business case are locked before a single hire is made.",
    outcomes: ["Board-ready GCC blueprint", "A clear go / no-go decision", "Locked scope, timeline and commercials"],
  },
  {
    number: "02",
    name: "Build",
    window: "Days 31–60",
    objective: "Launch — legally, operationally, physically",
    description:
      "Entity formation, regulatory compliance and workspace readiness run alongside the search for the core founding team.",
    outcomes: ["A legally compliant India entity", "First teams onboarded", "A GCC ready to take on real work"],
  },
  {
    number: "03",
    name: "Stabilise",
    window: "Days 61–90",
    objective: "Build & stabilise — scale without chaos",
    description:
      "Talent scales with attrition controls in place; governance, KPIs and reporting rhythms go live alongside day-to-day operations.",
    outcomes: ["Stable, predictable operations", "Measurable productivity and cost savings", "Restored leadership confidence"],
  },
  {
    number: "04",
    name: "Operate or Exit",
    window: "Ongoing, by choice",
    objective: "Preserve optionality",
    description:
      "StepIndus continues to manage the center under GCC-as-a-Service, or hands over cleanly to a client-owned captive. Either way, there is no platform lock-in.",
    outcomes: ["No forced long-term dependency", "A clean handover, on request", "Full client control retained throughout"],
  },
] as const;

export const homeStats = [
  { value: "90", suffix: " days", label: "Typical GCC launch window" },
  { value: "30", suffix: "+ yrs", label: "Leadership experience in India GCC & offshore delivery" },
  { value: "6", suffix: "", label: "Delivery modules, one accountable owner" },
  { value: "4", suffix: "", label: "Entry pathways for India market access" },
] as const;

export const fitFor = [
  "Mid-market global companies, roughly USD 200M–2B in revenue",
  "First-time or second-time India GCC builders",
  "PE-backed portfolio companies under timeline pressure",
  "Engineering, manufacturing, technology and product organisations — and startups scaling into India",
];

export const notFitFor = [
  "Companies seeking a technology or HR platform rather than hands-on delivery",
  "Optimisation of very large, mature GCCs (5,000+ employees)",
  "Buyers looking for a long-term, open-ended MNC strategy relationship",
];

export const differentiators = [
  {
    title: "On-the-ground execution, not platform or pure strategy",
    description:
      "Large platform firms sell scale; heavy consulting firms sell strategic insight and market research. StepIndus sits in the gap between them — an execution-first partner built for mid-market and first-time entrants, not Fortune 500 scale or strategy-led transformation alone.",
  },
  {
    title: "One accountable owner",
    description:
      "A single team runs legal, talent, technology, facility, process and governance together — not six vendors a client has to coordinate themselves.",
  },
  {
    title: "Fixed scope, milestone commercials",
    description:
      "Each module carries a defined scope and a milestone-linked commercial structure. You pay for outcomes, not slide decks.",
  },
  {
    title: "Tier-2 and Tier-3 depth",
    description:
      "Deep, working relationships in Trivandrum, Gandhinagar, Jaipur and Chandigarh — not just the metro-only playbook most providers default to.",
  },
  {
    title: "Exit by design",
    description:
      "No platform lock-in. A client can exit to a self-run captive after any phase, with a clean handover built into the engagement from the outset.",
  },
];

export const leadership = {
  name: "Sudhir Singh",
  role: "Managing Partner, StepIndus Consulting LLP",
  linkedin: "https://www.linkedin.com/in/sudhirsingh/",
  bio: [
    "Sudhir brings over three decades of experience across India's technology industry, government, international business, Global Capability Centres and public policy — a combination of competencies that sits squarely behind StepIndus's GCC planning, blueprinting, setup, corporate governance and operational oversight work.",
    "He began his career as a software programmer at a premier Indian manufacturing company, then moved into the Software Technology Parks of India (STPI), working across the STP and EHTP ecosystem — technology exports, trade facilitation, customs, infrastructure and regulatory administration — across major technology hubs including Noida and Gurgaon.",
    "He later moved into industry and international business, serving as Founder Director and Board Director of RM Education Solutions India and other GCCs, with direct experience overseeing GCC planning and setup from the client side of the table, not only the advisory side.",
    "Since 2014, Sudhir has also served as a Fellow and part-time contributor at the iSPIRT Foundation, engaging senior government and industry stakeholders on trade and industry policy, regulatory reform, cross-border trade, and Digital Public Infrastructure.",
  ],
  focusAreas: [
    { label: "Build in India", description: "Global center setup & execution" },
    { label: "Enter India", description: "India entry & strategic partnerships" },
    { label: "Navigate India", description: "Trade, regulatory & governance" },
    { label: "Advise on India", description: "Public policy & government affairs" },
  ],
};

export const history = {
  founded: 2003,
  reformed: 2005,
  spunOff: 2024,
  paragraphs: [
    "StepIndus has been operating in this space since 2003, when Excelict was founded as a consulting partnership. It was re-formed as a private limited company in 2005. In 2024, the Global Center consulting line was separated into a dedicated, focused entity — StepIndus Consulting LLP — built to concentrate exclusively on Global Capability Centers, Shared Services Centers and Global Manufacturing Centers.",
    "The name is a fusion of Step and Indus — India. It reflects the practice's role at every step of a company's global operations: Consult, bringing a strategic lens to match business objectives; Connect, using a trusted, on-the-ground network; and Catalyse, acting as a partner in progress once operations are established.",
    "The chakra — a wheel — anchors the mark for the same reason it anchors the Indian flag: a symbol of continuous motion, representing the global reach StepIndus helps its clients build from an Indian base.",
  ],
};

export const generalFaqs = [
  {
    q: "What are your core India GCC services?",
    a: "GCC Setup is the core service, delivered across six modules spanning legal and regulatory, talent, technology, facility, process and governance. Clients can take the full build, a single module, or a standalone consulting engagement for a blueprint or feasibility study.",
  },
  {
    q: "What industries do you work across?",
    a: "Technology, IT and IT-enabled services, electronics, telecom, manufacturing, chemicals, automobiles, pharma, and ports & logistics are the most common — alongside emerging work in semiconductors and startups.",
  },
  {
    q: "How do you measure success?",
    a: "A successful start of operations, in the planned time and budget, with real deliveries made to the parent, peer business unit or GCC customer — alongside cost-effective, ongoing operations once live.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "A GCC go-live typically takes 12 weeks for a mid-size operation, up to 24 weeks for a larger build. Total engagement — including transition — usually runs 6 to 18 months depending on scale.",
  },
  {
    q: "What does a typical engagement process look like?",
    a: "Most engagements start with a consulting phase to build a go-live plan or blueprint, followed by project-managed delivery across the six modules. Delivery is milestone-based throughout.",
  },
];

export const deliveryModules = [
  { number: "01", title: "Legal & Regulatory", description: "Entity formation, industrial approvals, tax & compliance." },
  { number: "02", title: "Talent Acquisition", description: "Search and select, induction support, HR policy setup." },
  { number: "03", title: "Technology Integration", description: "IT hardware & software, network & security, procurement and commissioning." },
  { number: "04", title: "Facility Infrastructure", description: "Workspace, power & backup, safety & security." },
  { number: "05", title: "Process & Operations", description: "Functional processes, essential services, manuals & handbooks." },
  { number: "06", title: "GCC Governance", description: "Governance organisation, metrics to report and track, risk management." },
] as const;

export const engagementPrinciples = [
  { title: "Fixed-scope launch phase", description: "Each module carries a defined scope of delivery, with certainty." },
  { title: "Milestone-linked commercials", description: "Commercials are tied to milestones within each phase — not time and materials." },
  { title: "Project Office methodology", description: "A single PMO integrates execution across every module, end to end." },
  { title: "One accountable owner", description: "An experienced account owner helps you move at pace, start to finish." },
] as const;
