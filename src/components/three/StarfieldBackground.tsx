"use client";

import dynamic from "next/dynamic";

const BackgroundScene = dynamic(() => import("./BackgroundScene"), {
  ssr: false,
  loading: () => null,
});

/* Fixed full-viewport starfield that lives behind the entire page. */
export default function StarfieldBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #07101a 0%, #04050b 45%, #020205 100%)",
      }}
    >
      <BackgroundScene />
    </div>
  );
}
