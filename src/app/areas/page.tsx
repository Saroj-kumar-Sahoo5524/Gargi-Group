import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areas } from "@/data/areas";
import { getAreaIcon } from "@/lib/icons";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "All Areas of Work | Gargi Group Odisha",
  description:
    "Explore all 10 areas of work at Gargi Group — including education, agriculture, hospitality, real estate, finance, community development, empowerment, petrochemical, charitable initiatives and media & entertainment.",
  alternates: { canonical: `${SITE_URL}/areas` },
  openGraph: {
    title: "All Areas of Work | Gargi Group Odisha",
    description:
      "Gargi Group operates across 10 distinct sectors in Bhubaneswar, Odisha — from education and agriculture to real estate, finance and community development.",
    url: `${SITE_URL}/areas`,
  },
};

export default function AreasPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Areas of work hero"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Areas of Work" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">
              Ten Sectors · One Group
            </div>
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>
              Our Areas of Work
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Gargi Group is a diversified organization operating across ten distinct
              sectors — each aligned with our vision of responsible growth, community
              development and long-term opportunity creation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-white" aria-labelledby="all-areas-heading">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <div className="section-label mb-4">All Sectors</div>
            <h2 id="all-areas-heading" className="text-[#0D1B2A]" style={{ fontFamily: "Manrope" }}>
              Explore Every Area
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => {
              const Icon = getAreaIcon(area.iconName);
              return (
                <Link
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="card-premium group flex flex-col p-7"
                  aria-label={`Explore ${area.title}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-box group-hover:bg-[rgba(29,82,77,0.15)] transition-colors">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <span className="text-4xl font-bold text-[rgba(13,27,42,0.06)]" style={{ fontFamily: "Manrope" }}>
                      {area.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-2 text-base leading-tight" style={{ fontFamily: "Manrope" }}>
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed flex-1 mb-6">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#0D1B2A] text-xs font-semibold mt-auto pt-2 border-t border-[rgba(28,35,48,0.08)]">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
