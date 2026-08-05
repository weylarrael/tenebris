"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* Elongated hexagonal bipyramid: long upper pyramid + slightly shorter lower
   inverted pyramid, joined at a faceted equator whose edges read as the
   central zigzag seam. Real faceted mesh (flat-shaded), watertight. */
function useCrystalGeometry() {
  return useMemo(() => {
    const sides = 6;
    const R = 0.62;
    const topH = 1.8;
    const botH = 1.5;

    const eq: THREE.Vector3[] = [];
    for (let i = 0; i < sides; i++) {
      const a = (i / sides) * Math.PI * 2 + Math.PI / 6;
      eq.push(new THREE.Vector3(Math.cos(a) * R, 0, Math.sin(a) * R));
    }
    const top = new THREE.Vector3(0, topH, 0);
    const bot = new THREE.Vector3(0, -botH, 0);

    const pos: number[] = [];
    const push = (v: THREE.Vector3) => pos.push(v.x, v.y, v.z);
    for (let i = 0; i < sides; i++) {
      const a = eq[i];
      const b = eq[(i + 1) % sides];
      push(top);
      push(a);
      push(b);
      push(bot);
      push(b);
      push(a);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.computeVertexNormals();
    return g;
  }, []);
}

/* Radial magenta glow behind the crystal (fakes bloom, keeps canvas alpha). */
function useGlowTexture() {
  return useMemo(() => {
    const s = 256;
    const c = document.createElement("canvas");
    c.width = c.height = s;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, "rgba(255,70,255,0.55)");
    g.addColorStop(0.4, "rgba(160,23,207,0.28)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    return new THREE.CanvasTexture(c);
  }, []);
}

function Crystal() {
  const group = useRef<THREE.Group>(null);
  const geo = useCrystalGeometry();
  const edges = useMemo(() => new THREE.EdgesGeometry(geo, 1), [geo]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={group}>
      <mesh geometry={geo}>
        <MeshTransmissionMaterial
          samples={8}
          resolution={512}
          transmission={1}
          thickness={1.4}
          roughness={0.05}
          ior={1.7}
          chromaticAberration={0.6}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          clearcoat={1}
          clearcoatRoughness={0.12}
          color="#8a17d6"
          attenuationColor="#ff2dff"
          attenuationDistance={1.1}
          backside
        />
      </mesh>
      {/* Bright neon-magenta beveled edges */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#ff5cff" transparent opacity={1} toneMapped={false} />
      </lineSegments>
    </group>
  );
}

function Glow() {
  const tex = useGlowTexture();
  return (
    <mesh position={[0, 0, -1.4]} scale={4.6}>
      <planeGeometry />
      <meshBasicMaterial
        map={tex}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function CrystalLogo() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Glow />
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 5]} intensity={30} color="#ff2dff" />
        <pointLight position={[-4, -2, 3]} intensity={18} color="#8a2dff" />
        <pointLight position={[0, 1, 4]} intensity={10} color="#ffffff" />

        {/* Colored studio env (lightformers) → premium glass reflections, no fetch */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={3} color="#ff2dff" position={[0, 2, 3]} scale={[4, 3, 1]} />
          <Lightformer form="rect" intensity={2} color="#8a2dff" position={[-3, -1, 2]} scale={[3, 3, 1]} />
          <Lightformer form="circle" intensity={1.5} color="#17e0cf" position={[3, 1, -3]} scale={[3, 3, 1]} />
          <Lightformer form="rect" intensity={2.4} color="#ffffff" position={[0, -2, 3]} scale={[2, 1, 1]} />
        </Environment>

        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Crystal />
        </Float>
      </Suspense>
    </Canvas>
  );
}
