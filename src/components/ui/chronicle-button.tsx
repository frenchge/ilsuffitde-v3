"use client";

import React from "react";
import Link from "next/link";

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
