import { URL_BASE } from "./config";

export function postRecordsData(credentials) {
  const { patientId, templateId, data, token } = credentials;
  const URL = `${URL_BASE}/api/medicalRecords/${templateId}/patients/${patientId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getRecordsData(credentials) {
  const { patientId, templateId, token } = credentials;
  const URL = `${URL_BASE}/api/medicalRecords/${templateId}/patients/${patientId}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
export function updateRecordsData(credentials) {
  // const { patientId, templateId, token, data } = credentials;
  const { patientId, token, data } = credentials;
  const URL = `${URL_BASE}/api/medicalRecords/patients/${patientId}`;
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
