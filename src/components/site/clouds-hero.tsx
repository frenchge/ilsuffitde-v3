"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CloudsBackground = dynamic(() => import("@/components/site/clouds-background"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[linear-gradient(180deg,#eef7ff_0%,#ffffff_72%)]" />
  ),
});

export function CloudsHero() {
  const [shouldLoadClouds, setShouldLoadClouds] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const update = () => setShouldLoadClouds(mediaQuery.matches);
    update();

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (!shouldLoadClouds) {
    return null;
  }

  return <CloudsBackground />;
}
