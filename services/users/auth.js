import { URL_BASE } from "../config";

export function login(credentials) {
  const URL = `${URL_BASE}/users/login`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function validateEmail(credentials) {
  const URL = `${URL_BASE}/users/validemail`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function createAccount(credentials) {
  const URL = `${URL_BASE}/users/createaccount`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function forgotPassword(credentials) {
  const URL = `${URL_BASE}/users/forgotpassword`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function restorePassword(credentials) {
  const URL = `${URL_BASE}/users/restorepassword`;
  const options = {
    method: "PATCH",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function sendEmailCode(credentials) {
  const URL = `${URL_BASE}/users/sendemailcode`;
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options);
}

export function getUserById(credentials) {
  const { id, token } = credentials;
  const URL = `${URL_BASE}/api/users/${id}`;
  const options = {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      bearerauth: token,
    },
  };
  return fetch(URL, options);
}

export function moreInformation(credentials) {
  const { email } = credentials;
  const URL = `${URL_BASE}/users/moreInformation/${email}`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(URL, options);
}
