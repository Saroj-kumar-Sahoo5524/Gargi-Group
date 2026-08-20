import type { Metadata } from "next";
import { Briefcase, Heart, Users, Lightbulb, ChevronDown } from "lucide-react";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CareerForm from "@/components/forms/CareerForm";

export const metadata: Metadata = {
  title: "Careers at Gargi Group | Bhubaneswar, Odisha",
  description:
    "Explore career opportunities at Gargi Group — a diversified organization based in Bhubaneswar, Odisha. Current openings will be published here when available.",
  alternates: { canonical: `${SITE_URL}/careers` },
};

const culturePoints = [
  { icon: Heart, title: "Purpose-Driven Work", description: "Every role at Gargi Group contributes to meaningful development and community advancement." },
  { icon: Users, title: "Collaborative Environment", description: "We believe the best outcomes emerge from diverse, collaborative and respectful teams." },
  { icon: Lightbulb, title: "Growth & Learning", description: "We encourage continuous learning, adaptability and the development of new skills." },
  { icon: Briefcase, title: "Diverse Opportunities", description: "With ten areas of work, Gargi Group offers exposure to a wide range of sectors and experiences." },
];

const faqs = [
  {
    q: "How do I apply to Gargi Group?",
    a: "You can submit a career enquiry using the form on this page. When specific vacancies become available, they will be listed in the Openings section below.",
  },
  {
    q: "Does Gargi Group offer internships?",
    a: "Information about internship opportunities will be published here when available. You are welcome to submit a general enquiry using the form below.",
  },
  {
    q: "What kinds of roles does Gargi Group hire for?",
    a: "Given Gargi Group's diverse areas of work, opportunities may arise across a wide range of functions. Details of specific openings will be published when available.",
  },
  {
    q: "Is Gargi Group based only in Bhubaneswar?",
    a: "Gargi Group is headquartered in Patrapada, Bhubaneswar, Odisha. Information about any additional locations will be updated as initiatives are announced.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Careers page hero"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Careers" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">Join Gargi Group</div>
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>
              Careers at Gargi Group
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Be part of a growing, purposeful organization working across
              ten areas of development in Odisha and beyond.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white" aria-labelledby="why-join-heading">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <div className="section-label mb-5">Why Gargi Group</div>
            <h2 id="why-join-heading" className="text-[#0D1B2A]" style={{ fontFamily: "Manrope" }}>
              Why Work With Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {culturePoints.map((cp) => {
              const CIcon = cp.icon;
              return (
                <div key={cp.title} className="p-6 rounded-xl border border-[rgba(28,35,48,0.1)] hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_8px_24px_rgba(13,27,42,0.08)] transition-all group">
                  <div className="icon-box mb-4 group-hover:bg-[rgba(29,82,77,0.12)] transition-colors">
                    <CIcon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-2 text-sm" style={{ fontFamily: "Manrope" }}>{cp.title}</h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{cp.description}</p>
                </div>
              );
            })}
          </div>

          {/* Current Openings */}
          <div className="mb-14">
            <h2 className="text-[#0D1B2A] font-bold mb-8 text-2xl" id="openings-heading" style={{ fontFamily: "Manrope" }}>
              Current Openings
            </h2>
            <div className="p-10 rounded-2xl text-center" style={{ background: "#F5F6F7", border: "1px solid rgba(201,168,76,0.4)" }}>
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(13,27,42,0.07)" }}>
                <Briefcase size={22} className="text-[#0D1B2A]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#0D1B2A] mb-2" style={{ fontFamily: "Manrope" }}>
                Current openings will be published here when available.
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed max-w-md mx-auto">
                Gargi Group is growing across multiple sectors. Specific vacancies
                will be listed here as they become available. In the meantime, you
                are welcome to submit a career enquiry below.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-14">
            <h2 className="text-[#0D1B2A] font-bold mb-8 text-2xl" id="career-faq-heading" style={{ fontFamily: "Manrope" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-xl border border-[rgba(28,35,48,0.1)] bg-white">
                  <p className="font-semibold text-[#0D1B2A] mb-2 text-sm" style={{ fontFamily: "Manrope" }}>{faq.q}</p>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Form */}
          <div>
            <h2 className="text-[#0D1B2A] font-bold mb-3 text-2xl" id="career-form-heading" style={{ fontFamily: "Manrope" }}>
              Submit a Career Enquiry
            </h2>
            <p className="text-[#6b7280] text-sm mb-8">
              Interested in working with Gargi Group? Share your details and we will
              be in touch when suitable opportunities arise.
            </p>
            <div className="max-w-2xl p-8 rounded-2xl border border-[rgba(28,35,48,0.1)] shadow-[0_4px_30px_rgba(13,27,42,0.06)] bg-white">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
