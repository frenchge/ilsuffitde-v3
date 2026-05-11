import type { Metadata } from "next";
import { siteDescription, siteName } from "@/lib/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilsuffitde.fr";

export const defaultOgImage = "/accompagnement.jpg";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description = siteDescription,
  path = "/",
  image = defaultOgImage,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      locale: "fr_FR",
      type,
      images: [
        {
          url: image,
          width: 1800,
          height: 900,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}
