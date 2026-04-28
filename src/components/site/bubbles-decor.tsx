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
};

const PALETTE = {
  yellow: "#f3b829",
  green: "#7eb259",
};

const PRESETS: Record<string, BubbleSpec[]> = {
  intro: [
    { size: "260px", top: "40px", left: "-110px", color: PALETTE.yellow, opacity: 0.78, delay: "0s" },
    { size: "180px", top: "60px", right: "-80px", color: PALETTE.green, opacity: 0.7, delay: "1.4s" },
  ],
  vision: [
    { size: "220px", top: "50px", right: "-90px", color: PALETTE.yellow, opacity: 0.7, delay: "0.4s" },
  ],
  services: [
    { size: "300px", top: "60px", left: "-140px", color: PALETTE.yellow, opacity: 0.55, delay: "0.2s" },
    { size: "200px", bottom: "60px", right: "-90px", color: PALETTE.yellow, opacity: 0.78, delay: "1.2s" },
  ],
  approach: [],
  collective: [
    { size: "240px", top: "60px", left: "-100px", color: PALETTE.yellow, opacity: 0.55, delay: "0.4s" },
    { size: "170px", top: "32%", right: "-90px", color: PALETTE.green, opacity: 0.64, delay: "1.6s" },
  ],
  faq: [
    { size: "200px", top: "50px", left: "-90px", color: PALETTE.green, opacity: 0.64, delay: "0.4s" },
    { size: "150px", bottom: "70px", right: "-60px", color: PALETTE.yellow, opacity: 0.76, delay: "1.7s" },
  ],
  contact: [
    { size: "200px", top: "50px", left: "-100px", color: PALETTE.green, opacity: 0.62, delay: "0.4s" },
    { size: "140px", bottom: "60px", right: "-60px", color: PALETTE.yellow, opacity: 0.78, delay: "1.5s" },
  ],
  moments: [
    { size: "200px", top: "50px", left: "-90px", color: PALETTE.green, opacity: 0.62, delay: "0.5s" },
  ],
  engagement: [
    { size: "200px", top: "50px", right: "-90px", color: PALETTE.yellow, opacity: 0.76, delay: "0.5s" },
  ],
};

export function BubblesDecor({
  preset,
  className = "",
}: {
  preset: keyof typeof PRESETS;
  className?: string;
}) {
  const bubbles = PRESETS[preset];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble-float absolute block rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            bottom: bubble.bottom,
            left: bubble.left,
            right: bubble.right,
            backgroundColor: bubble.color,
            opacity: bubble.opacity ?? 0.5,
            filter: `blur(${bubble.blur ?? "0.4px"})`,
            animationDelay: bubble.delay ?? "0s",
            zIndex: bubble.z ?? 0,
          }}
        />
      ))}
    </div>
  );
}
