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
