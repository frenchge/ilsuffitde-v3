"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const CloudsBackground = dynamic(() => import("@/components/site/clouds-background"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[linear-gradient(180deg,#a8cef0_0%,#a8cef0_16%,#c2dcf3_42%,#dceaf6_68%,#f1f7fc_88%,#ffffff_100%)]" />
  ),
});

const subscribeDesktop = (cb: () => void) => {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getDesktop = () => window.matchMedia("(min-width: 768px)").matches;
const getDesktopServer = () => false;

export function CloudsHero() {
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktop, getDesktopServer);
  if (!isDesktop) return null;
  return <CloudsBackground />;
}
