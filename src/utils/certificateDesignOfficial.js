import emblemUrl from "../components/footer/caption/Elonatech icon.png";
import {
  programLabel,
  formatLongDate,
  qrPngDataUrl,
  PROGRAMME_FULL_NAME,
} from "./certificate";

// ── OFFICIAL design: the supplied ETMPDP Core / Ignite PDFs ──────────────
// Drawn in code to match the supplied designs (ETMPDP_Core_… and
// ETMPDP_Ignite_Completion_Certificate_Corrected.pdf), then filled in from the
// certificate record: name, dates, duration, pathway / specialization
// (Ignite), date of issue, QR code and certificate ID.
//
// Used when ACTIVE_DESIGN is "official" in certificateDesign.js (the preview
// and PDF wrappers live there).
//
// Everything is laid out in the design's own units (a 1306-wide page with the
// A4 ratio) and scaled to whatever pixel size is asked for. To move or resize
// something, change its numbers here.

const DW = 1306;
const DH = DW / Math.SQRT2; // A4 landscape ratio

const RED = "#ce1a18"; // company red, from the logo
const BLUE = "#33548f"; // company blue, from the logo
// the frame keeps the colours it had
const FRAME_RED = "#e30b0b";
const FRAME_BLUE = "#36568f";
const GREY = "#a7a9ac";
const NAVY = "#1b2a49";
const MUTED = "#5a6b8c";
const PANEL = "#e6ebf4";
const SANS = 'Arial, Helvetica, sans-serif';
const CX = DW / 2;

const CORE_TEXT = {
  tagline: "BUILD. LEAD. EXCEL.",
  lines: [
    "In recognition of the successful completion of the 12-month Executive Technology Mentorship & Professional Development Program,",
    "a multidisciplinary professional development journey to strengthen technical competence, practical application and professional readiness.",
  ],
};
const IGNITE_TEXT = {
  tagline: "ENTER THE INDUSTRY. BUILD YOUR EDGE.",
  lines: [
    "In recognition of successful completion of the ETMPDP Ignite pathway, a structured professional development experience",
    "designed to bridge academic learning and industry practice through specialization-focused learning, practical exposure, mentorship and professional development.",
  ],
};
const CORE_SPECIALIZATION = "Multidisciplinary exposure across eight professional technology tracks";

// The "Authorized Signatory | Name & Title" line is left for a handwritten
// signature. Set these to print a name and title under/over it instead.
const SIGNATORY = { name: "", title: "" };

const imageCache = new Map();
const loadImage = (src) => {
  if (!imageCache.has(src)) {
    imageCache.set(
      src,
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      })
    );
  }
  return imageCache.get(src);
};

const roundRect = (ctx, x, y, w, h, r) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

const hline = (ctx, x1, x2, y, color, width) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
};

const text = (ctx, str, x, y, { size = 12, color = NAVY, weight = "normal", align = "left" } = {}) => {
  ctx.font = `${weight} ${size}px ${SANS}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.fillText(str, x, y);
};

// Shrinks the font until the text fits, so long names stay on the page
const fitSize = (ctx, str, maxWidth, startSize, weight) => {
  let size = startSize;
  while (size > 14) {
    ctx.font = `${weight} ${size}px ${SANS}`;
    if (ctx.measureText(str).width <= maxWidth) break;
    size -= 1;
  }
  return size;
};

// One row of the shaded panel. A missing value keeps the blank line from the
// design, so the certificate can still be completed by hand.
const infoRow = (ctx, label, value, y, blankWidth) => {
  text(ctx, label, 88, y, { size: 12, color: BLUE, weight: "bold" });
  if (value) {
    text(ctx, value, 207, y, { size: 12 });
  } else {
    hline(ctx, 207, 207 + blankWidth, y + 2, MUTED, 1);
  }
};

const periodRow = (ctx, start, end, y) => {
  text(ctx, "Program period", 88, y, { size: 12, color: BLUE, weight: "bold" });

  text(ctx, "Start date:", 207, y, { size: 12 });
  const startX = 207 + ctx.measureText("Start date: ").width + 2;
  if (start) text(ctx, start, startX, y, { size: 12 });
  else hline(ctx, startX, startX + 135, y + 2, MUTED, 1);

  const endLabelX = 420;
  text(ctx, "Completion date:", endLabelX, y, { size: 12 });
  const endX = endLabelX + ctx.measureText("Completion date: ").width + 2;
  if (end) text(ctx, end, endX, y, { size: 12 });
  else hline(ctx, endX, endX + 135, y + 2, MUTED, 1);
};

// Draws the certificate onto a new canvas. `width` is the pixel width.
export const renderCertificateCanvas = async (cert, { width = 2480 } = {}) => {
  const isIgnite = cert.program === "Ignite";
  const copy = isIgnite ? IGNITE_TEXT : CORE_TEXT;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = Math.round(width / Math.SQRT2);
  const ctx = canvas.getContext("2d");
  ctx.scale(width / DW, width / DW);
  ctx.textBaseline = "alphabetic";

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, DW, DH);

  // — frame —
  ctx.strokeStyle = FRAME_BLUE;
  ctx.lineWidth = 3;
  roundRect(ctx, 31, 31, DW - 62, DH - 62, 26);
  ctx.stroke();
  ctx.strokeStyle = FRAME_RED;
  ctx.lineWidth = 2;
  roundRect(ctx, 44, 44, DW - 88, DH - 88, 18);
  ctx.stroke();

  // — tri-colour bar —
  const barW = (DW - 106) / 3;
  [RED, BLUE, GREY].forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.fillRect(53 + i * barW, 59, barW, 11);
  });

  // — header —
  const emblem = await loadImage(emblemUrl);
  ctx.drawImage(emblem, CX - 41, 83, 82, 82);
  text(ctx, "ELONATECH NIGERIA LIMITED", CX, 188, { size: 21, color: BLUE, weight: "bold", align: "center" });
  text(ctx, PROGRAMME_FULL_NAME.toUpperCase(), CX, 210, { size: 11.5, color: MUTED, align: "center" });
  hline(ctx, 80, DW - 78, 229, RED, 1.5);

  // — title —
  text(ctx, "CERTIFICATE OF COMPLETION", CX, 290, { size: 39, weight: "bold", align: "center" });
  text(ctx, programLabel(cert.program).toUpperCase(), CX, 321, { size: 17, color: RED, weight: "bold", align: "center" });
  text(ctx, "This certificate is proudly presented to", CX, 356, { size: 13.5, color: MUTED, align: "center" });

  // — name —
  const nameSize = fitSize(ctx, cert.fullName, 740, 34, "bold");
  text(ctx, cert.fullName, CX, 398, { size: nameSize, weight: "bold", align: "center" });
  hline(ctx, 257, 1051, 407, NAVY, 1.2);
  hline(ctx, 88, DW - 86, 427, RED, 1.5);

  copy.lines.forEach((line, i) => {
    text(ctx, line, CX, 457 + i * 22, { size: 12.5, align: "center" });
  });

  // — details panel —
  const panelH = isIgnite ? 145 : 119;
  ctx.fillStyle = PANEL;
  roundRect(ctx, 70, 528, DW - 140, panelH, 14);
  ctx.fill();

  let y = 554;
  infoRow(ctx, "Program", programLabel(cert.program), y, 0);
  y += 26.7;
  if (isIgnite) {
    infoRow(ctx, "Pathway level", cert.pathwayLevel, y, 276);
    y += 26.7;
    infoRow(ctx, "Specialization", cert.specialization, y, 276);
  } else {
    infoRow(ctx, "Specialization", CORE_SPECIALIZATION, y, 0);
  }
  y += 26.7;
  infoRow(ctx, "Duration", cert.duration, y, 166);
  y += 26.7;
  periodRow(
    ctx,
    cert.enrollmentDate ? formatLongDate(cert.enrollmentDate) : "",
    formatLongDate(cert.completionDate),
    y
  );

  text(ctx, copy.tagline, CX, 528 + panelH + 36, { size: 13, color: BLUE, weight: "bold", align: "center" });

  // — signatures —
  hline(ctx, 97, 463, 773, BLUE, 1);
  hline(ctx, 511, 877, 773, BLUE, 1);
  text(ctx, "Authorized Signatory | Name & Title", 280, 792, { size: 11, color: MUTED, align: "center" });
  text(ctx, "Date of Issue", 694, 792, { size: 11, color: MUTED, align: "center" });
  if (cert.issueDate) {
    text(ctx, formatLongDate(cert.issueDate), 694, 765, { size: 14, align: "center" });
  }
  if (SIGNATORY.name) {
    text(ctx, SIGNATORY.name, 280, 808, { size: 11, weight: "bold", align: "center" });
    if (SIGNATORY.title) text(ctx, SIGNATORY.title, 280, 822, { size: 10, color: MUTED, align: "center" });
  }

  // — certificate ID —
  const idLabel = "Certificate ID: ";
  ctx.font = `10.5px ${SANS}`;
  const labelW = ctx.measureText(idLabel).width;
  ctx.font = `bold 10.5px ${SANS}`;
  const codeW = ctx.measureText(cert.code).width;
  const startX = CX - (labelW + codeW) / 2;
  text(ctx, idLabel, startX, 836, { size: 10.5, color: MUTED });
  text(ctx, cert.code, startX + labelW, 836, { size: 10.5, color: NAVY, weight: "bold" });

  // — QR code box —
  ctx.strokeStyle = BLUE;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(1087, 695, 134, 133);
  const qr = await loadImage(await qrPngDataUrl(cert.code, 600));
  ctx.fillStyle = "#fff";
  ctx.fillRect(1088, 696, 132, 131);
  ctx.drawImage(qr, 1093, 700, 122, 122);

  return canvas;
};
