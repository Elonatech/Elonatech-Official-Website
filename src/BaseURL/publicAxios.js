import axios from "axios";

// axios.create() does not inherit the global 401/403 → logout + redirect
// interceptor from AuthContext. Use this for requests that attach an admin
// token opportunistically on a PUBLIC page, where a rejected token should fall
// back to the public view instead of throwing the visitor to /login.
export const publicAxios = axios.create();
