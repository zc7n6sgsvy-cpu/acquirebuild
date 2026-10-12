import { Mark } from "@/components/mark";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto grid min-h-14 max-w-[1280px] grid-cols-[auto_minmax(0,1fr)] items-center gap-3 px-5 py-2.5 sm:flex sm:h-16 sm:justify-between sm:px-8 sm:py-0">
        <Mark size={32} withWordmark />
        <SiteNav />
      </div>
    </header>
  );
}
