import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white px-6 py-18 text-[var(--color-brand-ink)] md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)_minmax(0,0.8fr)]">
        <div>
          <Image src="/logos/ilsuffitde-deuxiemelogo.png" alt="Il suffit de..." width={200} height={200} className="h-32 w-auto" />
          <p className="mt-5 max-w-xl text-lg leading-8 text-[rgba(28,39,51,0.64)]">
            Nous accompagnons les associations, acteurs culturels et collectivités dans le développement, la structuration et la coopération autour de leurs projets.
          </p>
        </div>

        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgba(28,39,51,0.65)]">
            Navigation
          </p>
          <div className="mt-6 grid gap-4 text-base text-[rgba(28,39,51,0.76)]">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/collectif">Notre collectif</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgba(28,39,51,0.65)]">
            Contact
          </p>
          <div className="mt-6 grid gap-4 text-base text-[rgba(28,39,51,0.76)]">
            <a href="mailto:ilsuffitde@gmail.com">ilsuffitde@gmail.com</a>
            <a href="tel:+33670755999">06 70 75 59 99</a>
            <p>7 rue Gaston et Marguerite Cahen, 60000 Beauvais</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col gap-3 border-t border-[rgba(28,39,51,0.10)] pt-8 text-sm text-[rgba(28,39,51,0.65)] md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Il suffit de... Association.</div>
        <Link
          href="/contact"
          className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-brand-primary)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-ink)] transition-colors hover:bg-[var(--color-brand-primary-surface)]"
        >
          Contactez nous
        </Link>
      </div>
    </footer>
  );
}
