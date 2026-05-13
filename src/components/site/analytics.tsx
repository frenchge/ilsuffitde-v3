"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-M76STBMH";

export function Analytics() {
  useEffect(() => {
    let loaded = false;

    const loadGtm = () => {
      if (loaded) return;
      loaded = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    const loadAfterInteraction = () => loadGtm();
    const interactionEvents = ["pointerdown", "keydown", "touchstart", "scroll"];

    const timeoutId = globalThis.setTimeout(loadGtm, 12000);
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, loadAfterInteraction, {
        passive: true,
        once: true,
      });
    });

    return () => {
      if (timeoutId) globalThis.clearTimeout(timeoutId);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, loadAfterInteraction);
      });
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
