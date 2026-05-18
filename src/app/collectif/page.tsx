import Image from "next/image";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BubblesDecor } from "@/components/site/bubbles-decor";
import { SiteShell } from "@/components/site/site-shell";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { TextAnimate } from "@/components/ui/text-animate";
import { pageMetadata } from "@/lib/seo";
import { collectiveMembers } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Notre collectif",
  description:
    "Découvrez le collectif Il suffit de... : des intervenants aux compétences complémentaires pour accompagner les projets associatifs, culturels et publics.",
  path: "/collectif",
  image: "/hero-equipe.avif",
});

export default function CollectifPage() {
  return (
    <SiteShell>
      <Header />
      <main className="bg-white pt-24 text-[var(--color-brand-ink)] md:pt-28">
        <section className="relative overflow-hidden mx-auto max-w-[1600px] px-6 pb-8 md:px-10 md:pb-10 lg:px-16">
          <BubblesDecor preset="collective" />
          <div className="relative z-10 mx-auto flex max-w-[68rem] flex-col items-center text-center">
            <Reveal variant="pop">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(28,39,51,0.55)]">
                Notre collectif
              </p>
            </Reveal>
            <TextAnimate
              as="h1"
              animation="blurInUp"
              by="word"
              once
              delay={0.1}
              className="section-title mx-auto mt-5 max-w-[20ch]"
            >
              Un collectif en évolution
            </TextAnimate>
            <Reveal variant="up" delay={0.35}>
              <div className="mt-8 grid max-w-[58rem] gap-5 text-base leading-8 text-[rgba(23,19,19,0.76)] md:text-lg">
                <p>
                  Le projet est porté par une équipe engagée, habituée à accompagner des projets associatifs, culturels et publics.
                </p>
                <p>
                  Elle s’appuie sur une connaissance fine des réalités de terrain et sur un collectif d’intervenants aux compétences complémentaires (ingénierie de projet, communication, ressources humaines, développement…).
                </p>
                <p>
                  Cette organisation permet d’apporter à chaque projet les bonnes compétences au bon moment, avec une coordination simple et réactive.
                </p>
                <p>
                  Vous nous contactez, nous analysons votre besoin, puis nous vous mettons en relation avec la personne la plus adaptée.
                </p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.55} className="mt-10">
              <span className="inline-block h-px w-24 bg-[rgba(28,39,51,0.18)]" />
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-10 md:pb-20">
          <div className="relative w-full">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-white to-transparent" />

            <Marquee className="[--duration:36s] [--gap:1.5rem]" pauseOnHover repeat={2}>
              {collectiveMembers.map((member) => (
                <div key={member.name} className="flex w-56 shrink-0 flex-col">
                  <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      fill
                      sizes="224px"
                      quality={62}
                      src={member.image}
                    />
                    <div className="absolute bottom-0 w-full min-h-[4.25rem] border-t border-[rgba(28,39,51,0.08)] bg-white p-3">
                      <h3 className="line-clamp-1 font-semibold text-[var(--color-brand-ink)]">{member.name}</h3>
                      <p className="mt-0.5 text-sm leading-5 text-[rgba(28,39,51,0.58)]">{member.roles.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
          <div className="flex justify-center">
            <Image
              src="/Logo essor.jpg"
              alt=""
              width={320}
              height={320}
              className="h-auto w-48 md:w-64"
            />
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
