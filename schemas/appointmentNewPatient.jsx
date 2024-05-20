import * as yup from "yup";

export const AppointmentNewPatientSchema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  lastName: yup.string().required("Campo requerido"),
  cellphone: yup.string().required("Campo requerido"),
  email: yup
    .string()
    .email("Por favor ingresa un email valido")
    .required("Campo requerido"),
  gender: yup.string().required("Campo requerido"),
  date: yup.string().required("Campo requerido"),
  startTime: yup.string().required("Campo requerido"),
  endTime: yup.string().required("Campo requerido"),
  consultType: yup.string().required("Campo requerido"),
  consultingAddress: yup.string().required("Campo requerido"),
});
