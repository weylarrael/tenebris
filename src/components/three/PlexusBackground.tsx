"use client";

import dynamic from "next/dynamic";

const Plexus = dynamic(() => import("./Plexus"), {
  ssr: false,
  loading: () => null,
});

/* Fixed full-viewport constellation background behind the whole page. */
export default function PlexusBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-[#050508]"
    >
      <Plexus />
    </div>
  );
}
