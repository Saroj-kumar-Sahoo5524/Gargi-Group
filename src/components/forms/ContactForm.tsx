"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type TouchedFields = Partial<Record<keyof FormData, boolean>>;

/* ─────────────────────────────────────────────
   Client-side validators (mirror server rules)
───────────────────────────────────────────── */
function validateField(name: keyof FormData, value: string): string {
  switch (name) {
    case "name":
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      if (value.trim().length > 100) return "Name must be under 100 characters.";
      return "";

    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return "Please enter a valid email address.";
      return "";

    case "phone":
      if (!value.trim()) return "Phone number is required.";
      if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(value.replace(/\s/g, "")))
        return "Enter a valid 10-digit Indian mobile number.";
      return "";

    case "subject":
      if (!value) return "Please select a subject.";
      return "";

    case "message":
      if (!value.trim()) return ""; // optional
      if (value.trim().length > 2000) return "Message must be under 2000 characters.";
      return "";

    default:
      return "";
  }
}

function validateAll(form: FormData): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(form) as (keyof FormData)[]).forEach((key) => {
    const msg = validateField(key, form[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

/* ─────────────────────────────────────────────
   Sub-component: Field error message
───────────────────────────────────────────── */
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="flex items-start gap-1.5 mt-1.5 text-xs font-medium"
      style={{ color: "#DC2626" }}
    >
      <AlertCircle size={13} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
      {message}
    </p>
  );
}

/* ─────────────────────────────────────────────
   Input class builder
───────────────────────────────────────────── */
function inputClass(error?: string, touched?: boolean): string {
  const base = "form-input transition-all duration-200";
  if (touched && error) return `${base} border-[#DC2626] focus:border-[#DC2626] focus:shadow-[0_0_0_3px_rgba(220,38,38,0.12)]`;
  if (touched && !error) return `${base} border-[#16A34A] focus:border-[#0D1B2A]`;
  return base;
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  /* ── Real-time validation on change ── */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const key = name as keyof FormData;

      setForm((prev) => ({ ...prev, [key]: value }));

      // Only show real-time error if field was already touched
      setErrors((prev) => ({
        ...prev,
        [key]: touched[key] ? validateField(key, value) : prev[key],
      }));
    },
    [touched]
  );

  /* ── Mark field as touched on blur → run validation immediately ── */
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const key = e.target.name as keyof FormData;
      setTouched((prev) => ({ ...prev, [key]: true }));
      setErrors((prev) => ({
        ...prev,
        [key]: validateField(key, form[key]),
      }));
    },
    [form]
  );

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    // Touch all fields to show all errors
    const allTouched: TouchedFields = {
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    const allErrors = validateAll(form);
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else if (res.status === 422 && data.errors) {
        // Server returned field-level errors
        setErrors(data.errors);
      } else {
        setServerError(
          data.message || "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setServerError("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: "rgba(22,163,74,0.1)" }}
        >
          <CheckCircle size={32} className="text-[#16A34A]" />
        </div>
        <h3
          className="font-bold text-[#0D1B2A] text-xl mb-2"
          style={{ fontFamily: "Manrope" }}
        >
          Message Sent Successfully
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm">
          Thank you for reaching out to Gargi Group. We have received your message
          and will be in touch as soon as possible.
        </p>
        <button
          onClick={() => { setForm(EMPTY_FORM); setErrors({}); setTouched({}); setSubmitted(false); }}
          className="mt-6 text-xs font-semibold text-[#1D524D] underline underline-offset-4 hover:text-[#0D1B2A] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const msgLen = form.message.trim().length;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">

      {/* ── Server-level error banner ── */}
      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 mb-6 rounded-xl text-sm font-medium"
          style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.25)", color: "#DC2626" }}
        >
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          {serverError}
        </div>
      )}

      {/* ── Row 1: Name + Email ── */}
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name <span aria-label="required" style={{ color: "#DC2626" }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass(errors.name, touched.name)}
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.name && touched.name ? "error-name" : undefined}
            aria-invalid={!!errors.name && touched.name}
          />
          <div id="error-name"><FieldError message={touched.name ? errors.name : undefined} /></div>
        </div>

        <div>
          <label htmlFor="contact-email" className="form-label">
            Email Address <span aria-label="required" style={{ color: "#DC2626" }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClass(errors.email, touched.email)}
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.email && touched.email ? "error-email" : undefined}
            aria-invalid={!!errors.email && touched.email}
          />
          <div id="error-email"><FieldError message={touched.email ? errors.email : undefined} /></div>
        </div>
      </div>

      {/* ── Row 2: Phone + Subject ── */}
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone Number <span aria-label="required" style={{ color: "#DC2626" }}>*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass(errors.phone, touched.phone)}
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.phone && touched.phone ? "error-phone" : undefined}
            aria-invalid={!!errors.phone && touched.phone}
          />
          <div id="error-phone"><FieldError message={touched.phone ? errors.phone : undefined} /></div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="form-label">
            Subject <span aria-label="required" style={{ color: "#DC2626" }}>*</span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            className={inputClass(errors.subject, touched.subject)}
            value={form.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.subject && touched.subject ? "error-subject" : undefined}
            aria-invalid={!!errors.subject && touched.subject}
          >
            <option value="">Select a subject</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Business Collaboration">Business Collaboration</option>
            <option value="Education & Skill Development">Education & Skill Development</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Hospitality">Service & Hospitality</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Finance">Finance</option>
            <option value="Community Development">Community Development</option>
            <option value="Empowerment">Empowerment</option>
            <option value="Media & Entertainment">Media & Entertainment</option>
            <option value="Careers">Careers</option>
            <option value="Media Enquiry">Media Enquiry</option>
            <option value="Other">Other</option>
          </select>
          <div id="error-subject"><FieldError message={touched.subject ? errors.subject : undefined} /></div>
        </div>
      </div>

      {/* ── Message ── */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="contact-message" className="form-label" style={{ marginBottom: 0 }}>
            Message
            <span className="ml-1 text-[0.7rem] font-normal text-[#9CA3AF]">(optional)</span>
          </label>
          <span
            className="text-xs tabular-nums"
            style={{ color: msgLen > 1800 ? "#DC2626" : "#9CA3AF" }}
          >
            {msgLen}/2000
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Please share your enquiry, query or message here... (optional)"
          className={`${inputClass(errors.message, touched.message)} resize-none`}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors.message && touched.message ? "error-message" : undefined}
          aria-invalid={!!errors.message && touched.message}
        />
        <div id="error-message"><FieldError message={touched.message ? errors.message : undefined} /></div>
      </div>

      {/* ── Consent notice ── */}
      <p className="text-xs text-[#6b7280] mb-5 leading-relaxed">
        By submitting this form, you consent to Gargi Group contacting you in
        response to your enquiry. We respect your privacy and will not share your
        information with third parties.
      </p>

      {/* ── Submit button ── */}
      <button
        type="submit"
        id="contact-submit-btn"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send size={15} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
