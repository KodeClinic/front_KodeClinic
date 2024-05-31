import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const initialValues = {
  phoneNumber: "",
  address: "",
  colony: "",
  state: "",
  emergencyNameContact_1: "",
  emergencyRelationshipContact_1: "",
  emergencyPhoneNumber_1: "",
  emergencyNameContact_2: "",
  emergencyRelationshipContact_2: "",
  emergencyPhoneNumber_2: "",
};

const InfoSchema = Yup.object().shape({
  emergencyNameContact_1: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  emergencyRelationshipContact_1: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  emergencyPhoneNumber_1: Yup.string()
    .matches(/^[0-9]{10}$/, "El número de teléfono debe tener 10 dígitos")
    .min(10, "El número de teléfono debe tener al menos 10 dígitos")
    .required("El número de teléfono es obligatorio"),
  emergencyNameContact_2: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  emergencyRelationshipContact_2: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  emergencyPhoneNumber_2: Yup.string()
    .matches(/^[0-9]{10}$/, "El número de teléfono debe tener 10 dígitos")
    .min(10, "El número de teléfono debe tener al menos 10 dígitos")
    .required("El número de teléfono es obligatorio"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "El número de teléfono debe tener 10 dígitos")
    .min(10, "El número de teléfono debe tener al menos 10 dígitos")
    .required("El número de teléfono es obligatorio"),
  address: Yup.string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .required("La dirección es obligatoria"),
  state: Yup.string()
    .min(3, "El estado debe tener al menos 3 caracteres")
    .required("El estado es obligatorio"),
  colony: Yup.string()
    .min(3, "La colonia debe tener al menos 3 caracteres")
    .required("La colonia es obligatoria"),
});

export default function EditInformation({ isVisible, closeModal }) {
  if (!isVisible) return null;
  const onSubmit = (values) => {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="px-3 bg-white flex flex-col w-[328px] rounded-[20px] lg:w-[800px] lg:[870px]">
        <div className="flex-col flex text-center items-center ">
          <div className="max-h-[500px]  overflow-y-auto lg:w-full ">
            <div className="flex justify-end w-full mt-2">
              <img
                src="assets/icons/Close-icon.png"
                alt="Close"
                className="w-[20px] h-[20px] absolute"
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="text-center">
              <p
                className="text-2xl
                            "
              >
                Edita tu información personal
              </p>
            </div>
            {/* Formulario */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={InfoSchema}
            >
              {({ errors, touched, handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  className="lg:mx-20 mx-auto items-center bg-white px-8 pt-1 pb-8 mb-4 lg:w-auto lg:p-0"
                >
                  <div className="mb-0">
                    {/* Información de contacto */}
                    <p className="py-4 text-lg">Información de contacto</p>
                    <div className="flex flex-col lg:grid-cols-2 lg:grid lg:gap-4">
                      <Field
                        name="phoneNumber"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="telefono"
                        type="tel"
                        placeholder="Número telefónico"
                        required
                      />
                      <Field
                        name="address"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="direccion"
                        type="text"
                        placeholder="Dirección"
                        required
                      />
                      <Field
                        name="colony"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="colonia"
                        type="text"
                        placeholder="Colonia"
                        required
                      />
                      <Field
                        name="state"
                        className="shadow flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="estado"
                        type="text"
                        placeholder="Estado"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-0">
                    {/* Información de emergencia */}
                    <p className="py-6 text-lg ">Información de Emergencia</p>
                    <div className="flex flex-col lg:grid-cols-3 lg:grid lg:gap-4">
                      <Field
                        name="emergencyNameContact_1"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="contacto_emergencia_1"
                        type="text"
                        placeholder="Contacto de Emergencia 1"
                      />
                      <Field
                        name="emergencyRelationshipContact_1"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="parentezco_1"
                        type="text"
                        placeholder="Parentezco"
                      />
                      <Field
                        name="emergencyPhoneNumber_1"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="telefono_emergencia_1"
                        type="tel"
                        placeholder="Número telefónico 1"
                      />
                      <Field
                        name="emergencyNameContact_2"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="contacto_emergencia_2"
                        type="text"
                        placeholder="Contacto de Emergencia 2"
                      />
                      <Field
                        name="emergencyRelationshipContact_2"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="parentezco_2"
                        type="text"
                        placeholder="Parentezco"
                      />
                      <Field
                        name="emergencyPhoneNumber_2"
                        className="shadow mb-8 flex appearance-none border-2 border-primary_main rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:mb-4"
                        id="telefono_emergencia_2"
                        type="tel"
                        placeholder="Número Telefónico 2"
                      />
                    </div>
                  </div>
                  {/* Botón de guardar */}
                  <button
                    className="bg-green_button w-full lg:w-1/3 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Guardar
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
