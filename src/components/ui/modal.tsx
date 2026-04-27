"use client";

import React, { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { Button, type ButtonProps } from "@/components/ui/button-1";
import { Drawer } from "@/components/ui/drawer";
import { Material } from "@/components/ui/material-1";
import useBreakpoints from "@/components/ui/use-breakpoints";

interface ModalProps {
  active: boolean;
  onClickOutside: () => void;
  children: React.ReactNode;
  sticky?: boolean;
  initialFocusRef?: React.RefObject<HTMLButtonElement> | React.RefObject<null>;
}

interface ModalBodyProps {
  children: React.ReactNode;
  sticky?: boolean;
  className?: string;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  sticky?: boolean;
}

const ModalModal = ({
  active,
  onClickOutside,
  children,
  sticky,
  initialFocusRef,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { isMobile, isDesktop } = useBreakpoints();

  useLayoutEffect(() => {
    if (active) {
      if (initialFocusRef?.current) initialFocusRef.current.focus();
      else {
        dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    }
  }, [active, initialFocusRef]);

  useEffect(() => {
    if (!active) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClickOutside();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, onClickOutside]);

  const modalContent = (
    <>
      {isMobile && (
        <Drawer onDismiss={onClickOutside} show={active}>
          {React.Children.map(children, (child) =>
            (child as React.ReactElement)?.type === Modal.Body
              ? React.cloneElement(child as React.ReactElement<ModalBodyProps>, { sticky })
              : child,
          )}
        </Drawer>
      )}
      {isDesktop && (
        <div
          className={clsx(
            "fixed inset-0 z-[99999] flex items-center justify-center duration-300",
            active ? "bg-background-200-alpha-800" : "pointer-events-none bg-transparent",
          )}
          onClick={onClickOutside}
        >
          <Material
            ref={dialogRef}
            type="modal"
            className={clsx(
              "flex max-h-[min(800px,_80vh)] w-[540px] flex-col overflow-y-auto font-sans text-gray-1000 duration-300",
              active ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {React.Children.map(children, (child) =>
              (child as React.ReactElement)?.type === Modal.Body
                ? React.cloneElement(child as React.ReactElement<ModalBodyProps>, { sticky })
                : child,
            )}
          </Material>
        </div>
      )}
    </>
  );

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(modalContent, document.body);
};

const ModalBody = ({ children, sticky, className }: ModalBodyProps) => (
  <div className={clsx("overflow-y-auto text-sm", sticky ? "px-6 pb-6" : "p-6", className)}>
    {React.Children.map(children, (child) =>
      (child as React.ReactElement)?.type === Modal.Header
        ? React.cloneElement(child as React.ReactElement<ModalHeaderProps>, { sticky })
        : child,
    )}
  </div>
);

const ModalHeader = ({ children, sticky }: ModalHeaderProps) => (
  <header
    className={clsx(
      "mb-6 rounded-t-xl",
      sticky && "sticky top-0 -mx-6 border-b border-gray-alpha-400 bg-background-200 px-6 pt-5",
    )}
  >
    {children}
  </header>
);

const ModalInset = ({ children }: { children: React.ReactNode }) => (
  <div className="-mx-6 border-b border-t border-accents-2 bg-accents-1 p-6">{children}</div>
);

const ModalTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 text-2xl font-semibold tracking-[-0.029375rem]">{children}</h2>
);

const ModalSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base">{children}</p>
);

const ModalActions = ({ children }: { children: React.ReactNode }) => (
  <footer className="sticky inset-0 bottom-0 flex shrink-0 justify-between rounded-b-xl border-t border-gray-alpha-400 bg-background-200 p-4">
    {children}
  </footer>
);

const ModalAction = (props: ButtonProps) => <Button {...props}>{props.children}</Button>;

export const Modal = {
  Modal: ModalModal,
  Header: ModalHeader,
  Inset: ModalInset,
  Body: ModalBody,
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Actions: ModalActions,
  Action: ModalAction,
};
