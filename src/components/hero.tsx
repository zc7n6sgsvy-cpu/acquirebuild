import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Sensor mast, exploded circuit board, and a client login with live feed."
          fill
          priority
          sizes="100vw"
          className="hero-pan object-cover"
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover motion-safe:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero.jpg"
          aria-hidden
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="film-gradient absolute inset-0" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <p className="rise font-sans text-[11px] tracking-[0.28em] text-steel uppercase">
          Acquire Build
        </p>
        <h1 className="rise rise-delay-1 mt-5 max-w-4xl font-display text-[2.5rem] leading-[0.95] font-semibold tracking-tight text-paper sm:text-6xl lg:text-[4.6rem]">
          {site.line}
        </h1>
        <p className="rise rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
          {site.secondary}
        </p>
        <div className="rise rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="border border-cyan bg-cyan/10 px-5 py-3 text-[12px] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-cyan/20"
          >
            Start an asset
          </Link>
          <Link
            href="/work"
            className="px-2 py-3 text-[12px] tracking-[0.18em] text-steel uppercase transition-colors hover:text-paper"
          >
            See the work
          </Link>
        </div>
        <div className="mt-12 h-px w-14 bg-cyan" aria-hidden />
      </div>
    </section>
  );
}
