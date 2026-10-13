// Base URL for API requests
// src\BaseURL\BaseURL.js
// Strip stray quotes/whitespace: a build shell that keeps the quotes from
// `set REACT_APP_BASEURL="https://..."` otherwise bakes them into the URL.
export const BASEURL = (process.env.REACT_APP_BASEURL || "")
  .trim()
  .replace(/^["']+|["']+$/g, "")