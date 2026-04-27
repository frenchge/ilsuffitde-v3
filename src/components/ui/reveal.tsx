"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  scale?: number;
  variant?: "up" | "left" | "right" | "pop" | "tilt-left" | "tilt-right";
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 44,
  scale = 0.96,
  variant = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const hiddenByVariant = {
    up: { opacity: 0, y: distance },
    left: { opacity: 0, x: -distance },
    right: { opacity: 0, x: distance },
    pop: { opacity: 0, y: distance * 0.75, scale },
    "tilt-left": { opacity: 0, x: -distance * 0.85, y: distance * 0.4, rotate: -2.5 },
    "tilt-right": { opacity: 0, x: distance * 0.85, y: distance * 0.4, rotate: 2.5 },
  }[variant];

  return (
    <motion.div
      className={className}
      initial={hiddenByVariant}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{
        delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
