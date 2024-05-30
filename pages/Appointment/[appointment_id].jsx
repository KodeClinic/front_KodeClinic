import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavBarPat from "@/components/NavBarPat";
import PatientBand from "@/components/PatientBand";
import clsx from "clsx";
import Badge from "@/components/Badge";
import Link from "next/link";
import { getUserById } from "@/services/users/auth";
import { getSingleAppointment } from "@/services/appointments";

const props = {
  patient_id: "12345",
  patient_name: "Patricia Hernandez",
  patient_gender: "female",
  specialist_id: "1",
  specialist_name: "Xavier Medina Flores Reinoso",
  specialist_gender: "male",
  timeLapse: "9:00 - 10:00 am",
  appointment_date: {
    y: 2023,
    M: 10,
    D: 20,
    W: 1,
  },
  consultingAddress: "Consultorio",
  consultType: "valoration",
  paymentType: "cash",
  paymentStatus: "paid",
  appointmentStatus: "completed",
  condition: "Fisura",
  clinic_history: {
    evaluation: {},
    treatment: {
      isAvailable: true,
    },
    clinic_notes: {},
  },
};

export default function AppointmentDetails() {
  const router = useRouter();
  const appointmentId = router.query.appointment_id;

  const [pxData, setPxData] = useState({});
  const [specialistData, setSpecialistData] = useState({});
  const [appointmentData, setAppointmentData] = useState({});
  const [clinicalData, setClinicalData] = useState({});

  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  const fetchDataPx = async (id, token) => {
    console.log("se hace fretch cita");
    try {
      //data del Paciente
      const responsePatient = await getUserById({
        id: id,
        token: token,
      });
      const responsePatientJSON = await responsePatient.json();
      setPxData(responsePatientJSON.data);

      //data del Especialista
      const responseSpecialist = await getUserById({
        id: responsePatientJSON.data.patientInformation.specialistId,
        token: token,
      });
      const responseSpecialistJSON = await responseSpecialist.json();
      setSpecialistData(responseSpecialistJSON.data);

      //Data de la cita del paciente
      const responseAppointment = await getSingleAppointment({
        idAppointment: appointmentId,
        token: token,
      });
      const responseAppointmentJSON = await responseAppointment.json();
      setAppointmentData(responseAppointmentJSON.data[0]);
      setClinicalData(responseAppointmentJSON.data[1]);
      console.log("Información de Cita2: ", responseAppointmentJSON.data);
    } catch (error) {
      alert("Ocurrio un error");
    }
  };

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setToken(token);
    setId(id);
    // }

    if (!token) {
      alert("Ocurrio un problema");
    }
    console.log("entra useeffect");
    fetchDataPx(id, token);
  }, []);

  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Detalles de la Cita"} />
      <PatientBand
        patient_name={pxData.name}
        patient_lastname={pxData.lastName}
        patient_gender={pxData.gender}
        patientbirthdate={pxData.birthDate}
        specialist_name={`${specialistData.name} ${specialistData.lastName}`}
        specialist_gender={specialistData.gender}
        cel_Specialist={specialistData.cellphone}
      />
      <section
        className={clsx(
          "px-4 sm:px-14 min-[980px]:px-20 lg:max-w-[1440px] lg:m-auto",
          "py-5"
        )}
      >
        <div
          className={clsx(
            "flex gap-5",
            "w-full drop-shadow-md px-6 py-4 min-[980px]:px-7",
            "bg-white rounded-[20px] py-4 flex flex-col gap-3"
          )}
        >
          {/* <h1>{`Detalles de la cita ${appointmentId}`}</h1> */}
          <h1
            className={clsx(
              "text-[18px] font-bold text-green_title text-center sm:text-2xl"
            )}
          >
            {"Detalles de la cita"}
          </h1>

          {/* Container */}
          <div
            className={clsx(
              "flex flex-col items-center gap-3 min-[980px]:flex-row min-[980px]:justify-between min-[980px]:items-start",
              "border border-blue_gray-100 min-[980px]:border-0",
              "min-[980px]:overflow-x-auto"
            )}
          >
            {/* Fecha */}
            <div
              className={clsx(
                "flex flex-col items-center p-[10px] min-[980px]:border min-[980px]:border-blue_gray-100 "
              )}
            >
              <div>
                <span className={clsx("text-base font-bold sm:text-xl ")}>
                  Fecha
                </span>
                <img
                  className={clsx("py-[10px]")}
                  src="/assets/icons/horizontal_line-icon.svg"
                  alt="line"
                />
              </div>
              <div
                className={clsx("flex flex-col justify-center sm:min-h-[64px]")}
              >
                <span
                  className={clsx(
                    "text-base font-normal sm:text-lg text-nowrap "
                  )}
                >
                  {`${appointmentData.date.day}/${appointmentData.date.month}/${appointmentData.date.year}`}
                </span>
              </div>
            </div>

            {/* Hora */}
            <div
              className={clsx(
                "flex flex-col items-center p-[10px] min-[980px]:border min-[980px]:border-blue_gray-100 "
              )}
            >
              <div>
                <span className={clsx("text-base font-bold sm:text-xl ")}>
                  Hora
                </span>
                <img
                  className={clsx("py-[10px]")}
                  src="/assets/icons/horizontal_line-icon.svg"
                  alt="line"
                />
              </div>
              <div
                className={clsx("flex flex-col justify-center sm:min-h-[64px]")}
              >
                <span
                  className={clsx(
                    "text-base font-normal sm:text-lg text-nowrap"
                  )}
                >
                  {appointmentData.timeLapse}
                </span>
              </div>
            </div>

            {/* Tipo de Cita */}
            <div
              className={clsx(
                "flex flex-col items-center p-[10px] min-[980px]:border min-[980px]:border-blue_gray-100"
              )}
            >
              <div className={clsx(" flex flex-col items-center")}>
                <span className={clsx("text-base font-bold sm:text-xl ")}>
                  Tipo de Cita
                </span>
                <img
                  className={clsx("py-[10px]")}
                  src="/assets/icons/horizontal_line-icon.svg"
                  alt="line"
                />
              </div>
              <div
                className={clsx("flex flex-col justify-center sm:min-h-[64px]")}
              >
                <Badge
                  badgeType={appointmentData.consultType}
                  timeLapse={""}
                  consultingAddress={""}
                />
              </div>
            </div>

            {/* Motivo Consulta */}
            <div
              className={clsx(
                "flex flex-col items-center p-[10px] min-[980px]:border min-[980px]:border-blue_gray-100"
              )}
            >
              <div className={clsx(" flex flex-col items-center")}>
                <span className={clsx("text-base font-bold sm:text-xl ")}>
                  Padecimiento
                </span>
                <img
                  className={clsx("py-[10px]")}
                  src="/assets/icons/horizontal_line-icon.svg"
                  alt="line"
                />
              </div>
              <div
                className={clsx("flex flex-col justify-center sm:min-h-[64px]")}
              >
                <span
                  className={clsx(
                    "text-base font-normal text-center sm:text-lg min-[980px]:min-w-[315px] "
                  )}
                >
                  {clinicalData.values.padecimiento}
                </span>
              </div>
            </div>

            {/* Lugar */}
            <div
              className={clsx(
                "flex flex-col items-center p-[10px] min-[980px]:border min-[980px]:border-blue_gray-100"
              )}
            >
              <div className={clsx(" flex flex-col items-center")}>
                <span className={clsx("text-base font-bold sm:text-xl ")}>
                  Lugar
                </span>
                <img
                  className={clsx("py-[10px]")}
                  src="/assets/icons/horizontal_line-icon.svg"
                  alt="line"
                />
              </div>
              <div
                className={clsx("flex flex-col justify-center sm:min-h-[64px]")}
              >
                <span
                  className={clsx(
                    "text-base font-normal text-center sm:text-lg"
                  )}
                >
                  {appointmentData.consultingAddress}
                </span>
              </div>
            </div>

            {/* Tipo de Cita */}
            {/* <div
              className={clsx(
                "flex flex-col items-center p-[10px] min-[980px]:border min-[980px]:border-blue_gray-100"
              )}
            >
              <div className={clsx(" flex flex-col items-center")}>
                <span className={clsx("text-base font-bold sm:text-xl ")}>
                  Tipo de Cita
                </span>
                <img
                  className={clsx("py-[10px]")}
                  src="/assets/icons/horizontal_line-icon.svg"
                  alt="line"
                />
              </div>
              <div
                className={clsx("flex flex-col justify-center sm:min-h-[64px]")}
              >
                <Badge
                  badgeType={appointmentData.paymentStatus}
                  timeLapse={""}
                  consultingAddress={""}
                />
              </div>
            </div> */}
          </div>

          {/* Trataimiento */}
          <div className={clsx("border border-blue_gray-100 py-5 px-6")}>
            <div className={clsx(" flex flex-col items-center")}>
              <span
                className={clsx(
                  "text-[18px] font-bold  text-center sm:text-2xl text-green_title"
                )}
              >
                Tratamiento
              </span>
              <img
                className={clsx("py-[10px]")}
                src="/assets/icons/horizontal_line-icon.svg"
                alt="line"
              />
            </div>

            {clinicalData.status == "completed" ? (
              <div
                className={clsx(
                  "flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center sm:min-h-[64px] text-center gap-5"
                )}
              >
                <div className={clsx("flex flex-col gap-2")}>
                  <span
                    className={clsx(
                      "text-lg font-semibold text-green_title sm:text-xl"
                    )}
                  >
                    Ejercicios de Rehabilitación
                  </span>
                  <div className={clsx("flex flex-col md:flex-row")}>
                    <p
                      className={clsx(
                        "text-base font-semibold pr-3 text-main_text"
                      )}
                    >
                      Tipo de Ejercicio:
                    </p>
                    <p className={clsx("text-base ")}>
                      {clinicalData.values.tipoEjercicio}
                    </p>
                  </div>
                  <div className={clsx("flex flex-col md:flex-row")}>
                    <p
                      className={clsx(
                        "text-base font-semibold pr-3 text-main_text"
                      )}
                    >
                      Número de repeticiones:
                    </p>
                    <p className={clsx("text-base ")}>
                      {clinicalData.values.noRepeticiones}
                    </p>
                  </div>
                  <div className={clsx("flex flex-col md:flex-row")}>
                    <p
                      className={clsx(
                        "text-base font-semibold pr-3 text-main_text"
                      )}
                    >
                      Periodicidad del Ejercicio:
                    </p>
                    <p className={clsx("text-base ")}>
                      {clinicalData.values.periodicidadEjercicios}
                    </p>
                  </div>
                </div>

                <div className={clsx("flex flex-col gap-2 items-center")}>
                  <span
                    className={clsx(
                      "text-lg font-semibold text-green_title sm:text-xl"
                    )}
                  >
                    Medicación
                  </span>
                  <div className={clsx("flex flex-col md:flex-row")}>
                    <p
                      className={clsx(
                        "text-base font-semibold pr-3 text-main_text"
                      )}
                    >
                      Medicamento:
                    </p>
                    <p className={clsx("text-base ")}>
                      {clinicalData.values.medicacion}
                    </p>
                  </div>
                  <div className={clsx("flex flex-col md:flex-row")}>
                    <p
                      className={clsx(
                        "text-base font-semibold pr-3 text-main_text"
                      )}
                    >
                      Periodicidad:
                    </p>
                    <p className={clsx("text-base ")}>
                      {clinicalData.values.periodicidadMedicacion}
                    </p>
                  </div>
                  <div className={clsx("flex flex-col md:flex-row")}>
                    <p
                      className={clsx(
                        "text-base font-semibold pr-3 text-main_text"
                      )}
                    >
                      Recomendaciones:
                    </p>
                    <p className={clsx("text-base ")}>
                      {clinicalData.values.recomendaciones}
                    </p>
                  </div>
                </div>

                {/* <p className={clsx("text-base font-bold sm:text-xl ")}>
                  Ejercicios movimiento con ligas
                </p>
                <span
                  className={clsx(
                    "text-base font-normal text-center sm:text-lg"
                  )}
                >
                  Ejercer movimiento circulares en las muñecas haciendo uso de
                  las ligas de resistencia. 30 rep por cada dirección X 3
                  series.
                </span> */}
              </div>
            ) : (
              <div
                className={clsx(
                  "flex flex-col justify-center items-center sm:min-h-[64px] text-center gap-5"
                )}
              >
                <span
                  className={clsx(
                    "text-base font-normal text-center sm:text-lg"
                  )}
                >
                  Pendiente - Asiste a tu cita para recibir tus próximas
                  indicaciones
                </span>
                <Link
                  href={""}
                  className={clsx(
                    "px-6 py-2 bg-green_button text-white text-lg font-medium max-w-[160px] rounded-md"
                  )}
                >
                  Pagar mi cita
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
