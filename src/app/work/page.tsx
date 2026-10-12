import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { WorkFilters } from "@/components/work-filters";
import { caseHref, readClassKey, workInClass } from "@/lib/work";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The Acquire Build portfolio. Open a system, filter by layer, and walk the set: logins, feeds, APIs, sites, masts, and the joints that bind them.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ class?: string | string[] }>;
}) {
  const query = await searchParams;
  const classKey = readClassKey(query.class);
  const list = workInClass(classKey);
  const active = classKey ?? "all";

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Work</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
        The portfolio.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">
        Filter by the layer you sell. Open a file. Previous and next carry you through that set.
        Each file is the gap, the build, and what the operator keeps.
      </p>
      <WorkFilters active={active} />
      <p className="mt-6 text-sm text-steel">
        {active === "all"
          ? `${list.length} systems. Open any file.`
          : list.length === 1
            ? "One file in this layer. Next returns to the full set."
            : `${list.length} in this layer. Next stays inside it.`}
      </p>
      <div className="mt-14 grid gap-12 sm:grid-cols-2">
        {list.map((item) => (
          <WorkCard
            key={item.slug}
            item={item}
            href={caseHref(item.slug, classKey)}
            sizes="(min-width: 640px) 45vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
}
