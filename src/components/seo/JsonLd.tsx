// src/components/seo/JsonLd.tsx
// Schema.org JSON-LD structured data injector

import { SITE_URL, COMPANY_NAME, COMPANY_ADDRESS } from "@/lib/utils";

interface JsonLdProps {
  type?: "Organization" | "WebSite" | "BreadcrumbList" | "Article" | "WebPage";
  data?: Record<string, unknown>;
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Gargi Group is a diversified organization based in Bhubaneswar, Odisha, working across education, skill development, agriculture, hospitality, real estate, finance, community development, empowerment, media and other lawful development initiatives.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 46/2163/4108, Lane 2, Infront of Utkal Residency, Patrapada",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751019",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Odisha",
    },
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_URL,
    description:
      "Official website of Gargi Group — a diversified organization in Bhubaneswar, Odisha.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HomeJsonLd() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
    </>
  );
}

export function PageJsonLd({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  return <BreadcrumbSchema items={breadcrumbs} />;
}

export default JsonLdProps;
