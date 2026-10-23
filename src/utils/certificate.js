// The QR code on a printed certificate must keep working for years, so the
// link it holds is always the real site address. It is deliberately NOT built
// from window.location, or a QR made while testing on localhost or a preview
// URL would print a link that dies.
export const SITE_URL = "https://elonatech.com.ng";

export const verifyUrl = (code) => `${SITE_URL}/verify/${code}`;

export const PROGRAMS = ["Core", "Ignite"];

export const programLabel = (program) => `ETMPDP ${program}`;

// As printed on the certificate designs
export const PROGRAMME_FULL_NAME = "Executive Technology Mentorship & Professional Development Program";

// The choices the admin picks from. Taken from the ETMPDP Core and Ignite
// pages and the Ignite application form, so a certificate says exactly what
// the website says. If those pages change, change these lists to match.
export const SPECIALIZATIONS = [
  "Software Engineering",
  "Graphics, Motion Graphics & Brand Design",
  "Digital Marketing & Content Strategy",
  "IT Support, Networking & Infrastructure",
  "Computer Engineering",
  "Virtual Assistance & Digital Operations",
  "Data Analytics & Business Intelligence",
  "Cybersecurity & Information Security",
];

// Ignite pathway levels, each with its fixed length
export const IGNITE_PATHWAYS = [
  { label: "Ignite Foundation", duration: "3 months" },
  { label: "Ignite Professional", duration: "4 months" },
  { label: "Ignite Executive", duration: "6 months" },
];

// Core is a single 12-month programme
export const CORE_DURATION = "12 months";

// What every Core participant covers (the same for everyone). The wording is
// exactly what the server prints on the Core certificate
// (Elonatech-Live-api/lib/certificateRenderer.js), so the verify page matches it.
export const CORE_SUMMARY = "Multidisciplinary exposure across eight professional technology tracks";
export const CORE_TRACKS = [
  "Software Engineering",
  "Graphics & Brand Design",
  "Digital Marketing",
  "IT & Networking",
  "Computer Engineering",
  "Virtual Assistance",
  "Data Analytics",
  "Cybersecurity",
];

export const DURATIONS = ["3 months", "4 months", "6 months", "12 months"];

// What the duration should be for a given programme / pathway level
export const defaultDuration = (program, pathwayLevel) => {
  if (program === "Core") return CORE_DURATION;
  return IGNITE_PATHWAYS.find((p) => p.label === pathwayLevel)?.duration || "";
};

// Dates are stored as midnight UTC, so format them in UTC too — otherwise a
// visitor west of Greenwich would see the day before.
export const formatLongDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : "";

export const formatShortDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : "—";

// Value for <input type="date">
export const toDateInput = (iso) => (iso ? new Date(iso).toISOString().slice(0, 10) : "");

export const safeFileName = (text) =>
  String(text || "")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);

export const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const dataUrlToBlob = async (dataUrl) => (await fetch(dataUrl)).blob();

// LinkedIn's "add certification" form, pre-filled.
export const linkedInAddUrl = ({ code, program, completionDate }) => {
  const d = new Date(completionDate);
  const params = new URLSearchParams({
    startTask: "CERTIFICATION_NAME",
    name: `${programLabel(program)} Certificate`,
    organizationName: "Elonatech Nigeria Limited",
    issueYear: String(d.getUTCFullYear()),
    issueMonth: String(d.getUTCMonth() + 1),
    certUrl: verifyUrl(code),
    certId: code,
  });
  return `https://www.linkedin.com/profile/add?${params.toString()}`;
};
