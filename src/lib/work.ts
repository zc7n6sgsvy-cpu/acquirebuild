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
    title: "Kestrel Security",
    summary:
      "A security web app. Towers, drones, and guards. The offer, the city pages, and the intake a buyer would use.",
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
