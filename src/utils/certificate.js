import QRCode from "qrcode";

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

// "M" error correction survives a scuffed print; margin 2 is the quiet zone
// scanners need around the code.
const QR_OPTIONS = { errorCorrectionLevel: "M", margin: 2 };

export const qrPngDataUrl = (code, width = 1024) =>
  QRCode.toDataURL(verifyUrl(code), { ...QR_OPTIONS, width });

export const qrSvgString = (code) =>
  QRCode.toString(verifyUrl(code), { ...QR_OPTIONS, type: "svg" });

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
