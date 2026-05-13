"use client";

import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei/core/Cloud";

const cloudConfig = {
  seed: 1,
  segments: 8,
  volume: 5.4,
  opacity: 0.74,
  fade: 10,
  growth: 2.4,
  speed: 0.16,
};

function CloudScene() {
  const groupRef = useRef<THREE.Group>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloud0Ref = useRef<any>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloud1Ref = useRef<any>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloud2Ref = useRef<any>(null!);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    groupRef.current.rotation.y = Math.cos(elapsed / 8) / 3.2;
    groupRef.current.rotation.x = Math.sin(elapsed / 9) / 5.2;
    groupRef.current.position.x = Math.sin(elapsed / 7) * 1.15;
    groupRef.current.position.y = Math.cos(elapsed / 8.5) * 0.38;
    cloud0Ref.current.rotation.y -= delta * 0.16;
    cloud1Ref.current.rotation.y += delta * 0.1;
    cloud2Ref.current.rotation.y -= delta * 0.12;
  });

  return (
    <>
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <group ref={groupRef}>
        <Clouds material={THREE.MeshBasicMaterial} limit={72} texture="/cloud.png">
          <Cloud ref={cloud0Ref} {...cloudConfig} bounds={[6, 1, 1]} color="white" />
          <Cloud ref={cloud1Ref} {...cloudConfig} bounds={[6, 1, 1]} color="white" seed={2} position={[15, 0, 0]} />
          <Cloud ref={cloud2Ref} {...cloudConfig} bounds={[6, 1, 1]} color="white" seed={3} position={[-15, 0, 0]} />
        </Clouds>
      </group>
    </>
  );
}

export default function CloudsBackground() {
  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,#7ab6ee_0%,#a5cdf2_28%,#cee4f5_55%,#ecf5fb_82%,#ffffff_100%)]">
      <Canvas
        camera={{ position: [0, -10, 10], fov: 75 }}
        dpr={1}
        frameloop="always"
        gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
      >
        <CloudScene />
      </Canvas>
    </div>
  );
}
