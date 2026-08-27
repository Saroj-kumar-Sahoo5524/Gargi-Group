"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function CareerForm() {
  const [form, setForm] = useState<CareerFormData>({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    // Basic client-side validation
    if (!form.name.trim() || form.name.trim().length < 2) {
      setServerError("Please enter your full name (at least 2 characters).");
      return;
    }
    if (!form.email.trim() || !isValidEmail(form.email)) {
      setServerError("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim()) {
      setServerError("Please tell us about yourself.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || "Not provided",
          subject: `Careers${form.area ? ` — ${form.area}` : ""}`,
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(29,82,77,0.1)" }}>
          <CheckCircle size={32} className="text-[#1D524D]" />
        </div>
        <h3 className="font-bold text-[#1D524D] text-xl mb-2" style={{ fontFamily: "Manrope" }}>Career Enquiry Received</h3>
        <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm">
          Thank you for your interest in working with Gargi Group. We will
          review your enquiry and be in touch when suitable opportunities arise.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Career enquiry form">
      {/* Server-level error banner */}
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

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="career-name" className="form-label">
            Full Name <span aria-label="required" className="text-[#1D524D]">*</span>
          </label>
          <input
            id="career-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="form-input"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="career-email" className="form-label">
            Email Address <span aria-label="required" className="text-[#1D524D]">*</span>
          </label>
          <input
            id="career-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="form-input"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="career-phone" className="form-label">Phone Number</label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            className="form-input"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="career-area" className="form-label">Area of Interest</label>
          <select
            id="career-area"
            name="area"
            className="form-input"
            value={form.area}
            onChange={handleChange}
          >
            <option value="">Select area of interest</option>
            <option value="Education">Education &amp; Skill Development</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Hospitality">Service &amp; Hospitality</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Finance">Finance</option>
            <option value="Community Development">Community Development</option>
            <option value="Empowerment">Empowerment</option>
            <option value="Media">Media &amp; Entertainment</option>
            <option value="Administration">Administration</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="career-message" className="form-label">
          Tell Us About Yourself <span aria-label="required" className="text-[#1D524D]">*</span>
        </label>
        <textarea
          id="career-message"
          name="message"
          required
          rows={5}
          placeholder="Share your background, experience and what kind of opportunity you are looking for..."
          className="form-input resize-none"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <p className="text-xs text-[#6b7280] mb-5">
        By submitting this form you consent to Gargi Group retaining your information
        for recruitment purposes. We respect your privacy.
      </p>

      <button
        type="submit"
        id="career-submit-btn"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            Submit Career Enquiry
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
