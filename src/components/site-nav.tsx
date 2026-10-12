"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex w-full min-w-0 flex-wrap items-center justify-end gap-x-3 gap-y-1 sm:w-auto sm:flex-nowrap sm:gap-8"
    >
      {nav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "py-1 font-sans text-[11px] tracking-[0.08em] whitespace-nowrap uppercase transition-colors sm:px-1 sm:py-2 sm:text-[12px] sm:tracking-[0.16em]",
              active ? "text-paper" : "text-steel hover:text-paper",
            )}
          >
            {item.label}
          </Link>
        );
      })}
      <Link
        href="/contact"
        className="hidden border border-cyan/70 px-3 py-1.5 font-sans text-[11px] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-cyan/10 sm:inline-flex"
      >
        Start an asset
      </Link>
    </nav>
  );
}
