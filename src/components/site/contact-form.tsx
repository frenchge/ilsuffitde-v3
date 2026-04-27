"use client";

import { ArrowUpRight } from "lucide-react";
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = values.subject.trim() || "Demande de contact";
    const lines = [
      values.name.trim() ? `Nom : ${values.name.trim()}` : "",
      values.email.trim() ? `Email : ${values.email.trim()}` : "",
      "",
      values.message.trim() ||
        "Bonjour, je souhaite échanger à propos d'un accompagnement ou d'une action.",
    ].filter(Boolean);

    window.location.href = `mailto:ilsuffitde@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 xl:grid-cols-2">
        <label className="grid min-w-0 gap-2">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.48)]">
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
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.48)]">
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
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.48)]">
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
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(19,35,61,0.48)]">
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
        <p className="max-w-md text-sm leading-6 text-[rgba(19,35,61,0.62)]">
          Le bouton ouvre votre messagerie avec un message pré-rempli pour démarrer l’échange.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-ink)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-brand-primary-surface)]"
        >
          Préparer un e-mail
          <ArrowUpRight size={16} />
        </button>
      </div>
    </form>
  );
}
