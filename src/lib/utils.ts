// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gargigroup.in";
export const COMPANY_NAME = "Gargi Group";
export const COMPANY_TAGLINE = "Building Opportunities. Creating Impact. Shaping Tomorrow.";
export const COMPANY_ADDRESS =
  "Plot No. 46/2163/4108, Lane 2, Infront of Utkal Residency, Patrapada, Bhubaneswar, Odisha – 751019, India";
export const COMPANY_CITY = "Bhubaneswar";
export const COMPANY_STATE = "Odisha";
export const COMPANY_COUNTRY = "India";
export const COMPANY_PINCODE = "751019";
