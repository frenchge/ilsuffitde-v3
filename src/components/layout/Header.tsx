"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ChronicleButton } from "@/components/ui/chronicle-button";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Accompagnement", href: "/services/accompagnement-individuel" },
  { label: "Ateliers", href: "/services/ateliers-collectifs" },
  { label: "Réseaux", href: "/services/coordination-de-reseaux" },
  { label: "Notre collectif", href: "/collectif" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useLightContent, setUseLightContent] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);
  const logoSrc = "/ilsuffitdev3logo.png";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    let frameId = 0;

    const updateTheme = () => {
      frameId = 0;

      const header = headerRef.current;

      if (!header) {
        return;
      }

      const rect = header.getBoundingClientRect();
      const hero = document.getElementById("top");
      const probeX = window.innerWidth / 2;
      const probeY = Math.max(rect.bottom - 6, rect.top + rect.height / 2);
      const elements = document.elementsFromPoint(probeX, probeY);

      const themedElement = elements.find((element) => {
        if (header.contains(element)) {
          return false;
        }

        return element.closest("[data-nav-theme]");
      });

      const theme = themedElement?.closest("[data-nav-theme]")?.getAttribute("data-nav-theme");
      setIsOverHero(Boolean(hero && hero.getBoundingClientRect().bottom > rect.bottom + 8));
      setUseLightContent(theme === "light");
    };

    const requestThemeUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateTheme);
    };

    requestThemeUpdate();
    window.addEventListener("scroll", requestThemeUpdate, { passive: true });
    window.addEventListener("resize", requestThemeUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestThemeUpdate);
      window.removeEventListener("resize", requestThemeUpdate);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[120] transition-colors duration-300 ${
          isOverHero
            ? "border-0 bg-transparent shadow-none backdrop-blur-none [backdrop-filter:none] [box-shadow:none]"
            : "bg-white/72 shadow-none backdrop-blur-[18px]"
        }`}
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-4 px-6 py-2 md:px-10 md:py-3 lg:grid-cols-[180px_minmax(0,1fr)_220px] lg:px-16">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center overflow-visible"
            aria-label="Il suffit de..."
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={logoSrc}
              alt="Il suffit de..."
              width={555}
              height={225}
              priority
              className="h-14 w-auto max-w-[280px] origin-left scale-[1.22] md:h-[4.5rem] md:max-w-none"
            />
          </Link>

          <nav className="hidden justify-center lg:flex">
            <div className="flex items-center justify-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[0.92rem] font-semibold transition-opacity hover:opacity-65 ${
                    useLightContent ? "text-white" : "text-[var(--color-brand-ink)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto flex items-center justify-end gap-4">
            <div className={`hidden transition-opacity duration-300 lg:block ${isOverHero ? "pointer-events-none opacity-0" : "opacity-100"}`}>
              <ChronicleButton
                href="/contact"
                text="Contactez-nous"
                customBackground="var(--color-brand-primary)"
                customForeground="var(--color-brand-ink)"
                hoverColor="#2f4a5c"
                hoverForeground="#fff"
              />
            </div>

            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
                isOverHero
                  ? "border-transparent bg-transparent text-[var(--color-brand-primary-dark)] shadow-none"
                  : useLightContent
                  ? "border-white/24 bg-[rgba(255,255,255,0.12)] text-white"
                  : "border border-white/22 bg-[rgba(255,255,255,0.42)] text-[var(--color-brand-primary-dark)] shadow-[0_12px_28px_rgba(17,17,17,0.06)] backdrop-blur-[16px]"
              }`}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[110] bg-[rgba(19,35,61,0.18)] backdrop-blur-[8px] transition-opacity duration-300 ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <div
        className={`fixed inset-x-4 top-[5.35rem] z-[125] rounded-[1.25rem] border border-white/40 bg-[rgba(255,255,255,0.62)] shadow-[0_24px_70px_rgba(17,17,17,0.12)] backdrop-blur-[22px] transition-all duration-300 ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-4 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-ink)] transition-colors hover:bg-[var(--color-brand-primary)]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-md bg-[var(--color-brand-primary)] px-4 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-ink)] transition-colors hover:bg-[var(--color-brand-primary-surface)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </>
  );
}
