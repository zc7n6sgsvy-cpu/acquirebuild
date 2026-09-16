export const site = {
  name: "Acquire Build",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://acquirebuild.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@acquirebuild.com",
  line: "I build the software and hardware assets an operator can sell from.",
  secondary:
    "Sites. Apps. Device-to-account systems. The market layer and the product layer.",
  description:
    "Acquire Build is a one-person studio that builds software and hardware-connected assets operators own. Sites, apps, and device-to-account systems. Not a business marketplace.",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
] as const;
