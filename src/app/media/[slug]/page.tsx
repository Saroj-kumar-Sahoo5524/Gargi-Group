import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play, Image as ImageIcon, Calendar, Tag } from "lucide-react";
import { areas, getAreaBySlug } from "@/data/areas";
import { getAreaIcon } from "@/lib/icons";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

/* ── Static params ── */
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return { title: "Not Found" };
  return {
    title: `${area.title} Media | Gargi Group`,
    description: `Watch videos and browse photo galleries from Gargi Group's ${area.title} area of work — Bhubaneswar, Odisha.`,
    alternates: { canonical: `${SITE_URL}/media/${area.slug}` },
    openGraph: {
      title: `${area.title} Media | Gargi Group`,
      description: area.description,
      url: `${SITE_URL}/media/${area.slug}`,
      images: [{ url: area.heroImage, width: 1600, height: 900 }],
    },
  };
}

/* ── Dummy gallery images per area (placeholder Unsplash photos) ── */
const galleryImages: Record<string, { src: string; caption: string }[]> = {
  education: [
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=75", caption: "Classroom session" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=75", caption: "Skill development workshop" },
    { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=75", caption: "Youth learning programme" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=75", caption: "Group training session" },
    { src: "https://images.unsplash.com/photo-1555431189-0fabf2667795?w=800&q=75", caption: "Certificate distribution" },
    { src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=75", caption: "Vocational training" },
  ],
  agriculture: [
    { src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=75", caption: "Farm field activities" },
    { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=75", caption: "Farmer community meeting" },
    { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=75", caption: "Harvest season" },
    { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=75", caption: "Sustainable farming" },
    { src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=75", caption: "Rural livelihood support" },
    { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=75", caption: "Allied agri-activities" },
  ],
  hospitality: [
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=75", caption: "Hospitality facility" },
    { src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=75", caption: "Guest experience" },
    { src: "https://images.unsplash.com/photo-1540541338537-41369c768f55?w=800&q=75", caption: "Service training" },
    { src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=75", caption: "Tourism activity" },
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=75", caption: "Heritage site visit" },
    { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=75", caption: "Hospitality workshop" },
  ],
  "real-estate": [
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=75", caption: "Property development" },
    { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75", caption: "Site planning" },
    { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=75", caption: "Residential project" },
    { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=75", caption: "Community infrastructure" },
    { src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=75", caption: "Urban development" },
    { src: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=75", caption: "Land planning" },
  ],
  finance: [
    { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=75", caption: "Financial awareness session" },
    { src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=75", caption: "Business development" },
    { src: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=75", caption: "Economic capacity building" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75", caption: "Financial literacy programme" },
    { src: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=75", caption: "Planning workshop" },
    { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=75", caption: "Community finance meeting" },
  ],
  petrochemical: [
    { src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=75", caption: "Industrial training facility" },
    { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=75", caption: "Safety awareness session" },
    { src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=800&q=75", caption: "Technical skill training" },
    { src: "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=800&q=75", caption: "Industrial capacity building" },
    { src: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=800&q=75", caption: "Workforce development" },
    { src: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&q=75", caption: "Industrial knowledge session" },
  ],
  "community-development": [
    { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=75", caption: "Community gathering" },
    { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=75", caption: "Rural development activity" },
    { src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=75", caption: "Livelihood programme" },
    { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=75", caption: "Social advancement initiative" },
    { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=75", caption: "Community capacity building" },
    { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=75", caption: "Welfare event" },
  ],
  empowerment: [
    { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=75", caption: "Women's skill session" },
    { src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=75", caption: "Youth capacity building" },
    { src: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=800&q=75", caption: "Entrepreneurship workshop" },
    { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=75", caption: "Inclusive opportunity event" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=75", caption: "Self-reliance programme" },
    { src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=75", caption: "Community empowerment" },
  ],
  "charitable-development": [
    { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=75", caption: "Charitable outreach event" },
    { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=75", caption: "Community welfare activity" },
    { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=75", caption: "Development initiative" },
    { src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=75", caption: "Social responsibility event" },
    { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=75", caption: "Compassionate engagement" },
    { src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=75", caption: "Community support activity" },
  ],
  "media-entertainment": [
    { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=75", caption: "Media production setup" },
    { src: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800&q=75", caption: "Cultural storytelling" },
    { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=75", caption: "Entertainment content" },
    { src: "https://images.unsplash.com/photo-1536240478700-b869ad10e2ff?w=800&q=75", caption: "Digital communication" },
    { src: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=800&q=75", caption: "Creative outreach" },
    { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=75", caption: "Media engagement" },
  ],
};

/* ── Page ── */
export default async function MediaAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const Icon = getAreaIcon(area.iconName);
  const images = galleryImages[area.slug] ?? galleryImages["education"];

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: `linear-gradient(135deg, #0D1B2A 0%, #0A1520 60%, ${area.color}22 100%)` }}
        aria-label={`${area.title} media hero`}
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* hero image as bg */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={area.heroImage}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D1B2A 40%, transparent 100%)" }} />
        </div>

        <div className="container-site relative z-10">
          <Breadcrumb
            items={[{ label: "Media", href: "/media" }, { label: area.shortTitle }]}
            variant="dark"
          />

          <div className="mt-10 max-w-3xl">
            {/* area badge */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${area.color}25`, border: `1px solid ${area.color}55` }}
              >
                <Icon size={20} style={{ color: area.color }} aria-hidden="true" />
              </div>
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: `${area.color}20`, color: area.color, border: `1px solid ${area.color}40` }}
              >
                Area {area.number} · Media Gallery
              </span>
            </div>

            <h1
              className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-4"
              style={{ fontFamily: "Manrope" }}
            >
              {area.title}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed italic mb-8">&ldquo;{area.tagline}&rdquo;</p>

            {/* meta pills */}
            <div className="flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
              >
                <Play size={12} />
                1 Featured Video
              </div>
              <div
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
              >
                <ImageIcon size={12} />
                {images.length} Photos
              </div>
              <div
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
              >
                <Tag size={12} />
                {area.shortTitle}
              </div>
              <div
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
              >
                <Calendar size={12} />
                Bhubaneswar, Odisha
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ── Video Section ── */}
      <section
        className="section-padding bg-white"
        aria-labelledby={`video-heading-${area.id}`}
      >
        <div className="container-site">
          <div className="max-w-2xl mb-10">
            <div className="section-label mb-4">Featured Video</div>
            <h2
              id={`video-heading-${area.id}`}
              className="text-[#0D1B2A] text-2xl lg:text-3xl font-bold leading-tight"
              style={{ fontFamily: "Manrope" }}
            >
              {area.title} — Overview
            </h2>
            <p className="text-[#6b7280] mt-3 text-sm leading-relaxed">
              Watch our overview of Gargi Group&apos;s work in {area.shortTitle.toLowerCase()}. This video will be updated with original footage once available.
            </p>
          </div>

          {/* Video embed container */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-4"
            style={{ paddingTop: "56.25%", background: "#0D1B2A" }}
          >
            {/* Dummy video placeholder — swap iframe src for real video when ready */}
            <iframe
              id={`video-embed-${area.slug}`}
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title={`${area.title} — Gargi Group featured video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
          <p className="text-xs text-[#9ca3af] text-center">
            ⚠️ Placeholder video — will be replaced with original Gargi Group content.
          </p>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section
        className="section-padding"
        style={{ background: "#F5F6F7" }}
        aria-labelledby={`gallery-heading-${area.id}`}
      >
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="section-label mb-4">Photo Gallery</div>
              <h2
                id={`gallery-heading-${area.id}`}
                className="text-[#0D1B2A] text-2xl lg:text-3xl font-bold leading-tight"
                style={{ fontFamily: "Manrope" }}
              >
                {area.title} — In Pictures
              </h2>
              <p className="text-[#6b7280] mt-2 text-sm">
                {images.length} photos · Placeholder images — replace with originals.
              </p>
            </div>
            {/* area colour chip */}
            <div
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold self-start sm:self-auto"
              style={{ background: `${area.color}15`, color: area.color, border: `1px solid ${area.color}35` }}
            >
              <Icon size={13} aria-hidden="true" />
              {area.shortTitle}
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {images.map((img, idx) => (
              <figure
                key={idx}
                role="listitem"
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{ background: `linear-gradient(180deg, transparent 40%, ${area.color}CC 100%)` }}
                  >
                    <div className="p-4 w-full">
                      <p className="text-white text-xs font-semibold leading-snug">{img.caption}</p>
                    </div>
                  </div>
                  {/* photo index badge */}
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      color: "#C9A84C",
                      backdropFilter: "blur(6px)",
                      fontFamily: "Manrope",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="px-4 py-3 text-xs text-[#6b7280] font-medium border-t border-[rgba(28,35,48,0.06)]">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-[rgba(28,35,48,0.08)]">
            <Link
              href="/media"
              id={`back-to-media-${area.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1B2A] hover:text-[#C9A84C] transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Media Areas
            </Link>
            <Link
              href={`/areas/${area.slug}`}
              id={`area-link-${area.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1B2A] hover:text-[#C9A84C] transition-colors"
            >
              Learn about {area.shortTitle}
              <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
