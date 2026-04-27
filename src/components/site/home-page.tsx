import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight, Check, CircleDot } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/site/contact-form";
import { ENGAGEMENT_BODY, IlSuffitDeFlip } from "@/components/site/il-suffit-de-flip";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { ChronicleButton } from "@/components/ui/chronicle-button";
import { DicedHeroSection } from "@/components/ui/diced-hero-section";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { StripedPattern } from "@/components/ui/striped-pattern";
import type { TimelineEntry } from "@/components/ui/timeline";
import { WordRotate } from "@/components/ui/word-rotate";
import { collectiveMembers, faqItems, heroImages } from "@/lib/site";
import { services } from "@/lib/services";

const Timeline = dynamic(() => import("@/components/ui/timeline").then((mod) => mod.Timeline));
import { CloudsHero } from "@/components/site/clouds-hero";
const UniqueAccordion = dynamic(() =>
  import("@/components/ui/interactive-accordion").then((mod) => mod.UniqueAccordion)
);

const principles = [
  "Une adaptation progressive aux besoins réels du terrain.",
  "Un collectif agile mobilisable selon les besoins du projet.",
  "Un accompagnement lisible, concret et activable rapidement.",
  "Une coopération durable entre stratégie, animation, gestion et création.",
];

const remainingGalleryImages = [
  "/19fbf899-90dc-4fc1-826e-a310ae671321.jpeg",
  "/269508047_5193214370692749_2681651415840309168_n.jpg",
  "/34215720_2075759125771638_1014915267559424000_n.jpg",
  "/34322477_2075759319104952_9188054658218721280_n.jpg",
  "/34607743_2080354165312134_2777160724433076224_n.jpg",
  "/413025714_7618212514859577_5808561195863877241_n.jpg",
  "/4b6c03d5-fc6d-4645-aa03-b507b3369f2d.jpeg",
  "/55840471_2549734928374053_3005791724908838912_n.jpg",
  "/85057882_3210560648958141_3423472269333102592_n.jpg",
  "/TL.jpg",
  "/WhatsApp Image 2025-11-13 à 10.35.40_26320973.jpg",
  "/WhatsApp Image 2025-11-13 à 10.38.02_9704400f.jpg",
  "/WhatsApp Image 2025-11-13 à 10.40.37_4bbbf630.jpg",
  "/WhatsApp Image 2025-11-13 à 10.41.07_22723836.jpg",
  "/WhatsApp Image 2025-11-13 à 10.43.11_31c7ffc8.jpg",
  "/WhatsApp Image 2025-11-13 à 10.44.08_ae32b207.jpg",
  "/WhatsApp Image 2025-11-13 à 10.48.04_474070b3.jpg",
  "/WhatsApp Image 2025-11-13 à 10.51.17_27d5612a.jpg",
  "/WhatsApp Image 2025-11-13 à 10.52.46_928ba089.jpg",
  "/WhatsApp Image 2025-11-13 à 10.53.11_e325ecf1.jpg",
  "/WhatsApp Image 2025-11-13 à 10.54.43_f1088728.jpg",
  "/WhatsApp Image 2025-11-13 à 10.55.29_c356bdef.jpg",
  "/artiste en supermarché.jpg",
  "/atteindre-objectif.png",
  "/concert-deux.jpg",
  "/concert-quatre.jpg",
  "/concert-trois.jpg",
  "/concert.jpg",
  "/durabilite.png",
  "/music.avif",
  "/photo accompagnement 1.jpg",
  "/photo accompagnement 2.jpg",
  "/photo accompagnement 3.jpg",
  "/photo formation 1.jpg",
  "/photo formation 2.jpg",
  "/real-atelier.png",
  "/reseau.png",
].map((src, index) => ({
  src,
  alt: `Moment de terrain ${index + 1}`,
}));

function PaintTransition({
  color,
  textured = false,
}: {
  color: string;
  textured?: boolean;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 origin-center translate-y-1/2 scale-x-[1.04]"
        style={{ backgroundColor: color, filter: "url(#paintRip)" }}
      />
      {textured ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[21] h-14 origin-center translate-y-1/2 scale-x-[1.04] opacity-[0.22] mix-blend-screen"
          style={{
            filter: "url(#paintRip)",
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22holesTransition%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%221 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -14%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23holesTransition)%22 fill=%22%23ece9e6%22/%3E%3C/svg%3E")',
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      ) : null}
    </>
  );
}

const serviceTimelineData: TimelineEntry[] = services.map((service) => ({
  id: service.id,
  title: service.shortTitle,
  content: (
    <article
      key={service.id}
      className="timeline-card rounded-[2rem] border border-[var(--color-brand-line)] bg-white p-6 shadow-[0_30px_80px_rgba(25,24,22,0.06)] md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(28,39,51,0.48)]">
            Service {service.id}
          </p>
          <h3 className="font-display mt-3 text-3xl font-semibold leading-tight text-[var(--color-brand-ink)]">
            {service.title}
          </h3>
        </div>
        {service.pricing ? (
          <span className="rounded-full bg-[var(--color-brand-accent)] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-ink)]">
            {service.pricing}
          </span>
        ) : null}
      </div>

      <p className="mt-6 text-base leading-8 text-[rgba(28,39,51,0.76)]">{service.summary}</p>

      <div className="mt-8 grid gap-3 border-t border-[var(--color-brand-line)] pt-6">
        {service.details.map((detail) => (
          <div key={detail} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-accent)]" />
            <p className="text-base leading-7 text-[rgba(28,39,51,0.76)]">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--color-brand-line)] pt-6">
        <ChronicleButton
          href={`/services/${service.slug}`}
          text="Détails"
          customBackground="var(--color-brand-primary-dark)"
          customForeground="#fff"
          hoverColor="var(--color-brand-primary-soft)"
          hoverForeground="#fff"
        />
        <ChronicleButton
          href="/contact"
          text="S’inscrire / échanger"
          customBackground="var(--color-brand-primary)"
          customForeground="var(--color-brand-ink)"
          hoverColor="#2f4a5c"
          hoverForeground="#fff"
        />
      </div>
    </article>
  ),
}));

export function HomePage() {
  return (
    <>
      <Header />

      <main className="relative overflow-x-clip bg-[var(--color-brand-background)] text-[var(--color-brand-ink)]">
        <section id="top" className="relative scroll-mt-24 pt-[4.5rem] md:pt-20">
          <div className="pointer-events-none absolute inset-0 z-0">
            <CloudsHero />
          </div>
          <AnimatedMarqueeHero
            tagline={
              <WordRotate
                words={["Association", "Culture", "Coopération"]}
                className="text-sm font-medium text-[rgba(44,65,96,0.72)]"
              />
            }
            title={
              <span className="inline-block text-[var(--color-brand-primary-dark)]">
                <span className="mx-auto block w-fit">Faisons vivre</span>
                <span className="mx-auto block w-fit">les initiatives</span>
                <span className="mx-auto block w-fit">qui nous réunissent</span>
              </span>
            }
            description="Une approche coopérative au service des initiatives collectives, culturelles et territoriales. Nous aidons les structures à clarifier leur vision, consolider leur organisation et faire durer leur impact."
            ctaText="Discutons de votre projet"
            ctaHref="/contact"
            images={heroImages}
          />
          <PaintTransition color="var(--color-brand-background)" textured />
        </section>

        <section
          id="vision"
          className="relative bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.98)_58%,rgba(135,157,120,0.08)_100%)] text-[var(--color-brand-ink)]"
        >
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
            <div className="max-w-[68rem]">
              <p className="section-kicker">Page d’accueil</p>
              <h2 className="section-title mt-4 max-w-[14ch]">
                Une organisation claire pour voir d’un coup d’œil l’ensemble des activités.
              </h2>
              <p className="mt-8 max-w-[60rem] text-lg leading-9 text-[rgba(28,39,51,0.76)]">
                Nous gardons la lisibilité de la première maquette, mais avec une écriture plus légère, des couleurs plus chaleureuses et des blocs ouverts qui respirent davantage.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <article className="overflow-hidden rounded-[2rem] border border-[rgba(135,157,120,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(247,205,117,0.12)_100%)] p-8 shadow-[0_24px_60px_rgba(25,24,22,0.06)]">
                <p className="inline-flex rounded-full bg-[var(--color-brand-primary)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-ink)]">
                  Pour atteindre ces objectifs
                </p>
                <p className="mt-5 text-[1.16rem] leading-8 text-[rgba(28,39,51,0.78)]">
                  L’association propose un accompagnement concret, progressif et adapté aux besoins des porteurs d’initiatives, qu’ils soient individuels, collectifs ou ancrés dans des dynamiques de réseau.
                </p>
                <div className="mt-8 overflow-hidden rounded-[1.6rem]">
                  <div className="relative h-[280px]">
                    <Image
                      src="/accompagnement.jpg"
                      alt="Accompagnement"
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-2">
                {services.map((service) => (
                  <article
                    key={service.id}
                    className="rounded-[1.8rem] border border-[var(--color-brand-line)] bg-white p-6 shadow-[0_18px_45px_rgba(25,24,22,0.05)]"
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(28,39,51,0.46)]">
                        {service.shortTitle}
                      </p>
                      <CircleDot size={18} className="text-[var(--color-brand-accent)]" />
                    </div>
                    <div className="relative mb-5 h-28 overflow-hidden rounded-[1.1rem]">
                      <Image src={service.image} alt={service.title} fill sizes="320px" className="object-cover" />
                    </div>
                    <p className="text-base leading-7 text-[rgba(28,39,51,0.78)]">{service.summary}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-primary-dark)]"
                    >
                      En savoir plus
                      <ArrowUpRight size={15} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[var(--color-brand-primary-soft)]">
          <IlSuffitDeFlip />
        </section>

        <section id="services" className="bg-[linear-gradient(180deg,rgba(135,157,120,0.08)_0%,rgba(255,255,255,0.98)_22%,#ffffff_64%,rgba(247,205,117,0.06)_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-16 lg:py-28">
            <div className="mx-auto max-w-[980px] text-center">
              <p className="section-kicker">Les services</p>
              <h2 className="section-title mt-4">Des accompagnements clairs, utiles et engageants.</h2>
              <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[rgba(28,39,51,0.72)]">
                La structure des services reste très visible comme dans la première maquette, avec des pages détaillées inspirées de la seconde pour mieux inviter à passer à l’action.
              </p>
            </div>

            <div className="mt-16">
              <Timeline data={serviceTimelineData} className="bg-transparent" />
            </div>
          </div>
        </section>

        <section className="deferred-section relative bg-[linear-gradient(180deg,rgba(247,205,117,0.06)_0%,#ffffff_30%,#ffffff_70%,rgba(135,157,120,0.07)_100%)] text-[var(--color-brand-ink)]">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:px-16 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)]">
              <div>
                <p className="section-kicker">Notre approche</p>
                <h2 className="font-display mt-4 text-[clamp(2.5rem,4.4vw,4.8rem)] font-semibold leading-[0.98] text-[var(--color-brand-primary-dark)]">
                  Une approche globale, coopérative et ancrée.
                </h2>
                <p className="mt-8 text-lg leading-8 text-[rgba(28,39,51,0.76)]">{ENGAGEMENT_BODY}</p>

                <div className="mt-10 grid gap-4">
                  {principles.map((principle) => (
                    <div
                      key={principle}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-[rgba(135,157,120,0.22)] bg-white/78 px-5 py-5 shadow-[0_14px_34px_rgba(25,24,22,0.035)]"
                    >
                      <Check size={18} className="mt-1 shrink-0 text-[var(--color-brand-primary-soft)]" />
                      <p className="text-base leading-7 text-[rgba(28,39,51,0.82)]">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 self-end">
                <p className="text-2xl leading-9 text-[var(--color-brand-primary-dark)]">
                  Chaque mission est analysée, qualifiée, puis reliée à l’intervenant le plus adapté. L’équipe garde la coordination et reste l’interlocuteur principal.
                </p>

                <article className="relative h-[25rem] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.18)] lg:h-[28rem]">
                  <Image
                    src="/regroupementbeauvais.avif"
                    alt="Réseau local"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,50,79,0.05)_0%,rgba(22,50,79,0.42)_100%)]" />
                  <div className="absolute left-6 top-6 z-10 rounded-full bg-[var(--color-brand-primary)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-ink)]">
                    Un collectif en évolution
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="deferred-section relative overflow-hidden bg-[linear-gradient(180deg,rgba(135,157,120,0.07)_0%,#ffffff_34%,#ffffff_100%)] py-20 md:py-28">
          <div className="relative z-10">
            <div className="mx-auto mb-16 max-w-[1600px] px-6 text-center md:px-10 lg:px-16">
              <p className="section-kicker">Le collectif</p>
              <h2 className="section-title mt-4">Un collectif agile, mobilisable selon les besoins.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(28,39,51,0.72)]">
                Une forme coopérative en développement — les intervenants les plus adaptés, mobilisés selon les besoins de chaque projet, avec un cadre d’accompagnement lisible.
              </p>
            </div>

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
          </div>
        </section>

        <section className="deferred-section bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_50%,rgba(247,205,117,0.06)_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 pt-20 pb-8 md:px-10 lg:px-16 lg:pt-24 lg:pb-8">
            <DicedHeroSection
              topText="Sur le terrain"
              mainText="Des moments qui réunissent"
              subMainText="Concerts, ateliers, rencontres : l’association crée les espaces où les initiatives culturelles et citoyennes prennent vie et où les liens se construisent durablement."
              buttonText="Nos services"
              ctaHref="/services"
              slides={[
                { title: "Moment 1", image: "/472582406_1148610116842351_8098215373238035797_n.jpg" },
                { title: "Moment 2", image: "/474454915_1140663870314474_401543759975472705_n.jpg" },
                { title: "Moment 3", image: "/17498622_1587572007923688_6795949634466666693_n.jpg" },
                { title: "Moment 4", image: "/10443012_861079257239637_5117158582480308045_o.jpg" },
              ]}
              separatorColor="#2f4a5c"
              backgroundColor="transparent"
              topTextStyle={{
                color: "rgba(28,39,51,0.46)",
                fontSize: "0.74rem",
                fontWeight: "700",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
              }}
              mainTextStyle={{
                fontSize: "clamp(2.35rem, 4vw, 4.5rem)",
                fontWeight: "600",
                color: "#2f4a5c",
                lineHeight: "0.98",
                letterSpacing: "-0.045em",
              }}
              subMainTextStyle={{
                color: "rgba(28,39,51,0.72)",
                lineHeight: "1.85",
                fontSize: "1.05rem",
              }}
              buttonStyle={{
                backgroundColor: "#879d78",
                color: "#ffffff",
                borderRadius: "9999px",
                hoverColor: "#2f4a5c",
                hoverForeground: "#ffffff",
              }}
            />
          </div>
        </section>

        <section className="deferred-section bg-[linear-gradient(180deg,rgba(247,205,117,0.06)_0%,#ffffff_45%,rgba(135,157,120,0.06)_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 pt-8 pb-20 md:px-10 lg:px-16 lg:pt-8 lg:pb-24">
            <DicedHeroSection
              reversed
              topText="Notre engagement"
              mainText="Agir, coopérer, durer"
              subMainText="Chaque accompagnement part de votre réalité et de vos envies. L’association mobilise les intervenants les plus adaptés pour que vos projets s’ancrent dans le temps et renforcent le tissu local."
              buttonText="Prendre contact"
              ctaHref="/contact"
              slides={[
                { title: "Action 1", image: "/14471700435_3a350666ac_c.jpg" },
                { title: "Action 2", image: "/17499000_1587572624590293_840996004460716373_n.jpg" },
                { title: "Action 3", image: "/59defba1-00a8-4623-af00-0b8d8b729fea.jpg" },
                { title: "Action 4", image: "/c0fedab3-419e-471d-9949-60d194fa5d82.jpeg" },
              ]}
              separatorColor="#879d78"
              backgroundColor="transparent"
              topTextStyle={{
                color: "rgba(28,39,51,0.46)",
                fontSize: "0.74rem",
                fontWeight: "700",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
              }}
              mainTextStyle={{
                fontSize: "clamp(2.35rem, 4vw, 4.5rem)",
                fontWeight: "600",
                color: "#2f4a5c",
                lineHeight: "0.98",
                letterSpacing: "-0.045em",
              }}
              subMainTextStyle={{
                color: "rgba(28,39,51,0.72)",
                lineHeight: "1.85",
                fontSize: "1.05rem",
              }}
              buttonStyle={{
                backgroundColor: "#879d78",
                color: "#ffffff",
                borderRadius: "9999px",
                hoverColor: "#2f4a5c",
                hoverForeground: "#ffffff",
              }}
            />
          </div>
        </section>

        <section id="faq" className="deferred-section bg-[linear-gradient(180deg,rgba(135,157,120,0.06)_0%,#ffffff_38%,#ffffff_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
            <Reveal variant="up">
              <div className="mx-auto max-w-[62rem]">
                <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgba(23,19,19,0.46)]">
                  FAQ
                </p>
                <h2 className="section-title mx-auto mt-5 max-w-[12ch] text-center">
                  Questions fréquentes
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-[rgba(23,19,19,0.68)] md:text-lg">
                  Quelques repères simples pour comprendre à qui s’adresse l’association,
                  comment nous travaillons et par où commencer.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} variant="up" className="mx-auto mt-14 flex max-w-[62rem] justify-center">
              <UniqueAccordion items={faqItems} initialActiveId="publics" />
            </Reveal>
          </div>
        </section>

        <section className="deferred-section overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,rgba(135,157,120,0.045)_54%,#ffffff_100%)] py-16 md:py-20">
          <ImageAutoSlider images={remainingGalleryImages} />
        </section>

        <section id="contact" className="deferred-section bg-[linear-gradient(180deg,#ffffff_0%,rgba(135,157,120,0.055)_44%,#ffffff_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <Reveal variant="left">
                <article className="relative h-full overflow-hidden rounded-lg border border-[rgba(47,74,92,0.16)] bg-[var(--color-brand-primary-dark)] px-7 py-8 text-white shadow-[0_22px_70px_rgba(17,17,17,0.14)] md:px-8">
                  <StripedPattern className="text-white/8" width={14} height={14} />
                  <div className="relative z-20">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/48">
                      Contact
                    </p>
                    <h2 className="font-display mt-5 max-w-[12ch] text-[clamp(2.2rem,3.8vw,3.7rem)] font-bold leading-[0.94]">
                      Discutons de votre projet, cadrons un besoin, imaginons la suite.
                    </h2>
                    <p className="mt-7 max-w-lg text-lg leading-8 text-white/72">
                      Le projet s’adresse aux acteurs associatifs, culturels et collectifs qui
                      souhaitent structurer, consolider ou développer leur initiative.
                    </p>

                    <div className="mt-10 grid gap-5 border-t border-white/10 pt-6">
                      <a href="mailto:ilsuffitde@gmail.com" className="transition-opacity hover:opacity-75">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/46">
                          Email
                        </p>
                        <p className="mt-2 text-lg text-white/88">ilsuffitde@gmail.com</p>
                      </a>
                      <a href="tel:+33670755999" className="transition-opacity hover:opacity-75">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/46">
                          Sarah Cherfaoui
                        </p>
                        <p className="mt-2 text-lg text-white/88">06 70 75 59 99</p>
                      </a>
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/46">
                          Adresse
                        </p>
                        <p className="mt-2 text-lg leading-7 text-white/88">
                          7 rue Gaston et Marguerite Cahen, 60000 Beauvais
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.08} variant="right">
                <article className="rounded-lg border border-[rgba(135,157,120,0.20)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,205,117,0.10)_100%)] px-7 py-8 shadow-[0_18px_54px_rgba(17,17,17,0.05)] md:px-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgba(23,19,19,0.46)]">
                    Nous écrire
                  </p>
                  <h2 className="section-title mt-5 max-w-none text-[clamp(2rem,3vw,2.9rem)] leading-[1]">
                    Décrivez simplement votre situation ou votre projet.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(23,19,19,0.68)]">
                    Nous revenons vers vous pour identifier la bonne modalité d’accompagnement et
                    préciser la suite.
                  </p>

                  <ContactForm />
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
