"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { HatchIntro } from "@/components/hatch-intro";

type Phase = "boot" | "intro" | "live";

function shouldPlayIntro() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const force = new URLSearchParams(window.location.search).has("hatch");
  const seen = sessionStorage.getItem("ab-hatch") === "1";
  return !reduce && (!seen || force);
}

export function HomeExperience({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("boot");

  useEffect(() => {
    const play = shouldPlayIntro();
    const id = window.requestAnimationFrame(() => {
      document.documentElement.dataset.intro = play ? "playing" : "done";
      setPhase(play ? "intro" : "live");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const finish = useCallback(() => {
    sessionStorage.setItem("ab-hatch", "1");
    document.documentElement.dataset.intro = "done";
    setPhase("live");
  }, []);

  return (
    <>
      {phase === "boot" ? <div className="fixed inset-0 z-[80] bg-ink" aria-hidden /> : null}
      {phase === "intro" ? <HatchIntro onComplete={finish} /> : null}
      {children}
    </>
  );
}
