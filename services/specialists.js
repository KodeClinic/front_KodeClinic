import { URL_BASE } from "./config";

export function completeInformation(credentials) {
  const { specialistId, data, token } = credentials;
  const URL = `${URL_BASE}api/users/completeInformation/${specialistId}`; //pendinete definir el endpoint
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getPatients(credentials) {
  const { specialistId, token } = credentials;
  const URL = `${URL_BASE}api/users/patientList/${specialistId}`; //pendinete definir el endpoint
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
