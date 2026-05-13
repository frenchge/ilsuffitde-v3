"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
  const groupRef = useRef<THREE.Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c0 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c1 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c2 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c3 = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c4 = useRef<any>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(t / 9) * 0.6;
      groupRef.current.position.y = Math.cos(t / 11) * 0.25;
    }
    if (c0.current) c0.current.rotation.y -= delta * 0.12;
    if (c1.current) c1.current.rotation.y += delta * 0.10;
    if (c2.current) c2.current.rotation.y -= delta * 0.14;
    if (c3.current) c3.current.rotation.y += delta * 0.11;
    if (c4.current) c4.current.rotation.y -= delta * 0.13;
  });

  return (
    <>
      <ContextLossRecovery onLost={onLost} />
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <group ref={groupRef}>
        <Clouds
          material={THREE.MeshBasicMaterial}
          limit={300}
          texture="/cloud.png"
          frustumCulled={false}
        >
          <Cloud ref={c0} {...cloudConfig} seed={1} bounds={[3.2, 1, 1]} color="white" position={[-7, 3, -1]} />
          <Cloud ref={c1} {...cloudConfig} seed={2} bounds={[3.2, 1, 1]} color="white" position={[6.5, 2.2, 0]} />
          <Cloud ref={c2} {...cloudConfig} seed={3} bounds={[3.2, 1, 1]} color="white" position={[0.5, -0.2, 1]} />
          <Cloud ref={c3} {...cloudConfig} seed={4} bounds={[3.2, 1, 1]} color="white" position={[-5.5, -2.4, -0.5]} />
          <Cloud ref={c4} {...cloudConfig} seed={5} bounds={[3.2, 1, 1]} color="white" position={[5.2, -2.6, 0.5]} />
        </Clouds>
      </group>
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
