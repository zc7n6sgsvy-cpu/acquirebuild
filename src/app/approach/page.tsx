import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Software-only shops stall when the product is physical. Hardware vendors stall when there is no login, no site, no offer. Acquire Build sits on the joint.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-[11px] tracking-[0.22em] text-steel uppercase">Approach</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Acquire Build sits on the joint.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel">
          Device to account. Account to offer. Offer to site. The physical unit and the thing that sells it are one asset.
        </p>
      </section>

      <section className="relative min-h-[52vh] overflow-hidden border-y border-white/10 md:min-h-[58vw]">
        <Image
          src="/images/approach.jpg"
          alt="A solar mast connected by a cyan path to a login and live-feed stack."
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent p-5 sm:p-8">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-2">
            <p className="text-[11px] tracking-[0.18em] text-steel uppercase">Hardware</p>
            <p className="text-right text-[11px] tracking-[0.18em] text-steel uppercase">
              Software
            </p>
          </div>
        </div>
      </section>

      <section className="blueprint border-b border-white/10">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <article>
            <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">Software-only stall</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] font-semibold tracking-tight sm:text-4xl">
              Software-only shops stall when the product is physical.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel">
              The site ships. The dashboard ships. The mast still has no account. The feed has no owner. The customer cannot buy access to a unit that sits in the yard.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              You get screens. You do not get a product. The hardware remains a cost. The software remains a brochure with a login.
            </p>
          </article>
          <article>
            <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">Hardware stall</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] font-semibold tracking-tight sm:text-4xl">
              Hardware vendors stall when there is no login, no site, no offer.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel">
              The camera is excellent. It ships in a crate. There is no login. There is no site. There is no offer. The operator cannot sell a feed they cannot account for.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              You get a pole. You do not get a business. The box leaves the shop. The market layer never starts.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-3xl font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl">
          The joint is the product.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            {
              t: "Device to account",
              c: "Serial, mast, sensor. Bound to a login so the unit has an owner.",
            },
            {
              t: "Account to offer",
              c: "The feed, the access, the bill. What the customer actually buys.",
            },
            {
              t: "Offer to site",
              c: "The public page. Intake. The market layer that makes the unit sellable.",
            },
          ].map((item) => (
            <article key={item.t} className="border-t border-white/10 pt-6">
              <h3 className="font-display text-2xl font-medium tracking-tight">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.c}</p>
            </article>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-14 inline-flex border border-cyan bg-cyan/10 px-5 py-3 text-[12px] tracking-[0.18em] text-paper uppercase hover:bg-cyan/20"
        >
          Start an asset
        </Link>
      </section>
    </>
  );
}
