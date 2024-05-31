import clsx from "clsx";
import { useContext } from "react";
import { WelcomePageContext } from "@/context/WelcomePageContext";
import { useFormik } from "formik";
import CustomSelect from "../NewAppointment/SelectInput";
import { personalInformationSchema } from "@/schemas/welcomePage/personalInformation";

export default function PersonalInformation() {
  const { userData, setUserData, setCurrentStep } =
    useContext(WelcomePageContext);

  const selectStylesError = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #ef4444",
    }),
  };

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #2196F3",
    }),
  };

  const optionSelect = [
    { value: "male", label: "Hombre" },
    { value: "female", label: "Mujer" },
  ];

  const onSubmit = () => {
    setUserData({
      ...userData,
      name: values.name,
      lastName: values.lastName,
      gender: values.gender,
      birthDate: values.birthDate,
    });
    setCurrentStep(2);
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
      name: "",
      lastName: "",
      gender: "",
      birthDate: "",
    },
    validationSchema: personalInformationSchema,
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
            Información Personal
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
                <p className={clsx("font-semibold")}> Nombre(s)</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.name && touched.name
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="name"
                  type="text"
                  placeholder="Nombre(s)"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className={clsx("space-y-2", "ml-2")}>
                <p className={clsx("font-semibold")}> Apellido(s)</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.lastName && touched.lastName
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="lastName"
                  type="text"
                  placeholder="Apellido(s)"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.lastName}
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
                <p className={clsx("font-semibold")}> Fecha de Nacimiento</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.birthDate && touched.birthDate
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="birthDate"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  value={values.birthDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.birthDate && touched.birthDate ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.birthDate}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <div className={clsx("space-y-2", "ml-2")}>
                  <p className={clsx("font-semibold")} htmlFor="gender">
                    {" "}
                    Sexo
                  </p>

                  <CustomSelect
                    selectStyles={
                      errors.gender && touched.gender
                        ? selectStylesError
                        : selectStyles
                    }
                    options={optionSelect}
                    value={values.gender}
                    onChange={(value) => setFieldValue("gender", value.value)}
                  />
                  {errors.gender && touched.gender ? (
                    <p
                      className={clsx(
                        "text-sm text-red text-center font-medium"
                      )}
                    >
                      Genero requerido
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className={clsx("flex justify-end pt-10")}>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className={clsx(
                      "bg-background font-semibold rounded-md text-blue_button py-2 px-3 text-lg"
                    )}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
