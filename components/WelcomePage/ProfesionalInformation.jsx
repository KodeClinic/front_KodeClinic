import clsx from "clsx";
import { useContext } from "react";
import { WelcomePageContext } from "@/context/WelcomePageContext";
import { useFormik } from "formik";
import CustomSelect from "../NewAppointment/SelectInput";
import { profesionalInformationSchema } from "@/schemas/welcomePage/profesionalInformation";
import TwoButtonsModalWelcomePage from "./TwoButtonsModal";

export default function ProfesionalInformation() {
  const { userData, setUserData, setCurrentStep, modal, toggleModal } =
    useContext(WelcomePageContext);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #2196F3",
    }),
  };

  const selectStylesError = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #ef4444",
    }),
  };

  const optionSelect = [
    { value: "physiotherapy", label: "Fisioterápia" },
    { value: "other", label: "Otra" },
  ];

  const modalProps = {
    title: "Actualización de Datos Personales",
    description: "¿Está seguro que desea finalizar el registro?",
    buttonLeft: "Cancelar",
    buttonRight: "Finalizar",
  };

  const onSubmit = () => {
    setUserData({
      ...userData,
      medicalLicense: values.medicalLicense,
      medicalSpeciality: values.medicalSpeciality,
    });
    console.log("la data", userData);
    // setCurrentStep(4);
    toggleModal();
  };

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      medicalLicense: "",
      medicalSpeciality: "",
    },
    validationSchema: profesionalInformationSchema,
    onSubmit,
  });

  return (
    <>
      <div className={clsx("px-8 pt-8")}>
        <div
          className={clsx(
            "min-[360px]:flex-col",
            "justify-center",
            "tracking-wide",
            "text-xl",
            "md:text-3xl",
            "flex md:flex-row",
            "justify-items-center",
            "place-items-center",
            "justify-center",
            "space-x-2"
          )}
        >
          <span className={clsx("text-green_title font-semibold")}>
            {" "}
            Bienvenido a
          </span>
          <span className={clsx("text-blue_button font-semibold", "ml-2")}>
            {" "}
            KodeClinic
          </span>
        </div>
        <div className={clsx("flex justify-center")}>
          <span
            className={clsx(
              "text-blue_gray-700",
              "md:text-base",
              "mt-2",
              "text-center"
            )}
          >
            Antes de continuar completa tu perfil
          </span>
        </div>
        <div
          className={clsx(
            "flex",
            "justify-center",
            "mt-5",
            "text-base md:text-xl",
            "text-blue_gray-700"
          )}
        >
          <p className={clsx("text-center font-semibold")}>
            Información Profesional
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={clsx(
              "mt-10",
              "text-base",
              "md:text-xl",
              "flex-col",
              "space-y-2",
              "m-2",
              "p-2",
              "sm:flex",
              "gap-5"
            )}
          >
            <div
              className={clsx("flex flex-col md:flex-row md:justify-between")}
            >
              <div className={clsx("space-y-2", "ml-2")}>
                <p className={clsx("font-semibold")}> Cédula Profesional</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.medicalLicense && touched.medicalLicense
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="medicalLicense"
                  type="text"
                  placeholder="Cedula Profesional"
                  value={values.medicalLicense}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.medicalLicense && touched.medicalLicense ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.medicalLicense}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={clsx("space-y-2", "ml-2")}>
                <p
                  className={clsx("font-semibold")}
                  htmlFor="medicalSpeciality"
                >
                  {" "}
                  Especialidad
                </p>

                <CustomSelect
                  selectStyles={
                    errors.medicalSpeciality && touched.medicalSpeciality
                      ? selectStylesError
                      : selectStyles
                  }
                  options={optionSelect}
                  value={values.medicalSpeciality}
                  onChange={(value) =>
                    setFieldValue("medicalSpeciality", value.value)
                  }
                />
                {errors.medicalSpeciality && touched.medicalSpeciality ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    Genero requerido
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={clsx("flex justify-end pt-10")}>
              <button
                onClick={handleSubmit}
                className={clsx(
                  "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
                )}
              >
                Siguiente
              </button>
              {modal && <TwoButtonsModalWelcomePage props={modalProps} />}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
