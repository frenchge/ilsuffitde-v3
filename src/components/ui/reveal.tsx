import type { CSSProperties, ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "pop" | "tilt-left" | "tilt-right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const mergedStyle = {
    ...style,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  return (
    <div data-reveal={variant} className={className} style={mergedStyle}>
      {children}
    </div>
  );
}
