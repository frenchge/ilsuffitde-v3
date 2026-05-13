"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CloudsBackground = dynamic(() => import("@/components/site/clouds-background"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[linear-gradient(180deg,#a8cef0_0%,#a8cef0_16%,#c2dcf3_42%,#dceaf6_68%,#f1f7fc_88%,#ffffff_100%)]" />
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
