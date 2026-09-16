import type { Metadata } from "next";
import { FilmStill } from "@/components/film-still";
import { work } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Asset types from Acquire Build. Logins, feeds, APIs, sites, masts, workflows, and the joints that bind them.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Work</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
        A grid of systems.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">
        Each card is an asset class. Not a quote wall. Categories until real case files are dropped in.
      </p>
      {/* TODO: replace placeholder frames with real case studies when they are dropped in. */}
      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {work.map((item) => (
          <article key={item.slug} className="group">
            <FilmStill
              src={item.image}
              alt={item.title}
              sizes="(min-width: 640px) 45vw, 100vw"
              className="aspect-[16/10]"
            />
            <p className="mt-5 text-[11px] tracking-[0.2em] text-cyan uppercase">{item.category}</p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">{item.title}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
