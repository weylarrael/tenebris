"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Ring, Torus } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

/* The central sacred-geometry sigil: a distorting luminous core wrapped in
   counter-rotating golden rings — the "plataforma divina". Stars now live in
   the global BackgroundScene, so this canvas is transparent and sigil-only. */
function Sigil() {
  const core = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Group>(null);
  const ringB = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (core.current) {
      core.current.rotation.y += delta * 0.12;
      core.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.18;
      wire.current.rotation.z += delta * 0.05;
      const s = 1 + Math.sin(t * 0.8) * 0.03;
      wire.current.scale.setScalar(s);
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.25;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.16;
  });

  return (
    <group scale={0.82} position={[0, -0.15, -1.2]}>
      <Icosahedron ref={core} args={[0.9, 1]}>
        <meshStandardMaterial
          color="#2a0716"
          emissive="#ff1f8f"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.25}
          flatShading
        />
      </Icosahedron>

      <Icosahedron ref={wire} args={[1.55, 1]}>
        <meshBasicMaterial color="#17e0cf" wireframe transparent opacity={0.6} />
      </Icosahedron>

      <group ref={ringA} rotation={[Math.PI / 2.2, 0, 0]}>
        <Ring args={[2.3, 2.34, 96]}>
          <meshBasicMaterial color="#ffe6a1" transparent opacity={0.55} side={THREE.DoubleSide} />
        </Ring>
      </group>
      <group ref={ringB} rotation={[Math.PI / 1.7, 0.6, 0]}>
        <Torus args={[2.75, 0.012, 16, 120]}>
          <meshBasicMaterial color="#ff2d95" transparent opacity={0.65} />
        </Torus>
      </group>
    </group>
  );
}

export default function ArcaneScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 50 }}
      dpr={[1, 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.22} />
        <pointLight position={[6, 4, 6]} intensity={120} color="#ff2d95" />
        <pointLight position={[-6, -3, 2]} intensity={90} color="#17e0cf" />
        <pointLight position={[0, 0, 4]} intensity={50} color="#ffe6a1" />

        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
          <Sigil />
        </Float>
      </Suspense>
    </Canvas>
  );
}
