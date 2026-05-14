import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { SiteShell } from "@/components/site/site-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accompagnement associatif, culturel et territorial à Beauvais",
  description:
    "Donnez de la force à vos projets associatifs et culturels. Accompagnement individuel, ateliers collectifs et coordination de réseaux à Beauvais, dans l’Oise.",
  path: "/",
});

export default function Page() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
