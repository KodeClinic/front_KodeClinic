import { URL_BASE } from "./config";

export function postRecordsData(credentials) {
  const { patientId, templateId, data, token } = credentials;
  const URL = `${URL_BASE}api/medicalRecords/create/${patientId}/${templateId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
