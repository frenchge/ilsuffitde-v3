"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | ReactNode;
  cursorAnimationVariants?: {
    initial: Variants["initial"];
    animate: Variants["animate"];
  };
  cursorClassName?: string;
};

const defaultCursorAnimationVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.01,
      repeat: Infinity,
      repeatDelay: 0.4,
      repeatType: "reverse" as const,
    },
  },
};

export function Typewriter({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = defaultCursorAnimationVariants,
}: TypewriterProps) {
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!currentText) {
      return;
    }

    if (displayText === "" && currentIndex === 0 && !isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText[0] ?? "");
        setCurrentIndex(1);
      }, initialDelay || speed);

      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex >= currentText.length) {
      const shouldDelete = loop || currentTextIndex < texts.length - 1;

      if (!shouldDelete) {
        return;
      }

      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, waitTime);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText.length === 0) {
      const isLastText = currentTextIndex === texts.length - 1;

      if (isLastText && !loop) {
        return;
      }

      timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsDeleting(false);
        setCurrentIndex(0);
      }, 180);
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    currentTextIndex,
    deleteSpeed,
    displayText,
    initialDelay,
    isDeleting,
    loop,
    speed,
    texts,
    waitTime,
  ]);

  const isCursorHidden =
    hideCursorOnType &&
    (currentIndex < (texts[currentTextIndex]?.length ?? 0) || isDeleting);

  return (
    <span className={cn("inline whitespace-pre-wrap tracking-tight", className)}>
      <span>{displayText}</span>
      {showCursor ? (
        <motion.span
          variants={cursorAnimationVariants}
          className={cn(cursorClassName, isCursorHidden ? "hidden" : "")}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      ) : null}
    </span>
  );
}
