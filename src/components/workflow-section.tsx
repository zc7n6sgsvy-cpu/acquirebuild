import Image from "next/image";

const beats = [
  {
    n: "01",
    t: "Intake",
    c: "The document lands. A steel plate into a slot. The matter now has a door.",
  },
  {
    n: "02",
    t: "Route",
    c: "Work moves. Nodes, not a pile. The path is visible to the person who owns it.",
  },
  {
    n: "03",
    t: "Account",
    c: "Draft, file, login. The practice runs from a system it holds, not a thread in a chat.",
  },
];

export function WorkflowSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <Image
          src="/images/tile-workflow.jpg"
          alt="Intake, routing, draft, and login as floating glass panels."
          fill
          sizes="100vw"
          className="object-cover"
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover motion-safe:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/tile-workflow.jpg"
          aria-hidden
        >
          <source src="/images/workflow.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">Workflows</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
          A practice is a path.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
          A lawyer asked me to make the path visible. Intake. Route. Draft. The account that holds the matter. I build the workflow the practice owns. Not a chatbot glued to a homepage.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {beats.map((beat) => (
            <article key={beat.n} className="border-t border-white/15 pt-5">
              <p className="font-display text-xl text-cyan">{beat.n}</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">{beat.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{beat.c}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
