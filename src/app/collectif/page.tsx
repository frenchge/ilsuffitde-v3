import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SiteShell } from "@/components/site/site-shell";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { TextAnimate } from "@/components/ui/text-animate";
import { collectiveMembers } from "@/lib/site";

export default function CollectifPage() {
  return (
    <SiteShell>
      <Header />
      <main className="bg-white pt-24 text-[var(--color-brand-ink)] md:pt-28">
        <section className="mx-auto max-w-[1600px] px-6 pb-8 md:px-10 md:pb-10 lg:px-16">
          <div className="mx-auto max-w-[68rem]">
            <TextAnimate
              as="h1"
              animation="blurInUp"
              by="word"
              once
              className="section-title max-w-[16ch]"
            >
              Un collectif en évolution
            </TextAnimate>
            <Reveal variant="up" delay={0.05}>
              <div className="mt-8 grid gap-5 text-base leading-8 text-[rgba(23,19,19,0.76)] md:text-lg">
                <p>
                  Le projet est porté par une équipe engagée, expérimentée dans
                  l’accompagnement de projets, l’animation de dynamiques collectives et le
                  développement d’initiatives associatives et culturelles. Elle s’appuie sur
                  une connaissance fine des réalités de terrain et des enjeux rencontrés par
                  les structures, ce qui permet de proposer un accompagnement concret, adapté
                  et opérationnel.
                </p>
                <p>
                  L’équipe travaille en lien étroit avec un collectif d’intervenants aux
                  compétences complémentaires : ingénierie de projet, communication,
                  ressources humaines, développement, etc., mobilisés en fonction des besoins.
                  Cette organisation permet de combiner une coordination globale du projet
                  avec une grande souplesse d’intervention, en activant les bonnes
                  compétences au bon moment.
                </p>
                <p>
                  Vous nous contactez, nous analysons votre demande, puis nous vous mettons
                  en relation avec l’intervenant le plus adapté à votre besoin.
                </p>
              </div>
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
                      <p className="mt-0.5 line-clamp-1 text-sm leading-5 text-[rgba(28,39,51,0.58)]">{member.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
