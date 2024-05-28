import * as yup from "yup";

export const profesionalInformationSchema = yup.object().shape({
  medicalLicense: yup
    .string("Formato de texto requerido")
    .required("Campo requerido"),
  medicalSpeciality: yup
    .string("Formato de texto requerido")
    .required("Campo requerido"),
});
