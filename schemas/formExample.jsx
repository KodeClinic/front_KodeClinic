import * as yup from "yup";

export const formExampleSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingresa un email valido")
    .required("Campo requerido"),
  password: yup
    .string("Campo requerido mayor a 5 caracteres")
    .min(5)
    .required("Campo requerido"),
  gender: yup.string("Genero necesario").required("Campo requerido"),
});
