import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use | Gargi Group",
  description: "Terms of Use for the Gargi Group website.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-16"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Terms of Use hero"
      >
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Terms of Use" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>Terms of Use</h1>
            <p className="text-white/70">Last updated: August 2026</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl prose-brand">
            <p>
              By accessing and using the Gargi Group website, you agree to these
              Terms of Use. Please read them carefully. If you do not agree with
              these terms, please do not use this website.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              Use of this website constitutes acceptance of these Terms of Use
              and our Privacy Policy. These terms may be updated at any time
              without prior notice.
            </p>

            <h2>Website Content</h2>
            <p>
              All content on this website is provided for general informational
              purposes only. Gargi Group makes reasonable efforts to ensure
              accuracy but does not warrant that all information is complete,
              accurate or up to date.
            </p>
            <p>
              Content on this website does not constitute legal, financial,
              investment or professional advice of any kind.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos and design
              — is the property of Gargi Group unless otherwise stated. Reproduction,
              distribution or use without prior written permission is prohibited.
            </p>

            <h2>Limitations of Liability</h2>
            <p>
              Gargi Group shall not be liable for any loss or damage arising from
              the use of, or inability to use, this website or its content. This
              website is provided &ldquo;as is&rdquo; without warranties of any kind.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. Gargi Group
              is not responsible for the content, accuracy or practices of
              third-party sites.
            </p>

            <h2>Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use this website for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to any part of the site</li>
              <li>Transmit harmful, offensive or misleading content</li>
              <li>Use automated tools to scrape or collect data from this site</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These Terms of Use are governed by the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of courts in
              Bhubaneswar, Odisha.
            </p>

            <h2>Contact</h2>
            <p>
              For enquiries regarding these Terms of Use, please contact Gargi
              Group at our registered address: Plot No. 46/2163/4108, Lane 2,
              Infront of Utpal Residency, Patrapada, Bhubaneswar, Odisha – 751019, India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
