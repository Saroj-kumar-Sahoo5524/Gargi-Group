import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Gargi Group",
  description: "Privacy Policy of Gargi Group — how we collect, use and protect your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-16"
        style={{ background: "linear-gradient(135deg, #0D1B2A, #0A1520)" }}
        aria-label="Privacy Policy hero"
      >
        <div className="container-site relative z-10">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} variant="dark" />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Manrope" }}>Privacy Policy</h1>
            <p className="text-white/70">Last updated: August 2026</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl prose-brand">
            <p>
              Gargi Group (&ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;the Group&rdquo;) is committed to protecting the
              privacy and personal information of all individuals who interact with
              our website and communications. This Privacy Policy outlines how we
              collect, use, store and protect your information.
            </p>

            <h2>Information We Collect</h2>
            <p>When you contact us or submit a form on our website, we may collect:</p>
            <ul>
              <li>Your name and contact details (email, phone)</li>
              <li>The subject and content of your enquiry</li>
              <li>Technical information such as browser type and IP address</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul>
              <li>Respond to your enquiries and communications</li>
              <li>Process career enquiries and applications</li>
              <li>Improve our website and services</li>
              <li>Comply with applicable legal obligations</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>
              Gargi Group does not sell, rent or trade your personal information
              to third parties. We may share information with trusted service
              providers strictly for the purpose of operating our website and
              responding to enquiries, subject to confidentiality obligations.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary for
              the purposes for which it was collected, or as required by applicable law.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion
              of your personal information held by us. To exercise these rights,
              please contact us using the details on our Contact page.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar technologies for functionality
              and analytics purposes. You can manage cookie preferences through your
              browser settings.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable steps to protect personal information from
              unauthorised access, use or disclosure. However, no internet transmission
              is entirely secure.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related queries, please contact Gargi Group at our
              registered address: Plot No. 46/2163/4108, Lane 2, Infront of
              Utpal Residency, Patrapada, Bhubaneswar, Odisha – 751019, India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
