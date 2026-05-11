import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  scale?: number;
  style?: CSSProperties;
  variant?: "up" | "left" | "right" | "pop" | "tilt-left" | "tilt-right";
};

export function Reveal({ children, className, style }: RevealProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
