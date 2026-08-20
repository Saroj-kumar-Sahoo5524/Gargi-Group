import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const companyLinks = [
  { label: "About Gargi Group", href: "/about" },
  { label: "Our Areas of Work", href: "/areas" },
  { label: "Projects & Initiatives", href: "/projects" },
  { label: "Careers", href: "/careers" },
];

const exploreLinks = [
  { label: "Education & Skill Dev.", href: "/areas/education" },
  { label: "Agriculture", href: "/areas/agriculture" },
  { label: "Service & Hospitality", href: "/areas/hospitality" },
  { label: "Real Estate", href: "/areas/real-estate" },
  { label: "Finance", href: "/areas/finance" },
  { label: "Community Development", href: "/areas/community-development" },
  { label: "Empowerment", href: "/areas/empowerment" },
  { label: "Media & Entertainment", href: "/areas/media-entertainment" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="footer-gradient text-white" role="contentinfo">
      {/* Gold top border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="Gargi Group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <span className="font-bold text-lg text-[#C9A84C]" style={{ fontFamily: "Manrope, sans-serif" }}>G</span>
              </div>
              <div>
                <span className="block font-bold text-white text-base tracking-wide" style={{ fontFamily: "Manrope, sans-serif" }}>GARGI GROUP</span>
                <span className="block text-[0.6rem] tracking-[0.15em] uppercase text-[rgba(201,168,76,0.7)]">Bhubaneswar, Odisha</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              A diversified organization committed to creating sustainable opportunities across business, development, livelihoods and community advancement.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <address className="not-italic text-xs text-white/60 leading-relaxed">
                  Plot No. 46/2163/4108, Lane 2,<br />
                  Infront of Utkal Residency,<br />
                  Patrapada, Bhubaneswar,<br />
                  Odisha – 751019, India
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-xs text-white/60">contact@gargigroup.in <span className="text-white/30">(placeholder)</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-xs text-white/60">To be updated</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-[#C9A84C] mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-[#C9A84C] mb-5">Areas of Work</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & CTA */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-[#C9A84C] mb-5">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Interested in working with Gargi Group?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9A84C] hover:text-white transition-colors group"
              >
                Get in Touch
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-white/40">
            © 2026 Gargi Group. All Rights Reserved.
          </p>
          <p className="text-xs text-white/30">
            Bhubaneswar · Odisha · India
          </p>
        </div>
      </div>
    </footer>
  );
}
