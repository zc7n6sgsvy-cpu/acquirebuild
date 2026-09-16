"use client";

import { useEffect, useRef, useState } from "react";

export function HatchIntro({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [exiting, setExiting] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const finish = () => {
      if (done.current) return;
      done.current = true;
      setExiting(true);
      window.setTimeout(onComplete, 900);
    };

    const onEnded = () => finish();
    const play = () => {
      video.play().catch(() => finish());
    };

    video.addEventListener("ended", onEnded);
    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });

    return () => {
      video.removeEventListener("ended", onEnded);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[80] bg-ink ${exiting ? "intro-exit" : ""}`}
      role="dialog"
      aria-label="Acquire Build opening"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        poster="/images/mark-clean.jpg"
      >
        <source src="/images/intro.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />
      <p className="absolute bottom-8 left-6 font-sans text-[11px] tracking-[0.32em] text-steel uppercase sm:left-8">
        Acquire Build
      </p>
      <button
        type="button"
        onClick={() => {
          if (done.current) return;
          done.current = true;
          setExiting(true);
          window.setTimeout(onComplete, 900);
        }}
        className="absolute right-6 bottom-8 border border-white/20 px-4 py-2 font-sans text-[11px] tracking-[0.22em] text-paper uppercase transition-colors hover:border-cyan hover:bg-cyan/10 sm:right-8"
      >
        Enter
      </button>
    </div>
  );
}
