import clsx from "clsx";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { AppointmentExistingPatientSchema } from "@/schemas/appointmentExistingPatient";
import CustomSelect from "./SelectInput";
import { postAppointmentExistingPatient } from "@/services/appointments";
import SuccessModal from "../SuccessModal";
import { getPatients } from "@/services/specialists";

export default function AppointmentExistingPatient2() {
  const router = useRouter();
  const [patientList, setPatientList] = useState([]);
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

  const optionSelectDuration = [];
  let interval = {};

  for (let i = 6; i < 22; i++) {
    let starthour = i;
    let endhour = i + 1;
    if (endhour < 12) {
      interval = {
        value: `${starthour}:00 - ${endhour}:00 am`,
        label: `${starthour}:00 - ${endhour}:00 am`,
      };
      optionSelectDuration.push(interval);
    } else if (endhour >= 12) {
      interval = {
        value: `${starthour}:00 - ${endhour}:00 pm`,
        label: `${starthour}:00 - ${endhour}:00 pm`,
      };
      optionSelectDuration.push(interval);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    if (!token) {
      alert(
        "Ocurrió un problema al intentar acceder, por favor inténtenlo de nuevo"
      );
      router.push("/LogIn");
    }
    getPatientList(token, id);
  }, []);

  const getPatientList = async (token, id) => {
    const response = await getPatients({ specialistId: id, token: token });
    const dataJSON = await response.json();
    const optionSelectPatients = dataJSON.data.map((patient, index, array) => {
      let fullName = `${patient.patientName} ${patient.patientLastName}`;
      return { value: patient.patientID, label: fullName };
    });
    setPatientList(optionSelectPatients);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    console.log(values);

    try {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      const response = await postAppointmentExistingPatient({
        token: token,
        specialistId: id,
        data: values,
      });
      console.log(values);

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
      patient: "",
      date: "",
      timeLapse: "",
      consultType: "",
      consultingAddress: "",
    },
    validationSchema: AppointmentExistingPatientSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="tab1" className={clsx("tab-content")}>
          <div className={clsx("", "md:flex", "pb-10")}>
            <div className={clsx("text-sm pb-2", "md:text-base")}>
              <p className={clsx("font-semibold")} htmlFor="patient">
                {" "}
                Buscar paciente
              </p>
              <CustomSelect
                selectStyles={
                  errors.patient && touched.patient
                    ? selectStylesError
                    : selectStyles
                }
                options={patientList}
                value={values.patient}
                onChange={(value) => setFieldValue("patient", value.value)}
              />
              {errors.patient && touched.patient ? (
                <p className={clsx("text-sm text-red text-center font-medium")}>
                  Campo requerido
                </p>
              ) : (
                ""
              )}
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
              <div className={clsx("text-sm", "md:text-base", "")}>
                <p className={clsx("font-semibold")} htmlFor="timeLapse">
                  {" "}
                  Horario
                </p>

                <CustomSelect
                  selectStyles={
                    errors.timeLapse && touched.timeLapse
                      ? selectStylesError
                      : selectStyles
                  }
                  options={optionSelectDuration}
                  value={values.timeLapse}
                  onChange={(value) => setFieldValue("timeLapse", value.value)}
                />
                {errors.timeLapse && touched.timeLapse ? (
                  <p
                    className={clsx("text-sm text-red text-center font-medium")}
                  >
                    Campo requerido
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
                    Campo requerido
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
          newPatient={false}
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
