import { ScrollProgress } from "@/components/ui/scroll-progress";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative overflow-x-clip bg-[var(--color-brand-background)]">
      <ScrollProgress />
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="paintRip">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03 0.2"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      {children}
    </div>
  );
}
