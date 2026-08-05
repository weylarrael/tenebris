"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* Elongated hexagonal bipyramid: long upper pyramid + slightly shorter lower
   inverted pyramid, joined at a faceted equator whose edges read as the
   central zigzag seam. Real faceted mesh (flat-shaded), watertight. */
function useCrystalGeometry() {
  return useMemo(() => {
    const sides = 6;
    const R = 0.62; // equator radius
    const topH = 1.8; // upper apex height
    const botH = 1.5; // lower apex height (shorter)

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
      // upper facet (apex → equator edge), CCW seen from outside
      push(top);
      push(a);
      push(b);
      // lower facet (reverse winding)
      push(bot);
      push(b);
      push(a);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.computeVertexNormals(); // per-face normals (non-indexed) → crisp facets
    return g;
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
          samples={6}
          resolution={512}
          transmission={1}
          thickness={1.3}
          roughness={0.08}
          ior={1.6}
          chromaticAberration={0.45}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0}
          color="#a017cf"
          attenuationColor="#ff2dff"
          attenuationDistance={1.5}
          backside
        />
      </mesh>
      {/* Neon-magenta beveled edges */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#ff45ff" transparent opacity={0.95} toneMapped={false} />
      </lineSegments>
    </group>
  );
}

export default function CrystalLogo() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 4, 5]} intensity={45} color="#ff2dff" />
        <pointLight position={[-4, -2, 3]} intensity={28} color="#8a2dff" />
        <pointLight position={[0, 1, 4]} intensity={16} color="#ffffff" />
        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Crystal />
        </Float>
      </Suspense>
    </Canvas>
  );
}
