"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

/* Faint additive nebula haze wrapping the whole scene. */
function Nebula() {
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#0a2f38",
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
      }),
    []
  );
  return (
    <mesh material={mat} scale={22} position={[0, 0, -8]}>
      <sphereGeometry args={[1, 32, 32]} />
    </mesh>
  );
}

/* Slowly rotating dome of stars + sparkles. */
function StarDome({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.004;
      group.current.rotation.x += delta * 0.0012;
    }
  });
  return (
    <group ref={group}>
      <Stars
        radius={130}
        depth={70}
        count={mobile ? 2200 : 5000}
        factor={4}
        saturation={0}
        fade
        speed={0.25}
      />
      <Sparkles
        count={mobile ? 60 : 130}
        scale={[20, 14, 12]}
        size={2.4}
        speed={0.3}
        opacity={0.75}
        color="#17e0cf"
      />
      <Sparkles
        count={mobile ? 30 : 60}
        scale={[18, 12, 10]}
        size={3.2}
        speed={0.18}
        opacity={0.55}
        color="#ff2d95"
      />
    </group>
  );
}

/* Subtle camera parallax from pointer, via a window listener so the
   canvas itself can stay pointer-events-none (content stays clickable). */
function ParallaxRig() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX / window.innerWidth - 0.5;
      target.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  useFrame(() => {
    camera.position.x += (target.current.x * 1.1 - camera.position.x) * 0.03;
    camera.position.y += (-target.current.y * 0.7 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function BackgroundScene() {
  const mobile = useIsMobile();
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={[1, mobile ? 1.4 : 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Nebula />
        <StarDome mobile={mobile} />
        <ParallaxRig />
      </Suspense>
    </Canvas>
  );
}
