"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const points = [
  [-3.1, 0.4, 0], [-2.4, 1.0, 0], [-1.3, 1.35, 0], [0.0, 1.15, 0], [1.2, 0.82, 0],
  [2.1, 0.2, 0], [2.65, -0.55, 0], [1.55, -0.82, 0], [0.4, -0.95, 0], [-0.9, -0.86, 0],
  [-1.95, -0.6, 0], [-2.9, -0.2, 0], [2.9, 0.25, 0], [3.25, 0.75, 0], [2.75, 1.05, 0],
  [-2.5, -1.1, 0], [-2.7, -1.75, 0], [-2.15, -1.95, 0], [1.25, -1.22, 0], [1.65, -1.86, 0],
  [2.1, -1.58, 0], [-0.65, -1.24, 0], [-0.45, -1.86, 0], [0.08, -1.72, 0], [-0.15, 0.32, 0],
] as const;

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
  [10, 11], [11, 0], [5, 12], [12, 13], [13, 14], [14, 4], [11, 15], [15, 16], [16, 17],
  [10, 15], [7, 18], [18, 19], [19, 20], [8, 21], [21, 22], [22, 23], [2, 24], [24, 8],
  [24, 5], [1, 10], [3, 9], [4, 8],
] as const;

function NetworkMesh() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => points.map((p) => new THREE.Vector3(p[0], p[1], p[2])), []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.18) * 0.12;
    group.current.rotation.x = Math.cos(clock.elapsedTime * 0.16) * 0.06;
  });

  return (
    <group ref={group}>
      {edges.map(([a, b], index) => (
        <Line
          key={`${a}-${b}`}
          points={[nodes[a], nodes[b]]}
          color={index % 4 === 0 ? "#D86A27" : "#9DB5D6"}
          lineWidth={index % 4 === 0 ? 1.5 : 0.8}
          transparent
          opacity={index % 4 === 0 ? 0.75 : 0.42}
        />
      ))}
      {nodes.map((node, index) => (
        <Sphere key={index} position={node} args={[index % 4 === 0 ? 0.055 : 0.04, 16, 16]}>
          <meshStandardMaterial
            color={index % 4 === 0 ? "#D86A27" : "#FFFFFF"}
            emissive={index % 4 === 0 ? "#7A2F08" : "#163A73"}
            emissiveIntensity={0.18}
            roughness={0.3}
          />
        </Sphere>
      ))}
    </group>
  );
}

export function ElephantNetwork() {
  return (
    <div className="absolute inset-0 opacity-95">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.7 }}>
        <ambientLight intensity={0.75} />
        <pointLight position={[4, 3, 5]} intensity={18} color="#ffffff" />
        <Suspense fallback={null}>
          <NetworkMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
