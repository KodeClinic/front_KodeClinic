import { URL_BASE } from "./config";

export function postAppointmentNewPatient(credentials) {
  const { specialistId, data, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/specialists/${specialistId}/newpatient`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function postAppointmentExistingPatient(credentials) {
  const { specialistId, data, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/specialists/${specialistId}/existingpatient`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getSpecialistAppointments(credentials) {
  const { specialistId, token, year, month, day } = credentials;
  const URL = `${URL_BASE}/api/appointments/specialists/${specialistId}/year/${year}/month/${month}/day/${day}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getAppointmentsbyPatient(credentials) {
  const { patientId, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/patients/${patientId}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

//pendiente
export function getSpecialistAvailability(credentials) {
  const { specialistId, token, year, month, day } = credentials;
  const URL = `${URL_BASE}/api/appointments/availability/specialists/${specialistId}/year/${year}/month/${month}/day/${day}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function deleteAppointment(credentials) {
  const { appointmentId, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/${appointmentId}`;
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}

export function getSingleAppointment(credentials) {
  const { idAppointment, token } = credentials;
  const URL = `${URL_BASE}/api/appointments/${idAppointment}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", bearerauth: token },
  };
  return fetch(URL, options);
}
