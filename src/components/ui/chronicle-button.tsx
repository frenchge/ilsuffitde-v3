"use client";

import React from "react";
import Link from "next/link";

const STYLES = `
.chronicleButton {
  position: relative;
  border-radius: var(--chronicle-button-border-radius, 8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  line-height: 1;
  padding: 0.85rem 1.6rem;
  cursor: pointer;
  border: none;
  font-weight: 700;
  text-decoration: none;
  background: var(--chronicle-button-background);
  color: var(--chronicle-button-foreground);
  transition: background 0.4s linear, color 0.4s linear;
  will-change: background, color;
}
.chronicleButton:hover {
  background: var(--chronicle-button-hover-background);
  color: var(--chronicle-button-hover-foreground);
}
.chronicleButton span {
  position: relative;
  display: block;
  perspective: 108px;
}
.chronicleButton span:nth-of-type(2) {
  position: absolute;
}
.chronicleButton em {
  font-style: normal;
  display: inline-block;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: inherit;
  will-change: transform, opacity;
  transition: transform 0.55s cubic-bezier(.645,.045,.355,1), opacity 0.35s linear 0.2s;
}
.chronicleButton span:nth-of-type(1) em { transform-origin: top; }
.chronicleButton span:nth-of-type(2) em {
  opacity: 0;
  transform: rotateX(-90deg) scaleX(.9) translate3d(0,10px,0);
  transform-origin: bottom;
}
.chronicleButton:hover span:nth-of-type(1) em {
  opacity: 0;
  transform: rotateX(90deg) scaleX(.9) translate3d(0,-10px,0);
}
.chronicleButton:hover span:nth-of-type(2) em {
  opacity: 1;
  transform: rotateX(0deg) scaleX(1) translateZ(0);
  transition: transform 0.75s cubic-bezier(.645,.045,.355,1), opacity 0.35s linear 0.3s;
}
`;

interface ChronicleButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  hoverColor?: string;
  hoverForeground?: string;
  borderRadius?: string;
  fontFamily?: string;
  customBackground?: string;
  customForeground?: string;
  width?: string;
  className?: string;
}

export const ChronicleButton: React.FC<ChronicleButtonProps> = ({
  text,
  onClick,
  href,
  hoverColor = "#879d78",
  hoverForeground = "#fff",
  borderRadius = "9999px",
  fontFamily = "inherit",
  customBackground = "#2f4a5c",
  customForeground = "#fff",
  width,
  className,
}) => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.getElementById("chronicle-button-style")) {
      const style = document.createElement("style");
      style.id = "chronicle-button-style";
      style.innerHTML = STYLES;
      document.head.appendChild(style);
    }
  }, []);

  const styleVars = {
    "--chronicle-button-background": customBackground,
    "--chronicle-button-foreground": customForeground,
    "--chronicle-button-hover-background": hoverColor,
    "--chronicle-button-hover-foreground": hoverForeground,
    "--chronicle-button-border-radius": borderRadius,
    fontFamily,
    width,
  } as React.CSSProperties;

  const inner = (
    <>
      <span><em>{text}</em></span>
      <span><em>{text}</em></span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`chronicleButton${className ? ` ${className}` : ""}`} style={styleVars}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={`chronicleButton${className ? ` ${className}` : ""}`}
      onClick={onClick}
      type="button"
      style={styleVars}
    >
      {inner}
    </button>
  );
};
