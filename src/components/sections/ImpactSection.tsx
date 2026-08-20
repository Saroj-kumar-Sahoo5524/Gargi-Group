"use client";

import { motion } from "framer-motion";
import { Target, Globe, Compass, Heart } from "lucide-react";

const focusAreas = [
  {
    icon: Globe,
    title: "Broad Sector Focus",
    description:
      "From agriculture and education to real estate, finance, media and hospitality — Gargi Group's breadth creates resilience and diverse opportunities.",
  },
  {
    icon: Heart,
    title: "Community at the Centre",
    description:
      "Our development philosophy always begins with community — its needs, its aspirations and its long-term welfare are the benchmarks of meaningful progress.",
  },
  {
    icon: Target,
    title: "Livelihood Development",
    description:
      "Creating pathways to dignified, sustainable livelihoods across Odisha — for individuals, families and communities — is a consistent thread through our work.",
  },
  {
    icon: Compass,
    title: "Responsible & Future-Ready",
    description:
      "Every initiative is framed with a long-term, responsible mindset — building for tomorrow while creating value today, within Odisha and beyond.",
  },
];

export default function ImpactSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="impact-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="section-label mb-5">Impact & Opportunity</div>
          <h2
            id="impact-heading"
            className="text-[#0D1B2A] mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Where Opportunity Meets Responsibility
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#374151] leading-relaxed">
            Gargi Group&apos;s broad focus is not incidental — it reflects a
            considered belief that sustainable development requires engaging with
            multiple dimensions of economic and social life simultaneously. Our
            work is defined by the opportunities we seek to create and the
            responsibility with which we pursue them.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {focusAreas.map((fa, i) => {
            const Icon = fa.icon;
            return (
              <motion.div
                key={fa.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl border border-[rgba(28,35,48,0.1)] hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_8px_30px_rgba(13,27,42,0.08)] transition-all duration-300 group"
              >
                <div className="icon-box flex-shrink-0 self-start group-hover:bg-[rgba(29,82,77,0.12)] transition-colors">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-bold text-[#0D1B2A] mb-2"
                    style={{ fontFamily: "Manrope", fontSize: "1rem" }}
                  >
                    {fa.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{fa.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom editorial quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 lg:p-10 rounded-2xl"
          style={{ background: "linear-gradient(135deg, #F5F6F7, rgba(245,246,247,0.5))", border: "1px solid rgba(201,168,76,0.3)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="w-12 h-0.5 mx-auto mb-6"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
              aria-hidden="true"
            />
            <p
              className="text-lg text-[#0D1B2A] leading-relaxed font-medium italic"
              style={{ fontFamily: "Manrope" }}
            >
              &ldquo;Responsible development is not a constraint — it is the foundation
              on which genuine, lasting opportunity is built. This is how Gargi Group
              approaches every area of its work.&rdquo;
            </p>
            <div
              className="w-12 h-0.5 mx-auto mt-6"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
              aria-hidden="true"
            />
            <p className="mt-5 text-xs text-[#6B7280] tracking-widest uppercase font-semibold">
              Gargi Group · Bhubaneswar, Odisha
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
