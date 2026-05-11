import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

type TextAnimateProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  children: ReactNode;
  as?: ElementType;
  animation?: string;
  by?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  startOnView?: boolean;
  style?: CSSProperties;
};

export function TextAnimate({
  children,
  as: Component = "span",
  animation,
  by,
  delay,
  duration,
  once,
  startOnView,
  ...props
}: TextAnimateProps) {
  void animation;
  void by;
  void delay;
  void duration;
  void once;
  void startOnView;

  return <Component {...props}>{children}</Component>;
}
