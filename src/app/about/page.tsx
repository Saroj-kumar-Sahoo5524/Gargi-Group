import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Layers, Shield, Leaf } from "lucide-react";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Gargi Group | Diversified Organization in Bhubaneswar, Odisha",
  description:
    "Learn about Gargi Group — a diversified organization based in Bhubaneswar, Odisha, committed to responsible growth, community development and long-term opportunity creation across ten sectors.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Gargi Group | Bhubaneswar, Odisha",
    description:
      "Gargi Group is a diversified organization based in Bhubaneswar, Odisha, working across education, agriculture, real estate, finance, community development and more.",
    url: `${SITE_URL}/about`,
  },
};

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "Honest, transparent and ethical in all our dealings." },
  { icon: Heart, title: "Community First", desc: "Every initiative begins with community well-being." },
  { icon: Leaf, title: "Sustainability", desc: "Long-term, responsible approaches in everything we do." },
  { icon: Layers, title: "Diversified Strength", desc: "Resilience built through breadth across sectors." },
  { icon: Target, title: "Purpose-Driven", desc: "Aligned always with meaningful development objectives." },
  { icon: Eye, title: "Transparency", desc: "Open, honest communication in all relationships." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="About page hero"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "About" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">
              Who We Are
            </div>
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>
              About Gargi Group
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A diversified organization rooted in Bhubaneswar, Odisha, building
              opportunities across ten sectors with responsibility, integrity and
              a long-term vision.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white" aria-labelledby="who-we-are-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="section-label mb-5">Our Identity</div>
              <h2 id="who-we-are-heading" className="text-[#0D1B2A] mb-6" style={{ fontFamily: "Manrope" }}>
                Who We Are
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5 text-[#374151] leading-relaxed">
                <p>
                  Gargi Group is a diversified organization based at Patrapada, Bhubaneswar,
                  in the state of Odisha, India. The Group operates across ten distinct
                  areas of work — spanning education, agriculture, service and hospitality,
                  real estate, finance, petrochemical development, community welfare,
                  women and youth empowerment, charitable initiatives, and media and entertainment.
                </p>
                <p>
                  This breadth is not accidental. Gargi Group believes that sustainable
                  development requires engaging with the multiple dimensions of economic
                  and social life simultaneously. By operating across diverse sectors,
                  the Group builds resilience, creates diverse opportunities and contributes
                  to the broader advancement of communities and the economy.
                </p>
                <p>
                  Gargi Group is headquartered at Plot No. 46/2163/4108, Lane 2,
                  Infront of Utkal Residency, Patrapada, Bhubaneswar, Odisha – 751019,
                  and is committed to conducting all activities within the full scope
                  of applicable laws and regulations.
                </p>
              </div>
            </div>

            <div
              className="p-8 lg:p-10 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0D1B2A, #1A2E44)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <span className="text-3xl font-bold text-[#C9A84C]" style={{ fontFamily: "Manrope" }}>G</span>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2" style={{ fontFamily: "Manrope" }}>Gargi Group</h3>
              <p className="text-[#C9A84C] text-sm tracking-wide uppercase mb-6">Bhubaneswar · Odisha · India</p>
              <div className="h-px w-full mb-6" style={{ background: "rgba(201,168,76,0.2)" }} />
              <div className="space-y-3">
                {[
                  "10 Areas of Work",
                  "Based in Bhubaneswar, Odisha",
                  "Community-focused development",
                  "Long-term, responsible vision",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ background: "#F5F6F7" }} aria-labelledby="vision-heading">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[rgba(28,35,48,0.08)] hover:shadow-[0_8px_30px_rgba(13,27,42,0.1)] transition-shadow">
              <div className="icon-box mb-5"><Eye size={18} aria-hidden="true" /></div>
              <h2 id="vision-heading" className="font-bold text-[#0D1B2A] mb-4 text-xl" style={{ fontFamily: "Manrope" }}>
                Our Vision
              </h2>
              <div className="gold-divider mb-5" />
              <p className="text-[#374151] leading-relaxed">
                To be a responsible, trusted and forward-looking diversified organization
                that creates meaningful, lasting opportunities for communities, individuals
                and the economy — rooted in Odisha, reaching beyond.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[rgba(28,35,48,0.08)] hover:shadow-[0_8px_30px_rgba(13,27,42,0.1)] transition-shadow">
              <div className="icon-box mb-5"><Target size={18} aria-hidden="true" /></div>
              <h2 className="font-bold text-[#0D1B2A] mb-4 text-xl" style={{ fontFamily: "Manrope" }}>
                Our Mission
              </h2>
              <div className="gold-divider mb-5" />
              <p className="text-[#374151] leading-relaxed">
                To pursue responsible development across diverse sectors by combining
                long-term vision, community focus, sustainable practices and ethical
                conduct — creating opportunities that are inclusive, durable and genuinely valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center mb-5">Core Values</div>
            <h2 id="values-heading" className="text-[#0D1B2A]" style={{ fontFamily: "Manrope" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((v) => {
              const VIcon = v.icon;
              return (
                <div key={v.title} className="p-6 rounded-xl border border-[rgba(28,35,48,0.1)] hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_8px_24px_rgba(13,27,42,0.08)] transition-all group">
                  <div className="icon-box mb-4 group-hover:bg-[rgba(29,82,77,0.12)] transition-colors">
                    <VIcon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-2" style={{ fontFamily: "Manrope", fontSize: "0.95rem" }}>{v.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding" style={{ background: "#F5F6F7" }} aria-labelledby="location-heading">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Our Location</div>
            <h2 id="location-heading" className="text-[#0D1B2A] mb-6" style={{ fontFamily: "Manrope" }}>
              Rooted in Bhubaneswar, Odisha
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-[#374151] leading-relaxed mb-6">
              Gargi Group is headquartered in Patrapada, Bhubaneswar — a thriving
              part of Odisha&apos;s growing capital. Bhubaneswar&apos;s evolution as a smart
              city, educational hub and economic centre provides an inspiring backdrop
              for Gargi Group&apos;s diverse activities and future aspirations.
            </p>
            <address className="not-italic p-5 rounded-xl bg-white border border-[rgba(28,35,48,0.1)] text-sm text-[#374151] leading-relaxed">
              <strong className="text-[#0D1B2A] font-semibold">Gargi Group</strong><br />
              Plot No. 46/2163/4108, Lane 2,<br />
              Infront of Utkal Residency, Patrapada,<br />
              Bhubaneswar, Odisha – 751019, India
            </address>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
