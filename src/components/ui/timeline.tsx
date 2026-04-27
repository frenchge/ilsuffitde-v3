"use client";
import {
  useScroll,
  useTransform,
  motion,
  useReducedMotion,
} from "motion/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  id?: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frameId = 0;

    const updateHeight = () => {
      const nextHeight = element.getBoundingClientRect().height;
      setHeight((currentHeight) => (currentHeight === nextHeight ? currentHeight : nextHeight));
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(updateHeight);
    });

    resizeObserver.observe(element);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const scaleYTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full font-sans", className)}
      ref={containerRef}
    >
      <div ref={ref} className="relative mx-auto max-w-[1400px] pb-8">
        {data.map((item) => (
          <div
            key={item.id ?? item.title}
            className="relative flex justify-start pt-8 md:min-h-[24rem] md:pt-24"
          >
            <div className="sticky top-36 z-40 flex max-w-xs flex-col self-start md:w-[22rem] md:min-w-[22rem] md:max-w-[22rem] md:flex-row md:items-center">
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#ece9e6] md:left-3">
                <div className="h-4 w-4 rounded-full border border-[rgba(22,24,24,0.12)] bg-[var(--color-brand-primary)]" />
              </div>
              <h3 className="font-display hidden max-w-[14rem] pl-20 text-[2.2rem] leading-[0.94] font-semibold tracking-[-0.04em] text-[var(--color-brand-primary-dark)] md:block lg:text-[2.9rem]">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full max-w-[66rem] pl-12 pr-0 md:ml-[6rem] md:pl-10 lg:ml-[8rem]">
              <h3 className="font-display mb-4 block max-w-[14rem] text-left text-[1.85rem] leading-[0.95] font-semibold tracking-[-0.04em] text-[var(--color-brand-primary-dark)] md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-5 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[rgba(22,24,24,0.14)] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              opacity: prefersReducedMotion ? 1 : opacityTransform,
              scaleY: prefersReducedMotion ? 1 : scaleYTransform,
              transformOrigin: "top",
            }}
            className="absolute inset-x-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-t from-[var(--color-brand-primary-dark)] via-[var(--color-brand-primary)] to-transparent from-[0%] via-[12%] will-change-transform"
          />
        </div>
      </div>
    </div>
  );
};
