"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChronicleButton } from "@/components/ui/chronicle-button";

interface AnimatedMarqueeHeroProps {
  tagline: React.ReactNode;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}


export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  images,
  className,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "180px 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative flex min-h-[78svh] w-full flex-col items-center overflow-hidden bg-transparent px-4 pt-16 text-center md:min-h-[84svh] md:pt-20",
        className
      )}
    >
      {/* Radial glow so text stays readable over any background */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_70%_55%_at_50%_38%,rgba(255,255,255,0.52),transparent)]" />

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex w-full max-w-[72rem] flex-col items-center pb-[11.25rem] md:pb-[15rem]">
          <div className="hero-load-in hero-load-in-delay-1 mb-4 inline-block rounded-full border border-[rgba(30,69,120,0.12)] bg-white/70 px-4 py-1.5 text-sm font-medium text-[rgba(44,65,96,0.72)] backdrop-blur-sm">
            {tagline}
          </div>

          <h1 className="hero-load-in hero-load-in-delay-2 font-display max-w-[22ch] text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] font-bold tracking-tighter md:max-w-[34ch]">
            {typeof title === "string"
              ? title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block">
                    {word}&nbsp;
                  </span>
                ))
              : title}
          </h1>

          <p className="hero-load-in hero-load-in-delay-3 mt-6 max-w-3xl text-[1.05rem] leading-8 text-[rgba(23,19,19,0.7)] md:text-[1.12rem]">
            {description}
          </p>

          <div
            className="hero-load-in hero-load-in-delay-4 relative z-20 mt-3 md:mt-4"
            style={{ transform: "translateY(0.9rem)" }}
          >
            <ChronicleButton
                href={ctaHref ?? "/contact"}
                text={ctaText}
                customBackground="var(--color-brand-primary)"
                customForeground="var(--color-brand-ink)"
                hoverColor="#2f4a5c"
                hoverForeground="#fff"
              />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 h-[13.5rem] w-full [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_86%,transparent)] md:h-[17rem]">
          <div
            className="hero-marquee flex gap-4 will-change-transform"
            style={{ animationPlayState: isVisible ? "running" : "paused" }}
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-[3/4] h-44 shrink-0 md:h-60"
                style={{
                  rotate: `${index % 2 === 0 ? -3 : 5}deg`,
                }}
              >
                <Image
                  src={src}
                  alt={`Showcase image ${index + 1}`}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 768px) 240px, 176px"
                  quality={56}
                  className="rounded-2xl object-cover shadow-[0_22px_70px_rgba(17,17,17,0.14)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
