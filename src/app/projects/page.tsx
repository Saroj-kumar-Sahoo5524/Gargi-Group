import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Building2 } from "lucide-react";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects & Initiatives | Gargi Group Odisha",
  description:
    "Explore projects and initiatives by Gargi Group across education, agriculture, real estate, finance, community development and other sectors in Bhubaneswar, Odisha.",
  alternates: { canonical: `${SITE_URL}/projects` },
};

const upcomingProjects = [
  {
    id: "gargi-palms-residency",
    title: "Gargi Palms Residency",
    sector: "Real Estate & Property Development",
    status: "Coming Soon",
    location: "Patia, Bhubaneswar, Odisha",
    image: "/project-residential.jpg",
    description:
      "A landmark luxury residential development in the heart of Bhubaneswar, Gargi Palms Residency redefines upscale urban living. Spread across 4.2 acres, the project features meticulously designed 2, 3, and 4 BHK apartments with premium finishes, landscaped greens, and world-class amenities — including a rooftop infinity pool, clubhouse, and dedicated EV charging bays. Thoughtfully planned to harmonise modern architecture with sustainable design principles.",
    tags: ["Residential", "Luxury", "Sustainable"],
  },
  {
    id: "gargi-agri-skill-campus",
    title: "Gargi Agri & Skill Development Campus",
    sector: "Agriculture & Skill Development",
    status: "Coming Soon",
    location: "Khordha District, Odisha",
    image: "/project-agri-campus.jpg",
    description:
      "An integrated campus designed to bridge the gap between rural agriculture and modern skill development in Odisha. The facility will house state-of-the-art training labs, model farms, and incubation centres to support farmers, youth, and agri-entrepreneurs with hands-on vocational education. The initiative aims to empower over 2,000 beneficiaries annually, aligned with Gargi Group's commitment to community welfare and livelihood enhancement.",
    tags: ["Agriculture", "Education", "Community"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Projects page hero"
      >
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Projects" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">Initiatives & Projects</div>
            <h1
              className="text-white font-bold mb-4"
              style={{ fontFamily: "Manrope" }}
            >
              Projects & Initiatives
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              A scalable, data-driven space for Gargi Group&apos;s projects and
              initiatives across all ten areas of work.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* Upcoming Projects */}
      <section
        className="section-padding bg-white"
        aria-labelledby="projects-heading"
      >
        <div className="container-site">
          {/* Section header */}
          <div className="max-w-2xl mb-14">
            <div className="section-label mb-5">Upcoming Initiatives</div>
            <h2
              id="projects-heading"
              className="text-[#0D1B2A] mb-4"
              style={{ fontFamily: "Manrope" }}
            >
              Upcoming Projects
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Gargi Group is actively developing the following initiatives.
              Detailed information and timelines will be published following
              official announcements.
            </p>
          </div>

          {/* Project Cards — full width, stacked */}
          <div className="flex flex-col gap-10">
            {upcomingProjects.map((project, index) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 4px 32px rgba(13,27,42,0.07)",
                  background: "#fff",
                }}
              >
                {/* Image — full width, fixed height */}
                <div className="relative w-full" style={{ height: "420px" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1280px"
                    priority={index === 0}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,27,42,0.72) 0%, rgba(13,27,42,0.18) 55%, transparent 100%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Status badge — top-left */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest"
                      style={{
                        background: "rgba(201,168,76,0.18)",
                        border: "1px solid rgba(201,168,76,0.55)",
                        color: "#C9A84C",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                      }}
                    >
                      <Clock size={11} aria-hidden="true" />
                      {project.status}
                    </span>
                  </div>

                  {/* Sector badge — top-right */}
                  <div className="absolute top-5 right-5">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                      style={{
                        background: "rgba(13,27,42,0.65)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: "rgba(255,255,255,0.9)",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 600,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Building2 size={11} aria-hidden="true" />
                      {project.sector}
                    </span>
                  </div>

                  {/* Title overlay at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 pb-6">
                    <h3
                      className="text-white text-2xl font-bold mb-1"
                      style={{ fontFamily: "Manrope", lineHeight: 1.2 }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/75 text-sm">
                      <MapPin size={13} aria-hidden="true" className="text-[#C9A84C]" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 lg:p-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-600"
                        style={{
                          background: "rgba(13,27,42,0.06)",
                          color: "#374151",
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          fontWeight: 600,
                          border: "1px solid rgba(13,27,42,0.1)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#374151] leading-relaxed mb-8"
                    style={{ fontSize: "1rem", maxWidth: "860px", textAlign: "justify" }}
                  >
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="mb-7"
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, rgba(201,168,76,0.4), rgba(201,168,76,0.05))",
                    }}
                    aria-hidden="true"
                  />

                  {/* Footer row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <MapPin size={15} className="text-[#C9A84C]" aria-hidden="true" />
                      <span>{project.location}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-secondary"
                      id={`project-enquire-${project.id}`}
                      aria-label={`Enquire about ${project.title}`}
                    >
                      Enquire About This Project
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sector breakdown */}
      <section
        className="pb-20"
        style={{ background: "#F5F6F7" }}
        aria-labelledby="sectors-heading"
      >
        <div className="container-site pt-16">
          <h3
            id="sectors-heading"
            className="text-[#0D1B2A] font-bold mb-8 text-lg"
            style={{ fontFamily: "Manrope" }}
          >
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
                <div
                  className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-[#374151]">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

