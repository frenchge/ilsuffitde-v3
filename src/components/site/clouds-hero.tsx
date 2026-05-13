"use client";

import dynamic from "next/dynamic";

const CloudsBackground = dynamic(() => import("@/components/site/clouds-background"), {
  ssr: false,
  loading: () => null,
});

export function CloudsHero() {
  return <CloudsBackground />;
}
