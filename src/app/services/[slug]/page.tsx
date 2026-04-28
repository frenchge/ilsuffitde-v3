import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { ContactForm } from "@/components/site/contact-form"
import { ServiceVelocityGallery } from "@/components/site/service-velocity-gallery"
import { SiteShell } from "@/components/site/site-shell"
import { HeroSection } from "@/components/ui/hero-section-2"
import { ChronicleButton } from "@/components/ui/chronicle-button"
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
          <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 md:py-12 lg:px-8 lg:py-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-ink)] transition-opacity hover:opacity-70"
            >
              <ArrowLeft size={16} />
              Retour aux services
            </Link>

            <HeroSection
              className="mt-6"
              title={
                <>
                  <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(23,19,19,0.44)]">
                    Service {service.id}
                  </span>
                  <span className="mt-5 block">{service.title}</span>
                </>
              }
              subtitle={service.summary}
              callToAction={{
                text: "Contactez-nous",
                href: "/contact",
              }}
              backgroundImage={service.image}
              contactInfo={contactInfo}
            />
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.72fr)]">
              <div>
                <div className="max-w-3xl">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[rgba(23,19,19,0.46)]">
                    Ce que nous travaillons
                  </p>
                  <TextAnimate
                    as="h2"
                    animation="blurInUp"
                    by="word"
                    once
                    className="section-title mt-5 max-w-[13ch]"
                  >
                    Une feuille de route claire, activable et ancrée dans le réel
                  </TextAnimate>
                  <p className="mt-6 text-lg leading-8 text-[rgba(23,19,19,0.68)]">
                    Chaque accompagnement part de votre contexte, de vos ressources et de votre
                    rythme. L’objectif est de rendre les prochaines étapes plus lisibles, plus
                    concrètes et plus soutenables.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {service.details.map((detail, index) => (
                    <div
                      key={detail}
                      className="rounded-[1.5rem] border border-[var(--color-brand-line)] bg-white p-6 shadow-[0_18px_40px_rgba(25,24,22,0.045)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(28,39,51,0.10)] bg-[var(--color-brand-primary)] text-sm font-semibold text-[var(--color-brand-ink)] shadow-[0_8px_18px_rgba(247,205,117,0.18)]">
                          0{index + 1}
                        </div>
                        <div>
                          <p className="text-base leading-8 text-[var(--color-brand-ink)]">{detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-[1.75rem] border border-[rgba(135,157,120,0.22)] bg-[linear-gradient(180deg,rgba(135,157,120,0.14)_0%,rgba(255,255,255,0.94)_100%)] p-6 shadow-[0_20px_48px_rgba(25,24,22,0.05)] md:p-8">
                  <div className="space-y-6">
                    {service.forWho ? (
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--color-brand-ink)]">
                          Pour qui
                        </h3>
                        <p className="mt-3 text-base leading-8 text-[rgba(23,19,19,0.72)]">
                          {service.forWho}
                        </p>
                      </div>
                    ) : null}
                    {service.pricing ? (
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--color-brand-ink)]">
                          Tarif
                        </h3>
                        <p className="mt-3 text-base leading-8 text-[rgba(23,19,19,0.72)]">
                          {service.pricing}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ChronicleButton
                      href="/contact"
                      text="Contactez-nous"
                      customBackground="var(--color-brand-primary-dark)"
                      customForeground="#fff"
                      hoverColor="var(--color-brand-primary-soft)"
                      hoverForeground="#fff"
                    />
                    <ChronicleButton
                      href="/services"
                      text="Voir les autres services"
                      customBackground="var(--color-brand-primary)"
                      customForeground="var(--color-brand-ink)"
                      hoverColor="#2f4a5c"
                      hoverForeground="#fff"
                    />
                  </div>
                </div>

                {service.focus ? (
                  <div className="rounded-[1.75rem] border border-[rgba(247,205,117,0.32)] bg-[rgba(247,205,117,0.10)] p-6 shadow-[0_20px_48px_rgba(25,24,22,0.05)] md:p-8">
                    <p className="text-base leading-8 text-[rgba(23,19,19,0.72)]">
                      {service.focus}
                    </p>
                  </div>
                ) : null}

                <div className="rounded-[1.75rem] border border-[rgba(47,74,92,0.16)] bg-[var(--color-brand-primary-dark)] p-6 text-white shadow-[0_20px_48px_rgba(25,24,22,0.10)] md:p-8">
                  <h3 className="text-2xl font-semibold leading-tight">
                    On peut partir de votre réalité actuelle.
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/82">
                    Que votre projet soit en démarrage, en transition ou déjà lancé, le premier
                    échange sert à clarifier le besoin et à identifier la forme
                    d’accompagnement la plus utile.
                  </p>
                  <div className="mt-6">
                    <ChronicleButton
                      href="/contact"
                      text="Discutons de votre projet"
                      customBackground="var(--color-brand-primary)"
                      customForeground="var(--color-brand-ink)"
                      hoverColor="var(--color-brand-primary-soft)"
                      hoverForeground="#fff"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {service.gallery && service.gallery.length > 0 ? (
          <section className="relative overflow-hidden">
            <div className="relative z-10 py-12 lg:py-16">
              <ServiceVelocityGallery images={service.gallery} />
            </div>
          </section>
        ) : null}

        <section id="contact">
          <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.06)] md:p-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:p-10">
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(247,205,117,0.16)_0%,rgba(255,255,255,0.94)_100%)] p-6 md:p-8">
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
