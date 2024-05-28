import * as yup from "yup";

export const contactInformationSchema = yup.object().shape({
  cellphone: yup
    .string("Formato de texto requerido")
    .required("Campo requerido"),
  address: yup.string("Formato de texto requerido").required("Campo requerido"),
  colony: yup.string("Campo requerido").required("Campo requerido"),
  state: yup.string("Campo requerido").required("Campo requerido"),
});
