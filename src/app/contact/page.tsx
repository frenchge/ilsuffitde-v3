import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/site/contact-form";
import { PhoneModalButton } from "@/components/site/phone-modal";
import { SiteShell } from "@/components/site/site-shell";
import { TextAnimate } from "@/components/ui/text-animate";
import { trustedPartners } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteShell>
      <Header />
      <main className="bg-white pt-24 md:pt-28">
        <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
          <div className="grid gap-8 rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:p-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:p-10">
            <div className="rounded-[1.5rem] bg-white p-6 md:p-8">
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
                Vous pouvez nous partager votre besoin, votre contexte ou votre idée. Nous vous
                recontactons rapidement pour faire le point ensemble.
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
                <div className="rounded-[1.25rem] border border-[rgba(30,69,120,0.12)] bg-white/85 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgba(23,19,19,0.44)]">
                    Adresse
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[var(--color-brand-ink)]">
                    7 rue Gaston et Marguerite Cahen
                  </p>
                  <p className="text-base text-[rgba(23,19,19,0.72)]">60000 Beauvais</p>
                </div>
                <div className="rounded-[1.25rem] border border-[rgba(30,69,120,0.12)] bg-white/85 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgba(23,19,19,0.44)]">
                    SIRET
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[var(--color-brand-ink)]">
                    811 717 438 00014
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
          <div className="rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:p-8 lg:p-10">
            <TextAnimate
              as="h2"
              animation="blurInUp"
              by="word"
              once
              className="section-title mt-5 max-w-[16ch]"
            >
              Ils et elles nous ont fait confiance
            </TextAnimate>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-primary-dark)]">
                  Accompagnement
                </h3>
                <div className="mt-5 grid gap-3">
                  {trustedPartners.accompagnement.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-accent)]" />
                      <p className="text-base leading-7 text-[rgba(23,19,19,0.72)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-primary-dark)]">
                  Ateliers collectifs
                </h3>
                <div className="mt-5 grid gap-3">
                  {trustedPartners.ateliers.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-accent)]" />
                      <p className="text-base leading-7 text-[rgba(23,19,19,0.72)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-primary-dark)]">
                  Réseaux
                </h3>
                <div className="mt-5 grid gap-3">
                  {trustedPartners.reseaux.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-accent)]" />
                      <p className="text-base leading-7 text-[rgba(23,19,19,0.72)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
