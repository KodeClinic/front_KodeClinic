import clsx from "clsx";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AppointmentNewPatientSchema } from "@/schemas/appointmentNewPatient";
import CustomSelect from "./SelectInput";
import { postAppointmentNewPatient } from "@/services/appointments";
import SuccessModal from "../SuccessModal";
import { getSpecialistAvailability } from "@/services/appointments";

export default function AppointmentNewPatient() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

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

  const optionSelectAppointment = [
    { value: "therapy", label: "Terapia" },
    { value: "valoration", label: "Valoración" },
  ];

  const optionSelectGender = [
    { value: "male", label: "Hombre" },
    { value: "female", label: "Mujer" },
  ];

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setToken(token);
    setId(id);
    // }

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);

    try {
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

  const getAvailability = async (date) => {
    let arrayDate = date.split("-");
    let dateObjet = {
      year: +arrayDate[0],
      month: +arrayDate[1],
      day: +arrayDate[2],
    };
    console.log(dateObjet);

    try {
      const res = await getSpecialistAvailability({
        token: token,
        specialistId: id,
        data: dateObjet,
      });
      const dataJSON = await res.json();
      setSchedule(dataJSON.data);
    } catch (error) {
      console.log(error);
      alert("Error al intentar obtener la disponibilidad");
    }
  };

  const onChangeDate = (date) => {
    getAvailability(date);
    console.log(date);
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
      timeLapse: "",
      consultType: "",
      consultingAddress: "",
      birthDate: "",
    },
    validationSchema: AppointmentNewPatientSchema,
    onSubmit,
  });

  return (
    <>
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
              className={clsx(
                "pt-2 pb-2",
                "md:pt-0",
                "text-sm",
                "md:text-base"
              )}
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
          <div className={clsx("md:flex", "md:space-x-10 ")}>
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
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
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
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.email}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "md:flex md:space-x-10",
              "pb-2 pt-2 min-[980px]:pb-9"
            )}
          >
            <div className={clsx("text-sm", "md:text-base")}>
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
                options={optionSelectGender}
                value={values.gender}
                onChange={(value) => setFieldValue("gender", value.value)}
              />
              {errors.gender && touched.gender ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  Genero requerido
                </p>
              ) : (
                ""
              )}
            </div>
            <div className={clsx("pb-2")}>
              <div className={clsx("text-sm", "md:text-base")}>
                <p className={clsx("font-semibold")}> Fecha de Nacimiento</p>
                <input
                  className={clsx(
                    "shadow appearance-none border-2 border-primary_main rounded-md w-[300px] h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    errors.birthDate && touched.birthDate
                      ? "border-red"
                      : "border-primary_main"
                  )}
                  id="birthDate"
                  type="Date"
                  placeholder="Número de Teléfono"
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
            </div>
          </div>

          <div className={clsx("md:flex", "md:space-x-10")}>
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
                  onChange={(event) => {
                    handleChange(event);
                    onChangeDate(event.target.value);
                  }}
                  onBlur={handleBlur}
                />
                {errors.date && touched.date ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.date}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={clsx("pt-2", "pb-2")}>
              <div
                className={clsx(
                  "text-sm",
                  "md:text-base",
                  "transition-all duration-300 ease-linear",
                  values.date != ""
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                )}
              >
                <p className={clsx("font-semibold")} htmlFor="timeLapse">
                  {" "}
                  Tu disponibilidad
                </p>

                <CustomSelect
                  selectStyles={
                    errors.timeLapse && touched.timeLapse
                      ? selectStylesError
                      : selectStyles
                  }
                  options={schedule}
                  value={values.timeLapse}
                  onChange={(value) => setFieldValue("timeLapse", value.value)}
                />
                {errors.timeLapse && touched.timeLapse ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.timeLapse}
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
                  selectStyles={
                    errors.consultType && touched.consultType
                      ? selectStylesError
                      : selectStyles
                  }
                  options={optionSelectAppointment}
                  value={values.consultType}
                  onChange={(value) =>
                    setFieldValue("consultType", value.value)
                  }
                />
                {errors.consultType && touched.consultType ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    {errors.consultType}
                  </p>
                ) : (
                  ""
                )}
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
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
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
      </form>
      {submitSuccess ? (
        <SuccessModal
          newPatient={true}
          text="Cita guardada con éxito"
          button="Confirmar"
          id={id}
        />
      ) : (
        ""
      )}
    </>
  );
}
