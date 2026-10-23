import emblemUrl from "../components/footer/caption/Elonatech icon.png";
import {
  programLabel,
  formatLongDate,
  verifyUrl,
  qrPngDataUrl,
  PROGRAMME_FULL_NAME,
  CORE_AREAS,
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
  // accent = the border colour (unchanged); brand = the company red / blue from
  // the logo, used for everything else that is coloured
  Core: { accent: "#c23a34", brand: "#ce1a18" },
  Ignite: { accent: "#34548c", brand: "#33548f" },
};
const NAVY = "#11253d";
const GOLD = "#b8964e";
const INK = "#1f2937";
const MUTED = "#6b7280";
const SERIF = 'Georgia, "Times New Roman", serif';
const SANS = "Arial, Helvetica, sans-serif";
const BRAND_BLUE = "#33548f"; // the company blue, from the logo
const MONO = 'Consolas, "Courier New", monospace';

const LAYOUT = {
  qr: { x: 190, y: 1420, size: 220 },
  signature: { right: W - 190, width: 560, y: 1520 },
};

// The "program details" block under the dates. Core lists the development
// areas (the same for everyone); Ignite lists the person's own pathway level,
// specialization and duration from their record.
const CORE_CLOSING =
  "Integrated development in practical application, executive mentorship, leadership, business awareness and responsible AI.";
const IGNITE_CLOSING =
  "Specialization-focused learning, practical exposure, mentorship and professional development.";
const DETAILS_LEFT = 300;
const DETAILS_RIGHT = W - 300;

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

// Header: the emblem (no lettering), then the company name and the
// programme name, centred, with a gold rule and a small accent diamond under it.
const drawHeader = async (ctx, theme) => {
  const emblem = await loadImage(emblemUrl);
  const size = 180;
  ctx.drawImage(emblem, (W - size) / 2, 100, size, size);

  ctx.textAlign = "center";
  ctx.fillStyle = BRAND_BLUE;
  ctx.font = `bold 64px ${SANS}`;
  spaced(ctx, "ELONATECH NIGERIA LIMITED", W / 2, 352, 6);

  ctx.fillStyle = NAVY;
  ctx.font = `40px ${SANS}`;
  ctx.fillText(PROGRAMME_FULL_NAME, W / 2, 408);

  // rule with a diamond in the middle
  const y = 446;
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 560, y);
  ctx.lineTo(W / 2 - 24, y);
  ctx.moveTo(W / 2 + 24, y);
  ctx.lineTo(W / 2 + 560, y);
  ctx.stroke();
  ctx.fillStyle = theme.brand;
  ctx.beginPath();
  ctx.moveTo(W / 2, y - 13);
  ctx.lineTo(W / 2 + 13, y);
  ctx.lineTo(W / 2, y + 13);
  ctx.lineTo(W / 2 - 13, y);
  ctx.closePath();
  ctx.fill();
};

// Left-aligned text with letter-spacing (spaced() above centres its text)
const spacedLeft = (ctx, text, x, y, spacing) => {
  const align = ctx.textAlign;
  ctx.textAlign = "left";
  let cursor = x;
  [...text].forEach((c) => {
    ctx.fillText(c, cursor, y);
    cursor += ctx.measureText(c).width + spacing;
  });
  ctx.textAlign = align;
};

// Rows of "Label:  value", with the values lined up in one column (Ignite).
const drawRows = (ctx, rows, startY, lineHeight) => {
  ctx.textAlign = "left";
  ctx.font = `bold 28px ${SANS}`;
  const labelWidth = Math.max(...rows.map(([label]) => ctx.measureText(label).width));
  const textX = DETAILS_LEFT + labelWidth + 34;

  rows.forEach(([label, value], i) => {
    const y = startY + i * lineHeight;
    ctx.fillStyle = NAVY;
    ctx.font = `bold 28px ${SANS}`;
    ctx.fillText(label, DETAILS_LEFT, y);

    ctx.fillStyle = INK;
    fitFont(ctx, value, DETAILS_RIGHT - textX, 30, SERIF);
    ctx.fillText(value, textX, y);
  });
};

// Breaks text into lines no wider than maxWidth (uses the current font)
const wrapLines = (ctx, text, maxWidth) => {
  const lines = [];
  let line = "";
  text.split(" ").forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(test).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  return lines;
};

// Core: the four groups as a two-by-two grid. Small, tidy text, so the header
// above can be larger.
const GRID_GAP = 60;
const GRID_COL = (DETAILS_RIGHT - DETAILS_LEFT - GRID_GAP) / 2;
const drawCoreGrid = (ctx) => {
  ctx.fillStyle = NAVY;
  ctx.font = `bold 24px ${SANS}`;
  spacedLeft(ctx, "PROGRAM DEVELOPMENT AREAS", DETAILS_LEFT, 1078, 4);

  CORE_AREAS.forEach(([label, text], i) => {
    const x = DETAILS_LEFT + (i % 2) * (GRID_COL + GRID_GAP);
    const y = 1122 + Math.floor(i / 2) * 104;

    ctx.textAlign = "left";
    ctx.fillStyle = NAVY;
    ctx.font = `bold 22px ${SANS}`;
    ctx.fillText(label.replace(/:$/, ""), x, y);

    ctx.fillStyle = INK;
    ctx.font = `25px ${SERIF}`;
    wrapLines(ctx, text, GRID_COL).forEach((line, n) => {
      ctx.fillText(line, x, y + 30 + n * 29);
    });
  });
};

const RULE_Y = 1318; // gold rule above the closing sentence (same on both programmes)

const drawDetails = (ctx, cert) => {
  const isIgnite = cert.program === "Ignite";

  if (isIgnite) {
    const rows = [
      ["Pathway level:", cert.pathwayLevel],
      ["Primary specialization:", cert.specialization],
      ["Duration:", cert.duration],
    ].filter(([, value]) => value);

    if (rows.length) {
      // anchored to the rule, so a shorter list sits lower instead of leaving a gap below
      const lineHeight = 60;
      const lastRowY = RULE_Y - 40;
      const firstRowY = lastRowY - (rows.length - 1) * lineHeight;
      ctx.fillStyle = NAVY;
      ctx.font = `bold 26px ${SANS}`;
      spacedLeft(ctx, "PROGRAM DETAILS", DETAILS_LEFT, firstRowY - 52, 4);
      drawRows(ctx, rows, firstRowY, lineHeight);
    }
  } else {
    drawCoreGrid(ctx);
  }

  // thin gold rule, then the closing sentence
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(DETAILS_LEFT, RULE_Y);
  ctx.lineTo(DETAILS_RIGHT, RULE_Y);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = INK;
  const closing = isIgnite ? IGNITE_CLOSING : CORE_CLOSING;
  fitFont(ctx, closing, DETAILS_RIGHT - DETAILS_LEFT, isIgnite ? 32 : 28, SERIF);
  ctx.fillText(closing, W / 2, RULE_Y + 46);
};

// Text laid along a circle. Top text reads clockwise over the top with its
// letters standing outwards; bottom text reads left to right along the bottom
// with its letters standing upright.
const arcText = (ctx, text, radius, centerAngle, spacing, bottom = false) => {
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width + spacing);
  const span = widths.reduce((a, b) => a + b, 0) / radius;
  let angle = bottom ? centerAngle + span / 2 : centerAngle - span / 2;

  chars.forEach((c, i) => {
    const half = widths[i] / 2 / radius;
    angle += bottom ? -half : half;
    ctx.save();
    ctx.rotate(bottom ? angle - Math.PI / 2 : angle + Math.PI / 2);
    ctx.translate(0, bottom ? radius : -radius);
    // the letters' own side-bearing, so spacing is even
    ctx.fillText(c, 0, 0);
    ctx.restore();
    angle += bottom ? -half : half;
  });
};

const star = (ctx, x, y, r) => {
  ctx.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const rad = i % 2 ? r * 0.42 : r;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    ctx.lineTo(x + rad * Math.cos(a), y + rad * Math.sin(a));
  }
  ctx.closePath();
  ctx.fill();
};

// The ETMPDP stamp: two rings with "ELONATECH" over the top and "CERTIFIED"
// under the bottom, a star either side, and ETMPDP with the programme name in
// the middle. Inked in the programme colour and tilted a little, like a real stamp.
const drawStamp = (ctx, theme, cert, cx, cy) => {
  const R = 124;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((-9 * Math.PI) / 180);
  ctx.globalAlpha = 0.93;
  ctx.strokeStyle = theme.brand;
  ctx.fillStyle = theme.brand;

  // a faint tint inside, so it reads as a stamp and not just rings
  ctx.save();
  ctx.globalAlpha = 0.07;
  ctx.beginPath();
  ctx.arc(0, 0, R - 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // rings
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(0, 0, R - 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, R - 16, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, R - 58, 0, Math.PI * 2);
  ctx.stroke();

  // lettering in the band between the rings
  const mid = R - 37;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = `bold 25px ${SERIF}`;
  arcText(ctx, "ELONATECH", mid - 9, -Math.PI / 2, 5);
  arcText(ctx, "CERTIFIED", mid + 9, Math.PI / 2, 5, true);
  star(ctx, -mid, 0, 9);
  star(ctx, mid, 0, 9);

  // centre
  ctx.font = `bold 26px ${SERIF}`;
  ctx.fillText("ETMPDP", 0, 0);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-30, 10);
  ctx.lineTo(30, 10);
  ctx.stroke();
  ctx.font = `bold 19px ${SERIF}`;
  ctx.fillText(cert.program.toUpperCase(), 0, 34);
  star(ctx, 0, -34, 6);

  ctx.restore();
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
  ctx.font = `bold 112px ${SERIF}`;
  spaced(ctx, "CERTIFICATE", W / 2, 568, 12);
  ctx.fillStyle = theme.brand;
  ctx.font = `38px ${SERIF}`;
  spaced(ctx, "OF COMPLETION", W / 2, 626, 16);

  ctx.fillStyle = MUTED;
  ctx.font = `italic 40px ${SERIF}`;
  ctx.fillText("This certificate is proudly presented to", W / 2, 694);

  // — name —
  ctx.fillStyle = INK;
  fitFont(ctx, cert.fullName, 1900, 112, SERIF, "italic bold");
  ctx.fillText(cert.fullName, W / 2, 798);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 700, 830);
  ctx.lineTo(W / 2 + 700, 830);
  ctx.stroke();

  // — programme —
  ctx.fillStyle = MUTED;
  ctx.font = `38px ${SERIF}`;
  ctx.fillText("for successfully completing the", W / 2, 888);
  ctx.fillStyle = theme.brand;
  ctx.font = `bold 76px ${SERIF}`;
  ctx.fillText(programLabel(cert.program), W / 2, 968);
  // — dates —
  ctx.fillStyle = MUTED;
  ctx.font = `32px ${SERIF}`;
  const dates = [
    cert.enrollmentDate && `Enrolled ${formatLongDate(cert.enrollmentDate)}`,
    `Completed ${formatLongDate(cert.completionDate)}`,
  ].filter(Boolean);
  ctx.fillText(dates.join("   •   "), W / 2, 1024);

  // — what the programme covered (Core) / this person's pathway (Ignite) —
  drawDetails(ctx, cert);

  // — seal —
  drawStamp(ctx, theme, cert, W / 2, 1528);

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
  ctx.fillText("Authorised Signature", sig.right - sig.width / 2, sig.y + 46);
  ctx.fillStyle = MUTED;
  ctx.font = `28px ${SERIF}`;
  ctx.fillText("Elonatech Nigeria Limited", sig.right - sig.width / 2, sig.y + 84);

  // date of issue, under the signature (falls back to the day the record was made)
  const issued = cert.issueDate || cert.createdAt;
  if (issued) {
    const label = "Date of issue: ";
    const date = formatLongDate(issued);
    ctx.font = `28px ${SERIF}`;
    const labelW = ctx.measureText(label).width;
    ctx.font = `bold 28px ${SERIF}`;
    const dateW = ctx.measureText(date).width;
    const startX = sig.right - sig.width / 2 - (labelW + dateW) / 2;
    ctx.textAlign = "left";
    ctx.fillStyle = MUTED;
    ctx.font = `28px ${SERIF}`;
    ctx.fillText(label, startX, sig.y + 126);
    ctx.fillStyle = INK;
    ctx.font = `bold 28px ${SERIF}`;
    ctx.fillText(date, startX + labelW, sig.y + 126);
  }

  return canvas;
};
