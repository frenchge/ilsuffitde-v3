"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud, Sky } from "@react-three/drei";

const cloudConfig = {
  seed: 1,
  segments: 14,
  volume: 6,
  opacity: 0.8,
  fade: 10,
  growth: 4,
  speed: 0.22,
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
      <Sky turbidity={2} rayleigh={0.6} sunPosition={[0.3, 1, 0]} />
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <group ref={groupRef}>
        <Clouds material={THREE.MeshBasicMaterial} limit={400}>
          <Cloud ref={cloud0Ref} {...cloudConfig} bounds={[6, 1, 1]} color="white" />
          <Cloud ref={cloud1Ref} {...cloudConfig} bounds={[6, 1, 1]} color="white" seed={2} position={[15, 0, 0]} />
          <Cloud ref={cloud2Ref} {...cloudConfig} bounds={[6, 1, 1]} color="white" seed={3} position={[-15, 0, 0]} />
        </Clouds>
      </group>
    </>
  );
}

export default function CloudsBackground() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, -10, 10], fov: 75 }}
        dpr={1}
        frameloop={isVisible ? "always" : "never"}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <CloudScene />
      </Canvas>
    </div>
  );
}
