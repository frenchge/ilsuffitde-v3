"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal],[data-reveal-text]";
const pendingRevealSelector =
  "[data-reveal]:not([data-revealed]),[data-reveal-text]:not([data-revealed])";

function revealAll() {
  document.querySelectorAll(revealSelector).forEach((element) => {
    element.setAttribute("data-revealed", "");
  });
}

export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const wideScreen = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!wideScreen.matches || reducedMotion.matches) {
      root.classList.remove("reveals-on");
      revealAll();
      return;
    }

    root.classList.add("reveals-on");

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return () => {
        root.classList.remove("reveals-on");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const observeReveal = (node: Node) => {
      if (!(node instanceof Element)) {
        return;
      }

      if (node.matches(revealSelector) && !node.hasAttribute("data-revealed")) {
        observer.observe(node);
      }

      node.querySelectorAll(pendingRevealSelector).forEach((element) => {
        observer.observe(element);
      });
    };

    observeReveal(document.body);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(observeReveal);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("reveals-on");
    };
  }, []);

  return null;
}
