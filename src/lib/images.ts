/**
 * Curated, hand-verified image library.
 * Every entry was downloaded and visually reviewed before being assigned a role —
 * see stepindus-research for the source audit. All images are served from Unsplash's
 * stable photo CDN (images.unsplash.com/photo-<id>), which does not expire.
 */

export type ImageAsset = {
  id: string;
  width: number;
  height: number;
  alt: string;
};

function unsplash(id: string): string {
  return `https://images.unsplash.com/photo-${id}`;
}

export function imgUrl(id: string, w: number, q = 80): string {
  return `${unsplash(id)}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  heroSkyscrapers: {
    id: "1486406146926-c627a92ad1ab",
    alt: "Looking up at glass office towers in a global business district",
    width: 3456,
    height: 5184,
  },
  constructionSkyline: {
    id: "1565008447742-97f6f38c985c",
    alt: "A business district skyline under active construction",
    width: 4000,
    height: 3000,
  },
  modernOfficeHallway: {
    id: "1497366216548-37526070297c",
    alt: "A dark, minimal modern office interior with a pantry and meeting rooms",
    width: 400,
    height: 267,
  },
  openPlanFloor: {
    id: "1504384308090-c894fdcc538d",
    alt: "A large open-plan delivery floor with rows of desks and analysts at work",
    width: 6016,
    height: 4016,
  },
  serverRoomWoman: {
    id: "1573164713988-8665fc963095",
    alt: "A technology lead reviewing systems inside a server room",
    width: 5760,
    height: 3840,
  },
  networkCables: {
    id: "1544197150-b99a580bb7a8",
    alt: "Close-up of structured network cabling and patch panels",
    width: 5312,
    height: 2988,
  },
  circuitBoard: {
    id: "1518770660439-4636190af475",
    alt: "Macro detail of a populated circuit board",
    width: 5184,
    height: 3456,
  },
  safetyGoggles: {
    id: "1581093588401-fbb62a02f120",
    alt: "An engineer wearing safety glasses in a lab environment",
    width: 2000,
    height: 1333,
  },
  automotiveEngineer: {
    id: "1581091226825-a6a2a5aee158",
    alt: "An engineer working on a wiring harness assembly in an engineering center",
    width: 2000,
    height: 1333,
  },
  developerDualMonitor: {
    id: "1581094794329-c8112a89af12",
    alt: "A developer working across dual monitors in a bright open office",
    width: 2000,
    height: 1333,
  },
  meetingBrickWall: {
    id: "1551836022-d5d88e9218df",
    alt: "Two consultants reviewing work together at a meeting table",
    width: 2000,
    height: 1333,
  },
  handSigningDoc: {
    id: "1521791055366-0d553872125f",
    alt: "A hand signing a formal document",
    width: 2000,
    height: 1333,
  },
  flatlayResearch: {
    id: "1497032628192-86f99bcd76bc",
    alt: "A research desk with notes, coffee and a laptop",
    width: 5184,
    height: 3456,
  },
  stockChartScreen: {
    id: "1591696205602-2f950c417cb9",
    alt: "A rising performance chart displayed on a laptop screen",
    width: 3870,
    height: 2580,
  },
  flatlayStrategy: {
    id: "1543286386-713bdd548da4",
    alt: "A notebook, ruler and chart laid out for strategic planning",
    width: 4592,
    height: 3056,
  },
  presentationRoom: {
    id: "1542744173-8e7e53415bb0",
    alt: "A team listening to a presentation in a meeting room",
    width: 4842,
    height: 3228,
  },
  officeWindowPlant: {
    id: "1497215728101-856f4ea42174",
    alt: "A bright office desk beside a window overlooking the city",
    width: 5184,
    height: 3456,
  },
  monochromeCollab: {
    id: "1553877522-43269d4ea984",
    alt: "Two colleagues working together at laptops",
    width: 5760,
    height: 3840,
  },
  gatewayOfIndia: {
    id: "1570168007204-dfb528c6958f",
    alt: "The Gateway of India at dusk, Mumbai",
    width: 3648,
    height: 4872,
  },
  flatlayDevices: {
    id: "1519389950473-47ba0277781c",
    alt: "An overhead view of a team working across multiple laptops",
    width: 2070,
    height: 1380,
  },
} as const;

export type ImageKey = keyof typeof images;
