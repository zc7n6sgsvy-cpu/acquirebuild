import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="viewport-fill relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Client login and live feed in a dark industrial bay."
          fill
          priority
          sizes="100vw"
          className="hero-pan object-cover object-[center_28%] sm:object-center"
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover object-[center_28%] motion-safe:block sm:object-center"
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
      <div className="hero-copy viewport-fill relative mx-auto flex max-w-[1280px] flex-col justify-end px-5 pt-28 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-20">
        <p className="font-sans text-[11px] tracking-[0.28em] text-steel uppercase">
          Acquire Build
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] leading-[0.95] font-semibold tracking-tight text-paper sm:text-6xl lg:text-[4.6rem]">
          {site.line}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
          {site.secondary}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
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
