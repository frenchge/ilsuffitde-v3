import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/site/contact-form";
import { PhoneModalButton } from "@/components/site/phone-modal";
import { SiteShell } from "@/components/site/site-shell";
import { TextAnimate } from "@/components/ui/text-animate";

export default function ContactPage() {
  return (
    <SiteShell>
      <Header />
      <main className="pt-24 bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] md:pt-28">
        <section className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-ink)] transition-opacity hover:opacity-70"
            >
              Revenir à l’accueil
            </Link>
          </div>
          <div className="grid gap-8 rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:p-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:p-10">
            <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)] p-6 md:p-8">
              <p className="section-kicker">Contact</p>
              <TextAnimate
                as="h1"
                animation="blurInUp"
                by="word"
                once
                className="section-title mt-5 max-w-[10ch]"
              >
                Parlons de votre projet
              </TextAnimate>
              <p className="mt-5 text-base leading-8 text-[rgba(23,19,19,0.68)] md:text-lg">
                Décrivez votre besoin, votre contexte ou votre initiative. Nous
                reviendrons vers vous pour imaginer la suite avec vous.
              </p>
              <div className="mt-8 grid gap-4">
                <a
                  href="mailto:ilsuffitde@gmail.com"
                  className="rounded-[1.25rem] border border-[rgba(30,69,120,0.12)] bg-white/85 p-5 transition-opacity hover:opacity-80"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgba(23,19,19,0.44)]">
                    E-mail
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[var(--color-brand-ink)]">
                    ilsuffitde@gmail.com
                  </p>
                </a>
                <div className="rounded-[1.25rem] border border-[rgba(30,69,120,0.12)] bg-white/85 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgba(23,19,19,0.44)]">
                    Téléphone
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[var(--color-brand-ink)]">
                    06 70 75 59 99
                  </p>
                  <PhoneModalButton className="mt-5 inline-flex rounded-full border border-[var(--color-brand-primary-soft)] bg-[var(--color-brand-primary-soft)] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-92" />
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
