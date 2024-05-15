import { URL_BASE } from "./config";

export function completeInformation() {
  const { specialistId, data, token } = credentials;
  //   const URL = `${URL_BASE}api/medicalRecords/create/${patientId}/${templateId}`; //pendinete definir el endpoint
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
