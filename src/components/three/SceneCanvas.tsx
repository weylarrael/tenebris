"use client";

import dynamic from "next/dynamic";

const ArcaneScene = dynamic(() => import("./ArcaneScene"), {
  ssr: false,
  loading: () => null,
});

export default function SceneCanvas() {
  return (
    <div className="absolute inset-0 -z-0">
      <ArcaneScene />
    </div>
  );
}
