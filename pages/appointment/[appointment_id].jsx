import { useRouter } from "next/router";
import NavBarPat from "@/components/NavBarPat";
import PatientBand from "@/components/PatientBand";
import clsx from "clsx";
import Badge from "@/components/Badge";
import Link from "next/link";

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
  return (
    <main className={clsx("bg-background min-h-screen w-full")}>
      <NavBarPat pageName={"Detalles de la Cita"} />
      <PatientBand
        patient_name={props.patient_name}
        patient_gender={props.patient_gender}
        specialist_name={props.specialist_name}
        specialist_gender={props.specialist_gender}
        cel_Specialist={"33 12 34 56 89"}
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
              "text-[18px] font-bold text-blue_gray-700 text-center sm:text-2xl"
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
                  {"30 /Oct / 2023"}
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
                  {props.timeLapse}
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
                  badgeType={props.consultType}
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
                  Motivo de Consulta
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
                  {
                    "Dolor en pie izquierdo despues de accidente realizando actividad física."
                  }
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
                  {props.consultingAddress}
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
                  badgeType={props.paymentStatus}
                  timeLapse={""}
                  consultingAddress={""}
                />
              </div>
            </div>
          </div>

          {/* Trataimiento */}
          <div className={clsx("border border-blue_gray-100 py-5")}>
            <div className={clsx(" flex flex-col items-center")}>
              <span className={clsx("text-base font-bold sm:text-xl ")}>
                Tratamiento
              </span>
              <img
                className={clsx("py-[10px]")}
                src="/assets/icons/horizontal_line-icon.svg"
                alt="line"
              />
            </div>

            {props.clinic_history.treatment.isAvailable ? (
              <div
                className={clsx(
                  "flex flex-col justify-center items-center sm:min-h-[64px] text-center gap-5"
                )}
              >
                <p className={clsx("text-base font-bold sm:text-xl ")}>
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
                </span>
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
