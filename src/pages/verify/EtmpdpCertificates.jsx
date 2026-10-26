import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import { programLabel, programTone, PROGRAMS, formatShortDate, PROGRAMME_FULL_NAME } from "../../utils/certificate";
import "./verifyCertificate.css";

const LIMIT = 20;

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

// The unlisted list of training certificates (ETMPDP and CompTIA), served at /training-certificates. Nothing on the site links here
// and search engines are told not to index it, so it is only reachable by
// someone who has been given the link. Each row opens that person's
// verification page.
const EtmpdpCertificates = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [program, setProgram] = useState("");
  const [state, setState] = useState("loading"); // loading | ready | error | busy

  // Wait for a pause in typing before searching
  useEffect(() => {
    const id = setTimeout(() => setQuery(search.trim()), 350);
    return () => clearTimeout(id);
  }, [search]);

  // A new search or filter starts from page 1
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setPage(1);
  }, [query, program]);

  useEffect(() => {
    let cancelled = false;
    setState("loading");

    axios
      .get(`${BASEURL}/api/v1/certificates/public`, {
        params: { page, limit: LIMIT, ...(query && { q: query }), ...(program && { program }) },
        validateStatus: (s) => s < 500,
      })
      .then((res) => {
        if (cancelled) return;
        if (res.status === 429) return setState("busy");
        if (res.status !== 200) return setState("error");
        setItems(res.data.certificates || []);
        setTotal(res.data.total || 0);
        setCounts(res.data.counts || null);
        setTotalPages(res.data.totalPages || 1);
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, [page, query, program]);

  const filtered = Boolean(query || program);

  return (
    <>
      <Helmet>
        <title>Training Certificates | Elonatech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="vc-page">
        <section className="vc-hero">
          <div className="container">
            <p className="vc-hero-eyebrow">Elonatech · Training</p>
            <h1 className="vc-hero-title">Training Certificates</h1>
            <p className="vc-hero-sub">
              People who have completed an Elonatech training programme, the {PROGRAMME_FULL_NAME} or a CompTIA course. Filter by programme, then select a name to verify their certificate.
            </p>

            {counts && (
              <div className="vc-stats">
                <div className="vc-stat">
                  <strong>{counts.all}</strong>
                  <span>Certificates issued</span>
                </div>
                {PROGRAMS.map((p) => (
                  <div key={p} className={`vc-stat vc-stat-${programTone(p)}`}>
                    <strong>{counts[p] ?? 0}</strong>
                    <span>{programLabel(p)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="vc-body vc-body-wide">
          <div className="vc-tools">
            <input
              type="search"
              className="vc-input"
              placeholder="Search by name or certificate ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search certificates"
            />
            <select
              className="vc-input vc-select"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              aria-label="Filter by programme"
            >
              <option value="">All programmes</option>
              {PROGRAMS.map((p) => (
                <option key={p} value={p}>{programLabel(p)}</option>
              ))}
            </select>
          </div>

          <section aria-live="polite">
            {state === "loading" && items.length === 0 && (
              <div className="vc-card vc-center">
                <div className="vc-spinner" />
                <p>Loading…</p>
              </div>
            )}

            {state === "error" && (
              <div className="vc-card vc-center">
                <p>We couldn't load the list right now. Please try again shortly.</p>
              </div>
            )}
            {state === "busy" && (
              <div className="vc-card vc-center">
                <p>Too many requests. Please wait a minute and try again.</p>
              </div>
            )}

            {state === "ready" && items.length === 0 && (
              <div className="vc-card vc-center">
                <p>{filtered ? "No certificates match this search." : "No certificates have been issued yet."}</p>
              </div>
            )}

            {items.length > 0 && state !== "error" && state !== "busy" && (
              <>
                {filtered && (
                  <p className="vc-count">
                    {total} result{total === 1 ? "" : "s"}
                  </p>
                )}
                <ul className="vc-list" style={{ opacity: state === "loading" ? 0.55 : 1 }}>
                  {items.map((c) => (
                    <li key={c.code}>
                      <Link
                        to={`/verify/${c.code}`}
                        className={`vc-row vc-tone-${programTone(c.program)}`}
                      >
                        <span className="vc-avatar" aria-hidden="true">{initials(c.fullName)}</span>
                        <span className="vc-row-main">
                          <span className="vc-row-name">{c.fullName}</span>
                          <span className="vc-pill">{programLabel(c.program)}</span>
                        </span>
                        <span className="vc-row-meta">
                          <span className="vc-row-date">Completed {formatShortDate(c.completionDate)}</span>
                          <span className="vc-code vc-row-code">{c.code}</span>
                        </span>
                        <span className="vc-row-go" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {totalPages > 1 && (
                  <div className="vc-pager">
                    <button type="button" className="vc-btn" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                      ← Previous
                    </button>
                    <span>
                      Page {page} of {totalPages}
                    </span>
                    <button type="button" className="vc-btn" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default EtmpdpCertificates;
