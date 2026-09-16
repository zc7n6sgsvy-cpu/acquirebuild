import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "What asset do you need live? Work starts after a commercial agreement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Contact</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
          What asset do you need live?
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-steel">
          Name the site, the app, the mast, the feed, the offer. I reply if I am the one to build it.
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-steel">
          Work starts after a commercial agreement. I do not book free calls to pick a brain.
        </p>
        <p className="mt-8 text-sm text-steel">
          Direct:{" "}
          <a className="text-paper hover:text-cyan" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <div className="relative mt-10 aspect-[16/11] overflow-hidden">
          <Image
            src="/images/approach.jpg"
            alt="Sensor to login. The joint."
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <LeadForm />
    </div>
  );
}
