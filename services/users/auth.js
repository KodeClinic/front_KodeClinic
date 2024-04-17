import { URL_BASE } from "../config";

export function login(credentials) {
  const URL = `${URL_BASE}users/auth/login`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}
