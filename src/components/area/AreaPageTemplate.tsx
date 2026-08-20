// src/components/area/AreaPageTemplate.tsx
// Reusable template for all 10 sector pages

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type AreaData, getRelatedAreas } from "@/data/areas";
import { getAreaIcon } from "@/lib/icons";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

interface AreaPageTemplateProps {
  area: AreaData;
}

export default function AreaPageTemplate({ area }: AreaPageTemplateProps) {
  const Icon = getAreaIcon(area.iconName);
  const relatedAreas = getRelatedAreas(area.relatedAreas);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex items-end overflow-hidden"
        aria-label={`${area.title} hero section`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={area.heroImage}
            alt={`${area.title} — Gargi Group, Odisha`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 container-site pb-12 sm:pb-14 pt-32 sm:pt-36">
          <Breadcrumb
            items={[
              { label: "Areas of Work", href: "/areas" },
              { label: area.title },
            ]}
            variant="dark"
          />

          <div className="mt-6 max-w-3xl">
            <div className="section-label-dark mb-4">
              Area {area.number} · {area.shortTitle}
            </div>
            <h1
              className="text-white font-bold mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {area.title}
            </h1>
            <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl">
              {area.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white" aria-labelledby="area-intro-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2">
              <div className="section-label mb-5">Overview</div>
              <h2
                id="area-intro-heading"
                className="text-[#0D1B2A] mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {area.shortTitle} at Gargi Group
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-[#374151] leading-relaxed text-lg mb-6">
                {area.longDescription}
              </p>
              <p className="text-[#374151] leading-relaxed">
                Gargi Group is committed to exploring and developing this area
                in alignment with our core values of responsibility, sustainability
                and community focus. All activities and initiatives within this
                sector are pursued within applicable legal frameworks.
              </p>
            </div>

            {/* Sidebar Icon */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-28 p-8 rounded-2xl text-center"
                style={{ background: "linear-gradient(135deg, #0D1B2A, #1A2E44)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <Icon size={28} className="text-[#C9A84C]" aria-hidden="true" />
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "rgba(201,168,76,0.2)", fontFamily: "Manrope" }}
                >
                  {area.number}
                </div>
                <h3
                  className="text-white font-bold mb-3 text-sm"
                  style={{ fontFamily: "Manrope" }}
                >
                  {area.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {area.description}
                </p>
                <div
                  className="mt-5 h-px w-full"
                  style={{ background: "rgba(201,168,76,0.2)" }}
                />
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-[#C9A84C] text-xs font-semibold hover:text-white transition-colors group"
                >
                  Enquire About This Area
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section
        className="section-padding"
        style={{ background: "#F5F6F7" }}
        aria-labelledby="focus-areas-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-5">Key Focus Areas</div>
            <h2
              id="focus-areas-heading"
              className="text-[#0D1B2A]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              What We Focus On
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {area.keyFocusAreas.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-white rounded-xl border border-[rgba(28,35,48,0.08)] hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_4px_20px_rgba(13,27,42,0.08)] transition-all duration-300"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#1A4D3A] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-[#374151] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white" aria-labelledby="approach-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-label mb-5">Our Approach</div>
              <h2
                id="approach-heading"
                className="text-[#0D1B2A] mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                How We Approach {area.shortTitle}
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-[#374151] leading-relaxed">{area.approach}</p>
            </div>

            {/* Objectives */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
            >
              <h3
                className="text-white font-bold mb-6 text-lg"
                style={{ fontFamily: "Manrope" }}
              >
                Our Objectives
              </h3>
              <ul className="space-y-4">
                {area.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "#C9A84C" }}
                      aria-hidden="true"
                    />
                    <span className="text-white/75 text-sm leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Initiatives */}
      <section
        className="section-padding"
        style={{ background: "#F5F6F7" }}
        aria-labelledby="initiatives-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-8">
            <div className="section-label mb-5">Initiatives</div>
            <h2
              id="initiatives-heading"
              className="text-[#0D1B2A] mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Projects & Initiatives
            </h2>
            <div className="gold-divider" />
          </div>

          <div
            className="p-8 lg:p-12 rounded-2xl text-center"
            style={{ background: "white", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center"
              style={{ background: "rgba(13,27,42,0.07)" }}
              aria-hidden="true"
            >
              <Icon size={22} className="text-[#0D1B2A]" />
            </div>
            <h3
              className="text-[#0D1B2A] font-bold mb-3"
              style={{ fontFamily: "Manrope" }}
            >
              Initiative Information Coming Soon
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg mx-auto">
              Specific project and initiative information for this sector will be
              published here following official announcements. Gargi Group is
              actively exploring opportunities in {area.shortTitle.toLowerCase()}.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-secondary text-sm"
              id={`${area.id}-enquire-cta`}
            >
              Enquire About Initiatives
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      {relatedAreas.length > 0 && (
        <section className="section-padding bg-white" aria-labelledby="related-heading">
          <div className="container-site">
            <div className="max-w-xl mb-10">
              <div className="section-label mb-5">Explore More</div>
              <h2
                id="related-heading"
                className="text-[#0D1B2A]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Related Areas of Work
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedAreas.map((ra) => {
                const RIcon = getAreaIcon(ra.iconName);
                return (
                  <Link
                    key={ra.id}
                    href={`/areas/${ra.slug}`}
                    className="card-premium group p-6 flex flex-col"
                    aria-label={`Explore ${ra.title}`}
                  >
                    <div className="icon-box mb-4 group-hover:bg-[rgba(29,82,77,0.12)] transition-colors">
                      <RIcon size={18} aria-hidden="true" />
                    </div>
                    <h3
                      className="font-bold text-[#0D1B2A] text-sm mb-2"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {ra.title}
                    </h3>
                    <p className="text-xs text-[#6b7280] leading-relaxed flex-1 mb-4">
                      {ra.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#0D1B2A] text-xs font-semibold mt-auto pt-2 border-t border-[rgba(28,35,48,0.08)]">
                      <span>Explore</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
