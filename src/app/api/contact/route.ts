// src/app/api/contact/route.ts
// Contact form handler — validates input server-side and forwards to Google Apps Script Web App
// which appends the submission to Google Sheets.
//
// Setup:
//   1. Paste gargi_apps_script_doPost.js into your Google Apps Script editor
//   2. Deploy as Web App → Anyone can access
//   3. Copy the Web App URL into .env.local as GOOGLE_APPS_SCRIPT_URL

import { NextRequest, NextResponse } from "next/server";

/* ─────────────────────────────────────────────
   Server-side validation helpers
───────────────────────────────────────────── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  // Allows +91 XXXXX XXXXX or plain 10-digit Indian mobile
  return /^(\+91[\s-]?)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ""));
}

/* ─────────────────────────────────────────────
   Google Apps Script helper
───────────────────────────────────────────── */
async function sendToAppsScript(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    console.warn(
      "[Contact API] GOOGLE_APPS_SCRIPT_URL not set — skipping sheet write."
    );
    return;
  }

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    // Apps Script redirects — follow them
    redirect: "follow",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Apps Script responded with ${res.status}: ${text}`);
  }

  const result = await res.json();
  if (!result.success) {
    throw new Error(`Apps Script error: ${result.error ?? "unknown"}`);
  }
}

/* ─────────────────────────────────────────────
   POST handler
───────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body ?? {};

    // ── Server-side validation ──
    const errors: Record<string, string> = {};

    if (!name || String(name).trim().length < 2) {
      errors.name = "Full name must be at least 2 characters.";
    }
    if (!email || !isValidEmail(String(email))) {
      errors.email = "Please enter a valid email address.";
    }
    if (!phone || !isValidPhone(String(phone))) {
      errors.phone = "Please enter a valid 10-digit Indian phone number.";
    }
    if (!subject || String(subject).trim() === "") {
      errors.subject = "Please select a subject.";
    }
    if (message && String(message).trim().length > 2000) {
      errors.message = "Message must be under 2000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 });
    }

    // ── Forward to Apps Script → Google Sheet ──
    await sendToAppsScript({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone ?? "").trim(),
      subject: String(subject),
      message: String(message ?? "").trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API] Error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
