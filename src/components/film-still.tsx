import Image from "next/image";
import { cn } from "@/lib/cn";

export function FilmStill({
  src,
  alt,
  priority = false,
  sizes,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#07090c]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]",
          imageClassName,
        )}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
