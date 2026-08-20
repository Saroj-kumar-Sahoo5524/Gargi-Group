import type { Metadata } from "next";
import { areas } from "@/data/areas";
import { SITE_URL } from "@/lib/utils";
import HeroSection from "@/components/sections/HeroSection";
import AreasGrid from "@/components/sections/AreasGrid";
import WhyGargi from "@/components/sections/WhyGargi";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import AboutSection from "@/components/sections/AboutSection";
import ImpactSection from "@/components/sections/ImpactSection";

export const metadata: Metadata = {
  title: "Gargi Group | Diversified Development Group in Bhubaneswar, Odisha",
  description:
    "Gargi Group is a diversified organization based in Bhubaneswar, Odisha, working across education, skill development, agriculture, hospitality, real estate, finance, community development, empowerment, media and other lawful development initiatives.",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AreasGrid areas={areas} />
      <WhyGargi />
      <ImpactSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
