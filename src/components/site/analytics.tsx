"use client";

import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-ZSVBTY5D6G";

export function Analytics() {
  useEffect(() => {
    if (window.gtag) return;

    const loader = document.createElement("script");
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(loader);

    const inline = document.createElement("script");
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inline);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
