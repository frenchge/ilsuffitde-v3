"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactForm = dynamic(
  () => import("@/components/site/contact-form").then((mod) => mod.ContactForm),
  {
    ssr: false,
    loading: () => <div className="min-h-[32rem]" aria-hidden="true" />,
  }
);

export function DeferredContactForm() {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const anchor = anchorRef.current;

    if (!anchor || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(anchor);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={anchorRef}>
      {shouldLoad ? <ContactForm /> : <div className="min-h-[32rem]" aria-hidden="true" />}
    </div>
  );
}
