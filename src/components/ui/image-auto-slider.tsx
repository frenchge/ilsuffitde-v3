"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SliderImage = {
  src: string;
  alt: string;
};

type ImageAutoSliderProps = {
  images: SliderImage[];
  className?: string;
};

export function ImageAutoSlider({ images, className = "" }: ImageAutoSliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const element = sliderRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sliderRef} className={`image-auto-slider-mask w-full overflow-hidden ${className}`}>
      <div
        className="image-auto-slider-track flex w-max gap-4 md:gap-5"
        style={{ animationPlayState: isVisible ? "running" : "paused" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="image-auto-slider-item relative h-44 w-64 shrink-0 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white shadow-[0_22px_54px_rgba(25,24,22,0.10)] md:h-56 md:w-80 lg:h-64 lg:w-96"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
              quality={58}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const Component = ImageAutoSlider;
