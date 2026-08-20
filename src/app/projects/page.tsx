import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper, Megaphone, Video, FileText } from "lucide-react";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects & Initiatives | Gargi Group Odisha",
  description:
    "Explore projects and initiatives by Gargi Group across education, agriculture, real estate, finance, community development and other sectors in Bhubaneswar, Odisha.",
  alternates: { canonical: `${SITE_URL}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Projects page hero"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Projects" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">Initiatives & Projects</div>
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>
              Projects & Initiatives
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A scalable, data-driven space for Gargi Group&apos;s projects and
              initiatives across all ten areas of work.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      {/* Projects placeholder */}
      <section className="section-padding bg-white" aria-labelledby="projects-heading">
        <div className="container-site">
          <div className="max-w-xl mb-10">
            <div className="section-label mb-5">Current Status</div>
            <h2 id="projects-heading" className="text-[#0D1B2A]" style={{ fontFamily: "Manrope" }}>
              Coming Soon
            </h2>
          </div>

          <div className="p-10 lg:p-14 rounded-2xl text-center" style={{ background: "#F5F6F7", border: "1px solid rgba(201,168,76,0.4)" }}>
            <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: "rgba(13,27,42,0.07)" }}>
              <FileText size={24} className="text-[#0D1B2A]" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-[#0D1B2A] mb-3 text-xl" style={{ fontFamily: "Manrope" }}>
              Project information will be published here as initiatives are officially announced.
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Gargi Group is actively exploring and developing initiatives across its ten areas
              of work. Information about specific projects, timelines and outcomes will be
              published here following official announcements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/areas" className="btn-primary" id="projects-explore-areas-cta">
                Explore Our Areas
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary" id="projects-enquire-cta">
                Enquire About Initiatives
              </Link>
            </div>
          </div>

          {/* Sector breakdown */}
          <div className="mt-14">
            <h3 className="text-[#0D1B2A] font-bold mb-8 text-lg" style={{ fontFamily: "Manrope" }}>
              Areas We Are Working In
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Education & Skill Development",
                "Agriculture & Allied Activities",
                "Service & Hospitality",
                "Real Estate & Property Development",
                "Finance & Financial Services",
                "Petrochemical Development Initiatives",
                "Community Welfare & Livelihood",
                "Women, Youth & Community Empowerment",
                "Charitable & Development Initiatives",
                "Media & Entertainment",
              ].map((sector, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(28,35,48,0.1)] bg-white"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[#374151]">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
