import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { SiteShell } from "@/components/site/site-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accompagnement associatif, culturel et territorial à Beauvais",
  description:
    "Il suffit de... accompagne associations, acteurs culturels et collectivités pour clarifier, structurer et faire coopérer leurs projets dans l’Oise.",
  path: "/",
});

export default function Page() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
