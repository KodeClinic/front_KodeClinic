import * as yup from "yup";

export const sendInformationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingresa un email valido")
    .required("Campo requerido"),
});
