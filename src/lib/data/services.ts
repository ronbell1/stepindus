import type { ImageKey } from "@/lib/images";

export type ServiceScopeStep = {
  label: string;
  title: string;
  description: string;
  points: string[];
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  group: "GCC Services" | "Specialised Services";
  title: string;
  navTitle: string;
  tagline: string;
  heroImage: ImageKey;
  intro: string[];
  stats: { value: string; label: string }[];
  scope: ServiceScopeStep[];
  whoItsFor: string[];
  benefits: { title: string; description: string }[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "gcc-setup",
    group: "GCC Services",
    title: "GCC Setup Service",
    navTitle: "GCC Setup Service",
    tagline: "From board approval to a live Global Capability Center in 90 days.",
    heroImage: "openPlanFloor",
    intro: [
      "This is the core engagement: an end-to-end Captive India GCC build, or a managed GCC delivered as GCC-as-a-Service. Either way, the function can be anything — IT and digital transformation, a shared services back office, an engineering or R&D center, or a mixed-value-chain operation.",
      "Most GCC programmes stall not from a lack of intent but from fragmented ownership: too many advisors, no single party accountable for the outcome. StepIndus takes that accountability. One team runs legal setup, talent, technology, facility, process and governance together, against a fixed scope and a published timeline.",
    ],
    stats: [
      { value: "90 days", label: "Typical go-live for a 50-person team" },
      { value: "7 modules", label: "1 consulting + 6 delivery modules" },
      { value: "3 phases", label: "Design → Source & Build → Go-live" },
    ],
    scope: [
      {
        label: "Pre-setup",
        title: "Consulting & location research",
        description: "Before anything is built, the operating model and location are stress-tested.",
        points: ["Location research weighing cost, talent and incentives", "A tailored, scalable GCC blueprint", "Workspace search against your operational brief"],
      },
      {
        label: "Phase 1 · Days 0–30",
        title: "Design: plan & structure",
        description: "Scope, timeline and commercials are locked before execution starts.",
        points: ["Entity formation route decided", "Industrial and regulatory approvals mapped", "Tax & compliance pathway defined"],
      },
      {
        label: "Phase 2 · Days 31–60",
        title: "Source & build",
        description: "Talent, technology and facility workstreams run in parallel.",
        points: ["Search and select core team in project mode", "IT hardware, network and security procured", "Workspace fit-out and safety systems installed"],
      },
      {
        label: "Phase 3 · Days 61–90",
        title: "Operationalisation & go-live",
        description: "Processes and governance are switched on before handover.",
        points: ["Functional processes and handbooks published", "Governance structure and KPI reporting live", "Center handed over or transitioned to Operate"],
      },
    ],
    whoItsFor: [
      "First-time India GCC builders",
      "Mid-market global firms (USD 200M–2B revenue)",
      "PE-backed companies under timeline pressure",
      "Boards that want speed without compliance risk",
    ],
    benefits: [
      { title: "Niche, not broad", description: "Built for mid-market companies that need expert, high-touch delivery — not a platform built for Fortune 500 scale." },
      { title: "Execution, not decks", description: "The team handles entity setup, FEMA filings, SEZ registrations and the first fifty hires directly." },
      { title: "Project-managed", description: "Delivery follows recognised project-management discipline, module by module." },
      { title: "Exit by design", description: "A clean handover or transition to Operate is built into the engagement from day one — never a dependency trap." },
    ],
    faqs: [
      { q: "How fast can we realistically go live?", a: "90 days is achievable for roughly a 50-person team inside a technology park or SEZ. Larger or more complex functions extend the timeline — this is confirmed during the design phase, not promised blind." },
      { q: "What's the difference between Captive and GCC-as-a-Service?", a: "Captive means you own a 100% Indian subsidiary from day one; StepIndus executes the build and hands over. GCC-as-a-Service means StepIndus (or its delivery partners) operates the center on your behalf under a managed model, with the option to convert to a captive entity later." },
      { q: "Can we engage on a single module only?", a: "Yes. Clients can commission the full seven-module build, a single module, or a standalone consulting engagement for a blueprint or feasibility study." },
    ],
  },
  {
    slug: "engineering-rd-centers",
    group: "GCC Services",
    title: "Engineering & R&D Centers",
    navTitle: "Engineering & R&D Centers",
    tagline: "Move the GCC up the value chain into product engineering and innovation.",
    heroImage: "automotiveEngineer",
    intro: [
      "Captive engineering and R&D centers focus on product design, or research and development — innovating and developing products, services and supporting processes. They capture a higher level of value than a back-office GCC by leveraging offshore talent across the entire product development lifecycle.",
      "India's R&D story is not new. Texas Instruments and Motorola set up R&D operations in Bangalore in the late 1980s; Bosch, Adobe, GE, Google, Microsoft, Cisco and Ericsson followed. Today it extends well beyond IT — automobile, chemicals, FMCG and retail multinationals all run R&D centers in India, and the country now hosts over 1,000 such centers.",
    ],
    stats: [
      { value: "1,000+", label: "R&D and engineering centers in India" },
      { value: "1980s", label: "Since Texas Instruments & Motorola arrived" },
      { value: "6 cities", label: "Bangalore, Pune, Chennai, Hyderabad, Gurgaon, Noida" },
    ],
    scope: [
      {
        label: "Delivery model",
        title: "The same disciplined build, engineering-specific",
        description: "Engineering & R&D centers follow the same proven delivery scope as a core GCC build, tuned to lab, prototyping and IP-handling requirements.",
        points: ["Location and cluster fit assessed against talent depth", "Engineering-grade facility and infrastructure planning", "Specialist technical talent sourced in project mode"],
      },
    ],
    whoItsFor: [
      "Manufacturers wanting to shift from back-office to product engineering",
      "Technology firms building offshore R&D capability",
      "Companies seeking captive shared engineering services across sites",
    ],
    benefits: [
      { title: "A personal touch", description: "Hands-on delivery, not a managed-platform relationship." },
      { title: "Strong network", description: "Access to the same industrial-cluster relationships used across every StepIndus build." },
      { title: "Customised approach", description: "Scope shaped around the specific engineering discipline, not a generic template." },
    ],
    faqs: [],
  },
  {
    slug: "shared-services-centers",
    group: "GCC Services",
    title: "Shared Services Centers",
    navTitle: "Shared Services Centers",
    tagline: "A centralised, chargeable services hub for geographically dispersed business units.",
    heroImage: "developerDualMonitor",
    intro: [
      "A Shared Services Center is a centralised setup of resources in one location, used across several business functions — finance and accounting, HR, IT services and more — by business units spread across geographies. It is an internal, chargeable service provider, and India is one of the most competitive countries in the world to host one.",
      "StepIndus has been setting up SSCs since 2001. The engagement runs across six stages: location strategy, blueprint, project management, transition & billing, process optimisation, and governance.",
    ],
    stats: [
      { value: "~40%", label: "Typical cost saving over non-India operations" },
      { value: "6 stages", label: "From location strategy to governance" },
      { value: "2001", label: "StepIndus leadership's SSC delivery experience begins" },
    ],
    scope: [
      { label: "Step 1", title: "Location strategy", description: "The right cluster, matched to industry, services and infrastructure needs.", points: ["Industry & business fit", "SSC services mapping", "Infrastructure assessment"] },
      { label: "Step 2", title: "SSC blueprint", description: "A conceptual plan covering every operational dimension.", points: ["Talent & teams plan", "Tech infrastructure design", "Process & billing model"] },
      { label: "Step 3", title: "Project management", description: "The blueprint executed on the ground.", points: ["Entity and approvals", "Talent search and selection", "Procurement and integration"] },
      { label: "Step 4", title: "Transition & billing", description: "Moving processes from business units to the SSC cleanly.", points: ["Chargeback policy", "Process transition", "Change management"] },
      { label: "Step 5", title: "Process optimisation", description: "Uniform, standardised delivery across business units.", points: ["Technology standardisation", "Process standardisation", "Process stabilisation"] },
      { label: "Step 6", title: "SSC governance", description: "The structure a multi-function SSC needs to stay accountable.", points: ["Governance organisation", "Metrics & reporting", "Compliance governance"] },
    ],
    whoItsFor: [
      "Global businesses centralising finance, HR, IT or procurement",
      "Companies wanting a standardised technology and process layer",
      "Organisations needing to flex headcount up or down with demand",
    ],
    benefits: [
      { title: "Cost savings", description: "Global SSCs in India carry roughly 40% extra cost saving over the top of standard offshore economics." },
      { title: "Centre of excellence", description: "Faster adoption of new technology and process excellence in focused functions." },
      { title: "Improved efficiency", description: "Standardisation removes duplication and lifts delivery consistency." },
      { title: "Scales with you", description: "Upscale or downscale the center as the business grows globally." },
    ],
    faqs: [
      { q: "Do you provide third-party SSC services?", a: "No — StepIndus provides consulting and project-management delivery to set up your own SSC. For a managed model, StepIndus can run offshore operations on your behalf while you retain ownership of the processes." },
      { q: "How long does an engagement take?", a: "From fact-finding to rollout of first services: roughly 3 months for a small SSC, up to 9 months for a mid-size build." },
      { q: "What functions work well in a shared services model?", a: "HR & payroll, recruitment, finance & accounting, IT services and procurement are the most common. Compliance management, contract management, legal back-office, product design and fraud management are a growing second wave." },
    ],
  },
  {
    slug: "manufacturing-centers",
    group: "GCC Services",
    title: "Global Manufacturing Centers",
    navTitle: "Global Manufacturing Centers",
    tagline: "Mid-size manufacturing setup in India's industrial clusters.",
    heroImage: "constructionSkyline",
    intro: [
      "Overseas Manufacturing Centers are set up in a remote geography to manufacture goods and components — giving the parent company a durable cost advantage, access to skilled labour, and a foothold in a large local market. As multinationals pursue a China-plus-one strategy, India's industrial corridors are one of the clearest beneficiaries.",
      "StepIndus runs this as a one-stop-shop: consulting and location strategy, EPC project management, and resourcing — covering legal approval, procurement, and installation through to commissioning.",
    ],
    stats: [
      { value: "6+", label: "Major Indian manufacturing clusters" },
      { value: "5", label: "National incentive schemes in active use" },
      { value: "1", label: "Single project office for the full EPC scope" },
    ],
    scope: [
      { label: "Service set 1", title: "India consulting", description: "Research, planning and a tailored blueprint.", points: ["Locate the right industrial park", "Sector-specific research", "Tailored strategic plan"] },
      { label: "Service set 2", title: "EPC service", description: "A project office managing the full EPC scope.", points: ["Legal approval", "Procurement", "Installation & commissioning"] },
      { label: "Service set 3", title: "Resources", description: "The people and supply chain the plant needs to operate.", points: ["Skilled talent & workforce", "Material & services supply", "Setup compliance"] },
    ],
    whoItsFor: [
      "Multinationals pursuing a China-plus-one diversification strategy",
      "Manufacturers in automobile, chemicals, textiles, biopharma or electronics",
      "Companies wanting post-operational support, not just a handover",
    ],
    benefits: [
      { title: "Cost savings", description: "Built on India's labour and material cost differential." },
      { title: "Leverage innovation", description: "Skilled talent applied to product and process improvement, not just assembly." },
      { title: "Improved efficiency", description: "A better-skilled workforce paired with modern plant technology." },
      { title: "Access to market", description: "A foothold in one of the world's largest domestic markets." },
    ],
    faqs: [
      { q: "What government incentives apply?", a: "Make in India, Production Linked Incentives (PLI), Special Economic Zones and the MOOWR customs scheme are the primary national programmes, alongside state-specific incentives." },
      { q: "Does StepIndus handle plant setup directly?", a: "StepIndus brings in specialised integration agencies and manages the full erection and commissioning project as a single point of accountability." },
      { q: "Is post-operational support available?", a: "Yes — compliance management, procurement and supply management, and talent sourcing continue after go-live." },
    ],
  },
  {
    slug: "india-entry",
    group: "Specialised Services",
    title: "India Entry Services",
    navTitle: "India Entry Services",
    tagline: "Four practical pathways into the Indian market — not just incorporation.",
    heroImage: "handSigningDoc",
    intro: [
      "Entering India is not simply about incorporating a company. It's about choosing the right route to market, understanding the regulatory environment, finding the right local counterparties, and building an operating model that actually works on the ground.",
      "StepIndus helps global companies move from \"should we enter India?\" to \"how should we enter India?\" — and then executes the chosen path across four distinct pathways.",
    ],
    stats: [{ value: "4", label: "Entry pathways" }, { value: "2", label: "Ways to secure a local operating base" }],
    scope: [
      { label: "Pathway 1", title: "Acquire an Indian business", description: "For companies seeking an established base, infrastructure or talent.", points: ["Target identification & screening", "Commercial & business assessment", "Financial, tax & legal due diligence", "Valuation, transaction & integration support"] },
      { label: "Pathway 2", title: "Build an Indian JV", description: "Combine international capital or IP with local market knowledge.", points: ["Partner identification & screening", "Capability assessment & stakeholder mapping", "JV structure & governance", "Government interface"] },
      { label: "Pathway 3", title: "Source from India", description: "Add India to a diversified global supply chain.", points: ["Supplier & manufacturer identification", "Capability, quality & compliance assessment", "Export/trade and Incoterms guidance", "Supply agreement support"] },
      { label: "Pathway 4", title: "Sell to India", description: "Test or scale the Indian market through local partners.", points: ["Distributor & channel-partner identification", "Import & regulatory pathway assessment", "Commercial launch planning", "Transition to a direct India operation"] },
    ],
    whoItsFor: ["Companies weighing acquisition vs. JV vs. organic entry", "Businesses wanting to add Indian suppliers to their global chain", "Brands testing Indian market demand before committing capital"],
    benefits: [
      { title: "Route evaluation", description: "A clear-eyed comparison of the four pathways against your actual objective." },
      { title: "Local terrain knowledge", description: "Regulatory and commercial dependencies mapped before you commit." },
      { title: "Right counterparty", description: "Partner and target identification grounded in real due diligence." },
      { title: "Coordinated execution", description: "One team carries the chosen path through to completion." },
    ],
    faqs: [],
  },
  {
    slug: "semiconductor-gcc",
    group: "Specialised Services",
    title: "Semiconductor GCC & Chip Design Center Setup",
    navTitle: "Semiconductor GCC Setup",
    tagline: "Silicon and VLSI engineering operations, from India entry to go-live.",
    heroImage: "circuitBoard",
    intro: [
      "India already hosts up to a fifth of the world's specialised semiconductor design engineers — Qualcomm, Intel and NVIDIA already lean on that talent for IP core development. The India Semiconductor Mission has shifted from capacity creation under Semicon 1.0 (₹76,000 crore) to full supply-chain maturity under Semicon 2.0 (₹1,27,500 crore), with Tata Electronics-PSMC, Micron, CG Power-Renesas, the HCL-Foxconn JV and SiCSem among the major entrants.",
      "The ambition is a USD 120–150 billion semiconductor hub by 2035, with domestic demand — EVs, 5G, power electronics, data centers — on a path past USD 90–100 billion. StepIndus helps fabless design teams, EDA and IP companies, and semiconductor systems engineering groups turn that opportunity into an operational India center.",
    ],
    stats: [
      { value: "~20%", label: "Of global semiconductor design engineers are in India" },
      { value: "₹1,27,500 Cr", label: "Semicon 2.0 outlay" },
      { value: "$120–150B", label: "Targeted hub value by 2035" },
    ],
    scope: [
      { label: "", title: "India entry — captive center or JV", description: "City selection, operating model, cost assessment and ecosystem access.", points: [] },
      { label: "", title: "Regulatory & government interface", description: "Entity setup, FDI, site approvals and incentive assessment.", points: [] },
      { label: "", title: "Design talent & leadership", description: "Leadership hiring and specialist VLSI/RTL recruitment coordination.", points: [] },
      { label: "", title: "Engineering infrastructure", description: "Design-workstation environments, secure IT infrastructure and vendor coordination.", points: [] },
      { label: "", title: "PMO, setup to launch", description: "Program management from approval through go-live and expansion.", points: [] },
    ],
    whoItsFor: ["Fabless semiconductor companies (RTL design, verification, physical design)", "EDA and semiconductor IP companies", "Automotive, telecom and power-electronics engineering groups"],
    benefits: [
      { title: "End-to-end setup", description: "From entry decision to an operational chip-design engineering center." },
      { title: "Verified talent access", description: "Specialist VLSI and semiconductor recruitment, not generalist IT hiring." },
      { title: "Policy fluency", description: "Design Linked Incentive and ISM scheme navigation built in." },
    ],
    faqs: [],
  },
  {
    slug: "sez-unit-setup",
    group: "Specialised Services",
    title: "SEZ Unit Setup",
    navTitle: "SEZ Unit Setup",
    tagline: "Structural efficiency, not a tax-holiday relic.",
    heroImage: "networkCables",
    intro: [
      "The Special Economic Zone regime is often misread as a legacy tax incentive. Under the SEZ Act 2005, it remains one of India's most powerful structural tools for export-led GCCs and manufacturing platforms — the value has simply shifted from direct tax arbitrage to indirect tax efficiency, customs optimisation, and capital flexibility.",
      "StepIndus doesn't treat SEZ as a compliance checkbox. The right question isn't \"should we register in an SEZ?\" — it's \"does SEZ structurally improve our India operating model over the next decade?\"",
    ],
    stats: [{ value: "2005", label: "SEZ Act in force" }, { value: "100%", label: "Duty-free import of capital goods for authorised operations" }],
    scope: [
      { label: "", title: "SEZ evaluation", description: "A quantified, board-ready decision matrix.", points: ["SEZ vs. non-SEZ financial modelling", "Capex intensity & export ratio sensitivity", "State-level SEZ comparison", "Captive SEZ feasibility review"] },
      { label: "", title: "Regulatory approvals", description: "A legally robust, fiscally efficient, scalable model.", points: ["SEZ unit approval", "Customs & GST alignment", "FEMA structuring advisory", "Capital structure & ECB review"] },
      { label: "", title: "Execution & lifecycle", description: "Engagement doesn't end at approval.", points: ["Approval coordination", "Upfront import clearances", "Set-up phase compliance oversight", "Expansion & exit planning"] },
    ],
    whoItsFor: ["GCCs in IT/ITeS, engineering & R&D, or shared services", "Export-oriented and high-import-content manufacturers", "Multi-country distribution and global value-chain platforms"],
    benefits: [
      { title: "Beyond tax holidays", description: "A structural view of trade flows, GST architecture and export positioning." },
      { title: "Board-ready decisions", description: "A quantified matrix, not a generic recommendation." },
      { title: "Engaged beyond setup", description: "SEZ decisions carry long-term implications — StepIndus stays engaged through expansion and exit planning." },
    ],
    faqs: [],
  },
  {
    slug: "consulting-research",
    group: "Specialised Services",
    title: "India GCC Consulting & Research",
    navTitle: "Consulting & Research",
    tagline: "Policy-first advisory that designs the operating model, not just a market report.",
    heroImage: "flatlayResearch",
    intro: [
      "StepIndus operates at the intersection of investment strategy, trade policy, tax structuring and execution governance — ensuring India operations are compliant, capital-efficient, and structurally future-ready from day one. This is deliberately not generic market-entry advice: it's policy-first advisory backed by implementation oversight.",
      "A dedicated research practice sits alongside the advisory work — location research, industry benchmarking and sector studies that build a data-driven business case before a single rupee is committed.",
    ],
    stats: [{ value: "4", label: "Advisory pillars" }, { value: "3", label: "Research service lines" }],
    scope: [
      { label: "Pillar 1", title: "GCC location & regulatory structuring", description: "", points: ["SEZ vs. non-SEZ evaluation", "State policy benchmarking", "Multi-city deployment strategy", "Captive SEZ feasibility"] },
      { label: "Pillar 2", title: "Policy & incentive optimisation", description: "", points: ["Central & state incentive mapping", "GST optimisation for exports", "Import/export duty structuring", "ECB & capital structuring advisory"] },
      { label: "Pillar 3", title: "Risk mitigation & compliance architecture", description: "", points: ["FEMA compliance structuring", "STPI vs. SEZ evaluation", "Permanent establishment risk assessment", "Transfer pricing alignment"] },
      { label: "Pillar 4", title: "Execution governance", description: "", points: ["Regulatory approvals management", "Government interface strategy", "Single-window navigation", "Timeline & critical-path monitoring"] },
    ],
    whoItsFor: ["Fortune 500 corporations setting up India GCCs", "Mid-sized global firms entering India for the first time", "PE-backed platform expansions"],
    benefits: [
      { title: "Policy-first", description: "Deep fluency in India's trade, industrial and investment frameworks." },
      { title: "Integrated structuring", description: "Legal, tax, regulatory and operational considerations resolved in one blueprint." },
      { title: "Right-first-time", description: "Architecture designed to avoid costly restructuring later." },
    ],
    faqs: [],
  },
  {
    slug: "global-talent-pool",
    group: "Specialised Services",
    title: "Global Talent Pool",
    navTitle: "Global Talent Pool",
    tagline: "Wave-based recruitment and dedicated teams for your India operation.",
    heroImage: "serverRoomWoman",
    intro: [
      "Acquiring and retaining the right talent is the single biggest determinant of a GCC's early success. StepIndus runs a transparent, no-hidden-cost search and selection process — no proprietary platform fee, no black-box recruitment.",
      "Dedicated teams can sit inside your own captive GCC, or be set up and run by StepIndus as a managed service, with India offering an unmatched talent base: over 2.5 million STEM graduates every year.",
    ],
    stats: [{ value: "2.5M+", label: "STEM graduates annually" }, { value: "1–16 wks", label: "Typical time to first hire" }, { value: "100–150", label: "Team members in a 12-week first wave" }],
    scope: [
      { label: "Step 1", title: "Search", description: "A three-wave search and select process.", points: ["Search for teams", "Hunt for leaders", "Select and form teams"] },
      { label: "Step 2", title: "Induct", description: "Onboarding staged to the GCC build.", points: ["Induction support", "Onsite training support", "HR handholding through setup"] },
      { label: "Step 3", title: "People process", description: "The HR backbone a new center needs from day one.", points: ["HR policy setup", "Compliance setup", "Ongoing compliance management"] },
    ],
    whoItsFor: ["GCCs, SSCs, manufacturing and R&D centers needing project-mode hiring", "Companies wanting a dedicated offshore team without platform overhead", "Organisations needing payroll managed through the setup phase"],
    benefits: [
      { title: "No hidden costs", description: "Transparent search and selection, not a subscription platform." },
      { title: "Wave methodology", description: "Leaders first, then operational teams, with CxO search run in parallel." },
      { title: "No ceiling on scale", description: "First waves of 100–150 people in roughly 12 weeks are routine." },
    ],
    faqs: [],
  },
  {
    slug: "startup-regulatory-advisory",
    group: "Specialised Services",
    title: "Startup Regulatory Advisory",
    navTitle: "Startup Regulatory Advisory",
    tagline: "Clean compliance and governance built for a Series A or B round.",
    heroImage: "monochromeCollab",
    intro: [
      "When a startup moves from the survival phase into scale, its risk profile changes fast. The \"move fast and break things\" mentality that won product-market fit can leave administrative and legal debt that becomes fatal under institutional scrutiny.",
      "A single unaddressed compliance failure, an unmapped regulatory risk, or a messy capitalisation table can derail a funding round, invite penalties, or damage reputation. Good governance advisory turns compliance from a bureaucratic hurdle into a competitive advantage.",
    ],
    stats: [{ value: "3", label: "Core service lines" }],
    scope: [
      { label: "", title: "Regulatory compliance setup", description: "Deliverable: a quantified, board-ready decision matrix.", points: ["Filing systems for all applicable regulations", "Industry-specific compliance coverage"] },
      { label: "", title: "Corporate governance setup", description: "Deliverable: a structure built to scale quickly.", points: ["Board-level governance structures", "Strategic and operational-level controls"] },
      { label: "", title: "Investment readiness audit", description: "Deliverable: a clean, process-oriented environment for growth.", points: ["Cap-table clean-up", "Due-diligence red-flag resolution", "Legal structure streamlining"] },
    ],
    whoItsFor: ["Growth-stage startups preparing for Series A/B", "Founders inheriting early-stage compliance debt", "Companies preparing for partnerships or joint ventures"],
    benefits: [
      { title: "Investor-ready", description: "Corporate hygiene that builds trust with institutional investors on first review." },
      { title: "Built to scale", description: "Governance structures sized for where the company is going, not just where it is." },
    ],
    faqs: [],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
