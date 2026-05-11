import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/site/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <Header />
      <main className="bg-white px-6 py-28 text-[var(--color-brand-ink)] md:px-10 lg:px-16">
        <section className="mx-auto max-w-[760px]">
          <p className="section-kicker">Page introuvable</p>
          <h1 className="font-display mt-4 text-5xl font-semibold leading-none text-[var(--color-brand-primary-dark)] md:text-7xl">
            Cette page n’existe pas.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[rgba(28,39,51,0.72)]">
            Le lien a peut-être changé. Vous pouvez revenir à l’accueil, découvrir nos services ou nous contacter directement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-[var(--color-brand-primary-dark)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-[var(--color-brand-primary)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-ink)]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[rgba(28,39,51,0.16)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-ink)]"
            >
              Contact
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
