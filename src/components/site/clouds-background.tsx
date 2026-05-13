"use client";

import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei/core/Cloud";

const cloudConfig = {
  seed: 1,
  segments: 10,
  volume: 6.5,
  opacity: 1,
  fade: 10,
  growth: 4,
  speed: 0.18,
};

function CloudScene() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloud0Ref = useRef<any>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloud1Ref = useRef<any>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cloud2Ref = useRef<any>(null!);

  useFrame((_, delta) => {
    if (cloud0Ref.current) cloud0Ref.current.rotation.y -= delta * 0.06;
    if (cloud1Ref.current) cloud1Ref.current.rotation.y += delta * 0.05;
    if (cloud2Ref.current) cloud2Ref.current.rotation.y -= delta * 0.05;
  });

  return (
    <>
      <ambientLight intensity={Math.PI / 1.5} />
      <Clouds
        material={THREE.MeshBasicMaterial}
        limit={120}
        texture="/cloud.png"
        frustumCulled={false}
      >
        <Cloud ref={cloud0Ref} {...cloudConfig} bounds={[7, 1.4, 1]} color="white" position={[0, 0.5, 0]} />
        <Cloud ref={cloud1Ref} {...cloudConfig} bounds={[6, 1.2, 1]} color="white" seed={2} position={[6, -1.2, -1]} />
        <Cloud ref={cloud2Ref} {...cloudConfig} bounds={[6, 1.2, 1]} color="white" seed={3} position={[-6, 0.8, -1]} />
      </Clouds>
    </>
  );
}

export default function CloudsBackground() {
  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,#a8cef0_0%,#a8cef0_16%,#c2dcf3_42%,#dceaf6_68%,#f1f7fc_88%,#ffffff_100%)]">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 65 }}
        dpr={1}
        frameloop="always"
        gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
      >
        <CloudScene />
      </Canvas>
    </div>
  );
}
