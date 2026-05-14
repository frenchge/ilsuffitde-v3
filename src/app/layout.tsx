import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@/components/site/analytics";
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
    icon: "/logos/ilsuffitde-deuxiemelogo.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteUrl}#organization`,
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/logos/ilsuffitde-deuxiemelogo.png"),
  image: absoluteUrl(defaultOgImage),
  description: siteDescription,
  email: "ilsuffitde@gmail.com",
  telephone: "+33670755999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Gaston et Marguerite Cahen",
    postalCode: "60000",
    addressLocality: "Beauvais",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4331,
    longitude: 2.0829,
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  name: siteName,
  alternateName: "Il suffit de…",
  url: siteUrl,
  inLanguage: "fr-FR",
  publisher: { "@id": `${siteUrl}#organization` },
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
            __html:
              "(function(){var h=document.documentElement;if(!window.matchMedia||!window.matchMedia('(min-width: 768px)').matches||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;h.classList.add('reveals-on');if(!('IntersectionObserver' in window)){function s(){var a=document.querySelectorAll('[data-reveal],[data-reveal-text]');for(var i=0;i<a.length;i++)a[i].setAttribute('data-revealed','');}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',s);}else{s();}return;}var io=new IntersectionObserver(function(en){for(var i=0;i<en.length;i++){if(en[i].isIntersecting){en[i].target.setAttribute('data-revealed','');io.unobserve(en[i].target);}}},{rootMargin:'0px 0px -8% 0px',threshold:0});function obs(r){if(!r||r.nodeType!==1)return;if(r.matches&&r.matches('[data-reveal],[data-reveal-text]')&&!r.hasAttribute('data-revealed'))io.observe(r);if(r.querySelectorAll){var els=r.querySelectorAll('[data-reveal]:not([data-revealed]),[data-reveal-text]:not([data-revealed])');for(var i=0;i<els.length;i++)io.observe(els[i]);}}function init(){obs(document.body);if('MutationObserver' in window){new MutationObserver(function(muts){for(var i=0;i<muts.length;i++){var ad=muts[i].addedNodes;for(var j=0;j<ad.length;j++)obs(ad[j]);}}).observe(document.body,{childList:true,subtree:true});}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
