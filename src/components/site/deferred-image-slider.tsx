"use client";

import dynamic from "next/dynamic";

type SliderImage = {
  src: string;
  alt: string;
};

const ImageAutoSlider = dynamic(() =>
  import("@/components/ui/image-auto-slider").then((mod) => mod.ImageAutoSlider),
  {
    ssr: false,
    loading: () => <div className="h-44 w-full md:h-56 lg:h-64" aria-hidden="true" />,
  },
);

export function DeferredImageSlider({ images }: { images: SliderImage[] }) {
  return <ImageAutoSlider images={images} />;
}
