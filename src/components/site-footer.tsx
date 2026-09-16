import Link from "next/link";
import { Mark } from "@/components/mark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Mark size={64} href="/" />
          <p className="mt-6 max-w-md font-display text-3xl leading-[1.05] font-medium tracking-tight text-paper sm:text-4xl">
            {site.line}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
            One person. Software and hardware-connected assets. The operator owns the system.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 md:items-end md:text-right">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] tracking-[0.16em] text-steel uppercase hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-steel">
            <a className="hover:text-paper" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-3 text-[11px] tracking-[0.16em] uppercase">
              © {new Date().getFullYear()} Acquire Build
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
