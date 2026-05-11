import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mission",
  description: "Page mission en cours de préparation.",
  path: "/mission",
  noIndex: true,
});

export default function MissionPage() {
  return <PlaceholderPage title="Mission" />;
}
