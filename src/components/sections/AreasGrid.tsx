"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type AreaData } from "@/data/areas";
import { getAreaIcon } from "@/lib/icons";

interface AreasGridProps {
  areas: AreaData[];
}

export default function AreasGrid({ areas }: AreasGridProps) {
  return (
    <section
      className="section-padding section-gradient-ivory"
      aria-labelledby="areas-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="section-label mb-5">Our Areas of Work</div>
          <h2
            id="areas-heading"
            className="text-[#0D1B2A] mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Ten Sectors. One Vision.
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#374151] leading-relaxed">
            Gargi Group operates across ten distinct areas of work, united by a
            common commitment to responsible development, community advancement
            and long-term opportunity creation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {areas.map((area, i) => {
            const Icon = getAreaIcon(area.iconName);
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="h-full"
              >
                <Link
                  href={`/areas/${area.slug}`}
                  className="card-premium group flex flex-col h-full p-6 cursor-pointer"
                  aria-label={`Learn about ${area.title}`}
                >
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-box group-hover:bg-[rgba(29,82,77,0.15)] transition-colors">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <span className="text-3xl font-bold text-[rgba(13,27,42,0.07)]" style={{ fontFamily: "Manrope" }}>
                      {area.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-[#0D1B2A] font-bold mb-2 text-base leading-tight group-hover:text-[#1A4D3A] transition-colors"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed flex-1 mb-5">
                    {area.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-[#0D1B2A] text-xs font-semibold mt-auto pt-2 border-t border-[rgba(28,35,48,0.08)]">
                    <span>Explore</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-10 text-center">
          <Link href="/areas" className="btn-secondary inline-flex" id="areas-view-all-cta">
            View All Areas
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
