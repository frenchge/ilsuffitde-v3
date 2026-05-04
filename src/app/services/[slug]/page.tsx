import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { ContactForm } from "@/components/site/contact-form"
import { ServiceVelocityGallery } from "@/components/site/service-velocity-gallery"
import { SiteShell } from "@/components/site/site-shell"
import { HeroSection } from "@/components/ui/hero-section-2"
import { TextAnimate } from "@/components/ui/text-animate"
import { getServiceBySlug, services } from "@/lib/services"
import { siteName } from "@/lib/site"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: `Service introuvable | ${siteName}`,
    }
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteName}`,
      description: service.summary,
      type: "article",
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const contactInfo = {
    website: "ilsuffitde.fr",
    phone: "06 70 75 59 99",
    address: "7 rue Gaston et Marguerite Cahen, 60000 Beauvais",
  }

  return (
    <SiteShell>
      <Header />

      <main className="pt-24 text-[var(--color-brand-ink)] md:pt-28">
        <section>
          <div className="mx-auto max-w-[1600px] px-6 pb-10 md:px-10 md:pb-12 lg:px-16 lg:pb-14">
            <HeroSection
              title={
                <>
                  <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(23,19,19,0.44)]">
                    Service {service.id}
                  </span>
                  <span className="mt-5 block">{service.title}</span>
                </>
              }
              subtitle={service.summary}
              backgroundImage={service.image}
              contactInfo={contactInfo}
            />
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
            <div className="max-w-5xl">
              <p className="text-lg leading-8 text-[var(--color-brand-ink)] md:text-xl">
                {service.summary}
              </p>

              {service.forWho ? (
                <div className="mt-10">
                  <TextAnimate
                    as="h2"
                    animation="blurInUp"
                    by="word"
                    once
                    className="font-display text-2xl font-semibold leading-tight text-[var(--color-brand-primary-dark)] md:text-3xl"
                  >
                    {service.audienceTitle ?? "Vous êtes au bon endroit si…"}
                  </TextAnimate>
                  <p className="mt-4 text-base leading-7 text-[rgba(23,19,19,0.72)] md:text-[1.0625rem]">
                    {service.forWho}
                  </p>
                </div>
              ) : null}

              <div className="mt-10">
                <TextAnimate
                  as="h2"
                  animation="blurInUp"
                  by="word"
                  once
                  className="font-display text-2xl font-semibold leading-tight text-[var(--color-brand-primary-dark)] md:text-3xl"
                >
                  {service.detailsTitle ?? "Ce que nous travaillons"}
                </TextAnimate>
                <ol className="mt-6 grid gap-4">
                  {service.details.map((detail, index) => (
                    <li key={detail} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-sm font-semibold text-[var(--color-brand-ink)] shadow-[0_8px_18px_rgba(247,205,117,0.18)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1.5 text-base leading-7 text-[rgba(23,19,19,0.72)] md:text-[1.0625rem]">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {service.detailsIntro || service.detailCardsHeadline ? (
                <div className="mt-10">
                  {service.detailCardsHeadline ? (
                    <TextAnimate
                      as="h2"
                      animation="blurInUp"
                      by="word"
                      once
                      className="font-display text-2xl font-semibold leading-tight text-[var(--color-brand-primary-dark)] md:text-3xl"
                    >
                      {service.detailCardsHeadline}
                    </TextAnimate>
                  ) : null}
                  {service.detailsIntro ? (
                    <p className="mt-4 text-base leading-7 text-[rgba(23,19,19,0.72)] md:text-[1.0625rem]">
                      {service.detailsIntro}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {service.detailCards && service.detailCards.length > 0 ? (
          <section className="relative overflow-hidden">
            <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-12 md:px-10 lg:px-16 lg:pb-16">
              <div className="grid gap-5 md:grid-cols-2">
                {service.detailCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[1.75rem] border border-[var(--color-brand-line)] bg-white p-6 shadow-[0_18px_40px_rgba(25,24,22,0.045)] md:p-7"
                  >
                    <h3 className="text-2xl font-semibold leading-tight text-[var(--color-brand-primary-dark)]">
                      {card.title}
                    </h3>
                    {card.description ? (
                      <p className="mt-4 text-base leading-8 text-[rgba(23,19,19,0.72)]">
                        {card.description}
                      </p>
                    ) : null}
                    <div className="mt-5 grid gap-3">
                      {card.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-accent)]" />
                          <p className="text-base leading-7 text-[rgba(23,19,19,0.72)]">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.focus ? (
          <section className="relative overflow-hidden">
            <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
              <div className="max-w-3xl">
                {service.focusTitle ? (
                  <h3 className="font-display text-2xl font-semibold leading-tight text-[var(--color-brand-primary-dark)] md:text-3xl">
                    {service.focusTitle}
                  </h3>
                ) : null}
                <p className={`${service.focusTitle ? "mt-4" : ""} text-base leading-8 text-[rgba(23,19,19,0.72)] md:text-[1.0625rem]`}>
                  {service.focus}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {service.gallery && service.gallery.length > 0 ? (
          <section className="relative overflow-hidden">
            <div className="relative z-10 py-12 lg:py-16">
              <ServiceVelocityGallery images={service.gallery} />
            </div>
          </section>
        ) : null}

        <section id="contact">
          <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
            <div className="grid gap-8 rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:p-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:p-10">
              <div className="rounded-[1.5rem] bg-white p-6 md:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgba(23,19,19,0.46)]">
                  Contact
                </p>
                <TextAnimate
                  as="h2"
                  animation="blurInUp"
                  by="word"
                  once
                  className="section-title mt-5 max-w-[10ch]"
                >
                  Parlons de votre projet
                </TextAnimate>
                <p className="mt-5 text-base leading-8 text-[rgba(23,19,19,0.68)] md:text-lg">
                  Décrivez votre besoin, votre contexte ou votre initiative. Nous préparons le message avec l’intitulé du service pour faciliter le premier échange.
                </p>
                <div className="mt-8 rounded-[1.25rem] border border-[rgba(135,157,120,0.22)] bg-white/85 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgba(23,19,19,0.44)]">
                    Service concerné
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[var(--color-brand-ink)]">
                    {service.title}
                  </p>
                </div>
              </div>

              <div>
                <ContactForm
                  initialSubject={service.title}
                  initialMessage={`Bonjour,\n\nJe souhaite échanger à propos du service « ${service.title} ».\n\nContexte / besoin :\n`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </SiteShell>
  )
}
