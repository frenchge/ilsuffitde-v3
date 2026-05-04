"use client";

import { motion, useScroll, type MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({ className, ref, ...props }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-[4.5rem] z-[115] h-1 origin-left bg-linear-to-r from-[var(--color-brand-green)] via-[var(--color-brand-yellow)] to-[var(--color-brand-accent)] md:top-[5.5rem]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
