"use client";

import { useState } from "react";

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

  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => setActiveId(isActive ? null : item.id)}
                className="group relative w-full"
                type="button"
              >
                <div className="flex items-center gap-4 px-1 py-5 md:gap-6">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary-dark)]">
                    <div
                      className={`absolute inset-0 rounded-full bg-[var(--color-brand-primary-dark)] transition-transform duration-200 ${
                        isActive ? "scale-100" : "scale-90"
                      }`}
                    />
                    <span
                      className="relative z-10 text-sm font-semibold tracking-wide text-white"
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-left text-[1.55rem] font-medium tracking-tight transition-[color,transform] duration-200 md:text-[1.85rem] ${
                      isActive
                        ? "translate-x-1 text-[rgba(28,39,51,0.95)]"
                        : "text-[rgba(28,39,51,0.75)]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div className="ml-auto flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center transition-transform duration-200 ${
                        isActive ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`text-[var(--color-brand-primary-dark)] transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

              </button>

              <div
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ${
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <p className="px-1 pb-6 pl-14 pr-8 leading-relaxed text-[rgba(44,65,96,0.72)] md:pl-16 md:pr-12">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
