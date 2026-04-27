"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-[var(--color-brand-primary-dark)]"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-[var(--color-brand-primary-dark)]"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-[var(--color-brand-primary-dark)]"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };

  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

interface HeroSectionProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      contactInfo,
    },
    ref,
  ) => {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden rounded-[2rem] border border-[rgba(20,18,18,0.08)] bg-background text-foreground shadow-[0_28px_80px_rgba(17,17,17,0.06)] md:flex-row",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>
            {logo || slogan ? (
              <motion.header className="mb-12" variants={itemVariants}>
                <div className="flex items-center">
                  {logo ? (
                    <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                  ) : null}
                  <div>
                    {logo?.text ? (
                      <p className="text-lg font-bold text-foreground">{logo.text}</p>
                    ) : null}
                    {slogan ? (
                      <p className="text-xs tracking-wider text-muted-foreground">{slogan}</p>
                    ) : null}
                  </div>
                </div>
              </motion.header>
            ) : null}

            <motion.div variants={containerVariants}>
              <motion.h1
                className="font-display max-w-[11ch] text-[clamp(3rem,5.4vw,5.6rem)] leading-[0.92] font-bold text-[var(--color-brand-primary-dark)]"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-1 w-20 rounded-full bg-[var(--color-brand-primary)]"
                variants={itemVariants}
              />
              <motion.p
                className="mb-8 max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="inline-flex items-center rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-ink)] transition-colors hover:bg-[var(--color-brand-primary-surface)]"
                variants={itemVariants}
              >
                {callToAction.text}
              </motion.a>
            </motion.div>
          </div>

          <motion.footer className="mt-12 w-full" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-5 text-xs text-muted-foreground sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        <motion.div
          className="relative w-full min-h-[340px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(17,17,17,0.16)), url(${backgroundImage})`,
          }}
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut" }}
        />
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
