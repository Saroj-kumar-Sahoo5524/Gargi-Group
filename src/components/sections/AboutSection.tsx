"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-5">About Gargi Group</div>
            <h2
              id="about-heading"
              className="text-[#0D1B2A] mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              A Diversified Group With a Long-Term Vision
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-[#374151] leading-relaxed mb-5">
              Gargi Group is a diversified organization based in Bhubaneswar, Odisha,
              with a broad focus spanning education, agriculture, hospitality, real estate,
              finance, community development, empowerment and media.
            </p>
            <p className="text-[#374151] leading-relaxed mb-5">
              Guided by values of responsibility, community focus and long-term vision,
              Gargi Group seeks to create meaningful opportunities — for individuals,
              communities and the broader economy of Odisha and India.
            </p>
            <p className="text-[#374151] leading-relaxed mb-10">
              Our approach is built on integrity, sustainable thinking and a genuine
              belief that responsible development creates lasting, shared value.
            </p>
            <Link href="/about" className="btn-secondary inline-flex" id="about-discover-cta">
              Discover Our Story
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative pb-8 sm:pb-10"
          >
            {/* Decorative frame */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl border"
              style={{ borderColor: "rgba(201,168,76,0.4)" }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_60px_rgba(29,82,77,0.15)]">
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D1B2A, #1A2E44, #0A1520)" }}>
                {/* Abstract interior visual */}
                <div className="w-full h-full flex items-center justify-center p-8 sm:p-10">
                  <div className="text-center">
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      style={{ background: "rgba(201,168,76,0.15)", border: "2px solid rgba(201,168,76,0.3)" }}
                    >
                      <span className="text-3xl font-bold text-[#C9A84C]" style={{ fontFamily: "Manrope" }}>G</span>
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "Manrope" }}>
                      Gargi Group
                    </h3>
                    <p className="text-[rgba(201,168,76,0.7)] text-sm tracking-wide uppercase">
                      Bhubaneswar · Odisha · India
                    </p>
                    <div className="mt-6 w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
                    <p className="mt-6 text-white/60 text-xs leading-relaxed max-w-xs mx-auto">
                      Diversified · Responsible · Community-Focused · Forward-Looking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card — positioned within pb-8 space to avoid clipping */}
            <motion.div
              className="absolute bottom-0 left-0 sm:-bottom-0 sm:-left-5 bg-white rounded-xl p-4 shadow-[0_8px_30px_rgba(13,27,42,0.15)] border border-[rgba(13,27,42,0.08)] z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(13,27,42,0.08)" }}>
                  <span className="text-[#0D1B2A] text-lg">🏛</span>
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] font-medium">Bhubaneswar, Odisha</p>
                  <p className="text-sm font-bold text-[#0D1B2A]" style={{ fontFamily: "Manrope" }}>10 Areas of Work</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
