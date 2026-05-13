"use client";

import * as THREE from "three";
import { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei/core/Cloud";

const cloudConfig = {
  seed: 1,
  segments: 12,
  volume: 4,
  opacity: 0.92,
  fade: 8,
  growth: 1.2,
  speed: 0.12,
};

function ContextLossRecovery({ onLost }: { onLost: () => void }) {
  const { gl } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    const handler = (e: Event) => {
      e.preventDefault();
      onLost();
    };
    canvas.addEventListener("webglcontextlost", handler);
    return () => canvas.removeEventListener("webglcontextlost", handler);
  }, [gl, onLost]);
  return null;
}

function CloudScene({ onLost }: { onLost: () => void }) {
  return (
    <>
      <ContextLossRecovery onLost={onLost} />
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <Clouds
        material={THREE.MeshBasicMaterial}
        limit={200}
        texture="/cloud.png"
        frustumCulled={false}
      >
        <Cloud {...cloudConfig} bounds={[4, 1.2, 1.2]} color="white" position={[0, 1, 0]} />
        <Cloud {...cloudConfig} seed={2} bounds={[4, 1.2, 1.2]} color="white" position={[5, -0.5, -1]} />
        <Cloud {...cloudConfig} seed={3} bounds={[4, 1.2, 1.2]} color="white" position={[-5, 0.2, -1]} />
      </Clouds>
    </>
  );
}

export default function CloudsBackground() {
  const [canvasKey, setCanvasKey] = useState(0);
  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,#a8cef0_0%,#a8cef0_16%,#c2dcf3_42%,#dceaf6_68%,#f1f7fc_88%,#ffffff_100%)]">
      <Canvas
        key={canvasKey}
        camera={{ position: [0, -10, 10], fov: 75 }}
        dpr={1}
        frameloop="always"
        gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
      >
        <CloudScene onLost={() => setCanvasKey((k) => k + 1)} />
      </Canvas>
    </div>
  );
}
