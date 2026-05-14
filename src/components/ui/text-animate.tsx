import React from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

type TextAnimation = "blurInUp" | "fadeIn" | "slideUp";
type TextSplit = "word" | "char" | "line";

type TextAnimateProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  children: ReactNode;
  as?: ElementType;
  animation?: TextAnimation;
  by?: TextSplit;
  delay?: number;
  duration?: number;
  once?: boolean;
  startOnView?: boolean;
  style?: CSSProperties;
};

export function TextAnimate({
  children,
  as: Component = "span",
  animation = "blurInUp",
  by,
  delay = 0,
  duration,
  once,
  startOnView,
  style,
  ...props
}: TextAnimateProps) {
  void duration;
  void once;
  void startOnView;

  const mergedStyle = {
    ...style,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  if (typeof children === "string" && (by === "word" || by === "char")) {
    const tokens =
      by === "word" ? children.trim().split(/\s+/) : Array.from(children);

    const nodes = tokens.flatMap((token, i) => {
      const span = (
        <span
          key={`tok-${i}`}
          data-reveal-token=""
          style={{ "--reveal-i": i } as CSSProperties}
        >
          {token}
        </span>
      );
      if (by === "word" && i < tokens.length - 1) {
        return [span, <React.Fragment key={`sp-${i}`}> </React.Fragment>];
      }
      return [span];
    });

    return React.createElement(
      Component,
      {
        ...props,
        style: mergedStyle,
        "data-reveal-text": animation,
      } as HTMLAttributes<HTMLElement>,
      nodes,
    );
  }

  return React.createElement(
    Component,
    {
      ...props,
      style: mergedStyle,
      "data-reveal-text": animation,
    } as HTMLAttributes<HTMLElement>,
    children,
  );
}
