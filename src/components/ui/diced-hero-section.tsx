import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChronicleButton } from "./chronicle-button";
import { TextAnimate } from "@/components/ui/text-animate";

interface TextStyle {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  gradient?: string;
}

interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverForeground?: string;
}

interface SlideContent {
  title: string;
  image: string;
}

interface DicedHeroSectionProps {
  topText: string;
  mainText: string;
  subMainText: string;
  buttonText: string;
  ctaHref?: string;
  slides: SlideContent[];
  onMainButtonClick?: () => void;
  topTextStyle?: TextStyle;
  mainTextStyle?: TextStyle;
  subMainTextStyle?: TextStyle;
  buttonStyle?: ButtonStyle;
  componentBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  maxContentWidth?: string;
  mobileBreakpoint?: number;
  reversed?: boolean;
}

const getGradientStyle = (gradient?: string): CSSProperties => {
  if (gradient) {
    return {
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    };
  }
  return {};
};

export function DicedHeroSection({
  topText,
  mainText,
  subMainText,
  buttonText,
  ctaHref,
  slides,
  onMainButtonClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle = {},
  componentBorderRadius = "0px",
  backgroundColor,
  separatorColor = "#2f4a5c",
  maxContentWidth = "1536px",
  mobileBreakpoint = 1000,
  reversed = false,
}: DicedHeroSectionProps) {
  const cta = ctaHref ? (
    <Link href={ctaHref}>
      <ChronicleButton
        text={buttonText}
        hoverColor={buttonStyle?.hoverColor}
        hoverForeground={buttonStyle?.hoverForeground ?? "#fff"}
        borderRadius={buttonStyle?.borderRadius ?? "9999px"}
        customBackground={buttonStyle?.backgroundColor}
        customForeground={buttonStyle?.color}
      />
    </Link>
  ) : (
    <ChronicleButton
      text={buttonText}
      onClick={onMainButtonClick}
      hoverColor={buttonStyle?.hoverColor}
      hoverForeground={buttonStyle?.hoverForeground ?? "#fff"}
      borderRadius={buttonStyle?.borderRadius ?? "9999px"}
      customBackground={buttonStyle?.backgroundColor}
      customForeground={buttonStyle?.color}
    />
  );

  return (
    <div
      className={`diced-section${reversed ? " diced-section-reversed" : ""}`}
      style={{
        borderRadius: componentBorderRadius,
        backgroundColor,
        maxWidth: maxContentWidth,
        }}
      >
      <div className="diced-copy">
        <span style={{ ...(topTextStyle as CSSProperties) }}>
          {topText}
        </span>

        <TextAnimate
          as="h2"
          animation="blurInUp"
          by="word"
          once
          delay={0.08}
          duration={0.42}
          style={{
            ...(mainTextStyle as CSSProperties),
            ...getGradientStyle(mainTextStyle?.gradient),
            margin: "0.5rem 0 0",
          }}
        >
          {mainText}
        </TextAnimate>

        <hr
          className="diced-separator"
          style={{
            background: separatorColor,
          }}
        />

        <p
          style={{ ...(subMainTextStyle as CSSProperties) }}
        >
          {subMainText}
        </p>

        <div className="diced-cta">
          {cta}
        </div>
      </div>

      <div className="diced-image-column">
        <div className="diced-grid">
          {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
            <div
              key={index}
              className="diced-tile"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(min-width: 1000px) 25vw, 50vw"
                quality={62}
                loading="lazy"
                className={`warped-image ${["bottom-right", "bottom-left", "top-right", "top-left"][index]}`}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .diced-section {
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          margin: 0 auto;
          padding: 2rem;
          font-family: inherit;
        }
        .diced-section-reversed {
          flex-direction: row-reverse;
        }
        .diced-copy {
          display: flex;
          flex: 1;
          max-width: 50%;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-right: 2rem;
          text-align: left;
        }
        .diced-section-reversed .diced-copy {
          margin-right: 0;
          margin-left: 2rem;
        }
        .diced-separator {
          width: 6rem;
          height: 3px;
          border: 0;
          margin: 1.25rem 0 1.75rem;
          align-self: flex-start;
        }
        .diced-cta {
          display: flex;
          justify-content: flex-start;
          margin-top: 1.5rem;
        }
        .diced-image-column {
          display: flex;
          flex: 1;
          width: 50%;
          align-items: flex-end;
          padding-left: 2rem;
        }
        .diced-section-reversed .diced-image-column {
          padding-right: 2rem;
          padding-left: 0;
        }
        .diced-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          aspect-ratio: 1 / 1;
        }
        .diced-tile {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 20px;
          aspect-ratio: 1 / 1;
        }
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 20px;
          --y: 5px;
          object-fit: cover;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m), 100% calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m), 0 calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m), 0 calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m), 100% calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        @media (max-width: ${mobileBreakpoint - 1}px) {
          .diced-section,
          .diced-section-reversed {
            flex-direction: column;
            padding: 2rem 1.5rem;
          }
          .diced-copy,
          .diced-section-reversed .diced-copy {
            max-width: 100%;
            align-items: center;
            margin-right: 0;
            margin-left: 0;
            padding-bottom: 2rem;
            text-align: center;
          }
          .diced-separator {
            margin: 1.25rem auto 1.75rem;
            align-self: center;
          }
          .diced-cta {
            justify-content: center;
          }
          .diced-image-column,
          .diced-section-reversed .diced-image-column {
            width: 100%;
            padding-right: 0;
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
