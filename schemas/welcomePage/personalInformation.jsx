import * as yup from "yup";

export const personalInformationSchema = yup.object().shape({
  name: yup.string("Formato de texto requerido").required("Campo requerido"),
  lastName: yup
    .string("Formato de texto requerido")
    .required("Campo requerido"),
  birthDate: yup.string("Campo requerido").required("Campo requerido"),
  gender: yup.string("Campo requerido").required("Campo requerido"),
});
