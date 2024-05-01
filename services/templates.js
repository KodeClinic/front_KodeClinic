import { URL_BASE } from "./config";

export function getbyTemplateId(credentials) {
  const { id, token } = credentials;
  const URL = `${URL_BASE}api/templates/${id}`;
  const options = {
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
