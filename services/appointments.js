import { URL_BASE } from "./config";

export function postAppointmentNewPatient(credentials) {
  const { specialistId, data, token } = credentials;
  const URL = `${URL_BASE}api/appointments/createNP/${specialistId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
