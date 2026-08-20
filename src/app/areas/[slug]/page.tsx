import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAreaBySlug, areas } from "@/data/areas";
import AreaPageTemplate from "@/components/area/AreaPageTemplate";
import { SITE_URL } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.seo.title,
    description: area.seo.description,
    keywords: area.seo.keywords,
    alternates: {
      canonical: `${SITE_URL}/areas/${slug}`,
    },
    openGraph: {
      title: area.seo.title,
      description: area.seo.description,
      url: `${SITE_URL}/areas/${slug}`,
      images: [{ url: area.heroImage, alt: area.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: area.seo.title,
      description: area.seo.description,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) notFound();

  return <AreaPageTemplate area={area} />;
}
