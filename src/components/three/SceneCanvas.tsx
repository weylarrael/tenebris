"use client";

import dynamic from "next/dynamic";

const ArcaneScene = dynamic(() => import("./ArcaneScene"), {
  ssr: false,
  loading: () => null,
});

/* Hero-only sigil canvas. pointer-events-none so it never blocks taps/scroll
   on mobile — the global starfield handles the parallax. */
export default function SceneCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <ArcaneScene />
    </div>
  );
}
