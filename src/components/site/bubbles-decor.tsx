"use client";

import { useRef, type RefObject } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type BubbleSpec = {
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color: string;
  blur?: string;
  delay?: string;
  opacity?: number;
  z?: number;
  shape?: "circle" | "blob";
  rotate?: string;
};

const PALETTE = {
  yellow: "#f3b829",
  green: "#7eb259",
  terracotta: "#d98a5a",
};

const BLOB_SHAPES = [
  "54% 46% 50% 50% / 49% 54% 46% 51%",
  "50% 50% 54% 46% / 47% 50% 50% 53%",
  "56% 44% 50% 50% / 51% 53% 47% 49%",
  "48% 52% 49% 51% / 53% 47% 53% 47%",
  "52% 48% 52% 48% / 46% 53% 47% 54%",
];

// All bubbles peek in from the left or right edge only (negative horizontal
// offsets keep them from drifting over text). Vertical positions use uneven
// percentages, and pairs sit edge-to-edge — placed via `calc()` so the
// companion bubble's top is offset in pixels from the anchor's top —
// producing adjacent shapes that just kiss / slightly overlap rather than
// nesting one inside another. Most bubbles are perfect circles; only a
// handful per preset get the deformed `blob` shape for variety. Capped at
// 4 bubbles per section. Sections that end before the footer keep their
// last bubbles above ~70% top so they don't get clipped by `overflow-hidden`.
const PRESETS: Record<string, BubbleSpec[]> = {
  intro: [
    { size: "320px", top: "8%", left: "-150px", color: PALETTE.yellow, opacity: 0.78, delay: "0s", shape: "blob", rotate: "-14deg" },
    { size: "150px", top: "calc(8% + 270px)", left: "-10px", color: PALETTE.green, opacity: 0.6, delay: "1.0s", z: 1 },
    { size: "180px", top: "62%", right: "-90px", color: PALETTE.terracotta, opacity: 0.65, delay: "1.4s" },
    { size: "120px", top: "calc(62% + 150px)", right: "-20px", color: PALETTE.yellow, opacity: 0.6, delay: "2.1s", z: 1 },
  ],
  vision: [
    { size: "300px", top: "18%", right: "-140px", color: PALETTE.yellow, opacity: 0.7, delay: "0.4s", shape: "blob", rotate: "9deg" },
    { size: "140px", top: "calc(18% + 250px)", right: "-30px", color: PALETTE.terracotta, opacity: 0.55, delay: "1.6s", z: 1 },
    { size: "150px", top: "72%", left: "-70px", color: PALETTE.green, opacity: 0.6, delay: "1.8s" },
  ],
  services: [
    { size: "380px", top: "22%", left: "-180px", color: PALETTE.yellow, opacity: 0.55, delay: "0.2s", shape: "blob", rotate: "-8deg" },
    { size: "170px", top: "calc(22% + 320px)", left: "-20px", color: PALETTE.green, opacity: 0.6, delay: "1.4s", z: 1 },
    { size: "210px", top: "70%", right: "-110px", color: PALETTE.terracotta, opacity: 0.7, delay: "1.2s" },
    { size: "100px", top: "calc(70% + 170px)", right: "-10px", color: PALETTE.yellow, opacity: 0.6, delay: "3.0s", z: 1 },
  ],
  approach: [
    { size: "200px", top: "22%", right: "-90px", color: PALETTE.green, opacity: 0.55, delay: "0.6s" },
    { size: "140px", top: "68%", left: "-70px", color: PALETTE.terracotta, opacity: 0.55, delay: "2.2s", shape: "blob", rotate: "16deg" },
  ],
  collective: [
    { size: "300px", top: "14%", left: "-150px", color: PALETTE.yellow, opacity: 0.55, delay: "0.4s", shape: "blob", rotate: "-12deg" },
    { size: "130px", top: "calc(14% + 250px)", left: "-10px", color: PALETTE.green, opacity: 0.6, delay: "1.0s", z: 1 },
    { size: "170px", top: "48%", right: "-100px", color: PALETTE.terracotta, opacity: 0.6, delay: "1.6s" },
    { size: "140px", top: "76%", left: "-60px", color: PALETTE.yellow, opacity: 0.5, delay: "2.6s" },
  ],
  faq: [
    { size: "260px", top: "10%", left: "-130px", color: PALETTE.green, opacity: 0.62, delay: "0.4s", shape: "blob", rotate: "-10deg" },
    { size: "120px", top: "calc(10% + 320px)", left: "-10px", color: PALETTE.yellow, opacity: 0.6, delay: "1.4s", z: 1 },
    { size: "180px", top: "68%", right: "-80px", color: PALETTE.terracotta, opacity: 0.65, delay: "1.7s" },
  ],
  contact: [
    { size: "260px", top: "12%", left: "-140px", color: PALETTE.green, opacity: 0.62, delay: "0.4s", shape: "blob", rotate: "-12deg" },
    { size: "170px", top: "56%", right: "-80px", color: PALETTE.terracotta, opacity: 0.7, delay: "1.5s" },
    { size: "110px", top: "calc(56% + 150px)", right: "-10px", color: PALETTE.yellow, opacity: 0.6, delay: "3.0s", z: 1 },
  ],
  moments: [
    { size: "280px", top: "12%", left: "-130px", color: PALETTE.green, opacity: 0.6, delay: "0.5s", shape: "blob", rotate: "-9deg" },
    { size: "120px", top: "calc(12% + 240px)", left: "-10px", color: PALETTE.terracotta, opacity: 0.6, delay: "1.6s", z: 1 },
    { size: "130px", top: "62%", right: "-60px", color: PALETTE.yellow, opacity: 0.6, delay: "2.0s" },
  ],
  engagement: [
    { size: "280px", top: "10%", right: "-140px", color: PALETTE.yellow, opacity: 0.76, delay: "0.5s", shape: "blob", rotate: "12deg" },
    { size: "140px", top: "66%", left: "-70px", color: PALETTE.green, opacity: 0.55, delay: "1.8s" },
  ],
  trust: [
    { size: "280px", top: "8%", left: "-140px", color: PALETTE.green, opacity: 0.5, delay: "0.3s", shape: "blob", rotate: "-10deg" },
    { size: "320px", top: "32%", right: "-160px", color: PALETTE.terracotta, opacity: 0.55, delay: "1.6s", shape: "blob", rotate: "8deg" },
    { size: "200px", top: "62%", right: "-70px", color: PALETTE.yellow, opacity: 0.55, delay: "2.4s", z: 1 },
  ],
};

function Bubble({
  bubble,
  index,
  parentRef,
}: {
  bubble: BubbleSpec;
  index: number;
  parentRef: RefObject<HTMLDivElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const isBlob = bubble.shape === "blob";
  const borderRadius = isBlob ? BLOB_SHAPES[index % BLOB_SHAPES.length] : "9999px";
  const duration = `${12 + ((index * 2.7) % 8)}s`;

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  // Parallax travel — varies by index for layered depth, and direction
  // alternates left/right so neighbouring bubbles drift opposite ways.
  const intensity = 50 + ((index * 23) % 60);
  const direction = (index % 2 === 0 ? 1 : -1) * (bubble.left !== undefined ? -1 : 1);
  const y = useTransform(scrollYProgress, [0, 1], [direction * -intensity, direction * intensity]);

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0.55 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 1.2,
        delay: parseFloat(bubble.delay ?? "0") * 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        top: bubble.top,
        bottom: bubble.bottom,
        left: bubble.left,
        right: bubble.right,
        zIndex: bubble.z ?? 0,
        rotate: bubble.rotate ?? "0deg",
        y: reduceMotion ? 0 : y,
        willChange: "transform",
      }}
    >
      <span
        className="bubble-float block"
        style={{
          width: bubble.size,
          height: bubble.size,
          backgroundColor: bubble.color,
          opacity: bubble.opacity ?? 0.5,
          filter: `blur(${bubble.blur ?? "0.4px"})`,
          animationDelay: bubble.delay ?? "0s",
          animationDuration: duration,
          borderRadius,
        }}
      />
    </motion.div>
  );
}

export function BubblesDecor({
  preset,
  className = "",
}: {
  preset: keyof typeof PRESETS;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const bubbles = PRESETS[preset];

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {bubbles.map((bubble, index) => (
        <Bubble key={index} bubble={bubble} index={index} parentRef={ref} />
      ))}
    </div>
  );
}
