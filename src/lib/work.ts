export type WorkItem = {
  slug: string;
  category: "Market" | "Software" | "Hardware-linked";
  title: string;
  summary: string;
  image: string;
};

// TODO: replace placeholder frames with real case studies when they are dropped in.
export const work: WorkItem[] = [
  {
    slug: "login-feed",
    category: "Software",
    title: "Login over a live feed",
    summary:
      "A client account that owns the camera. Sign in. See the interior. The feed is the product.",
    image: "/images/work-login.jpg",
  },
  {
    slug: "mast-app",
    category: "Hardware-linked",
    title: "Mast and the operator phone",
    summary:
      "PTZ head on the bench. App on the steel. Pan, tilt, and the live path sit in one account.",
    image: "/images/work-mobile.jpg",
  },
  {
    slug: "api-nodes",
    category: "Software",
    title: "API as metal",
    summary:
      "Endpoints treated as hardware. Serial to login. Login to bill. Nodes you can point at.",
    image: "/images/work-api.jpg",
  },
  {
    slug: "territory-plate",
    category: "Market",
    title: "Territory on steel",
    summary:
      "A city grid as an offer surface. Site, map, and the page a buyer uses to take a cell.",
    image: "/images/work-map.jpg",
  },
  {
    slug: "solar-battery",
    category: "Hardware-linked",
    title: "Power path",
    summary:
      "Battery, junction, one cyan status LED. The unit that stays up so the login stays live.",
    image: "/images/work-battery.jpg",
  },
  {
    slug: "tower-joint",
    category: "Hardware-linked",
    title: "Tower joint",
    summary:
      "Collar, bearing, fasteners. The physical joint the software is for. Engineering as the product.",
    image: "/images/work-joint.jpg",
  },
];

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
