import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Mark({
  size = 32,
  withWordmark = false,
  href = "/",
  className,
}: {
  size?: number;
  withWordmark?: boolean;
  href?: string | null;
  className?: string;
}) {
  const mark = (
    <Image
      src="/images/mark.jpg"
      alt=""
      width={size}
      height={size}
      className="block rounded-[2px] ring-1 ring-white/15"
      priority={size <= 40}
    />
  );

  const inner = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {mark}
      {withWordmark ? (
        <span className="hidden font-sans text-[11px] font-medium tracking-[0.28em] text-paper uppercase sm:inline">
          Acquire Build
        </span>
      ) : null}
    </span>
  );

  if (!href) {
    return inner;
  }

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Acquire Build, home">
      {inner}
    </Link>
  );
}
