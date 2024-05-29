import { URL_BASE } from "./config";

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
  const { specialistId, token, year, month, day } = credentials;
  const URL = `${URL_BASE}/api/appointments/getAppointments/${specialistId}/${year}/${month}/${day}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getAppointmentsbyPatient(credentials) {
  const { patientId, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/getAppointmentsbyPatient/${patientId}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getSpecialistAvailability(credentials) {
  const { specialistId, token, data } = credentials;
  const URL = `${URL_BASE}/api/appointments/getAvailability/${specialistId}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function deleteAppointment(credentials) {
  const { appointmentId, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/deleteAppointment/${appointmentId}`;
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
