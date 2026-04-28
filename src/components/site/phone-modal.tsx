"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

import { Modal } from "@/components/ui/modal";

const PHONE_NUMBER = "06 70 75 59 99";
const PHONE_LINK = "tel:+33670755999";

export function PhoneModalButton({
  label = "Appelez-nous",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <Phone size={18} />
        <span>{label}</span>
      </button>

      <Modal.Modal active={open} onClickOutside={() => setOpen(false)}>
        <Modal.Body className="p-6 md:p-7">
          <Modal.Header>
            <Modal.Title>
              <span className="font-display text-[clamp(2rem,3vw,2.6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-brand-primary-dark)]">
                Appelez-nous
              </span>
            </Modal.Title>
            <Modal.Subtitle>
              <span className="text-base leading-7 text-[rgba(23,19,19,0.68)]">
                Pour nous joindre.
              </span>
            </Modal.Subtitle>
          </Modal.Header>

          <div className="rounded-2xl border border-[rgba(30,69,120,0.12)] bg-white p-5 text-[var(--color-brand-ink)]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary-dark)]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight">{PHONE_NUMBER}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-brand-primary-soft)] bg-[var(--color-brand-primary-soft)] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-92"
            >
              Fermer
            </button>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-ink)] transition-colors hover:bg-[var(--color-brand-primary-surface)]"
            >
              Appeler maintenant
            </a>
          </div>
        </Modal.Body>
      </Modal.Modal>
    </>
  );
}
