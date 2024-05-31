import clsx from "clsx";
import { useContext } from "react";
import { WelcomePageContext } from "@/context/WelcomePageContext";
import { useFormik } from "formik";
import CustomSelect from "../NewAppointment/SelectInput";
import { contactInformationSchema } from "@/schemas/welcomePage/contactInformation";

export default function ContactInformation() {
  const { userData, setUserData, setCurrentStep } =
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
    { value: "Aguascalientes", label: "Aguascalientes" },
    { value: "Baja California", label: "Baja California" },
    { value: "Baja California Sur", label: "Baja California Sur" },
    { value: "Campeche", label: "Campeche" },
    { value: "Chiapas", label: "Chiapas" },
    { value: "Chihuahua", label: "Chihuahua" },
    { value: "Ciudad de México", label: "Ciudad de México" },
    { value: "Coahuila", label: "Coahuila" },
    { value: "Colima", label: "Colima" },
    { value: "Durango", label: "Durango" },
    { value: "Estado de México", label: "Estado de México" },
    { value: "Guanajuato", label: "Guanajuato" },
    { value: "Guerrero", label: "Guerrero" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Jalisco", label: "Jalisco" },
    { value: "Michoacán", label: "Michoacán" },
    { value: "Morelos", label: "Morelos" },
    { value: "Nayarit", label: "Nayarit" },
    { value: "Nuevo León", label: "Nuevo León" },
    { value: "Oaxaca", label: "Oaxaca" },
    { value: "Puebla", label: "Puebla" },
    { value: "Querétaro", label: "Querétaro" },
    { value: "Quintana Roo", label: "Quintana Roo" },
    { value: "San Luis Potosí", label: "San Luis Potosí" },
    { value: "Sinaloa", label: "Sinaloa" },
    { value: "Sonora", label: "Sonora" },
    { value: "Tabasco", label: "Tabasco" },
    { value: "Tamaulipas", label: "Tamaulipas" },
    { value: "Tlaxcala", label: "Tlaxcala" },
    { value: "Veracruz", label: "Veracruz" },
    { value: "Yucatán", label: "Yucatán" },
    { value: "Zacatecas", label: "Zacatecas" },
  ];

  const onSubmit = () => {
    setUserData({
      ...userData,
      cellphone: values.cellphone,
      address: values.address,
      colony: values.colony,
      state: values.state,
    });
    setCurrentStep(3);
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
      cellphone: "",
      address: "",
      colony: "",
      state: "",
    },
    validationSchema: contactInformationSchema,
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
            Información de Contacto
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
                <p className={clsx("font-semibold")}> Telefono de Contacto</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.cellphone && touched.cellphone
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="cellphone"
                  type="text"
                  required
                  placeholder="Telefono de contacto"
                  value={values.cellphone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.cellphone && touched.cellphone ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.cellphone}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className={clsx("space-y-2", "ml-2")}>
                <p className={clsx("font-semibold")}> Calle y Número</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.address && touched.address
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="address"
                  type="text"
                  required
                  placeholder="Calle y número"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.address}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div
              className={clsx("flex flex-col md:flex-row md:justify-between")}
            >
              <div className={clsx("space-y-2", "ml-2")}>
                <p className={clsx("font-semibold")}> Colonia</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.colony && touched.colony
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="colony"
                  type="text"
                  required
                  placeholder="Colonia"
                  value={values.colony}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.colony && touched.colony ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.colony}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className={clsx("space-y-2", "ml-2")}>
                <p className={clsx("font-semibold")} htmlFor="state">
                  {" "}
                  Estado
                </p>

                <CustomSelect
                  selectStyles={
                    errors.state && touched.state
                      ? selectStylesError
                      : selectStyles
                  }
                  options={optionSelect}
                  value={values.state}
                  onChange={(value) => setFieldValue("state", value.value)}
                />
                {errors.state && touched.state ? (
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
            <div className={clsx("flex justify-end pt-8")}>
              <button
                onClick={handleSubmit}
                className={clsx(
                  "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
                )}
              >
                Siguiente
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
