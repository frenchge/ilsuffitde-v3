import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/site/site-shell";
import { ChronicleButton } from "@/components/ui/chronicle-button";
import { services } from "@/lib/services";

export default function ServicesIndexPage() {
  return (
    <SiteShell>
      <Header />

      <main className="bg-[linear-gradient(180deg,rgba(135,157,120,0.12)_0%,#ffffff_30%,#ffffff_100%)] px-6 pb-20 pt-28 text-[var(--color-brand-ink)] md:px-10 md:pt-32 lg:px-16">
        <section className="mx-auto max-w-[1600px]">
          <div className="max-w-4xl">
            <p className="section-kicker">Les services</p>
            <h1 className="section-title mt-4 max-w-[12ch]">
              Choisir le bon accompagnement.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(28,39,51,0.72)]">
              Une page directe pour retrouver chaque service, lire les détails et prendre contact.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-[2rem] border border-[var(--color-brand-line)] bg-white shadow-[0_22px_64px_rgba(25,24,22,0.06)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-primary-dark)] shadow-[0_12px_28px_rgba(25,24,22,0.08)]">
                    Service {service.id}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(28,39,51,0.46)]">
                        {service.shortTitle}
                      </p>
                      <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-[var(--color-brand-primary-dark)]">
                        {service.title}
                      </h2>
                    </div>
                    {service.pricing ? (
                      <span className="rounded-full bg-[var(--color-brand-primary)] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-ink)]">
                        {service.pricing}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 text-base leading-8 text-[rgba(28,39,51,0.74)]">
                    {service.summary}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-primary-dark)] transition-opacity hover:opacity-70"
                  >
                    Voir les détails
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <ChronicleButton
              href="/contact"
              text="Parler d’un besoin"
              customBackground="var(--color-brand-primary-dark)"
              customForeground="#fff"
              hoverColor="var(--color-brand-primary-soft)"
              hoverForeground="#fff"
            />
          </div>
        </section>
      </main>

      <Footer />
    </SiteShell>
  );
}
