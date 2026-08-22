import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Play, Image as ImageIcon } from "lucide-react";
import { areas } from "@/data/areas";
import { getAreaIcon } from "@/lib/icons";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Media Gallery | Gargi Group Odisha",
  description:
    "Explore media, videos and images from all 10 areas of work at Gargi Group — Education, Agriculture, Hospitality, Real Estate, Finance, Petrochemical, Community, Empowerment, Charitable and Media & Entertainment.",
  alternates: { canonical: `${SITE_URL}/media` },
  openGraph: {
    title: "Media Gallery | Gargi Group Odisha",
    description:
      "Browse photo and video galleries across all 10 sectors of Gargi Group, Bhubaneswar, Odisha.",
    url: `${SITE_URL}/media`,
  },
};

export default function MediaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0A1520 60%, #111827 100%)" }}
        aria-label="Media gallery hero"
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* glow blob */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(circle at 70% 30%, #C9A84C, transparent 60%)" }}
        />

        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Media" }]} variant="dark" />
          <div className="mt-10 max-w-3xl">
            <div className="section-label-dark mb-5">Media Gallery</div>
            <h1
              className="text-white font-bold mb-5 text-4xl lg:text-5xl leading-tight"
              style={{ fontFamily: "Manrope" }}
            >
              Our Story,{" "}
              <span style={{ color: "#C9A84C" }}>In Every Frame</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              Browse videos and photo galleries across all ten areas of Gargi Group&apos;s work.
              Select any area below to explore its dedicated media collection.
            </p>
          </div>

          {/* stats row */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { value: "10", label: "Areas of Work" },
              { value: "10+", label: "Video Features" },
              { value: "40+", label: "Photo Galleries" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold" style={{ fontFamily: "Manrope", color: "#C9A84C" }}>
                  {s.value}
                </p>
                <p className="text-xs text-white/50 tracking-wider uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Area Cards Grid ── */}
      <section
        className="section-padding"
        style={{ background: "#F5F6F7" }}
        aria-labelledby="media-areas-heading"
      >
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-4">Browse by Area</div>
            <h2
              id="media-areas-heading"
              className="text-[#0D1B2A] text-3xl font-bold leading-tight"
              style={{ fontFamily: "Manrope" }}
            >
              Select an Area to Explore Its Media
            </h2>
            <p className="text-[#6b7280] mt-3 text-sm leading-relaxed">
              Each area has its own dedicated media page with a featured video and photo gallery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" role="list">
            {areas.map((area) => {
              const Icon = getAreaIcon(area.iconName);
              return (
                <Link
                  key={area.id}
                  href={`/media/${area.slug}`}
                  id={`media-card-${area.slug}`}
                  role="listitem"
                  aria-label={`View media for ${area.title}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-[rgba(28,35,48,0.08)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={area.heroImage}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* colour overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, transparent 25%, ${area.color}BB 100%)`,
                      }}
                    />
                    {/* area number badge */}
                    <span
                      className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.45)",
                        color: "#C9A84C",
                        fontFamily: "Manrope",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {area.number}
                    </span>
                    {/* media type badges */}
                    <div className="absolute bottom-3 right-3 flex gap-1.5">
                      <span
                        className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(0,0,0,0.52)", color: "#fff", backdropFilter: "blur(6px)" }}
                      >
                        <Play size={9} />
                        Video
                      </span>
                      <span
                        className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(0,0,0,0.52)", color: "#fff", backdropFilter: "blur(6px)" }}
                      >
                        <ImageIcon size={9} />
                        Gallery
                      </span>
                    </div>
                    {/* play button overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(201,168,76,0.90)", backdropFilter: "blur(4px)" }}
                      >
                        <Play size={18} fill="white" className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${area.color}18`, border: `1px solid ${area.color}33` }}
                      >
                        <Icon size={15} style={{ color: area.color }} aria-hidden="true" />
                      </div>
                      <h3
                        className="font-bold text-[#0D1B2A] text-sm leading-tight"
                        style={{ fontFamily: "Manrope" }}
                      >
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#6b7280] leading-relaxed italic flex-1">
                      {area.tagline}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[rgba(28,35,48,0.07)] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0D1B2A]">View Media</span>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform"
                        style={{ background: "#0D1B2A0D" }}
                      >
                        <ArrowRight size={12} className="text-[#0D1B2A]" />
                      </div>
                    </div>
                  </div>

                  {/* animated gold bottom border on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: "linear-gradient(90deg, #C9A84C, #D4B660)" }}
                    aria-hidden="true"
                  />
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

