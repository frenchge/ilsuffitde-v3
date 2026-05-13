import React from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  id?: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  return (
    <div className={cn("w-full font-sans", className)}>
      <div className="relative mx-auto max-w-[1400px] pb-8">
        {data.map((item) => (
          <div
            key={item.id ?? item.title}
            className="relative flex justify-start pt-8 md:min-h-[24rem] md:pt-24"
          >
            <div className="sticky top-36 z-40 flex max-w-xs flex-col self-start md:w-[22rem] md:min-w-[22rem] md:max-w-[22rem] md:flex-row md:items-center">
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#ece9e6] md:left-3">
                <div className="h-4 w-4 rounded-full border border-[rgba(22,24,24,0.12)] bg-[var(--color-brand-primary)]" />
              </div>
              <h3 className="font-display hidden max-w-[14rem] pl-20 text-[2.2rem] leading-[0.94] font-semibold tracking-[-0.04em] text-[var(--color-brand-primary-dark)] md:block lg:text-[2.9rem]">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full max-w-[66rem] pl-12 pr-0 md:ml-[6rem] md:pl-10 lg:ml-[8rem]">
              <h3 className="font-display mb-4 block max-w-[14rem] text-left text-[1.85rem] leading-[0.95] font-semibold tracking-[-0.04em] text-[var(--color-brand-primary-dark)] md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          className="absolute bottom-8 top-0 left-5 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,rgba(22,24,24,0.14)_10%,rgba(22,24,24,0.14)_90%,transparent_100%)] md:left-8"
        >
          <div className="absolute inset-x-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[var(--color-brand-primary-dark)] via-[var(--color-brand-primary)] to-transparent" />
        </div>
      </div>
    </div>
  );
};
