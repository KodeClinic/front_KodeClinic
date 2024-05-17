import clsx from "clsx";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { AppointmentNewPatientSchema } from "@/schemas/appointmentNewPatient";
import CustomSelect from "./SelectInput";
import { postAppointmentNewPatient } from "@/services/appointments";
import SuccessModal from "../SuccessModal";

export default function AppointmentNewPatient() {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      width: 300,
      minHeight: 48,
      borderRadius: 6,
      border: "2px solid #2196F3",
    }),
  };

  const optionSelectAppointment = [
    { value: "therapy", label: "Terapia" },
    { value: "valoration", label: "Valoración" },
  ];

  const optionSelectGender = [
    { value: "male", label: "Hombre" },
    { value: "female", label: "Mujer" },
  ];

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await postAppointmentNewPatient({
        token: token,
        specialistId: id,
        data: values,
      });

      if (response.status === 201) {
        setIsLoading(false);
        setIsFailed(false);
        setSubmitSuccess(true);
      } else if (response.status === 400) {
        setIsLoading(false);
        setIsFailed(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsFailed(true);
    }
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
      cellphone: "",
      email: "",
      date: "",
      startTime: "",
      endTime: "",
      consultType: "",
      consultingAddress: "",
    },
    validationSchema: AppointmentNewPatientSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div id="tab1" className={clsx("tab-content")}>
        <div className={clsx("", "md:flex", "md:space-x-10 ")}>
          <div className={clsx("text-sm pb-2", "md:text-base")}>
            <p className={clsx("font-semibold")}> Nombre(s)</p>
            <input
              className={clsx(
                "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
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
              <p className={clsx("text-sm text-red text-center font-medium")}>
                {errors.name}
              </p>
            ) : (
              ""
            )}
          </div>

          <div
            className={clsx("pt-2 pb-2", "md:pt-0", "text-sm", "md:text-base")}
          >
            <p className={clsx("font-semibold")}> Apellido(s)</p>
            <input
              className={clsx(
                "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
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
              <p className={clsx("text-sm text-red text-center font-medium")}>
                {errors.lastName}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={clsx("", "md:flex", "md:space-x-10 ")}>
          <div className={clsx("pt-2 pb-2")}>
            <div className={clsx("text-sm", "md:text-base")}>
              <p className={clsx("font-semibold")}> Número de Teléfono</p>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  errors.cellphone && touched.cellphone
                    ? "border-red"
                    : "border-primary_main"
                )}
                id="cellphone"
                type="text"
                placeholder="Número de Teléfono"
                value={values.cellphone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cellphone && touched.cellphone ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  {errors.cellphone}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={clsx("pt-2", "pb-2")}>
            <div className={clsx("text-sm", "md:text-base")}>
              <p className={clsx("font-semibold")}>Correo Electrónico</p>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  errors.email && touched.email
                    ? "border-red"
                    : "border-primary_main"
                )}
                id="email"
                type="email"
                placeholder="Correo electrónico"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  {errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={clsx("pt-2", "pb-2 min-[980px]:pb-9")}>
          <div className={clsx("text-sm", "md:text-base")}>
            <p className={clsx("font-semibold")} htmlFor="gender">
              {" "}
              Sexo
            </p>

            <CustomSelect
              selectStyles={selectStyles}
              options={optionSelectGender}
              value={values.gender}
              onChange={(value) => setFieldValue("gender", value.value)}
            />
          </div>
        </div>

        <div className={clsx("", "md:flex", "md:space-x-10")}>
          <div className={clsx("pt-2", "pb-2")}>
            <div className={clsx("text-sm", "md:text-base")}>
              <p className={clsx("font-semibold")}> Fecha para Agendar</p>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  errors.date && touched.date
                    ? "border-red"
                    : "border-primary_main"
                )}
                id="date"
                type="Date"
                placeholder="Número de Teléfono"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.date && touched.date ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  {errors.date}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={clsx("pt-2", "pb-2")}>
            <div className={clsx("text-sm", "md:text-base", "")}>
              <p className={clsx("font-semibold")}> Horario</p>
              <div className="flex">
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded-md w-[136px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.startTime && touched.startTime
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="startTime"
                  type="Time"
                  placeholder=""
                  value={values.startTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <p className="p-2 font-semibold">a</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded-md w-[136px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.endTime && touched.endTime
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="endTime"
                  type="Time"
                  placeholder=""
                  value={values.endTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {(errors.startTime || errors.endTime) &&
              (touched.startTime || errors.endTime) ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  {errors.startTime}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={clsx("", "md:flex", "md:space-x-10")}>
          <div className={clsx("pt-2", "pb-2")}>
            <div className={clsx("text-sm", "md:text-base")}>
              <p className={clsx("font-semibold")} htmlFor="consultType">
                {" "}
                Tipo de Cita
              </p>
              <CustomSelect
                selectStyles={selectStyles}
                options={optionSelectAppointment}
                value={values.consultType}
                onChange={(value) => setFieldValue("consultType", value.value)}
              />
            </div>
          </div>
          <div className={clsx("pt-2")}>
            <div className={clsx("text-sm", "md:text-base")}>
              <p className={clsx("font-semibold")}> Domicilio de Consulta</p>
              <input
                className={clsx(
                  "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  errors.consultingAddress && touched.consultingAddress
                    ? "border-red"
                    : "border-primary_main"
                )}
                id="consultingAddress"
                type="Text"
                placeholder="Domicilio de Consulta"
                value={values.consultingAddress}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.consultingAddress && touched.consultingAddress ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  {errors.consultingAddress}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="grid place-items-center mt-12">
          <button
            className={clsx(
              "border",
              " border-2",
              "rounded-md",
              "py-2 px-6",
              "text-white",
              "bg-green_button",
              "text-[15px] font-medium",
              "md:text-lg",
              "flex justify-center items-center gap-2",
              isLoading ? "opacity-65" : ""
            )}
            type="submit"
            disabled={isLoading}
          >
            <img
              className={clsx(
                "animate-spin h-5 w-5",
                isLoading ? "block" : "hidden"
              )}
              src="/assets/icons/loading-icon.svg"
              alt="loading-icon"
            />
            {isLoading ? "Cargando..." : "Agendar Cita"}
          </button>
          {isFailed && (
            <p className="text-sm font-medium text-red p-2 rounded flex text-center">
              Imposible generar cita, valida que el paciente no esté ya
              registrado o intenta de nuevo más tarde
            </p>
          )}
        </div>
      </div>
      {submitSuccess ? (
        <SuccessModal
          text="Cita guardada con éxito"
          button="Confirmar"
          id={id}
        />
      ) : (
        ""
      )}
    </form>
  );
}
