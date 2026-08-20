"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Areas",
    href: "/areas",
    children: [
      { label: "Education & Skill Development", href: "/areas/education" },
      { label: "Agriculture & Allied Activities", href: "/areas/agriculture" },
      { label: "Service & Hospitality", href: "/areas/hospitality" },
      { label: "Real Estate & Property", href: "/areas/real-estate" },
      { label: "Finance & Financial Services", href: "/areas/finance" },
      { label: "Petrochemical Initiatives", href: "/areas/petrochemical" },
      { label: "Community Development", href: "/areas/community-development" },
      { label: "Women & Youth Empowerment", href: "/areas/empowerment" },
      { label: "Charitable Initiatives", href: "/areas/charitable-development" },
      { label: "Media & Entertainment", href: "/areas/media-entertainment" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white shadow-[0_2px_20px_rgba(13,27,42,0.08)] border-b border-[rgba(13,27,42,0.06)]"
        }`}
        style={{ transition: "background 0.35s ease, box-shadow 0.35s ease" }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Gargi Group Home">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: isTransparent ? "rgba(255,255,255,0.15)" : "#0D1B2A" }}
              >
                <span
                  className="font-bold text-lg leading-none"
                  style={{ color: isTransparent ? "#C9A84C" : "#C9A84C", fontFamily: "Manrope, sans-serif" }}
                >
                  G
                </span>
              </div>
              <div>
                <span
                  className="block font-bold text-base leading-none tracking-wide transition-colors"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    color: isTransparent ? "#fff" : "#0D1B2A",
                  }}
                >
                  GARGI GROUP
                </span>
                <span
                  className="block text-[0.6rem] tracking-[0.15em] uppercase mt-0.5"
                  style={{ color: isTransparent ? "rgba(201,168,76,0.8)" : "#6B7280" }}
                >
                  Bhubaneswar, Odisha
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setAreasOpen(true)}
                    onMouseLeave={() => setAreasOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 font-medium text-sm transition-colors ${
                        isTransparent
                          ? "text-white/85 hover:text-white"
                          : "text-[#1C2330] hover:text-[#0D1B2A]"
                      }`}
                      aria-expanded={areasOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${areasOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {areasOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-[0_20px_60px_rgba(13,27,42,0.15)] border border-[rgba(13,27,42,0.08)] overflow-hidden"
                        >
                          <div className="p-2">
                            <Link
                              href="/areas"
                              className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#0D1B2A] bg-[rgba(13,27,42,0.05)] rounded-lg mb-1 hover:bg-[rgba(13,27,42,0.1)] transition-colors"
                            >
                              All Areas of Work
                              <ArrowRight size={14} />
                            </Link>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center px-4 py-2.5 text-sm text-[#374151] hover:text-[#0D1B2A] hover:bg-[rgba(13,27,42,0.04)] rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium text-sm transition-colors relative group ${
                      isTransparent
                        ? "text-white/85 hover:text-white"
                        : "text-[#1C2330] hover:text-[#0D1B2A]"
                    } ${pathname === link.href ? (isTransparent ? "text-white" : "text-[#0D1B2A]") : ""}`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#C9A84C] transition-all duration-250 ${
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              )}
              <Link
                href="/contact"
                id="header-cta"
                className="btn-primary text-sm !py-2.5 !px-5"
                style={{ background: isTransparent ? "rgba(255,255,255,0.12)" : "#0D1B2A", border: isTransparent ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent" }}
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: isTransparent ? "#fff" : "#0D1B2A" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-nav-overlay lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-2xl flex flex-col"
              aria-label="Mobile navigation"
              role="dialog"
              aria-modal="true"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(13,27,42,0.1)]">
                <span className="font-bold text-[#0D1B2A]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  GARGI GROUP
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-[#1C2330] hover:bg-[rgba(13,27,42,0.06)] transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-[#1C2330] hover:text-[#0D1B2A] hover:bg-[rgba(13,27,42,0.05)] rounded-xl transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform text-[#6B7280] ${mobileAreasOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAreasOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center px-4 py-2.5 text-sm text-[#374151] hover:text-[#0D1B2A] hover:bg-[rgba(13,27,42,0.04)] rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                        pathname === link.href
                          ? "text-[#0D1B2A] bg-[rgba(13,27,42,0.07)]"
                          : "text-[#1C2330] hover:text-[#0D1B2A] hover:bg-[rgba(13,27,42,0.05)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 py-5 border-t border-[rgba(13,27,42,0.1)]">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                  id="mobile-header-cta"
                >
                  Get in Touch
                </Link>
                <p className="text-center text-xs text-[#6B7280] mt-3">
                  Gargi Group — Bhubaneswar, Odisha
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
