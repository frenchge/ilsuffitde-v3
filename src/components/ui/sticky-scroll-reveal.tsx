"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const activeCardRef = useRef(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const normalized = Math.max(0, Math.min(0.9999, latest));
    const nextIndex = Math.floor(normalized * content.length);
    if (nextIndex !== activeCardRef.current) {
      activeCardRef.current = nextIndex;
      setActiveCard(nextIndex);
    }
  });

  const scrollToCard = (index: number) => {
    const container = ref.current as HTMLDivElement | null;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const startY = window.scrollY + rect.top;
    const endY = window.scrollY + rect.bottom - window.innerHeight;

    if (endY <= startY) {
      itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const targetProgress = Math.min(0.999, Math.max(0, (index + 0.12) / content.length));
    const targetY = startY + (endY - startY) * targetProgress;

    if (index !== activeCardRef.current) {
      activeCardRef.current = index;
      setActiveCard(index);
    }
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative flex justify-center gap-8 rounded-[2rem] border border-[rgba(22,24,24,0.08)] bg-white/55 p-6 shadow-[0_30px_80px_rgba(25,24,22,0.08)] lg:gap-10 lg:p-8"
      ref={ref}
    >
      <div className="relative flex items-start px-2 lg:w-[42%] lg:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className="my-24 first:mt-2 last:mb-24 cursor-pointer"
              onClick={() => scrollToCard(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  scrollToCard(index);
                }
              }}
            >
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.28,
                  color: activeCard === index ? "#C86A4A" : "rgba(22,24,24,0.62)",
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="text-3xl font-bold lg:text-4xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.24,
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mt-5 max-w-lg text-base leading-8 text-[rgba(22,24,24,0.72)]"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-28 hidden h-[36rem] w-[36rem] overflow-hidden bg-transparent lg:block",
          contentClassName,
        )}
      >
        <div className="flex h-full w-full">{content[activeCard].content ?? null}</div>
      </div>
    </div>
  );
};
