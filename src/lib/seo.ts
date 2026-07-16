import type { Metadata } from "next";
import { siteDescription, siteName } from "@/lib/site";

const PRODUCTION_HOST = "https://www.ilsuffitde.fr";

// Canonicals, og:url and the sitemap must name the host Vercel actually serves.
// The apex 307-redirects to www, so emitting apex URLs makes Google see every
// canonical and sitemap entry as a redirect and drop the page from the index.
// The apex is normalised away here so a stale NEXT_PUBLIC_SITE_URL can't
// reintroduce that; other values (previews, localhost) pass through untouched.
function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configured) {
    return PRODUCTION_HOST;
  }

  return new URL(configured).host === "ilsuffitde.fr" ? PRODUCTION_HOST : configured;
}

export const siteUrl = resolveSiteUrl();

export const defaultOgImage = "/accompagnement-photos/accompagnement.jpg";

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
  // Pages inherit "%s | siteName" from the root layout's title template, but og/twitter
  // titles don't, so the brand is appended here — unless the title already carries it.
  const socialTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
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
      title: socialTitle,
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
