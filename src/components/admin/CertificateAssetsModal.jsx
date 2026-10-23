import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";

const getToken = () => JSON.parse(localStorage.getItem("token"));
const authHeaders = () => ({ "x-access-token": getToken() });
const API = `${BASEURL}/api/v1/certificates`;

const apiMessage = (error, fallback) => error.response?.data?.message || fallback;

// "default" applies to every programme that has no image of its own. To add a
// programme here, add it to PROGRAMS in Elonatech-Live-api/validators/certificateValidator.js.
const SCOPES = [
  { id: "default", label: "All programmes" },
  { id: "Core", label: "Core only" },
  { id: "Ignite", label: "Ignite only" },
];

const KINDS = [
  {
    kind: "signature",
    label: "Signature",
    hint: "Wide PNG with a transparent background, dark ink, cropped tight to the ink. About 900 × 300 px works well (at least 500 px wide). It is printed fairly large and sits just over the line.",
  },
  {
    kind: "stamp",
    label: "Company stamp",
    hint: "Square PNG with a transparent background, cropped tight. About 600 × 600 px works well (at least 300 px). The drawn ETMPDP stamp always stays; this seal is placed on top of it.",
  },
];

const formatWhen = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

// Super-admin panel for the signature, the stamp and who signs. The images are
// sent to the server and stored encrypted: nothing here can show them back, only
// a finished sample certificate is previewed.
const CertificateAssetsModal = ({ onClose }) => {
  const [status, setStatus] = useState(null);
  const [scope, setScope] = useState("default");
  const [busy, setBusy] = useState("");
  const [confirmRemove, setConfirmRemove] = useState(""); // a kind key such as "stamp" or "stamp:Core"
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [sampleProgram, setSampleProgram] = useState("Core");
  const [sample, setSample] = useState("");
  const [sampleVersion, setSampleVersion] = useState(0);

  const isDefault = scope === "default";
  const keyOf = (kind) => (isDefault ? kind : `${kind}:${scope}`);
  const savedSignatory = status
    ? (isDefault ? status.settings : status.settings?.programs?.[scope]) || {}
    : {};

  // Merge, so a response that leaves something out never wipes what was already known
  const applyStatus = useCallback((data) => setStatus((previous) => ({ ...previous, ...data })), []);

  useEffect(() => {
    axios
      .get(`${API}/assets`, { headers: authHeaders() })
      .then((res) => applyStatus(res.data))
      .catch((error) => toast.error(apiMessage(error, "Couldn't load the signature settings")));
  }, [applyStatus]);

  // The name and title fields follow the chosen scope (and whatever was last saved)
  useEffect(() => {
    setName(savedSignatory.signatoryName || "");
    setTitle(savedSignatory.signatoryTitle || "");
  }, [scope, status]);

  // Looking at one programme previews that programme
  useEffect(() => {
    if (scope !== "default") setSampleProgram(scope);
  }, [scope]);

  // A made-up certificate drawn with what is currently uploaded
  useEffect(() => {
    if (!status) return undefined;
    let cancelled = false;
    let objectUrl = "";
    axios
      .get(`${API}/assets/preview/image`, { params: { program: sampleProgram }, headers: authHeaders(), responseType: "blob" })
      .then((res) => {
        objectUrl = URL.createObjectURL(res.data);
        if (cancelled) URL.revokeObjectURL(objectUrl);
        else setSample(objectUrl);
      })
      .catch(() => {
        if (!cancelled) setSample("");
      });
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
    // status itself changes on every save; the version counter is what means "redraw"
  }, [!!status, sampleProgram, sampleVersion]);

  const upload = async (kindKey, file) => {
    if (!file) return;
    if (file.type !== "image/png") {
      toast.error("Please choose a PNG file");
      return;
    }
    setBusy(kindKey);
    try {
      const form = new FormData();
      form.append("image", file);
      const res = await axios.put(`${API}/assets/${encodeURIComponent(kindKey)}`, form, { headers: authHeaders() });
      applyStatus(res.data);
      setSampleVersion((v) => v + 1);
      toast.success("Saved");
    } catch (error) {
      toast.error(apiMessage(error, "Upload failed"));
    } finally {
      setBusy("");
    }
  };

  const remove = async (kindKey) => {
    setConfirmRemove("");
    setBusy(kindKey);
    try {
      const res = await axios.delete(`${API}/assets/${encodeURIComponent(kindKey)}`, { headers: authHeaders() });
      applyStatus(res.data);
      setSampleVersion((v) => v + 1);
      toast.success("Removed");
    } catch (error) {
      toast.error(apiMessage(error, "Couldn't remove it"));
    } finally {
      setBusy("");
    }
  };

  const saveSignatory = async (e) => {
    e.preventDefault();
    setBusy("settings");
    try {
      const body = { signatoryName: name, signatoryTitle: title };
      if (!isDefault) body.program = scope;
      const res = await axios.put(`${API}/settings`, body, { headers: authHeaders() });
      applyStatus(res.data);
      setSampleVersion((v) => v + 1);
      toast.success("Signatory saved");
    } catch (error) {
      toast.error(apiMessage(error, "Couldn't save"));
    } finally {
      setBusy("");
    }
  };

  const settingsChanged =
    status && (name.trim() !== (savedSignatory.signatoryName || "") || title.trim() !== (savedSignatory.signatoryTitle || ""));

  const scopeLabel = SCOPES.find((s) => s.id === scope)?.label;

  return (
    <div className="sad-overlay">
      <div className="sad-modal sad-modal-lg" style={{ maxWidth: 900, width: "95%" }} onClick={(e) => e.stopPropagation()}>
        <div className="sad-modal-header">
          <h5>Signature &amp; stamp</h5>
          <button className="sad-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="sad-modal-body">
          {!status ? (
            <p>Loading…</p>
          ) : (
            <>
              <p className="job-workplace-subtext" style={{ marginTop: 0 }}>
                These are stored encrypted on the server and are never sent back to the browser. They only appear on finished
                certificates.
              </p>

              {!status.keyConfigured && (
                <div className="alert alert-warning" role="alert">
                  {status.keyProblem === "invalid" ? (
                    <>
                      Uploads are switched off: <code>CERT_ASSETS_KEY</code> on the server is not a valid key. It must be 32
                      random bytes, base64-encoded (44 characters ending in <code>=</code>).
                    </>
                  ) : (
                    <>
                      Uploads are switched off until <code>CERT_ASSETS_KEY</code> is set on the server.
                    </>
                  )}
                </div>
              )}

              <div role="tablist" aria-label="Which programmes" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {SCOPES.map((s) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={scope === s.id}
                    className="sad-btn-create"
                    style={scope === s.id ? undefined : { background: "#f3f4f6", color: "#374151" }}
                    onClick={() => setScope(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="job-workplace-subtext" style={{ margin: "8px 0 0" }}>
                {isDefault
                  ? "Used for every programme that does not have its own."
                  : `Only for ${scope} certificates. Anything left empty here uses the All programmes one.`}
              </p>

              {KINDS.map(({ kind, label, hint }) => {
                const key = keyOf(kind);
                const info = status[key] || {};
                const inherited = !isDefault && !info.uploaded && status[kind]?.uploaded;
                const working = busy === key;
                return (
                  <div key={key} style={{ padding: "12px 0", marginTop: 8, borderTop: "1px solid #e5e7eb" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                      <div>
                        <strong>{label}</strong>{" "}
                        <span style={{ color: info.uploaded ? "#15803d" : "#92400e", fontSize: 13 }}>
                          {info.uploaded
                            ? `Uploaded ${formatWhen(info.updatedAt)}${info.uploadedBy ? ` by ${info.uploadedBy}` : ""}`
                            : inherited
                              ? "Not set here, using the All programmes one"
                              : "Not uploaded"}
                        </span>
                        <div className="job-workplace-subtext">{hint}</div>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <label
                          className="sad-btn-create"
                          style={{ margin: 0, cursor: busy || !status.keyConfigured ? "not-allowed" : "pointer", opacity: busy || !status.keyConfigured ? 0.6 : 1 }}
                        >
                          {working ? "Working…" : info.uploaded ? "Replace" : "Upload PNG"}
                          <input
                            type="file"
                            accept="image/png"
                            hidden
                            disabled={!!busy || !status.keyConfigured}
                            onChange={(e) => {
                              upload(key, e.target.files[0]);
                              e.target.value = "";
                            }}
                          />
                        </label>
                        {info.uploaded && (
                          <button
                            className="sad-btn-create"
                            style={{ background: "#f3f4f6", color: "#374151" }}
                            disabled={!!busy}
                            onClick={() => setConfirmRemove(key)}
                          >
                            {isDefault ? "Remove" : "Use default"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <form onSubmit={saveSignatory} style={{ padding: "12px 0", borderTop: "1px solid #e5e7eb" }}>
                <strong>Who signs</strong> <span className="job-workplace-subtext">({scopeLabel})</span>
                <div className="job-workplace-subtext">
                  {isDefault
                    ? 'Printed under the signature line. Leave empty to print "Authorised Signature".'
                    : "Printed under the signature line on these certificates. Leave the name empty to use the All programmes signatory."}
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                  <input
                    className="form-control"
                    style={{ flex: "1 1 220px" }}
                    placeholder="Name"
                    aria-label="Signatory name"
                    maxLength={80}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="form-control"
                    style={{ flex: "1 1 220px" }}
                    placeholder="Title, e.g. Managing Director"
                    aria-label="Signatory title"
                    maxLength={80}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button className="sad-btn-create" disabled={!!busy || !settingsChanged}>
                    {busy === "settings" ? "Saving…" : "Save"}
                  </button>
                </div>
              </form>

              <div style={{ padding: "12px 0 0", borderTop: "1px solid #e5e7eb" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <strong>Sample (made-up recipient)</strong>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["Core", "Ignite"].map((p) => (
                      <button
                        key={p}
                        className="sad-btn-create"
                        style={sampleProgram === p ? undefined : { background: "#f3f4f6", color: "#374151" }}
                        onClick={() => setSampleProgram(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                {sample ? (
                  <img src={sample} alt="Sample certificate" style={{ width: "100%", marginTop: 10, border: "1px solid #e5e7eb", borderRadius: 8 }} />
                ) : (
                  <p className="job-workplace-subtext" style={{ marginTop: 10 }}>Drawing the sample…</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {confirmRemove && (
        <div className="sad-overlay" style={{ zIndex: 1100 }}>
          <div className="sad-modal sad-modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Remove this {confirmRemove.startsWith("signature") ? "signature" : "stamp"}?</h5>
            </div>
            <div className="sad-modal-body" style={{ textAlign: "center" }}>
              <p>
                {confirmRemove.includes(":")
                  ? `${confirmRemove.split(":")[1]} certificates will use the All programmes one again.`
                  : "Certificates will go back to the signature line / drawn stamp only until you upload a new one."}
              </p>
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center" }}>
                <button className="sad-btn-create" style={{ background: "#dc2626" }} onClick={() => remove(confirmRemove)}>
                  Remove
                </button>
                <button className="sad-btn-create" style={{ background: "#f3f4f6", color: "#374151" }} onClick={() => setConfirmRemove("")}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateAssetsModal;
