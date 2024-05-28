import { URL_BASE } from "./config";

export function updateClinicalHistory(credentials) {
  const { patientId, templateId, appointmentId, data, token } = credentials;
  const URL = `${URL_BASE}api/clinicalHistories/update/${patientId}/${templateId}/${appointmentId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getClinicalHistory(credentials) {
  const { patientId, appointmentId, token } = credentials;
  const URL = `${URL_BASE}api/clinicalHistories/get/${patientId}/${appointmentId}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function completeClinicalHistory() {
  const { appointmentId, data, token } = credentials;
  const URL = `${URL_BASE}api/clinicalHistories/complete/${appointmentId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
