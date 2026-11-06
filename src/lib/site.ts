export const siteConfig = {
  name: "StepIndus",
  legalName: "StepIndus Consulting LLP",
  tagline: "Launch your India GCC in 90 days",
  description:
    "StepIndus is an execution-led partner for building Global Capability Centres in India — Captive GCC setup or GCC-as-a-Service, from board approval to go-live.",
  url: "https://www.stepindus.com",
  contact: {
    phonePrimary: "+91 77039 98086",
    phonePrimaryHref: "tel:+917703998086",
    phoneWhatsApp: "+91 96505 76567",
    phoneWhatsAppHref: "https://wa.me/919650576567",
    email: "connect@stepindus.com",
    emailHref: "mailto:connect@stepindus.com",
    address: {
      line1: "Majestic Signia, 1st Floor, Awfis",
      line2: "Plot No. A-27, Block A, Industrial Area, Sector 62",
      line3: "Noida, Uttar Pradesh 201309, India",
      full: "Majestic Signia, 1st Floor, Awfis, Plot No. A-27, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/in/sudhirsingh/",
  },
} as const;

export const NAV_SERVICE_GROUPS = [
  {
    label: "GCC Services",
    items: [
      { title: "GCC Setup Service", slug: "gcc-setup", blurb: "Captive or GCC-as-a-Service, approval to go-live." },
      { title: "Engineering & R&D Centers", slug: "engineering-rd-centers", blurb: "Move up the value chain into product engineering." },
      { title: "Shared Services Centers", slug: "shared-services-centers", blurb: "Centralised, multi-function SSC delivery." },
      { title: "Global Manufacturing Centers", slug: "manufacturing-centers", blurb: "Overseas manufacturing, China-plus-one ready." },
    ],
  },
  {
    label: "Specialised Services",
    items: [
      { title: "India Entry Services", slug: "india-entry", blurb: "Acquire, partner, source, or sell into India." },
      { title: "Semiconductor GCC Setup", slug: "semiconductor-gcc", blurb: "Silicon & VLSI engineering operations." },
      { title: "SEZ Unit Setup", slug: "sez-unit-setup", blurb: "Structural, not just tax-holiday, SEZ strategy." },
      { title: "Consulting & Research", slug: "consulting-research", blurb: "Policy-first advisory and location research." },
      { title: "Global Talent Pool", slug: "global-talent-pool", blurb: "Dedicated teams, wave-based recruitment." },
      { title: "Startup Regulatory Advisory", slug: "startup-regulatory-advisory", blurb: "Governance and compliance for scale-ups." },
    ],
  },
] as const;

export const PRIMARY_NAV = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Insights", href: "/insights" },
] as const;
