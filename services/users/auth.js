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

export function validateEmail(credentials) {
  const URL = `${URL_BASE}users/validateEmail`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function createAccount(credentials) {
  const URL = `${URL_BASE}users/createAccount`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}
