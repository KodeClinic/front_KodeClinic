import * as yup from "yup";

export const restorePasswordSchema = yup.object().shape({
  newPassword: yup
    .string("Campo requerido mayor a 5 caracteres")
    .min(5)
    .required("Campo requerido"),
  confirmPassword: yup
    .string("Ambas contraseñas deben de ser iguales")
    .min(5)
    .required("Campo requerido"),
});
