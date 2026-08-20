"use client";

import { motion } from "framer-motion";
import { Layers, Leaf, Users, Lightbulb, Shield, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Diversified Approach",
    description:
      "Operating across ten distinct sectors, Gargi Group builds resilience and creates opportunities across multiple dimensions of economic and social life.",
  },
  {
    icon: Leaf,
    title: "Responsible Growth",
    description:
      "Every initiative is pursued with a commitment to responsible, sustainable practices that respect communities, environments and long-term consequences.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "Community well-being is not an afterthought — it is central to how Gargi Group defines success, plans initiatives and measures outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Vision",
    description:
      "We think beyond short-term gains. Our orientation is toward durable value creation that serves individuals, communities and the economy over time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Bringing fresh thinking, adaptable approaches and a willingness to explore new pathways across all areas of our work.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency, honesty and ethical conduct are non-negotiable foundations of every relationship, initiative and decision at Gargi Group.",
  },
];

export default function WhyGargi() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="why-gargi-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading and intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <div className="section-label mb-5">Why Gargi Group</div>
            <h2
              id="why-gargi-heading"
              className="text-[#0D1B2A] mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Grounded in Values. Driven by Purpose.
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-[#374151] leading-relaxed mb-5">
              What distinguishes Gargi Group is not simply the breadth of its areas
              of work, but the values and philosophy that underpin every initiative
              and decision.
            </p>
            <p className="text-[#374151] leading-relaxed">
              We are guided by a clear set of principles that keep us accountable
              to communities, environments and the future.
            </p>

            {/* Decorative element */}
            <div className="mt-12 p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #0D1B2A, #1A2E44)" }}>
              <p className="text-white/80 text-sm leading-relaxed italic">
                &ldquo;Genuine development happens when communities, opportunities
                and responsible action come together.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-wide">
                  GARGI GROUP APPROACH
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — pillars grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-[rgba(28,35,48,0.1)] hover:border-[rgba(201,168,76,0.45)] hover:shadow-[0_8px_30px_rgba(13,27,42,0.1)] transition-all duration-300 group"
                >
                  <div className="icon-box mb-4 group-hover:bg-[rgba(29,82,77,0.12)] transition-colors">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-2 text-sm" style={{ fontFamily: "Manrope" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
