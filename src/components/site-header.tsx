import Link from "next/link";
import { Mark } from "@/components/mark";
import { nav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
        <Mark size={36} withWordmark />
        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[12px] tracking-[0.16em] text-steel uppercase transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hidden border border-cyan/70 px-3 py-1.5 font-sans text-[11px] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-cyan/10 sm:inline-flex"
          >
            Start an asset
          </Link>
        </nav>
      </div>
    </header>
  );
}
