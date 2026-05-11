import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Approche",
  description: "Page approche en cours de préparation.",
  path: "/approche",
  noIndex: true,
});

export default function ApprochePage() {
  return <PlaceholderPage title="Approche" />;
}
