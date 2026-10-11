import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "dog weight bmi calculator",
    "dog weight calculator",
    "dog body condition score",
    "canine body condition assessment",
    "healthy dog weight",
    "ideal dog weight",
    "dog weight chart",
    "dog obesity assessment",
    "underweight dog signs",
    "overweight dog signs",
    "dog breed weight ranges",
    "how to assess a dog's body condition",
    "veterinary weight assessment",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.slug,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.slug,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CALTER Dog Weight BMI Calculator & Canine Body Condition Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@calterhealth",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "i6oExYNGpPx36OArHHHFAzhI5kwdylrP07E06XkZsvM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#application`,
        name: "CALTER Dog Weight BMI Calculator",
        url: `${siteConfig.url}${siteConfig.slug}`,
        applicationCategory: "HealthApplication",
        operatingSystem: "All",
        softwareVersion: "1.0.0",
        description:
          "Evidence-based canine body condition evaluation and ideal weight estimation tool utilizing WSAVA 9-point criteria and kennel club breed benchmarks.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
