import axios from "axios";
import { BASEURL } from "../BaseURL/BaseURL";
const getToken = () => JSON.parse(localStorage.getItem("token"));

// Certificates are drawn on the server (see Elonatech-Live-api/lib/certificateRenderer.js)
// so the signature and stamp never reach the browser as separate files; this
// only fetches the finished picture or PDF.
//
// A certificate that carries an _id comes from the admin list, so the
// super-admin endpoints are used (they also work for revoked ones). Anything
// else (the public verify page) uses the public, valid-only endpoints.
const endpoint = (cert, format) => {
  const root = `${BASEURL}/api/v1/certificates`;
  return cert._id ? `${root}/${cert._id}/${format}` : `${root}/render/${encodeURIComponent(cert.code)}/${format}`;
};

const fetchBlob = async (cert, format) => {
  const res = await axios.get(endpoint(cert, format), {
    responseType: "blob",
    headers: cert._id ? { "x-access-token": getToken() } : undefined,
  });
  return res.data;
};

// Object URL for an <img>. The caller should URL.revokeObjectURL it when done.
export const certificatePreviewUrl = async (cert) => URL.createObjectURL(await fetchBlob(cert, "image"));

// A4-landscape PDF holding the whole certificate as one flattened picture
export const certificatePdfBlob = (cert) => fetchBlob(cert, "pdf");
