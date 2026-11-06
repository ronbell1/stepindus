import type { ImageKey } from "@/lib/images";

export type Project = {
  slug: string;
  client: string;
  clientUrl?: string;
  clientConcealed?: boolean;
  title: string;
  industry: string;
  location: string;
  scheme: string;
  summary: string;
  heroImage: ImageKey;
  requirement: string[];
  entity: string;
  engagement: string[];
  execution: { title: string; description: string }[];
  outcome: { value: string; label: string }[];
  outcomeNote: string;
  testimonial?: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "ua-brands",
    client: "UA Brands (Uniform Advantage)",
    clientUrl: "https://www.uabrandscareers.com/",
    title: "A 120-person Shared Services Center, live in six months",
    industry: "Apparel & Healthcare Uniforms",
    location: "Pune, Special Economic Zone",
    scheme: "SEZ",
    summary:
      "A US apparel manufacturer needed a Shared Services Center supporting e-commerce, business intelligence, creative design, finance and HR — built end-to-end inside a Special Economic Zone.",
    heroImage: "openPlanFloor",
    requirement: [
      "IT for e-commerce",
      "Business intelligence",
      "Creative design",
      "Finance",
      "HR",
      "Fraud detection",
      "Data entry",
    ],
    entity:
      "Private Limited, 100% subsidiary — founded by two Indian directors, later infused with FDI from the principal under the 100% automatic route.",
    engagement: [
      "Offshore destination study and pilot talent search",
      "End-to-end consulting and set-up of a Global Center under a Special Economic Zone",
    ],
    execution: [
      { title: "Legal approvals", description: "SEZ setup approvals with import management; tax and incentive setup and management through the build." },
      { title: "Talent", description: "100+ FTEs recruited across senior, middle and junior roles plus the management team." },
      { title: "Facility", description: "10,000 sq. ft. captive facility built out with power backup, fire & safety, access control, cafeteria and training space." },
      { title: "Technology", description: "Server farms, communications and computing infrastructure stood up from scratch." },
      { title: "Process", description: "Billing to parent, transfer pricing, HR policy and travel policy all established." },
      { title: "Governance", description: "Full governance structure put in place before handover." },
    ],
    outcome: [
      { value: "6 months", label: "To operational go-live" },
      { value: "120+", label: "FTEs on site" },
      { value: "12 months", label: "Total engagement" },
    ],
    outcomeNote: "Center completed and made operational in six months; total engagement spanned twelve.",
    testimonial: {
      quote:
        "Sudhir is a huge asset for any company. His direction and execution is exceptional. I would highly recommend Sudhir.",
      name: "Susan Masimore",
      role: "UA Brands (Uniform Advantage)",
    },
  },
  {
    slug: "alamy-images",
    client: "Alamy Images",
    clientUrl: "https://www.alamy.com/",
    title: "A 100-person e-commerce GCC for a UK digital-content startup",
    industry: "Internet & E-commerce",
    location: "TechnoPark, Trivandrum",
    scheme: "STPI",
    summary:
      "A UK-based internet startup needed an e-commerce back office covering product development, business intelligence, picture research, finance and HR — delivered under the Software Technology Parks of India scheme.",
    heroImage: "monochromeCollab",
    requirement: [
      "Product development for e-commerce",
      "Business intelligence",
      "Picture research",
      "Finance",
      "HR",
    ],
    entity:
      "Private Limited, 100% subsidiary — founded by two Indian directors, later infused with FDI from the principal under the 100% automatic route.",
    engagement: ["End-to-end consulting and set-up of a Global Center under the STPI scheme"],
    execution: [
      { title: "Legal approvals", description: "STPI approvals secured; tax and incentive setup managed through the build." },
      { title: "Talent", description: "80+ FTEs recruited across senior, middle and junior roles plus the management team." },
      { title: "Facility", description: "A captive facility built out in TechnoPark Trivandrum with power backup, fire & safety and access control." },
      { title: "Technology", description: "Server farms, communications and computing infrastructure delivered." },
    ],
    outcome: [
      { value: "5 months", label: "To operational go-live" },
      { value: "100+", label: "FTEs on site" },
      { value: "12 months", label: "Total engagement" },
    ],
    outcomeNote: "Center completed and made operational in five months — the fastest of StepIndus's disclosed builds.",
  },
  {
    slug: "engineering-feasibility-study",
    client: "A speciality materials manufacturer",
    clientConcealed: true,
    title: "An 8-week location study for a global engineering center",
    industry: "Speciality Materials",
    location: "Confidential — comparative study across multiple clusters",
    scheme: "Feasibility study",
    summary:
      "A global speciality-materials manufacturer needed an independent location study before committing to a shared-services engineering center — comparing talent, infrastructure and industrial-cluster fit across candidate cities.",
    heroImage: "safetyGoggles",
    requirement: [
      "Engineering services for materials design and research",
      "Logistics & compliance",
      "Finance",
      "HR",
      "IT",
    ],
    entity: "Not applicable — scoped as a location study, not an entity build.",
    engagement: ["Offshore destination (location) study report, delivered to the client's management"],
    execution: [
      { title: "Cluster mapping", description: "Candidate cities assessed against the client's specific business and talent requirements." },
      { title: "Talent availability", description: "Availability compared across line functions and seniority levels." },
      { title: "Infrastructure comparison", description: "Technology-park options benchmarked for workspace fit." },
    ],
    outcome: [{ value: "8 weeks", label: "Study turnaround" }],
    outcomeNote:
      "Delivered as a standalone consulting engagement — one example of how StepIndus's modular model lets clients commission research alone, ahead of any build decision.",
  },
  {
    slug: "captive-offshore-center",
    client: "A global technology company",
    clientConcealed: true,
    title: "A captive center that grew from 100 to 800 people",
    industry: "Technology",
    location: "Trivandrum, STPI",
    scheme: "STPI",
    summary:
      "A technology company with operations across the UK, Europe, the US and Australia needed a product-development center that could scale into a full Global Capability Center over time — not a fixed-size back office.",
    heroImage: "serverRoomWoman",
    requirement: [
      "IT product development",
      "IT services support",
      "Finance",
      "HR",
      "Legal",
      "Customer support (non-voice)",
    ],
    entity:
      "Private Limited, 100% subsidiary — founded by two Indian directors, later infused with FDI from the principal under the 100% automatic route.",
    engagement: [
      "End-to-end set-up, followed by multi-year post-setup advisory",
      "StepIndus leadership retained on the client's board as a non-executive director for eight years",
    ],
    execution: [
      { title: "Talent acquisition", description: "Project-mode recruitment delivered the initial build in record time." },
      { title: "Scope evolution", description: "The center started with product-development support and was later upgraded into a full shared-services GCC." },
      { title: "Long-term governance", description: "Continued board-level advisory long after the initial build was complete." },
    ],
    outcome: [
      { value: "9 months", label: "To operational go-live" },
      { value: "100 → 800", label: "FTE growth over time" },
      { value: "8 years", label: "Continued board advisory" },
    ],
    outcomeNote:
      "The longest-running relationship StepIndus's leadership has disclosed — from a 100-person build to an 800-person Global Capability Center, with board-level involvement for eight years.",
    testimonial: {
      quote:
        "I have worked extensively with Sudhir Singh over nearly ten years. He managed a successful project to set up a green field offshore development and support centre and achieved operational start up with a brand new team of IT professionals. He is experienced and knowledgeable in technical, organisational and commercial matters relevant to setting up and running offshore operations for multinational companies, and had board-level experience as a non-executive director for an offshore subsidiary of a large UK IT group.",
      name: "Colin Watson",
      role: "Radwell Consulting",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
