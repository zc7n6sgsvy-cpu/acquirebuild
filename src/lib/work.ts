export type WorkCategory = "Market" | "Software" | "Hardware-linked" | "Workflow";

export type WorkItem = {
  slug: string;
  category: WorkCategory;
  title: string;
  summary: string;
  image: string;
  gap: string;
  built: readonly string[];
  wire: string;
  owns: string;
  /** Live showcase. Opens outside the portfolio. */
  siteUrl?: string;
};

// Illustrated systems. Replace a file's copy when a named case takes the slot.
export const work: WorkItem[] = [
  {
    slug: "kestrel",
    category: "Market",
    title: "Kestrel",
    summary:
      "A working showcase for a security company. Towers, drones, and guards. The offer, the city pages, and the intake a buyer would use.",
    image: "/images/work-kestrel.jpg",
    siteUrl: "https://kestrelsecurity.vercel.app/",
    gap: "A guard company sold by phone has no surface. The buyer cannot see the tower, the drone, the response, or the city they would hire for.",
    built: [
      "A full site: home, solutions, industries, how it works, about, and contact",
      "Seventy-five California city pages, each with its own offer",
      "An intake form that records who asked, and for which kind of site",
    ],
    wire: "The homepage states the offer. A city page makes it local. The form is where a buyer starts. Detect, verify, deter, respond is the path on the page, not a brochure beside it.",
    owns: "Kestrel is a mock, built to show the work. The pattern is what an operator keeps: the site, the city pages, and the intake.",
  },
  {
    slug: "mast-app",
    category: "Software",
    title: "Feed on the phone",
    summary:
      "The live interior on a phone. Sign in. See the site. The feed sits in one account.",
    image: "/images/work-mobile.jpg",
    gap: "The feed lives on a desk. The person who pays is not at the desk. A product they cannot open on a phone is a product they will not keep.",
    built: [
      "The same account on a phone",
      "The live interior as the screen, not a menu in front of it",
      "One login for the desk and the handset",
    ],
    wire: "The phone does not get a second product. It gets the feed, signed in, full frame.",
    owns: "The operator keeps one account across desk and phone. The customer does not juggle two logins.",
  },
  {
    slug: "practice-path",
    category: "Workflow",
    title: "Intake to account",
    summary:
      "A brief as a steel plate. Route. Draft. The login that holds the matter. The path a practice can see.",
    image: "/images/work-intake.jpg",
    gap: "A brief arrives as mail, a call, a file. Nobody can see where it sits. The matter has no account, so the practice cannot run it.",
    built: [
      "Intake as a plate the practice can point at",
      "A route from the brief to a draft",
      "The login that holds the matter",
    ],
    wire: "Document in. Work moves. The draft lives in the account that owns the matter. The path stays visible.",
    owns: "The operator sees the path. The matter is a record, not a thread in someone else's inbox.",
  },
  {
    slug: "api-nodes",
    category: "Software",
    title: "API as metal",
    summary:
      "Endpoints treated as hardware. Serial to login. Login to bill. Nodes you can point at.",
    image: "/images/work-api.jpg",
    gap: "The product is a set of endpoints nobody can point at. Serials, logins, and bills live apart. The operator cannot say what is connected.",
    built: [
      "Endpoints treated as nodes you can name",
      "A path from serial to login",
      "A path from login to the bill",
    ],
    wire: "Point at a node. See what it talks to. The API has a place, not a folder of routes.",
    owns: "The operator owns the map. A new unit has a place to land before it has a customer.",
  },
  {
    slug: "territory-plate",
    category: "Market",
    title: "Territory on steel",
    summary:
      "A city grid as an offer surface. Site, map, and the page a buyer uses to take a cell.",
    image: "/images/work-map.jpg",
    gap: "A service sold by conversation has no surface. The buyer cannot see the city, the cell, or the page that takes it.",
    built: [
      "The city grid as the offer",
      "A page that shows one cell",
      "Intake that records who took it",
    ],
    wire: "The map is the site. Choosing a cell starts the account. The offer is the grid, not a paragraph beside it.",
    owns: "The operator owns the territory page and the record of who bought which cell.",
  },
  {
    slug: "solar-battery",
    category: "Hardware-linked",
    title: "Power path",
    summary:
      "Battery, junction, one cyan status LED. The unit that stays up so the login stays live.",
    image: "/images/work-battery.jpg",
    gap: "The feed dies when the power dies. A login to a dark unit is not a product. The customer paid to see something that is down.",
    built: [
      "Battery, junction, and one status the account can read",
      "The unit staying up so the login stays live",
      "A visible state when the path is healthy",
    ],
    wire: "Power is part of the product. The account shows the unit is up before the customer asks.",
    owns: "The operator owns the power path and the status, not a battery left in a cabinet with no login on it.",
  },
  {
    slug: "tower-joint",
    category: "Hardware-linked",
    title: "Tower joint",
    summary:
      "Collar, bearing, fasteners. The physical joint the software is for. Engineering as the product.",
    image: "/images/work-joint.jpg",
    gap: "The software has nowhere physical to bolt to. A feed, a mast, and a bearing bought apart do not make a unit anyone can sell.",
    built: [
      "Collar, bearing, and the fasteners that close the joint",
      "The physical part the software is for",
      "A unit you can spec, not a pile of parts",
    ],
    wire: "The joint is the product boundary. Software above it. Structure below it. One assembly.",
    owns: "The operator owns a unit they can ship, photograph, and put behind a login.",
  },
];

export const classes = [
  { key: "market", label: "Market", category: "Market" },
  { key: "software", label: "Software", category: "Software" },
  { key: "hardware", label: "Hardware-linked", category: "Hardware-linked" },
  { key: "workflow", label: "Workflow", category: "Workflow" },
] as const;

export type ClassKey = (typeof classes)[number]["key"];

export function classByKey(key: string | undefined) {
  return classes.find((item) => item.key === key);
}

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function workInClass(key?: string) {
  const found = classByKey(key);
  if (!found) return work;
  return work.filter((item) => item.category === found.category);
}

export function portfolioHref(classKey?: string) {
  return classByKey(classKey) ? `/work?class=${classKey}` : "/work";
}

export function caseHref(slug: string, classKey?: string) {
  const item = getWork(slug);
  const found = classByKey(classKey);
  if (!item || !found || item.category !== found.category) return `/work/${slug}`;
  return `/work/${slug}?class=${found.key}`;
}

export function readClassKey(value: string | string[] | undefined) {
  const key = Array.isArray(value) ? value[0] : value;
  return classByKey(key)?.key;
}

/** Walk order for a case. A one-item filter steps back into the full set so Next is never the same file. */
export function caseWalk(slug: string, classKey?: string) {
  const item = getWork(slug);
  if (!item) return null;
  const found = classByKey(classKey);
  const inLayer = Boolean(found && item.category === found.category);
  const scoped = inLayer && found ? workInClass(found.key) : work;
  const stayInLayer = inLayer && scoped.length > 1;
  const list = stayInLayer ? scoped : work;
  const index = list.findIndex((entry) => entry.slug === slug);
  if (index < 0) return null;
  const prev = list[(index - 1 + list.length) % list.length]!;
  const next = list[(index + 1) % list.length]!;
  const scope = stayInLayer && found ? found.key : undefined;
  return {
    index: index + 1,
    total: list.length,
    layerLabel: inLayer && found ? found.label : "All systems",
    solo: inLayer && !stayInLayer,
    backHref: portfolioHref(inLayer && found ? found.key : undefined),
    backLabel: inLayer && found ? found.label : "Portfolio",
    prev: { title: prev.title, href: caseHref(prev.slug, scope) },
    next: { title: next.title, href: caseHref(next.slug, scope) },
  };
}

export const assetClasses = [
  {
    key: "market",
    label: "Market",
    title: "Site, offer, intake",
    image: "/images/tile-market.jpg",
    copy: "A site is not a brochure. It is the offer, the login, the intake, and the record of who bought. I build the public layer an operator can sell from: pages, offers, and the account that holds the customer.",
  },
  {
    key: "software",
    label: "Software",
    title: "App, API, login",
    image: "/images/tile-software.jpg",
    copy: "Apps and APIs that run the product. Operator dashboards, client logins, live feeds, billing hooks, device-to-account maps. The software the hardware is useless without.",
  },
  {
    key: "hardware",
    label: "Hardware-linked",
    title: "Mast, sensor, board",
    image: "/images/tile-hardware.jpg",
    copy: "Masts, sensors, boards, and the account they report to. I wire the physical unit to a login, a feed, and an offer so the device is not a box. It is a product an operator can sell.",
  },
  {
    key: "workflow",
    label: "Workflow",
    title: "Intake, route, account",
    image: "/images/tile-workflow.jpg",
    copy: "The path a practice runs. Document in, work routed, draft in the account that holds the matter. Built so the operator can see the path. Not a black box.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Diagnose the asset",
    copy: "What exists. What is missing. Site, app, sensor, offer. I name the gap before I write a line.",
  },
  {
    n: "02",
    title: "Build the asset",
    copy: "The product layer and the market layer. Login, feed, mast, page. One system. The operator owns it.",
  },
  {
    n: "03",
    title: "Wire it so it can sell",
    copy: "Offer, intake, account, live path from device to customer. Not a demo. A thing that takes money.",
  },
  {
    n: "04",
    title: "Stay on it",
    copy: "If they want the system kept alive, I stay. Monitoring, fixes, the next board, the next page.",
  },
] as const;
