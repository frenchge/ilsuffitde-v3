"use client";

import { Reveal } from "@/components/ui/reveal";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { Typewriter } from "@/components/ui/typewriter";

const TYPEWRITER_ENDINGS = [
  "d'imaginer.",
  "de se rencontrer.",
  "d'oser.",
  "de partager.",
  "de croire que chacun peut agir...",
] as const;

export const ENGAGEMENT_BODY =
  "Nous accompagnons les associations, acteurs culturels et collectivités dans le développement, la structuration et la coopération autour de leurs projets. L’objectif est d’aider chacun à avancer plus simplement, avec des outils concrets, des choix plus clairs et une attention constante portée à l’autonomie des structures.";

export function IlSuffitDeFlip() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-brand-primary-soft)] px-4 md:px-6 lg:px-8">
      <StripedPattern className="text-white/10" width={14} height={14} />
      <Reveal variant="up">
        <div className="mx-auto flex min-h-[220px] max-w-[1600px] items-center md:min-h-[260px]">
          <div className="flex w-full items-center px-5 sm:px-8 md:px-10">
            <h2 className="font-display flex w-full max-w-[18ch] flex-col items-start justify-center gap-2 text-left text-[clamp(1.9rem,3.6vw,4.25rem)] font-bold leading-[0.98] text-white md:max-w-none md:flex-row md:items-center md:gap-[0.25em]">
              <span className="shrink-0 tracking-[0.035em] text-white">
                Il suffit
              </span>
              <span className="inline-flex min-w-0 flex-1 items-center justify-start px-0 py-0 text-left text-white md:px-1">
                <Typewriter
                  text={[...TYPEWRITER_ENDINGS]}
                  speed={58}
                  waitTime={1650}
                  deleteSpeed={28}
                  initialDelay={350}
                  className="whitespace-normal text-white md:whitespace-nowrap"
                  cursorChar="_"
                  cursorClassName="ml-1 text-white"
                />
              </span>
            </h2>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
