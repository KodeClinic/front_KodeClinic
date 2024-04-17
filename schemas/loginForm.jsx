import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingresa un email valido")
    .required("Campo requerido"),
  password: yup.string().min(5).required("Campo requerido"),
});
