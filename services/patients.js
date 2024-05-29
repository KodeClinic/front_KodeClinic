import { URL_BASE } from "./config";

export function pxInformation(credentials) {
  const { patientId, token } = credentials;
  const URL = `${URL_BASE}/api/users/patientList/${patientId}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
