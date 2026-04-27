"use client";

import { useEffect, useRef } from "react";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frameId = 0;

    const updateScrollIndicator = () => {
      const indicator = scrollIndicatorRef.current;

      if (indicator) {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = documentHeight > 0 ? Math.max(window.scrollY / documentHeight, 0.02) : 0.02;
        indicator.style.transform = `scaleY(${progress})`;
      }
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateScrollIndicator();
      });
    };

    updateScrollIndicator();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="relative overflow-x-clip bg-[var(--color-brand-background)]">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="paintRip">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03 0.2"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div
        className="pointer-events-none fixed top-0 right-0 z-[120] h-screen w-[6px]"
        aria-hidden="true"
      >
        <div
          ref={scrollIndicatorRef}
          className="absolute top-0 right-0 w-full origin-top bg-[var(--color-brand-accent)]"
          style={{ height: "100%", transform: "scaleY(0.02)" }}
        />
      </div>
      {children}
    </div>
  );
}
