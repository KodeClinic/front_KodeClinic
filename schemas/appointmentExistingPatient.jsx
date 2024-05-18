import * as yup from "yup";

export const AppointmentExistingPatientSchema = yup.object().shape({
  patient: yup.string().required("Campo requerido"),
  date: yup.string().required("Campo requerido"),
  startTime: yup.string().required("Campo requerido"),
  endTime: yup.string().required("Campo requerido"),
  consultType: yup.string().required("Campo requerido"),
  consultingAddress: yup.string().required("Campo requerido"),
});
