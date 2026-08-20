import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
    >
      <div className="text-center px-6 py-20">
        <div
          className="w-24 h-24 rounded-2xl mx-auto mb-8 flex items-center justify-center"
          style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <span className="text-5xl font-bold text-[#C9A84C]" style={{ fontFamily: "Manrope" }}>
            404
          </span>
        </div>
        <h1 className="text-white font-bold mb-4 text-4xl" style={{ fontFamily: "Manrope" }}>
          Page Not Found
        </h1>
        <p className="text-white/65 text-lg leading-relaxed max-w-md mx-auto mb-10">
          The page you are looking for could not be found. It may have been
          moved or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary !bg-white !text-[#0D1B2A]">
            <Home size={16} />
            Return Home
          </Link>
          <Link href="/contact" className="btn-ghost-white">
            Contact Us
          </Link>
        </div>
        <p className="mt-10 text-xs text-white/30 tracking-wide">
          GARGI GROUP · BHUBANESWAR, ODISHA
        </p>
      </div>
    </div>
  );
}
