"use client";

import { motion } from "framer-motion";

const values = [
  {
    name: "Responsible Growth",
    description: "Growing purposefully, sustainably and responsibly.",
    emoji: "🌱",
  },
  {
    name: "Community First",
    description: "Every decision starts and ends with community.",
    emoji: "🤝",
  },
  {
    name: "Diversified Approach",
    description: "Strength through breadth across sectors.",
    emoji: "🔷",
  },
  {
    name: "Innovation",
    description: "Fresh thinking and adaptive pathways.",
    emoji: "💡",
  },
  {
    name: "Sustainability",
    description: "Building for the long term, always.",
    emoji: "♻️",
  },
  {
    name: "Integrity",
    description: "Honest, transparent, ethical — always.",
    emoji: "⚖️",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "#F5F6F7" }}
      aria-labelledby="values-heading"
    >
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label justify-center mb-5">Our Values</div>
          <h2
            id="values-heading"
            className="text-[#0D1B2A] mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            The Principles We Live By
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#374151] leading-relaxed">
            These six values are not aspirational statements — they are active
            guides that shape decisions, relationships and outcomes at Gargi Group.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group text-center p-8 bg-white rounded-2xl border border-[rgba(28,35,48,0.08)] hover:shadow-[0_12px_40px_rgba(13,27,42,0.1)] hover:border-[rgba(201,168,76,0.45)] transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ background: "rgba(13,27,42,0.06)" }}
                aria-hidden="true"
              >
                {v.emoji}
              </div>
              <h3
                className="font-bold text-[#0D1B2A] mb-2"
                style={{ fontFamily: "Manrope", fontSize: "1rem" }}
              >
                {v.name}
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                {v.description}
              </p>
              <div
                className="mt-5 h-0.5 w-8 mx-auto rounded"
                style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
