import logoUrl from "../components/navbar/captions/elonatech.png";
import {
  programLabel,
  formatLongDate,
  verifyUrl,
  qrPngDataUrl,
  PROGRAMME_FULL_NAME,
} from "./certificate";

// ── CLASSIC design: the in-house certificate ─────────────────────────────
// Navy header band with the logo, a gold-and-colour frame, serif lettering,
// the QR code and certificate ID at the bottom left and a signature line at
// the bottom right. Core is drawn in red, Ignite in blue.
//
// Everything is laid out on a fixed A4-landscape canvas at 300 dpi, then
// scaled to whatever pixel size is requested.

const W = 2480;
const H = 1754;

const THEMES = {
  Core: { accent: "#c23a34" },
  Ignite: { accent: "#34548c" },
};
const NAVY = "#11253d";
const GOLD = "#b8964e";
const INK = "#1f2937";
const MUTED = "#6b7280";
const SERIF = 'Georgia, "Times New Roman", serif';
const MONO = 'Consolas, "Courier New", monospace';

const LAYOUT = {
  qr: { x: 190, y: 1385, size: 250 },
  signature: { right: W - 190, width: 560, y: 1560 },
};

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

// Centered text with manual letter-spacing (ctx.letterSpacing isn't
// supported everywhere).
const spaced = (ctx, text, cx, y, spacing) => {
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
  let x = cx - total / 2;
  const align = ctx.textAlign;
  ctx.textAlign = "left";
  chars.forEach((c, i) => {
    ctx.fillText(c, x, y);
    x += widths[i] + spacing;
  });
  ctx.textAlign = align;
};

// Shrinks the font until the text fits the width, so long names stay on the page
const fitFont = (ctx, text, maxWidth, startSize, family, style = "") => {
  let size = startSize;
  do {
    ctx.font = `${style} ${size}px ${family}`.trim();
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 4;
  } while (size > 40);
  return size;
};

const drawFrame = (ctx, theme) => {
  ctx.fillStyle = "#fffdf9";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 12;
  ctx.strokeRect(48, 48, W - 96, H - 96);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 3;
  ctx.strokeRect(84, 84, W - 168, H - 168);

  // corner squares
  ctx.fillStyle = GOLD;
  [[84, 84], [W - 84, 84], [84, H - 84], [W - 84, H - 84]].forEach(([x, y]) => {
    ctx.fillRect(x - 14, y - 14, 28, 28);
  });
};

const drawHeader = async (ctx, theme) => {
  ctx.fillStyle = NAVY;
  ctx.fillRect(90, 90, W - 180, 270);
  ctx.fillStyle = theme.accent;
  ctx.fillRect(90, 360, W - 180, 16);

  // The logo has white lettering, so it sits on the navy band
  const logo = await loadImage(logoUrl);
  const h = 190;
  const w = (logo.width / logo.height) * h;
  ctx.drawImage(logo, (W - w) / 2, 90 + (270 - h) / 2, w, h);
};

const drawSeal = (ctx, theme, cx, cy) => {
  ctx.fillStyle = theme.accent;
  ctx.beginPath();
  ctx.arc(cx, cy, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(cx, cy, 86, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.font = `bold 38px ${SERIF}`;
  ctx.fillText("ETMPDP", cx, cy + 4);
  ctx.font = `24px ${SERIF}`;
  ctx.fillText("CERTIFIED", cx, cy + 40);
};

// Draws the certificate onto a new canvas. `width` scales the whole thing.
export const renderCertificateCanvas = async (cert, { width = W } = {}) => {
  const theme = THEMES[cert.program] || THEMES.Core;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = Math.round((width * H) / W);
  const ctx = canvas.getContext("2d");
  ctx.scale(width / W, width / W);
  ctx.textBaseline = "alphabetic";

  // — background —
  drawFrame(ctx, theme);
  await drawHeader(ctx, theme);

  // — title —
  ctx.textAlign = "center";
  ctx.fillStyle = NAVY;
  ctx.font = `bold 150px ${SERIF}`;
  spaced(ctx, "CERTIFICATE", W / 2, 590, 14);
  ctx.fillStyle = theme.accent;
  ctx.font = `44px ${SERIF}`;
  spaced(ctx, "OF COMPLETION", W / 2, 670, 18);

  ctx.fillStyle = MUTED;
  ctx.font = `italic 46px ${SERIF}`;
  ctx.fillText("This certificate is proudly presented to", W / 2, 810);

  // — name —
  ctx.fillStyle = INK;
  fitFont(ctx, cert.fullName, 1900, 140, SERIF, "italic bold");
  ctx.fillText(cert.fullName, W / 2, 960);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 700, 1000);
  ctx.lineTo(W / 2 + 700, 1000);
  ctx.stroke();

  // — programme —
  ctx.fillStyle = MUTED;
  ctx.font = `44px ${SERIF}`;
  ctx.fillText("for successfully completing the", W / 2, 1085);
  ctx.fillStyle = theme.accent;
  ctx.font = `bold 92px ${SERIF}`;
  ctx.fillText(programLabel(cert.program), W / 2, 1185);
  ctx.fillStyle = INK;
  ctx.font = `38px ${SERIF}`;
  ctx.fillText(PROGRAMME_FULL_NAME, W / 2, 1250);

  // — dates —
  ctx.fillStyle = MUTED;
  ctx.font = `36px ${SERIF}`;
  const dates = [
    cert.enrollmentDate && `Enrolled ${formatLongDate(cert.enrollmentDate)}`,
    `Completed ${formatLongDate(cert.completionDate)}`,
  ].filter(Boolean);
  ctx.fillText(dates.join("   •   "), W / 2, 1325);

  // — seal —
  drawSeal(ctx, theme, W / 2, 1530);

  // — QR + ID (bottom left) —
  const { x, y, size } = LAYOUT.qr;
  const qr = await loadImage(await qrPngDataUrl(cert.code, 600));
  ctx.fillStyle = "#fff";
  ctx.fillRect(x - 14, y - 14, size + 28, size + 28);
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 14, y - 14, size + 28, size + 28);
  ctx.drawImage(qr, x, y, size, size);

  ctx.textAlign = "left";
  ctx.fillStyle = NAVY;
  ctx.font = `bold 34px ${SERIF}`;
  ctx.fillText("Scan to verify", x + size + 50, y + 70);
  ctx.fillStyle = MUTED;
  ctx.font = `28px ${SERIF}`;
  ctx.fillText("Certificate ID", x + size + 50, y + 130);
  ctx.fillStyle = INK;
  ctx.font = `bold 34px ${MONO}`;
  ctx.fillText(cert.code, x + size + 50, y + 175);
  ctx.fillStyle = MUTED;
  ctx.font = `26px ${SERIF}`;
  ctx.fillText(verifyUrl(cert.code).replace("https://", ""), x + size + 50, y + 225);

  // — signature (bottom right) —
  const sig = LAYOUT.signature;
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(sig.right - sig.width, sig.y);
  ctx.lineTo(sig.right, sig.y);
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.fillStyle = INK;
  ctx.font = `bold 34px ${SERIF}`;
  ctx.fillText("Authorised Signature", sig.right - sig.width / 2, sig.y + 50);
  ctx.fillStyle = MUTED;
  ctx.font = `30px ${SERIF}`;
  ctx.fillText("Elonatech Nigeria Limited", sig.right - sig.width / 2, sig.y + 94);

  return canvas;
};
