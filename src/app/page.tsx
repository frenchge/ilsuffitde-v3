import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";
import { SiteShell } from "@/components/site/site-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  // The root layout's title template only applies to child segments, so the brand
  // name has to be spelled out here or the home page ships with no brand in its title.
  title: "Il suffit de... | Association d’accompagnement culturel à Beauvais",
  description:
    "Donnez de la force à vos projets associatifs et culturels. Accompagnement individuel, ateliers collectifs et coordination de réseaux à Beauvais, dans l’Oise.",
  path: "/",
  image: "/accompagnement-photos/photo%20accompagnement%201.jpg",
});

export default function Page() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
