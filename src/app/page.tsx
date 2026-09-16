import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { HomeExperience } from "@/components/home-experience";
import { LeadForm } from "@/components/lead-form";
import { FilmStill } from "@/components/film-still";
import { WorkflowSection } from "@/components/workflow-section";
import { assetClasses, processSteps, work } from "@/lib/work";

export default function HomePage() {
  return (
    <HomeExperience>
      <Hero />

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-y-0">
          {[
            {
              k: "Software products",
              v: "Apps, APIs, logins, live systems.",
            },
            {
              k: "Hardware-linked systems",
              v: "Mast, sensor, board, account.",
            },
            {
              k: "Market assets",
              v: "Sites and offers that sell the unit.",
            },
            {
              k: "Workflows",
              v: "Intake, routing, the account a practice runs from.",
            },
          ].map((item) => (
            <div key={item.k} className="px-5 py-8 sm:px-8">
              <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">{item.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Asset classes</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
          Four layers. One owner.
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {assetClasses.map((asset) => (
            <article key={asset.key} className="group">
              <FilmStill
                src={asset.image}
                alt={asset.title}
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="aspect-[16/10]"
                priority={asset.key === "market"}
              />
              <p className="mt-5 text-[11px] tracking-[0.2em] text-cyan uppercase">{asset.label}</p>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tight">{asset.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{asset.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Selected work</p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
                Systems, not testimonials.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-[12px] tracking-[0.18em] text-steel uppercase hover:text-paper sm:inline"
            >
              All assets
            </Link>
          </div>
          {/* TODO: replace placeholder frames with real case studies when they are dropped in. */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {work.slice(0, 6).map((item) => (
              <article key={item.slug} className="group">
                <FilmStill
                  src={item.image}
                  alt={item.title}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="aspect-[16/10]"
                />
                <p className="mt-4 text-[11px] tracking-[0.2em] text-cyan uppercase">{item.category}</p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.summary}</p>
              </article>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-10 inline-flex text-[12px] tracking-[0.18em] text-steel uppercase hover:text-paper sm:hidden"
          >
            All assets
          </Link>
        </div>
      </section>

      <WorkflowSection />

      <section className="blueprint border-t border-white/10">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Process</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
              Diagnose. Build. Wire. Stay.
            </h2>
            <ol className="mt-12 grid gap-8">
              {processSteps.map((step) => (
                <li key={step.n} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-display text-2xl text-cyan">{step.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src="/images/work-joint.jpg"
              alt="Exploded machined tower joint."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Start</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
              What asset do you need live?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
              Tell me what you sell now. I will say if I am the one to build it. Work starts after a commercial agreement.
            </p>
            <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden lg:block">
              <Image
                src="/images/tile-hardware.jpg"
                alt="Solar surveillance mast in a dark industrial yard."
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </HomeExperience>
  );
}
