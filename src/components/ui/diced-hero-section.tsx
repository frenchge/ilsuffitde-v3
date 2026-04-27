"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChronicleButton } from "./chronicle-button";

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

const getGradientStyle = (gradient?: string): React.CSSProperties => {
  if (gradient) {
    return {
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    };
  }
  return {};
};

export const DicedHeroSection: React.FC<DicedHeroSectionProps> = ({
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
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < mobileBreakpoint);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

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
      ref={containerRef}
      style={{
        borderRadius: componentBorderRadius,
        backgroundColor,
        padding: isMobile ? "2rem 1.5rem" : "2rem",
        display: "flex",
        flexDirection: isMobile ? "column" : reversed ? "row-reverse" : "row",
        justifyContent: "center",
        alignItems: "stretch",
        width: "100%",
        maxWidth: maxContentWidth,
        margin: "0 auto",
        fontFamily: "inherit",
      }}
    >
      {/* Text column */}
      <div
        style={{
          flex: 1,
          marginRight: isMobile ? 0 : reversed ? 0 : "2rem",
          marginLeft: isMobile ? 0 : reversed ? "2rem" : 0,
          textAlign: isMobile ? "center" : "left",
          alignItems: isMobile ? "center" : "flex-start",
          maxWidth: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: isMobile ? "2rem" : 0,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ ...(topTextStyle as React.CSSProperties) }}
        >
          {topText}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            ...(mainTextStyle as React.CSSProperties),
            ...getGradientStyle(mainTextStyle?.gradient),
            margin: "0.5rem 0 0",
          }}
        >
          {mainText}
        </motion.h2>

        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            height: "3px",
            background: separatorColor,
            border: "none",
            margin: isMobile ? "1.25rem auto 1.75rem" : "1.25rem 0 1.75rem",
            alignSelf: isMobile ? "center" : "flex-start",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ ...(subMainTextStyle as React.CSSProperties) }}
        >
          {subMainText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          {cta}
        </motion.div>
      </div>

      {/* Image grid column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          width: isMobile ? "100%" : "50%",
          paddingLeft: isMobile ? 0 : reversed ? 0 : "2rem",
          paddingRight: isMobile ? 0 : reversed ? "2rem" : 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            width: "100%",
            aspectRatio: "1 / 1",
          }}
        >
          {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`warped-image ${["bottom-right", "bottom-left", "top-right", "top-left"][index]}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 20px;
          --y: 5px;
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
      `}</style>
    </div>
  );
};
