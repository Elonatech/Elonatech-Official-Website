import { useEffect, useRef } from "react";
import { useAutoRefresh } from "../../components/admin/useAutoRefresh";

// Order-independent fingerprint of a product list.
export const idsKey = (list) =>
  Array.isArray(list)
    ? list
        .map((p) => p._id)
        .sort()
        .join(",")
    : "";

// Keeps a public product page current without a reload, the same way the blog
// grid does: a scheduled product shows up on its own once its time passes.
//
//   probe   - async () => the server's current product list for this page
//   shown   - the list the page is displaying right now
//   onStale - re-run the page's normal loaders (bump a tick in their deps)
//
// It checks every minute and when the visitor returns to the tab. It only
// reloads while the page is showing the full, unfiltered list, so a visitor
// who is searching or has filters applied is never disturbed; they pick up
// the change once they clear the filter.
export const useLiveProducts = ({ probe, shown, onStale }) => {
  const shownKey = idsKey(shown);
  const shownRef = useRef(shownKey);
  const baseline = useRef(null); // fingerprint of the full list we last loaded
  const awaitingReload = useRef(false);

  useEffect(() => {
    shownRef.current = shownKey;
    if (!shownKey) return;
    // First list to arrive, or the list a reload we triggered just brought in.
    if (baseline.current === null || awaitingReload.current) {
      baseline.current = shownKey;
      awaitingReload.current = false;
    }
  }, [shownKey]);

  useAutoRefresh(async () => {
    let fresh;
    try {
      fresh = await probe();
    } catch {
      return; // a failed background check isn't worth bothering the visitor
    }
    const freshKey = idsKey(fresh);
    const base = baseline.current ?? "";
    if (freshKey === base) return;
    if (shownRef.current !== base) return; // visitor is filtering or searching

    awaitingReload.current = true;
    // If the reload changes nothing on screen, don't let this flag swallow a
    // later search as if it were the new baseline.
    setTimeout(() => {
      awaitingReload.current = false;
    }, 10000);
    onStale();
  });
};
