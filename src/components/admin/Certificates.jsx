import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import JSZip from "jszip";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import CertificateAssetsModal from "./CertificateAssetsModal";
import {
  PROGRAMS,
  programLabel,
  formatShortDate,
  toDateInput,
  verifyUrl,
  safeFileName,
  downloadBlob,
  SITE_URL,
  SPECIALIZATIONS,
  IGNITE_PATHWAYS,
  CORE_DURATION,
  DURATIONS,
  defaultDuration,
} from "../../utils/certificate";
import { certificatePdfBlob, certificatePreviewUrl } from "../../utils/certificateDesign";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));
const authHeaders = () => ({ "x-access-token": getToken() });

const LIMIT = 20;
const EMPTY_FORM = {
  fullName: "",
  program: "Core",
  enrollmentDate: "",
  completionDate: "",
  issueDate: "",
  duration: CORE_DURATION,
  pathwayLevel: "",
  specialization: "",
  specialFocus: "",
};

const PATHWAY_LABELS = IGNITE_PATHWAYS.map((p) => p.label);

// Keeps a value that is already saved but not in the list (an older, typed
// entry) selectable, so editing never silently drops it.
const withCurrent = (options, current) =>
  current && !options.includes(current) ? [...options, current] : options;

// Case-insensitive match against a list; also lets "Foundation" mean "Ignite Foundation"
const matchOption = (value, options) => {
  const v = String(value || "").trim().toLowerCase();
  if (!v) return "";
  return (
    options.find((o) => o.toLowerCase() === v) ||
    options.find((o) => o.toLowerCase().endsWith(` ${v}`)) ||
    ""
  );
};

const apiMessage = (error, fallback) => {
  const data = error.response?.data;
  if (Array.isArray(data?.errors) && data.errors.length) return data.errors.join(". ");
  return data?.message || fallback;
};

// ── Cohort paste parsing ────────────────────────────────────────────────
// One person per line:
//   Name, Program, Completion date[, Start date, Duration, Pathway level, Specialization]
// Commas or tabs (pasting straight from a spreadsheet gives tabs). Dates as
// YYYY-MM-DD or DD/MM/YYYY.
const parseDate = (text) => {
  const t = String(text || "").trim();
  if (!t) return { value: "" };
  let m = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  let y, mo, d;
  if (m) [, y, mo, d] = m;
  else if ((m = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/))) [, d, mo, y] = m;
  else return { error: `"${t}" is not a date (use YYYY-MM-DD or DD/MM/YYYY)` };
  const date = new Date(Date.UTC(+y, +mo - 1, +d));
  if (date.getUTCMonth() !== +mo - 1 || date.getUTCDate() !== +d) {
    return { error: `"${t}" is not a real date` };
  }
  return { value: date.toISOString().slice(0, 10) };
};

const parseCohort = (text) => {
  const rows = [];
  const problems = [];
  text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line, index) => {
      const cells = (line.includes("\t") ? line.split("\t") : line.split(",")).map((c) => c.trim());
      const program = PROGRAMS.find((p) => p.toLowerCase() === (cells[1] || "").toLowerCase());

      // Skip a pasted header row such as "Name, Program, Completion date"
      if (index === 0 && !program && /name/i.test(cells[0])) return;

      const fail = (msg) => problems.push(`Line ${index + 1} (${cells[0] || "blank"}): ${msg}`);
      if (cells[0].length < 2) return fail("name is missing");
      if (!program) return fail(`program must be ${PROGRAMS.join(" or ")}`);
      const completion = parseDate(cells[2]);
      if (completion.error || !completion.value) return fail(completion.error || "completion date is missing");
      const enrollment = parseDate(cells[3]);
      if (enrollment.error) return fail(enrollment.error);

      const [, , , , durationText, pathwayText, specializationText] = cells;

      let pathwayLevel = "";
      let specialization = "";
      if (program === "Ignite") {
        if (pathwayText) {
          pathwayLevel = matchOption(pathwayText, PATHWAY_LABELS);
          if (!pathwayLevel) return fail(`pathway level must be one of: ${PATHWAY_LABELS.join(", ")}`);
        }
        if (specializationText) {
          specialization = matchOption(specializationText, SPECIALIZATIONS);
          if (!specialization) return fail("specialization is not one of the ETMPDP Ignite specializations");
        }
      }

      // Core: the last column is the optional Special focus (one of the eight tracks)
      let specialFocus = "";
      if (program === "Core" && specializationText) {
        specialFocus = matchOption(specializationText, SPECIALIZATIONS);
        if (!specialFocus) return fail("special focus is not one of the eight tracks");
      }

      // Duration: as given (from the list), otherwise worked out from the programme / pathway
      let duration = defaultDuration(program, pathwayLevel);
      if (durationText) {
        duration = matchOption(durationText, DURATIONS);
        if (!duration) return fail(`duration must be one of: ${DURATIONS.join(", ")}`);
      }

      rows.push({
        fullName: cells[0],
        program,
        completionDate: completion.value,
        ...(enrollment.value ? { enrollmentDate: enrollment.value } : {}),
        ...(duration ? { duration } : {}),
        // Pathway level and specialization are only printed on Ignite certificates
        ...(pathwayLevel ? { pathwayLevel } : {}),
        ...(specialization ? { specialization } : {}),
        ...(specialFocus ? { specialFocus } : {}),
      });
    });
  return { rows, problems };
};

const csvCell = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

const Certificates = () => {
  const navigate = useNavigate();

  // Certificates are for super admins only. The server enforces this too (403);
  // this just keeps a normal admin from seeing a page that cannot work for them.
  const isSuper = (() => {
    try {
      return JSON.parse(atob(getToken().split(".")[1])).role === "superAdmin";
    } catch {
      return false;
    }
  })();

  useEffect(() => {
    if (!isSuper) {
      toast.error("Certificates are for super admins only");
      navigate("/dashboard", { replace: true });
    }
  }, [isSuper, navigate]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [programFilter, setProgramFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null); // certificate being edited, or null when adding
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const [cohortOpen, setCohortOpen] = useState(false);
  const [cohortText, setCohortText] = useState("");
  const [cohortParsed, setCohortParsed] = useState({ rows: [], problems: [] });

  const [viewing, setViewing] = useState(null); // certificate open in the view window
  const [viewPreview, setViewPreview] = useState("");

  const [revoking, setRevoking] = useState(null);
  const [revokeReason, setRevokeReason] = useState("");
  const [deleting, setDeleting] = useState(null);

  const [assetsOpen, setAssetsOpen] = useState(false);
  const [exporting, setExporting] = useState("");
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const exportMenuRef = useRef(null);

  // Close the Export menu when clicking anywhere else
  useEffect(() => {
    if (!exportMenuOpen) return undefined;
    const onClick = (e) => {
      if (!exportMenuRef.current?.contains(e.target)) setExportMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [exportMenuOpen]);

  // ── Loading ───────────────────────────────────────────────────────────
  const fetchPage = useCallback(
    async (pageNumber, limit = LIMIT) => {
      const params = { page: pageNumber, limit };
      if (debouncedSearch) params.q = debouncedSearch;
      if (programFilter) params.program = programFilter;
      if (statusFilter) params.status = statusFilter;
      const res = await axios.get(`${BASEURL}/api/v1/certificates/all`, { params, headers: authHeaders() });
      return res.data;
    },
    [debouncedSearch, programFilter, statusFilter]
  );

  const load = useCallback(async () => {
    // Never ask the server on a normal admin's behalf: the app signs a user out on any 403.
    if (!isSuper) return;
    try {
      setLoading(true);
      const data = await fetchPage(page);
      setItems(data.certificates || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      if (error.response?.status === 403) {
        toast.error("Certificates are for super admins only");
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(apiMessage(error, "Failed to load certificates"));
      }
    } finally {
      setLoading(false);
    }
  }, [fetchPage, page, navigate, isSuper]);

  useEffect(() => {
    load();
  }, [load]);

  // Wait for a pause in typing before searching
  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(search.trim()), 350);
    return () => clearTimeout(id);
  }, [search]);

  // A new search/filter always starts from page 1
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setPage(1);
  }, [debouncedSearch, programFilter, statusFilter]);

  // The finished certificate (QR already in place) for the open view window
  useEffect(() => {
    if (!viewing) return undefined;
    let cancelled = false;
    let objectUrl = "";
    certificatePreviewUrl(viewing)
      .then((url) => {
        objectUrl = url;
        if (cancelled) URL.revokeObjectURL(url);
        else setViewPreview(url);
      })
      .catch(() => {
        if (!cancelled) toast.error("Couldn't load the certificate");
      });
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      setViewPreview("");
    };
  }, [viewing]);

  // ── Add / edit ────────────────────────────────────────────────────────
  const openAdd = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setFormOpen(true);
  };

  const openEdit = (cert) => {
    setEditing(cert);
    setForm({
      fullName: cert.fullName,
      program: cert.program,
      enrollmentDate: toDateInput(cert.enrollmentDate),
      completionDate: toDateInput(cert.completionDate),
      issueDate: toDateInput(cert.issueDate),
      duration: cert.duration || "",
      pathwayLevel: cert.pathwayLevel || "",
      specialization: cert.specialization || "",
      specialFocus: cert.specialFocus || "",
    });
    setFormOpen(true);
  };

  // Choosing the programme sets its duration (Core is always 12 months)
  const changeProgram = (program) =>
    setForm((f) => ({
      ...f,
      program,
      duration: defaultDuration(program, program === "Ignite" ? f.pathwayLevel : ""),
    }));

  // Choosing an Ignite pathway level sets its length (3, 4 or 6 months)
  const changePathway = (pathwayLevel) =>
    setForm((f) => ({
      ...f,
      pathwayLevel,
      duration: defaultDuration("Ignite", pathwayLevel) || f.duration,
    }));

  const saveForm = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        fullName: form.fullName.trim(),
        program: form.program,
        completionDate: form.completionDate,
        enrollmentDate: form.enrollmentDate,
        issueDate: form.issueDate,
        duration: form.duration.trim(),
        // Only Ignite certificates have these two lines
        pathwayLevel: form.program === "Ignite" ? form.pathwayLevel.trim() : "",
        specialization: form.program === "Ignite" ? form.specialization.trim() : "",
        // Only Core certificates have a Special focus
        specialFocus: form.program === "Core" ? form.specialFocus.trim() : "",
      };
      if (editing) {
        await axios.patch(`${BASEURL}/api/v1/certificates/${editing._id}`, payload, { headers: authHeaders() });
        toast.success("Certificate updated");
        setFormOpen(false);
        load();
      } else {
        const res = await axios.post(`${BASEURL}/api/v1/certificates`, payload, { headers: authHeaders() });
        toast.success("Certificate created");
        setFormOpen(false);
        load();
        setViewing(res.data.data); // straight to the finished certificate
      }
    } catch (error) {
      toast.error(apiMessage(error, "Failed to save certificate"));
    } finally {
      setSaving(false);
    }
  };

  // ── Cohort ────────────────────────────────────────────────────────────
  const onCohortChange = (text) => {
    setCohortText(text);
    setCohortParsed(parseCohort(text));
  };

  const submitCohort = async () => {
    if (!cohortParsed.rows.length) return;
    setSaving(true);
    try {
      const res = await axios.post(
        `${BASEURL}/api/v1/certificates/bulk`,
        { certificates: cohortParsed.rows },
        { headers: authHeaders() }
      );
      toast.success(res.data.message);
      setCohortOpen(false);
      setCohortText("");
      setCohortParsed({ rows: [], problems: [] });
      load();
    } catch (error) {
      toast.error(apiMessage(error, "Failed to create certificates"));
    } finally {
      setSaving(false);
    }
  };

  // ── Revoke / restore / delete ─────────────────────────────────────────
  const confirmRevoke = async () => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/certificates/${revoking._id}`,
        { status: "revoked", revokedReason: revokeReason.trim() || undefined },
        { headers: authHeaders() }
      );
      toast.success("Certificate revoked");
      setRevoking(null);
      setRevokeReason("");
      load();
    } catch (error) {
      toast.error(apiMessage(error, "Failed to revoke certificate"));
    }
  };

  const restore = async (cert) => {
    try {
      await axios.patch(`${BASEURL}/api/v1/certificates/${cert._id}`, { status: "valid" }, { headers: authHeaders() });
      toast.success("Certificate restored");
      load();
    } catch (error) {
      toast.error(apiMessage(error, "Failed to restore certificate"));
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/certificates/${deleting._id}`, { headers: authHeaders() });
      toast.success("Certificate deleted");
      setDeleting(null);
      load();
    } catch (error) {
      toast.error(apiMessage(error, "Failed to delete certificate"));
    }
  };

  // ── View / export ───────────────────────────────────────────────────────
  const copy = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(message);
    } catch {
      toast.error("Couldn't copy — select and copy it manually");
    }
  };

  const downloadPdf = async (cert) => {
    setExporting("pdf");
    try {
      downloadBlob(await certificatePdfBlob(cert), `${safeFileName(cert.fullName)}-${cert.code}.pdf`);
    } catch {
      toast.error("Couldn't build the certificate PDF");
    } finally {
      setExporting("");
    }
  };

  // Every certificate matching the current search/filters, not just this page
  const fetchAllMatching = async () => {
    const all = [];
    let pageNumber = 1;
    let pages = 1;
    do {
      const data = await fetchPage(pageNumber, 100);
      all.push(...(data.certificates || []));
      pages = data.totalPages || 1;
      pageNumber += 1;
    } while (pageNumber <= pages);
    return all;
  };

  const exportPdfZip = async () => {
    setExporting("pdfzip");
    try {
      const all = (await fetchAllMatching()).filter((c) => c.status === "valid");
      if (!all.length) {
        toast.info("No valid certificates to export");
        return;
      }
      const zip = new JSZip();
      for (const cert of all) {
        zip.file(`${safeFileName(cert.fullName)}-${cert.code}.pdf`, await certificatePdfBlob(cert));
      }
      downloadBlob(await zip.generateAsync({ type: "blob" }), "etmpdp-certificates.zip");
      toast.success(`Downloaded ${all.length} certificate${all.length === 1 ? "" : "s"}`);
    } catch (error) {
      toast.error(apiMessage(error, "Failed to build the certificates zip"));
    } finally {
      setExporting("");
    }
  };

  const exportCsv = async () => {
    setExporting("csv");
    try {
      const all = await fetchAllMatching();
      const header = ["Name", "Program", "Enrollment date", "Completion date", "Certificate ID", "Verification link", "Status"];
      const lines = all.map((c) =>
        [
          c.fullName,
          c.program,
          toDateInput(c.enrollmentDate),
          toDateInput(c.completionDate),
          c.code,
          verifyUrl(c.code),
          c.status,
        ]
          .map(csvCell)
          .join(",")
      );
      downloadBlob(
        new Blob([[header.map(csvCell).join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8" }),
        "etmpdp-certificates.csv"
      );
    } catch (error) {
      toast.error(apiMessage(error, "Failed to export certificates"));
    } finally {
      setExporting("");
    }
  };

  const closeBtn = (onClick) => (
    <button className="sad-modal-close" onClick={onClick} aria-label="Close">
      <i className="bi bi-x-lg"></i>
    </button>
  );

  const hasFilters = debouncedSearch || programFilter || statusFilter;

  // a normal admin is already being sent back to the dashboard (see above)
  if (!isSuper) return null;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Certificates — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="certificates" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Certificates</h4>
              <p className="sad-subtitle">
                ETMPDP certificates. Each one is made with its own verification QR code already in place.
              </p>
              <p className="sad-subtitle" style={{ marginTop: 4 }}>
                Public list page (share by link):{" "}
                <a href="/etmpdp-certificates" target="_blank" rel="noreferrer">
                  {SITE_URL.replace("https://", "")}/etmpdp-certificates
                </a>{" "}
                ·{" "}
                <button
                  type="button"
                  className="job-action-edit"
                  onClick={() => copy(`${SITE_URL}/etmpdp-certificates`, "List page link copied")}
                >
                  Copy link
                </button>
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ position: "relative" }} ref={exportMenuRef}>
                <button
                  className="sad-btn-create"
                  style={{ background: "#f3f4f6", color: "#374151" }}
                  onClick={() => setExportMenuOpen((open) => !open)}
                  disabled={!!exporting || total === 0}
                  aria-haspopup="menu"
                  aria-expanded={exportMenuOpen}
                >
                  {exporting ? "Preparing…" : "Export ▾"}
                </button>
                {exportMenuOpen && (
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "calc(100% + 6px)",
                      zIndex: 30,
                      width: 270,
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 10,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      padding: 6,
                    }}
                  >
                    <button
                      role="menuitem"
                      className="job-action-edit"
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "8px 10px" }}
                      onClick={() => { setExportMenuOpen(false); exportPdfZip(); }}
                    >
                      Certificates (.zip of PDFs)
                      <div className="job-workplace-subtext">Finished certificate with QR, one per person</div>
                    </button>
                    <button
                      role="menuitem"
                      className="job-action-edit"
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "8px 10px" }}
                      onClick={() => { setExportMenuOpen(false); exportCsv(); }}
                    >
                      List (.csv)
                      <div className="job-workplace-subtext">Names, IDs and links, for a spreadsheet</div>
                    </button>
                    {hasFilters && (
                      <div className="job-workplace-subtext" style={{ padding: "6px 10px 4px" }}>
                        Only what matches the current search and filters.
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button
                className="sad-btn-create"
                style={{ background: "#f3f4f6", color: "#374151" }}
                onClick={() => setAssetsOpen(true)}
              >
                Signature &amp; seal
              </button>
              <button
                className="sad-btn-create"
                style={{ background: "#f3f4f6", color: "#374151" }}
                onClick={() => setCohortOpen(true)}
              >
                Add many at once
              </button>
              <button className="sad-btn-create" onClick={openAdd}>
                + Add certificate
              </button>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header" style={{ flexWrap: "wrap", gap: 12 }}>
              <span className="sad-table-title">ALL CERTIFICATES</span>

              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <input
                  type="search"
                  className="form-control form-control-sm"
                  style={{ width: 210 }}
                  placeholder="Search name or code"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search certificates"
                />
                <select
                  className="form-select form-select-sm"
                  style={{ width: "auto" }}
                  value={programFilter}
                  onChange={(e) => setProgramFilter(e.target.value)}
                >
                  <option value="">All programs</option>
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>{programLabel(p)}</option>
                  ))}
                </select>
                <select
                  className="form-select form-select-sm"
                  style={{ width: "auto" }}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All statuses</option>
                  <option value="valid">Valid</option>
                  <option value="revoked">Revoked</option>
                </select>
                <span className="sad-active-badge">
                  <span className="sad-dot"></span>
                  {total} Total
                </span>
              </div>
            </div>

            {loading ? (
              <div className="sad-loading">Loading certificates...</div>
            ) : items.length === 0 ? (
              <div className="sad-loading">
                {hasFilters ? "No certificates match this search." : "No certificates yet. Add one to get started."}
              </div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>PROGRAM</th>
                      <th>COMPLETED</th>
                      <th>CERTIFICATE ID</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((cert) => (
                      <tr key={cert._id}>
                        <td data-label="Name">{cert.fullName}</td>
                        <td data-label="Program">{programLabel(cert.program)}</td>
                        <td data-label="Completed">{formatShortDate(cert.completionDate)}</td>
                        <td data-label="Certificate ID">
                          <button
                            type="button"
                            className="job-action-edit"
                            style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace", whiteSpace: "nowrap" }}
                            title="Copy certificate ID"
                            onClick={() => copy(cert.code, "Certificate ID copied")}
                          >
                            {cert.code}
                          </button>
                        </td>
                        <td data-label="Status">
                          <span
                            className={`sad-role-badge ${cert.status === "valid" ? "job-status-active" : "job-status-closed"}`}
                            title={cert.revokedReason || undefined}
                          >
                            {cert.status === "valid" ? "Valid" : "Revoked"}
                          </span>
                        </td>
                        <td data-label="Actions">
                          <div className="job-actions-cell" style={{ flexWrap: "wrap" }}>
                            <button className="job-action-edit" onClick={() => setViewing(cert)}>View</button>
                            <button className="job-action-edit" onClick={() => openEdit(cert)}>Edit</button>
                            {cert.status === "valid" ? (
                              <button className="job-action-toggle" onClick={() => { setRevoking(cert); setRevokeReason(""); }}>
                                Revoke
                              </button>
                            ) : (
                              <button className="job-action-toggle" onClick={() => restore(cert)}>Restore</button>
                            )}
                            <button className="job-action-delete" onClick={() => setDeleting(cert)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {!loading && totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, padding: "16px 0 4px" }}>
                <button className="job-action-edit" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                  ← Previous
                </button>
                <span className="job-workplace-subtext">Page {page} of {totalPages}</span>
                <button className="job-action-edit" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                  Next →
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add / edit */}
      {formOpen && (
        <div className="sad-overlay">
          {/* wider than the default admin modal, like the application forms on the site */}
          <div className="sad-modal" style={{ maxWidth: 780 }} onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>{editing ? "Edit certificate" : "Add certificate"}</h5>
              {closeBtn(() => setFormOpen(false))}
            </div>
            <form className="sad-modal-body" onSubmit={saveForm}>
              {editing && (
                <div className="mb-3">
                  <label className="sad-label">Certificate ID (cannot be changed)</label>
                  <div className="sad-readonly" style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace" }}>
                    {editing.code}
                  </div>
                </div>
              )}
              <div className="mb-3">
                <label className="sad-label" htmlFor="cert-name">Full name</label>
                <input
                  id="cert-name"
                  className="form-control"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  required
                  minLength={2}
                  maxLength={100}
                />
              </div>
              <div className="mb-3">
                <label className="sad-label" htmlFor="cert-program">Program</label>
                <select
                  id="cert-program"
                  className="form-select"
                  value={form.program}
                  onChange={(e) => changeProgram(e.target.value)}
                >
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>{programLabel(p)}</option>
                  ))}
                </select>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label" htmlFor="cert-enrolled">Enrollment date (optional)</label>
                  <input
                    id="cert-enrolled"
                    type="date"
                    className="form-control"
                    value={form.enrollmentDate}
                    onChange={(e) => setForm({ ...form, enrollmentDate: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="sad-label" htmlFor="cert-completed">Completion date</label>
                  <input
                    id="cert-completed"
                    type="date"
                    className="form-control"
                    value={form.completionDate}
                    onChange={(e) => setForm({ ...form, completionDate: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label" htmlFor="cert-duration">Duration (printed on the certificate)</label>
                  <select
                    id="cert-duration"
                    className="form-select"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  >
                    <option value="">Not shown</option>
                    {withCurrent(DURATIONS, form.duration).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="sad-label" htmlFor="cert-issued">Date of issue (optional)</label>
                  <input
                    id="cert-issued"
                    type="date"
                    className="form-control"
                    value={form.issueDate}
                    onChange={(e) => setForm({ ...form, issueDate: e.target.value })}
                  />
                </div>
              </div>
              {form.program === "Ignite" && (
                <div className="sad-form-row">
                  <div className="mb-3">
                    <label className="sad-label" htmlFor="cert-pathway">Pathway level</label>
                    <select
                      id="cert-pathway"
                      className="form-select"
                      value={form.pathwayLevel}
                      onChange={(e) => changePathway(e.target.value)}
                    >
                      <option value="">Select pathway level</option>
                      {withCurrent(PATHWAY_LABELS, form.pathwayLevel).map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3" style={{ flex: 1.7 }}>
                    <label className="sad-label" htmlFor="cert-specialization">Primary specialization</label>
                    <select
                      id="cert-specialization"
                      className="form-select"
                      value={form.specialization}
                      onChange={(e) => setForm({ ...form, specialization: e.target.value })}
                    >
                      <option value="">Select specialization</option>
                      {withCurrent(SPECIALIZATIONS, form.specialization).map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {form.program === "Core" && (
                <div className="mb-3">
                  <label className="sad-label" htmlFor="cert-special-focus">
                    Special focus (optional): the track they developed most during the programme
                  </label>
                  <select
                    id="cert-special-focus"
                    className="form-select"
                    value={form.specialFocus}
                    onChange={(e) => setForm({ ...form, specialFocus: e.target.value })}
                  >
                    <option value="">None: leave it off the certificate</option>
                    {withCurrent(SPECIALIZATIONS, form.specialFocus).map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="sad-btn-create"
                  style={{ background: "#f3f4f6", color: "#374151" }}
                  onClick={() => setFormOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="sad-btn-create" disabled={saving}>
                  {saving ? "Saving…" : editing ? "Save changes" : "Create certificate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cohort */}
      {cohortOpen && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" style={{ maxWidth: 780 }} onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Add many certificates at once</h5>
              {closeBtn(() => setCohortOpen(false))}
            </div>
            <div className="sad-modal-body">
              <p className="job-workplace-subtext" style={{ marginTop: 0 }}>
                One person per line: <strong>Name, Program, Completion date, Start date, Duration, Pathway level,
                Specialization</strong>. Only the first three are required. Duration, pathway level and specialization are worked out or must
                match the website's lists (Ignite Foundation, Professional or Executive; the eight specializations). For Core, the last column is the optional Special focus. You can paste straight from a spreadsheet. Dates as YYYY-MM-DD or DD/MM/YYYY.
              </p>
              <textarea
                className="form-control"
                rows={9}
                style={{ fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: 13 }}
                placeholder={"Ada Obi, Core, 2026-08-15, 2026-05-01, 12 months\nChidi Eze, Ignite, 15/08/2026, 01/03/2026, 6 months, Intermediate, Network Engineering"}
                value={cohortText}
                onChange={(e) => onCohortChange(e.target.value)}
              />
              {cohortText.trim() && (
                <div style={{ marginTop: 12 }}>
                  <strong>
                    {cohortParsed.rows.length} ready
                    {cohortParsed.problems.length > 0 && `, ${cohortParsed.problems.length} with problems`}
                  </strong>
                  {cohortParsed.problems.length > 0 && (
                    <ul style={{ color: "#b91c1c", fontSize: 13, margin: "6px 0 0", paddingLeft: 18 }}>
                      {cohortParsed.problems.slice(0, 8).map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                      {cohortParsed.problems.length > 8 && <li>…and {cohortParsed.problems.length - 8} more</li>}
                    </ul>
                  )}
                </div>
              )}
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "flex-end" }}>
                <button
                  className="sad-btn-create"
                  style={{ background: "#f3f4f6", color: "#374151" }}
                  onClick={() => setCohortOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="sad-btn-create"
                  onClick={submitCohort}
                  disabled={saving || cohortParsed.rows.length === 0 || cohortParsed.problems.length > 0}
                  title={cohortParsed.problems.length ? "Fix the lines with problems first" : undefined}
                >
                  {saving ? "Creating…" : `Create ${cohortParsed.rows.length || ""} certificate${cohortParsed.rows.length === 1 ? "" : "s"}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View the finished certificate */}
      {viewing && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" style={{ maxWidth: 980, width: "95%" }} onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>{viewing.fullName}</h5>
              {closeBtn(() => setViewing(null))}
            </div>
            <div className="sad-modal-body" style={{ textAlign: "center" }}>
              {viewing.status === "revoked" && (
                <p style={{ color: "#b91c1c", fontWeight: 600, marginTop: 0 }}>
                  This certificate is revoked. Its QR code now shows "No longer valid".
                </p>
              )}
              {viewPreview ? (
                <img
                  src={viewPreview}
                  alt={`Certificate for ${viewing.fullName}`}
                  style={{ width: "100%", height: "auto", border: "1px solid #e5e7eb", borderRadius: 8 }}
                />
              ) : (
                <div className="sad-loading">Preparing certificate…</div>
              )}
              {/* Same height, all centred on one line */}
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <button
                  className="sad-btn-create"
                  style={{ height: 42, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                  onClick={() => downloadPdf(viewing)}
                  disabled={!!exporting || !viewPreview}
                >
                  {exporting === "pdf" ? "Preparing…" : "Download certificate (PDF)"}
                </button>
                <button
                  className="job-action-edit"
                  style={{ height: 42, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                  onClick={() => copy(verifyUrl(viewing.code), "Verification link copied")}
                >
                  Copy verification link
                </button>
                {/* Relative on purpose: opens on whichever site you are on (local or live),
                    while "Copy verification link" always gives the permanent live address. */}
                <a
                  className="job-action-edit"
                  href={`/verify/${viewing.code}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ height: 42, display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
                >
                  Open verification page
                </a>
              </div>
              <p className="job-workplace-subtext" style={{ marginTop: 12 }}>
                The QR code is placed on the certificate automatically. Scanning it opens the verification page.
              </p>
            </div>
          </div>
        </div>
      )}

      {assetsOpen && <CertificateAssetsModal onClose={() => setAssetsOpen(false)} />}

      {/* Revoke */}
      {revoking && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Revoke certificate</h5>
              {closeBtn(() => setRevoking(null))}
            </div>
            <div className="sad-modal-body">
              <p>
                <strong>{revoking.fullName}</strong>'s QR code will show "No longer valid". You can restore it later.
              </p>
              <label className="sad-label" htmlFor="revoke-reason">Reason (only you can see this)</label>
              <input
                id="revoke-reason"
                className="form-control"
                maxLength={100}
                value={revokeReason}
                onChange={(e) => setRevokeReason(e.target.value)}
              />
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center" }}>
                <button className="sad-btn-create" style={{ background: "#dc2626" }} onClick={confirmRevoke}>Revoke</button>
                <button className="sad-btn-create" style={{ background: "#f3f4f6", color: "#374151" }} onClick={() => setRevoking(null)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete */}
      {deleting && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Confirm Delete</h5>
              {closeBtn(() => setDeleting(null))}
            </div>
            <div className="sad-modal-body" style={{ textAlign: "center" }}>
              <p>
                Delete the certificate for <strong>{deleting.fullName}</strong>? Its QR code will stop working for good.
                To withdraw a real certificate, use Revoke instead.
              </p>
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center" }}>
                <button className="sad-btn-create" style={{ background: "#dc2626" }} onClick={confirmDelete}>Delete</button>
                <button className="sad-btn-create" style={{ background: "#f3f4f6", color: "#374151" }} onClick={() => setDeleting(null)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
