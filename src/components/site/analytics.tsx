"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-M76STBMH";

export function Analytics() {
  useEffect(() => {
    if (window.dataLayer) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
