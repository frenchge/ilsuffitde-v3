"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

interface UniqueAccordionProps {
  items: AccordionItem[];
  initialActiveId?: string | null;
}

export function UniqueAccordion({
  items,
  initialActiveId,
}: UniqueAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(
    initialActiveId ?? items[0]?.id ?? null
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div key={item.id}>
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative w-full"
                initial={false}
                type="button"
              >
                <div className="flex items-center gap-4 px-1 py-5 md:gap-6">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[var(--color-brand-primary-soft)]"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.12 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                    <motion.span
                      className="relative z-10 text-sm font-medium tracking-wide"
                      animate={{
                        color: isActive
                          ? "white"
                          : "rgba(28,39,51,0.55)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  <motion.h3
                    className="font-display text-left text-[1.55rem] font-medium tracking-tight md:text-[1.85rem]"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color:
                        isActive || isHovered
                          ? "rgba(28,39,51,0.95)"
                          : "rgba(28,39,51,0.55)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <div className="ml-auto flex items-center gap-3">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-[var(--color-brand-primary-dark)]"
                        animate={{
                          opacity: isActive || isHovered ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          initial={false}
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

              </motion.button>

              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="px-1 pb-6 pl-14 pr-8 leading-relaxed text-[rgba(44,65,96,0.72)] md:pl-16 md:pr-12"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
