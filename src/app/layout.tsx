import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { siteDescription, siteName } from "@/lib/site";
import { absoluteUrl, defaultOgImage, siteUrl } from "@/lib/seo";
import "../styles/globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Accompagnement, ateliers et réseaux`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Accompagnement, ateliers et réseaux`,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: defaultOgImage,
        width: 1800,
        height: 900,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Accompagnement, ateliers et réseaux`,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/ilsuffitdev3logo.png"),
  image: absoluteUrl(defaultOgImage),
  description: siteDescription,
  email: "ilsuffitde@gmail.com",
  telephone: "+33670755999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Gaston et Marguerite Cahen",
    postalCode: "60000",
    addressLocality: "Beauvais",
    addressCountry: "FR",
  },
  areaServed: ["Beauvais", "Oise", "Hauts-de-France"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "ilsuffitde@gmail.com",
    telephone: "+33670755999",
    availableLanguage: "fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <GoogleTagManager gtmId="GTM-M76STBMH" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
