// src/app/api/contact/route.ts
// Contact form handler — validates input server-side and appends to Google Sheets

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

/* ─────────────────────────────────────────────
   Server-side validation helpers
───────────────────────────────────────────── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  // Allows +91 XXXXX XXXXX, 10-digit, or empty
  return /^(\+91[\s-]?)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ""));
}

/* ─────────────────────────────────────────────
   Google Sheets helper
───────────────────────────────────────────── */
async function appendToSheet(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!email || !rawKey || !sheetId) {
    console.warn(
      "[Contact API] Google Sheets env vars not set — skipping sheet write."
    );
    return;
  }

  // Vercel / env loaders sometimes escape newlines as literal \n
  const privateKey = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "short",
    timeStyle: "medium",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:F",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          timestamp,
          data.name.trim(),
          data.email.trim(),
          data.phone.trim() || "—",
          data.subject,
          data.message.trim(),
        ],
      ],
    },
  });
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

    // ── Append to Google Sheet ──
    await appendToSheet({ name, email, phone: phone ?? "", subject, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API] Error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
