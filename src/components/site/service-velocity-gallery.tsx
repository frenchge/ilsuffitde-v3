"use client";

import Image from "next/image";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

type GalleryImage = {
  src: string;
  alt: string;
};

type ServiceVelocityGalleryProps = {
  images: GalleryImage[];
};

export function ServiceVelocityGallery({ images }: ServiceVelocityGalleryProps) {
  const uniqueImages = images.filter(
    (image, index, allImages) =>
      allImages.findIndex((candidate) => candidate.src === image.src) === index,
  );
  const splitAt = Math.ceil(uniqueImages.length / 2);
  const firstRow = uniqueImages.slice(0, splitAt);
  const secondRow = uniqueImages.slice(splitAt);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)] md:py-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-3 md:py-4">
          {firstRow.map((image) => (
            <div
              key={`forward-${image.src}`}
              className="relative mx-3 inline-block h-44 w-64 overflow-hidden rounded-lg md:mx-4 md:h-52 md:w-80 lg:h-60 lg:w-96"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
                quality={68}
                className="object-cover"
              />
            </div>
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-3 md:py-4">
          {secondRow.map((image) => (
            <div
              key={`reverse-${image.src}`}
              className="relative mx-3 inline-block h-44 w-64 overflow-hidden rounded-lg md:mx-4 md:h-52 md:w-80 lg:h-60 lg:w-96"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
                quality={68}
                className="object-cover"
              />
            </div>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
