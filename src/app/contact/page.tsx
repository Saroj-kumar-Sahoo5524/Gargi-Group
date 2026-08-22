import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Gargi Group | Bhubaneswar, Odisha",
  description:
    "Contact Gargi Group — based in Patrapada, Bhubaneswar, Odisha. Reach out for enquiries about our areas of work, collaboration opportunities or general information.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Gargi Group | Bhubaneswar, Odisha",
    description: "Get in touch with Gargi Group — Patrapada, Bhubaneswar, Odisha – 751019.",
    url: `${SITE_URL}/contact`,
  },
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "Plot No. 46/2163/4108, Lane 2, Infront of Utpal Residency, Patrapada, Bhubaneswar, Odisha – 751019, India",
    isAddress: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "gargigroup007@gmail.com",
    isAddress: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "06744119037 / 7438968674",
    isAddress: false,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sun, 10:00 AM – 7:00 PM",
    isAddress: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Contact page hero"
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Contact" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <div className="section-label-dark mb-4">Get In Touch</div>
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>
              Contact Gargi Group
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We welcome enquiries, collaboration proposals and general
              correspondence. Reach out and we will be in touch.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white" aria-labelledby="contact-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left — Contact info */}
            <div className="lg:col-span-2">
              <div className="section-label mb-5">Contact Information</div>
              <h2 id="contact-heading" className="text-[#0D1B2A] mb-6" style={{ fontFamily: "Manrope", fontSize: "1.75rem" }}>
                Reach Us
              </h2>
              <div className="gold-divider mb-8" />

              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const DIcon = detail.icon;
                  return (
                    <div key={detail.label} className="flex gap-4">
                      <div className="icon-box flex-shrink-0">
                        <DIcon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0D1B2A] uppercase tracking-widest mb-1">{detail.label}</p>
                        {detail.isAddress ? (
                          <address className="not-italic text-sm text-[#374151] leading-relaxed">
                            {detail.value}
                          </address>
                        ) : (
                          <p className="text-sm text-[#374151] leading-relaxed">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Google Map Embed */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[rgba(28,35,48,0.1)] shadow-sm h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.4164035296917!2d85.7628412742163!3d20.241558214352086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9d83c925647%3A0x6d0a1e2b166075ff!2sUTPAL%20RESIDENCY!5e0!3m2!1sen!2sin!4v1787310001113!5m2!1sen!2sin"
                  title="Gargi Group Location — Infront of Utpal Residency, Patrapada, Bhubaneswar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-2xl border border-[rgba(28,35,48,0.1)] shadow-[0_4px_30px_rgba(13,27,42,0.06)] bg-white">
                <h3 className="font-bold text-[#0D1B2A] mb-2" style={{ fontFamily: "Manrope", fontSize: "1.25rem" }}>
                  Send Us a Message
                </h3>
                <p className="text-sm text-[#6b7280] mb-7">
                  Fill in the form below and we will be in touch as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
