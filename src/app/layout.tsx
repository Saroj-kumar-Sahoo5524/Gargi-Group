import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HomeJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gargi Group | Diversified Development Group in Bhubaneswar, Odisha",
    template: "%s | Gargi Group",
  },
  description:
    "Gargi Group is a diversified organization based in Bhubaneswar, Odisha, working across education, skill development, agriculture, hospitality, real estate, finance, community development, empowerment, media and other lawful development initiatives.",
  keywords: [
    "Gargi Group",
    "Gargi Group Odisha",
    "Gargi Group Bhubaneswar",
    "Gargi Group official website",
    "business group Odisha",
    "diversified business group Odisha",
    "development organization Odisha",
    "Patrapada Bhubaneswar",
  ],
  authors: [{ name: "Gargi Group" }],
  creator: "Gargi Group",
  publisher: "Gargi Group",
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
    locale: "en_IN",
    siteName: "Gargi Group",
    title: "Gargi Group | Diversified Development Group in Bhubaneswar, Odisha",
    description:
      "Gargi Group is a diversified organization based in Bhubaneswar, Odisha, working across education, agriculture, hospitality, real estate, finance, community development and more.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gargi Group — Bhubaneswar, Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gargi Group | Diversified Development Group in Bhubaneswar, Odisha",
    description:
      "Gargi Group — a diversified organization committed to opportunities across business, development, livelihoods and community advancement in Odisha.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HomeJsonLd />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta name="theme-color" content="#0D1B2A" />
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar, Odisha" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0D1B2A] text-white px-4 py-2 rounded-lg z-[100] font-semibold text-sm"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
