import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({ items, variant = "light" }: BreadcrumbProps) {
  const textColor = variant === "dark" ? "text-white/60 hover:text-white" : "text-[#6B7280] hover:text-[#0D1B2A]";
  const separatorColor = variant === "dark" ? "text-white/30" : "text-[#D1D5DB]";
  const currentColor = variant === "dark" ? "text-[#C9A84C]" : "text-[#0D1B2A]";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
      <Link
        href="/"
        className={`flex items-center gap-1 text-xs font-medium transition-colors ${textColor}`}
        aria-label="Home"
      >
        <Home size={12} aria-hidden="true" />
        <span>Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={11} className={separatorColor} aria-hidden="true" />
          {item.href && i < items.length - 1 ? (
            <Link
              href={item.href}
              className={`text-xs font-medium transition-colors ${textColor}`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`text-xs font-semibold ${currentColor}`}
              aria-current={i === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
