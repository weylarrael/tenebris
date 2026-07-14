"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  Ring,
  Sparkles,
  Stars,
  Torus,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* The central sacred-geometry sigil: a distorting glassy core wrapped in
   counter-rotating golden rings — the "plataforma divina". */
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
    <group>
      {/* Inner luminous core */}
      <Icosahedron ref={core} args={[1.05, 1]}>
        <meshStandardMaterial
          color="#2a1f57"
          emissive="#6b54c9"
          emissiveIntensity={0.65}
          metalness={0.6}
          roughness={0.25}
          flatShading
        />
      </Icosahedron>

      {/* Golden wireframe shell */}
      <Icosahedron ref={wire} args={[1.55, 1]}>
        <meshBasicMaterial color="#d8b25a" wireframe transparent opacity={0.55} />
      </Icosahedron>

      {/* Sacred rings */}
      <group ref={ringA} rotation={[Math.PI / 2.2, 0, 0]}>
        <Ring args={[2.3, 2.34, 96]}>
          <meshBasicMaterial color="#f0d79a" transparent opacity={0.5} side={THREE.DoubleSide} />
        </Ring>
      </group>
      <group ref={ringB} rotation={[Math.PI / 1.7, 0.6, 0]}>
        <Torus args={[2.75, 0.012, 16, 120]}>
          <meshBasicMaterial color="#b9a7ff" transparent opacity={0.55} />
        </Torus>
      </group>
    </group>
  );
}

/* A faint nebula haze behind everything. */
function Nebula() {
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#2a1a5a",
        transparent: true,
        opacity: 0.4,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
      }),
    []
  );
  return (
    <mesh material={mat} scale={18} position={[0, 0, -6]}>
      <sphereGeometry args={[1, 32, 32]} />
    </mesh>
  );
}

/* Subtle camera parallax driven by pointer position. */
function ParallaxRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.9 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ArcaneScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Nebula />
        <ambientLight intensity={0.25} />
        <pointLight position={[6, 4, 6]} intensity={120} color="#d8b25a" />
        <pointLight position={[-6, -3, 2]} intensity={90} color="#6b54c9" />
        <pointLight position={[0, 0, 4]} intensity={40} color="#8fd9e6" />

        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
          <Sigil />
        </Float>

        <Sparkles
          count={140}
          scale={[14, 9, 8]}
          size={2.6}
          speed={0.35}
          opacity={0.8}
          color="#f0d79a"
        />
        <Sparkles
          count={60}
          scale={[12, 8, 6]}
          size={3.4}
          speed={0.2}
          opacity={0.5}
          color="#b9a7ff"
        />

        <Stars
          radius={120}
          depth={60}
          count={4500}
          factor={4}
          saturation={0}
          fade
          speed={0.6}
        />

        <ParallaxRig />
      </Suspense>
    </Canvas>
  );
}
