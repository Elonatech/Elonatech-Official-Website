import { useEffect, useRef } from "react";

// Calls `callback` every `intervalMs` while the tab is visible, and once more
// as soon as the admin comes back to the tab. Hidden tabs never poll, so a
// dashboard left open overnight doesn't keep hitting the API.
export const useAutoRefresh = (callback, intervalMs = 60000) => {
  const latest = useRef(callback);

  useEffect(() => {
    latest.current = callback;
  });

  useEffect(() => {
    const run = () => {
      if (document.visibilityState === "visible") latest.current();
    };
    const id = setInterval(run, intervalMs);
    document.addEventListener("visibilitychange", run);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", run);
    };
  }, [intervalMs]);
};
