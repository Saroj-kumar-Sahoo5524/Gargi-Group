"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=85"
          alt="Bhubaneswar Odisha skyline representing modern development and growth"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Deep green overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Subtle gold geometric accent */}
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label-dark mb-8"
          >
            Gargi Group · Bhubaneswar, Odisha
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white font-bold leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            Building Opportunities.{" "}
            <span style={{ color: "#C9A84C" }}>Creating Impact.</span>{" "}
            Shaping Tomorrow.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/75 max-w-2xl leading-relaxed mb-10"
          >
            Gargi Group is a diversified organization committed to creating
            sustainable opportunities across business, development, livelihoods
            and community advancement.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link href="/about" className="btn-primary w-full sm:w-auto justify-center sm:justify-start" id="hero-explore-cta">
              Explore Gargi Group
              <ArrowRight size={16} />
            </Link>
            <Link href="/areas" className="btn-ghost-white w-full sm:w-auto justify-center sm:justify-start" id="hero-areas-cta">
              Our Areas of Work
            </Link>
          </motion.div>

          {/* Address badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex items-center gap-3"
          >
            <div className="w-8 h-px" style={{ background: "rgba(201,168,76,0.5)" }} />
            <span className="text-xs text-white/50 tracking-wide">
              Patrapada, Bhubaneswar, Odisha – 751019
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
