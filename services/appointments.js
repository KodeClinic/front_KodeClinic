// import { URL_BASE } from "./config";

export function postAppointmentNewPatient(credentials) {
  const { specialistId, data, token } = credentials;
  const URL = `${process.env.URL_BASE}/api/appointments/createNP/${specialistId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function postAppointmentExistingPatient(credentials) {
  const { specialistId, data, token } = credentials;
  const URL = `${process.env.URL_BASE}/api/appointments/createEP/${specialistId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getSpecialistAppointments(credentials) {
  const { specialistId, token } = credentials;
  const URL = `${process.env.URL_BASE}/api/appointments/getAppointments/${specialistId}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
