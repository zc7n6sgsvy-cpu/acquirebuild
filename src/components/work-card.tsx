import Link from "next/link";
import { FilmStill } from "@/components/film-still";
import type { WorkItem } from "@/lib/work";
import { cn } from "@/lib/cn";

export function WorkCard({
  item,
  href,
  sizes,
  priority = false,
  titleAs = "h2",
  titleClassName = "text-3xl",
}: {
  item: WorkItem;
  href: string;
  sizes: string;
  priority?: boolean;
  titleAs?: "h2" | "h3";
  titleClassName?: string;
}) {
  const Title = titleAs;

  return (
    <article>
      <Link href={href} className="group block">
        <FilmStill
          src={item.image}
          alt=""
          sizes={sizes}
          priority={priority}
          className="aspect-[16/10]"
        />
        <p className="mt-5 text-[11px] tracking-[0.2em] text-cyan uppercase">{item.category}</p>
        <Title
          className={cn("mt-2 font-display font-medium tracking-tight", titleClassName)}
        >
          {item.title}
        </Title>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">{item.summary}</p>
        <p className="mt-4 text-[11px] tracking-[0.18em] text-steel uppercase transition-colors group-hover:text-cyan">
          Open file
        </p>
      </Link>
      {item.siteUrl ? (
        <a
          href={item.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-[11px] tracking-[0.18em] text-cyan uppercase hover:text-paper"
        >
          View the site
        </a>
      ) : null}
    </article>
  );
}
