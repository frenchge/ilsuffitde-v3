"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-lg border border-[rgba(22,24,24,0.08)] bg-white/92 shadow-[0_18px_45px_rgba(25,24,22,0.06)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
              aria-expanded={isOpen}
            >
              <span className="text-lg leading-7 font-medium text-[#161818]">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(22,50,79,0.1)] text-[var(--color-brand-primary-dark)]"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-7">
                    <div className="mb-4 h-px w-full bg-[rgba(22,24,24,0.08)]" />
                    <p className="max-w-[70ch] text-base leading-7 text-[rgba(22,24,24,0.76)]">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
