import type { Metadata } from "next";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M76STBMH');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M76STBMH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
