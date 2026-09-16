import Link from "next/link";
import { Mark } from "@/components/mark";
import { nav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-5 sm:h-16 sm:gap-4 sm:px-8">
        <Mark size={32} withWordmark />
        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-1 py-2 font-sans text-[11px] tracking-[0.12em] text-steel uppercase transition-colors hover:text-paper sm:text-[12px] sm:tracking-[0.16em]"
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
