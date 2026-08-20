import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper, Megaphone, Video, FileText, Rss } from "lucide-react";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "News & Media | Gargi Group Odisha",
  description:
    "News, press releases, announcements and media coverage from Gargi Group — a diversified organization based in Bhubaneswar, Odisha.",
  alternates: { canonical: `${SITE_URL}/media` },
};

const mediaCategories = [
  { icon: Newspaper, label: "News & Articles", description: "Updates and editorial coverage" },
  { icon: Megaphone, label: "Press Releases", description: "Official announcements" },
  { icon: Video, label: "Video & Media", description: "Multimedia content" },
  { icon: Rss, label: "Media Coverage", description: "Third-party coverage" },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Media page hero"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Media" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">News & Media</div>
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>
              Media & Press
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Stay informed with news, announcements, press releases and media
              coverage from Gargi Group.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      {/* Categories */}
      <section className="section-padding bg-white" aria-labelledby="media-categories-heading">
        <div className="container-site">
          <div className="max-w-xl mb-10">
            <div className="section-label mb-5">Media Categories</div>
            <h2 id="media-categories-heading" className="text-[#0D1B2A]" style={{ fontFamily: "Manrope" }}>
              What You&apos;ll Find Here
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {mediaCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.label} className="p-6 rounded-xl border border-[rgba(28,35,48,0.1)] text-center hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_8px_24px_rgba(13,27,42,0.08)] transition-all">
                  <div className="icon-box mx-auto mb-4">
                    <CatIcon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] text-sm mb-1" style={{ fontFamily: "Manrope" }}>{cat.label}</h3>
                  <p className="text-xs text-[#6b7280]">{cat.description}</p>
                </div>
              );
            })}
          </div>

          {/* Placeholder */}
          <div className="p-10 lg:p-14 rounded-2xl text-center" style={{ background: "#F5F6F7", border: "1px solid rgba(201,168,76,0.4)" }}>
            <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: "rgba(13,27,42,0.07)" }}>
              <FileText size={24} className="text-[#0D1B2A]" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-[#0D1B2A] mb-3 text-xl" style={{ fontFamily: "Manrope" }}>
              News and media updates will be published here.
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg mx-auto mb-8">
              Gargi Group&apos;s media section is being prepared to share news, announcements,
              press releases and media coverage. Content will be published here as it becomes
              available following official announcements.
            </p>
            <Link href="/contact" className="btn-primary inline-flex" id="media-contact-cta">
              Media Enquiries
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
