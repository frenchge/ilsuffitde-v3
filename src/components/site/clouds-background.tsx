"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
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
  return (
    <>
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <Clouds
        material={THREE.MeshBasicMaterial}
        limit={200}
        texture="/cloud.png"
        frustumCulled={false}
      >
        <Cloud {...cloudConfig} bounds={[8, 2, 2]} color="white" />
      </Clouds>
    </>
  );
}

export default function CloudsBackground() {
  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,#a8cef0_0%,#a8cef0_16%,#c2dcf3_42%,#dceaf6_68%,#f1f7fc_88%,#ffffff_100%)]">
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
