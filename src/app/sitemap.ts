import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

const PAGE_DATES = {
  home: new Date("2026-05-14"),
  services: new Date("2026-05-10"),
  collectif: new Date("2026-05-13"),
  contact: new Date("2026-04-22"),
} as const;

const SERVICE_DATES: Record<string, Date> = {
  "accompagnement-individuel": new Date("2026-05-07"),
  "ateliers-collectifs": new Date("2026-05-08"),
  "coordination-de-reseaux": new Date("2026-05-09"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: PAGE_DATES.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified: PAGE_DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/collectif"),
      lastModified: PAGE_DATES.collectif,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: PAGE_DATES.contact,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: SERVICE_DATES[service.slug] ?? PAGE_DATES.services,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
