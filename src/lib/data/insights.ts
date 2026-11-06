import type { ImageKey } from "@/lib/images";

export type InsightSection = { heading?: string; paragraphs: string[] };

export type Insight = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  author: "Sudhir Singh" | "Poonam Singh";
  category: string;
  heroImage: ImageKey;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "interim-coo-for-india-gcc-setup",
    title: "Get an Interim COO for Your India GCC Setup & Launch",
    dek: "Many boards approve a GCC before they have a trusted operator on the ground. An interim COO model closes that gap without a premature permanent hire.",
    date: "2026-10-12",
    author: "Sudhir Singh",
    category: "Execution",
    heroImage: "meetingBrickWall",
    sections: [
      {
        paragraphs: [
          "Many companies decide to establish a GCC or a manufacturing center in India but do not yet have an on-ground operator they trust with day-to-day decisions. Hiring a permanent country leader before the center exists is expensive and risky — there is no organisation for them to lead yet, and the role will change shape completely once the center is live.",
          "An interim COO model solves the sequencing problem. Instead of recruiting a permanent leader against a blueprint, an experienced operator runs the build phase — entity setup, talent, facility, governance — and then either hands over to a permanent hire the client makes with full confidence, or StepIndus continues in an Operate capacity.",
        ],
      },
      {
        heading: "Why sequencing the leadership decision matters",
        paragraphs: [
          "A permanent country leader hired too early is being asked to build an organisation and run one simultaneously — two very different skill sets. An interim arrangement separates them cleanly: build first, lead second.",
          "It also removes a single point of failure. If a newly hired permanent leader doesn't work out six months in, the GCC's entire momentum stalls. An interim model keeps StepIndus accountable for the build regardless of who leads the organisation afterward.",
        ],
      },
      {
        heading: "What the interim COO actually owns",
        paragraphs: [
          "Day-to-day decisions across legal and regulatory compliance, the talent build, technology integration, facility readiness and the first operating rhythms — the same six modules that structure every StepIndus GCC build, but with one accountable person making the calls in real time rather than a committee reviewing status updates.",
        ],
      },
    ],
  },
  {
    slug: "bharat-industrial-development-scheme-bhavya",
    title: "Bharat Industrial Development Scheme (Bhavya): What It Means for GCCs and Manufacturing",
    dek: "A ₹33,660 crore commitment to 100 plug-and-play industrial parks is a meaningful shift from incentive-led attraction to infrastructure-led competitiveness.",
    date: "2026-04-01",
    author: "Sudhir Singh",
    category: "Policy",
    heroImage: "constructionSkyline",
    sections: [
      {
        paragraphs: [
          "The Bharat Industrial Development Scheme — Bharat Audyogik Vikas Yojna, or Bhavya — commits ₹33,660 crore to developing 100 world-class industrial parks across India. It's one of the larger single-focused industrial infrastructure pushes in recent years, and if executed well, it could meaningfully improve India's ease-of-doing-business ranking for manufacturing setup.",
        ],
      },
      {
        heading: "From land acquisition to plug-and-play",
        paragraphs: [
          "The most persistent friction in Indian industrial setup has always been the long gestation period: land acquisition, approvals, utilities and connectivity routinely stretch timelines to years. Bhavya's plug-and-play model attacks that directly, with pre-cleared land, ready trunk infrastructure, and faster approval frameworks baked into each park from day one.",
          "That changes the investment calculus. Instead of spending years navigating administrative complexity, companies can focus on production and scaling almost immediately.",
        ],
      },
      {
        heading: "How the capital is structured",
        paragraphs: [
          "The scheme offers up to ₹1 crore per acre for internal infrastructure, and up to 25% of project cost for external connectivity such as roads and logistics links. States contribute land; private developers are actively courted to bring execution efficiency. It's a hybrid risk model — governments de-risk early infrastructure, developers bring delivery speed, and investors get a materially more viable project from day one.",
        ],
      },
      {
        heading: "Who it's built for",
        paragraphs: [
          "With contiguous land parcels of 100–1,000 acres and integrated logistics, these parks are well suited to electronics and semiconductor manufacturing, automotive and EV ecosystems, engineering and R&D centers, and pharmaceuticals and speciality chemicals — sectors already central to global supply-chain diversification.",
          "Unlike SEZ-era frameworks built around tax incentives, Bhavya leans on infrastructure readiness and flexibility for both domestic and export-oriented businesses — a genuine shift from incentive-led attraction to efficiency-led competitiveness. Execution consistency across states will determine how much of that promise is realised.",
        ],
      },
    ],
  },
  {
    slug: "gcc-and-india-as-destination",
    title: "Global Capability Centers (GCCs) and India as a Destination",
    dek: "India's GCC industry isn't a recent trend — it's a three-decade build-up now entering its most ambitious phase yet.",
    date: "2026-02-27",
    author: "Sudhir Singh",
    category: "Market",
    heroImage: "heroSkyscrapers",
    sections: [
      {
        paragraphs: [
          "A Global Capability Center is, at its simplest, a 100% subsidiary of a multinational set up in a remote geography to conduct a variety of operations and services on the parent's behalf. What's changed over three decades is not the concept — it's the scope of what that subsidiary is trusted to own.",
        ],
      },
      {
        heading: "Three generations of the same idea",
        paragraphs: [
          "Early offshore centers in the late 1980s — Texas Instruments and Motorola among the first into Bangalore — were Offshore Development Centers, focused on software development and maintenance. The next wave brought back-office BPO/KPO work and Shared Services Centers, aimed at standardising process and cutting cost across an enterprise. What we now call a GCC, or Global In-house Center, represents the third generation: full in-house ownership of increasingly strategic work, including product engineering, R&D and market-facing services that used to sit only at headquarters.",
        ],
      },
      {
        heading: "The scale today",
        paragraphs: [
          "By 2024, India hosted an estimated 1,800+ GCCs employing over 1.5 million people. Per the Economic Survey, GCCs employed nearly 2 million people in 2023, with 42%+ of that workforce in engineering, research and development. The ER&D segment alone grew 30% to $25 billion that year; IT grew 30% to $9.7 billion; BPM grew 27% to $10.7 billion. The Survey projects GCCs will contribute 3.5% of India's GDP by 2030 — roughly $121 billion in revenue.",
          "States are now competing directly for this investment: Karnataka and Uttar Pradesh have both introduced dedicated GCC policies, and the Union Budget's 12 new industrial corridors under the National Industrial Corridor Development Programme add further infrastructure weight behind the push.",
        ],
      },
    ],
  },
  {
    slug: "sez-scheme-strategic-relevance",
    title: "SEZ Scheme for India GCC: Strategic Relevance Post Tax-Holiday Era",
    dek: "The income-tax holiday is gone. The structural case for an SEZ is, if anything, stronger.",
    date: "2026-02-24",
    author: "Sudhir Singh",
    category: "Policy",
    heroImage: "networkCables",
    sections: [
      {
        paragraphs: [
          "The Special Economic Zone scheme continues to be structurally relevant for GCCs even after the sunset of direct income-tax holidays. The value proposition has simply moved — from direct tax arbitrage to indirect tax efficiency, customs optimisation, capital flexibility, and genuine regulatory ease.",
        ],
      },
      {
        heading: "What an SEZ actually is",
        paragraphs: [
          "An SEZ is a notified geographical territory treated as a deemed foreign territory for trade operations and duties, governed by the SEZ Act 2005 and SEZ Rules 2006. It carries a separate customs boundary, liberalised foreign-exchange regulations, and simplified single-window compliance — a distinct regime from a standard Domestic Tariff Area operation.",
          "SEZs are now operational across nearly every major GCC cluster — Bengaluru, Delhi NCR, Chennai, Pune, Mumbai and Hyderabad at Tier 1, and Trivandrum, Kochi, Chandigarh, Indore, Jaipur, Gandhinagar, Coimbatore, Bhubaneswar and Nagpur at Tier 2/3 — with most major IT/ITeS clusters carrying notified IT-specific SEZ infrastructure already in place.",
        ],
      },
      {
        heading: "Why it still makes sense without the tax holiday",
        paragraphs: [
          "SEZ units retain 100% duty-free import of capital goods, raw materials, IT hardware and equipment for authorised operations — a meaningful saving given customs duty can run 10–40% outside the zone. That matters most for engineering and R&D centers, hardware-intensive GCCs, and manufacturing centers importing plant and machinery.",
          "On GST, SEZ units get zero-rated export supplies, GST exemption on authorised domestic procurement, and a simplified input-credit mechanism — meaningfully lower working-capital blockage than a DTA operation. And on capital flexibility: most sectors sit under the automatic FDI route, ECBs up to USD 500 million a year are available without minimum-maturity restriction, and profit repatriation is cleaner than under a standard DTA structure.",
          "Taken together, these are not consolation benefits for a lost tax holiday — they're a genuinely different, and in several respects stronger, structural case for building inside an SEZ.",
        ],
      },
    ],
  },
  {
    slug: "global-manufacturing-hub-budget-2026",
    title: "Global Manufacturing Hub: The Budget 2026 Boost",
    dek: "A record ₹12.2 lakh crore capex push, built around seven strategic sectors — most of them directly relevant to GCC and manufacturing investors.",
    date: "2026-02-10",
    author: "Sudhir Singh",
    category: "Policy",
    heroImage: "constructionSkyline",
    sections: [
      {
        paragraphs: [
          "The Union Budget 2026-27, presented on 1 February 2026, set out a deliberate strategy to position India as a global manufacturing hub — anchored by seven strategic sectors, a sharp infrastructure push, and stronger MSME support, all sitting inside a record ₹12.2 lakh crore capital-expenditure programme supporting Make in India.",
        ],
      },
      {
        heading: "The strategic and frontier sectors getting scaled",
        paragraphs: [
          "Biopharma SHAKTI carries a ₹10,000 crore outlay over five years to build India into a global biopharma hub, including new and upgraded NIPER institutes. Electronics component manufacturing gets a ₹40,000 crore allocation. Semiconductors move into ISM 2.0, with focus shifting toward manufacturing equipment, materials and full-stack Indian IP. Dedicated rare-earth corridors, a five-year ₹10,000 crore container-manufacturing scheme, and three new dedicated chemical parks round out the sector list — of which biopharma, electronics components, semiconductors and chemicals are the segments most directly aimed at attracting global manufacturing investment into India.",
        ],
      },
      {
        heading: "MSME support and infrastructure",
        paragraphs: [
          "A ₹10,000 crore SME Growth Fund, a ₹2,000 crore top-up to the Self-Reliant India Fund, strengthened TReDS participation from CPSEs, and a new \"Corporate Mitras\" cadre to help MSMEs navigate compliance round out the smaller-enterprise support. On infrastructure, the Budget revives industrial clusters, opens new freight corridors, commits ₹20,000 crore over five years to Carbon Capture, Utilisation and Storage, and simplifies customs tariff structures — each one a direct input into the cost and speed of standing up a new manufacturing center in India.",
        ],
      },
    ],
  },
  {
    slug: "safe-harbour-reform-budget-2026",
    title: "Safe Harbour Reform in Budget 2026: What It Means for GCCs",
    dek: "A uniform 15.5% safe harbour margin and a revenue threshold raised nearly sevenfold removes years of transfer-pricing uncertainty for mid-market GCCs.",
    date: "2026-02-06",
    author: "Sudhir Singh",
    category: "Policy",
    heroImage: "stockChartScreen",
    sections: [
      {
        paragraphs: [
          "A safe harbour clause — most relevant here under India's transfer-pricing rules — shields a taxpayer from detailed scrutiny or penalties once they meet specific, predetermined requirements. Because a GCC is established as a 100% Indian subsidiary of its foreign parent, it must comply with transfer-pricing regulations on every intercompany transaction — which makes safe harbour reform directly material to how a GCC is taxed and audited.",
        ],
      },
      {
        heading: "What changed in the Union Budget 2026-27",
        paragraphs: [
          "The Budget consolidated software development, ITES, KPO and contract R&D into a single \"Information Technology Services\" category for safe harbour purposes, prescribed a uniform margin of roughly 15.5%, and — critically for mid-market entrants — raised the eligibility threshold from ₹300 crore to ₹2,000 crore in revenue. Approvals are now automated and can be locked in for up to five years, a material gain in predictability over the prior annual-review model.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Consider a US technology company's Bangalore GCC with ₹1,500 crore annual turnover, providing software development, data analytics and R&D to its parent. Before the Budget, its turnover exceeded the ₹300 crore threshold, so it couldn't use the pre-agreed safe harbour margin — meaning complex annual transfer-pricing audits and recurring disputes over whether its 12% operating margin was arm's length, often dragging on for three to four years.",
          "Post-Budget, the same company sits comfortably under the new ₹2,000 crore threshold, qualifies for the unified IT Services category, applies the flat 15.5% margin, and can lock that rate in for five years through an automated approval — collapsing years of compliance uncertainty into a known, fixed cost.",
        ],
      },
      {
        heading: "Beyond core IT services",
        paragraphs: [
          "Foreign companies running cloud and data-centre services out of Indian infrastructure now have a 15% cost-based safe harbour for related-party pricing — a direct incentive to locate core, value-generating infrastructure in India rather than service it remotely. Non-resident firms warehousing electronic components in bonded logistics zones also see a proposed 2% safe harbour on invoice value, lowering the compliance burden on inbound component logistics tied to manufacturing investment.",
        ],
      },
    ],
  },
  {
    slug: "shared-services-centers-efficiency-growth",
    title: "Shared Services Centers in India: Efficiency-Induced Growth From Within",
    dek: "SSCs aren't a cost play alone — done well, they become the most consistently improving part of a global organisation.",
    date: "2025-03-08",
    author: "Poonam Singh",
    category: "Operations",
    heroImage: "developerDualMonitor",
    sections: [
      {
        paragraphs: [
          "Organisations evolve organically — and as they grow, they accumulate redundancy, non-standard processes and fragmented technology across geographies. That complexity quietly erodes profitability and slows the business down. A Shared Services Center is how many multinationals address it: a centralised, in-house unit delivering common business services to multiple departments and dispersed business units at once.",
          "Traditionally that meant HR, accounting, finance, IT support, customer service and procurement. Modern SSCs have expanded well past that, taking on compliance, legal, fraud detection, engineering and design — and using automation to do it at a consistency no fragmented, multi-site operation can match.",
        ],
      },
      {
        heading: "SSC or GCC — what's the difference?",
        paragraphs: [
          "A captive SSC is a centralised back-office unit delivering shared services — HR, finance, IT, legal, payroll — to business units under the same corporate umbrella. A GCC, often called a captive center, goes further: it extends into research and development, product engineering and other strategic work that's core to the parent's competitive position, not just operational support.",
        ],
      },
      {
        heading: "Why MNCs keep choosing India",
        paragraphs: [
          "Centralised operations reduce redundancy and standardise workflow; best practices spread faster when they live in one place. On cost, consolidating back-office functions into a low-cost location like India typically reduces operational costs by 30–50% compared with decentralised models, according to Deloitte research. On technology, intelligent process automation and robotic process automation can cut transaction processing time by 60–80% while improving compliance — and India's deep bench of finance, IT, HR and analytics talent keeps the SSC model resilient even as automation takes over the most repetitive work.",
        ],
      },
    ],
  },
  {
    slug: "captive-engineering-rd-centers-guide",
    title: "Captive Engineering & R&D Centers in India: A Complete Guide",
    dek: "India's R&D story started in 1985 — and the work being done inside captive centers now sits far closer to the core of global innovation than most people realise.",
    date: "2025-02-10",
    author: "Poonam Singh",
    category: "Engineering",
    heroImage: "automotiveEngineer",
    sections: [
      {
        paragraphs: [
          "Captive engineering and R&D centers in India are 100%-owned subsidiaries of multinationals, focused squarely on research, product development and engineering services — in effect, a GCC whose mandate is innovation rather than operations. Because they're in-house rather than outsourced, the parent keeps full control over resulting IP and strategic direction, while still accessing India's cost and talent advantage.",
        ],
      },
      {
        heading: "What an engineering center actually does",
        paragraphs: [
          "Product design and development — balancing functionality with market needs, often using digital simulation to compress development cycles. Process optimisation — refining manufacturing technique to cut waste and raise output, especially in automotive and aerospace. Testing and quality assurance against international standards, including advanced vehicle-systems testing for global automakers already run out of India. And project management that keeps cross-functional engineering work on time and on budget.",
        ],
      },
      {
        heading: "What an R&D center adds on top",
        paragraphs: [
          "Scientific research and discovery in fields from AI to bioengineering to renewable energy — India-based R&D has already contributed to low-cost solar panel breakthroughs. Prototyping and proof-of-concept work, particularly active in electric vehicles. Intellectual property creation, protected under India's increasingly robust patent regime. And long-horizon technology work, including emerging quantum computing research.",
        ],
      },
      {
        heading: "Why India, and why now",
        paragraphs: [
          "Texas Instruments set up India's first corporate R&D center in 1985; Motorola followed in 1991. Four decades on, that early bet has compounded into one of the world's deepest, most cost-competitive engineering talent pools — and the reason captive R&D remains one of the clearest ways for a global company to buy real innovation capacity, not just lower-cost headcount.",
        ],
      },
    ],
  },
  {
    slug: "pune-manufacturing-gcc-engineering-hub",
    title: "Pune: A Technology Hub Choice for GCC and Manufacturing Center Setups",
    dek: "India's eighth-largest metro pairs two of its biggest GCC technology parks with a deep, established manufacturing base — a combination few other Indian cities can match.",
    date: "2025-02-08",
    author: "Poonam Singh",
    category: "Locations",
    heroImage: "officeWindowPlant",
    sections: [
      {
        paragraphs: [
          "Pune is India's eighth-largest metropolis, Maharashtra's second-largest city, and arguably western India's best-industrialised district — a roughly nine-million-person metro with a historical pedigree as the seat of the Maratha empire, and a present-day reputation as one of India's two or three strongest GCC and manufacturing locations at once.",
        ],
      },
      {
        heading: "The GCC clusters",
        paragraphs: [
          "Hinjewadi's Rajiv Gandhi Infotech Park is the largest single cluster — 2,800 acres across three phases, developed by the Maharashtra Industrial Development Corporation, with 800+ companies spanning IT, ITeS, product design, engineering and R&D. Indian IT majors (Infosys, Wipro, TCS, Tech Mahindra, Persistent, LTIMindtree, HCL, Tata Technologies) sit alongside GCCs including Dell EMC, Emerson, Eaton, Forvia, Panasonic, Harman, Dassault Systèmes, Hella and Knorr-Bremse.",
          "Kharadi's EON Free Zone — a 57-acre SEZ technology park on the city's eastern side — hosts a second concentration, including GCCs for Barclays, Credit Suisse, UPS, Symantec, Citigroup, Seagate and Veritas. Aundh, Baner and Balewadi extend the Hinjewadi cluster; Viman Nagar and Kalyani Nagar extend Kharadi; Magarpatta and SP Infocity add further SEZ and township-scale options.",
        ],
      },
      {
        heading: "The manufacturing base",
        paragraphs: [
          "Beyond IT, Pune district is a long-established hub for automotive, engineering and manufacturing, with a meaningful chemicals and pharma presence — developed across multiple MIDC industrial areas, including the combined Pimpri Chinchwad & Talegaon zone and the multi-phase Chakan MIDC, home to a dedicated SEZ.",
          "Proximity helps too: Navi Mumbai sits 126 km away, Mumbai itself 150 km — close enough for logistics and leadership access, far enough to keep real-estate and talent costs materially more favourable than the metro core.",
        ],
      },
    ],
  },
  {
    slug: "gcc-for-global-delivery-higher-value-chain",
    title: "GCC for Global Delivery: Moving Up the Value Chain",
    dek: "From offshore development centers to a fully integrated Global Delivery Center model — the three-decade arc of how much a GCC is trusted to own.",
    date: "2024-10-31",
    author: "Sudhir Singh",
    category: "Strategy",
    heroImage: "heroSkyscrapers",
    sections: [
      {
        paragraphs: [
          "A search for \"GCC\" online will surface no shortage of definitions, most of them narrower than the reality. GCCs are not a new phenomenon — Texas Instruments and Motorola had them running in Bangalore since the late 1980s. What has changed is the breadth of what a GCC is now trusted to own.",
        ],
      },
      {
        heading: "The evolution, in three generations",
        paragraphs: [
          "Generation one — Offshore Development Centers, virtual ODCs, India Development Centers — were built almost entirely around software development and maintenance work. Generation two brought back-office BPO/KPO and Shared Services Centers, chasing uniform process and lower cost across the enterprise. Generation three is where the term \"GCC\" itself emerged — alongside Captive Offshore Centers and Global In-house Centers — reflecting a shift toward building genuine, owned capability rather than simply outsourcing non-core work.",
          "At its simplest: a GCC is a 100% subsidiary of a company, set up in a remote geography, conducting a range of operations and services that add global capability — capacity, talent, cost efficiency, market access — back to the parent. There's no fixed ceiling on what a GCC can take on, and the clear trend has been upward: product engineering, design and R&D increasingly sit inside GCCs today, work that used to stay exclusively at headquarters.",
        ],
      },
      {
        heading: "Extending the model: the Global Delivery Center",
        paragraphs: [
          "StepIndus takes this one step further with the idea of a Global Delivery Center — a GCC whose scope extends into manufacturing as well as services, integrating the center into both the local market and regional export flows. Distributed globally, manufacturing-plus-GCC centers capture efficiencies that a services-only or manufacturing-only footprint can't reach alone.",
          "India's GCC base — an estimated 1,800+ centers by 2024, employing 1.5 million-plus people — makes it the natural anchor for that model: three decades of GCC depth, now converging with a genuine manufacturing investment wave, inside one coherent India strategy.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export function formatInsightDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
