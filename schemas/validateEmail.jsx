import * as yup from "yup";

export const verificationEmailSchema = yup.object().shape({
  code: yup.number().required("Campo requerido").min(0).max(9999),
});
