import { programLabel } from "./certificate";
import { renderCertificateCanvas as renderClassic } from "./certificateDesignClassic";
import { renderCertificateCanvas as renderOfficial } from "./certificateDesignOfficial";

// Which certificate design is in use:
//   "classic"  the in-house design (navy header band, serif lettering)
//   "official" the ETMPDP Core / Ignite designs supplied as PDFs
//              (also prints duration, pathway level, specialization, date of issue)
// Both are fully built. Change this one word to switch every certificate:
// the verify page, the admin "View" window and the PDFs / zip.
export const ACTIVE_DESIGN = "classic";

const render = ACTIVE_DESIGN === "official" ? renderOfficial : renderClassic;

export const renderCertificateCanvas = (cert, options) => render(cert, options);

// Small JPEG for showing on screen
export const certificatePreviewUrl = async (cert) =>
  (await render(cert, { width: 1400 })).toDataURL("image/jpeg", 0.92);

// Full-size A4-landscape PDF. jsPDF is large, so it is only loaded when a PDF is asked for.
export const certificatePdfBlob = async (cert) => {
  const { jsPDF } = await import("jspdf");
  const canvas = await render(cert, { width: 2480 });
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  pdf.addImage(canvas.toDataURL("image/jpeg", 0.93), "JPEG", 0, 0, 297, 210);
  pdf.setProperties({
    title: `${programLabel(cert.program)} Certificate - ${cert.fullName}`,
    subject: `Certificate ${cert.code}`,
    author: "Elonatech Nigeria Limited",
  });
  return pdf.output("blob");
};
