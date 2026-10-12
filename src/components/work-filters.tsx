import Link from "next/link";
import { cn } from "@/lib/cn";
import { classes, work, workInClass, type ClassKey } from "@/lib/work";

const filters: { key: "all" | ClassKey; label: string; href: string; count: number }[] = [
  { key: "all", label: "All", href: "/work", count: work.length },
  ...classes.map((item) => ({
    key: item.key,
    label: item.label,
    href: `/work?class=${item.key}`,
    count: workInClass(item.key).length,
  })),
];

export function WorkFilters({ active }: { active: "all" | ClassKey }) {
  return (
    <nav aria-label="Filter the portfolio" className="mt-10 flex flex-wrap gap-2">
      {filters.map((item) => {
        const on = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={on ? "page" : undefined}
            className={cn(
              "border px-3 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors",
              on
                ? "border-cyan bg-cyan/10 text-paper"
                : "border-white/15 text-steel hover:border-white/40 hover:text-paper",
            )}
          >
            {item.label}
            <span className="ml-2 font-mono text-[10px] text-cyan">
              {String(item.count).padStart(2, "0")}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
