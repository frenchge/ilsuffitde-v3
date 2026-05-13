"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
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

function DebugProbe() {
  const { gl, scene } = useThree();
  const frames = useRef(0);
  const start = useRef(performance.now());

  useEffect(() => {
    console.log("[clouds] CloudScene mounted at", performance.now().toFixed(0), "ms");
    return () => {
      console.log("[clouds] CloudScene UNMOUNTED at", performance.now().toFixed(0), "ms after", frames.current, "frames");
    };
  }, []);

  useEffect(() => {
    const onLost = (e: Event) => {
      e.preventDefault();
      console.error("[clouds] WebGL context LOST at", performance.now().toFixed(0), "ms");
    };
    const onRestored = () => console.log("[clouds] WebGL context restored");
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);
    return () => {
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
    };
  }, [gl]);

  useFrame(() => {
    frames.current += 1;
    if (frames.current === 1 || frames.current === 30 || frames.current === 60 || frames.current === 120) {
      const elapsed = performance.now() - start.current;
      console.log(`[clouds] frame ${frames.current} at ${elapsed.toFixed(0)}ms, scene children:`, scene.children.length);
    }
  });

  return null;
}

function CloudScene() {
  return (
    <>
      <DebugProbe />
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
