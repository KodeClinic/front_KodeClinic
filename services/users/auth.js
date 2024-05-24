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

export function forgotPassword(credentials) {
  const URL = `${URL_BASE}users/forgotPassword`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function restorePassword(credentials) {
  const URL = `${URL_BASE}users/restorePassword`;
  const options = {
    method: "PATCH",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function sendEmailCode(credentials) {
  const URL = `${URL_BASE}users/sendEmailCode`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function getUserById(credentials) {
  const { id, token } = credentials;
  const URL = `${URL_BASE}api/users/get/${id}`;
  const options = {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      bearerauth: token,
    },
  };
  return fetch(URL, options);
}
