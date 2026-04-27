"use client";

import React, { useRef } from "react";
import clsx from "clsx";

import { Material } from "@/components/ui/material-1";
import { useClickOutside } from "@/components/ui/use-click-outside";

interface DrawerProps {
  height?: number;
  onDismiss: () => void;
  show: boolean;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  height,
  onDismiss,
  show,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onDismiss);

  return (
    <>
      <div
        className={clsx(
          "fixed left-0 top-0 z-[99999] h-full w-full bg-overlay duration-300",
          show ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onDismiss}
      />
      <Material
        type="menu"
        className={clsx(
          "fixed bottom-0 left-0 z-[999999] max-h-full w-full overflow-y-auto rounded-b-none rounded-t-[1.75rem] border border-b-0 border-[rgba(30,69,120,0.12)] bg-white text-[var(--color-brand-ink)] shadow-[0_-20px_48px_rgba(17,17,17,0.12)] transition-transform duration-300 hide-scrollbar",
          show ? "translate-y-0" : "translate-y-full",
        )}
        style={{ height }}
        ref={ref}
      >
        <div>{children}</div>
      </Material>
    </>
  );
};
