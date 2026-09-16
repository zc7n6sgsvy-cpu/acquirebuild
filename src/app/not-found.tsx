import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-[1280px] flex-col items-start justify-center px-5 py-24 sm:px-8">
      <Image src="/images/iris.jpg" alt="" width={72} height={72} className="rounded-full" />
      <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight">No page here.</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-steel">
        The route does not exist. The work, the approach, and the form do.
      </p>
      <Link
        href="/"
        className="mt-10 border border-cyan bg-cyan/10 px-5 py-3 text-[12px] tracking-[0.18em] text-paper uppercase hover:bg-cyan/20"
      >
        Home
      </Link>
    </div>
  );
}
