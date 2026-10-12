import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FilmStill } from "@/components/film-still";
import { caseWalk, getWork, readClassKey, work } from "@/lib/work";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return { title: "Portfolio" };
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: { images: [{ url: item.image, alt: item.title }] },
  };
}

const beats = [
  { n: "01", title: "The gap", key: "gap" },
  { n: "02", title: "What was built", key: "built" },
  { n: "03", title: "How it is wired", key: "wire" },
  { n: "04", title: "What the operator owns", key: "owns" },
] as const;

export default async function WorkCasePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ class?: string | string[] }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const query = await searchParams;
  const walk = caseWalk(item.slug, readClassKey(query.class));
  if (!walk) notFound();

  return (
    <article className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16">
      <div className="flex items-center justify-between gap-6">
        <Link
          href={walk.backHref}
          className="text-[12px] tracking-[0.18em] text-steel uppercase hover:text-paper"
        >
          ← {walk.backLabel}
        </Link>
        <p className="font-mono text-[11px] tracking-[0.16em] text-steel">
          {String(walk.index).padStart(2, "0")} / {String(walk.total).padStart(2, "0")}
        </p>
      </div>

      <p className="mt-10 text-[11px] tracking-[0.22em] text-cyan uppercase">{item.category}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
        {item.title}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">{item.summary}</p>
      {item.siteUrl ? (
        <a
          href={item.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex border border-cyan bg-cyan/10 px-5 py-3 text-[12px] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-cyan/20"
        >
          View the site
        </a>
      ) : null}

      <FilmStill
        src={item.image}
        alt={item.title}
        sizes="(min-width: 1280px) 1216px, 100vw"
        priority
        className="mt-12 aspect-[16/10]"
      />

      <ol className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-2">
        {beats.map((beat) => (
          <li key={beat.n} className="grid grid-cols-[auto_1fr] gap-5">
            <span className="font-display text-2xl text-cyan">{beat.n}</span>
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight">{beat.title}</h2>
              {beat.key === "built" ? (
                <ul className="mt-3 grid gap-2">
                  {item.built.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-steel">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {beat.key === "gap" ? item.gap : beat.key === "wire" ? item.wire : item.owns}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <nav aria-label="Continue through the portfolio" className="mt-16 grid border-y border-white/10 sm:grid-cols-2">
        <Link
          href={walk.prev.href}
          className="group border-b border-white/10 py-8 sm:border-r sm:border-b-0 sm:pr-8"
        >
          <p className="text-[11px] tracking-[0.18em] text-steel uppercase">Previous</p>
          <p className="mt-3 font-display text-3xl font-medium tracking-tight transition-colors group-hover:text-cyan">
            {walk.prev.title}
          </p>
        </Link>
        <Link href={walk.next.href} className="group py-8 sm:pl-8 sm:text-right">
          <p className="text-[11px] tracking-[0.18em] text-steel uppercase">Next</p>
          <p className="mt-3 font-display text-3xl font-medium tracking-tight transition-colors group-hover:text-cyan">
            {walk.next.title}
          </p>
        </Link>
      </nav>

      {walk.solo ? (
        <p className="mt-6 text-sm leading-relaxed text-steel">
          One file in {walk.layerLabel}. Previous and next return to the full set.
        </p>
      ) : null}

      <div className="mt-12 flex flex-wrap items-center gap-6">
        <Link
          href={`/contact?from=${item.slug}`}
          className="border border-cyan bg-cyan/10 px-5 py-3 text-[12px] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-cyan/20"
        >
          Start an asset
        </Link>
        <Link
          href={walk.backHref}
          className="text-[12px] tracking-[0.18em] text-steel uppercase hover:text-paper"
        >
          Back to {walk.backLabel}
        </Link>
      </div>
    </article>
  );
}
