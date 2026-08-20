"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1520 0%, #0D1B2A 50%, #1A2E44 100%)" }}
      aria-labelledby="cta-heading"
    >
      {/* Gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-3 mb-8"
              aria-hidden="true"
            >
              <div className="w-10 h-px" style={{ background: "rgba(201,168,76,0.5)" }} />
              <span className="text-[#C9A84C] text-xs tracking-[0.15em] font-semibold uppercase">
                Connect With Us
              </span>
              <div className="w-10 h-px" style={{ background: "rgba(201,168,76,0.5)" }} />
            </div>

            <h2
              id="cta-heading"
              className="font-bold text-white mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Let&apos;s Build Meaningful{" "}
              <span style={{ color: "#C9A84C" }}>Opportunities</span> Together.
            </h2>

            <p className="text-white/65 leading-relaxed max-w-xl mx-auto mb-10">
              Whether you are interested in collaboration, community engagement,
              opportunities or simply learning more about Gargi Group, we welcome
              your enquiry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary !bg-white !text-[#0D1B2A] hover:!bg-[#F5F6F7] !border-transparent"
                id="cta-get-in-touch"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="btn-ghost-white"
                id="cta-learn-more"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
