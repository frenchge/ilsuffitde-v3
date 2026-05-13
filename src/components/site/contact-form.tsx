"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type ContactFormProps = {
  initialSubject?: string;
  initialMessage?: string;
};

export function ContactForm({
  initialSubject = "",
  initialMessage = "",
}: ContactFormProps) {
  const [values, setValues] = useState<FormState>({
    ...initialState,
    subject: initialSubject,
    message: initialMessage,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setValues({ ...initialState, subject: initialSubject, message: initialMessage });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 xl:grid-cols-2">
        <label className="grid min-w-0 gap-2">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.72)]">
            Nom
          </span>
          <input
            type="text"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            placeholder="Votre nom"
            className="h-14 w-full rounded-[1.1rem] border border-[rgba(19,35,61,0.12)] bg-white px-5 text-base text-[var(--color-brand-ink)] outline-none transition-colors placeholder:text-[rgba(19,35,61,0.38)] focus:border-[var(--color-brand-primary-dark)]"
          />
        </label>

        <label className="grid min-w-0 gap-2">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.72)]">
            Email
          </span>
          <input
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            placeholder="votreadresse@email.com"
            className="h-14 w-full rounded-[1.1rem] border border-[rgba(19,35,61,0.12)] bg-white px-5 text-base text-[var(--color-brand-ink)] outline-none transition-colors placeholder:text-[rgba(19,35,61,0.38)] focus:border-[var(--color-brand-primary-dark)]"
          />
        </label>
      </div>

      <label className="grid min-w-0 gap-2">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.72)]">
          Sujet
        </span>
        <input
          type="text"
          value={values.subject}
          onChange={(event) => setValues((current) => ({ ...current, subject: event.target.value }))}
          placeholder="Votre besoin, votre projet, votre question"
          className="h-14 w-full rounded-[1.1rem] border border-[rgba(19,35,61,0.12)] bg-white px-5 text-base text-[var(--color-brand-ink)] outline-none transition-colors placeholder:text-[rgba(19,35,61,0.38)] focus:border-[var(--color-brand-primary-dark)]"
        />
      </label>

      <label className="grid min-w-0 gap-2">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.72)]">
          Message
        </span>
        <textarea
          rows={7}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          placeholder="Parlez-nous de votre initiative, de vos besoins ou de l'action que vous souhaitez structurer."
          className="min-h-[180px] w-full rounded-[1.4rem] border border-[rgba(19,35,61,0.12)] bg-white px-5 py-4 text-base leading-7 text-[var(--color-brand-ink)] outline-none transition-colors placeholder:text-[rgba(19,35,61,0.38)] focus:border-[var(--color-brand-primary-dark)]"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-ink)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-brand-primary-surface)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Envoi…" : "Soumettre"}
        </button>
        {status === "sent" && (
          <p className="text-sm text-green-700">Message envoyé, nous vous répondrons bientôt.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">Une erreur est survenue, réessayez ou écrivez-nous directement.</p>
        )}
      </div>
    </form>
  );
}
