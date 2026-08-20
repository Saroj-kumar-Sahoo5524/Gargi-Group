"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
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
            <option value="Education">Education & Skill Development</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Hospitality">Service & Hospitality</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Finance">Finance</option>
            <option value="Community Development">Community Development</option>
            <option value="Empowerment">Empowerment</option>
            <option value="Media">Media & Entertainment</option>
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
        {loading ? "Submitting..." : (
          <>
            Submit Career Enquiry
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
